var ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$l=0,cc=1,Ql=2;var Jr=1,eu=2,ar=3,An=0,Dt=1,Kt=2,Mi=0,cr=1,lc=2,uc=3,hc=4,tu=5;var Ei=100,nu=101,iu=102,ru=103,su=104,ou=200,au=201,cu=202,lu=203,dc=204,fc=205,uu=206,hu=207,du=208,fu=209,pu=210,mu=211,gu=212,_u=213,yu=214,Ys=0,qs=1,Ks=2,Xi=3,js=4,Zs=5,Js=6,$s=7,To=0,xu=1,vu=2,wn=0,pc=1,mc=2,gc=3,_c=4,yc=5,xc=6,vc=7;var Sc=300,Ti=301,lr=302,bo=303,Ao=304,Bn=1e3,Wt=1001,Qs=1002,Ot=1003,Su=1004;var $r=1005;var Xt=1006,wo=1007;var Wn=1008;var Zt=1009,Mc=1010,Ec=1011,ur=1012,Ro=1013,gn=1014,_n=1015,yn=1016,Co=1017,Io=1018,bi=1020,Tc=35902,bc=35899,Ac=1021,wc=1022,xn=1023,zn=1026,Xn=1027,Rc=1028,Po=1029,li=1030,Lo=1031;var No=1033,Qr=33776,es=33777,ts=33778,ns=33779,Oo=35840,Do=35841,Uo=35842,Fo=35843,ko=36196,Bo=37492,zo=37496,Vo=37488,Go=37489,is=37490,Ho=37491,Wo=37808,Xo=37809,Yo=37810,qo=37811,Ko=37812,jo=37813,Zo=37814,Jo=37815,$o=37816,Qo=37817,ea=37818,ta=37819,na=37820,ia=37821,ra=36492,sa=36494,oa=36495,aa=36283,ca=36284,rs=36285,la=36286;var br=2300,eo=2301,Ws=2302,Za=2303,Ja=2400,$a=2401,Qa=2402;var Mu=3200;var ua=0,Eu=1,Yn="",vt="srgb",Ar="srgb-linear",wr="linear",gt="srgb";var Xs=7680;var Tu=519,bu=512,Au=513,wu=514,Cc=515,Ru=516,Cu=517,Ic=518,Pc=519,Iu=35044;var Lc="300 es",cn=2e3,Yi=2001;function Bh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pu(){let n=qi("canvas");return n.style.display="block",n}var _l={},Ki=null;function Nc(...n){let e="THREE."+n.shift();Ki?Ki("log",e,...n):console.log(e,...n)}function Lu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Lu(n);let e="THREE."+n.shift();if(Ki)Ki("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=Lu(n);let e="THREE."+n.shift();if(Ki)Ki("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Mr(...n){let e=n.join(" ");e in _l||(_l[e]=!0,Ze(...n))}function Nu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Ou={[Ys]:Ys,[Ks]:Js,[js]:js,[Xi]:Zs,[qs]:qs,[Js]:Ks,[$s]:$s,[Zs]:Xi},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=1234567,Er=Math.PI/180,ji=180/Math.PI;function hr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Oc(n,e){return(n%e+e)%e}function Vh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gh(n,e,t){return n!==e?(t-n)/(e-n):0}function Tr(n,e,t){return(1-t)*n+t*e}function Hh(n,e,t,i){return Tr(n,e,1-Math.exp(-t*i))}function Wh(n,e=1){return e-Math.abs(Oc(n,e*2)-e)}function Xh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kh(n,e){return n+Math.random()*(e-n)}function jh(n){return n*(.5-Math.random())}function Zh(n){n!==void 0&&(yl=n);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(n){return n*Er}function $h(n){return n*ji}function Qh(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ed(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function td(n,e,t,i,r){let s=Math.cos,o=Math.sin,c=s(t/2),l=o(t/2),a=s((e+i)/2),f=o((e+i)/2),m=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(c*f,l*m,l*d,c*a);break;case"YZY":n.set(l*d,c*f,l*m,c*a);break;case"ZXZ":n.set(l*m,l*d,c*f,c*a);break;case"XZX":n.set(c*f,l*g,l*p,c*a);break;case"YXY":n.set(l*p,c*f,l*g,c*a);break;case"ZYZ":n.set(l*g,l*p,c*f,c*a);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Uc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Du(n,e){if(e.constructor===Float32Array)return n;let t=Uc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Uu(n,e){if(e.constructor===Float32Array)return n;let t=Uc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ss={DEG2RAD:Er,RAD2DEG:ji,generateUUID:hr,clamp:rt,euclideanModulo:Oc,mapLinear:Vh,inverseLerp:Gh,lerp:Tr,damp:Hh,pingpong:Wh,smoothstep:Xh,smootherstep:Yh,randInt:qh,randFloat:Kh,randFloatSpread:jh,seededRandom:Zh,degToRad:Jh,radToDeg:$h,isPowerOfTwo:Qh,ceilPowerOfTwo:ed,floorPowerOfTwo:Dc,setQuaternionFromProperEuler:td,normalize:Uu,denormalize:Du},He=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,c){let l=i[r+0],a=i[r+1],f=i[r+2],m=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(m!==x||l!==d||a!==p||f!==g){let u=l*d+a*p+f*g+m*x;u<0&&(d=-d,p=-p,g=-g,x=-x,u=-u);let h=1-c;if(u<.9995){let y=Math.acos(u),S=Math.sin(y);h=Math.sin(h*y)/S,c=Math.sin(c*y)/S,l=l*h+d*c,a=a*h+p*c,f=f*h+g*c,m=m*h+x*c}else{l=l*h+d*c,a=a*h+p*c,f=f*h+g*c,m=m*h+x*c;let y=1/Math.sqrt(l*l+a*a+f*f+m*m);l*=y,a*=y,f*=y,m*=y}}e[t]=l,e[t+1]=a,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,s,o){let c=i[r],l=i[r+1],a=i[r+2],f=i[r+3],m=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=c*g+f*m+l*p-a*d,e[t+1]=l*g+f*d+a*m-c*p,e[t+2]=a*g+f*p+c*d-l*m,e[t+3]=f*g-c*m-l*d-a*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,l=Math.sin,a=c(i/2),f=c(r/2),m=c(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*m+a*p*g,this._y=a*p*m-d*f*g,this._z=a*f*g+d*p*m,this._w=a*f*m-d*p*g;break;case"YXZ":this._x=d*f*m+a*p*g,this._y=a*p*m-d*f*g,this._z=a*f*g-d*p*m,this._w=a*f*m+d*p*g;break;case"ZXY":this._x=d*f*m-a*p*g,this._y=a*p*m+d*f*g,this._z=a*f*g+d*p*m,this._w=a*f*m-d*p*g;break;case"ZYX":this._x=d*f*m-a*p*g,this._y=a*p*m+d*f*g,this._z=a*f*g-d*p*m,this._w=a*f*m+d*p*g;break;case"YZX":this._x=d*f*m+a*p*g,this._y=a*p*m+d*f*g,this._z=a*f*g-d*p*m,this._w=a*f*m-d*p*g;break;case"XZY":this._x=d*f*m-a*p*g,this._y=a*p*m-d*f*g,this._z=a*f*g+d*p*m,this._w=a*f*m+d*p*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],c=t[5],l=t[9],a=t[2],f=t[6],m=t[10],d=i+c+m;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-a)*p,this._z=(o-r)*p}else if(i>c&&i>m){let p=2*Math.sqrt(1+i-c-m);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+a)/p}else if(c>m){let p=2*Math.sqrt(1+c-i-m);this._w=(s-a)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+m-i-c);this._w=(o-r)/p,this._x=(s+a)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,c=t._x,l=t._y,a=t._z,f=t._w;return this._x=i*f+o*c+r*a-s*l,this._y=r*f+o*l+s*c-i*a,this._z=s*f+o*a+i*l-r*c,this._w=o*f-i*c-r*l-s*a,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(i=-i,r=-r,s=-s,o=-o,c=-c);let l=1-t;if(c<.9995){let a=Math.acos(c),f=Math.sin(a);l=Math.sin(l*a)/f,t=Math.sin(t*a)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,c=e.z,l=e.w,a=2*(o*r-c*i),f=2*(c*t-s*r),m=2*(s*i-o*t);return this.x=t+l*a+o*m-c*f,this.y=i+l*f+c*a-s*m,this.z=r+l*m+s*f-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,c=t.y,l=t.z;return this.x=r*l-s*c,this.y=s*o-i*l,this.z=i*c-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ca=new J,xl=new Yt,Je=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,c,l,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,c,l,a)}set(e,t,i,r,s,o,c,l,a){let f=this.elements;return f[0]=e,f[1]=r,f[2]=c,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],c=i[3],l=i[6],a=i[1],f=i[4],m=i[7],d=i[2],p=i[5],g=i[8],x=r[0],u=r[3],h=r[6],y=r[1],S=r[4],_=r[7],A=r[2],C=r[5],v=r[8];return s[0]=o*x+c*y+l*A,s[3]=o*u+c*S+l*C,s[6]=o*h+c*_+l*v,s[1]=a*x+f*y+m*A,s[4]=a*u+f*S+m*C,s[7]=a*h+f*_+m*v,s[2]=d*x+p*y+g*A,s[5]=d*u+p*S+g*C,s[8]=d*h+p*_+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],l=e[6],a=e[7],f=e[8];return t*o*f-t*c*a-i*s*f+i*c*l+r*s*a-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],l=e[6],a=e[7],f=e[8],m=f*o-c*a,d=c*l-f*s,p=a*s-o*l,g=t*m+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=m*x,e[1]=(r*a-f*i)*x,e[2]=(c*i-r*o)*x,e[3]=d*x,e[4]=(f*t-r*l)*x,e[5]=(r*s-c*t)*x,e[6]=p*x,e[7]=(i*l-a*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,c){let l=Math.cos(s),a=Math.sin(s);return this.set(i*l,i*a,-i*(l*o+a*c)+o+e,-r*a,r*l,-r*(-a*o+l*c)+c+t,0,0,1),this}scale(e,t){return Mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return Mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return Mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new Je,vl=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){let n={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?wr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ar]:{primaries:e,whitePoint:i,transfer:wr,toXYZ:vl,fromXYZ:Sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:vl,fromXYZ:Sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}var it=nd();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ci,to=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ci===void 0&&(Ci=qi("canvas")),Ci.width=e.width,Ci.height=e.height;let r=Ci.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ci}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qi("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},id=0,Zi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(Pa(r[o].image)):s.push(Pa(r[o]))}else s=Pa(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?to.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var rd=0,La=new J,qt=class n extends mn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wt,r=Wt,s=Xt,o=Wn,c=xn,l=Zt,a=n.DEFAULT_ANISOTROPY,f=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=hr(),this.name="",this.source=new Zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=a,this.format=c,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Sc;qt.DEFAULT_ANISOTROPY=1;var ht=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,a=l[0],f=l[4],m=l[8],d=l[1],p=l[5],g=l[9],x=l[2],u=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(m-x)<.01&&Math.abs(g-u)<.01){if(Math.abs(f+d)<.1&&Math.abs(m+x)<.1&&Math.abs(g+u)<.1&&Math.abs(a+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(a+1)/2,_=(p+1)/2,A=(h+1)/2,C=(f+d)/4,v=(m+x)/4,b=(g+u)/4;return S>_&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=v/i):_>A?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=v/s,r=b/s),this.set(i,r,s,t),this}let y=Math.sqrt((u-g)*(u-g)+(m-x)*(m-x)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(u-g)/y,this.y=(m-x)/y,this.z=(d-f)/y,this.w=Math.acos((a+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},no=class extends mn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new qt({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zi(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends no{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Rr=class extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var io=class extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ut=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,c,l,a,f,m,d,p,g,x,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,c,l,a,f,m,d,p,g,x,u)}set(e,t,i,r,s,o,c,l,a,f,m,d,p,g,x,u){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=c,h[13]=l,h[2]=a,h[6]=f,h[10]=m,h[14]=d,h[3]=p,h[7]=g,h[11]=x,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),c=Math.sin(i),l=Math.cos(r),a=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){let d=o*f,p=o*m,g=c*f,x=c*m;t[0]=l*f,t[4]=-l*m,t[8]=a,t[1]=p+g*a,t[5]=d-x*a,t[9]=-c*l,t[2]=x-d*a,t[6]=g+p*a,t[10]=o*l}else if(e.order==="YXZ"){let d=l*f,p=l*m,g=a*f,x=a*m;t[0]=d+x*c,t[4]=g*c-p,t[8]=o*a,t[1]=o*m,t[5]=o*f,t[9]=-c,t[2]=p*c-g,t[6]=x+d*c,t[10]=o*l}else if(e.order==="ZXY"){let d=l*f,p=l*m,g=a*f,x=a*m;t[0]=d-x*c,t[4]=-o*m,t[8]=g+p*c,t[1]=p+g*c,t[5]=o*f,t[9]=x-d*c,t[2]=-o*a,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){let d=o*f,p=o*m,g=c*f,x=c*m;t[0]=l*f,t[4]=g*a-p,t[8]=d*a+x,t[1]=l*m,t[5]=x*a+d,t[9]=p*a-g,t[2]=-a,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*a,g=c*l,x=c*a;t[0]=l*f,t[4]=x-d*m,t[8]=g*m+p,t[1]=m,t[5]=o*f,t[9]=-c*f,t[2]=-a*f,t[6]=p*m+g,t[10]=d-x*m}else if(e.order==="XZY"){let d=o*l,p=o*a,g=c*l,x=c*a;t[0]=l*f,t[4]=-m,t[8]=a*f,t[1]=d*m+x,t[5]=o*f,t[9]=p*m-g,t[2]=g*m-p,t[6]=c*f,t[10]=x*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sd,e,od)}lookAt(e,t,i){let r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),jn.crossVectors(i,$t),jn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),jn.crossVectors(i,$t)),jn.normalize(),ys.crossVectors($t,jn),r[0]=jn.x,r[4]=ys.x,r[8]=$t.x,r[1]=jn.y,r[5]=ys.y,r[9]=$t.y,r[2]=jn.z,r[6]=ys.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],c=i[4],l=i[8],a=i[12],f=i[1],m=i[5],d=i[9],p=i[13],g=i[2],x=i[6],u=i[10],h=i[14],y=i[3],S=i[7],_=i[11],A=i[15],C=r[0],v=r[4],b=r[8],P=r[12],N=r[1],L=r[5],R=r[9],D=r[13],w=r[2],G=r[6],Y=r[10],V=r[14],ne=r[3],X=r[7],ie=r[11],oe=r[15];return s[0]=o*C+c*N+l*w+a*ne,s[4]=o*v+c*L+l*G+a*X,s[8]=o*b+c*R+l*Y+a*ie,s[12]=o*P+c*D+l*V+a*oe,s[1]=f*C+m*N+d*w+p*ne,s[5]=f*v+m*L+d*G+p*X,s[9]=f*b+m*R+d*Y+p*ie,s[13]=f*P+m*D+d*V+p*oe,s[2]=g*C+x*N+u*w+h*ne,s[6]=g*v+x*L+u*G+h*X,s[10]=g*b+x*R+u*Y+h*ie,s[14]=g*P+x*D+u*V+h*oe,s[3]=y*C+S*N+_*w+A*ne,s[7]=y*v+S*L+_*G+A*X,s[11]=y*b+S*R+_*Y+A*ie,s[15]=y*P+S*D+_*V+A*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],c=e[5],l=e[9],a=e[13],f=e[2],m=e[6],d=e[10],p=e[14],g=e[3],x=e[7],u=e[11],h=e[15],y=l*p-a*d,S=c*p-a*m,_=c*d-l*m,A=o*p-a*f,C=o*d-l*f,v=o*m-c*f;return t*(x*y-u*S+h*_)-i*(g*y-u*A+h*C)+r*(g*S-x*A+h*v)-s*(g*_-x*C+u*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],c=e[9],l=e[2],a=e[6],f=e[10];return t*(o*f-c*a)-i*(s*f-c*l)+r*(s*a-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],c=e[5],l=e[6],a=e[7],f=e[8],m=e[9],d=e[10],p=e[11],g=e[12],x=e[13],u=e[14],h=e[15],y=t*c-i*o,S=t*l-r*o,_=t*a-s*o,A=i*l-r*c,C=i*a-s*c,v=r*a-s*l,b=f*x-m*g,P=f*u-d*g,N=f*h-p*g,L=m*u-d*x,R=m*h-p*x,D=d*h-p*u,w=y*D-S*R+_*L+A*N-C*P+v*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/w;return e[0]=(c*D-l*R+a*L)*G,e[1]=(r*R-i*D-s*L)*G,e[2]=(x*v-u*C+h*A)*G,e[3]=(d*C-m*v-p*A)*G,e[4]=(l*N-o*D-a*P)*G,e[5]=(t*D-r*N+s*P)*G,e[6]=(u*_-g*v-h*S)*G,e[7]=(f*v-d*_+p*S)*G,e[8]=(o*R-c*N+a*b)*G,e[9]=(i*N-t*R-s*b)*G,e[10]=(g*C-x*_+h*y)*G,e[11]=(m*_-f*C-p*y)*G,e[12]=(c*P-o*L-l*b)*G,e[13]=(t*L-i*P+r*b)*G,e[14]=(x*S-g*A-u*y)*G,e[15]=(f*A-m*S+d*y)*G,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,c=e.y,l=e.z,a=s*o,f=s*c;return this.set(a*o+i,a*c-r*l,a*l+r*c,0,a*c+r*l,f*c+i,f*l-r*o,0,a*l-r*c,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,c=t._z,l=t._w,a=s+s,f=o+o,m=c+c,d=s*a,p=s*f,g=s*m,x=o*f,u=o*m,h=c*m,y=l*a,S=l*f,_=l*m,A=i.x,C=i.y,v=i.z;return r[0]=(1-(x+h))*A,r[1]=(p+_)*A,r[2]=(g-S)*A,r[3]=0,r[4]=(p-_)*C,r[5]=(1-(d+h))*C,r[6]=(u+y)*C,r[7]=0,r[8]=(g+S)*v,r[9]=(u-y)*v,r[10]=(1-(d+x))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ii.set(r[0],r[1],r[2]).length(),c=Ii.set(r[4],r[5],r[6]).length(),l=Ii.set(r[8],r[9],r[10]).length();s<0&&(o=-o),dn.copy(this);let a=1/o,f=1/c,m=1/l;return dn.elements[0]*=a,dn.elements[1]*=a,dn.elements[2]*=a,dn.elements[4]*=f,dn.elements[5]*=f,dn.elements[6]*=f,dn.elements[8]*=m,dn.elements[9]*=m,dn.elements[10]*=m,t.setFromRotationMatrix(dn),i.x=o,i.y=c,i.z=l,this}makePerspective(e,t,i,r,s,o,c=cn,l=!1){let a=this.elements,f=2*s/(t-e),m=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(c===cn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(c===Yi)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return a[0]=f,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=m,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o,c=cn,l=!1){let a=this.elements,f=2/(t-e),m=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(c===cn)g=-2/(o-s),x=-(o+s)/(o-s);else if(c===Yi)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return a[0]=f,a[4]=0,a[8]=0,a[12]=d,a[1]=0,a[5]=m,a[9]=0,a[13]=p,a[2]=0,a[6]=0,a[10]=g,a[14]=x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ii=new J,dn=new ut,sd=new J(0,0,0),od=new J(1,1,1),jn=new J,ys=new J,$t=new J,Ml=new ut,El=new Yt,Vn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],c=r[8],l=r[1],a=r[5],f=r[9],m=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,a),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,a),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,a),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ad=0,Tl=new J,Pi=new Yt,Ln=new ut,xs=new J,gr=new J,cd=new J,ld=new Yt,bl=new J(1,0,0),Al=new J(0,1,0),wl=new J(0,0,1),Rl={type:"added"},ud={type:"removed"},Li={type:"childadded",child:null},Na={type:"childremoved",child:null},Tt=class n extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new J,t=new Vn,i=new Yt,r=new J(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Je}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return Tl.copy(e).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xs.copy(e):xs.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(gr,xs,this.up):Ln.lookAt(xs,gr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),Li.child=e,this.dispatchEvent(Li),Li.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ud),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let a=0,f=l.length;a<f;a++){let m=l[a];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,a=this.material.length;l<a;l++)c.push(s(e.materials,this.material[l]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];r.animations.push(s(e.animations,l))}}if(t){let c=o(e.geometries),l=o(e.materials),a=o(e.textures),f=o(e.images),m=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),a.length>0&&(i.textures=a),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(c){let l=[];for(let a in c){let f=c[a];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new J(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hd={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,c=this._targetRay,l=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let x of e.hand.values()){let u=t.getJointPose(x,i),h=this._getHandJoint(a,x);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}let f=a.joints["index-finger-tip"],m=a.joints["thumb-tip"],d=f.position.distanceTo(m.position),p=.02,g=.005;a.inputState.pinching&&d>p+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&d<=p-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Oc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Oa(o,s,e+1/3),this.g=Oa(o,s,e),this.b=Oa(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=Fu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return it.workingToColorSpace(Vt.copy(this),e),Math.round(rt(Vt.r*255,0,255))*65536+Math.round(rt(Vt.g*255,0,255))*256+Math.round(rt(Vt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Vt.copy(this),t);let i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),c=Math.min(i,r,s),l,a,f=(c+o)/2;if(c===o)l=0,a=0;else{let m=o-c;switch(a=f<=.5?m/(o+c):m/(2-o-c),o){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=a,e.l=f,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=vt){it.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,r=Vt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(vs);let i=Tr(Zn.h,vs.h,t),r=Tr(Zn.s,vs.s,t),s=Tr(Zn.l,vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new qe;qe.NAMES=Fu;var _i=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fn=new J,Nn=new J,Da=new J,On=new J,Ni=new J,Oi=new J,Cl=new J,Ua=new J,Fa=new J,ka=new J,Ba=new ht,za=new ht,Va=new ht,ei=class n{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Nn.subVectors(i,t),Da.subVectors(e,t);let o=fn.dot(fn),c=fn.dot(Nn),l=fn.dot(Da),a=Nn.dot(Nn),f=Nn.dot(Da),m=o*a-c*c;if(m===0)return s.set(0,0,0),null;let d=1/m,p=(a*l-c*f)*d,g=(o*f-c*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,o,c,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(c,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ba.setScalar(0),za.setScalar(0),Va.setScalar(0),Ba.fromBufferAttribute(e,t),za.fromBufferAttribute(e,i),Va.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ba,s.x),o.addScaledVector(za,s.y),o.addScaledVector(Va,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Nn.subVectors(e,t),fn.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),fn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,c;Ni.subVectors(r,i),Oi.subVectors(s,i),Ua.subVectors(e,i);let l=Ni.dot(Ua),a=Oi.dot(Ua);if(l<=0&&a<=0)return t.copy(i);Fa.subVectors(e,r);let f=Ni.dot(Fa),m=Oi.dot(Fa);if(f>=0&&m<=f)return t.copy(r);let d=l*m-f*a;if(d<=0&&l>=0&&f<=0&&l-f>0)return o=l/(l-f),t.copy(i).addScaledVector(Ni,o);ka.subVectors(e,s);let p=Ni.dot(ka),g=Oi.dot(ka);if(g>=0&&p<=g)return t.copy(s);let x=p*a-l*g;if(x<=0&&a>=0&&g<=0)return c=a/(a-g),t.copy(i).addScaledVector(Oi,c);let u=f*g-p*m;if(u<=0&&m-f>=0&&p-g>=0)return Cl.subVectors(s,r),c=(m-f)/(m-f+(p-g)),t.copy(r).addScaledVector(Cl,c);let h=1/(u+x+d);return o=x*h,c=d*h,t.copy(i).addScaledVector(Ni,o).addScaledVector(Oi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Ms.subVectors(this.max,_r),Di.subVectors(e.a,_r),Ui.subVectors(e.b,_r),Fi.subVectors(e.c,_r),Jn.subVectors(Ui,Di),$n.subVectors(Fi,Ui),fi.subVectors(Di,Fi);let t=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!Ga(t,Di,Ui,Fi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Di,Ui,Fi,Ms))?!1:(Es.crossVectors(Jn,$n),t=[Es.x,Es.y,Es.z],Ga(t,Di,Ui,Fi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dn=[new J,new J,new J,new J,new J,new J,new J,new J],pn=new J,Ss=new nn,Di=new J,Ui=new J,Fi=new J,Jn=new J,$n=new J,fi=new J,_r=new J,Ms=new J,Es=new J,pi=new J;function Ga(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){pi.fromArray(n,s);let c=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=e.dot(pi),a=t.dot(pi),f=i.dot(pi);if(Math.max(-Math.max(l,a,f),Math.min(l,a,f))>c)return!1}return!0}var At=new J,Ts=new He,dd=0,ln=class extends mn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=e!==void 0?Uc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Du(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Uu(e,this.array)}};var Ir=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Pr=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},fd=new nn,yr=new J,Ha=new J,ti=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Ha)),this.expandByPoint(yr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pd=0,an=new ut,Wa=new Tt,ki=new J,Qt=new nn,xr=new nn,Nt=new J,wt=class n extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bh(e)?Pr:Ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){let i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let c=t[s];xr.setFromBufferAttribute(c),this.morphTargetsRelative?(Nt.addVectors(Qt.min,xr.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,xr.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint(xr.min),Qt.expandByPoint(xr.max))}Qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){let c=t[s],l=this.morphTargetsRelative;for(let a=0,f=c.count;a<f;a++)Nt.fromBufferAttribute(c,a),l&&(ki.fromBufferAttribute(e,a),Nt.add(ki)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let c=[],l=[],a=new Uint8Array(i.count);for(let P=0;P<i.count;P++)c[P]=new J,l[P]=new J;let f=new J,m=new J,d=new J,p=new He,g=new He,x=new He,u=new J,h=new J;function y(P,N,L){a[P]=a[N]=a[L]=1,f.fromBufferAttribute(i,P),m.fromBufferAttribute(i,N),d.fromBufferAttribute(i,L),p.fromBufferAttribute(s,P),g.fromBufferAttribute(s,N),x.fromBufferAttribute(s,L),m.sub(f),d.sub(f),g.sub(p),x.sub(p);let R=1/(g.x*x.y-x.x*g.y);isFinite(R)&&(u.copy(m).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(R),h.copy(d).multiplyScalar(g.x).addScaledVector(m,-x.x).multiplyScalar(R),c[P].add(u),c[N].add(u),c[L].add(u),l[P].add(h),l[N].add(h),l[L].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,N=S.length;P<N;++P){let L=S[P],R=L.start,D=L.count;for(let w=R,G=R+D;w<G;w+=3)y(e.getX(w+0),e.getX(w+1),e.getX(w+2))}let _=new J,A=new J,C=new J,v=new J;function b(P){C.fromBufferAttribute(r,P),v.copy(C);let N=c[P];_.copy(N),_.sub(C.multiplyScalar(C.dot(N))).normalize(),A.crossVectors(v,N);let R=A.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,N=i.count;P<N;++P)a[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new J,s=new J,o=new J,c=new J,l=new J,a=new J,f=new J,m=new J;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),u=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,u),f.subVectors(o,s),m.subVectors(r,s),f.cross(m),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),a.fromBufferAttribute(i,u),c.add(f),l.add(f),a.add(f),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(u,a.x,a.y,a.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),m.subVectors(r,s),f.cross(m),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(c,l){let a=c.array,f=c.itemSize,m=c.normalized,d=new a.constructor(l.length*f),p=0,g=0;for(let x=0,u=l.length;x<u;x++){c.isInterleavedBufferAttribute?p=l[x]*c.data.stride+c.offset:p=l[x]*f;for(let h=0;h<f;h++)d[g++]=a[p++]}return new ln(d,f,m)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let c in r){let l=r[c],a=e(l,i);t.setAttribute(c,a)}let s=this.morphAttributes;for(let c in s){let l=[],a=s[c];for(let f=0,m=a.length;f<m;f++){let d=a[f],p=e(d,i);l.push(p)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,l=o.length;c<l;c++){let a=o[c];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let a in l)l[a]!==void 0&&(e[a]=l[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let a=i[l];e.data.attributes[l]=a.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let a=this.morphAttributes[l],f=[];for(let m=0,d=a.length;m<d;m++){let p=a[m];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let a in r){let f=r[a];this.setAttribute(a,f.clone(t))}let s=e.morphAttributes;for(let a in s){let f=[],m=s[a];for(let d=0,p=m.length;d<p;d++)f.push(m[d].clone(t));this.morphAttributes[a]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,f=o.length;a<f;a++){let m=o[a];this.addGroup(m.start,m.count,m.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xa=new J,md=new J,gd=new Je,en=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Xa.subVectors(i,t).cross(md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Xa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gd.getNormalMatrix(e),r=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_d=0,En=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=cr,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let c in s){let l=s[c];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new en().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Un=new J,Ya=new J,bs=new J,As=new J,ni=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ya.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),As.copy(this.origin).sub(Ya);let s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),c=As.dot(this.direction),l=-As.dot(bs),a=As.lengthSq(),f=Math.abs(1-o*o),m,d,p,g;if(f>0)if(m=o*l-c,d=o*c-l,g=s*f,m>=0)if(d>=-g)if(d<=g){let x=1/f;m*=x,d*=x,p=m*(m+o*d+2*c)+d*(o*m+d+2*l)+a}else d=s,m=Math.max(0,-(o*d+c)),p=-m*m+d*(d+2*l)+a;else d=-s,m=Math.max(0,-(o*d+c)),p=-m*m+d*(d+2*l)+a;else d<=-g?(m=Math.max(0,-(-o*s+c)),d=m>0?-s:Math.min(Math.max(-s,-l),s),p=-m*m+d*(d+2*l)+a):d<=g?(m=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+a):(m=Math.max(0,-(o*s+c)),d=m>0?s:Math.min(Math.max(-s,-l),s),p=-m*m+d*(d+2*l)+a);else d=o>0?-s:s,m=Math.max(0,-(o*d+c)),p=-m*m+d*(d+2*l)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Ya).addScaledVector(bs,d),p}intersectSphere(e,t){if(e.radius<0)return null;Un.subVectors(e.center,this.origin);let i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),c=i-o,l=i+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,c,l,a=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,d=this.origin;return a>=0?(i=(e.min.x-d.x)*a,r=(e.max.x-d.x)*a):(i=(e.max.x-d.x)*a,r=(e.min.x-d.x)*a),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),m>=0?(c=(e.min.z-d.z)*m,l=(e.max.z-d.z)*m):(c=(e.max.z-d.z)*m,l=(e.min.z-d.z)*m),i>l||c>r)||((c>i||i!==i)&&(i=c),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,c=this.direction,l=c.x,a=c.y,f=c.z,m=e.x-o.x,d=e.y-o.y,p=e.z-o.z,g=t.x-o.x,x=t.y-o.y,u=t.z-o.z,h=i.x-o.x,y=i.y-o.y,S=i.z-o.z,_=Math.abs(l),A=Math.abs(a),C=Math.abs(f),v,b,P,N,L,R,D,w,G,Y,V,ne;if(_>=A&&_>=C?(P=l,R=m,G=g,ne=h,l>=0?(v=a,b=f,N=d,L=p,D=x,w=u,Y=y,V=S):(v=f,b=a,N=p,L=d,D=u,w=x,Y=S,V=y)):A>=C?(P=a,R=d,G=x,ne=y,a>=0?(v=f,b=l,N=p,L=m,D=u,w=g,Y=S,V=h):(v=l,b=f,N=m,L=p,D=g,w=u,Y=h,V=S)):(P=f,R=p,G=u,ne=S,f>=0?(v=l,b=a,N=m,L=d,D=g,w=x,Y=h,V=y):(v=a,b=l,N=d,L=m,D=x,w=g,Y=y,V=h)),P===0)return null;let X=v/P,ie=b/P,oe=1/P,Se=N-X*R,Te=L-ie*R,Q=D-X*G,H=w-ie*G,K=Y-X*ne,le=V-ie*ne,se=K*H-le*Q,me=Se*le-Te*K,Oe=Q*Te-H*Se;if(r){if(se<0||me<0||Oe<0)return null}else if((se<0||me<0||Oe<0)&&(se>0||me>0||Oe>0))return null;let Le=se+me+Oe;if(Le===0)return null;let Ve=oe*(se*R+me*G+Oe*ne);return(Le>0?Ve<0:Ve>0)?null:this.at(Ve/Le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Il=new ut,mi=new ni,ws=new ti,Pl=new J,Rs=new J,Cs=new J,Is=new J,qa=new J,Ps=new J,Ll=new J,Ls=new J,jt=class extends Tt{constructor(e=new wt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let c=this.morphTargetInfluences;if(s&&c){Ps.set(0,0,0);for(let l=0,a=s.length;l<a;l++){let f=c[l],m=s[l];f!==0&&(qa.fromBufferAttribute(m,e),o?Ps.addScaledVector(qa,f):Ps.addScaledVector(qa.sub(t),f))}t.add(Ps)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(ws.containsPoint(mi.origin)===!1&&(mi.intersectSphere(ws,Pl)===null||mi.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Il.copy(s).invert(),mi.copy(e.ray).applyMatrix4(Il),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,c=s.index,l=s.attributes.position,a=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,d=s.groups,p=s.drawRange;if(c!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let u=d[g],h=o[u.materialIndex],y=Math.max(u.start,p.start),S=Math.min(c.count,Math.min(u.start+u.count,p.start+p.count));for(let _=y,A=S;_<A;_+=3){let C=c.getX(_),v=c.getX(_+1),b=c.getX(_+2);r=Ns(this,h,e,i,a,f,m,C,v,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let u=g,h=x;u<h;u+=3){let y=c.getX(u),S=c.getX(u+1),_=c.getX(u+2);r=Ns(this,o,e,i,a,f,m,y,S,_),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let u=d[g],h=o[u.materialIndex],y=Math.max(u.start,p.start),S=Math.min(l.count,Math.min(u.start+u.count,p.start+p.count));for(let _=y,A=S;_<A;_+=3){let C=_,v=_+1,b=_+2;r=Ns(this,h,e,i,a,f,m,C,v,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let u=g,h=x;u<h;u+=3){let y=u,S=u+1,_=u+2;r=Ns(this,o,e,i,a,f,m,y,S,_),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}};function yd(n,e,t,i,r,s,o,c){let l;if(e.side===Dt?l=i.intersectTriangle(o,s,r,!0,c):l=i.intersectTriangle(r,s,o,e.side===An,c),l===null)return null;Ls.copy(c),Ls.applyMatrix4(n.matrixWorld);let a=t.ray.origin.distanceTo(Ls);return a<t.near||a>t.far?null:{distance:a,point:Ls.clone(),object:n}}function Ns(n,e,t,i,r,s,o,c,l,a){n.getVertexPosition(c,Rs),n.getVertexPosition(l,Cs),n.getVertexPosition(a,Is);let f=yd(n,e,t,i,Rs,Cs,Is,Ll);if(f){let m=new J;ei.getBarycoord(Ll,Rs,Cs,Is,m),r&&(f.uv=ei.getInterpolatedAttribute(r,c,l,a,m,new He)),s&&(f.uv1=ei.getInterpolatedAttribute(s,c,l,a,m,new He)),o&&(f.normal=ei.getInterpolatedAttribute(o,c,l,a,m,new J),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a:c,b:l,c:a,normal:new J,materialIndex:0};ei.getNormal(Rs,Cs,Is,d.normal),f.face=d,f.barycoord=m}return f}var $i=class extends qt{constructor(e=null,t=1,i=1,r,s,o,c,l,a=Ot,f=Ot,m,d){super(null,o,c,l,a,f,r,s,m,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gi=new ti,xd=new He(.5,.5),Os=new J,Tn=class{constructor(e=new en,t=new en,i=new en,r=new en,s=new en,o=new en){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn,i=!1){let r=this.planes,s=e.elements,o=s[0],c=s[1],l=s[2],a=s[3],f=s[4],m=s[5],d=s[6],p=s[7],g=s[8],x=s[9],u=s[10],h=s[11],y=s[12],S=s[13],_=s[14],A=s[15];if(r[0].setComponents(a-o,p-f,h-g,A-y).normalize(),r[1].setComponents(a+o,p+f,h+g,A+y).normalize(),r[2].setComponents(a+c,p+m,h+x,A+S).normalize(),r[3].setComponents(a-c,p-m,h-x,A-S).normalize(),i)r[4].setComponents(l,d,u,_).normalize(),r[5].setComponents(a-l,p-d,h-u,A-_).normalize();else if(r[4].setComponents(a-l,p-d,h-u,A-_).normalize(),t===cn)r[5].setComponents(a+l,p+d,h+u,A+_).normalize();else if(t===Yi)r[5].setComponents(l,d,u,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);let t=xd.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Os.x=r.normal.x>0?e.max.x:e.min.x,Os.y=r.normal.y>0?e.max.y:e.min.y,Os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nl=new ut,ro=class n{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Nl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Tn),i[r].setFromProjectionMatrix(Nl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Tn),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Qi=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},so=new J,oo=new J,Ol=new ut,vr=new ni,Ds=new ti,Ka=new J,Dl=new J,ao=class extends Tt{constructor(e=new wt,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)so.fromBufferAttribute(t,r-1),oo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=so.distanceTo(oo);e.setAttribute("lineDistance",new tt(i,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;Ol.copy(r).invert(),vr.copy(e.ray).applyMatrix4(Ol);let c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,a=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,u=g-1;x<u;x+=a){let h=f.getX(x),y=f.getX(x+1),S=Us(this,e,vr,l,h,y,x);S&&t.push(S)}if(this.isLineLoop){let x=f.getX(g-1),u=f.getX(p),h=Us(this,e,vr,l,x,u,g-1);h&&t.push(h)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,u=g-1;x<u;x+=a){let h=Us(this,e,vr,l,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){let x=Us(this,e,vr,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Us(n,e,t,i,r,s,o){let c=n.geometry.attributes.position;if(so.fromBufferAttribute(c,r),oo.fromBufferAttribute(c,s),t.distanceSqToSegment(so,oo,Ka,Dl)>i)return;Ka.applyMatrix4(n.matrixWorld);let a=e.ray.origin.distanceTo(Ka);if(!(a<e.near||a>e.far))return{distance:a,point:Dl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ul=new J,Fl=new J,Lr=class extends ao{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ul.fromBufferAttribute(t,r),Fl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ul.distanceTo(Fl);e.setAttribute("lineDistance",new tt(i,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var er=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kl=new ut,ec=new ni,Fs=new ti,ks=new J,Nr=class extends Tt{constructor(e=new wt,t=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(r),Fs.radius+=s,e.ray.intersectsSphere(Fs)===!1)return;kl.copy(r).invert(),ec.copy(e.ray).applyMatrix4(kl);let c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,a=i.index,m=i.attributes.position;if(a!==null){let d=Math.max(0,o.start),p=Math.min(a.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let u=a.getX(g);ks.fromBufferAttribute(m,u),Bl(ks,u,l,r,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let g=d,x=p;g<x;g++)ks.fromBufferAttribute(m,g),Bl(ks,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Bl(n,e,t,i,r,s,o){let c=ec.distanceSqToPoint(n);if(c<t){let l=new J;ec.closestPointToPoint(n,l),l.applyMatrix4(i);let a=r.ray.origin.distanceTo(l);if(a<r.near||a>r.far)return;s.push({distance:a,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Or=class extends qt{constructor(e=[],t=Ti,i,r,s,o,c,l,a,f){super(e,t,i,r,s,o,c,l,a,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Hn=class extends qt{constructor(e,t,i=gn,r,s,o,c=Ot,l=Ot,a,f=zn,m=1){if(f!==zn&&f!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:m};super(d,r,s,o,c,l,f,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dr=class extends Hn{constructor(e,t=gn,i=Ti,r,s,o=Ot,c=Ot,l,a=zn){let f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,i,r,s,o,c,l,a),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ur=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ii=class n extends wt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],a=[],f=[],m=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(m,2));function g(x,u,h,y,S,_,A,C,v,b,P){let N=_/v,L=A/b,R=_/2,D=A/2,w=C/2,G=v+1,Y=b+1,V=0,ne=0,X=new J;for(let ie=0;ie<Y;ie++){let oe=ie*L-D;for(let Se=0;Se<G;Se++){let Te=Se*N-R;X[x]=Te*y,X[u]=oe*S,X[h]=w,a.push(X.x,X.y,X.z),X[x]=0,X[u]=0,X[h]=C>0?1:-1,f.push(X.x,X.y,X.z),m.push(Se/v),m.push(1-ie/b),V+=1}}for(let ie=0;ie<b;ie++)for(let oe=0;oe<v;oe++){let Se=d+oe+G*ie,Te=d+oe+G*(ie+1),Q=d+(oe+1)+G*(ie+1),H=d+(oe+1)+G*ie;l.push(Se,Te,H),l.push(Te,Q,H),ne+=6}c.addGroup(p,ne,P),p+=ne,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tr=class n extends wt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:l};let a=this;r=Math.floor(r),s=Math.floor(s);let f=[],m=[],d=[],p=[],g=0,x=[],u=i/2,h=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function y(){let _=new J,A=new J,C=0,v=(t-e)/i;for(let b=0;b<=s;b++){let P=[],N=b/s,L=N*(t-e)+e;for(let R=0;R<=r;R++){let D=R/r,w=D*l+c,G=Math.sin(w),Y=Math.cos(w);A.x=L*G,A.y=-N*i+u,A.z=L*Y,m.push(A.x,A.y,A.z),_.set(G,v,Y).normalize(),d.push(_.x,_.y,_.z),p.push(D,1-N),P.push(g++)}x.push(P)}for(let b=0;b<r;b++)for(let P=0;P<s;P++){let N=x[P][b],L=x[P+1][b],R=x[P+1][b+1],D=x[P][b+1];(e>0||P!==0)&&(f.push(N,L,D),C+=3),(t>0||P!==s-1)&&(f.push(L,R,D),C+=3)}a.addGroup(h,C,0),h+=C}function S(_){let A=g,C=new He,v=new J,b=0,P=_===!0?e:t,N=_===!0?1:-1;for(let R=1;R<=r;R++)m.push(0,u*N,0),d.push(0,N,0),p.push(.5,.5),g++;let L=g;for(let R=0;R<=r;R++){let w=R/r*l+c,G=Math.cos(w),Y=Math.sin(w);v.x=P*Y,v.y=u*N,v.z=P*G,m.push(v.x,v.y,v.z),d.push(0,N,0),C.x=G*.5+.5,C.y=Y*.5*N+.5,p.push(C.x,C.y),g++}for(let R=0;R<r;R++){let D=A+R,w=L+R;_===!0?f.push(w,w+1,D):f.push(w+1,w,D),b+=3}a.addGroup(h,b,_===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fr=class n extends tr{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,i,r,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};function vd(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=ku(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let c,l,a;if(i&&(s=bd(n,e,s,t)),n.length>80*t){c=n[0],l=n[1];let f=c,m=l;for(let d=t;d<r;d+=t){let p=n[d],g=n[d+1];p<c&&(c=p),g<l&&(l=g),p>f&&(f=p),g>m&&(m=g)}a=Math.max(f-c,m-l),a=a!==0?32767/a:0}return kr(s,o,t,c,l,a,0),o}function ku(n,e,t,i,r){let s;if(r===Ud(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=zl(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=zl(o/i|0,n[o],n[o+1],s);return s&&nr(s,s.next)&&(zr(s),s=s.next),s}function yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nr(t,t.next)||Et(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Id(n,i,r,s);let c=n;for(;n.prev!==n.next;){let l=n.prev,a=n.next;if(s?Md(n,i,r,s):Sd(n)){e.push(l.i,n.i,a.i),zr(n),n=a.next,c=a.next;continue}if(n=a,n===c){o?o===1?(n=Ed(yi(n),e),kr(n,e,t,i,r,s,2)):o===2&&Td(n,e,t,i,r,s):kr(yi(n),e,t,i,r,s,1);break}}}function Sd(n){let e=n.prev,t=n,i=n.next;if(Et(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,c=e.y,l=t.y,a=i.y,f=Math.min(r,s,o),m=Math.min(c,l,a),d=Math.max(r,s,o),p=Math.max(c,l,a),g=i.next;for(;g!==e;){if(g.x>=f&&g.x<=d&&g.y>=m&&g.y<=p&&Sr(r,c,s,l,o,a,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Md(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Et(r,s,o)>=0)return!1;let c=r.x,l=s.x,a=o.x,f=r.y,m=s.y,d=o.y,p=Math.min(c,l,a),g=Math.min(f,m,d),x=Math.max(c,l,a),u=Math.max(f,m,d),h=tc(p,g,e,t,i),y=tc(x,u,e,t,i),S=n.prevZ,_=n.nextZ;for(;S&&S.z>=h&&_&&_.z<=y;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=u&&S!==r&&S!==o&&Sr(c,f,l,m,a,d,S.x,S.y)&&Et(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=u&&_!==r&&_!==o&&Sr(c,f,l,m,a,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=h;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=u&&S!==r&&S!==o&&Sr(c,f,l,m,a,d,S.x,S.y)&&Et(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=u&&_!==r&&_!==o&&Sr(c,f,l,m,a,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ed(n,e){let t=n;do{let i=t.prev,r=t.next.next;!nr(i,r)&&zu(i,t,t.next,r)&&Br(i,r)&&Br(r,i)&&(e.push(i.i,t.i,r.i),zr(t),zr(t.next),t=n=r),t=t.next}while(t!==n);return yi(t)}function Td(n,e,t,i,r,s){let o=n;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&Nd(o,c)){let l=Vu(o,c);o=yi(o,o.next),l=yi(l,l.next),kr(o,e,t,i,r,s,0),kr(l,e,t,i,r,s,0);return}c=c.next}o=o.next}while(o!==n)}function bd(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let c=e[s]*i,l=s<o-1?e[s+1]*i:n.length,a=ku(n,c,l,i,!1);a===a.next&&(a.steiner=!0),r.push(Ld(a))}r.sort(Ad);for(let s=0;s<r.length;s++)t=wd(r[s],t);return t}function Ad(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function wd(n,e){let t=Rd(n,e);if(!t)return e;let i=Vu(t,n);return yi(i,i.next),yi(t,t.next)}function Rd(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(nr(n,t))return t;do{if(nr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let m=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=i&&m>s&&(s=m,o=t.x<t.next.x?t:t.next,m===i))return o}t=t.next}while(t!==e);if(!o)return null;let c=o,l=o.x,a=o.y,f=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Bu(r<a?i:s,r,l,a,r<a?s:i,r,t.x,t.y)){let m=Math.abs(r-t.y)/(i-t.x);Br(t,n)&&(m<f||m===f&&(t.x>o.x||t.x===o.x&&Cd(o,t)))&&(o=t,f=m)}t=t.next}while(t!==c);return o}function Cd(n,e){return Et(n.prev,n,e.prev)<0&&Et(e.next,n,n.next)<0}function Id(n,e,t,i){let r=n;do r.z===0&&(r.z=tc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Pd(r)}function Pd(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,c=0;for(let a=0;a<t&&(c++,o=o.nextZ,!!o);a++);let l=t;for(;c>0||l>0&&o;)c!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,c--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function tc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ld(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bu(n,e,t,i,r,s,o,c){return(r-o)*(e-c)>=(n-o)*(s-c)&&(n-o)*(i-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(r-o)*(i-c)}function Sr(n,e,t,i,r,s,o,c){return!(n===o&&e===c)&&Bu(n,e,t,i,r,s,o,c)}function Nd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Od(n,e)&&(Br(n,e)&&Br(e,n)&&Dd(n,e)&&(Et(n.prev,n,e.prev)||Et(n,e.prev,e))||nr(n,e)&&Et(n.prev,n,n.next)>0&&Et(e.prev,e,e.next)>0)}function Et(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nr(n,e){return n.x===e.x&&n.y===e.y}function zu(n,e,t,i){let r=zs(Et(n,e,t)),s=zs(Et(n,e,i)),o=zs(Et(t,i,n)),c=zs(Et(t,i,e));return!!(r!==s&&o!==c||r===0&&Bs(n,t,e)||s===0&&Bs(n,i,e)||o===0&&Bs(t,n,i)||c===0&&Bs(t,e,i))}function Bs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function zs(n){return n>0?1:n<0?-1:0}function Od(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Br(n,e){return Et(n.prev,n,n.next)<0?Et(n,e,n.next)>=0&&Et(n,n.prev,e)>=0:Et(n,e,n.prev)<0||Et(n,n.next,e)<0}function Dd(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vu(n,e){let t=nc(n.i,n.x,n.y),i=nc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function zl(n,e,t,i){let r=nc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ud(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var ic=class{static triangulate(e,t,i=2){return vd(e,t,i)}},Vr=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Vl(e),Gl(i,e);let o=e.length;t.forEach(Vl);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Gl(i,t[l]);let c=ic.triangulate(i,r);for(let l=0;l<c.length;l+=3)s.push(c.slice(l,l+3));return s}};function Vl(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Gl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Gr=class n extends wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,c=Math.floor(i),l=Math.floor(r),a=c+1,f=l+1,m=e/c,d=t/l,p=[],g=[],x=[],u=[];for(let h=0;h<f;h++){let y=h*d-o;for(let S=0;S<a;S++){let _=S*m-s;g.push(_,-y,0),x.push(0,0,1),u.push(S/c),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<c;y++){let S=y+a*h,_=y+a*(h+1),A=y+1+a*(h+1),C=y+1+a*h;p.push(S,_,C),p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var xi=class n extends wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+c,Math.PI),a=0,f=[],m=new J,d=new J,p=[],g=[],x=[],u=[];for(let h=0;h<=i;h++){let y=[],S=h/i,_=o+S*c,A=e*Math.cos(_),C=Math.sqrt(e*e-A*A),v=0;h===0&&o===0?v=.5/t:h===i&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){let P=b/t,N=r+P*s;m.x=-C*Math.cos(N),m.y=A,m.z=C*Math.sin(N),g.push(m.x,m.y,m.z),d.copy(m).normalize(),x.push(d.x,d.y,d.z),u.push(P+v,1-S),y.push(a++)}f.push(y)}for(let h=0;h<i;h++)for(let y=0;y<t;y++){let S=f[h][y+1],_=f[h][y],A=f[h+1][y],C=f[h+1][y+1];(h!==0||o>0)&&p.push(S,_,C),(h!==i-1||l<Math.PI)&&p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ai(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Hl(r))r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Hl(r[0])){let s=[];for(let o=0,c=r.length;o<c;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=Ai(n[t]);for(let r in i)e[r]=i[r]}return e}function Hl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Fd(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Gu={clone:Ai,merge:Gt},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new He().fromArray(r.value);break;case"v3":this.uniforms[i].value=new J().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},co=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Hr=class extends En{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=To,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var lo=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uo=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bi(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vs(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ri=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let c=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let c=t[1];e<c&&(i=2,s=c);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let c=i+o>>>1;e<t[c]?o=c:i=c+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends ri{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ja,endingEnd:Ja}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,c=r[s],l=r[o];if(c===void 0)switch(this.getSettings_().endingStart){case $a:s=e,c=2*t-i;break;case Qa:s=r.length-2,c=t+r[s]-r[s+1];break;default:s=e,c=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $a:o=e,l=2*i-t;break;case Qa:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let a=(i-t)*.5,f=this.valueSize;this._weightPrev=a/(t-c),this._weightNext=a/(l-i),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,f=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),x=g*g,u=x*g,h=-d*u+2*d*x-d*g,y=(1+d)*u+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-p)*u+(1.5+p)*x+.5*g,_=p*u-p*x;for(let A=0;A!==c;++A)s[A]=h*o[f+A]+y*o[a+A]+S*o[l+A]+_*o[m+A];return s}},fo=class extends ri{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,f=(i-t)/(r-t),m=1-f;for(let d=0;d!==c;++d)s[d]=o[a+d]*m+o[l+d]*f;return s}},po=class extends ri{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mo=class extends ri{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,f=this.inTangents,m=this.outTangents;if(!f||!m){let g=(i-t)/(r-t),x=1-g;for(let u=0;u!==c;++u)s[u]=o[a+u]*x+o[l+u]*g;return s}let d=c*2,p=e-1;for(let g=0;g!==c;++g){let x=o[a+g],u=o[l+g],h=p*d+g*2,y=m[h],S=m[h+1],_=e*d+g*2,A=f[_],C=f[_+1],v=Vd(i,t,y,A,r);s[g]=Hu(v,x,S,C,u)}return s}};function Hu(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function zd(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Vd(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let c=Hu(s,e,t,i,r)-n;if(Math.abs(c)<1e-10)break;let l=zd(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-c/l))}return s}var rn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Vs(e.settings)&&(i.settings={inTangents:Bi(e.settings.inTangents,Array),outTangents:Bi(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case eo:t=this.InterpolantFactoryMethodLinear;break;case Ws:t=this.InterpolantFactoryMethodSmooth;break;case Za:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Ws;case this.InterpolantFactoryMethodBezier:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Vs(this.settings)&&(Wl(this.settings.inTangents,e),Wl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Vs(this.settings)&&(Xl(this.settings.inTangents,e),Xl(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let c=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){let l=i[c];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,c,l,o),e=!1;break}o=l}if(r!==void 0&&zh(r))for(let c=0,l=r.length;c!==l;++c){let a=r[c];if(isNaN(a)){$e("KeyframeTrack: Value is not a valid number.",this,c,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ws,s=e.length-1,o=1;for(let c=1;c<s;++c){let l=!1,a=e[c],f=e[c+1];if(a!==f&&(c!==1||a!==e[0]))if(r)l=!0;else{let m=c*i,d=m-i,p=m+i;for(let g=0;g!==i;++g){let x=t[m+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(c!==o){e[o]=e[c];let m=c*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[m+p]}++o}}if(s>0){e[o]=e[s];for(let c=s*i,l=o*i,a=0;a!==i;++a)t[l+a]=t[c+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Vs(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Wl(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Xl(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=eo;var si=class extends rn{constructor(e,t,i){super(e,t,i)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=br;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends rn{constructor(e,t,i,r){super(e,t,i,r)}};go.prototype.ValueTypeName="color";var _o=class extends rn{constructor(e,t,i,r){super(e,t,i,r)}};_o.prototype.ValueTypeName="number";var yo=class extends ri{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=(i-t)/(r-t),a=e*c;for(let f=a+c;a!==f;a+=4)Yt.slerpFlat(s,0,o,a-c,o,a,l);return s}},Wr=class extends rn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends rn{constructor(e,t,i){super(e,t,i)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=br;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends rn{constructor(e,t,i,r){super(e,t,i,r)}};xo.prototype.ValueTypeName="vector";var Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Yl(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Yl(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Yl(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var vo=class{constructor(e,t,i){let r=this,s=!1,o=0,c=0,l,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){c++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,c),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,c),o===c&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,m){return a.push(f,m),this},this.removeHandler=function(f){let m=a.indexOf(f);return m!==-1&&a.splice(m,2),this},this.getHandler=function(f){for(let m=0,d=a.length;m<d;m+=2){let p=a[m],g=a[m+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wu=new vo,sn=class{constructor(e){this.manager=e!==void 0?e:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};sn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn={},rc=class extends Error{constructor(e,t){super(e),this.response=t}},Xr=class extends sn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Wi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:i,onError:r});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,l=this.responseType;fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;let f=Fn[e],m=a.body.getReader(),d=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,u=new ReadableStream({start(h){y();function y(){m.read().then(({done:S,value:_})=>{if(S)h.close();else{x+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let C=0,v=f.length;C<v;C++){let b=f[C];b.onProgress&&b.onProgress(A)}h.enqueue(_),y()}},S=>{h.error(S)})}}});return new Response(u)}else throw new rc(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(l){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return a.json();default:if(c==="")return a.text();{let m=/charset="?([^;"\s]*)"?/i.exec(c),d=m&&m[1]?m[1].toLowerCase():void 0,p=new TextDecoder(d);return a.arrayBuffer().then(g=>p.decode(g))}}}).then(a=>{Wi.add(`file:${e}`,a);let f=Fn[e];delete Fn[e];for(let m=0,d=f.length;m<d;m++){let p=f[m];p.onLoad&&p.onLoad(a)}}).catch(a=>{let f=Fn[e];if(f===void 0)throw this.manager.itemError(e),a;delete Fn[e];for(let m=0,d=f.length;m<d;m++){let p=f[m];p.onError&&p.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zi=new WeakMap,So=class extends sn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Wi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let m=zi.get(o);m===void 0&&(m=[],zi.set(o,m)),m.push({onLoad:t,onError:r})}return o}let c=qi("img");function l(){f(),t&&t(this);let m=zi.get(this)||[];for(let d=0;d<m.length;d++){let p=m[d];p.onLoad&&p.onLoad(this)}zi.delete(this),s.manager.itemEnd(e)}function a(m){f(),r&&r(m),Wi.remove(`image:${e}`);let d=zi.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(m)}zi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",l,!1),c.removeEventListener("error",a,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,c),s.manager.itemStart(e),c.fetchPriority=this.priority,c.src=e,c}};var Yr=class extends sn{constructor(e){super(e)}load(e,t,i,r){let s=new qt,o=new So(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},qr=class extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Kr=class extends qr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ja=new ut,ql=new J,Kl=new J,Mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tn,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ja,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,c=r?r.w/s.y:1,l=r?r.x/s.x:0,a=r?r.y/s.y:0;e.coordinateSystem===Yi||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*c,0,.5*c+a,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*c,0,.5*c+a,0,0,.5,.5,0,0,0,1),t.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gs=new J,Hs=new Yt,Sn=new J,vi=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gs,Hs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gs,Hs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new J,jl=new He,Zl=new He,Ft=class extends vi{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,jl,Zl),t.subVectors(Zl,jl)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,a=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/a,r*=o.width/l,i*=o.height/a}let c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Si=class extends vi{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,c=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=a*this.view.offsetX,o=s+a*this.view.width,c-=f*this.view.offsetY,l=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sc=class extends Mo{constructor(){super(new Si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new sc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var jr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Vi=-90,Gi=1,rr=class extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ft(Vi,Gi,e,t);r.layers=this.layers,this.add(r);let s=new Ft(Vi,Gi,e,t);s.layers=this.layers,this.add(s);let o=new Ft(Vi,Gi,e,t);o.layers=this.layers,this.add(o);let c=new Ft(Vi,Gi,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Vi,Gi,e,t);l.layers=this.layers,this.add(l);let a=new Ft(Vi,Gi,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,c,l]=t;for(let a of t)this.remove(a);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yi)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,c,l,a,f]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Eo=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var kc="\\[\\]\\.:\\/",Gd=new RegExp("["+kc+"]","g"),Bc="[^"+kc+"]",Hd="[^"+kc.replace("\\.","")+"]",Wd=/((?:WC+[\/:])*)/.source.replace("WC",Bc),Xd=/(WCOD+)?/.source.replace("WCOD",Hd),Yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),Kd=new RegExp("^"+Wd+Xd+Yd+qd+"$"),jd=["material","materials","bones","map"],oc=class{constructor(e,t,i){let r=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gd,"")}static parseTrackName(e){let t=Kd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);jd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let c=s[o];if(c.name===t||c.uuid===t)return c;let l=i(c.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let a=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===a){a=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(a!==void 0){if(e[a]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[r];if(o===void 0){let a=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+a+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=oc;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y0=new Float32Array(1);var sr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ac=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}},Jl=new He,or=class{constructor(e=new He(1/0,1/0),t=new He(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var Zr=class extends mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zc(n,e,t,i){let r=Zd(i);switch(t){case Ac:return n*e;case Rc:return n*e/r.components*r.byteLength;case Po:return n*e/r.components*r.byteLength;case li:return n*e*2/r.components*r.byteLength;case Lo:return n*e*2/r.components*r.byteLength;case wc:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case No:return n*e*4/r.components*r.byteLength;case Qr:case es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:case Fo:return Math.max(n,16)*Math.max(e,8)/4;case Oo:case Uo:return Math.max(n,8)*Math.max(e,8)/2;case ko:case Bo:case Vo:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case is:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $o:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ra:case sa:case oa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case aa:case ca:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rs:case la:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zd(n){switch(n){case Zt:case Mc:return{byteLength:1,components:1};case ur:case Ec:case yn:return{byteLength:2,components:1};case Co:case Io:return{byteLength:2,components:4};case gn:case Ro:case _n:return{byteLength:4,components:1};case Tc:case bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function dh(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $d(n){let e=new WeakMap;function t(c,l){let a=c.array,f=c.usage,m=a.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,a,f),c.onUploadCallback();let p;if(a instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)p=n.HALF_FLOAT;else if(a instanceof Uint16Array)c.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)p=n.SHORT;else if(a instanceof Uint32Array)p=n.UNSIGNED_INT;else if(a instanceof Int32Array)p=n.INT;else if(a instanceof Int8Array)p=n.BYTE;else if(a instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:d,type:p,bytesPerElement:a.BYTES_PER_ELEMENT,version:c.version,size:m}}function i(c,l,a){let f=l.array,m=l.updateRanges;if(n.bindBuffer(a,c),m.length===0)n.bufferSubData(a,0,f);else{m.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<m.length;p++){let g=m[d],x=m[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,m[d]=x)}m.length=d+1;for(let p=0,g=m.length;p<g;p++){let x=m[p];n.bufferSubData(a,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=e.get(c);l&&(n.deleteBuffer(l.buffer),e.delete(c))}function o(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let a=e.get(c);if(a===void 0)e.set(c,t(c,l));else if(a.version<c.version){if(a.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,c,l),a.version=c.version}}return{get:r,remove:s,update:o}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ff=`#ifdef USE_IRIDESCENCE
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
#endif`,pf=`#ifdef USE_BUMPMAP
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,Jf=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,$f=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kp=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
}`,am=`#define DISTANCE
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
}`,cm=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,ym=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,vm=`#define NORMAL
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
}`,Sm=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,Em=`#define STANDARD
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
}`,Tm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,bm=`#define TOON
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
}`,Am=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Im=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Qd,alphahash_pars_fragment:ef,alphamap_fragment:tf,alphamap_pars_fragment:nf,alphatest_fragment:rf,alphatest_pars_fragment:sf,aomap_fragment:of,aomap_pars_fragment:af,batching_pars_vertex:cf,batching_vertex:lf,begin_vertex:uf,beginnormal_vertex:hf,bsdfs:df,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:yf,color_fragment:xf,color_pars_fragment:vf,color_pars_vertex:Sf,color_vertex:Mf,common:Ef,defaultnormal_vertex:Tf,displacementmap_pars_vertex:bf,displacementmap_vertex:Af,emissivemap_fragment:wf,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:If,envmap_fragment:Pf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Nf,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Xf,envmap_vertex:Df,fog_vertex:Uf,fog_pars_vertex:Ff,fog_fragment:kf,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Wf,lights_toon_fragment:Yf,lights_toon_pars_fragment:qf,lights_phong_fragment:Kf,lights_phong_pars_fragment:jf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Jf,lights_fragment_begin:$f,lights_fragment_maps:Qf,lights_fragment_end:ep,lightprobes_pars_fragment:tp,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:sp,map_fragment:op,map_pars_fragment:ap,map_particle_fragment:cp,map_particle_pars_fragment:lp,metalnessmap_fragment:up,metalnessmap_pars_fragment:hp,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:yp,normal_pars_fragment:xp,normal_pars_vertex:vp,normal_vertex:Sp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ap,opaque_fragment:wp,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Ip,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Fp,shadowmask_pars_fragment:kp,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:Vp,skinnormal_vertex:Gp,specularmap_fragment:Hp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:Yp,transmission_fragment:qp,transmission_pars_fragment:Kp,uv_pars_fragment:jp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:$p,background_vert:Qp,background_frag:em,backgroundCube_vert:tm,backgroundCube_frag:nm,cube_vert:im,cube_frag:rm,depth_vert:sm,depth_frag:om,distance_vert:am,distance_frag:cm,equirect_vert:lm,equirect_frag:um,linedashed_vert:hm,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:ym,meshnormal_vert:xm,meshnormal_frag:vm,meshphong_vert:Sm,meshphong_frag:Mm,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:bm,meshtoon_frag:Am,points_vert:wm,points_frag:Rm,shadow_vert:Cm,shadow_frag:Im,sprite_vert:Pm,sprite_frag:Lm},ke={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Cn={basic:{uniforms:Gt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Gt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Gt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Gt([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Gt([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Gt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Gt([ke.points,ke.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Gt([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Gt([ke.common,ke.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Gt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Gt([ke.sprite,ke.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Gt([ke.common,ke.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Gt([ke.lights,ke.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Cn.physical={uniforms:Gt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var ha={r:0,b:0,g:0},Nm=new ut,fh=new Je;fh.set(-1,0,0,0,1,0,0,0,1);function Om(n,e,t,i,r,s){let o=new qe(0),c=r===!0?0:1,l,a,f=null,m=0,d=null;function p(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=e.get(S,_)}return S}function g(y){let S=!1,_=p(y);_===null?u(o,c):_&&_.isColor&&(u(_,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,S){let _=p(S);_&&_.isCubeTexture?(a===void 0&&(a=new jt(new ii(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ai(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(A,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),a.material.uniforms.envMap.value=_,a.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(fh),a.material.toneMapped=it.getTransfer(_.colorSpace)!==gt,(f!==_||m!==_.version||d!==n.toneMapping)&&(a.material.needsUpdate=!0,f=_,m=_.version,d=n.toneMapping),a.layers.enableAll(),y.unshift(a,a.geometry,a.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new jt(new Gr(2,2),new bn({name:"BackgroundMaterial",uniforms:Ai(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=it.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||m!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=_,m=_.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,S){y.getRGB(ha,Fc(n)),t.buffers.color.setClear(ha.r,ha.g,ha.b,S,s)}function h(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),c=S,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(o,c)},render:g,addToRenderList:x,dispose:h}}function Dm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function c(L,R,D,w,G){let Y=!1,V=m(L,w,D,R);s!==V&&(s=V,a(s.object)),Y=p(L,w,D,G),Y&&g(L,w,D,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(L,R,D,w),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function a(L){return n.bindVertexArray(L)}function f(L){return n.deleteVertexArray(L)}function m(L,R,D,w){let G=w.wireframe===!0,Y=i[R.id];Y===void 0&&(Y={},i[R.id]=Y);let V=L.isInstancedMesh===!0?L.id:0,ne=Y[V];ne===void 0&&(ne={},Y[V]=ne);let X=ne[D.id];X===void 0&&(X={},ne[D.id]=X);let ie=X[G];return ie===void 0&&(ie=d(l()),X[G]=ie),ie}function d(L){let R=[],D=[],w=[];for(let G=0;G<t;G++)R[G]=0,D[G]=0,w[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:w,object:L,attributes:{},index:null}}function p(L,R,D,w){let G=s.attributes,Y=R.attributes,V=0,ne=D.getAttributes();for(let X in ne)if(ne[X].location>=0){let oe=G[X],Se=Y[X];if(Se===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),oe===void 0||oe.attribute!==Se||Se&&oe.data!==Se.data)return!0;V++}return s.attributesNum!==V||s.index!==w}function g(L,R,D,w){let G={},Y=R.attributes,V=0,ne=D.getAttributes();for(let X in ne)if(ne[X].location>=0){let oe=Y[X];oe===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));let Se={};Se.attribute=oe,oe&&oe.data&&(Se.data=oe.data),G[X]=Se,V++}s.attributes=G,s.attributesNum=V,s.index=w}function x(){let L=s.newAttributes;for(let R=0,D=L.length;R<D;R++)L[R]=0}function u(L){h(L,0)}function h(L,R){let D=s.newAttributes,w=s.enabledAttributes,G=s.attributeDivisors;D[L]=1,w[L]===0&&(n.enableVertexAttribArray(L),w[L]=1),G[L]!==R&&(n.vertexAttribDivisor(L,R),G[L]=R)}function y(){let L=s.newAttributes,R=s.enabledAttributes;for(let D=0,w=R.length;D<w;D++)R[D]!==L[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function S(L,R,D,w,G,Y,V){V===!0?n.vertexAttribIPointer(L,R,D,G,Y):n.vertexAttribPointer(L,R,D,w,G,Y)}function _(L,R,D,w){x();let G=w.attributes,Y=D.getAttributes(),V=R.defaultAttributeValues;for(let ne in Y){let X=Y[ne];if(X.location>=0){let ie=G[ne];if(ie===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),ie!==void 0){let oe=ie.normalized,Se=ie.itemSize,Te=e.get(ie);if(Te===void 0)continue;let Q=Te.buffer,H=Te.type,K=Te.bytesPerElement,le=H===n.INT||H===n.UNSIGNED_INT||ie.gpuType===Ro;if(ie.isInterleavedBufferAttribute){let se=ie.data,me=se.isInterleavedBuffer===!0?se.stride:se.itemSize,Oe=ie.offset;if(se.isInstancedInterleavedBuffer||se.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)h(X.location+Le,se.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<X.locationSize;Le++)u(X.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Le=0;Le<X.locationSize;Le++)S(X.location+Le,Se/X.locationSize,H,oe,me*K,(Oe+Se/X.locationSize*Le)*K,le)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)h(X.location+se,ie.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<X.locationSize;se++)u(X.location+se);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let se=0;se<X.locationSize;se++)S(X.location+se,Se/X.locationSize,H,oe,Se*K,Se/X.locationSize*se*K,le)}}else if(V!==void 0){let oe=V[ne];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(X.location,oe);break;case 3:n.vertexAttrib3fv(X.location,oe);break;case 4:n.vertexAttrib4fv(X.location,oe);break;default:n.vertexAttrib1fv(X.location,oe)}}}}y()}function A(){P();for(let L in i){let R=i[L];for(let D in R){let w=R[D];for(let G in w){let Y=w[G];for(let V in Y)f(Y[V].object),delete Y[V];delete w[G]}}delete i[L]}}function C(L){if(i[L.id]===void 0)return;let R=i[L.id];for(let D in R){let w=R[D];for(let G in w){let Y=w[G];for(let V in Y)f(Y[V].object),delete Y[V];delete w[G]}}delete i[L.id]}function v(L){for(let R in i){let D=i[R];for(let w in D){let G=D[w];if(G[L.id]===void 0)continue;let Y=G[L.id];for(let V in Y)f(Y[V].object),delete Y[V];delete G[L.id]}}}function b(L){for(let R in i){let D=i[R],w=L.isInstancedMesh===!0?L.id:0,G=D[w];if(G!==void 0){for(let Y in G){let V=G[Y];for(let ne in V)f(V[ne].object),delete V[ne];delete G[Y]}delete D[w],Object.keys(D).length===0&&delete i[R]}}}function P(){N(),o=!0,s!==r&&(s=r,a(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:P,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:u,disableUnusedAttributes:y}}function Um(n,e,t){let i;function r(l){i=l}function s(l,a){n.drawArrays(i,l,a),t.update(a,i,1)}function o(l,a,f){f!==0&&(n.drawArraysInstanced(i,l,a,f),t.update(a,i,f))}function c(l,a,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,a,0,f);let d=0;for(let p=0;p<f;p++)d+=a[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c}function Fm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==xn&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(v){let b=v===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Zt&&v!==_n&&!b&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",f=l(a);f!==a&&(Ze("WebGLRenderer:",a,"not supported, using",f,"instead."),a=f);let m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:A,samples:C}}function km(n){let e=this,t=null,i=0,r=!1,s=!1,o=new en,c=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let p=m.length!==0||d||i!==0||r;return r=d,i=m.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,d){t=f(m,d,0)},this.setState=function(m,d,p){let g=m.clippingPlanes,x=m.clipIntersection,u=m.clipShadows,h=n.get(m);if(!r||g===null||g.length===0||s&&!u)s?f(null):a();else{let y=s?0:i,S=y*4,_=h.clippingState||null;l.value=_,_=f(g,d,S,p);for(let A=0;A!==S;++A)_[A]=t[A];h.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function a(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(m,d,p,g){let x=m!==null?m.length:0,u=null;if(x!==0){if(u=l.value,g!==!0||u===null){let h=p+x*4,y=d.matrixWorldInverse;c.getNormalMatrix(y),(u===null||u.length<h)&&(u=new Float32Array(h));for(let S=0,_=p;S!==x;++S,_+=4)o.copy(m[S]).applyMatrix4(y,c),o.normal.toArray(u,_),u[_+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,u}}var cs=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Or(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ii(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Mi});s.uniforms.tEquirect.value=t;let o=new jt(r,s),c=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Xt),new rr(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Xu=256,Bm=3,zm=20,ph=256,mh=16,Vm=3,Gm=new J,Hm=new qe,fa=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rr(1,10,null),this._boxMesh=new jt(new ii(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:c=Gm}=s,l=this._renderer;this._setSize(o);let a=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Hm));let u=new rr(i,r,f);return u.position.copy(c),u.update(l,e),l.autoClear=m,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=g,e.background=x,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(a,t)),this._applyPMREM(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Xu,Dc(e))}_fromTexture(e,t){e.mapping===Ti||e.mapping===lr?this._setSize(e.image.length===0?Xu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Yu(e,!1,!1),i=Math.log2(e)-Bm;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ti||e.mapping===lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Wm(),this._integrationMaterial=Xm());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/mh);for(let o=0;o<=i;o++){let c=n.lodToRoughness(o,i);if(o>i-Vm)s.roughness.value=c,this._renderCube(e,o,this._integrationMaterial);else{let l=c>0?Math.log2(t)+.5*Math.log2(6/(ph*Math.pow(c,4)))+.5:0;r.roughness.value=c,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ym());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function Yu(n,e,t){return new cs(n,{minFilter:Wn,generateMipmaps:e,type:yn,colorSpace:Ar,depthBuffer:t})}function ls(n,e,t){return new bn({name:n,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:Dt,blending:Mi,depthTest:!1,depthWrite:!1})}function Wm(){return ls("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ph}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xm(){return ls("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ym(){return ls("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qu(){return ls("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ku(){return ls("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qm(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){let p=d.mapping;if(p===bo||p===Ao)if(e.has(d)){let g=e.get(d).texture;return c(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new cs(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",a),c(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===bo||p===Ao,x=p===Ti||p===lr;if(g||x){let u=t.get(d),h=u!==void 0?u.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new fa(n)),u=g?i.fromEquirectangular(d,u):i.fromCubemap(d,u),u.texture.pmremVersion=d.pmremVersion,t.set(d,u),u.texture;if(u!==void 0)return u.texture;{let y=d.image;return g&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new fa(n)),u=g?i.fromEquirectangular(d):i.fromCubemap(d),u.texture.pmremVersion=d.pmremVersion,t.set(d,u),d.addEventListener("dispose",f),u.texture):null}}}return d}function c(d,p){return p===bo?d.mapping=Ti:p===Ao&&(d.mapping=lr),d}function l(d){let p=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&p++;return p===g}function a(d){let p=d.target;p.removeEventListener("dispose",a);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(d){let p=d.target;p.removeEventListener("dispose",f);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function m(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function Km(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Mr("WebGLRenderer: "+i+" extension not supported."),r}}}function jm(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(g=>delete r[g]);function c(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let u in g.attributes)e.remove(g.attributes[u]);g.removeEventListener("dispose",c),delete r[g.id],o.unregister(g);let x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",c),r[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function f(g){let x=g.attributes;for(let u in x)e.update(x[u],n.ARRAY_BUFFER)}function m(g){let x=g.index,u=g.attributes.position,h=0;if(u===void 0)return;let y=x!==null?x.array.length:u.array.length/3-1,S=u.count>=65535?Pr:Ir,_=new S(Math.ceil(y/3)*6,1),A=_.array;if(x!==null){let v=x.array;h=x.version;for(let b=0,P=0;b<y;b+=3){let N=v[b+0],L=v[b+1],R=v[b+2];A[P++]=N,A[P++]=L,A[P++]=L,A[P++]=R,A[P++]=R,A[P++]=N}}else{h=u.version;for(let v=0,b=0;v<y;v+=3){let P=v+0,N=v+1,L=v+2;A[b++]=P,A[b++]=N,A[b++]=N,A[b++]=L,A[b++]=L,A[b++]=P}}_.version=h;let C=s.get(g);C&&e.remove(C),s.set(g,_)}function d(g){let x=s.get(g);if(x){let u=g.index;u!==null&&x.version<u.version&&m(g)}else m(g);return s.get(g)}function p(){for(let g in r){let x=r[g].deref();x!==void 0&&l(x)}}return{get:a,update:f,getWireframeAttribute:d,dispose:p}}function Zm(n,e,t){let i;function r(m){i=m}let s,o;function c(m){s=m.type,o=m.bytesPerElement}function l(m,d){n.drawElements(i,d,s,m*o),t.update(d,i,1)}function a(m,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,m*o,p),t.update(d,i,p))}function f(m,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,m,0,p);let x=0;for(let u=0;u<p;u++)x+=d[u];t.update(x,i,1)}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=f}function Jm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,c){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $m(n,e,t){let i=new WeakMap,r=new ht;function s(o,c,l){let a=o.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=f!==void 0?f.length:0,d=i.get(c);if(d===void 0||d.count!==m){let P=function(){v.dispose(),i.delete(c),c.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let p=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,u=c.morphAttributes.position||[],h=c.morphAttributes.normal||[],y=c.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=c.attributes.position.count*S,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*A*4*m),v=new Rr(C,_,A,m);v.type=_n,v.needsUpdate=!0;let b=S*4;for(let N=0;N<m;N++){let L=u[N],R=h[N],D=y[N],w=_*A*4*N;for(let G=0;G<L.count;G++){let Y=G*b;p===!0&&(r.fromBufferAttribute(L,G),C[w+Y+0]=r.x,C[w+Y+1]=r.y,C[w+Y+2]=r.z,C[w+Y+3]=0),g===!0&&(r.fromBufferAttribute(R,G),C[w+Y+4]=r.x,C[w+Y+5]=r.y,C[w+Y+6]=r.z,C[w+Y+7]=0),x===!0&&(r.fromBufferAttribute(D,G),C[w+Y+8]=r.x,C[w+Y+9]=r.y,C[w+Y+10]=r.z,C[w+Y+11]=D.itemSize===4?r.w:1)}}d={count:m,texture:v,size:new He(_,A)},i.set(c,d),c.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<a.length;x++)p+=a[x];let g=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",a)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Qm(n,e,t,i,r){let s=new WeakMap;function o(a){let f=r.render.frame,m=a.geometry,d=e.get(a,m);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),s.get(a)!==f&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),s.set(a,f))),a.isSkinnedMesh){let p=a.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return d}function c(){s=new WeakMap}function l(a){let f=a.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:c}}var eg={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[_c]:"ACES_FILMIC_TONE_MAPPING",[xc]:"AGX_TONE_MAPPING",[vc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function tg(n,e,t,i,r,s){let o=new tn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,a=null,f=new wt;f.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new tt([0,2,0,0,2,0],2));let m=new co({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new jt(f,m),p=new Si(-1,1,1,-1,0,1),g=null,x=null,u=!1,h,y=null,S=[],_=!1;this.setSize=function(A,C){o.setSize(A,C),c!==null&&c.setSize(A,C),l!==null&&l.setSize(A,C);for(let v=0;v<S.length;v++){let b=S[v];b.setSize&&b.setSize(A,C)}},this.setEffects=function(A){S=A,_=S.length>0&&S[0].isRenderPass===!0;let C=o.width,v=o.height;S.length>0&&c===null&&(c=new tn(C,v,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(C,v,{type:yn,depthBuffer:!1,stencilBuffer:!1}));let b=r===!0&&S.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&a===null&&(a=new Hn(C,v),s===!0&&(a.format=Xn,a.type=bi)),o.dispose(),o.depthTexture=b?a:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<S.length;P++){let N=S[P];N.setSize&&N.setSize(C,v),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(a)}},this.begin=function(A,C){if(u||A.toneMapping===wn&&S.length===0)return!1;if(y=C,C!==null){let v=C.width,b=C.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return _===!1&&A.setRenderTarget(o),h=A.toneMapping,A.toneMapping=wn,!0},this.hasRenderPass=function(){return _},this.end=function(A,C){A.toneMapping=h,u=!0;let v=o,b=c;for(let P=0;P<S.length;P++){let N=S[P];N.enabled!==!1&&(N.render(A,b,v,C),N.needsSwap!==!1&&(v=b,b=b===c?l:c))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,m.defines={},it.getTransfer(g)===gt&&(m.defines.SRGB_TRANSFER="");let P=eg[x];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(y),A.render(d,p),y=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),f.dispose(),m.dispose()}}var gh=new qt,_h=new Hn(1,1),yh=new Dr(1),xh=new Rr,vh=new io,Sh=new Or,ju=[],Zu=[],Ju=new Float32Array(16),$u=new Float32Array(9),Qu=new Float32Array(4);function fr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ju[r];if(s===void 0&&(s=new Float32Array(r),ju[r]=s),e!==0){i.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,n[o].toArray(s,c)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ng(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function og(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Qu.set(i),n.uniformMatrix2fv(this.addr,!1,Qu),Ct(t,i)}}function ag(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Ct(t,i)}}function cg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Ju.set(i),n.uniformMatrix4fv(this.addr,!1,Ju),Ct(t,i)}}function lg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function fg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function mg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function ga(n){return n.version===0&&(n.compareFunction=Pc,n.needsUpdate=!0),n}function _g(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=ga(_h):s=gh,t.setTexture2D(e||s,r)}function yg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vh,r)}function xg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=ga(yh):s=Sh,t.setTextureCube(e||s,r)}function vg(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xh,r)}function Sg(n){switch(n){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return og;case 35675:return ag;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(n,e){n.uniform1fv(this.addr,e)}function Eg(n,e){let t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Tg(n,e){let t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function bg(n,e){let t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ag(n,e){let t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wg(n,e){let t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Rg(n,e){let t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Cg(n,e){n.uniform1iv(this.addr,e)}function Ig(n,e){n.uniform2iv(this.addr,e)}function Pg(n,e){n.uniform3iv(this.addr,e)}function Lg(n,e){n.uniform4iv(this.addr,e)}function Ng(n,e){n.uniform1uiv(this.addr,e)}function Og(n,e){n.uniform2uiv(this.addr,e)}function Dg(n,e){n.uniform3uiv(this.addr,e)}function Ug(n,e){n.uniform4uiv(this.addr,e)}function Fg(n,e,t){let i=this.cache,r=e.length,s=ma(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ga(_h):o=gh;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||o,s[c])}function kg(n,e,t){let i=this.cache,r=e.length,s=ma(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vh,s[o])}function Bg(n,e,t){let i=this.cache,r=e.length,s=ma(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=ga(yh):o=Sh;for(let c=0;c!==r;++c)t.setTextureCube(e[c]||o,s[c])}function zg(n,e,t){let i=this.cache,r=e.length,s=ma(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xh,s[o])}function Vg(n){switch(n){case 5126:return Mg;case 35664:return Eg;case 35665:return Tg;case 35666:return bg;case 35674:return Ag;case 35675:return wg;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ig;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Ng;case 36294:return Og;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}var Hc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sg(t.type)}},Wc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let c=r[s];c.setValue(e,t[c.id],i)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function eh(n,e){n.seq.push(e),n.map[e.id]=e}function Gg(n,e,t){let i=n.name,r=i.length;for(Vc.lastIndex=0;;){let s=Vc.exec(i),o=Vc.lastIndex,c=s[1],l=s[2]==="]",a=s[3];if(l&&(c=c|0),a===void 0||a==="["&&o+2===r){eh(t,a===void 0?new Hc(c,n,e):new Wc(c,n,e));break}else{let m=t.map[c];m===void 0&&(m=new Xc(c),eh(t,m)),t=m}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let c=e.getActiveUniform(t,o),l=e.getUniformLocation(t,c.name);Gg(c,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let c=t[s],l=i[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function th(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Hg=37297,Wg=0;function Xg(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let c=o+1;i.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return i.join(`
`)}var nh=new Je;function Yg(n){it._getMatrix(nh,it.workingColorSpace,n);let e=`mat3( ${nh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case wr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ih(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Xg(n.getShaderSource(e),c)}else return s}function qg(n,e){let t=Yg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Kg={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[_c]:"ACESFilmic",[xc]:"AgX",[vc]:"Neutral",[yc]:"Custom"};function jg(n,e){let t=Kg[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var da=new J;function Zg(){it.getLuminanceCoefficients(da);let n=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function $g(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:c}}return t}function as(n){return n!==""}function rh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(n){return n.replace(e_,t_)}function t_(n,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yc(t)}var n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(n_,i_)}function i_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ah(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var r_={[Jr]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function s_(n){return r_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o_={[lr]:"ENVMAP_MODE_REFRACTION"};function a_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":o_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c_={[To]:"ENVMAP_BLENDING_MULTIPLY",[xu]:"ENVMAP_BLENDING_MIX",[vu]:"ENVMAP_BLENDING_ADD"};function l_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":c_[n.combine]||"ENVMAP_BLENDING_NONE"}function u_(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,c=t.fragmentShader,l=s_(t),a=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=a_(t),m=l_(t),d=Jg(t),p=$g(s),g=r.createProgram(),x,u,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(as).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(as).join(`
`),u.length>0&&(u+=`
`)):(x=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),u=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?nt.tonemapping_pars_fragment:"",t.toneMapping!==wn?jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),Zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=Yc(o),o=rh(o,t),o=sh(o,t),c=Yc(c),c=rh(c,t),c=sh(c,t),o=oh(o),c=oh(c),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",t.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=h+x+o,S=h+u+c,_=th(r,r.VERTEX_SHADER,y),A=th(r,r.FRAGMENT_SHADER,S);r.attachShader(g,_),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(N){if(n.debug.checkShaderErrors){let L=r.getProgramInfoLog(g)||"",R=r.getShaderInfoLog(_)||"",D=r.getShaderInfoLog(A)||"",w=L.trim(),G=R.trim(),Y=D.trim(),V=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,_,A);else{let X=ih(r,_,"vertex"),ie=ih(r,A,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+w+`
`+X+`
`+ie)}else w!==""?Ze("WebGLProgram: Program Info Log:",w):(G===""||Y==="")&&(ne=!1);ne&&(N.diagnostics={runnable:V,programLog:w,vertexShader:{log:G,prefix:x},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(_),r.deleteShader(A),v=new dr(r,g),b=Qg(r,g)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(g,Hg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=A,this}var h_=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Kc(e),t.set(e,i)),i}},Kc=class{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}};function d_(n){return n===li||n===is||n===rs}function f_(n,e,t,i,r,s){let o=new Cr,c=new qc,l=new Set,a=[],f=new Map,m=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,b,P,N,L,R){let D=N.fog,w=L.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||G,Y),ne=d[v.type],X=i.precision;v.precision!==null&&(X=i.getMaxPrecision(v.precision),X!==v.precision&&Ze("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));let ie=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,oe=ie!==void 0?ie.length:0,Se=0;w.morphAttributes.position!==void 0&&(Se=1),w.morphAttributes.normal!==void 0&&(Se=2),w.morphAttributes.color!==void 0&&(Se=3);let Te,Q,H,K;if(ne){let ge=Cn[ne];Te=ge.vertexShader,Q=ge.fragmentShader}else{Te=v.vertexShader,Q=v.fragmentShader;let ge=c.getVertexShaderStage(v),Ke=c.getFragmentShaderStage(v);c.update(v,ge,Ke),H=ge.id,K=Ke.id}let le=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),me=L.isInstancedMesh===!0,Oe=L.isBatchedMesh===!0,Le=!!v.map,Ve=!!v.matcap,ze=!!V,Ge=ze&&V.isPMREMTexture===!0,ct=!!v.aoMap,st=!!v.lightMap,_t=!!v.bumpMap&&v.wireframe===!1,ae=!!v.normalMap,ve=!!v.displacementMap,Ie=!!v.emissiveMap,Re=!!v.metalnessMap,Ae=!!v.roughnessMap,De=v.anisotropy>0,E=v.clearcoat>0,U=v.diffuseRoughness>0,k=v.dispersion>0,W=v.retroreflectivity>0,O=v.iridescence>0,q=v.sheen>0,z=v.transmission>0,j=De&&!!v.anisotropyMap,T=E&&!!v.clearcoatMap,M=E&&!!v.clearcoatNormalMap,F=E&&!!v.clearcoatRoughnessMap,$=U&&!!v.diffuseRoughnessMap,te=O&&!!v.iridescenceMap,xe=O&&!!v.iridescenceThicknessMap,_e=q&&!!v.sheenColorMap,ee=q&&!!v.sheenRoughnessMap,re=!!v.specularMap,Me=!!v.specularColorMap,B=!!v.specularIntensityMap,ue=z&&!!v.transmissionMap,de=z&&!!v.thicknessMap,Ee=!!v.gradientMap,we=!!v.alphaMap,Ce=v.alphaTest>0,Ne=!!v.alphaHash,Pe=!!v.extensions,ce=wn;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ce=n.toneMapping);let ye=Ge?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,be={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:Te,fragmentShader:Q,defines:v.defines,customVertexShaderID:H,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:Oe,batchingColor:Oe&&L._colorsTexture!==null,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Le,matcap:Ve,envMap:ze,envMapMode:ze&&V.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?ye.length-1:null,envMapSize:Ge?ye[0].width:null,aoMap:ct,lightMap:st,bumpMap:_t,normalMap:ae,displacementMap:ve,emissiveMap:Ie,normalMapObjectSpace:ae&&v.normalMapType===Eu,normalMapTangentSpace:ae&&v.normalMapType===ua,packedNormalMap:ae&&v.normalMapType===ua&&d_(v.normalMap.format),metalnessMap:Re,roughnessMap:Ae,anisotropy:De,anisotropyMap:j,clearcoat:E,clearcoatMap:T,clearcoatNormalMap:M,clearcoatRoughnessMap:F,diffuseRoughness:U,diffuseRoughnessMap:$,dispersion:k,retroreflection:W,iridescence:O,iridescenceMap:te,iridescenceThicknessMap:xe,sheen:q,sheenColorMap:_e,sheenRoughnessMap:ee,specularMap:re,specularColorMap:Me,specularIntensityMap:B,transmission:z,transmissionMap:ue,thicknessMap:de,gradientMap:Ee,opaque:v.transparent===!1&&v.blending===cr&&v.alphaToCoverage===!1,alphaMap:we,alphaTest:Ce,alphaHash:Ne,combine:v.combine,mapUv:Le&&p(v.map.channel),aoMapUv:ct&&p(v.aoMap.channel),lightMapUv:st&&p(v.lightMap.channel),bumpMapUv:_t&&p(v.bumpMap.channel),normalMapUv:ae&&p(v.normalMap.channel),displacementMapUv:ve&&p(v.displacementMap.channel),emissiveMapUv:Ie&&p(v.emissiveMap.channel),metalnessMapUv:Re&&p(v.metalnessMap.channel),roughnessMapUv:Ae&&p(v.roughnessMap.channel),anisotropyMapUv:j&&p(v.anisotropyMap.channel),clearcoatMapUv:T&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:$&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:te&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(v.sheenRoughnessMap.channel),specularMapUv:re&&p(v.specularMap.channel),specularColorMapUv:Me&&p(v.specularColorMap.channel),specularIntensityMapUv:B&&p(v.specularIntensityMap.channel),transmissionMapUv:ue&&p(v.transmissionMap.channel),thicknessMapUv:de&&p(v.thicknessMap.channel),alphaMapUv:we&&p(v.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(ae||De),vertexNormals:!!w.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!w.attributes.uv&&(Le||we),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||w.attributes.normal===void 0&&ae===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:se,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:R.filter(ge=>ge.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:Le&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:Ie&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kt,flipSided:v.side===Dt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&v.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function x(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(u(b,v),h(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function u(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function h(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let b=d[v.type],P;if(b){let N=Cn[b];P=Gu.clone(N.uniforms)}else P=v.uniforms;return P}function S(v,b){let P=f.get(b);return P!==void 0?++P.usedTimes:(P=new u_(n,b,v,r),a.push(P),f.set(b,P)),P}function _(v){if(--v.usedTimes===0){let b=a.indexOf(v);a[b]=a[a.length-1],a.pop(),f.delete(v.cacheKey),v.destroy()}}function A(v){c.remove(v)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:_,releaseShaderCache:A,programs:a,dispose:C}}function p_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let c=n.get(o);return c===void 0&&(c={},n.set(o,c)),c}function i(o){n.delete(o)}function r(o,c,l){n.get(o)[c]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function m_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ch(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lh(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function c(d,p,g,x,u,h){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:u,group:h},n[e]=y):(y.id=d.id,y.object=d,y.geometry=p,y.material=g,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=u,y.group=h),e++,y}function l(d,p,g,x,u,h,y){y.reversedDepth===!0&&(u=-u);let S=c(d,p,g,x,u,h);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):t.push(S)}function a(d,p,g,x,u,h){let y=c(d,p,g,x,u,h);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function f(d,p){t.length>1&&t.sort(d||m_),i.length>1&&i.sort(p||ch),r.length>1&&r.sort(p||ch)}function m(){for(let d=e,p=n.length;d<p;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:a,finish:m,sort:f}}function g_(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new lh,n.set(i,[o])):r>=s.length?(o=new lh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function __(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new qe};break;case"SpotLight":t={position:new J,direction:new J,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function y_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var x_=0;function v_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function S_(n){let e=new __,t=y_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new J);let r=new J,s=new ut,o=new ut;function c(a){let f=0,m=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,g=0,x=0,u=0,h=0,y=0,S=0,_=0,A=0,C=0,v=0,b=0,P=0,N=0;a.sort(v_);for(let R=0,D=a.length;R<D;R++){let w=a[R],G=w.color,Y=w.intensity,V=w.distance,ne=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===li?ne=w.shadow.map.texture:ne=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=G.r*Y,m+=G.g*Y,d+=G.b*Y;else if(w.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(w.sh.coefficients[X],Y);N++}else if(w.isSunLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let ie=w.shadow,oe=t.get(w);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[g]=oe,i.sunShadowMap[g]=ne;let Se=ie.getViewportCount();for(let Te=0;Te<Se;Te++)i.sunShadowMatrix[x+Te]=ie.getMatrix(Te),i.sunShadowCascade[x+Te]=ie._cascadeData[Te];x+=Se,g++}i.sun[p]=X,p++}else if(w.isDirectionalLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let ie=w.shadow,oe=t.get(w);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,i.directionalShadow[u]=oe,i.directionalShadowMap[u]=ne,i.directionalShadowMatrix[u]=w.shadow.matrix,A++}i.directional[u]=X,u++}else if(w.isSpotLight){let X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(G).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,i.spot[y]=X;let ie=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,ie.updateMatrices(w),w.castShadow&&P++),i.spotLightMatrix[y]=ie.matrix,w.castShadow){let oe=t.get(w);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,i.spotShadow[y]=oe,i.spotShadowMap[y]=ne,v++}y++}else if(w.isRectAreaLight){let X=e.get(w);X.color.copy(G).multiplyScalar(Y),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),i.rectArea[S]=X,S++}else if(w.isPointLight){let X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){let ie=w.shadow,oe=t.get(w);oe.shadowIntensity=ie.intensity,oe.shadowBias=ie.bias,oe.shadowNormalBias=ie.normalBias,oe.shadowRadius=ie.radius,oe.shadowMapSize=ie.mapSize,oe.shadowCameraNear=ie.camera.near,oe.shadowCameraFar=ie.camera.far,i.pointShadow[h]=oe,i.pointShadowMap[h]=ne,i.pointShadowMatrix[h]=w.shadow.matrix,C++}i.point[h]=X,h++}else if(w.isHemisphereLight){let X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(Y),X.groundColor.copy(w.groundColor).multiplyScalar(Y),i.hemi[_]=X,_++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=d;let L=i.hash;(L.sunLength!==p||L.directionalLength!==u||L.pointLength!==h||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==A||L.numPointShadows!==C||L.numSpotShadows!==v||L.numSpotMaps!==b||L.numLightProbes!==N)&&(i.sun.length=p,i.directional.length=u,i.spot.length=y,i.rectArea.length=S,i.point.length=h,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,L.sunLength=p,L.directionalLength=u,L.pointLength=h,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=A,L.numPointShadows=C,L.numSpotShadows=v,L.numSpotMaps=b,L.numLightProbes=N,i.version=x_++)}function l(a,f){let m=0,d=0,p=0,g=0,x=0,u=0,h=f.matrixWorldInverse;for(let y=0,S=a.length;y<S;y++){let _=a[y];if(_.isSunLight){let A=i.sun[m];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(h),m++}else if(_.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(h),d++}else if(_.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(h),g++}else if(_.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(h),o.identity(),s.copy(_.matrixWorld),s.premultiply(h),o.extractRotation(s),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let A=i.point[p];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(h),p++}else if(_.isHemisphereLight){let A=i.hemi[u];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(h),u++}}}return{setup:c,setupView:l,state:i}}function uh(n){let e=new S_(n),t=[],i=[],r=[];function s(m){f.camera=m,t.length=0,i.length=0,r.length=0}function o(m){m.isLightProbeGrid?r.push(m):t.push(m)}function c(m){i.push(m)}function l(){e.setup(t),r.sort((m,d)=>m.priority-d.priority||m.id-d.id)}function a(m){e.setupView(t,m)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:a,pushLight:o,pushShadow:c}}function M_(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),c;return o===void 0?(c=new uh(n),e.set(r,[c])):s>=o.length?(c=new uh(n),o.push(c)):c=o[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}var E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`,b_=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],A_=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],hh=new ut,os=new J,Gc=new J;function w_(n,e,t){let i=new Tn,r=new He,s=new He,o=new ht,c=new lo,l=new uo,a={},f=t.maxTextureSize,m={[An]:Dt,[Dt]:An,[Kt]:Kt},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:E_,fragmentShader:T_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new jt(g,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let h=this.type;this.render=function(C,v,b){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;this.type===eu&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);let P=n.getRenderTarget(),N=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Mi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let D=h!==this.type;D&&v.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(G=>G.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,G=C.length;w<G;w++){let Y=C[w],V=Y.shadow;if(V===void 0){Ze("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ne=V.getFrameExtents();r.multiply(ne),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ne.x),r.x=s.x*ne.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ne.y),r.y=s.y*ne.y,V.mapSize.y=s.y));let X=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||D===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ar){if(Y.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new tn(r.x,r.y,{format:li,type:yn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Hn(r.x,r.y,_n),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=zn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot}else Y.isPointLight?(V.map=new cs(r.x),V.map.depthTexture=new Dr(r.x,gn)):(V.map=new tn(r.x,r.y),V.map.depthTexture=new Hn(r.x,r.y,gn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=zn,this.type===Jr?(V.map.depthTexture.compareFunction=X?Ic:Cc,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);let ie=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,b);let oe=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Se=0;Se<ie;Se++){let Te=V.getCamera(Se);if(Y.isPointLight){let Q=V.camera,H=V.matrix,K=Y.distance||Q.far;K!==Q.far&&(Q.far=K,Q.updateProjectionMatrix()),os.setFromMatrixPosition(Y.matrixWorld),Q.position.copy(os),Gc.copy(Q.position),Gc.add(b_[Se]),Q.up.copy(A_[Se]),Q.lookAt(Gc),Q.updateMatrixWorld(),H.makeTranslation(-os.x,-os.y,-os.z),hh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(hh,Q.coordinateSystem,Q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(V.map),n.clear());let Q=V.getViewport(Se);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),R.viewport(o)}i=V.getFrustum(Se),_(v,b,Te,Y,oe,this.type)}V.isPointLightShadow!==!0&&this.type===ar&&y(V,b),V.needsUpdate=!1}h=this.type,u.needsUpdate=!1,n.setRenderTarget(P,N,L)};function y(C,v){let b=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new tn(r.x,r.y,{format:li,type:yn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(v,null,b,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(v,null,b,p,x,null)}function S(C,v,b,P){let N=null,L=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)N=L;else if(N=b.isPointLight===!0?l:c,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let R=N.uuid,D=v.uuid,w=a[R];w===void 0&&(w={},a[R]=w);let G=w[D];G===void 0&&(G=N.clone(),w[D]=G,v.addEventListener("dispose",A)),N=G}if(N.visible=v.visible,N.wireframe=v.wireframe,P===ar?N.side=v.shadowSide!==null?v.shadowSide:v.side:N.side=v.shadowSide!==null?v.shadowSide:m[v.side],N.alphaMap=v.alphaMap,N.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,N.map=v.map,N.clipShadows=v.clipShadows,N.clippingPlanes=v.clippingPlanes,N.clipIntersection=v.clipIntersection,N.displacementMap=v.displacementMap,N.displacementScale=v.displacementScale,N.displacementBias=v.displacementBias,N.wireframeLinewidth=v.wireframeLinewidth,N.linewidth=v.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let R=n.properties.get(N);R.light=b}return N}function _(C,v,b,P,N,L){if(C.visible===!1)return;if(C.layers.test(N)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&L===ar)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let w=e.update(C),G=C.material;if(Array.isArray(G)){let Y=w.groups;for(let V=0,ne=Y.length;V<ne;V++){let X=Y[V],ie=G[X.materialIndex];if(ie&&ie.visible){let oe=S(C,ie,P,L);C.onBeforeShadow(n,C,v,b,w,oe,X),n.renderBufferDirect(b,null,w,oe,C,X),C.onAfterShadow(n,C,v,b,w,oe,X)}}}else if(G.visible){let Y=S(C,G,P,L);C.onBeforeShadow(n,C,v,b,w,Y,null),n.renderBufferDirect(b,null,w,Y,C,null),C.onAfterShadow(n,C,v,b,w,Y,null)}}let D=C.children;for(let w=0,G=D.length;w<G;w++)_(D[w],v,b,P,N,L)}function A(C){C.target.removeEventListener("dispose",A);for(let b in a){let P=a[b],N=C.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}function R_(n,e){function t(){let B=!1,ue=new ht,de=null,Ee=new ht(0,0,0,0);return{setMask:function(we){de!==we&&!B&&(n.colorMask(we,we,we,we),de=we)},setLocked:function(we){B=we},setClear:function(we,Ce,Ne,Pe,ce){ce===!0&&(we*=Pe,Ce*=Pe,Ne*=Pe),ue.set(we,Ce,Ne,Pe),Ee.equals(ue)===!1&&(n.clearColor(we,Ce,Ne,Pe),Ee.copy(ue))},reset:function(){B=!1,de=null,Ee.set(-1,0,0,0)}}}function i(){let B=!1,ue=!1,de=null,Ee=null,we=null;return{setReversed:function(Ce){if(ue!==Ce){let Ne=e.get("EXT_clip_control");Ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=Ce;let Pe=we;we=null,this.setClear(Pe)}},getReversed:function(){return ue},setTest:function(Ce){Ce?se(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(Ce){de!==Ce&&!B&&(n.depthMask(Ce),de=Ce)},setFunc:function(Ce){if(ue&&(Ce=Ou[Ce]),Ee!==Ce){switch(Ce){case Ys:n.depthFunc(n.NEVER);break;case qs:n.depthFunc(n.ALWAYS);break;case Ks:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case js:n.depthFunc(n.EQUAL);break;case Zs:n.depthFunc(n.GEQUAL);break;case Js:n.depthFunc(n.GREATER);break;case $s:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Ce}},setLocked:function(Ce){B=Ce},setClear:function(Ce){we!==Ce&&(we=Ce,ue&&(Ce=1-Ce),n.clearDepth(Ce))},reset:function(){B=!1,de=null,Ee=null,we=null,ue=!1}}}function r(){let B=!1,ue=null,de=null,Ee=null,we=null,Ce=null,Ne=null,Pe=null,ce=null;return{setTest:function(ye){B||(ye?se(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(ye){ue!==ye&&!B&&(n.stencilMask(ye),ue=ye)},setFunc:function(ye,be,ge){(de!==ye||Ee!==be||we!==ge)&&(n.stencilFunc(ye,be,ge),de=ye,Ee=be,we=ge)},setOp:function(ye,be,ge){(Ce!==ye||Ne!==be||Pe!==ge)&&(n.stencilOp(ye,be,ge),Ce=ye,Ne=be,Pe=ge)},setLocked:function(ye){B=ye},setClear:function(ye){ce!==ye&&(n.clearStencil(ye),ce=ye)},reset:function(){B=!1,ue=null,de=null,Ee=null,we=null,Ce=null,Ne=null,Pe=null,ce=null}}}let s=new t,o=new i,c=new r,l={},a=new WeakMap,f={},m={},d={},p=new WeakMap,g=[],x=null,u=!1,h=null,y=null,S=null,_=null,A=null,C=null,v=null,b=new qe(0,0,0),P=0,N=!1,L=null,R=null,D=null,w=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ne>=2);let ie=null,oe={},Se=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Q=new ht().fromArray(Se),H=new ht().fromArray(Te);function K(B,ue,de,Ee){let we=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(B,Ce),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<de;Ne++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ue+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Ce}let le={};le[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),se(n.DEPTH_TEST),o.setFunc(Xi),_t(!1),ae(cc),se(n.CULL_FACE),ct(Mi);function se(B){f[B]!==!0&&(n.enable(B),f[B]=!0)}function me(B){f[B]!==!1&&(n.disable(B),f[B]=!1)}function Oe(B,ue){return d[B]!==ue?(n.bindFramebuffer(B,ue),d[B]=ue,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(B,ue){let de=g,Ee=!1;if(B){de=p.get(ue),de===void 0&&(de=[],p.set(ue,de));let we=B.textures;if(de.length!==we.length||de[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,Ne=we.length;Ce<Ne;Ce++)de[Ce]=n.COLOR_ATTACHMENT0+Ce;de.length=we.length,Ee=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(de)}function Ve(B){return x!==B?(n.useProgram(B),x=B,!0):!1}let ze={[Ei]:n.FUNC_ADD,[nu]:n.FUNC_SUBTRACT,[iu]:n.FUNC_REVERSE_SUBTRACT};ze[ru]=n.MIN,ze[su]=n.MAX;let Ge={[ou]:n.ZERO,[au]:n.ONE,[cu]:n.SRC_COLOR,[dc]:n.SRC_ALPHA,[pu]:n.SRC_ALPHA_SATURATE,[du]:n.DST_COLOR,[uu]:n.DST_ALPHA,[lu]:n.ONE_MINUS_SRC_COLOR,[fc]:n.ONE_MINUS_SRC_ALPHA,[fu]:n.ONE_MINUS_DST_COLOR,[hu]:n.ONE_MINUS_DST_ALPHA,[mu]:n.CONSTANT_COLOR,[gu]:n.ONE_MINUS_CONSTANT_COLOR,[_u]:n.CONSTANT_ALPHA,[yu]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(B,ue,de,Ee,we,Ce,Ne,Pe,ce,ye){if(B===Mi){u===!0&&(me(n.BLEND),u=!1);return}if(u===!1&&(se(n.BLEND),u=!0),B!==tu){if(B!==h||ye!==N){if((y!==Ei||A!==Ei)&&(n.blendEquation(n.FUNC_ADD),y=Ei,A=Ei),ye)switch(B){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.ONE,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",B);break}else switch(B){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uc:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hc:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",B);break}S=null,_=null,C=null,v=null,b.set(0,0,0),P=0,h=B,N=ye}return}we=we||ue,Ce=Ce||de,Ne=Ne||Ee,(ue!==y||we!==A)&&(n.blendEquationSeparate(ze[ue],ze[we]),y=ue,A=we),(de!==S||Ee!==_||Ce!==C||Ne!==v)&&(n.blendFuncSeparate(Ge[de],Ge[Ee],Ge[Ce],Ge[Ne]),S=de,_=Ee,C=Ce,v=Ne),(Pe.equals(b)===!1||ce!==P)&&(n.blendColor(Pe.r,Pe.g,Pe.b,ce),b.copy(Pe),P=ce),h=B,N=!1}function st(B,ue){B.side===Kt?me(n.CULL_FACE):se(n.CULL_FACE);let de=B.side===Dt;ue&&(de=!de),_t(de),B.blending===cr&&B.transparent===!1?ct(Mi):ct(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let Ee=B.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ie(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(B){L!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),L=B)}function ae(B){B!==$l?(se(n.CULL_FACE),B!==R&&(B===cc?n.cullFace(n.BACK):B===Ql?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),R=B}function ve(B){B!==D&&(V&&n.lineWidth(B),D=B)}function Ie(B,ue,de){B?(se(n.POLYGON_OFFSET_FILL),(w!==ue||G!==de)&&(w=ue,G=de,o.getReversed()&&(ue=-ue,de=-de),n.polygonOffset(ue,de))):me(n.POLYGON_OFFSET_FILL)}function Re(B){B?se(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Ae(B){B===void 0&&(B=n.TEXTURE0+Y-1),ie!==B&&(n.activeTexture(B),ie=B)}function De(B,ue,de){de===void 0&&(ie===null?de=n.TEXTURE0+Y-1:de=ie);let Ee=oe[de];Ee===void 0&&(Ee={type:void 0,texture:void 0},oe[de]=Ee),(Ee.type!==B||Ee.texture!==ue)&&(ie!==de&&(n.activeTexture(de),ie=de),n.bindTexture(B,ue||le[B]),Ee.type=B,Ee.texture=ue)}function E(){let B=oe[ie];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function U(){try{n.compressedTexImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function W(){try{n.texSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function O(){try{n.texSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function z(){try{n.compressedTexSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function j(){try{n.texStorage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function T(){try{n.texStorage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function M(){try{n.texImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function F(){try{n.texImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function $(B){return m[B]!==void 0?m[B]:n.getParameter(B)}function te(B,ue){m[B]!==ue&&(n.pixelStorei(B,ue),m[B]=ue)}function xe(B){Q.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function _e(B){H.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),H.copy(B))}function ee(B,ue){let de=a.get(ue);de===void 0&&(de=new WeakMap,a.set(ue,de));let Ee=de.get(B);Ee===void 0&&(Ee=n.getUniformBlockIndex(ue,B.name),n.uniformBlockBinding(ue,Ee,Ee),de.set(B,Ee))}function re(B,ue,de){let we=a.get(ue).get(B);l[we]!==de&&(n.bindBufferBase(n.UNIFORM_BUFFER,we,de),l[we]=de)}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},m={},ie=null,oe={},d={},l={},p=new WeakMap,g=[],x=null,u=!1,h=null,y=null,S=null,_=null,A=null,C=null,v=null,b=new qe(0,0,0),P=0,N=!1,L=null,R=null,D=null,w=null,G=null,Q.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:se,disable:me,bindFramebuffer:Oe,drawBuffers:Le,useProgram:Ve,setBlending:ct,setMaterial:st,setFlipSided:_t,setCullFace:ae,setLineWidth:ve,setPolygonOffset:Ie,setScissorTest:Re,activeTexture:Ae,bindTexture:De,unbindTexture:E,compressedTexImage2D:U,compressedTexImage3D:k,texImage2D:M,texImage3D:F,pixelStorei:te,getParameter:$,updateUBOMapping:ee,uniformBlockBinding:re,texStorage2D:j,texStorage3D:T,texSubImage2D:W,texSubImage3D:O,compressedTexSubImage2D:q,compressedTexSubImage3D:z,scissor:xe,viewport:_e,reset:Me}}function C_(n,e,t,i,r,s,o){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new He,f=new WeakMap,m=new Set,d,p=new WeakMap,g=new Set,x=new FinalizationRegistry(T=>g.delete(T)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(T,M){return u?new OffscreenCanvas(T,M):qi("canvas")}function y(T,M,F){let $=1,te=j(T);if((te.width>F||te.height>F)&&($=F/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let xe=Math.floor($*te.width),_e=Math.floor($*te.height);d===void 0&&(d=h(xe,_e));let ee=M?h(xe,_e):d;return ee.width=xe,ee.height=_e,ee.getContext("2d").drawImage(T,0,0,xe,_e),Ze("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+xe+"x"+_e+")."),ee}else return"data"in T&&Ze("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function S(T){return T.generateMipmaps}function _(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(T,M,F,$,te,xe=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _e;$&&(_e=e.get("EXT_texture_norm16"),_e||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===n.RED&&(F===n.FLOAT&&(ee=n.R32F),F===n.HALF_FLOAT&&(ee=n.R16F),F===n.UNSIGNED_BYTE&&(ee=n.R8),F===n.UNSIGNED_SHORT&&_e&&(ee=_e.R16_EXT),F===n.SHORT&&_e&&(ee=_e.R16_SNORM_EXT)),M===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.R8UI),F===n.UNSIGNED_SHORT&&(ee=n.R16UI),F===n.UNSIGNED_INT&&(ee=n.R32UI),F===n.BYTE&&(ee=n.R8I),F===n.SHORT&&(ee=n.R16I),F===n.INT&&(ee=n.R32I)),M===n.RG&&(F===n.FLOAT&&(ee=n.RG32F),F===n.HALF_FLOAT&&(ee=n.RG16F),F===n.UNSIGNED_BYTE&&(ee=n.RG8),F===n.UNSIGNED_SHORT&&_e&&(ee=_e.RG16_EXT),F===n.SHORT&&_e&&(ee=_e.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RG8UI),F===n.UNSIGNED_SHORT&&(ee=n.RG16UI),F===n.UNSIGNED_INT&&(ee=n.RG32UI),F===n.BYTE&&(ee=n.RG8I),F===n.SHORT&&(ee=n.RG16I),F===n.INT&&(ee=n.RG32I)),M===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),F===n.UNSIGNED_INT&&(ee=n.RGB32UI),F===n.BYTE&&(ee=n.RGB8I),F===n.SHORT&&(ee=n.RGB16I),F===n.INT&&(ee=n.RGB32I)),M===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),F===n.UNSIGNED_INT&&(ee=n.RGBA32UI),F===n.BYTE&&(ee=n.RGBA8I),F===n.SHORT&&(ee=n.RGBA16I),F===n.INT&&(ee=n.RGBA32I)),M===n.RGB&&(F===n.UNSIGNED_SHORT&&_e&&(ee=_e.RGB16_EXT),F===n.SHORT&&_e&&(ee=_e.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),M===n.RGBA){let re=xe?wr:it.getTransfer(te);F===n.FLOAT&&(ee=n.RGBA32F),F===n.HALF_FLOAT&&(ee=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ee=re===gt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&_e&&(ee=_e.RGBA16_EXT),F===n.SHORT&&_e&&(ee=_e.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(T,M){let F;return T?M===null||M===gn||M===bi?F=n.DEPTH24_STENCIL8:M===_n?F=n.DEPTH32F_STENCIL8:M===ur&&(F=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===gn||M===bi?F=n.DEPTH_COMPONENT24:M===_n?F=n.DEPTH_COMPONENT32F:M===ur&&(F=n.DEPTH_COMPONENT16),F}function b(T,M){return S(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){let M=new WeakRef(T);i.get(T).__ref=M,g.add(M),x.register(T,M,M)}function N(T){let M=i.get(T).__ref;M!==void 0&&(g.delete(M),x.unregister(M))}function L(T){D(T.target)}function R(T){w(T.target)}function D(T){T.removeEventListener("dispose",L),N(T),Y(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&m.delete(T)}function w(T){T.removeEventListener("dispose",R),N(T),ne(T)}function G(){for(let T of g){let M=T.deref();M!==void 0&&(M.isRenderTarget===!0?w(M):D(M))}g.clear(),m.clear()}function Y(T){let M=i.get(T);if(M.__webglInit===void 0)return;let F=T.source,$=p.get(F);if($){let te=$[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&V(T),Object.keys($).length===0&&p.delete(F)}i.remove(T)}function V(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let F=T.source,$=p.get(F);delete $[M.__cacheKey],o.memory.textures--}function ne(T){let M=i.get(T);M.__depthDisposeCallback&&M.__depthDisposeCallback();let F=T.depthTexture;if(F&&F.renderTarget===T&&D(F),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let xe=0;xe<M.__webglFramebuffer[te].length;xe++)n.deleteFramebuffer(M.__webglFramebuffer[te][xe]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let $=T.textures;for(let te=0,xe=$.length;te<xe;te++){let _e=i.get($[te]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove($[te])}i.remove(T)}let X=0;function ie(){X=0}function oe(){return X}function Se(T){X=T}function Te(){let T=X;return T>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),X+=1,T}function Q(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.mipmapsAutoUpdate),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function H(T,M){let F=i.get(T);if(T.isVideoTexture&&q(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let $=T.image;if($===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{st(F,T,M);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+M)}function K(T,M){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){st(F,T,M);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+M)}function le(T,M){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){st(F,T,M);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+M)}function se(T,M){let F=i.get(T);if(T.version>0&&F.__version!==T.version){_t(F,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+M)}let me={[Bn]:n.REPEAT,[Wt]:n.CLAMP_TO_EDGE,[Qs]:n.MIRRORED_REPEAT},Oe={[Ot]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[wo]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},Le={[bu]:n.NEVER,[Pc]:n.ALWAYS,[Au]:n.LESS,[Cc]:n.LEQUAL,[wu]:n.EQUAL,[Ic]:n.GEQUAL,[Ru]:n.GREATER,[Cu]:n.NOTEQUAL};function Ve(T,M){if(M.type===_n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===wo||M.magFilter===$r||M.magFilter===Wn||M.minFilter===Xt||M.minFilter===wo||M.minFilter===$r||M.minFilter===Wn)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,me[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,me[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,me[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Oe[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Oe[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ot||M.minFilter!==$r&&M.minFilter!==Wn||M.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ze(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",L),P(M));let $=M.source,te=p.get($);te===void 0&&(te={},p.set($,te));let xe=Q(M);if(xe!==T.__cacheKey){te[xe]===void 0&&(te[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[xe].usedTimes++;let _e=te[T.__cacheKey];_e!==void 0&&(te[T.__cacheKey].usedTimes--,_e.usedTimes===0&&V(M)),T.__cacheKey=xe,T.__webglTexture=te[xe].texture}return F}function Ge(T,M,F){return Math.floor(Math.floor(T/F)/M)}function ct(T,M,F,$){let xe=T.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,F,$,M.data);else{xe.sort((B,ue)=>B.start-ue.start);let _e=0;for(let B=1;B<xe.length;B++){let ue=xe[_e],de=xe[B],Ee=ue.start+ue.count,we=Ge(de.start,M.width,4),Ce=Ge(ue.start,M.width,4);de.start<=Ee+1&&we===Ce&&Ge(de.start+de.count-1,M.width,4)===we?ue.count=Math.max(ue.count,de.start+de.count-ue.start):(++_e,xe[_e]=de)}xe.length=_e+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let B=0,ue=xe.length;B<ue;B++){let de=xe[B],Ee=Math.floor(de.start/4),we=Math.ceil(de.count/4),Ce=Ee%M.width,Ne=Math.floor(Ee/M.width),Pe=we,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(n.TEXTURE_2D,0,Ce,Ne,Pe,ce,F,$,M.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function st(T,M,F){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);let te=ze(T,M),xe=M.source;t.bindTexture($,T.__webglTexture,n.TEXTURE0+F);let _e=i.get(xe);if(xe.version!==_e.__version||te===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ce=it.getPrimaries(it.workingColorSpace),ye=M.colorSpace===Yn?null:it.getPrimaries(M.colorSpace),be=M.colorSpace===Yn||ce===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let re=y(M.image,!1,r.maxTextureSize);re=z(M,re);let Me=s.convert(M.format,M.colorSpace),B=s.convert(M.type),ue=C(M.internalFormat,Me,B,M.normalized,M.colorSpace,M.isVideoTexture);Ve($,M);let de,Ee=M.mipmaps,we=M.isVideoTexture!==!0,Ce=_e.__version===void 0||te===!0,Ne=xe.dataReady,Pe=b(M,re);if(M.isDepthTexture)ue=v(M.format===Xn,M.type),Ce&&(we?t.texStorage2D(n.TEXTURE_2D,1,ue,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,ue,re.width,re.height,0,Me,B,null));else if(M.isDataTexture)if(Ee.length>0){we&&Ce&&t.texStorage2D(n.TEXTURE_2D,Pe,ue,Ee[0].width,Ee[0].height);for(let ce=0,ye=Ee.length;ce<ye;ce++)de=Ee[ce],we?Ne&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,de.width,de.height,Me,B,de.data):t.texImage2D(n.TEXTURE_2D,ce,ue,de.width,de.height,0,Me,B,de.data);M.generateMipmaps=!1}else we?(Ce&&t.texStorage2D(n.TEXTURE_2D,Pe,ue,re.width,re.height),Ne&&ct(M,re,Me,B)):t.texImage2D(n.TEXTURE_2D,0,ue,re.width,re.height,0,Me,B,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){we&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ue,Ee[0].width,Ee[0].height,re.depth);for(let ce=0,ye=Ee.length;ce<ye;ce++)if(de=Ee[ce],M.format!==xn)if(Me!==null)if(we){if(Ne)if(M.layerUpdates.size>0){let be=zc(de.width,de.height,M.format,M.type);for(let ge of M.layerUpdates){let Ke=de.data.subarray(ge*be/de.data.BYTES_PER_ELEMENT,(ge+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,ge,de.width,de.height,1,Me,Ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,de.width,de.height,re.depth,Me,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ue,de.width,de.height,re.depth,0,de.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,de.width,de.height,re.depth,Me,B,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ue,de.width,de.height,re.depth,0,Me,B,de.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{we&&Ce&&t.texStorage2D(n.TEXTURE_2D,Pe,ue,Ee[0].width,Ee[0].height);for(let ce=0,ye=Ee.length;ce<ye;ce++)de=Ee[ce],M.format!==xn?Me!==null?we?Ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,de.width,de.height,Me,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ue,de.width,de.height,0,de.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ne&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,de.width,de.height,Me,B,de.data):t.texImage2D(n.TEXTURE_2D,ce,ue,de.width,de.height,0,Me,B,de.data)}else if(M.isDataArrayTexture)if(we){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ue,re.width,re.height,re.depth),Ne)if(M.layerUpdates.size>0){let ce=zc(re.width,re.height,M.format,M.type);for(let ye of M.layerUpdates){let be=re.data.subarray(ye*ce/re.data.BYTES_PER_ELEMENT,(ye+1)*ce/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,re.width,re.height,1,Me,B,be)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,B,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,re.width,re.height,re.depth,0,Me,B,re.data);else if(M.isData3DTexture)we?(Ce&&t.texStorage3D(n.TEXTURE_3D,Pe,ue,re.width,re.height,re.depth),Ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,B,re.data)):t.texImage3D(n.TEXTURE_3D,0,ue,re.width,re.height,re.depth,0,Me,B,re.data);else if(M.isFramebufferTexture){if(Ce)if(we)t.texStorage2D(n.TEXTURE_2D,Pe,ue,re.width,re.height);else{let ce=re.width,ye=re.height;for(let be=0;be<Pe;be++)t.texImage2D(n.TEXTURE_2D,be,ue,ce,ye,0,Me,B,null),ce>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),re.parentNode!==ce){ce.appendChild(re),m.add(M),ce.onpaint=ye=>{let be=ye.changedElements;for(let ge of m)be.includes(ge.image)&&(ge.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let be=n.RGBA,ge=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,be,ge,Ke,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(we&&Ce){let ce=j(Ee[0]);t.texStorage2D(n.TEXTURE_2D,Pe,ue,ce.width,ce.height)}for(let ce=0,ye=Ee.length;ce<ye;ce++)de=Ee[ce],we?Ne&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me,B,de):t.texImage2D(n.TEXTURE_2D,ce,ue,Me,B,de);M.generateMipmaps=!1}else if(we){if(Ce){let ce=j(re);t.texStorage2D(n.TEXTURE_2D,Pe,ue,ce.width,ce.height)}Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,B,re)}else t.texImage2D(n.TEXTURE_2D,0,ue,Me,B,re);S(M)&&M.mipmapsAutoUpdate===!0&&_($),_e.__version=xe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _t(T,M,F){if(M.image.length!==6)return;let $=ze(T,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);let xe=i.get(te);if(te.version!==xe.__version||$===!0){t.activeTexture(n.TEXTURE0+F);let _e=it.getPrimaries(it.workingColorSpace),ee=M.colorSpace===Yn?null:it.getPrimaries(M.colorSpace),re=M.colorSpace===Yn||_e===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Me=M.isCompressedTexture||M.image[0].isCompressedTexture,B=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let ge=0;ge<6;ge++)!Me&&!B?ue[ge]=y(M.image[ge],!0,r.maxCubemapSize):ue[ge]=B?M.image[ge].image:M.image[ge],ue[ge]=z(M,ue[ge]);let de=ue[0],Ee=s.convert(M.format,M.colorSpace),we=s.convert(M.type),Ce=C(M.internalFormat,Ee,we,M.normalized,M.colorSpace),Ne=M.isVideoTexture!==!0,Pe=xe.__version===void 0||$===!0,ce=te.dataReady,ye=b(M,de);Ve(n.TEXTURE_CUBE_MAP,M);let be;if(M.isDepthTexture){if(Ce=v(M.format===Xn,M.type),Pe)if(Ne)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ce,de.width,de.height);else for(let ge=0;ge<6;ge++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,de.width,de.height,0,Ee,we,null)}else if(Me){Ne&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ce,de.width,de.height);for(let ge=0;ge<6;ge++){be=ue[ge].mipmaps;for(let Ke=0;Ke<be.length;Ke++){let mt=be[Ke];M.format!==xn?Ee!==null?Ne?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,0,0,mt.width,mt.height,Ee,mt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,Ce,mt.width,mt.height,0,mt.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,0,0,mt.width,mt.height,Ee,we,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke,Ce,mt.width,mt.height,0,Ee,we,mt.data)}}}else{if(be=M.mipmaps,Ne&&Pe){be.length>0&&ye++;let ge=j(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ce,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(B){Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue[ge].width,ue[ge].height,Ee,we,ue[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,ue[ge].width,ue[ge].height,0,Ee,we,ue[ge].data);for(let Ke=0;Ke<be.length;Ke++){let Pt=be[Ke].image[ge].image;Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,0,0,Pt.width,Pt.height,Ee,we,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,Ce,Pt.width,Pt.height,0,Ee,we,Pt.data)}}else{Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ee,we,ue[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,Ee,we,ue[ge]);for(let Ke=0;Ke<be.length;Ke++){let mt=be[Ke];Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,0,0,Ee,we,mt.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ke+1,Ce,Ee,we,mt.image[ge])}}}S(M)&&M.mipmapsAutoUpdate===!0&&_(n.TEXTURE_CUBE_MAP),xe.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ae(T,M,F,$,te,xe){let _e=s.convert(F.format,F.colorSpace),ee=s.convert(F.type),re=C(F.internalFormat,_e,ee,F.normalized,F.colorSpace),Me=i.get(M),B=i.get(F);if(B.__renderTarget=M,!Me.__hasExternalTextures){let ue=Math.max(1,M.width>>xe),de=Math.max(1,M.height>>xe);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,xe,re,ue,de,M.depth,0,_e,ee,null):t.texImage2D(te,xe,re,ue,de,0,_e,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),O(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,te,B.__webglTexture,0,W(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,te,B.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(T,M,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){let $=M.depthTexture,te=$&&$.isDepthTexture?$.type:null,xe=v(M.stencilBuffer,te),_e=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;O(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W(M),xe,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,W(M),xe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,T)}else{let $=M.textures;for(let te=0;te<$.length;te++){let xe=$[te],_e=s.convert(xe.format,xe.colorSpace),ee=s.convert(xe.type),re=C(xe.internalFormat,_e,ee,xe.normalized,xe.colorSpace);O(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W(M),re,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,W(M),re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(T,M,F){let $=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(M.depthTexture);te.__renderTarget=M;let xe=$?M.depthTexture.image[0]:M.depthTexture.image;(!te.__webglTexture||xe.width!==M.width||xe.height!==M.height)&&(xe.width=M.width,xe.height=M.height,M.depthTexture.needsUpdate=!0),$?se(M.depthTexture,0):H(M.depthTexture,0);let _e=te.__webglTexture,ee=W(M),re=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Me=M.depthTexture.format===Xn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===zn)O(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,re,_e,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,Me,re,_e,0);else if(M.depthTexture.format===Xn)O(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,re,_e,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,Me,re,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Re(T){let M=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=$}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let $=0;$<6;$++)Ie(M.__webglFramebuffer[$],T,$);else T.texture.mipmaps.length>0?Ie(M.__webglFramebuffer[0],T,0):Ie(M.__webglFramebuffer,T,0);else if(F){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),ve(M.__webglDepthbuffer[$],T,!1);else{let te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,xe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ve(M.__webglDepthbuffer,T,!1);else{let te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,xe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(T,M,F){let $=i.get(T);M!==void 0&&ae($.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Re(T)}function De(T){let M=T.texture,F=i.get(T),$=i.get(M);T.addEventListener("dispose",R),P(T);let te=T.textures,xe=T.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,o.memory.textures++),xe){F.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps.length>0){F.__webglFramebuffer[ee]=[];for(let re=0;re<M.mipmaps.length;re++)F.__webglFramebuffer[ee][re]=n.createFramebuffer()}else F.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)F.__webglFramebuffer[ee]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ee=0,re=te.length;ee<re;ee++){let Me=i.get(te[ee]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&O(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ee=0;ee<te.length;ee++){let re=te[ee];F.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);let Me=s.convert(re.format,re.colorSpace),B=s.convert(re.type),ue=C(re.internalFormat,Me,B,re.normalized,re.colorSpace,T.isXRRenderTarget===!0),de=W(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ue,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,F.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ae(F.__webglFramebuffer[ee][re],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,re);else ae(F.__webglFramebuffer[ee],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(M)?_(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let ee=0,re=te.length;ee<re;ee++){let Me=te[ee],B=i.get(Me),ue=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,B.__webglTexture),Ve(ue,Me),ae(F.__webglFramebuffer,T,Me,n.COLOR_ATTACHMENT0+ee,ue,0),S(Me)&&_(ue)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,$.__webglTexture),Ve(ee,M),M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)ae(F.__webglFramebuffer[re],T,M,n.COLOR_ATTACHMENT0,ee,re);else ae(F.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,ee,0);S(M)?_(ee):M.mipmaps.length>0&&n.texParameteri(ee,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&Re(T)}function E(T){let M=T.textures;for(let F=0,$=M.length;F<$;F++){let te=M[F];if(S(te)&&te.mipmapsAutoUpdate===!0){let xe=A(T),_e=i.get(te).__webglTexture;t.bindTexture(xe,_e),_(xe),t.unbindTexture()}}}let U=[];function k(T){if(T.samples>0){if(O(T)===!1){let M=T.textures,F=T.width,$=T.height,te=n.COLOR_BUFFER_BIT,xe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(T),ee=M.length>1;if(ee)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Me]);let B=i.get(M[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,te,n.NEAREST),l===!0&&(U.length=0,U.push(n.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&U.push(xe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Me]);let B=i.get(M[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function W(T){return Math.min(r.maxSamples,T.samples)}function O(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function q(T){let M=o.render.frame;f.get(T)!==M&&(f.set(T,M),T.update())}function z(T,M){let F=T.colorSpace,$=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ar&&F!==Yn&&(it.getTransfer(F)===gt?($!==xn||te!==Zt)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",F)),M}function j(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(a.width=T.naturalWidth||T.width,a.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(a.width=T.displayWidth,a.height=T.displayHeight):(a.width=T.width,a.height=T.height),a}this.allocateTextureUnit=Te,this.resetTextureUnits=ie,this.getTextureUnits=oe,this.setTextureUnits=Se,this.setTexture2D=H,this.setTexture2DArray=K,this.setTexture3D=le,this.setTextureCube=se,this.rebindTextures=Ae,this.setupRenderTarget=De,this.updateRenderTargetMipmap=E,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=O,this.dispose=G}function I_(n,e){function t(i,r=Yn){let s,o=it.getTransfer(r);if(i===Zt)return n.UNSIGNED_BYTE;if(i===Co)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Io)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mc)return n.BYTE;if(i===Ec)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===Ro)return n.INT;if(i===gn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===yn)return n.HALF_FLOAT;if(i===Ac)return n.ALPHA;if(i===wc)return n.RGB;if(i===xn)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===Xn)return n.DEPTH_STENCIL;if(i===Rc)return n.RED;if(i===Po)return n.RED_INTEGER;if(i===li)return n.RG;if(i===Lo)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===Qr||i===es||i===ts||i===ns)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oo||i===Do||i===Uo||i===Fo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===Bo||i===zo||i===Vo||i===Go||i===is||i===Ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ko||i===Bo)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vo)return s.COMPRESSED_R11_EAC;if(i===Go)return s.COMPRESSED_SIGNED_R11_EAC;if(i===is)return s.COMPRESSED_RG11_EAC;if(i===Ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wo||i===Xo||i===Yo||i===qo||i===Ko||i===jo||i===Zo||i===Jo||i===$o||i===Qo||i===ea||i===ta||i===na||i===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ko)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$o)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ta)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===na)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ia)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===sa||i===oa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ra)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===aa||i===ca||i===rs||i===la)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===la)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bn({vertexShader:P_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends mn{constructor(e,t){super();let i=this,r=null,s=1,o=null,c="local-floor",l=1,a=null,f=null,m=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",u=new jc,h={},y=t.getContextAttributes(),S=null,_=null,A=[],C=[],v=new He,b=null,P=null,N=new Ft;N.viewport=new ht;let L=new Ft;L.viewport=new ht;let R=[N,L],D=new Eo,w=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let H=A[Q];return H===void 0&&(H=new Ji,A[Q]=H),H.getTargetRaySpace()},this.getControllerGrip=function(Q){let H=A[Q];return H===void 0&&(H=new Ji,A[Q]=H),H.getGripSpace()},this.getHand=function(Q){let H=A[Q];return H===void 0&&(H=new Ji,A[Q]=H),H.getHandSpace()};function Y(Q){let H=C.indexOf(Q.inputSource);if(H===-1)return;let K=A[H];K!==void 0&&(K.update(Q.inputSource,Q.frame,a||o),K.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",ne);for(let Q=0;Q<A.length;Q++){let H=C[Q];H!==null&&(C[Q]=null,A[Q].disconnect(H))}w=null,G=null,u.reset();for(let Q in h)delete h[Q];if(e.setRenderTarget(S),p=null,d=null,m=null,r=null,_=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),P!==null){let Q=P.camera;Q.fov=P.fov,Q.zoom=P.zoom,Q.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(Q){a=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return m===null&&x&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",V),r.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,le=null,se=null;y.depth&&(se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?Xn:zn,le=y.stencil?bi:gn);let me={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};m=this.getBinding(),d=m.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new tn(d.textureWidth,d.textureHeight,{format:xn,type:Zt,depthTexture:new Hn(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let K={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new tn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),a=null,o=await r.requestReferenceSpace(c),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function ne(Q){for(let H=0;H<Q.removed.length;H++){let K=Q.removed[H],le=C.indexOf(K);le>=0&&(C[le]=null,A[le].disconnect(K))}for(let H=0;H<Q.added.length;H++){let K=Q.added[H],le=C.indexOf(K);if(le===-1){for(let me=0;me<A.length;me++)if(me>=C.length){C.push(K),le=me;break}else if(C[me]===null){C[me]=K,le=me;break}if(le===-1)break}let se=A[le];se&&se.connect(K)}}function X(Q,H){H===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(H.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let H=Q.near,K=Q.far;u.texture!==null&&(u.depthNear>0&&(H=u.depthNear),u.depthFar>0&&(K=u.depthFar)),D.near=L.near=N.near=H,D.far=L.far=N.far=K,(w!==D.near||G!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),w=D.near,G=D.far),D.layers.mask=Q.layers.mask|6,N.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let le=Q.parent,se=D.cameras;X(D,le);for(let me=0;me<se.length;me++)X(se[me],le);D.projectionMatrix.copy(N.projectionMatrix),D.projectionMatrixInverse.copy(N.projectionMatrixInverse),P===null&&Q.isPerspectiveCamera&&(P={camera:Q,fov:Q.fov,zoom:Q.zoom}),ie(Q,D,le)};function ie(Q,H,K){K===null?Q.matrix.copy(H.matrixWorld):(Q.matrix.copy(K.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(H.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(H.projectionMatrix),Q.projectionMatrixInverse.copy(H.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ji*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(D)},this.getCameraTexture=function(Q){return h[Q]};let oe=null;function Se(Q,H){if(f=H.getViewerPose(a||o),g=H,f!==null){let K=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let le=!1;K.length!==D.cameras.length&&(D.cameras.length=0,le=!0);for(let Le=0;Le<K.length;Le++){let Ve=K[Le],ze=null;if(p!==null)ze=p.getViewport(Ve);else{let ct=m.getViewSubImage(d,Ve);ze=ct.viewport,Le===0&&(e.setRenderTargetTextures(_,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(_))}let Ge=R[Le];Ge===void 0&&(Ge=new Ft,Ge.layers.enable(Le),Ge.viewport=new ht,R[Le]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ze.x,ze.y,ze.width,ze.height),Le===0&&(D.matrix.copy(Ge.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),le===!0&&D.cameras.push(Ge)}let se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){m=i.getBinding();let Le=m.getDepthInformation(K[0]);Le&&Le.isValid&&Le.texture&&u.init(Le,r.renderState)}if(se&&se.includes("camera-access")&&x){e.state.unbindTexture(),m=i.getBinding();for(let Le=0;Le<K.length;Le++){let Ve=K[Le].camera;if(Ve){let ze=h[Ve];ze||(ze=new Ur,h[Ve]=ze);let Ge=m.getCameraImage(Ve);ze.sourceTexture=Ge}}}}for(let K=0;K<A.length;K++){let le=C[K],se=A[K];le!==null&&se!==void 0&&se.update(le,H,a||o)}oe&&oe(Q,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}let Te=new dh;Te.setAnimationLoop(Se),this.setAnimationLoop=function(Q){oe=Q},this.dispose=function(){}}},N_=new ut,Mh=new Je;Mh.set(-1,0,0,0,1,0,0,0,1);function O_(n,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function i(u,h){h.color.getRGB(u.fogColor.value,Fc(n)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function r(u,h,y,S,_){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(u,h):h.isMeshLambertMaterial?(s(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(u,h),m(u,h)):h.isMeshPhongMaterial?(s(u,h),f(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(u,h),d(u,h),h.isMeshPhysicalMaterial&&p(u,h,_)):h.isMeshMatcapMaterial?(s(u,h),g(u,h)):h.isMeshDepthMaterial?s(u,h):h.isMeshDistanceMaterial?(s(u,h),x(u,h)):h.isMeshNormalMaterial?s(u,h):h.isLineBasicMaterial?(o(u,h),h.isLineDashedMaterial&&c(u,h)):h.isPointsMaterial?l(u,h,y,S):h.isSpriteMaterial?a(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===Dt&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===Dt&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);let y=e.get(h),S=y.envMap,_=y.envMapRotation;S&&(u.envMap.value=S,u.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(Mh),u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function o(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function c(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,y,S){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*y,u.scale.value=S*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function f(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function m(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function d(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function p(u,h,y){u.ior.value=h.ior,h.diffuseRoughness>0&&(u.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.retroreflectivity>0&&(u.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,h){h.matcap&&(u.matcap.value=h.matcap)}function x(u,h){let y=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function D_(n,e,t,i){let r={},s={};function o(y,S){let _=S.program;i.uniformBlockBinding(y,_,r[y.id])}function c(y,S){let _=r[y.id];_===void 0&&(g(y),_=l(y),r[y.id]=_,y.addEventListener("dispose",u));let A=S.program;i.updateUBOMapping(y,A);let C=e.render.frame;s[y.id]!==C&&(a(y),s[y.id]=C)}function l(y){let S=n.createBuffer(),_=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,_,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function a(y){let S=r[y.id],_=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,v=_.length;C<v;C++){let b=_[C];if(Array.isArray(b))for(let P=0,N=b.length;P<N;P++)f(b[P],C,P,A);else f(b,C,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,S,_,A){if(d(y,S,_,A)===!0){let C=y.__offset,v=y.value;if(Array.isArray(v)){let b=0;for(let P=0;P<v.length;P++){let N=v[P],L=x(N,!0);m(N,y.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else m(v,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,y.__data)}}function m(y,S,_){typeof y=="number"||typeof y=="boolean"?S[_]=y:y.isMatrix3?(S[_]=y.elements[0],S[_+1]=y.elements[1],S[_+2]=y.elements[2],S[_+3]=0,S[_+4]=y.elements[3],S[_+5]=y.elements[4],S[_+6]=y.elements[5],S[_+7]=0,S[_+8]=y.elements[6],S[_+9]=y.elements[7],S[_+10]=y.elements[8],S[_+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-_),_):y.toArray(S,_)}function d(y,S,_,A){let C=y.value,v=S+"_"+_;if(Array.isArray(C)){A[v]===void 0&&(A[v]=[]);let b=A[v],P=!1;for(let N=0;N<C.length;N++)p(C[N],b,N)===!0&&(P=!0);return P}return p(C,A,v)}function p(y,S,_){if(S[_]===void 0)return typeof y=="number"||typeof y=="boolean"?S[_]=y:ArrayBuffer.isView(y)?S[_]=y.slice():S[_]=y.clone(),!0;{let A=S[_];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return S[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(y){let S=y.uniforms,_=0,A=16;for(let v=0,b=S.length;v<b;v++){let P=Array.isArray(S[v])?S[v]:[S[v]];for(let N=0,L=P.length;N<L;N++){let R=P[N],D=Array.isArray(R.value)?R.value:[R.value],w=Array.isArray(S[v])||Array.isArray(R.value),G=_;for(let V=0,ne=D.length;V<ne;V++){let X=D[V],ie=x(X,w),oe=_%A,Se=oe%ie.boundary,Te=oe+Se;_+=Se,Te!==0&&A-Te<ie.storage&&(_+=A-Te),V===0&&(G=_),_+=ie.storage}let Y=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new Y((_-G)/Float32Array.BYTES_PER_ELEMENT),R.__offset=G}}let C=_%A;return C>0&&(_+=A-C),y.__size=_,y.__cache={},this}function x(y,S){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function u(y){let S=y.target;S.removeEventListener("dispose",u),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(let y in r)n.deleteBuffer(r[y]);r={},s={}}return{bind:o,update:c,dispose:h}}var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function F_(){return Rn===null&&(Rn=new $i(U_,16,16,li,yn),Rn.name="DFG_LUT",Rn.minFilter=Xt,Rn.magFilter=Xt,Rn.wrapS=Wt,Rn.wrapT=Wt,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var pa=class{constructor(e={}){let{canvas:t=Pu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:a=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Zt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=p,u=new Set([No,Lo,Po]),h=new Set([Zt,gn,ur,bi,Co,Io]),y=new Uint32Array(4),S=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},A=null,C=null,v=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,L=!1,R=null,D=null,w=null,G=null;this._outputColorSpace=vt;let Y=0,V=0,ne=null,X=-1,ie=null,oe=new ht,Se=new ht,Te=null,Q=new qe(0),H=0,K=t.width,le=t.height,se=1,me=null,Oe=null,Le=new ht(0,0,K,le),Ve=new ht(0,0,K,le),ze=!1,Ge=new Tn,ct=new ro,st=!1,_t=!1,ae=new ut,ve=new J,Ie=new ht,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function De(){return ne===null?se:1}let E=i;function U(I,Z){return t.getContext(I,Z)}let k,W,O,q,z,j,T,M,F,$,te,xe,_e,ee,re,Me,B,ue,de,Ee,we,Ce,Ne;try{let I={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ge,!1),E===null){let Z="webgl2";if(E=U(Z,I),E===null)throw U(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(I){throw t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),$e("WebGLRenderer: "+I.message),I}function Pe(){k=new Km(E),k.init(),we=new I_(E,k),W=new Fm(E,k,e,we),O=new R_(E,k),W.reversedDepthBuffer&&d&&O.buffers.depth.setReversed(!0),D=E.createFramebuffer(),w=E.createFramebuffer(),G=E.createFramebuffer(),q=new Jm(E),z=new p_,j=new C_(E,k,O,z,W,we,q),T=new qm(N),M=new $d(E),Ce=new Dm(E,M),F=new jm(E,M,q,Ce),$=new Qm(E,F,M,Ce,q),ue=new $m(E,W,j),re=new km(z),te=new f_(N,T,k,W,Ce,re),xe=new O_(N,z),_e=new g_,ee=new M_(k),B=new Om(N,T,O,$,g,l),Me=new w_(N,$,W),Ne=new D_(E,q,W,O),de=new Um(E,k,q),Ee=new Zm(E,k,q),q.programs=te.programs,N.capabilities=W,N.extensions=k,N.properties=z,N.renderLists=_e,N.shadowMap=Me,N.state=O,N.info=q}x!==Zt&&(P=new tg(x,t.width,t.height,c,r,s));let ce=new Zc(N,E);this.xr=ce,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let I=k.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=k.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(I){I!==void 0&&(se=I,this.setSize(K,le,!1))},this.getSize=function(I){return I.set(K,le)},this.setSize=function(I,Z,pe=!0){if(ce.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}K=I,le=Z,t.width=Math.floor(I*se),t.height=Math.floor(Z*se),pe===!0&&(t.style.width=I+"px",t.style.height=Z+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(K*se,le*se).floor()},this.setDrawingBufferSize=function(I,Z,pe){K=I,le=Z,se=pe,t.width=Math.floor(I*pe),t.height=Math.floor(Z*pe),this.setViewport(0,0,I,Z)},this.setEffects=function(I){if(x===Zt){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let Z=0;Z<I.length;Z++)if(I[Z].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(oe)},this.getViewport=function(I){return I.copy(Le)},this.setViewport=function(I,Z,pe,he){I.isVector4?Le.set(I.x,I.y,I.z,I.w):Le.set(I,Z,pe,he),O.viewport(oe.copy(Le).multiplyScalar(De()).round())},this.getScissor=function(I){return I.copy(Ve)},this.setScissor=function(I,Z,pe,he){I.isVector4?Ve.set(I.x,I.y,I.z,I.w):Ve.set(I,Z,pe,he),O.scissor(Se.copy(Ve).multiplyScalar(De()).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(I){O.setScissorTest(ze=I)},this.setOpaqueSort=function(I){me=I},this.setTransparentSort=function(I){Oe=I},this.getClearColor=function(I){return I.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(I=!0,Z=!0,pe=!0){let he=0;if(I){let fe=!1;if(ne!==null){let Fe=ne.texture.format;fe=u.has(Fe)}if(fe){let Fe=ne.texture.type,We=h.has(Fe),Ue=B.getClearColor(),Be=B.getClearAlpha(),je=Ue.r,Qe=Ue.g,ot=Ue.b;We?(y[0]=je,y[1]=Qe,y[2]=ot,y[3]=Be,E.clearBufferuiv(E.COLOR,0,y)):(S[0]=je,S[1]=Qe,S[2]=ot,S[3]=Be,E.clearBufferiv(E.COLOR,0,S))}else he|=E.COLOR_BUFFER_BIT}Z&&(he|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(he|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&E.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),R=I},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),B.dispose(),_e.dispose(),ee.dispose(),j.dispose(),z.dispose(),T.dispose(),$.dispose(),F.dispose(),Ce.dispose(),Ne.dispose(),te.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",al),ce.removeEventListener("sessionend",cl),ui.stop()};function ye(I){I.preventDefault(),Nc("WebGLRenderer: Context Lost."),L=!0}function be(){Nc("WebGLRenderer: Context Restored."),L=!1;let I=q.autoReset,Z=Me.enabled,pe=Me.autoUpdate,he=Me.needsUpdate,fe=Me.type;Pe(),q.autoReset=I,Me.enabled=Z,Me.autoUpdate=pe,Me.needsUpdate=he,Me.type=fe}function ge(I){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ke(I){let Z=I.target;Z.removeEventListener("dispose",Ke),mt(Z)}function mt(I){Pt(I),z.remove(I)}function Pt(I){let Z=z.get(I).programs;Z!==void 0&&(Z.forEach(function(pe){te.releaseProgram(pe)}),I.isShaderMaterial&&te.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,pe,he,fe,Fe){Z===null&&(Z=Re);let We=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,Ue=Uh(I,Z,pe,he,fe);O.setMaterial(he,We);let Be=pe.index,je=1;if(he.wireframe===!0){if(Be=F.getWireframeAttribute(pe),Be===void 0)return;je=2}let Qe=pe.drawRange,ot=pe.attributes.position,Xe=Qe.start*je,at=(Qe.start+Qe.count)*je;Fe!==null&&(Xe=Math.max(Xe,Fe.start*je),at=Math.min(at,(Fe.start+Fe.count)*je)),Be!==null?(Xe=Math.max(Xe,0),at=Math.min(at,Be.count)):ot!=null&&(Xe=Math.max(Xe,0),at=Math.min(at,ot.count));let bt=at-Xe;if(bt<0||bt===1/0)return;Ce.setup(fe,he,Ue,pe,Be);let xt,yt=de;if(Be!==null&&(xt=M.get(Be),yt=Ee,yt.setIndex(xt)),fe.isMesh)he.wireframe===!0?(O.setLineWidth(he.wireframeLinewidth*De()),yt.setMode(E.LINES)):yt.setMode(E.TRIANGLES);else if(fe.isLine){let kt=he.linewidth;kt===void 0&&(kt=1),O.setLineWidth(kt*De()),fe.isLineSegments?yt.setMode(E.LINES):fe.isLineLoop?yt.setMode(E.LINE_LOOP):yt.setMode(E.LINE_STRIP)}else fe.isPoints?yt.setMode(E.POINTS):fe.isSprite&&yt.setMode(E.TRIANGLES);if(fe.isBatchedMesh)if(k.get("WEBGL_multi_draw"))yt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{let kt=fe._multiDrawStarts,Ye=fe._multiDrawCounts,Ht=fe._multiDrawCount,dt=Be?M.get(Be).bytesPerElement:1,hi=z.get(he).currentProgram.getUniforms();for(let Bt=0;Bt<Ht;Bt++)hi.setValue(E,"_gl_DrawID",Bt),yt.render(kt[Bt]/dt,Ye[Bt])}else if(fe.isInstancedMesh)yt.renderInstances(Xe,bt,fe.count);else if(pe.isInstancedBufferGeometry){let kt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ye=Math.min(pe.instanceCount,kt);yt.renderInstances(Xe,bt,Ye)}else yt.render(Xe,bt)};function Ri(I,Z,pe,he){R!==null&&I.isNodeMaterial&&R.setObject(he,I),st===!0&&re.setState(I,pe,!1),I.transparent===!0&&I.side===Kt&&I.forceSinglePass===!1?(I.side=Dt,I.needsUpdate=!0,mr(I,Z,he),I.side=An,I.needsUpdate=!0,mr(I,Z,he),I.side=Kt):mr(I,Z,he)}this.compile=function(I,Z,pe=null){pe===null&&(pe=I),R!==null&&R.renderStart(I,Z,pe),C=ee.get(pe),C.init(Z),b.push(C),pe.traverseVisible(function(fe){fe.isLight&&fe.layers.test(Z.layers)&&(C.pushLight(fe),fe.castShadow&&C.pushShadow(fe))}),I!==pe&&I.traverseVisible(function(fe){fe.isLight&&fe.layers.test(Z.layers)&&(C.pushLight(fe),fe.castShadow&&C.pushShadow(fe))}),C.setupLights(),R!==null&&R.updateLights(C.state.lightsArray),_t=this.localClippingEnabled,st=re.init(this.clippingPlanes,_t),st===!0&&re.setGlobalState(this.clippingPlanes,Z),R!==null&&Me.render(C.state.shadowsArray,pe,Z);let he=new Set;return I.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;let Fe=fe.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){let Ue=Fe[We];Ri(Ue,pe,Z,fe),he.add(Ue)}else Ri(Fe,pe,Z,fe),he.add(Fe)}),C=b.pop(),R!==null&&R.renderEnd(),he},this.compileAsync=function(I,Z,pe=null){let he=this.compile(I,Z,pe);return new Promise(fe=>{function Fe(){if(he.forEach(function(We){let Be=z.get(We).currentProgram;(Be===void 0||Be.isReady())&&he.delete(We)}),he.size===0){fe(I);return}setTimeout(Fe,10)}k.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let wa=null;function Oh(I){wa&&wa(I)}function al(){ui.stop()}function cl(){ui.start()}let ui=new dh;ui.setAnimationLoop(Oh),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(I){wa=I,ce.setAnimationLoop(I),I===null?ui.stop():ui.start()},ce.addEventListener("sessionstart",al),ce.addEventListener("sessionend",cl),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R!==null&&R.renderStart(I,Z);let pe=ce.enabled===!0&&ce.isPresenting===!0,he=P!==null&&(ne===null||pe)&&P.begin(N,ne);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Z),Z=ce.getCamera()),I.isScene===!0&&I.onBeforeRender(N,I,Z,ne),C=ee.get(I,b.length),C.init(Z),C.state.textureUnits=j.getTextureUnits(),b.push(C),ae.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?ct.setFromArrayCamera(Z):Ge.setFromProjectionMatrix(ae,cn,Z.reversedDepth),_t=this.localClippingEnabled,st=re.init(this.clippingPlanes,_t),A=_e.get(I,v.length),A.init(),v.push(A),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let We=N.xr.getDepthSensingMesh();We!==null&&Ra(We,Z,-1/0,N.sortObjects)}Ra(I,Z,0,N.sortObjects),A.finish(),R!==null&&R.updateLights(C.state.lightsArray),N.sortObjects===!0&&A.sort(me,Oe),Ae=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ae&&B.addToRenderList(A,I),this.info.autoReset===!0&&this.info.reset(),st===!0&&re.beginShadows();let fe=C.state.shadowsArray;if(Me.render(fe,I,Z),st===!0&&re.endShadows(),(he&&P.hasRenderPass())===!1){let We=A.opaque,Ue=A.transmissive;if(C.setupLights(),Z.isArrayCamera){let Be=Z.cameras;if(Ue.length>0)for(let je=0,Qe=Be.length;je<Qe;je++){let ot=Be[je];ul(We,Ue,I,ot)}Ae&&B.render(I);for(let je=0,Qe=Be.length;je<Qe;je++){let ot=Be[je];ll(A,I,ot,ot.viewport)}}else Ue.length>0&&ul(We,Ue,I,Z),Ae&&B.render(I),ll(A,I,Z)}ne!==null&&V===0&&(j.updateMultisampleRenderTarget(ne),j.updateRenderTargetMipmap(ne)),he&&P.end(N),I.isScene===!0&&I.onAfterRender(N,I,Z),Ce.resetDefaultState(),X=-1,ie=null,b.pop(),b.length>0?(C=b[b.length-1],j.setTextureUnits(C.state.textureUnits),st===!0&&re.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,R!==null&&R.renderEnd()};function Ra(I,Z,pe,he){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)pe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)C.pushLight(I),I.castShadow&&C.pushShadow(I);else if(I.isSprite){let We=Z.isArrayCamera?ct:Ge;if(!I.frustumCulled||I.intersectsFrustum(We)){he&&Ie.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ae);let Ue=$.update(I),Be=I.material;Be.visible&&A.push(I,Ue,Be,pe,Ie.z,null,Z)}}else if(I.isMesh||I.isLine||I.isPoints){let We=Z.isArrayCamera?ct:Ge;if(!I.frustumCulled||I.intersectsFrustum(We)){let Ue=$.update(I),Be=I.material;if(he&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ie.copy(I.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ie.copy(Ue.boundingSphere.center)),Ie.applyMatrix4(I.matrixWorld).applyMatrix4(ae)),Array.isArray(Be)){let je=Ue.groups;for(let Qe=0,ot=je.length;Qe<ot;Qe++){let Xe=je[Qe],at=Be[Xe.materialIndex];at&&at.visible&&A.push(I,Ue,at,pe,Ie.z,Xe,Z)}}else Be.visible&&A.push(I,Ue,Be,pe,Ie.z,null,Z)}}}let Fe=I.children;for(let We=0,Ue=Fe.length;We<Ue;We++)Ra(Fe[We],Z,pe,he)}function ll(I,Z,pe,he){let{opaque:fe,transmissive:Fe,transparent:We}=I;C.setupLightsView(pe),st===!0&&re.setGlobalState(N.clippingPlanes,pe),he&&O.viewport(oe.copy(he)),fe.length>0&&gs(fe,Z,pe),Fe.length>0&&gs(Fe,Z,pe),We.length>0&&gs(We,Z,pe),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ul(I,Z,pe,he){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[he.id]===void 0){let Xe=k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[he.id]=new tn(1,1,{generateMipmaps:!0,type:Xe?yn:Zt,minFilter:Wn,samples:Math.max(4,W.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Fe=C.state.transmissionRenderTarget[he.id],We=he.viewport||oe;Fe.setSize(We.z*N.transmissionResolutionScale,We.w*N.transmissionResolutionScale);let Ue=N.getRenderTarget(),Be=N.getActiveCubeFace(),je=N.getActiveMipmapLevel();N.setRenderTarget(Fe),N.getClearColor(Q),H=N.getClearAlpha(),H<1&&N.setClearColor(16777215,.5),N.clear(),Ae&&B.render(pe);let Qe=N.toneMapping;N.toneMapping=wn;let ot=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),C.setupLightsView(he),st===!0&&re.setGlobalState(N.clippingPlanes,he),gs(I,pe,he),j.updateMultisampleRenderTarget(Fe),j.updateRenderTargetMipmap(Fe),k.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let at=0,bt=Z.length;at<bt;at++){let xt=Z[at],{object:yt,geometry:kt,material:Ye,group:Ht}=xt;if(Ye.side===Kt&&yt.layers.test(he.layers)){let dt=Ye.side;Ye.side=Dt,Ye.needsUpdate=!0,hl(yt,pe,he,kt,Ye,Ht),Ye.side=dt,Ye.needsUpdate=!0,Xe=!0}}Xe===!0&&(j.updateMultisampleRenderTarget(Fe),j.updateRenderTargetMipmap(Fe))}N.setRenderTarget(Ue,Be,je),N.setClearColor(Q,H),ot!==void 0&&(he.viewport=ot),N.toneMapping=Qe}function gs(I,Z,pe){let he=Z.isScene===!0?Z.overrideMaterial:null;for(let fe=0,Fe=I.length;fe<Fe;fe++){let We=I[fe],{object:Ue,geometry:Be,group:je}=We,Qe=We.material;Qe.allowOverride===!0&&he!==null&&(Qe=he),Ue.layers.test(pe.layers)&&hl(Ue,Z,pe,Be,Qe,je)}}function hl(I,Z,pe,he,fe,Fe){R!==null&&fe.isNodeMaterial&&R.setObject(I,fe),I.onBeforeRender(N,Z,pe,he,fe,Fe),I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),fe.onBeforeRender(N,Z,pe,he,I,Fe),fe.transparent===!0&&fe.side===Kt&&fe.forceSinglePass===!1?(fe.side=Dt,fe.needsUpdate=!0,N.renderBufferDirect(pe,Z,he,fe,I,Fe),fe.side=An,fe.needsUpdate=!0,N.renderBufferDirect(pe,Z,he,fe,I,Fe),fe.side=Kt):N.renderBufferDirect(pe,Z,he,fe,I,Fe),I.onAfterRender(N,Z,pe,he,fe,Fe)}function dl(I){let Z=0;for(let pe of I)pe.texture!==null&&Z++;return Z}function mr(I,Z,pe){Z.isScene!==!0&&(Z=Re);let he=z.get(I),fe=C.state.lights,Fe=C.state.shadowsArray,We=fe.state.version,Ue=te.getParameters(I,fe.state,Fe,Z,pe,C.state.lightProbeGridArray),Be=te.getProgramCacheKey(Ue),je=he.programs;he.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Z.environment:null,he.fog=Z.fog;let Qe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;he.envMap=T.get(I.envMap||he.environment,Qe),he.envMapRotation=he.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,je===void 0&&(I.addEventListener("dispose",Ke),je=new Map,he.programs=je,he.programVariants=new Map);let ot=je.get(Be);if(ot!==void 0){if(he.currentProgram===ot&&he.lightsStateVersion===We)return pl(I,Ue),ot}else Ue.uniforms=te.getUniforms(I),R!==null&&I.isNodeMaterial&&R.build(I,pe,Ue),I.onBeforeCompile(Ue,N),ot=te.acquireProgram(Ue,Be),je.set(Be,ot),he.uniforms=Ue.uniforms;let Xe=he.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Xe.clippingPlanes=re.uniform),pl(I,Ue),he.needsLights=kh(I),he.lightsStateVersion=We,he.needsLights&&(Xe.ambientLightColor.value=fe.state.ambient,Xe.lightProbe.value=fe.state.probe,Xe.sunLights.value=fe.state.sun,Xe.sunLightShadows.value=fe.state.sunShadow,Xe.directionalLights.value=fe.state.directional,Xe.directionalLightShadows.value=fe.state.directionalShadow,Xe.spotLights.value=fe.state.spot,Xe.spotLightShadows.value=fe.state.spotShadow,Xe.rectAreaLights.value=fe.state.rectArea,Xe.ltc_1.value=fe.state.rectAreaLTC1,Xe.ltc_2.value=fe.state.rectAreaLTC2,Xe.pointLights.value=fe.state.point,Xe.pointLightShadows.value=fe.state.pointShadow,Xe.hemisphereLights.value=fe.state.hemi,Xe.sunShadowMatrix.value=fe.state.sunShadowMatrix,Xe.sunShadowCascade.value=fe.state.sunShadowCascade,Xe.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,Xe.spotLightMatrix.value=fe.state.spotLightMatrix,Xe.spotLightMap.value=fe.state.spotLightMap,Xe.pointShadowMatrix.value=fe.state.pointShadowMatrix),he.numLightProbeGrids=dl(C.state.lightProbeGridArray),he.currentProgram=ot,he.uniformsList=null,ot}function Dh(I,Z,pe,he,fe){let Fe=z.get(I),We=Fe.currentProgram.id+","+he+","+fe,Ue=Fe.programVariants.get(We);return Ue===void 0?(Ue=mr(I,Z,pe),Fe.programVariants.set(We,Ue)):(Fe.currentProgram=Ue,Fe.uniformsList=null,Fe.outputColorSpace=he,Fe.toneMapping=fe),Ue}function fl(I){if(I.uniformsList===null){let Z=I.currentProgram.getUniforms();I.uniformsList=dr.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function pl(I,Z){let pe=z.get(I);pe.outputColorSpace=Z.outputColorSpace,pe.batching=Z.batching,pe.batchingColor=Z.batchingColor,pe.instancing=Z.instancing,pe.instancingColor=Z.instancingColor,pe.instancingMorph=Z.instancingMorph,pe.skinning=Z.skinning,pe.morphTargets=Z.morphTargets,pe.morphNormals=Z.morphNormals,pe.morphColors=Z.morphColors,pe.morphTargetsCount=Z.morphTargetsCount,pe.numClippingPlanes=Z.numClippingPlanes,pe.numIntersection=Z.numClipIntersection,pe.vertexAlphas=Z.vertexAlphas,pe.vertexTangents=Z.vertexTangents,pe.toneMapping=Z.toneMapping}function Uh(I,Z,pe,he,fe){Z.isScene!==!0&&(Z=Re),j.resetTextureUnits();let Fe=Z.fog,We=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?Z.environment:null,Ue=ne===null?N.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:it.workingColorSpace,Be=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,je=T.get(he.envMap||We,Be),Qe=he.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ot=!!pe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Xe=!!pe.morphAttributes.position,at=!!pe.morphAttributes.normal,bt=!!pe.morphAttributes.color,xt=wn;he.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(xt=N.toneMapping);let yt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,kt=yt!==void 0?yt.length:0,Ye=z.get(he),Ht=C.state.lights;if(st===!0&&(_t===!0||I!==ie)){let Mt=I===ie&&he.id===X;re.setState(he,I,Mt)}let dt=!1,hi=!1;he.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==Ht.state.version||fe.isBatchedMesh&&Ye.batching===!1||!fe.isBatchedMesh&&Ye.batching===!0||fe.isBatchedMesh&&Ye.batchingColor===!0&&fe._colorsTexture===null||fe.isBatchedMesh&&Ye.batchingColor===!1&&fe._colorsTexture!==null||fe.isInstancedMesh&&Ye.instancing===!1||!fe.isInstancedMesh&&Ye.instancing===!0||fe.isSkinnedMesh&&Ye.skinning===!1||!fe.isSkinnedMesh&&Ye.skinning===!0||fe.isInstancedMesh&&Ye.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Ye.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&Ye.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&Ye.instancingMorph===!1&&fe.morphTexture!==null||Ye.envMap!==je||he.fog===!0&&Ye.fog!==Fe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==re.numPlanes||Ye.numIntersection!==re.numIntersection)||Ye.vertexAlphas!==Qe||Ye.vertexTangents!==ot||Ye.morphTargets!==Xe||Ye.morphNormals!==at||Ye.morphColors!==bt||Ye.morphTargetsCount!==kt||Ye.numLightProbeGrids!==dl(C.state.lightProbeGridArray)?dt=!0:(Ye.outputColorSpace!==Ue||Ye.toneMapping!==xt)&&(hi=!0):(dt=!0,Ye.__version=he.version);let Bt=Ye.currentProgram;(dt===!0||hi===!0)&&(Bt=hi===!0?Dh(he,Z,fe,Ue,xt):mr(he,Z,fe),R&&he.isNodeMaterial&&R.onUpdateProgram(he,Bt,Ye));let _s=!1,Kn=!1,di=!1,lt=Bt.getUniforms(),Ut=Ye.uniforms;if(O.useProgram(Bt.program)&&(_s=!0,Kn=!0,di=!0),he.id!==X&&(X=he.id,Kn=!0),_s||ie!==I){O.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),lt.setValue(E,"projectionMatrix",I.projectionMatrix),lt.setValue(E,"viewMatrix",I.matrixWorldInverse);let Lt=lt.map.cameraPosition;Lt!==void 0&&Lt.setValue(E,ve.setFromMatrixPosition(I.matrixWorld)),W.logarithmicDepthBuffer&&lt.setValue(E,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&lt.setValue(E,"isOrthographic",I.isOrthographicCamera===!0),ie!==I&&(ie=I,Kn=!0,di=!0)}if(Ye.needsLights&&(Ht.state.sunShadowMap.length>0&&lt.setValue(E,"sunShadowMap",Ht.state.sunShadowMap,j),Ht.state.directionalShadowMap.length>0&&lt.setValue(E,"directionalShadowMap",Ht.state.directionalShadowMap,j),Ht.state.spotShadowMap.length>0&&lt.setValue(E,"spotShadowMap",Ht.state.spotShadowMap,j),Ht.state.pointShadowMap.length>0&&lt.setValue(E,"pointShadowMap",Ht.state.pointShadowMap,j)),fe.isSkinnedMesh){lt.setOptional(E,fe,"bindMatrix"),lt.setOptional(E,fe,"bindMatrixInverse");let Mt=fe.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),lt.setValue(E,"boneTexture",Mt.boneTexture,j))}fe.isBatchedMesh&&(lt.setOptional(E,fe,"batchingTexture"),lt.setValue(E,"batchingTexture",fe._matricesTexture,j),lt.setOptional(E,fe,"batchingIdTexture"),lt.setValue(E,"batchingIdTexture",fe._indirectTexture,j),lt.setOptional(E,fe,"batchingColorTexture"),fe._colorsTexture!==null&&lt.setValue(E,"batchingColorTexture",fe._colorsTexture,j));let hn=pe.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ue.update(fe,pe,Bt),(Kn||Ye.receiveShadow!==fe.receiveShadow)&&(Ye.receiveShadow=fe.receiveShadow,lt.setValue(E,"receiveShadow",fe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&Z.environment!==null&&(Ut.envMapIntensity.value=Z.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=F_()),Kn){if(lt.setValue(E,"toneMappingExposure",N.toneMappingExposure),Ye.needsLights&&Fh(Ut,di),Fe&&he.fog===!0&&xe.refreshFogUniforms(Ut,Fe),xe.refreshMaterialUniforms(Ut,he,se,le,C.state.transmissionRenderTarget[I.id]),Ye.needsLights&&Ye.numLightProbeGrids>0){let Mt=_,Lt=0;for(let Pn of C.state.lightProbeGridArray)Pn.texture!==null&&(Mt.textures[Lt]=Pn.texture,Mt.min[Lt]=Pn.boundingBox.min,Mt.max[Lt]=Pn.boundingBox.max,Mt.resolution[Lt]=Pn.resolution,Lt++);for(let Pn in Mt)Mt[Pn].length=Lt;Ut.probesSH.value=Mt.textures,Ut.probesMin.value=Mt.min,Ut.probesMax.value=Mt.max,Ut.probesResolution.value=Mt.resolution}dr.upload(E,fl(Ye),Ut,j)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(dr.upload(E,fl(Ye),Ut,j),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&lt.setValue(E,"center",fe.center),lt.setValue(E,"modelViewMatrix",fe.modelViewMatrix),lt.setValue(E,"normalMatrix",fe.normalMatrix),lt.setValue(E,"modelMatrix",fe.matrixWorld),he.uniformsGroups!==void 0){let Mt=he.uniformsGroups;for(let Lt=0,Pn=Mt.length;Lt<Pn;Lt++){let gl=Mt[Lt];Ne.update(gl,Bt),Ne.bind(gl,Bt)}}return Bt}function Fh(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.sunLights.needsUpdate=Z,I.sunLightShadows.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function kh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(I,Z,pe){let he=z.get(I);he.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),z.get(I.texture).__webglTexture=Z,z.get(I.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:pe,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Z){let pe=z.get(I);pe.__webglFramebuffer=Z,pe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,pe=0){ne=I,Y=Z,V=pe;let he=null,fe=!1,Fe=!1;if(I){let Ue=z.get(I);if(Ue.__useDefaultFramebuffer!==void 0){O.bindFramebuffer(E.FRAMEBUFFER,Ue.__webglFramebuffer),oe.copy(I.viewport),Se.copy(I.scissor),Te=I.scissorTest,O.viewport(oe),O.scissor(Se),O.setScissorTest(Te),X=-1;return}else if(Ue.__webglFramebuffer===void 0)j.setupRenderTarget(I);else if(Ue.__hasExternalTextures)j.rebindTextures(I,z.get(I.texture).__webglTexture,z.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Qe=I.depthTexture;if(Ue.__boundDepthTexture!==Qe){if(Qe!==null&&z.has(Qe)&&(I.width!==Qe.image.width||I.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(I)}}let Be=I.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Fe=!0);let je=z.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?he=je[Z][pe]:he=je[Z],fe=!0):I.samples>0&&j.useMultisampledRTT(I)===!1?he=z.get(I).__webglMultisampledFramebuffer:Array.isArray(je)?he=je[pe]:he=je,oe.copy(I.viewport),Se.copy(I.scissor),Te=I.scissorTest}else oe.copy(Le).multiplyScalar(se).floor(),Se.copy(Ve).multiplyScalar(se).floor(),Te=ze;if(pe!==0&&(he=D),O.bindFramebuffer(E.FRAMEBUFFER,he)&&O.drawBuffers(I,he),O.viewport(oe),O.scissor(Se),O.setScissorTest(Te),fe){let Ue=z.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ue.__webglTexture,pe)}else if(Fe){let Ue=Z;for(let Be=0;Be<I.textures.length;Be++){let je=z.get(I.textures[Be]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Be,je.__webglTexture,pe,Ue)}}else if(I!==null&&pe!==0){let Ue=z.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ue.__webglTexture,pe)}X=-1};function ml(I){let Z=z.get(I);return(Z.__readFormat!==I.format||Z.__readType!==I.type)&&(Z.__readFormat=I.format,Z.__readType=I.type,Z.__formatReadable=W.textureFormatReadable(I.format),Z.__typeReadable=W.textureTypeReadable(I.type)),Z}this.readRenderTargetPixels=function(I,Z,pe,he,fe,Fe,We,Ue=0){if(!(I&&I.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=z.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&We!==void 0&&(Be=Be[We],Array.isArray(Be)&&(Be=Be[0])),Be){O.bindFramebuffer(E.FRAMEBUFFER,Be);try{let je=I.textures[Ue],Qe=je.format,ot=je.type;I.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ue);let Xe=ml(je);if(Xe.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-he&&pe>=0&&pe<=I.height-fe&&E.readPixels(Z,pe,he,fe,we.convert(Qe),we.convert(ot),Fe)}finally{let je=ne!==null?z.get(ne).__webglFramebuffer:null;O.bindFramebuffer(E.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(I,Z,pe,he,fe,Fe,We,Ue=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=z.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&We!==void 0&&(Be=Be[We],Array.isArray(Be)&&(Be=Be[0])),Be)if(Z>=0&&Z<=I.width-he&&pe>=0&&pe<=I.height-fe){O.bindFramebuffer(E.FRAMEBUFFER,Be);let je=I.textures[Ue],Qe=je.format,ot=je.type;I.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ue);let Xe=ml(je);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,at),E.bufferData(E.PIXEL_PACK_BUFFER,Fe.byteLength,E.STREAM_READ),E.readPixels(Z,pe,he,fe,we.convert(Qe),we.convert(ot),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let bt=ne!==null?z.get(ne).__webglFramebuffer:null;O.bindFramebuffer(E.FRAMEBUFFER,bt);let xt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Nu(E,xt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,at),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Fe),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(at),E.deleteSync(xt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Z=null,pe=0){let he=Math.pow(2,-pe),fe=Math.floor(I.image.width*he),Fe=Math.floor(I.image.height*he),We=Z!==null?Z.x:0,Ue=Z!==null?Z.y:0;j.setTexture2D(I,0),E.copyTexSubImage2D(E.TEXTURE_2D,pe,0,0,We,Ue,fe,Fe),O.unbindTexture()},this.copyTextureToTexture=function(I,Z,pe=null,he=null,fe=0,Fe=0){let We,Ue,Be,je,Qe,ot,Xe,at,bt,xt=I.isCompressedTexture?I.mipmaps[Fe]:I.image;if(pe!==null)We=pe.max.x-pe.min.x,Ue=pe.max.y-pe.min.y,Be=pe.isBox3?pe.max.z-pe.min.z:1,je=pe.min.x,Qe=pe.min.y,ot=pe.isBox3?pe.min.z:0;else{let lt=Math.pow(2,-fe);We=Math.floor(xt.width*lt),Ue=Math.floor(xt.height*lt),I.isDataArrayTexture?Be=xt.depth:I.isData3DTexture?Be=Math.floor(xt.depth*lt):Be=1,je=0,Qe=0,ot=0}he!==null?(Xe=he.x,at=he.y,bt=he.z):(Xe=0,at=0,bt=0);let yt=we.convert(Z.format),kt=we.convert(Z.type),Ye;Z.isData3DTexture?(j.setTexture3D(Z,0),Ye=E.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),Ye=E.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),Ye=E.TEXTURE_2D),O.activeTexture(E.TEXTURE0),O.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);let Ht=O.getParameter(E.UNPACK_ROW_LENGTH),dt=O.getParameter(E.UNPACK_IMAGE_HEIGHT),hi=O.getParameter(E.UNPACK_SKIP_PIXELS),Bt=O.getParameter(E.UNPACK_SKIP_ROWS),_s=O.getParameter(E.UNPACK_SKIP_IMAGES);O.pixelStorei(E.UNPACK_ROW_LENGTH,xt.width),O.pixelStorei(E.UNPACK_IMAGE_HEIGHT,xt.height),O.pixelStorei(E.UNPACK_SKIP_PIXELS,je),O.pixelStorei(E.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(E.UNPACK_SKIP_IMAGES,ot);let Kn=I.isDataArrayTexture||I.isData3DTexture,di=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isDepthTexture){let lt=z.get(I),Ut=z.get(Z),hn=z.get(lt.__renderTarget),Mt=z.get(Ut.__renderTarget);O.bindFramebuffer(E.READ_FRAMEBUFFER,hn.__webglFramebuffer),O.bindFramebuffer(E.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Lt=0;Lt<Be;Lt++)Kn&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,z.get(I).__webglTexture,fe,ot+Lt),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,z.get(Z).__webglTexture,Fe,bt+Lt)),E.blitFramebuffer(je,Qe,je+We,Qe+Ue,Xe,at,Xe+We,at+Ue,E.DEPTH_BUFFER_BIT,E.NEAREST);O.bindFramebuffer(E.READ_FRAMEBUFFER,null),O.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(fe!==0||I.isRenderTargetTexture||z.has(I)){let lt=z.get(I),Ut=z.get(Z);O.bindFramebuffer(E.READ_FRAMEBUFFER,w),O.bindFramebuffer(E.DRAW_FRAMEBUFFER,G);for(let hn=0;hn<Be;hn++)Kn?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,lt.__webglTexture,fe,ot+hn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,lt.__webglTexture,fe),di?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ut.__webglTexture,Fe,bt+hn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ut.__webglTexture,Fe),fe!==0?E.blitFramebuffer(je,Qe,je+We,Qe+Ue,Xe,at,Xe+We,at+Ue,E.COLOR_BUFFER_BIT,E.NEAREST):di?E.copyTexSubImage3D(Ye,Fe,Xe,at,bt+hn,je,Qe,We,Ue):E.copyTexSubImage2D(Ye,Fe,Xe,at,je,Qe,We,Ue);O.bindFramebuffer(E.READ_FRAMEBUFFER,null),O.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else di?I.isDataTexture||I.isData3DTexture?E.texSubImage3D(Ye,Fe,Xe,at,bt,We,Ue,Be,yt,kt,xt.data):Z.isCompressedArrayTexture?E.compressedTexSubImage3D(Ye,Fe,Xe,at,bt,We,Ue,Be,yt,xt.data):E.texSubImage3D(Ye,Fe,Xe,at,bt,We,Ue,Be,yt,kt,xt):I.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Fe,Xe,at,We,Ue,yt,kt,xt.data):I.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Fe,Xe,at,xt.width,xt.height,yt,xt.data):E.texSubImage2D(E.TEXTURE_2D,Fe,Xe,at,We,Ue,yt,kt,xt);O.pixelStorei(E.UNPACK_ROW_LENGTH,Ht),O.pixelStorei(E.UNPACK_IMAGE_HEIGHT,dt),O.pixelStorei(E.UNPACK_SKIP_PIXELS,hi),O.pixelStorei(E.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(E.UNPACK_SKIP_IMAGES,_s),Fe===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&E.generateMipmap(Ye),O.unbindTexture()},this.initRenderTarget=function(I){z.get(I).__webglFramebuffer===void 0&&j.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?j.setTextureCube(I,0):I.isData3DTexture?j.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?j.setTexture2DArray(I,0):j.setTexture2D(I,0),O.unbindTexture()},this.resetState=function(){Y=0,V=0,ne=null,O.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Eh={type:"change"},$c={type:"start"},bh={type:"end"},_a=new ni,Th=new en,B_=Math.cos(70*ss.DEG2RAD),It=new J,Jt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jc=1e-6,ya=class extends Zr{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Yt,this._lastTargetPosition=new J,this._quat=new Yt().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sr,this._sphericalDelta=new sr,this._scale=1,this._panOffset=new J,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new J,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=V_.bind(this),this._onPointerDown=z_.bind(this),this._onPointerUp=G_.bind(this),this._onContextMenu=j_.bind(this),this._onMouseWheel=X_.bind(this),this._onKeyDown=Y_.bind(this),this._onTouchStart=q_.bind(this),this._onTouchMove=K_.bind(this),this._onMouseDown=H_.bind(this),this._onMouseMove=W_.bind(this),this._interceptControlDown=Z_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Eh),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Jt:i>Math.PI&&(i-=Jt),r<-Math.PI?r+=Jt:r>Math.PI&&(r-=Jt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let c=It.length();o=this._clampDistance(c*this._scale);let l=c-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let c=new J(this._mouse.x,this._mouse.y,0);c.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let a=new J(this._mouse.x,this._mouse.y,0);a.unproject(this.object),this.object.position.sub(a).add(c),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_a.origin.copy(this.object.position),_a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_a.direction))<B_?this.object.lookAt(this.target):(Th.setFromNormalAndCoplanarPoint(this.object.up,this.target),_a.intersectPlane(Th,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jc||this._lastTargetPosition.distanceToSquared(this.target)>Jc?(this.dispatchEvent(Eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;It.copy(r).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,c=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(o,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function z_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function V_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function G_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bh),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function H_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case ai.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case ai.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent($c)}function W_(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function X_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent($c),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bh))}function Y_(n){this.enabled!==!1&&this._handleKeyDown(n)}function q_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1){this.state=ft.NONE;break}this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1){this.state=ft.NONE;break}this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent($c)}function K_(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function j_(n){this.enabled!==!1&&n.preventDefault()}function Z_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var et=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),Ah=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),pt=et((exports,module)=>{"use strict";var __spreadArray=exports&&exports.__spreadArray||function(n,e){for(var t=0,i=e.length,r=n.length;t<i;t++,r++)n[r]=e[t];return n};Object.defineProperty(exports,"__esModule",{value:!0}),exports.toFastProperties=exports.timer=exports.peek=exports.isES2015MapSupported=exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(n){return n&&n.length===0}exports.isEmpty=isEmpty;function keys(n){return n==null?[]:Object.keys(n)}exports.keys=keys;function values(n){for(var e=[],t=Object.keys(n),i=0;i<t.length;i++)e.push(n[t[i]]);return e}exports.values=values;function mapValues(n,e){for(var t=[],i=keys(n),r=0;r<i.length;r++){var s=i[r];t.push(e.call(null,n[s],s))}return t}exports.mapValues=mapValues;function map(n,e){for(var t=[],i=0;i<n.length;i++)t.push(e.call(null,n[i],i));return t}exports.map=map;function flatten(n){for(var e=[],t=0;t<n.length;t++){var i=n[t];Array.isArray(i)?e=e.concat(flatten(i)):e.push(i)}return e}exports.flatten=flatten;function first(n){return isEmpty(n)?void 0:n[0]}exports.first=first;function last(n){var e=n&&n.length;return e?n[e-1]:void 0}exports.last=last;function forEach(n,e){if(Array.isArray(n))for(var t=0;t<n.length;t++)e.call(null,n[t],t);else if(isObject(n))for(var i=keys(n),t=0;t<i.length;t++){var r=i[t],s=n[r];e.call(null,s,r)}else throw Error("non exhaustive match")}exports.forEach=forEach;function isString(n){return typeof n=="string"}exports.isString=isString;function isUndefined(n){return n===void 0}exports.isUndefined=isUndefined;function isFunction(n){return n instanceof Function}exports.isFunction=isFunction;function drop(n,e){return e===void 0&&(e=1),n.slice(e,n.length)}exports.drop=drop;function dropRight(n,e){return e===void 0&&(e=1),n.slice(0,n.length-e)}exports.dropRight=dropRight;function filter(n,e){var t=[];if(Array.isArray(n))for(var i=0;i<n.length;i++){var r=n[i];e.call(null,r)&&t.push(r)}return t}exports.filter=filter;function reject(n,e){return filter(n,function(t){return!e(t)})}exports.reject=reject;function pick(n,e){for(var t=Object.keys(n),i={},r=0;r<t.length;r++){var s=t[r],o=n[s];e(o)&&(i[s]=o)}return i}exports.pick=pick;function has(n,e){return isObject(n)?n.hasOwnProperty(e):!1}exports.has=has;function contains(n,e){return find(n,function(t){return t===e})!==void 0}exports.contains=contains;function cloneArr(n){for(var e=[],t=0;t<n.length;t++)e.push(n[t]);return e}exports.cloneArr=cloneArr;function cloneObj(n){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}exports.cloneObj=cloneObj;function find(n,e){for(var t=0;t<n.length;t++){var i=n[t];if(e.call(null,i))return i}}exports.find=find;function findAll(n,e){for(var t=[],i=0;i<n.length;i++){var r=n[i];e.call(null,r)&&t.push(r)}return t}exports.findAll=findAll;function reduce(n,e,t){for(var i=Array.isArray(n),r=i?n:values(n),s=i?[]:keys(n),o=t,c=0;c<r.length;c++)o=e.call(null,o,r[c],i?c:s[c]);return o}exports.reduce=reduce;function compact(n){return reject(n,function(e){return e==null})}exports.compact=compact;function uniq(n,e){e===void 0&&(e=function(i){return i});var t=[];return reduce(n,function(i,r){var s=e(r);return contains(t,s)?i:(t.push(s),i.concat(r))},[])}exports.uniq=uniq;function partial(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=[null],r=i.concat(e);return Function.bind.apply(n,r)}exports.partial=partial;function isArray(n){return Array.isArray(n)}exports.isArray=isArray;function isRegExp(n){return n instanceof RegExp}exports.isRegExp=isRegExp;function isObject(n){return n instanceof Object}exports.isObject=isObject;function every(n,e){for(var t=0;t<n.length;t++)if(!e(n[t],t))return!1;return!0}exports.every=every;function difference(n,e){return reject(n,function(t){return contains(e,t)})}exports.difference=difference;function some(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return!0;return!1}exports.some=some;function indexOf(n,e){for(var t=0;t<n.length;t++)if(n[t]===e)return t;return-1}exports.indexOf=indexOf;function sortBy(n,e){var t=cloneArr(n);return t.sort(function(i,r){return e(i)-e(r)}),t}exports.sortBy=sortBy;function zipObject(n,e){if(n.length!==e.length)throw Error("can't zipObject with different number of keys and values!");for(var t={},i=0;i<n.length;i++)t[n[i]]=e[i];return t}exports.zipObject=zipObject;function assign(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var i=0;i<e.length;i++)for(var r=e[i],s=keys(r),o=0;o<s.length;o++){var c=s[o];n[c]=r[c]}return n}exports.assign=assign;function assignNoOverwrite(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var i=0;i<e.length;i++)for(var r=e[i],s=keys(r),o=0;o<s.length;o++){var c=s[o];has(n,c)||(n[c]=r[c])}return n}exports.assignNoOverwrite=assignNoOverwrite;function defaults(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return assignNoOverwrite.apply(void 0,__spreadArray([{}],n))}exports.defaults=defaults;function groupBy(n,e){var t={};return forEach(n,function(i){var r=e(i),s=t[r];s?s.push(i):t[r]=[i]}),t}exports.groupBy=groupBy;function merge(n,e){for(var t=cloneObj(n),i=keys(e),r=0;r<i.length;r++){var s=i[r],o=e[s];t[s]=o}return t}exports.merge=merge;function NOOP(){}exports.NOOP=NOOP;function IDENTITY(n){return n}exports.IDENTITY=IDENTITY;function packArray(n){for(var e=[],t=0;t<n.length;t++){var i=n[t];e.push(i!==void 0?i:void 0)}return e}exports.packArray=packArray;function PRINT_ERROR(n){console&&console.error&&console.error("Error: "+n)}exports.PRINT_ERROR=PRINT_ERROR;function PRINT_WARNING(n){console&&console.warn&&console.warn("Warning: "+n)}exports.PRINT_WARNING=PRINT_WARNING;function isES2015MapSupported(){return typeof Map=="function"}exports.isES2015MapSupported=isES2015MapSupported;function peek(n){return n[n.length-1]}exports.peek=peek;function timer(n){var e=new Date().getTime(),t=n(),i=new Date().getTime(),r=i-e;return{time:r,value:t}}exports.timer=timer;function toFastProperties(toBecomeFast){function FakeConstructor(){}FakeConstructor.prototype=toBecomeFast;var fakeInstance=new FakeConstructor;function fakeAccess(){return typeof fakeInstance.bar}return fakeAccess(),fakeAccess(),toBecomeFast}exports.toFastProperties=toFastProperties}),Qc=et((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(u){this.idx=u.idx,this.input=u.input,this.groupIdx=u.groupIdx},t.prototype.pattern=function(u){this.idx=0,this.input=u,this.groupIdx=0,this.consumeChar("/");var h=this.disjunction();this.consumeChar("/");for(var y={type:"Flags",loc:{begin:this.idx,end:u.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":l(y,"global");break;case"i":l(y,"ignoreCase");break;case"m":l(y,"multiLine");break;case"u":l(y,"unicode");break;case"y":l(y,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:y,value:h,loc:this.loc(0)}},t.prototype.disjunction=function(){var u=[],h=this.idx;for(u.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),u.push(this.alternative());return{type:"Disjunction",value:u,loc:this.loc(h)}},t.prototype.alternative=function(){for(var u=[],h=this.idx;this.isTerm();)u.push(this.term());return{type:"Alternative",value:u,loc:this.loc(h)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var u=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(u)};case"$":return{type:"EndAnchor",loc:this.loc(u)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(u)};case"B":return{type:"NonWordBoundary",loc:this.loc(u)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var h;switch(this.popChar()){case"=":h="Lookahead";break;case"!":h="NegativeLookahead";break}a(h);var y=this.disjunction();return this.consumeChar(")"),{type:h,value:y,loc:this.loc(u)}}f()},t.prototype.quantifier=function(u){var h,y=this.idx;switch(this.popChar()){case"*":h={atLeast:0,atMost:1/0};break;case"+":h={atLeast:1,atMost:1/0};break;case"?":h={atLeast:0,atMost:1};break;case"{":var S=this.integerIncludingZero();switch(this.popChar()){case"}":h={atLeast:S,atMost:S};break;case",":var _;this.isDigit()?(_=this.integerIncludingZero(),h={atLeast:S,atMost:_}):h={atLeast:S,atMost:1/0},this.consumeChar("}");break}if(u===!0&&h===void 0)return;a(h);break}if(!(u===!0&&h===void 0))return a(h),this.peekChar(0)==="?"?(this.consumeChar("?"),h.greedy=!1):h.greedy=!0,h.type="Quantifier",h.loc=this.loc(y),h},t.prototype.atom=function(){var u,h=this.idx;switch(this.peekChar()){case".":u=this.dotAll();break;case"\\":u=this.atomEscape();break;case"[":u=this.characterClass();break;case"(":u=this.group();break}return u===void 0&&this.isPatternCharacter()&&(u=this.patternCharacter()),a(u),u.loc=this.loc(h),this.isQuantifier()&&(u.quantifier=this.quantifier()),u},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[o(`
`),o("\r"),o("\u2028"),o("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var u=this.positiveInteger();return{type:"GroupBackReference",value:u}},t.prototype.characterClassEscape=function(){var u,h=!1;switch(this.popChar()){case"d":u=d;break;case"D":u=d,h=!0;break;case"s":u=g;break;case"S":u=g,h=!0;break;case"w":u=p;break;case"W":u=p,h=!0;break}return a(u),{type:"Set",value:u,complement:h}},t.prototype.controlEscapeAtom=function(){var u;switch(this.popChar()){case"f":u=o("\f");break;case"n":u=o(`
`);break;case"r":u=o("\r");break;case"t":u=o("	");break;case"v":u=o("\v");break}return a(u),{type:"Character",value:u}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var u=this.popChar();if(/[a-zA-Z]/.test(u)===!1)throw Error("Invalid ");var h=u.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:h}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:o("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var u=this.popChar();return{type:"Character",value:o(u)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var u=this.popChar();return{type:"Character",value:o(u)}}},t.prototype.characterClass=function(){var u=[],h=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),h=!0);this.isClassAtom();){var y=this.classAtom(),S=y.type==="Character";if(S&&this.isRangeDash()){this.consumeChar("-");var _=this.classAtom(),A=_.type==="Character";if(A){if(_.value<y.value)throw Error("Range out of order in character class");u.push({from:y.value,to:_.value})}else c(y.value,u),u.push(o("-")),c(_.value,u)}else c(y.value,u)}return this.consumeChar("]"),{type:"Set",complement:h,value:u}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:o("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var u=!0;(this.consumeChar("("),this.peekChar(0))==="?"?(this.consumeChar("?"),this.consumeChar(":"),u=!1):this.groupIdx++;var h=this.disjunction();this.consumeChar(")");var y={type:"Group",capturing:u,value:h};return u&&(y.idx=this.groupIdx),y},t.prototype.positiveInteger=function(){var u=this.popChar();if(s.test(u)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)u+=this.popChar();return parseInt(u,10)},t.prototype.integerIncludingZero=function(){var u=this.popChar();if(r.test(u)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)u+=this.popChar();return parseInt(u,10)},t.prototype.patternCharacter=function(){var u=this.popChar();switch(u){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:o(u)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(u){switch(u===void 0&&(u=0),this.peekChar(u)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var u=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(u)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(u){for(var h="",y=0;y<u;y++){var S=this.popChar();if(i.test(S)===!1)throw Error("Expecting a HexDecimal digits");h+=S}var _=parseInt(h,16);return{type:"Character",value:_}},t.prototype.peekChar=function(u){return u===void 0&&(u=0),this.input[this.idx+u]},t.prototype.popChar=function(){var u=this.peekChar(0);return this.consumeChar(),u},t.prototype.consumeChar=function(u){if(u!==void 0&&this.input[this.idx]!==u)throw Error("Expected: '"+u+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(u){return{begin:u,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,s=/[1-9]/;function o(u){return u.charCodeAt(0)}function c(u,h){u.length!==void 0?u.forEach(function(y){h.push(y)}):h.push(u)}function l(u,h){if(u[h]===!0)throw"duplicate flag "+h;u[h]=!0}function a(u){if(u===void 0)throw Error("Internal Error - Should never get here!")}function f(){throw Error("Internal Error - Should never get here!")}var m,d=[];for(m=o("0");m<=o("9");m++)d.push(m);var p=[o("_")].concat(d);for(m=o("a");m<=o("z");m++)p.push(m);for(m=o("A");m<=o("Z");m++)p.push(m);var g=[o(" "),o("\f"),o(`
`),o("\r"),o("	"),o("\v"),o("	"),o("\xA0"),o("\u1680"),o("\u2000"),o("\u2001"),o("\u2002"),o("\u2003"),o("\u2004"),o("\u2005"),o("\u2006"),o("\u2007"),o("\u2008"),o("\u2009"),o("\u200A"),o("\u2028"),o("\u2029"),o("\u202F"),o("\u205F"),o("\u3000"),o("\uFEFF")];function x(){}return x.prototype.visitChildren=function(u){for(var h in u){var y=u[h];u.hasOwnProperty(h)&&(y.type!==void 0?this.visit(y):Array.isArray(y)&&y.forEach(function(S){this.visit(S)},this))}},x.prototype.visit=function(u){switch(u.type){case"Pattern":this.visitPattern(u);break;case"Flags":this.visitFlags(u);break;case"Disjunction":this.visitDisjunction(u);break;case"Alternative":this.visitAlternative(u);break;case"StartAnchor":this.visitStartAnchor(u);break;case"EndAnchor":this.visitEndAnchor(u);break;case"WordBoundary":this.visitWordBoundary(u);break;case"NonWordBoundary":this.visitNonWordBoundary(u);break;case"Lookahead":this.visitLookahead(u);break;case"NegativeLookahead":this.visitNegativeLookahead(u);break;case"Character":this.visitCharacter(u);break;case"Set":this.visitSet(u);break;case"Group":this.visitGroup(u);break;case"GroupBackReference":this.visitGroupBackReference(u);break;case"Quantifier":this.visitQuantifier(u);break}this.visitChildren(u)},x.prototype.visitPattern=function(u){},x.prototype.visitFlags=function(u){},x.prototype.visitDisjunction=function(u){},x.prototype.visitAlternative=function(u){},x.prototype.visitStartAnchor=function(u){},x.prototype.visitEndAnchor=function(u){},x.prototype.visitWordBoundary=function(u){},x.prototype.visitNonWordBoundary=function(u){},x.prototype.visitLookahead=function(u){},x.prototype.visitNegativeLookahead=function(u){},x.prototype.visitCharacter=function(u){},x.prototype.visitSet=function(u){},x.prototype.visitGroup=function(u){},x.prototype.visitGroupBackReference=function(u){},x.prototype.visitQuantifier=function(u){},{RegExpParser:t,BaseRegExpVisitor:x,VERSION:"0.5.0"}})}),el=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=Qc(),t={},i=new e.RegExpParser;function r(o){var c=o.toString();if(t.hasOwnProperty(c))return t[c];var l=i.pattern(c);return t[c]=l,l}n.getRegExpAst=r;function s(){t={}}n.clearRegExpParserCache=s}),$_=et(n=>{"use strict";var e=n&&n.__extends||(function(){var x=function(u,h){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,S){y.__proto__=S}||function(y,S){for(var _ in S)Object.prototype.hasOwnProperty.call(S,_)&&(y[_]=S[_])},x(u,h)};return function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");x(u,h);function y(){this.constructor=u}u.prototype=h===null?Object.create(h):(y.prototype=h.prototype,new y)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=Qc(),i=pt(),r=el(),s=wh(),o="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function c(x,u){u===void 0&&(u=!1);try{var h=r.getRegExpAst(x),y=l(h.value,{},h.flags.ignoreCase);return y}catch(_){if(_.message===o)u&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+x.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var S="";u&&(S=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+x.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+S)}}return[]}n.getOptimizedStartCodesIndices=c;function l(x,u,h){switch(x.type){case"Disjunction":for(var y=0;y<x.value.length;y++)l(x.value[y],u,h);break;case"Alternative":for(var S=x.value,y=0;y<S.length;y++){var _=S[y];switch(_.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var A=_;switch(A.type){case"Character":a(A.value,u,h);break;case"Set":if(A.complement===!0)throw Error(o);i.forEach(A.value,function(b){if(typeof b=="number")a(b,u,h);else{var P=b;if(h===!0)for(var N=P.from;N<=P.to;N++)a(N,u,h);else{for(var N=P.from;N<=P.to&&N<s.minOptimizationVal;N++)a(N,u,h);if(P.to>=s.minOptimizationVal)for(var L=P.from>=s.minOptimizationVal?P.from:s.minOptimizationVal,R=P.to,D=s.charCodeToOptimizedIndex(L),w=s.charCodeToOptimizedIndex(R),G=D;G<=w;G++)u[G]=G}}});break;case"Group":l(A.value,u,h);break;default:throw Error("Non Exhaustive Match")}var C=A.quantifier!==void 0&&A.quantifier.atLeast===0;if(A.type==="Group"&&d(A)===!1||A.type!=="Group"&&C===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(u)}n.firstCharOptimizedIndices=l;function a(x,u,h){var y=s.charCodeToOptimizedIndex(x);u[y]=y,h===!0&&f(x,u)}function f(x,u){var h=String.fromCharCode(x),y=h.toUpperCase();if(y!==h){var S=s.charCodeToOptimizedIndex(y.charCodeAt(0));u[S]=S}else{var _=h.toLowerCase();if(_!==h){var S=s.charCodeToOptimizedIndex(_.charCodeAt(0));u[S]=S}}}function m(x,u){return i.find(x.value,function(h){if(typeof h=="number")return i.contains(u,h);var y=h;return i.find(u,function(S){return y.from<=S&&S<=y.to})!==void 0})}function d(x){return x.quantifier&&x.quantifier.atLeast===0?!0:x.value?i.isArray(x.value)?i.every(x.value,d):d(x.value):!1}var p=(function(x){e(u,x);function u(h){var y=x.call(this)||this;return y.targetCharCodes=h,y.found=!1,y}return u.prototype.visitChildren=function(h){if(this.found!==!0){switch(h.type){case"Lookahead":this.visitLookahead(h);return;case"NegativeLookahead":this.visitNegativeLookahead(h);return}x.prototype.visitChildren.call(this,h)}},u.prototype.visitCharacter=function(h){i.contains(this.targetCharCodes,h.value)&&(this.found=!0)},u.prototype.visitSet=function(h){h.complement?m(h,this.targetCharCodes)===void 0&&(this.found=!0):m(h,this.targetCharCodes)!==void 0&&(this.found=!0)},u})(t.BaseRegExpVisitor);function g(x,u){if(u instanceof RegExp){var h=r.getRegExpAst(u),y=new p(x);return y.visit(h),y.found}else return i.find(u,function(S){return i.contains(x,S.charCodeAt(0))})!==void 0}n.canMatchCharCode=g}),wh=et(n=>{"use strict";var e=n&&n.__extends||(function(){var H=function(K,le){return H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(se,me){se.__proto__=me}||function(se,me){for(var Oe in me)Object.prototype.hasOwnProperty.call(me,Oe)&&(se[Oe]=me[Oe])},H(K,le)};return function(K,le){if(typeof le!="function"&&le!==null)throw new TypeError("Class extends value "+String(le)+" is not a constructor or null");H(K,le);function se(){this.constructor=K}K.prototype=le===null?Object.create(le):(se.prototype=le.prototype,new se)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=Qc(),i=xa(),r=pt(),s=$_(),o=el(),c="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function l(){n.SUPPORT_STICKY=!1}n.disableSticky=l;function a(){n.SUPPORT_STICKY=!0}n.enableSticky=a;function f(H,K){K=r.defaults(K,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(De,E){return E()}});var le=K.tracer;le("initCharCodeToOptimizedIndexMap",function(){Q()});var se;le("Reject Lexer.NA",function(){se=r.reject(H,function(De){return De[c]===i.Lexer.NA})});var me=!1,Oe;le("Transform Patterns",function(){me=!1,Oe=r.map(se,function(De){var E=De[c];if(r.isRegExp(E)){var U=E.source;return U.length===1&&U!=="^"&&U!=="$"&&U!=="."&&!E.ignoreCase?U:U.length===2&&U[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],U[1])?U[1]:K.useSticky?R(E):L(E)}else{if(r.isFunction(E))return me=!0,{exec:E};if(r.has(E,"exec"))return me=!0,E;if(typeof E=="string"){if(E.length===1)return E;var k=E.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),W=new RegExp(k);return K.useSticky?R(W):L(W)}else throw Error("non exhaustive match")}})});var Le,Ve,ze,Ge,ct;le("misc mapping",function(){Le=r.map(se,function(De){return De.tokenTypeIdx}),Ve=r.map(se,function(De){var E=De.GROUP;if(E!==i.Lexer.SKIPPED){if(r.isString(E))return E;if(r.isUndefined(E))return!1;throw Error("non exhaustive match")}}),ze=r.map(se,function(De){var E=De.LONGER_ALT;if(E){var U=r.indexOf(se,E);return U}}),Ge=r.map(se,function(De){return De.PUSH_MODE}),ct=r.map(se,function(De){return r.has(De,"POP_MODE")})});var st;le("Line Terminator Handling",function(){var De=ie(K.lineTerminatorCharacters);st=r.map(se,function(E){return!1}),K.positionTracking!=="onlyOffset"&&(st=r.map(se,function(E){if(r.has(E,"LINE_BREAKS"))return E.LINE_BREAKS;if(ne(E,De)===!1)return s.canMatchCharCode(De,E.PATTERN)}))});var _t,ae,ve,Ie;le("Misc Mapping #2",function(){_t=r.map(se,Y),ae=r.map(Oe,V),ve=r.reduce(se,function(De,E){var U=E.GROUP;return r.isString(U)&&U!==i.Lexer.SKIPPED&&(De[U]=[]),De},{}),Ie=r.map(Oe,function(De,E){return{pattern:Oe[E],longerAlt:ze[E],canLineTerminator:st[E],isCustom:_t[E],short:ae[E],group:Ve[E],push:Ge[E],pop:ct[E],tokenTypeIdx:Le[E],tokenType:se[E]}})});var Re=!0,Ae=[];return K.safeMode||le("First Char Optimization",function(){Ae=r.reduce(se,function(De,E,U){if(typeof E.PATTERN=="string"){var k=E.PATTERN.charCodeAt(0),W=Te(k);oe(De,W,Ie[U])}else if(r.isArray(E.START_CHARS_HINT)){var O;r.forEach(E.START_CHARS_HINT,function(z){var j=typeof z=="string"?z.charCodeAt(0):z,T=Te(j);O!==T&&(O=T,oe(De,T,Ie[U]))})}else if(r.isRegExp(E.PATTERN))if(E.PATTERN.unicode)Re=!1,K.ensureOptimizations&&r.PRINT_ERROR(""+s.failedOptimizationPrefixMsg+("	Unable to analyze < "+E.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var q=s.getOptimizedStartCodesIndices(E.PATTERN,K.ensureOptimizations);r.isEmpty(q)&&(Re=!1),r.forEach(q,function(z){oe(De,z,Ie[U])})}else K.ensureOptimizations&&r.PRINT_ERROR(""+s.failedOptimizationPrefixMsg+("	TokenType: <"+E.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),Re=!1;return De},[])}),le("ArrayPacking",function(){Ae=r.packArray(Ae)}),{emptyGroups:ve,patternIdxToConfig:Ie,charCodeToPatternIdxToConfig:Ae,hasCustom:me,canBeOptimized:Re}}n.analyzeTokenTypes=f;function m(H,K){var le=[],se=p(H);le=le.concat(se.errors);var me=g(se.valid),Oe=me.valid;return le=le.concat(me.errors),le=le.concat(d(Oe)),le=le.concat(C(Oe)),le=le.concat(v(Oe,K)),le=le.concat(b(Oe)),le}n.validatePatterns=m;function d(H){var K=[],le=r.filter(H,function(se){return r.isRegExp(se[c])});return K=K.concat(u(le)),K=K.concat(S(le)),K=K.concat(_(le)),K=K.concat(A(le)),K=K.concat(h(le)),K}function p(H){var K=r.filter(H,function(me){return!r.has(me,c)}),le=r.map(K,function(me){return{message:"Token Type: ->"+me.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[me]}}),se=r.difference(H,K);return{errors:le,valid:se}}n.findMissingPatterns=p;function g(H){var K=r.filter(H,function(me){var Oe=me[c];return!r.isRegExp(Oe)&&!r.isFunction(Oe)&&!r.has(Oe,"exec")&&!r.isString(Oe)}),le=r.map(K,function(me){return{message:"Token Type: ->"+me.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[me]}}),se=r.difference(H,K);return{errors:le,valid:se}}n.findInvalidPatterns=g;var x=/[^\\][\$]/;function u(H){var K=(function(me){e(Oe,me);function Oe(){var Le=me!==null&&me.apply(this,arguments)||this;return Le.found=!1,Le}return Oe.prototype.visitEndAnchor=function(Le){this.found=!0},Oe})(t.BaseRegExpVisitor),le=r.filter(H,function(me){var Oe=me[c];try{var Le=o.getRegExpAst(Oe),Ve=new K;return Ve.visit(Le),Ve.found}catch{return x.test(Oe.source)}}),se=r.map(le,function(me){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+me.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[me]}});return se}n.findEndOfInputAnchor=u;function h(H){var K=r.filter(H,function(se){var me=se[c];return me.test("")}),le=r.map(K,function(se){return{message:"Token Type: ->"+se.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[se]}});return le}n.findEmptyMatchRegExps=h;var y=/[^\\[][\^]|^\^/;function S(H){var K=(function(me){e(Oe,me);function Oe(){var Le=me!==null&&me.apply(this,arguments)||this;return Le.found=!1,Le}return Oe.prototype.visitStartAnchor=function(Le){this.found=!0},Oe})(t.BaseRegExpVisitor),le=r.filter(H,function(me){var Oe=me[c];try{var Le=o.getRegExpAst(Oe),Ve=new K;return Ve.visit(Le),Ve.found}catch{return y.test(Oe.source)}}),se=r.map(le,function(me){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+me.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[me]}});return se}n.findStartOfInputAnchor=S;function _(H){var K=r.filter(H,function(se){var me=se[c];return me instanceof RegExp&&(me.multiline||me.global)}),le=r.map(K,function(se){return{message:"Token Type: ->"+se.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[se]}});return le}n.findUnsupportedFlags=_;function A(H){var K=[],le=r.map(H,function(Oe){return r.reduce(H,function(Le,Ve){return Oe.PATTERN.source===Ve.PATTERN.source&&!r.contains(K,Ve)&&Ve.PATTERN!==i.Lexer.NA&&(K.push(Ve),Le.push(Ve)),Le},[])});le=r.compact(le);var se=r.filter(le,function(Oe){return Oe.length>1}),me=r.map(se,function(Oe){var Le=r.map(Oe,function(ze){return ze.name}),Ve=r.first(Oe).PATTERN;return{message:"The same RegExp pattern ->"+Ve+"<-"+("has been used in all of the following Token Types: "+Le.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:Oe}});return me}n.findDuplicatePatterns=A;function C(H){var K=r.filter(H,function(se){if(!r.has(se,"GROUP"))return!1;var me=se.GROUP;return me!==i.Lexer.SKIPPED&&me!==i.Lexer.NA&&!r.isString(me)}),le=r.map(K,function(se){return{message:"Token Type: ->"+se.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[se]}});return le}n.findInvalidGroupType=C;function v(H,K){var le=r.filter(H,function(me){return me.PUSH_MODE!==void 0&&!r.contains(K,me.PUSH_MODE)}),se=r.map(le,function(me){var Oe="Token Type: ->"+me.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+me.PUSH_MODE+"<-which does not exist";return{message:Oe,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[me]}});return se}n.findModesThatDoNotExist=v;function b(H){var K=[],le=r.reduce(H,function(se,me,Oe){var Le=me.PATTERN;return Le===i.Lexer.NA||(r.isString(Le)?se.push({str:Le,idx:Oe,tokenType:me}):r.isRegExp(Le)&&N(Le)&&se.push({str:Le.source,idx:Oe,tokenType:me})),se},[]);return r.forEach(H,function(se,me){r.forEach(le,function(Oe){var Le=Oe.str,Ve=Oe.idx,ze=Oe.tokenType;if(me<Ve&&P(Le,se.PATTERN)){var Ge="Token: ->"+ze.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+se.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;K.push({message:Ge,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[se,ze]})}})}),K}n.findUnreachablePatterns=b;function P(H,K){if(r.isRegExp(K)){var le=K.exec(H);return le!==null&&le.index===0}else{if(r.isFunction(K))return K(H,0,[],{});if(r.has(K,"exec"))return K.exec(H,0,[],{});if(typeof K=="string")return K===H;throw Error("non exhaustive match")}}function N(H){var K=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(K,function(le){return H.source.indexOf(le)!==-1})===void 0}function L(H){var K=H.ignoreCase?"i":"";return new RegExp("^(?:"+H.source+")",K)}n.addStartOfInput=L;function R(H){var K=H.ignoreCase?"iy":"y";return new RegExp(""+H.source,K)}n.addStickyFlag=R;function D(H,K,le){var se=[];return r.has(H,n.DEFAULT_MODE)||se.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has(H,n.MODES)||se.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has(H,n.MODES)&&r.has(H,n.DEFAULT_MODE)&&!r.has(H.modes,H.defaultMode)&&se.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+H.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has(H,n.MODES)&&r.forEach(H.modes,function(me,Oe){r.forEach(me,function(Le,Ve){r.isUndefined(Le)&&se.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+Oe+"> at index: <"+Ve+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),se}n.performRuntimeChecks=D;function w(H,K,le){var se=[],me=!1,Oe=r.compact(r.flatten(r.mapValues(H.modes,function(ze){return ze}))),Le=r.reject(Oe,function(ze){return ze[c]===i.Lexer.NA}),Ve=ie(le);return K&&r.forEach(Le,function(ze){var Ge=ne(ze,Ve);if(Ge!==!1){var ct=X(ze,Ge),st={message:ct,type:Ge.issue,tokenType:ze};se.push(st)}else r.has(ze,"LINE_BREAKS")?ze.LINE_BREAKS===!0&&(me=!0):s.canMatchCharCode(Ve,ze.PATTERN)&&(me=!0)}),K&&!me&&se.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),se}n.performWarningRuntimeChecks=w;function G(H){var K={},le=r.keys(H);return r.forEach(le,function(se){var me=H[se];if(r.isArray(me))K[se]=[];else throw Error("non exhaustive match")}),K}n.cloneEmptyGroups=G;function Y(H){var K=H.PATTERN;if(r.isRegExp(K))return!1;if(r.isFunction(K)||r.has(K,"exec"))return!0;if(r.isString(K))return!1;throw Error("non exhaustive match")}n.isCustomPattern=Y;function V(H){return r.isString(H)&&H.length===1?H.charCodeAt(0):!1}n.isShortPattern=V,n.LineTerminatorOptimizedTester={test:function(H){for(var K=H.length,le=this.lastIndex;le<K;le++){var se=H.charCodeAt(le);if(se===10)return this.lastIndex=le+1,!0;if(se===13)return H.charCodeAt(le+1)===10?this.lastIndex=le+2:this.lastIndex=le+1,!0}return!1},lastIndex:0};function ne(H,K){if(r.has(H,"LINE_BREAKS"))return!1;if(r.isRegExp(H.PATTERN)){try{s.canMatchCharCode(K,H.PATTERN)}catch(le){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:le.message}}return!1}else{if(r.isString(H.PATTERN))return!1;if(Y(H))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function X(H,K){if(K.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+H.name+`> Token Type
`)+("	 Root cause: "+K.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(K.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+H.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=X;function ie(H){var K=r.map(H,function(le){return r.isString(le)&&le.length>0?le.charCodeAt(0):le});return K}function oe(H,K,le){H[K]===void 0?H[K]=[le]:H[K].push(le)}n.minOptimizationVal=256;var Se=[];function Te(H){return H<n.minOptimizationVal?H:Se[H]}n.charCodeToOptimizedIndex=Te;function Q(){if(r.isEmpty(Se)){Se=new Array(65536);for(var H=0;H<65536;H++)Se[H]=H>255?255+~~(H/255):H}}}),us=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=pt();function t(x,u){var h=x.tokenTypeIdx;return h===u.tokenTypeIdx?!0:u.isParent===!0&&u.categoryMatchesMap[h]===!0}n.tokenStructuredMatcher=t;function i(x,u){return x.tokenTypeIdx===u.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(x){var u=s(x);o(u),l(u),c(u),e.forEach(u,function(h){h.isParent=h.categoryMatches.length>0})}n.augmentTokenTypes=r;function s(x){for(var u=e.cloneArr(x),h=x,y=!0;y;){h=e.compact(e.flatten(e.map(h,function(_){return _.CATEGORIES})));var S=e.difference(h,u);u=u.concat(S),e.isEmpty(S)?y=!1:h=S}return u}n.expandCategories=s;function o(x){e.forEach(x,function(u){f(u)||(n.tokenIdxToClass[n.tokenShortNameIdx]=u,u.tokenTypeIdx=n.tokenShortNameIdx++),m(u)&&!e.isArray(u.CATEGORIES)&&(u.CATEGORIES=[u.CATEGORIES]),m(u)||(u.CATEGORIES=[]),d(u)||(u.categoryMatches=[]),p(u)||(u.categoryMatchesMap={})})}n.assignTokenDefaultProps=o;function c(x){e.forEach(x,function(u){u.categoryMatches=[],e.forEach(u.categoryMatchesMap,function(h,y){u.categoryMatches.push(n.tokenIdxToClass[y].tokenTypeIdx)})})}n.assignCategoriesTokensProp=c;function l(x){e.forEach(x,function(u){a([],u)})}n.assignCategoriesMapProp=l;function a(x,u){e.forEach(x,function(h){u.categoryMatchesMap[h.tokenTypeIdx]=!0}),e.forEach(u.CATEGORIES,function(h){var y=x.concat(u);e.contains(y,h)||a(y,h)})}n.singleAssignCategoriesToksMap=a;function f(x){return e.has(x,"tokenTypeIdx")}n.hasShortKeyProperty=f;function m(x){return e.has(x,"CATEGORIES")}n.hasCategoriesProperty=m;function d(x){return e.has(x,"categoryMatches")}n.hasExtendingTokensTypesProperty=d;function p(x){return e.has(x,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=p;function g(x){return e.has(x,"tokenTypeIdx")}n.isTokenType=g}),Rh=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,s){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),xa=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=wh(),t=pt(),i=us(),r=Rh(),s=el(),o;(function(a){a[a.MISSING_PATTERN=0]="MISSING_PATTERN",a[a.INVALID_PATTERN=1]="INVALID_PATTERN",a[a.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",a[a.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",a[a.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",a[a.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",a[a.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",a[a.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",a[a.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",a[a.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",a[a.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",a[a.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",a[a.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",a[a.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",a[a.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",a[a.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",a[a.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(o=n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var c={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(c);var l=(function(){function a(f,m){var d=this;if(m===void 0&&(m=c),this.lexerDefinition=f,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof m=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(c,m);var p=this.config.traceInitPerf;p===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof p=="number"&&(this.traceInitMaxIdent=p,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var g,x=!0;d.TRACE_INIT("Lexer Config handling",function(){if(d.config.lineTerminatorsPattern===c.lineTerminatorsPattern)d.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(d.config.lineTerminatorCharacters===c.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(m.safeMode&&m.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');d.trackStartLines=/full|onlyStart/i.test(d.config.positionTracking),d.trackEndLines=/full/i.test(d.config.positionTracking),t.isArray(f)?(g={modes:{}},g.modes[e.DEFAULT_MODE]=t.cloneArr(f),g[e.DEFAULT_MODE]=e.DEFAULT_MODE):(x=!1,g=t.cloneObj(f))}),d.config.skipValidations===!1&&(d.TRACE_INIT("performRuntimeChecks",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.performRuntimeChecks(g,d.trackStartLines,d.config.lineTerminatorCharacters))}),d.TRACE_INIT("performWarningRuntimeChecks",function(){d.lexerDefinitionWarning=d.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(g,d.trackStartLines,d.config.lineTerminatorCharacters))})),g.modes=g.modes?g.modes:{},t.forEach(g.modes,function(S,_){g.modes[_]=t.reject(S,function(A){return t.isUndefined(A)})});var u=t.keys(g.modes);if(t.forEach(g.modes,function(S,_){d.TRACE_INIT("Mode: <"+_+"> processing",function(){if(d.modes.push(_),d.config.skipValidations===!1&&d.TRACE_INIT("validatePatterns",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.validatePatterns(S,u))}),t.isEmpty(d.lexerDefinitionErrors)){i.augmentTokenTypes(S);var A;d.TRACE_INIT("analyzeTokenTypes",function(){A=e.analyzeTokenTypes(S,{lineTerminatorCharacters:d.config.lineTerminatorCharacters,positionTracking:m.positionTracking,ensureOptimizations:m.ensureOptimizations,safeMode:m.safeMode,tracer:d.TRACE_INIT.bind(d)})}),d.patternIdxToConfig[_]=A.patternIdxToConfig,d.charCodeToPatternIdxToConfig[_]=A.charCodeToPatternIdxToConfig,d.emptyGroups=t.merge(d.emptyGroups,A.emptyGroups),d.hasCustom=A.hasCustom||d.hasCustom,d.canModeBeOptimized[_]=A.canBeOptimized}})}),d.defaultMode=g.defaultMode,!t.isEmpty(d.lexerDefinitionErrors)&&!d.config.deferDefinitionErrorsHandling){var h=t.map(d.lexerDefinitionErrors,function(S){return S.message}),y=h.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+y)}t.forEach(d.lexerDefinitionWarning,function(S){t.PRINT_WARNING(S.message)}),d.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(d.chopInput=t.IDENTITY,d.match=d.matchWithTest):(d.updateLastIndex=t.NOOP,d.match=d.matchWithExec),x&&(d.handleModes=t.NOOP),d.trackStartLines===!1&&(d.computeNewColumn=t.IDENTITY),d.trackEndLines===!1&&(d.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(d.config.positionTracking))d.createTokenInstance=d.createFullToken;else if(/onlyStart/i.test(d.config.positionTracking))d.createTokenInstance=d.createStartOnlyToken;else if(/onlyOffset/i.test(d.config.positionTracking))d.createTokenInstance=d.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+d.config.positionTracking+'"');d.hasCustom?(d.addToken=d.addTokenUsingPush,d.handlePayload=d.handlePayloadWithCustom):(d.addToken=d.addTokenUsingMemberAccess,d.handlePayload=d.handlePayloadNoCustom)}),d.TRACE_INIT("Failed Optimization Warnings",function(){var S=t.reduce(d.canModeBeOptimized,function(_,A,C){return A===!1&&_.push(C),_},[]);if(m.ensureOptimizations&&!t.isEmpty(S))throw Error("Lexer Modes: < "+S.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),d.TRACE_INIT("clearRegExpParserCache",function(){s.clearRegExpParserCache()}),d.TRACE_INIT("toFastProperties",function(){t.toFastProperties(d)})})}return a.prototype.tokenize=function(f,m){if(m===void 0&&(m=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var d=t.map(this.lexerDefinitionErrors,function(x){return x.message}),p=d.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+p)}var g=this.tokenizeInternal(f,m);return g},a.prototype.tokenizeInternal=function(f,m){var d=this,p,g,x,u,h,y,S,_,A,C,v,b,P,N,L,R=f,D=R.length,w=0,G=0,Y=this.hasCustom?0:Math.floor(f.length/10),V=new Array(Y),ne=[],X=this.trackStartLines?1:void 0,ie=this.trackStartLines?1:void 0,oe=e.cloneEmptyGroups(this.emptyGroups),Se=this.trackStartLines,Te=this.config.lineTerminatorsPattern,Q=0,H=[],K=[],le=[],se=[];Object.freeze(se);var me=void 0;function Oe(){return H}function Le(z){var j=e.charCodeToOptimizedIndex(z),T=K[j];return T===void 0?se:T}var Ve=function(z){if(le.length===1&&z.tokenType.PUSH_MODE===void 0){var j=d.config.errorMessageProvider.buildUnableToPopLexerModeMessage(z);ne.push({offset:z.startOffset,line:z.startLine!==void 0?z.startLine:void 0,column:z.startColumn!==void 0?z.startColumn:void 0,length:z.image.length,message:j})}else{le.pop();var T=t.last(le);H=d.patternIdxToConfig[T],K=d.charCodeToPatternIdxToConfig[T],Q=H.length;var M=d.canModeBeOptimized[T]&&d.config.safeMode===!1;K&&M?me=Le:me=Oe}};function ze(z){le.push(z),K=this.charCodeToPatternIdxToConfig[z],H=this.patternIdxToConfig[z],Q=H.length,Q=H.length;var j=this.canModeBeOptimized[z]&&this.config.safeMode===!1;K&&j?me=Le:me=Oe}ze.call(this,m);for(var Ge;w<D;){h=null;var ct=R.charCodeAt(w),st=me(ct),_t=st.length;for(p=0;p<_t;p++){Ge=st[p];var ae=Ge.pattern;y=null;var ve=Ge.short;if(ve!==!1?ct===ve&&(h=ae):Ge.isCustom===!0?(L=ae.exec(R,w,V,oe),L!==null?(h=L[0],L.payload!==void 0&&(y=L.payload)):h=null):(this.updateLastIndex(ae,w),h=this.match(ae,f,w)),h!==null){if(u=Ge.longerAlt,u!==void 0){var Ie=H[u],Re=Ie.pattern;S=null,Ie.isCustom===!0?(L=Re.exec(R,w,V,oe),L!==null?(x=L[0],L.payload!==void 0&&(S=L.payload)):x=null):(this.updateLastIndex(Re,w),x=this.match(Re,f,w)),x&&x.length>h.length&&(h=x,y=S,Ge=Ie)}break}}if(h!==null){if(_=h.length,A=Ge.group,A!==void 0&&(C=Ge.tokenTypeIdx,v=this.createTokenInstance(h,w,C,Ge.tokenType,X,ie,_),this.handlePayload(v,y),A===!1?G=this.addToken(V,G,v):oe[A].push(v)),f=this.chopInput(f,_),w=w+_,ie=this.computeNewColumn(ie,_),Se===!0&&Ge.canLineTerminator===!0){var Ae=0,De=void 0,E=void 0;Te.lastIndex=0;do De=Te.test(h),De===!0&&(E=Te.lastIndex-1,Ae++);while(De===!0);Ae!==0&&(X=X+Ae,ie=_-E,this.updateTokenEndLineColumnLocation(v,A,E,Ae,X,ie,_))}this.handleModes(Ge,Ve,ze,v)}else{for(var U=w,k=X,W=ie,O=!1;!O&&w<D;)for(P=R.charCodeAt(w),f=this.chopInput(f,1),w++,g=0;g<Q;g++){var q=H[g],ae=q.pattern,ve=q.short;if(ve!==!1?R.charCodeAt(w)===ve&&(O=!0):q.isCustom===!0?O=ae.exec(R,w,V,oe)!==null:(this.updateLastIndex(ae,w),O=ae.exec(f)!==null),O===!0)break}b=w-U,N=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(R,U,b,k,W),ne.push({offset:U,line:k,column:W,length:b,message:N})}}return this.hasCustom||(V.length=G),{tokens:V,groups:oe,errors:ne}},a.prototype.handleModes=function(f,m,d,p){if(f.pop===!0){var g=f.push;m(p),g!==void 0&&d.call(this,g)}else f.push!==void 0&&d.call(this,f.push)},a.prototype.chopInput=function(f,m){return f.substring(m)},a.prototype.updateLastIndex=function(f,m){f.lastIndex=m},a.prototype.updateTokenEndLineColumnLocation=function(f,m,d,p,g,x,u){var h,y;m!==void 0&&(h=d===u-1,y=h?-1:0,p===1&&h===!0||(f.endLine=g+y,f.endColumn=x-1+-y))},a.prototype.computeNewColumn=function(f,m){return f+m},a.prototype.createTokenInstance=function(){for(var f=[],m=0;m<arguments.length;m++)f[m]=arguments[m];return null},a.prototype.createOffsetOnlyToken=function(f,m,d,p){return{image:f,startOffset:m,tokenTypeIdx:d,tokenType:p}},a.prototype.createStartOnlyToken=function(f,m,d,p,g,x){return{image:f,startOffset:m,startLine:g,startColumn:x,tokenTypeIdx:d,tokenType:p}},a.prototype.createFullToken=function(f,m,d,p,g,x,u){return{image:f,startOffset:m,endOffset:m+u-1,startLine:g,endLine:g,startColumn:x,endColumn:x+u-1,tokenTypeIdx:d,tokenType:p}},a.prototype.addToken=function(f,m,d){return 666},a.prototype.addTokenUsingPush=function(f,m,d){return f.push(d),m},a.prototype.addTokenUsingMemberAccess=function(f,m,d){return f[m]=d,m++,m},a.prototype.handlePayload=function(f,m){},a.prototype.handlePayloadNoCustom=function(f,m){},a.prototype.handlePayloadWithCustom=function(f,m){m!==null&&(f.payload=m)},a.prototype.match=function(f,m,d){return null},a.prototype.matchWithTest=function(f,m,d){var p=f.test(m);return p===!0?m.substring(d,f.lastIndex):null},a.prototype.matchWithExec=function(f,m){var d=f.exec(m);return d!==null?d[0]:d},a.prototype.TRACE_INIT=function(f,m){if(this.traceInitPerf===!0){this.traceInitIndent++;var d=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(d+"--> <"+f+">");var p=t.timer(m),g=p.time,x=p.value,u=g>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&u(d+"<-- <"+f+"> time: "+g+"ms"),this.traceInitIndent--,x}else return m()},a.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",a.NA=/NOT_APPLICABLE/,a})();n.Lexer=l}),wi=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=pt(),t=xa(),i=us();function r(_){return o(_)?_.LABEL:_.name}n.tokenLabel=r;function s(_){return _.name}n.tokenName=s;function o(_){return e.isString(_.LABEL)&&_.LABEL!==""}n.hasTokenLabel=o;var c="parent",l="categories",a="label",f="group",m="push_mode",d="pop_mode",p="longer_alt",g="line_breaks",x="start_chars_hint";function u(_){return h(_)}n.createToken=u;function h(_){var A=_.pattern,C={};if(C.name=_.name,e.isUndefined(A)||(C.PATTERN=A),e.has(_,c))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(_,l)&&(C.CATEGORIES=_[l]),i.augmentTokenTypes([C]),e.has(_,a)&&(C.LABEL=_[a]),e.has(_,f)&&(C.GROUP=_[f]),e.has(_,d)&&(C.POP_MODE=_[d]),e.has(_,m)&&(C.PUSH_MODE=_[m]),e.has(_,p)&&(C.LONGER_ALT=_[p]),e.has(_,g)&&(C.LINE_BREAKS=_[g]),e.has(_,x)&&(C.START_CHARS_HINT=_[x]),C}n.EOF=u({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function y(_,A,C,v,b,P,N,L){return{image:A,startOffset:C,endOffset:v,startLine:b,endLine:P,startColumn:N,endColumn:L,tokenTypeIdx:_.tokenTypeIdx,tokenType:_}}n.createTokenInstance=y;function S(_,A){return i.tokenStructuredMatcher(_,A)}n.tokenMatcher=S}),on=et(n=>{"use strict";var e=n&&n.__extends||(function(){var h=function(y,S){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,A){_.__proto__=A}||function(_,A){for(var C in A)Object.prototype.hasOwnProperty.call(A,C)&&(_[C]=A[C])},h(y,S)};return function(y,S){if(typeof S!="function"&&S!==null)throw new TypeError("Class extends value "+String(S)+" is not a constructor or null");h(y,S);function _(){this.constructor=y}y.prototype=S===null?Object.create(S):(_.prototype=S.prototype,new _)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=pt(),i=wi(),r=(function(){function h(y){this._definition=y}return Object.defineProperty(h.prototype,"definition",{get:function(){return this._definition},set:function(y){this._definition=y},enumerable:!1,configurable:!0}),h.prototype.accept=function(y){y.visit(this),t.forEach(this.definition,function(S){S.accept(y)})},h})();n.AbstractProduction=r;var s=(function(h){e(y,h);function y(S){var _=h.call(this,[])||this;return _.idx=1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return Object.defineProperty(y.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(S){},enumerable:!1,configurable:!0}),y.prototype.accept=function(S){S.visit(this)},y})(r);n.NonTerminal=s;var o=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.orgText="",t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return y})(r);n.Rule=o;var c=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.ignoreAmbiguities=!1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return y})(r);n.Alternative=c;var l=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.idx=1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return y})(r);n.Option=l;var a=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.idx=1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return y})(r);n.RepetitionMandatory=a;var f=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.idx=1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return y})(r);n.RepetitionMandatoryWithSeparator=f;var m=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.idx=1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return y})(r);n.Repetition=m;var d=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.idx=1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return y})(r);n.RepetitionWithSeparator=d;var p=(function(h){e(y,h);function y(S){var _=h.call(this,S.definition)||this;return _.idx=1,_.ignoreAmbiguities=!1,_.hasPredicates=!1,t.assign(_,t.pick(S,function(A){return A!==void 0})),_}return Object.defineProperty(y.prototype,"definition",{get:function(){return this._definition},set:function(S){this._definition=S},enumerable:!1,configurable:!0}),y})(r);n.Alternation=p;var g=(function(){function h(y){this.idx=1,t.assign(this,t.pick(y,function(S){return S!==void 0}))}return h.prototype.accept=function(y){y.visit(this)},h})();n.Terminal=g;function x(h){return t.map(h,u)}n.serializeGrammar=x;function u(h){function y(A){return t.map(A,u)}if(h instanceof s)return{type:"NonTerminal",name:h.nonTerminalName,idx:h.idx};if(h instanceof c)return{type:"Alternative",definition:y(h.definition)};if(h instanceof l)return{type:"Option",idx:h.idx,definition:y(h.definition)};if(h instanceof a)return{type:"RepetitionMandatory",idx:h.idx,definition:y(h.definition)};if(h instanceof f)return{type:"RepetitionMandatoryWithSeparator",idx:h.idx,separator:u(new g({terminalType:h.separator})),definition:y(h.definition)};if(h instanceof d)return{type:"RepetitionWithSeparator",idx:h.idx,separator:u(new g({terminalType:h.separator})),definition:y(h.definition)};if(h instanceof m)return{type:"Repetition",idx:h.idx,definition:y(h.definition)};if(h instanceof p)return{type:"Alternation",idx:h.idx,definition:y(h.definition)};if(h instanceof g){var S={type:"Terminal",name:h.terminalType.name,label:i.tokenLabel(h.terminalType),idx:h.idx},_=h.terminalType.PATTERN;return h.terminalType.PATTERN&&(S.pattern=t.isRegExp(_)?_.source:_),S}else{if(h instanceof o)return{type:"Rule",name:h.name,orgText:h.orgText,definition:y(h.definition)};throw Error("non exhaustive match")}}n.serializeProduction=u}),tl=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=pt(),t=on(),i=(function(){function s(){}return s.prototype.walk=function(o,c){var l=this;c===void 0&&(c=[]),e.forEach(o.definition,function(a,f){var m=e.drop(o.definition,f+1);if(a instanceof t.NonTerminal)l.walkProdRef(a,m,c);else if(a instanceof t.Terminal)l.walkTerminal(a,m,c);else if(a instanceof t.Alternative)l.walkFlat(a,m,c);else if(a instanceof t.Option)l.walkOption(a,m,c);else if(a instanceof t.RepetitionMandatory)l.walkAtLeastOne(a,m,c);else if(a instanceof t.RepetitionMandatoryWithSeparator)l.walkAtLeastOneSep(a,m,c);else if(a instanceof t.RepetitionWithSeparator)l.walkManySep(a,m,c);else if(a instanceof t.Repetition)l.walkMany(a,m,c);else if(a instanceof t.Alternation)l.walkOr(a,m,c);else throw Error("non exhaustive match")})},s.prototype.walkTerminal=function(o,c,l){},s.prototype.walkProdRef=function(o,c,l){},s.prototype.walkFlat=function(o,c,l){var a=c.concat(l);this.walk(o,a)},s.prototype.walkOption=function(o,c,l){var a=c.concat(l);this.walk(o,a)},s.prototype.walkAtLeastOne=function(o,c,l){var a=[new t.Option({definition:o.definition})].concat(c,l);this.walk(o,a)},s.prototype.walkAtLeastOneSep=function(o,c,l){var a=r(o,c,l);this.walk(o,a)},s.prototype.walkMany=function(o,c,l){var a=[new t.Option({definition:o.definition})].concat(c,l);this.walk(o,a)},s.prototype.walkManySep=function(o,c,l){var a=r(o,c,l);this.walk(o,a)},s.prototype.walkOr=function(o,c,l){var a=this,f=c.concat(l);e.forEach(o.definition,function(m){var d=new t.Alternative({definition:[m]});a.walk(d,f)})},s})();n.RestWalker=i;function r(s,o,c){var l=[new t.Option({definition:[new t.Terminal({terminalType:s.separator})].concat(s.definition)})],a=l.concat(o,c);return a}}),hs=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=on(),t=(function(){function i(){}return i.prototype.visit=function(r){var s=r;switch(s.constructor){case e.NonTerminal:return this.visitNonTerminal(s);case e.Alternative:return this.visitAlternative(s);case e.Option:return this.visitOption(s);case e.RepetitionMandatory:return this.visitRepetitionMandatory(s);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(s);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(s);case e.Repetition:return this.visitRepetition(s);case e.Alternation:return this.visitAlternation(s);case e.Terminal:return this.visitTerminal(s);case e.Rule:return this.visitRule(s);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i})();n.GAstVisitor=t}),va=et(n=>{"use strict";var e=n&&n.__extends||(function(){var d=function(p,g){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(x,u){x.__proto__=u}||function(x,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(x[h]=u[h])},d(p,g)};return function(p,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");d(p,g);function x(){this.constructor=p}p.prototype=g===null?Object.create(g):(x.prototype=g.prototype,new x)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=pt(),i=on(),r=hs();function s(d){return d instanceof i.Alternative||d instanceof i.Option||d instanceof i.Repetition||d instanceof i.RepetitionMandatory||d instanceof i.RepetitionMandatoryWithSeparator||d instanceof i.RepetitionWithSeparator||d instanceof i.Terminal||d instanceof i.Rule}n.isSequenceProd=s;function o(d,p){p===void 0&&(p=[]);var g=d instanceof i.Option||d instanceof i.Repetition||d instanceof i.RepetitionWithSeparator;return g?!0:d instanceof i.Alternation?t.some(d.definition,function(x){return o(x,p)}):d instanceof i.NonTerminal&&t.contains(p,d)?!1:d instanceof i.AbstractProduction?(d instanceof i.NonTerminal&&p.push(d),t.every(d.definition,function(x){return o(x,p)})):!1}n.isOptionalProd=o;function c(d){return d instanceof i.Alternation}n.isBranchingProd=c;function l(d){if(d instanceof i.NonTerminal)return"SUBRULE";if(d instanceof i.Option)return"OPTION";if(d instanceof i.Alternation)return"OR";if(d instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(d instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(d instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(d instanceof i.Repetition)return"MANY";if(d instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=l;var a=(function(d){e(p,d);function p(){var g=d!==null&&d.apply(this,arguments)||this;return g.separator="-",g.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},g}return p.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},p.prototype.visitTerminal=function(g){var x=g.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,x)||(this.dslMethods[x]=[]),this.dslMethods[x].push(g)},p.prototype.visitNonTerminal=function(g){var x=g.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,x)||(this.dslMethods[x]=[]),this.dslMethods[x].push(g)},p.prototype.visitOption=function(g){this.dslMethods.option.push(g)},p.prototype.visitRepetitionWithSeparator=function(g){this.dslMethods.repetitionWithSeparator.push(g)},p.prototype.visitRepetitionMandatory=function(g){this.dslMethods.repetitionMandatory.push(g)},p.prototype.visitRepetitionMandatoryWithSeparator=function(g){this.dslMethods.repetitionMandatoryWithSeparator.push(g)},p.prototype.visitRepetition=function(g){this.dslMethods.repetition.push(g)},p.prototype.visitAlternation=function(g){this.dslMethods.alternation.push(g)},p})(r.GAstVisitor);n.DslMethodsCollectorVisitor=a;var f=new a;function m(d){f.reset(),d.accept(f);var p=f.dslMethods;return f.reset(),p}n.collectMethods=m}),Ch=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=pt(),t=on(),i=va();function r(l){if(l instanceof t.NonTerminal)return r(l.referencedRule);if(l instanceof t.Terminal)return c(l);if(i.isSequenceProd(l))return s(l);if(i.isBranchingProd(l))return o(l);throw Error("non exhaustive match")}n.first=r;function s(l){for(var a=[],f=l.definition,m=0,d=f.length>m,p,g=!0;d&&g;)p=f[m],g=i.isOptionalProd(p),a=a.concat(r(p)),m=m+1,d=f.length>m;return e.uniq(a)}n.firstForSequence=s;function o(l){var a=e.map(l.definition,function(f){return r(f)});return e.uniq(e.flatten(a))}n.firstForBranching=o;function c(l){return[l.terminalType]}n.firstForTerminal=c}),Ih=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),Q_=et(n=>{"use strict";var e=n&&n.__extends||(function(){var m=function(d,p){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,x){g.__proto__=x}||function(g,x){for(var u in x)Object.prototype.hasOwnProperty.call(x,u)&&(g[u]=x[u])},m(d,p)};return function(d,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");m(d,p);function g(){this.constructor=d}d.prototype=p===null?Object.create(p):(g.prototype=p.prototype,new g)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=tl(),i=Ch(),r=pt(),s=Ih(),o=on(),c=(function(m){e(d,m);function d(p){var g=m.call(this)||this;return g.topProd=p,g.follows={},g}return d.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},d.prototype.walkTerminal=function(p,g,x){},d.prototype.walkProdRef=function(p,g,x){var u=a(p.referencedRule,p.idx)+this.topProd.name,h=g.concat(x),y=new o.Alternative({definition:h}),S=i.first(y);this.follows[u]=S},d})(t.RestWalker);n.ResyncFollowsWalker=c;function l(m){var d={};return r.forEach(m,function(p){var g=new c(p).startWalking();r.assign(d,g)}),d}n.computeAllProdsFollows=l;function a(m,d){return m.name+d+s.IN}n.buildBetweenProdsFollowPrefix=a;function f(m){var d=m.terminalType.name;return d+m.idx+s.IN}n.buildInProdFollowPrefix=f}),Sa=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=wi(),t=pt(),i=pt(),r=on(),s=va();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(o){var c=o.expected,l=o.actual,a=o.previous,f=o.ruleName,m=e.hasTokenLabel(c),d=m?"--> "+e.tokenLabel(c)+" <--":"token of type --> "+c.name+" <--",p="Expecting "+d+" but found --> '"+l.image+"' <--";return p},buildNotAllInputParsedMessage:function(o){var c=o.firstRedundant,l=o.ruleName;return"Redundant input, expecting EOF but found: "+c.image},buildNoViableAltMessage:function(o){var c=o.expectedPathsPerAlt,l=o.actual,a=o.previous,f=o.customUserDescription,m=o.ruleName,d="Expecting: ",p=i.first(l).image,g=`
but found: '`+p+"'";if(f)return d+f+g;var x=i.reduce(c,function(S,_){return S.concat(_)},[]),u=i.map(x,function(S){return"["+i.map(S,function(_){return e.tokenLabel(_)}).join(", ")+"]"}),h=i.map(u,function(S,_){return"  "+(_+1)+". "+S}),y=`one of these possible Token sequences:
`+h.join(`
`);return d+y+g},buildEarlyExitMessage:function(o){var c=o.expectedIterationPaths,l=o.actual,a=o.customUserDescription,f=o.ruleName,m="Expecting: ",d=i.first(l).image,p=`
but found: '`+d+"'";if(a)return m+a+p;var g=i.map(c,function(u){return"["+i.map(u,function(h){return e.tokenLabel(h)}).join(",")+"]"}),x=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+g.join(" ,")+">");return m+x+p}},Object.freeze(n.defaultParserErrorProvider),n.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(o,c){var l="Invalid grammar, reference to a rule which is not defined: ->"+c.nonTerminalName+`<-
inside top level rule: ->`+o.name+"<-";return l}},n.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(o,c){function l(u){return u instanceof r.Terminal?u.terminalType.name:u instanceof r.NonTerminal?u.nonTerminalName:""}var a=o.name,f=i.first(c),m=f.idx,d=s.getProductionDslName(f),p=l(f),g=m>0,x="->"+d+(g?m:"")+"<- "+(p?"with argument: ->"+p+"<-":"")+`
                  appears more than once (`+c.length+" times) in the top level rule: ->"+a+`<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;return x=x.replace(/[ \t]+/g," "),x=x.replace(/\s\s+/g,`
`),x},buildNamespaceConflictError:function(o){var c=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+o.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return c},buildAlternationPrefixAmbiguityError:function(o){var c=i.map(o.prefixPath,function(f){return e.tokenLabel(f)}).join(", "),l=o.alternation.idx===0?"":o.alternation.idx,a="Ambiguous alternatives: <"+o.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+l+"> inside <"+o.topLevelRule.name+`> Rule,
`)+("<"+c+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return a},buildAlternationAmbiguityError:function(o){var c=i.map(o.prefixPath,function(f){return e.tokenLabel(f)}).join(", "),l=o.alternation.idx===0?"":o.alternation.idx,a="Ambiguous Alternatives Detected: <"+o.ambiguityIndices.join(" ,")+"> in <OR"+l+">"+(" inside <"+o.topLevelRule.name+`> Rule,
`)+("<"+c+`> may appears as a prefix path in all these alternatives.
`);return a=a+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,a},buildEmptyRepetitionError:function(o){var c=s.getProductionDslName(o.repetition);o.repetition.idx!==0&&(c+=o.repetition.idx);var l="The repetition <"+c+"> within Rule <"+o.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return l},buildTokenNameError:function(o){return"deprecated"},buildEmptyAlternationError:function(o){var c="Ambiguous empty alternative: <"+(o.emptyChoiceIdx+1)+">"+(" in <OR"+o.alternation.idx+"> inside <"+o.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return c},buildTooManyAlternativesError:function(o){var c=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+o.alternation.idx+"> inside <"+o.topLevelRule.name+`> Rule.
 has `+(o.alternation.definition.length+1)+" alternatives.");return c},buildLeftRecursionError:function(o){var c=o.topLevelRule.name,l=t.map(o.leftRecursionPath,function(m){return m.name}),a=c+" --> "+l.concat([c]).join(" --> "),f=`Left Recursion found in grammar.
`+("rule: <"+c+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is:
 `+a+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return f},buildInvalidRuleNameError:function(o){return"deprecated"},buildDuplicateRuleNameError:function(o){var c;o.topLevelRule instanceof r.Rule?c=o.topLevelRule.name:c=o.topLevelRule;var l="Duplicate definition, rule: ->"+c+"<- is already defined in the grammar: ->"+o.grammarName+"<-";return l}}}),e0=et(n=>{"use strict";var e=n&&n.__extends||(function(){var c=function(l,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,m){f.__proto__=m}||function(f,m){for(var d in m)Object.prototype.hasOwnProperty.call(m,d)&&(f[d]=m[d])},c(l,a)};return function(l,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");c(l,a);function f(){this.constructor=l}l.prototype=a===null?Object.create(a):(f.prototype=a.prototype,new f)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=un(),i=pt(),r=hs();function s(c,l){var a=new o(c,l);return a.resolveRefs(),a.errors}n.resolveGrammar=s;var o=(function(c){e(l,c);function l(a,f){var m=c.call(this)||this;return m.nameToTopRule=a,m.errMsgProvider=f,m.errors=[],m}return l.prototype.resolveRefs=function(){var a=this;i.forEach(i.values(this.nameToTopRule),function(f){a.currTopLevel=f,f.accept(a)})},l.prototype.visitNonTerminal=function(a){var f=this.nameToTopRule[a.nonTerminalName];if(f)a.referencedRule=f;else{var m=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,a);this.errors.push({message:m,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:a.nonTerminalName})}},l})(r.GAstVisitor);n.GastRefResolverVisitor=o}),Ma=et(n=>{"use strict";var e=n&&n.__extends||(function(){var u=function(h,y){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(S,_){S.__proto__=_}||function(S,_){for(var A in _)Object.prototype.hasOwnProperty.call(_,A)&&(S[A]=_[A])},u(h,y)};return function(h,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");u(h,y);function S(){this.constructor=h}h.prototype=y===null?Object.create(y):(S.prototype=y.prototype,new S)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=tl(),i=pt(),r=Ch(),s=on(),o=(function(u){e(h,u);function h(y,S){var _=u.call(this)||this;return _.topProd=y,_.path=S,_.possibleTokTypes=[],_.nextProductionName="",_.nextProductionOccurrence=0,_.found=!1,_.isAtEndOfPath=!1,_}return h.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},h.prototype.walk=function(y,S){S===void 0&&(S=[]),this.found||u.prototype.walk.call(this,y,S)},h.prototype.walkProdRef=function(y,S,_){if(y.referencedRule.name===this.nextProductionName&&y.idx===this.nextProductionOccurrence){var A=S.concat(_);this.updateExpectedNext(),this.walk(y.referencedRule,A)}},h.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},h})(t.RestWalker);n.AbstractNextPossibleTokensWalker=o;var c=(function(u){e(h,u);function h(y,S){var _=u.call(this,y,S)||this;return _.path=S,_.nextTerminalName="",_.nextTerminalOccurrence=0,_.nextTerminalName=_.path.lastTok.name,_.nextTerminalOccurrence=_.path.lastTokOccurrence,_}return h.prototype.walkTerminal=function(y,S,_){if(this.isAtEndOfPath&&y.terminalType.name===this.nextTerminalName&&y.idx===this.nextTerminalOccurrence&&!this.found){var A=S.concat(_),C=new s.Alternative({definition:A});this.possibleTokTypes=r.first(C),this.found=!0}},h})(o);n.NextAfterTokenWalker=c;var l=(function(u){e(h,u);function h(y,S){var _=u.call(this)||this;return _.topRule=y,_.occurrence=S,_.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},_}return h.prototype.startWalking=function(){return this.walk(this.topRule),this.result},h})(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=l;var a=(function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkMany=function(y,S,_){if(y.idx===this.occurrence){var A=i.first(S.concat(_));this.result.isEndOfRule=A===void 0,A instanceof s.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else u.prototype.walkMany.call(this,y,S,_)},h})(l);n.NextTerminalAfterManyWalker=a;var f=(function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkManySep=function(y,S,_){if(y.idx===this.occurrence){var A=i.first(S.concat(_));this.result.isEndOfRule=A===void 0,A instanceof s.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else u.prototype.walkManySep.call(this,y,S,_)},h})(l);n.NextTerminalAfterManySepWalker=f;var m=(function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkAtLeastOne=function(y,S,_){if(y.idx===this.occurrence){var A=i.first(S.concat(_));this.result.isEndOfRule=A===void 0,A instanceof s.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else u.prototype.walkAtLeastOne.call(this,y,S,_)},h})(l);n.NextTerminalAfterAtLeastOneWalker=m;var d=(function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkAtLeastOneSep=function(y,S,_){if(y.idx===this.occurrence){var A=i.first(S.concat(_));this.result.isEndOfRule=A===void 0,A instanceof s.Terminal&&(this.result.token=A.terminalType,this.result.occurrence=A.idx)}else u.prototype.walkAtLeastOneSep.call(this,y,S,_)},h})(l);n.NextTerminalAfterAtLeastOneSepWalker=d;function p(u,h,y){y===void 0&&(y=[]),y=i.cloneArr(y);var S=[],_=0;function A(P){return P.concat(i.drop(u,_+1))}function C(P){var N=p(A(P),h,y);return S.concat(N)}for(;y.length<h&&_<u.length;){var v=u[_];if(v instanceof s.Alternative||v instanceof s.NonTerminal)return C(v.definition);if(v instanceof s.Option)S=C(v.definition);else if(v instanceof s.RepetitionMandatory){var b=v.definition.concat([new s.Repetition({definition:v.definition})]);return C(b)}else if(v instanceof s.RepetitionMandatoryWithSeparator){var b=[new s.Alternative({definition:v.definition}),new s.Repetition({definition:[new s.Terminal({terminalType:v.separator})].concat(v.definition)})];return C(b)}else if(v instanceof s.RepetitionWithSeparator){var b=v.definition.concat([new s.Repetition({definition:[new s.Terminal({terminalType:v.separator})].concat(v.definition)})]);S=C(b)}else if(v instanceof s.Repetition){var b=v.definition.concat([new s.Repetition({definition:v.definition})]);S=C(b)}else{if(v instanceof s.Alternation)return i.forEach(v.definition,function(P){i.isEmpty(P.definition)===!1&&(S=C(P.definition))}),S;if(v instanceof s.Terminal)y.push(v.terminalType);else throw Error("non exhaustive match")}_++}return S.push({partialPath:y,suffixDef:i.drop(u,_)}),S}n.possiblePathsFrom=p;function g(u,h,y,S){var _="EXIT_NONE_TERMINAL",A=[_],C="EXIT_ALTERNATIVE",v=!1,b=h.length,P=b-S-1,N=[],L=[];for(L.push({idx:-1,def:u,ruleStack:[],occurrenceStack:[]});!i.isEmpty(L);){var R=L.pop();if(R===C){v&&i.last(L).idx<=P&&L.pop();continue}var D=R.def,w=R.idx,G=R.ruleStack,Y=R.occurrenceStack;if(!i.isEmpty(D)){var V=D[0];if(V===_){var ne={idx:w,def:i.drop(D),ruleStack:i.dropRight(G),occurrenceStack:i.dropRight(Y)};L.push(ne)}else if(V instanceof s.Terminal)if(w<b-1){var X=w+1,ie=h[X];if(y(ie,V.terminalType)){var ne={idx:X,def:i.drop(D),ruleStack:G,occurrenceStack:Y};L.push(ne)}}else if(w===b-1)N.push({nextTokenType:V.terminalType,nextTokenOccurrence:V.idx,ruleStack:G,occurrenceStack:Y}),v=!0;else throw Error("non exhaustive match");else if(V instanceof s.NonTerminal){var oe=i.cloneArr(G);oe.push(V.nonTerminalName);var Se=i.cloneArr(Y);Se.push(V.idx);var ne={idx:w,def:V.definition.concat(A,i.drop(D)),ruleStack:oe,occurrenceStack:Se};L.push(ne)}else if(V instanceof s.Option){var Te={idx:w,def:i.drop(D),ruleStack:G,occurrenceStack:Y};L.push(Te),L.push(C);var Q={idx:w,def:V.definition.concat(i.drop(D)),ruleStack:G,occurrenceStack:Y};L.push(Q)}else if(V instanceof s.RepetitionMandatory){var H=new s.Repetition({definition:V.definition,idx:V.idx}),K=V.definition.concat([H],i.drop(D)),ne={idx:w,def:K,ruleStack:G,occurrenceStack:Y};L.push(ne)}else if(V instanceof s.RepetitionMandatoryWithSeparator){var le=new s.Terminal({terminalType:V.separator}),H=new s.Repetition({definition:[le].concat(V.definition),idx:V.idx}),K=V.definition.concat([H],i.drop(D)),ne={idx:w,def:K,ruleStack:G,occurrenceStack:Y};L.push(ne)}else if(V instanceof s.RepetitionWithSeparator){var Te={idx:w,def:i.drop(D),ruleStack:G,occurrenceStack:Y};L.push(Te),L.push(C);var le=new s.Terminal({terminalType:V.separator}),se=new s.Repetition({definition:[le].concat(V.definition),idx:V.idx}),K=V.definition.concat([se],i.drop(D)),Q={idx:w,def:K,ruleStack:G,occurrenceStack:Y};L.push(Q)}else if(V instanceof s.Repetition){var Te={idx:w,def:i.drop(D),ruleStack:G,occurrenceStack:Y};L.push(Te),L.push(C);var se=new s.Repetition({definition:V.definition,idx:V.idx}),K=V.definition.concat([se],i.drop(D)),Q={idx:w,def:K,ruleStack:G,occurrenceStack:Y};L.push(Q)}else if(V instanceof s.Alternation)for(var me=V.definition.length-1;me>=0;me--){var Oe=V.definition[me],Le={idx:w,def:Oe.definition.concat(i.drop(D)),ruleStack:G,occurrenceStack:Y};L.push(Le),L.push(C)}else if(V instanceof s.Alternative)L.push({idx:w,def:V.definition.concat(i.drop(D)),ruleStack:G,occurrenceStack:Y});else if(V instanceof s.Rule)L.push(x(V,w,G,Y));else throw Error("non exhaustive match")}}return N}n.nextPossibleTokensAfter=g;function x(u,h,y,S){var _=i.cloneArr(y);_.push(u.name);var A=i.cloneArr(S);return A.push(1),{idx:h,def:u.definition,ruleStack:_,occurrenceStack:A}}}),Ea=et(n=>{"use strict";var e=n&&n.__extends||(function(){var P=function(N,L){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(R,D){R.__proto__=D}||function(R,D){for(var w in D)Object.prototype.hasOwnProperty.call(D,w)&&(R[w]=D[w])},P(N,L)};return function(N,L){if(typeof L!="function"&&L!==null)throw new TypeError("Class extends value "+String(L)+" is not a constructor or null");P(N,L);function R(){this.constructor=N}N.prototype=L===null?Object.create(L):(R.prototype=L.prototype,new R)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=pt(),i=Ma(),r=tl(),s=us(),o=on(),c=hs(),l;(function(P){P[P.OPTION=0]="OPTION",P[P.REPETITION=1]="REPETITION",P[P.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",P[P.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",P[P.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",P[P.ALTERNATION=5]="ALTERNATION"})(l=n.PROD_TYPE||(n.PROD_TYPE={}));function a(P){if(P instanceof o.Option)return l.OPTION;if(P instanceof o.Repetition)return l.REPETITION;if(P instanceof o.RepetitionMandatory)return l.REPETITION_MANDATORY;if(P instanceof o.RepetitionMandatoryWithSeparator)return l.REPETITION_MANDATORY_WITH_SEPARATOR;if(P instanceof o.RepetitionWithSeparator)return l.REPETITION_WITH_SEPARATOR;if(P instanceof o.Alternation)return l.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=a;function f(P,N,L,R,D,w){var G=_(P,N,L),Y=b(G)?s.tokenStructuredMatcherNoCategories:s.tokenStructuredMatcher;return w(G,R,Y,D)}n.buildLookaheadFuncForOr=f;function m(P,N,L,R,D,w){var G=A(P,N,D,L),Y=b(G)?s.tokenStructuredMatcherNoCategories:s.tokenStructuredMatcher;return w(G[0],Y,R)}n.buildLookaheadFuncForOptionalProd=m;function d(P,N,L,R){var D=P.length,w=t.every(P,function(V){return t.every(V,function(ne){return ne.length===1})});if(N)return function(V){for(var ne=t.map(V,function(se){return se.GATE}),X=0;X<D;X++){var ie=P[X],oe=ie.length,Se=ne[X];if(!(Se!==void 0&&Se.call(this)===!1))e:for(var Te=0;Te<oe;Te++){for(var Q=ie[Te],H=Q.length,K=0;K<H;K++){var le=this.LA(K+1);if(L(le,Q[K])===!1)continue e}return X}}};if(w&&!R){var G=t.map(P,function(V){return t.flatten(V)}),Y=t.reduce(G,function(V,ne,X){return t.forEach(ne,function(ie){t.has(V,ie.tokenTypeIdx)||(V[ie.tokenTypeIdx]=X),t.forEach(ie.categoryMatches,function(oe){t.has(V,oe)||(V[oe]=X)})}),V},[]);return function(){var V=this.LA(1);return Y[V.tokenTypeIdx]}}else return function(){for(var V=0;V<D;V++){var ne=P[V],X=ne.length;e:for(var ie=0;ie<X;ie++){for(var oe=ne[ie],Se=oe.length,Te=0;Te<Se;Te++){var Q=this.LA(Te+1);if(L(Q,oe[Te])===!1)continue e}return V}}}}n.buildAlternativesLookAheadFunc=d;function p(P,N,L){var R=t.every(P,function(ne){return ne.length===1}),D=P.length;if(R&&!L){var w=t.flatten(P);if(w.length===1&&t.isEmpty(w[0].categoryMatches)){var G=w[0],Y=G.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===Y}}else{var V=t.reduce(w,function(ne,X,ie){return ne[X.tokenTypeIdx]=!0,t.forEach(X.categoryMatches,function(oe){ne[oe]=!0}),ne},[]);return function(){var ne=this.LA(1);return V[ne.tokenTypeIdx]===!0}}}else return function(){e:for(var ne=0;ne<D;ne++){for(var X=P[ne],ie=X.length,oe=0;oe<ie;oe++){var Se=this.LA(oe+1);if(N(Se,X[oe])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=p;var g=(function(P){e(N,P);function N(L,R,D){var w=P.call(this)||this;return w.topProd=L,w.targetOccurrence=R,w.targetProdType=D,w}return N.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},N.prototype.checkIsTarget=function(L,R,D,w){return L.idx===this.targetOccurrence&&this.targetProdType===R?(this.restDef=D.concat(w),!0):!1},N.prototype.walkOption=function(L,R,D){this.checkIsTarget(L,l.OPTION,R,D)||P.prototype.walkOption.call(this,L,R,D)},N.prototype.walkAtLeastOne=function(L,R,D){this.checkIsTarget(L,l.REPETITION_MANDATORY,R,D)||P.prototype.walkOption.call(this,L,R,D)},N.prototype.walkAtLeastOneSep=function(L,R,D){this.checkIsTarget(L,l.REPETITION_MANDATORY_WITH_SEPARATOR,R,D)||P.prototype.walkOption.call(this,L,R,D)},N.prototype.walkMany=function(L,R,D){this.checkIsTarget(L,l.REPETITION,R,D)||P.prototype.walkOption.call(this,L,R,D)},N.prototype.walkManySep=function(L,R,D){this.checkIsTarget(L,l.REPETITION_WITH_SEPARATOR,R,D)||P.prototype.walkOption.call(this,L,R,D)},N})(r.RestWalker),x=(function(P){e(N,P);function N(L,R,D){var w=P.call(this)||this;return w.targetOccurrence=L,w.targetProdType=R,w.targetRef=D,w.result=[],w}return N.prototype.checkIsTarget=function(L,R){L.idx===this.targetOccurrence&&this.targetProdType===R&&(this.targetRef===void 0||L===this.targetRef)&&(this.result=L.definition)},N.prototype.visitOption=function(L){this.checkIsTarget(L,l.OPTION)},N.prototype.visitRepetition=function(L){this.checkIsTarget(L,l.REPETITION)},N.prototype.visitRepetitionMandatory=function(L){this.checkIsTarget(L,l.REPETITION_MANDATORY)},N.prototype.visitRepetitionMandatoryWithSeparator=function(L){this.checkIsTarget(L,l.REPETITION_MANDATORY_WITH_SEPARATOR)},N.prototype.visitRepetitionWithSeparator=function(L){this.checkIsTarget(L,l.REPETITION_WITH_SEPARATOR)},N.prototype.visitAlternation=function(L){this.checkIsTarget(L,l.ALTERNATION)},N})(c.GAstVisitor);function u(P){for(var N=new Array(P),L=0;L<P;L++)N[L]=[];return N}function h(P){for(var N=[""],L=0;L<P.length;L++){for(var R=P[L],D=[],w=0;w<N.length;w++){var G=N[w];D.push(G+"_"+R.tokenTypeIdx);for(var Y=0;Y<R.categoryMatches.length;Y++){var V="_"+R.categoryMatches[Y];D.push(G+V)}}N=D}return N}function y(P,N,L){for(var R=0;R<P.length;R++)if(R!==L)for(var D=P[R],w=0;w<N.length;w++){var G=N[w];if(D[G]===!0)return!1}return!0}function S(P,N){for(var L=t.map(P,function(X){return i.possiblePathsFrom([X],1)}),R=u(L.length),D=t.map(L,function(X){var ie={};return t.forEach(X,function(oe){var Se=h(oe.partialPath);t.forEach(Se,function(Te){ie[Te]=!0})}),ie}),w=L,G=1;G<=N;G++){var Y=w;w=u(Y.length);for(var V=function(X){for(var ie=Y[X],oe=0;oe<ie.length;oe++){var Se=ie[oe].partialPath,Te=ie[oe].suffixDef,Q=h(Se),H=y(D,Q,X);if(H||t.isEmpty(Te)||Se.length===N){var K=R[X];if(C(K,Se)===!1){K.push(Se);for(var le=0;le<Q.length;le++){var se=Q[le];D[X][se]=!0}}}else{var me=i.possiblePathsFrom(Te,G+1,Se);w[X]=w[X].concat(me),t.forEach(me,function(Oe){var Le=h(Oe.partialPath);t.forEach(Le,function(Ve){D[X][Ve]=!0})})}}},ne=0;ne<Y.length;ne++)V(ne)}return R}n.lookAheadSequenceFromAlternatives=S;function _(P,N,L,R){var D=new x(P,l.ALTERNATION,R);return N.accept(D),S(D.result,L)}n.getLookaheadPathsForOr=_;function A(P,N,L,R){var D=new x(P,L);N.accept(D);var w=D.result,G=new g(N,P,L),Y=G.startWalking(),V=new o.Alternative({definition:w}),ne=new o.Alternative({definition:Y});return S([V,ne],R)}n.getLookaheadPathsForOptionalProd=A;function C(P,N){e:for(var L=0;L<P.length;L++){var R=P[L];if(R.length===N.length){for(var D=0;D<R.length;D++){var w=N[D],G=R[D],Y=w===G||G.categoryMatchesMap[w.tokenTypeIdx]!==void 0;if(Y===!1)continue e}return!0}}return!1}n.containsPath=C;function v(P,N){return P.length<N.length&&t.every(P,function(L,R){var D=N[R];return L===D||D.categoryMatchesMap[L.tokenTypeIdx]})}n.isStrictPrefixOfPath=v;function b(P){return t.every(P,function(N){return t.every(N,function(L){return t.every(L,function(R){return t.isEmpty(R.categoryMatches)})})})}n.areTokenCategoriesNotUsed=b}),Ph=et(n=>{"use strict";var e=n&&n.__extends||(function(){var R=function(D,w){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(G,Y){G.__proto__=Y}||function(G,Y){for(var V in Y)Object.prototype.hasOwnProperty.call(Y,V)&&(G[V]=Y[V])},R(D,w)};return function(D,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");R(D,w);function G(){this.constructor=D}D.prototype=w===null?Object.create(w):(G.prototype=w.prototype,new G)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=pt(),i=pt(),r=un(),s=va(),o=Ea(),c=Ma(),l=on(),a=hs();function f(R,D,w,G,Y){var V=t.map(R,function(H){return m(H,G)}),ne=t.map(R,function(H){return h(H,H,G)}),X=[],ie=[],oe=[];i.every(ne,i.isEmpty)&&(X=i.map(R,function(H){return _(H,G)}),ie=i.map(R,function(H){return A(H,D,G)}),oe=b(R,D,G));var Se=L(R,w,G),Te=i.map(R,function(H){return v(H,G)}),Q=i.map(R,function(H){return x(H,R,Y,G)});return t.flatten(V.concat(oe,ne,X,ie,Se,Te,Q))}n.validateGrammar=f;function m(R,D){var w=new g;R.accept(w);var G=w.allProductions,Y=t.groupBy(G,d),V=t.pick(Y,function(X){return X.length>1}),ne=t.map(t.values(V),function(X){var ie=t.first(X),oe=D.buildDuplicateFoundError(R,X),Se=s.getProductionDslName(ie),Te={message:oe,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:R.name,dslName:Se,occurrence:ie.idx},Q=p(ie);return Q&&(Te.parameter=Q),Te});return ne}function d(R){return s.getProductionDslName(R)+"_#_"+R.idx+"_#_"+p(R)}n.identifyProductionForDuplicates=d;function p(R){return R instanceof l.Terminal?R.terminalType.name:R instanceof l.NonTerminal?R.nonTerminalName:""}var g=(function(R){e(D,R);function D(){var w=R!==null&&R.apply(this,arguments)||this;return w.allProductions=[],w}return D.prototype.visitNonTerminal=function(w){this.allProductions.push(w)},D.prototype.visitOption=function(w){this.allProductions.push(w)},D.prototype.visitRepetitionWithSeparator=function(w){this.allProductions.push(w)},D.prototype.visitRepetitionMandatory=function(w){this.allProductions.push(w)},D.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.allProductions.push(w)},D.prototype.visitRepetition=function(w){this.allProductions.push(w)},D.prototype.visitAlternation=function(w){this.allProductions.push(w)},D.prototype.visitTerminal=function(w){this.allProductions.push(w)},D})(a.GAstVisitor);n.OccurrenceValidationCollector=g;function x(R,D,w,G){var Y=[],V=i.reduce(D,function(X,ie){return ie.name===R.name?X+1:X},0);if(V>1){var ne=G.buildDuplicateRuleNameError({topLevelRule:R,grammarName:w});Y.push({message:ne,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:R.name})}return Y}n.validateRuleDoesNotAlreadyExist=x;function u(R,D,w){var G=[],Y;return t.contains(D,R)||(Y="Invalid rule override, rule: ->"+R+"<- cannot be overridden in the grammar: ->"+w+"<-as it is not defined in any of the super grammars ",G.push({message:Y,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:R})),G}n.validateRuleIsOverridden=u;function h(R,D,w,G){G===void 0&&(G=[]);var Y=[],V=y(D.definition);if(t.isEmpty(V))return[];var ne=R.name,X=t.contains(V,R);X&&Y.push({message:w.buildLeftRecursionError({topLevelRule:R,leftRecursionPath:G}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:ne});var ie=t.difference(V,G.concat([R])),oe=t.map(ie,function(Se){var Te=t.cloneArr(G);return Te.push(Se),h(R,Se,w,Te)});return Y.concat(t.flatten(oe))}n.validateNoLeftRecursion=h;function y(R){var D=[];if(t.isEmpty(R))return D;var w=t.first(R);if(w instanceof l.NonTerminal)D.push(w.referencedRule);else if(w instanceof l.Alternative||w instanceof l.Option||w instanceof l.RepetitionMandatory||w instanceof l.RepetitionMandatoryWithSeparator||w instanceof l.RepetitionWithSeparator||w instanceof l.Repetition)D=D.concat(y(w.definition));else if(w instanceof l.Alternation)D=t.flatten(t.map(w.definition,function(ne){return y(ne.definition)}));else if(!(w instanceof l.Terminal))throw Error("non exhaustive match");var G=s.isOptionalProd(w),Y=R.length>1;if(G&&Y){var V=t.drop(R);return D.concat(y(V))}else return D}n.getFirstNoneTerminal=y;var S=(function(R){e(D,R);function D(){var w=R!==null&&R.apply(this,arguments)||this;return w.alternations=[],w}return D.prototype.visitAlternation=function(w){this.alternations.push(w)},D})(a.GAstVisitor);function _(R,D){var w=new S;R.accept(w);var G=w.alternations,Y=t.reduce(G,function(V,ne){var X=t.dropRight(ne.definition),ie=t.map(X,function(oe,Se){var Te=c.nextPossibleTokensAfter([oe],[],null,1);return t.isEmpty(Te)?{message:D.buildEmptyAlternationError({topLevelRule:R,alternation:ne,emptyChoiceIdx:Se}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:R.name,occurrence:ne.idx,alternative:Se+1}:null});return V.concat(t.compact(ie))},[]);return Y}n.validateEmptyOrAlternative=_;function A(R,D,w){var G=new S;R.accept(G);var Y=G.alternations;Y=i.reject(Y,function(ne){return ne.ignoreAmbiguities===!0});var V=t.reduce(Y,function(ne,X){var ie=X.idx,oe=X.maxLookahead||D,Se=o.getLookaheadPathsForOr(ie,R,oe,X),Te=P(Se,X,R,w),Q=N(Se,X,R,w);return ne.concat(Te,Q)},[]);return V}n.validateAmbiguousAlternationAlternatives=A;var C=(function(R){e(D,R);function D(){var w=R!==null&&R.apply(this,arguments)||this;return w.allProductions=[],w}return D.prototype.visitRepetitionWithSeparator=function(w){this.allProductions.push(w)},D.prototype.visitRepetitionMandatory=function(w){this.allProductions.push(w)},D.prototype.visitRepetitionMandatoryWithSeparator=function(w){this.allProductions.push(w)},D.prototype.visitRepetition=function(w){this.allProductions.push(w)},D})(a.GAstVisitor);n.RepetionCollector=C;function v(R,D){var w=new S;R.accept(w);var G=w.alternations,Y=t.reduce(G,function(V,ne){return ne.definition.length>255&&V.push({message:D.buildTooManyAlternativesError({topLevelRule:R,alternation:ne}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:R.name,occurrence:ne.idx}),V},[]);return Y}n.validateTooManyAlts=v;function b(R,D,w){var G=[];return i.forEach(R,function(Y){var V=new C;Y.accept(V);var ne=V.allProductions;i.forEach(ne,function(X){var ie=o.getProdType(X),oe=X.maxLookahead||D,Se=X.idx,Te=o.getLookaheadPathsForOptionalProd(Se,Y,ie,oe),Q=Te[0];if(i.isEmpty(i.flatten(Q))){var H=w.buildEmptyRepetitionError({topLevelRule:Y,repetition:X});G.push({message:H,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:Y.name})}})}),G}n.validateSomeNonEmptyLookaheadPath=b;function P(R,D,w,G){var Y=[],V=i.reduce(R,function(X,ie,oe){return D.definition[oe].ignoreAmbiguities===!0||i.forEach(ie,function(Se){var Te=[oe];i.forEach(R,function(Q,H){oe!==H&&o.containsPath(Q,Se)&&D.definition[H].ignoreAmbiguities!==!0&&Te.push(H)}),Te.length>1&&!o.containsPath(Y,Se)&&(Y.push(Se),X.push({alts:Te,path:Se}))}),X},[]),ne=t.map(V,function(X){var ie=i.map(X.alts,function(Se){return Se+1}),oe=G.buildAlternationAmbiguityError({topLevelRule:w,alternation:D,ambiguityIndices:ie,prefixPath:X.path});return{message:oe,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:w.name,occurrence:D.idx,alternatives:[X.alts]}});return ne}function N(R,D,w,G){var Y=[],V=i.reduce(R,function(ne,X,ie){var oe=i.map(X,function(Se){return{idx:ie,path:Se}});return ne.concat(oe)},[]);return i.forEach(V,function(ne){var X=D.definition[ne.idx];if(X.ignoreAmbiguities!==!0){var ie=ne.idx,oe=ne.path,Se=i.findAll(V,function(Q){return D.definition[Q.idx].ignoreAmbiguities!==!0&&Q.idx<ie&&o.isStrictPrefixOfPath(Q.path,oe)}),Te=i.map(Se,function(Q){var H=[Q.idx+1,ie+1],K=D.idx===0?"":D.idx,le=G.buildAlternationPrefixAmbiguityError({topLevelRule:w,alternation:D,ambiguityIndices:H,prefixPath:Q.path});return{message:le,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:w.name,occurrence:K,alternatives:H}});Y=Y.concat(Te)}}),Y}n.checkPrefixAlternativesAmbiguities=N;function L(R,D,w){var G=[],Y=i.map(D,function(V){return V.name});return i.forEach(R,function(V){var ne=V.name;if(i.contains(Y,ne)){var X=w.buildNamespaceConflictError(V);G.push({message:X,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:ne})}}),G}}),t0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=pt(),t=e0(),i=Ph(),r=Sa();function s(c){c=e.defaults(c,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var l={};return e.forEach(c.rules,function(a){l[a.name]=a}),t.resolveGrammar(l,c.errMsgProvider)}n.resolveGrammar=s;function o(c){return c=e.defaults(c,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(c.rules,c.maxLookahead,c.tokenTypes,c.errMsgProvider,c.grammarName)}n.validateGrammar=o}),ds=et(n=>{"use strict";var e=n&&n.__extends||(function(){var g=function(x,u){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,y){h.__proto__=y}||function(h,y){for(var S in y)Object.prototype.hasOwnProperty.call(y,S)&&(h[S]=y[S])},g(x,u)};return function(x,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");g(x,u);function h(){this.constructor=x}x.prototype=u===null?Object.create(u):(h.prototype=u.prototype,new h)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=pt(),i="MismatchedTokenException",r="NoViableAltException",s="EarlyExitException",o="NotAllInputParsedException",c=[i,r,s,o];Object.freeze(c);function l(g){return t.contains(c,g.name)}n.isRecognitionException=l;var a=(function(g){e(x,g);function x(u,h){var y=this.constructor,S=g.call(this,u)||this;return S.token=h,S.resyncedTokens=[],Object.setPrototypeOf(S,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(S,S.constructor),S}return x})(Error),f=(function(g){e(x,g);function x(u,h,y){var S=g.call(this,u,h)||this;return S.previousToken=y,S.name=i,S}return x})(a);n.MismatchedTokenException=f;var m=(function(g){e(x,g);function x(u,h,y){var S=g.call(this,u,h)||this;return S.previousToken=y,S.name=r,S}return x})(a);n.NoViableAltException=m;var d=(function(g){e(x,g);function x(u,h){var y=g.call(this,u,h)||this;return y.name=o,y}return x})(a);n.NotAllInputParsedException=d;var p=(function(g){e(x,g);function x(u,h,y){var S=g.call(this,u,h)||this;return S.previousToken=y,S.name=s,S}return x})(a);n.EarlyExitException=p}),Lh=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=wi(),t=pt(),i=ds(),r=Ih(),s=un();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function o(a){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=a}n.InRuleRecoveryException=o,o.prototype=Error.prototype;var c=(function(){function a(){}return a.prototype.initRecoverable=function(f){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(f,"recoveryEnabled")?f.recoveryEnabled:s.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=l)},a.prototype.getTokenToInsert=function(f){var m=e.createTokenInstance(f,"",NaN,NaN,NaN,NaN,NaN,NaN);return m.isInsertedInRecovery=!0,m},a.prototype.canTokenTypeBeInsertedInRecovery=function(f){return!0},a.prototype.tryInRepetitionRecovery=function(f,m,d,p){for(var g=this,x=this.findReSyncTokenType(),u=this.exportLexerState(),h=[],y=!1,S=this.LA(1),_=this.LA(1),A=function(){var C=g.LA(0),v=g.errorMessageProvider.buildMismatchTokenMessage({expected:p,actual:S,previous:C,ruleName:g.getCurrRuleFullName()}),b=new i.MismatchedTokenException(v,S,g.LA(0));b.resyncedTokens=t.dropRight(h),g.SAVE_ERROR(b)};!y;)if(this.tokenMatcher(_,p)){A();return}else if(d.call(this)){A(),f.apply(this,m);return}else this.tokenMatcher(_,x)?y=!0:(_=this.SKIP_TOKEN(),this.addToResyncTokens(_,h));this.importLexerState(u)},a.prototype.shouldInRepetitionRecoveryBeTried=function(f,m,d){return!(d===!1||f===void 0||m===void 0||this.tokenMatcher(this.LA(1),f)||this.isBackTracking()||this.canPerformInRuleRecovery(f,this.getFollowsForInRuleRecovery(f,m)))},a.prototype.getFollowsForInRuleRecovery=function(f,m){var d=this.getCurrentGrammarPath(f,m),p=this.getNextPossibleTokenTypes(d);return p},a.prototype.tryInRuleRecovery=function(f,m){if(this.canRecoverWithSingleTokenInsertion(f,m)){var d=this.getTokenToInsert(f);return d}if(this.canRecoverWithSingleTokenDeletion(f)){var p=this.SKIP_TOKEN();return this.consumeToken(),p}throw new o("sad sad panda")},a.prototype.canPerformInRuleRecovery=function(f,m){return this.canRecoverWithSingleTokenInsertion(f,m)||this.canRecoverWithSingleTokenDeletion(f)},a.prototype.canRecoverWithSingleTokenInsertion=function(f,m){var d=this;if(!this.canTokenTypeBeInsertedInRecovery(f)||t.isEmpty(m))return!1;var p=this.LA(1),g=t.find(m,function(x){return d.tokenMatcher(p,x)})!==void 0;return g},a.prototype.canRecoverWithSingleTokenDeletion=function(f){var m=this.tokenMatcher(this.LA(2),f);return m},a.prototype.isInCurrentRuleReSyncSet=function(f){var m=this.getCurrFollowKey(),d=this.getFollowSetFromFollowKey(m);return t.contains(d,f)},a.prototype.findReSyncTokenType=function(){for(var f=this.flattenFollowSet(),m=this.LA(1),d=2;;){var p=m.tokenType;if(t.contains(f,p))return p;m=this.LA(d),d++}},a.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var f=this.getLastExplicitRuleShortName(),m=this.getLastExplicitRuleOccurrenceIndex(),d=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(f),idxInCallingRule:m,inRule:this.shortRuleNameToFullName(d)}},a.prototype.buildFullFollowKeyStack=function(){var f=this,m=this.RULE_STACK,d=this.RULE_OCCURRENCE_STACK;return t.map(m,function(p,g){return g===0?n.EOF_FOLLOW_KEY:{ruleName:f.shortRuleNameToFullName(p),idxInCallingRule:d[g],inRule:f.shortRuleNameToFullName(m[g-1])}})},a.prototype.flattenFollowSet=function(){var f=this,m=t.map(this.buildFullFollowKeyStack(),function(d){return f.getFollowSetFromFollowKey(d)});return t.flatten(m)},a.prototype.getFollowSetFromFollowKey=function(f){if(f===n.EOF_FOLLOW_KEY)return[e.EOF];var m=f.ruleName+f.idxInCallingRule+r.IN+f.inRule;return this.resyncFollows[m]},a.prototype.addToResyncTokens=function(f,m){return this.tokenMatcher(f,e.EOF)||m.push(f),m},a.prototype.reSyncTo=function(f){for(var m=[],d=this.LA(1);this.tokenMatcher(d,f)===!1;)d=this.SKIP_TOKEN(),this.addToResyncTokens(d,m);return t.dropRight(m)},a.prototype.attemptInRepetitionRecovery=function(f,m,d,p,g,x,u){},a.prototype.getCurrentGrammarPath=function(f,m){var d=this.getHumanReadableRuleStack(),p=t.cloneArr(this.RULE_OCCURRENCE_STACK),g={ruleStack:d,occurrenceStack:p,lastTok:f,lastTokOccurrence:m};return g},a.prototype.getHumanReadableRuleStack=function(){var f=this;return t.map(this.RULE_STACK,function(m){return f.shortRuleNameToFullName(m)})},a})();n.Recoverable=c;function l(a,f,m,d,p,g,x){var u=this.getKeyForAutomaticLookahead(d,p),h=this.firstAfterRepMap[u];if(h===void 0){var y=this.getCurrRuleFullName(),S=this.getGAstProductions()[y],_=new g(S,p);h=_.startWalking(),this.firstAfterRepMap[u]=h}var A=h.token,C=h.occurrence,v=h.isEndOfRule;this.RULE_STACK.length===1&&v&&A===void 0&&(A=e.EOF,C=1),this.shouldInRepetitionRecoveryBeTried(A,C,x)&&this.tryInRepetitionRecovery(a,f,m,A)}n.attemptInRepetitionRecovery=l}),nl=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(i,r,s){return s|r|i}n.getKeyForAutomaticLookahead=e;var t=32-n.BITS_FOR_ALT_IDX}),n0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=Ea(),t=pt(),i=un(),r=nl(),s=va(),o=(function(){function c(){}return c.prototype.initLooksAhead=function(l){this.dynamicTokensEnabled=t.has(l,"dynamicTokensEnabled")?l.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(l,"maxLookahead")?l.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},c.prototype.preComputeLookaheadFunctions=function(l){var a=this;t.forEach(l,function(f){a.TRACE_INIT(f.name+" Rule Lookahead",function(){var m=s.collectMethods(f),d=m.alternation,p=m.repetition,g=m.option,x=m.repetitionMandatory,u=m.repetitionMandatoryWithSeparator,h=m.repetitionWithSeparator;t.forEach(d,function(y){var S=y.idx===0?"":y.idx;a.TRACE_INIT(""+s.getProductionDslName(y)+S,function(){var _=e.buildLookaheadFuncForOr(y.idx,f,y.maxLookahead||a.maxLookahead,y.hasPredicates,a.dynamicTokensEnabled,a.lookAheadBuilderForAlternatives),A=r.getKeyForAutomaticLookahead(a.fullRuleNameToShort[f.name],r.OR_IDX,y.idx);a.setLaFuncCache(A,_)})}),t.forEach(p,function(y){a.computeLookaheadFunc(f,y.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,y.maxLookahead,s.getProductionDslName(y))}),t.forEach(g,function(y){a.computeLookaheadFunc(f,y.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,y.maxLookahead,s.getProductionDslName(y))}),t.forEach(x,function(y){a.computeLookaheadFunc(f,y.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,y.maxLookahead,s.getProductionDslName(y))}),t.forEach(u,function(y){a.computeLookaheadFunc(f,y.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,y.maxLookahead,s.getProductionDslName(y))}),t.forEach(h,function(y){a.computeLookaheadFunc(f,y.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,y.maxLookahead,s.getProductionDslName(y))})})})},c.prototype.computeLookaheadFunc=function(l,a,f,m,d,p){var g=this;this.TRACE_INIT(""+p+(a===0?"":a),function(){var x=e.buildLookaheadFuncForOptionalProd(a,l,d||g.maxLookahead,g.dynamicTokensEnabled,m,g.lookAheadBuilderForOptional),u=r.getKeyForAutomaticLookahead(g.fullRuleNameToShort[l.name],f,a);g.setLaFuncCache(u,x)})},c.prototype.lookAheadBuilderForOptional=function(l,a,f){return e.buildSingleAlternativeLookaheadFunction(l,a,f)},c.prototype.lookAheadBuilderForAlternatives=function(l,a,f,m){return e.buildAlternativesLookAheadFunc(l,a,f,m)},c.prototype.getKeyForAutomaticLookahead=function(l,a){var f=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(f,l,a)},c.prototype.getLaFuncFromCache=function(l){},c.prototype.getLaFuncFromMap=function(l){return this.lookAheadFuncsCache.get(l)},c.prototype.getLaFuncFromObj=function(l){return this.lookAheadFuncsCache[l]},c.prototype.setLaFuncCache=function(l,a){},c.prototype.setLaFuncCacheUsingMap=function(l,a){this.lookAheadFuncsCache.set(l,a)},c.prototype.setLaFuncUsingObj=function(l,a){this.lookAheadFuncsCache[l]=a},c})();n.LooksAhead=o}),i0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(s,o){isNaN(s.startOffset)===!0?(s.startOffset=o.startOffset,s.endOffset=o.endOffset):s.endOffset<o.endOffset&&(s.endOffset=o.endOffset)}n.setNodeLocationOnlyOffset=e;function t(s,o){isNaN(s.startOffset)===!0?(s.startOffset=o.startOffset,s.startColumn=o.startColumn,s.startLine=o.startLine,s.endOffset=o.endOffset,s.endColumn=o.endColumn,s.endLine=o.endLine):s.endOffset<o.endOffset&&(s.endOffset=o.endOffset,s.endColumn=o.endColumn,s.endLine=o.endLine)}n.setNodeLocationFull=t;function i(s,o,c){s.children[c]===void 0?s.children[c]=[o]:s.children[c].push(o)}n.addTerminalToCst=i;function r(s,o,c){s.children[o]===void 0?s.children[o]=[c]:s.children[o].push(c)}n.addNoneTerminalToCst=r}),Nh=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=pt();function t(o){return r(o.constructor)}n.classNameFromInstance=t;var i="name";function r(o){var c=o.name;return c||"anonymous"}n.functionName=r;function s(o,c){var l=Object.getOwnPropertyDescriptor(o,i);return e.isUndefined(l)||l.configurable?(Object.defineProperty(o,i,{enumerable:!1,configurable:!0,writable:!1,value:c}),!0):!1}n.defineNameProp=s}),r0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=pt(),t=Nh();function i(m,d){for(var p=e.keys(m),g=p.length,x=0;x<g;x++)for(var u=p[x],h=m[u],y=h.length,S=0;S<y;S++){var _=h[S];_.tokenTypeIdx===void 0&&this[_.name](_.children,d)}}n.defaultVisit=i;function r(m,d){var p=function(){};t.defineNameProp(p,m+"BaseSemantics");var g={visit:function(x,u){if(e.isArray(x)&&(x=x[0]),!e.isUndefined(x))return this[x.name](x.children,u)},validateVisitor:function(){var x=c(this,d);if(!e.isEmpty(x)){var u=e.map(x,function(h){return h.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+u.join(`

`).replace(/\n/g,`
	`)))}}};return p.prototype=g,p.prototype.constructor=p,p._RULE_NAMES=d,p}n.createBaseSemanticVisitorConstructor=r;function s(m,d,p){var g=function(){};t.defineNameProp(g,m+"BaseSemanticsWithDefaults");var x=Object.create(p.prototype);return e.forEach(d,function(u){x[u]=i}),g.prototype=x,g.prototype.constructor=g,g}n.createBaseVisitorConstructorWithDefaults=s;var o;(function(m){m[m.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",m[m.MISSING_METHOD=1]="MISSING_METHOD"})(o=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function c(m,d){var p=l(m,d),g=f(m,d);return p.concat(g)}n.validateVisitor=c;function l(m,d){var p=e.map(d,function(g){if(!e.isFunction(m[g]))return{msg:"Missing visitor method: <"+g+"> on "+t.functionName(m.constructor)+" CST Visitor.",type:o.MISSING_METHOD,methodName:g}});return e.compact(p)}n.validateMissingCstMethods=l;var a=["constructor","visit","validateVisitor"];function f(m,d){var p=[];for(var g in m)e.isFunction(m[g])&&!e.contains(a,g)&&!e.contains(d,g)&&p.push({msg:"Redundant visitor method: <"+g+"> on "+t.functionName(m.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:o.REDUNDANT_METHOD,methodName:g});return p}n.validateRedundantMethods=f}),s0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=i0(),t=pt(),i=r0(),r=un(),s=(function(){function o(){}return o.prototype.initTreeBuilder=function(c){if(this.CST_STACK=[],this.outputCst=c.outputCst,this.nodeLocationTracking=t.has(c,"nodeLocationTracking")?c.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+c.nodeLocationTracking+'"')},o.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(c){c.location={startOffset:NaN,endOffset:NaN}},o.prototype.setInitialNodeLocationOnlyOffsetRegular=function(c){c.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},o.prototype.setInitialNodeLocationFullRecovery=function(c){c.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},o.prototype.setInitialNodeLocationFullRegular=function(c){var l=this.LA(1);c.location={startOffset:l.startOffset,startLine:l.startLine,startColumn:l.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},o.prototype.cstInvocationStateUpdate=function(c,l){var a={name:c,children:{}};this.setInitialNodeLocation(a),this.CST_STACK.push(a)},o.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},o.prototype.cstPostRuleFull=function(c){var l=this.LA(0),a=c.location;a.startOffset<=l.startOffset?(a.endOffset=l.endOffset,a.endLine=l.endLine,a.endColumn=l.endColumn):(a.startOffset=NaN,a.startLine=NaN,a.startColumn=NaN)},o.prototype.cstPostRuleOnlyOffset=function(c){var l=this.LA(0),a=c.location;a.startOffset<=l.startOffset?a.endOffset=l.endOffset:a.startOffset=NaN},o.prototype.cstPostTerminal=function(c,l){var a=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(a,l,c),this.setNodeLocationFromToken(a.location,l)},o.prototype.cstPostNonTerminal=function(c,l){var a=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(a,l,c),this.setNodeLocationFromNode(a.location,c.location)},o.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var c=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=c,c}return this.baseCstVisitorConstructor},o.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var c=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=c,c}return this.baseCstVisitorWithDefaultsConstructor},o.prototype.getLastExplicitRuleShortName=function(){var c=this.RULE_STACK;return c[c.length-1]},o.prototype.getPreviousExplicitRuleShortName=function(){var c=this.RULE_STACK;return c[c.length-2]},o.prototype.getLastExplicitRuleOccurrenceIndex=function(){var c=this.RULE_OCCURRENCE_STACK;return c[c.length-1]},o})();n.TreeBuilder=s}),o0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=un(),t=(function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var s=this.currIdx+r;return s<0||this.tokVectorLength<=s?e.END_OF_FILE:this.tokVector[s]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i})();n.LexerAdapter=t}),a0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=pt(),t=ds(),i=un(),r=Sa(),s=Ph(),o=on(),c=(function(){function l(){}return l.prototype.ACTION=function(a){return a.call(this)},l.prototype.consume=function(a,f,m){return this.consumeInternal(f,a,m)},l.prototype.subrule=function(a,f,m){return this.subruleInternal(f,a,m)},l.prototype.option=function(a,f){return this.optionInternal(f,a)},l.prototype.or=function(a,f){return this.orInternal(f,a)},l.prototype.many=function(a,f){return this.manyInternal(a,f)},l.prototype.atLeastOne=function(a,f){return this.atLeastOneInternal(a,f)},l.prototype.CONSUME=function(a,f){return this.consumeInternal(a,0,f)},l.prototype.CONSUME1=function(a,f){return this.consumeInternal(a,1,f)},l.prototype.CONSUME2=function(a,f){return this.consumeInternal(a,2,f)},l.prototype.CONSUME3=function(a,f){return this.consumeInternal(a,3,f)},l.prototype.CONSUME4=function(a,f){return this.consumeInternal(a,4,f)},l.prototype.CONSUME5=function(a,f){return this.consumeInternal(a,5,f)},l.prototype.CONSUME6=function(a,f){return this.consumeInternal(a,6,f)},l.prototype.CONSUME7=function(a,f){return this.consumeInternal(a,7,f)},l.prototype.CONSUME8=function(a,f){return this.consumeInternal(a,8,f)},l.prototype.CONSUME9=function(a,f){return this.consumeInternal(a,9,f)},l.prototype.SUBRULE=function(a,f){return this.subruleInternal(a,0,f)},l.prototype.SUBRULE1=function(a,f){return this.subruleInternal(a,1,f)},l.prototype.SUBRULE2=function(a,f){return this.subruleInternal(a,2,f)},l.prototype.SUBRULE3=function(a,f){return this.subruleInternal(a,3,f)},l.prototype.SUBRULE4=function(a,f){return this.subruleInternal(a,4,f)},l.prototype.SUBRULE5=function(a,f){return this.subruleInternal(a,5,f)},l.prototype.SUBRULE6=function(a,f){return this.subruleInternal(a,6,f)},l.prototype.SUBRULE7=function(a,f){return this.subruleInternal(a,7,f)},l.prototype.SUBRULE8=function(a,f){return this.subruleInternal(a,8,f)},l.prototype.SUBRULE9=function(a,f){return this.subruleInternal(a,9,f)},l.prototype.OPTION=function(a){return this.optionInternal(a,0)},l.prototype.OPTION1=function(a){return this.optionInternal(a,1)},l.prototype.OPTION2=function(a){return this.optionInternal(a,2)},l.prototype.OPTION3=function(a){return this.optionInternal(a,3)},l.prototype.OPTION4=function(a){return this.optionInternal(a,4)},l.prototype.OPTION5=function(a){return this.optionInternal(a,5)},l.prototype.OPTION6=function(a){return this.optionInternal(a,6)},l.prototype.OPTION7=function(a){return this.optionInternal(a,7)},l.prototype.OPTION8=function(a){return this.optionInternal(a,8)},l.prototype.OPTION9=function(a){return this.optionInternal(a,9)},l.prototype.OR=function(a){return this.orInternal(a,0)},l.prototype.OR1=function(a){return this.orInternal(a,1)},l.prototype.OR2=function(a){return this.orInternal(a,2)},l.prototype.OR3=function(a){return this.orInternal(a,3)},l.prototype.OR4=function(a){return this.orInternal(a,4)},l.prototype.OR5=function(a){return this.orInternal(a,5)},l.prototype.OR6=function(a){return this.orInternal(a,6)},l.prototype.OR7=function(a){return this.orInternal(a,7)},l.prototype.OR8=function(a){return this.orInternal(a,8)},l.prototype.OR9=function(a){return this.orInternal(a,9)},l.prototype.MANY=function(a){this.manyInternal(0,a)},l.prototype.MANY1=function(a){this.manyInternal(1,a)},l.prototype.MANY2=function(a){this.manyInternal(2,a)},l.prototype.MANY3=function(a){this.manyInternal(3,a)},l.prototype.MANY4=function(a){this.manyInternal(4,a)},l.prototype.MANY5=function(a){this.manyInternal(5,a)},l.prototype.MANY6=function(a){this.manyInternal(6,a)},l.prototype.MANY7=function(a){this.manyInternal(7,a)},l.prototype.MANY8=function(a){this.manyInternal(8,a)},l.prototype.MANY9=function(a){this.manyInternal(9,a)},l.prototype.MANY_SEP=function(a){this.manySepFirstInternal(0,a)},l.prototype.MANY_SEP1=function(a){this.manySepFirstInternal(1,a)},l.prototype.MANY_SEP2=function(a){this.manySepFirstInternal(2,a)},l.prototype.MANY_SEP3=function(a){this.manySepFirstInternal(3,a)},l.prototype.MANY_SEP4=function(a){this.manySepFirstInternal(4,a)},l.prototype.MANY_SEP5=function(a){this.manySepFirstInternal(5,a)},l.prototype.MANY_SEP6=function(a){this.manySepFirstInternal(6,a)},l.prototype.MANY_SEP7=function(a){this.manySepFirstInternal(7,a)},l.prototype.MANY_SEP8=function(a){this.manySepFirstInternal(8,a)},l.prototype.MANY_SEP9=function(a){this.manySepFirstInternal(9,a)},l.prototype.AT_LEAST_ONE=function(a){this.atLeastOneInternal(0,a)},l.prototype.AT_LEAST_ONE1=function(a){return this.atLeastOneInternal(1,a)},l.prototype.AT_LEAST_ONE2=function(a){this.atLeastOneInternal(2,a)},l.prototype.AT_LEAST_ONE3=function(a){this.atLeastOneInternal(3,a)},l.prototype.AT_LEAST_ONE4=function(a){this.atLeastOneInternal(4,a)},l.prototype.AT_LEAST_ONE5=function(a){this.atLeastOneInternal(5,a)},l.prototype.AT_LEAST_ONE6=function(a){this.atLeastOneInternal(6,a)},l.prototype.AT_LEAST_ONE7=function(a){this.atLeastOneInternal(7,a)},l.prototype.AT_LEAST_ONE8=function(a){this.atLeastOneInternal(8,a)},l.prototype.AT_LEAST_ONE9=function(a){this.atLeastOneInternal(9,a)},l.prototype.AT_LEAST_ONE_SEP=function(a){this.atLeastOneSepFirstInternal(0,a)},l.prototype.AT_LEAST_ONE_SEP1=function(a){this.atLeastOneSepFirstInternal(1,a)},l.prototype.AT_LEAST_ONE_SEP2=function(a){this.atLeastOneSepFirstInternal(2,a)},l.prototype.AT_LEAST_ONE_SEP3=function(a){this.atLeastOneSepFirstInternal(3,a)},l.prototype.AT_LEAST_ONE_SEP4=function(a){this.atLeastOneSepFirstInternal(4,a)},l.prototype.AT_LEAST_ONE_SEP5=function(a){this.atLeastOneSepFirstInternal(5,a)},l.prototype.AT_LEAST_ONE_SEP6=function(a){this.atLeastOneSepFirstInternal(6,a)},l.prototype.AT_LEAST_ONE_SEP7=function(a){this.atLeastOneSepFirstInternal(7,a)},l.prototype.AT_LEAST_ONE_SEP8=function(a){this.atLeastOneSepFirstInternal(8,a)},l.prototype.AT_LEAST_ONE_SEP9=function(a){this.atLeastOneSepFirstInternal(9,a)},l.prototype.RULE=function(a,f,m){if(m===void 0&&(m=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,a)){var d=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:a,grammarName:this.className}),p={message:d,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:a};this.definitionErrors.push(p)}this.definedRulesNames.push(a);var g=this.defineRule(a,f,m);return this[a]=g,g},l.prototype.OVERRIDE_RULE=function(a,f,m){m===void 0&&(m=i.DEFAULT_RULE_CONFIG);var d=[];d=d.concat(s.validateRuleIsOverridden(a,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(d);var p=this.defineRule(a,f,m);return this[a]=p,p},l.prototype.BACKTRACK=function(a,f){return function(){this.isBackTrackingStack.push(1);var m=this.saveRecogState();try{return a.apply(this,f),!0}catch(d){if(t.isRecognitionException(d))return!1;throw d}finally{this.reloadRecogState(m),this.isBackTrackingStack.pop()}}},l.prototype.getGAstProductions=function(){return this.gastProductionsCache},l.prototype.getSerializedGastProductions=function(){return o.serializeGrammar(e.values(this.gastProductionsCache))},l})();n.RecognizerApi=c}),c0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=pt(),t=nl(),i=ds(),r=Ea(),s=Ma(),o=un(),c=Lh(),l=wi(),a=us(),f=Nh(),m=(function(){function d(){}return d.prototype.initRecognizerEngine=function(p,g){if(this.className=f.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=a.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(g,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(p)){if(e.isEmpty(p))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof p[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(p))this.tokensMap=e.reduce(p,function(y,S){return y[S.name]=S,y},{});else if(e.has(p,"modes")&&e.every(e.flatten(e.values(p.modes)),a.isTokenType)){var x=e.flatten(e.values(p.modes)),u=e.uniq(x);this.tokensMap=e.reduce(u,function(y,S){return y[S.name]=S,y},{})}else if(e.isObject(p))this.tokensMap=e.cloneObj(p);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=l.EOF;var h=e.every(e.values(p),function(y){return e.isEmpty(y.categoryMatches)});this.tokenMatcher=h?a.tokenStructuredMatcherNoCategories:a.tokenStructuredMatcher,a.augmentTokenTypes(e.values(this.tokensMap))},d.prototype.defineRule=function(p,g,x){if(this.selfAnalysisDone)throw Error("Grammar rule <"+p+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var u=e.has(x,"resyncEnabled")?x.resyncEnabled:o.DEFAULT_RULE_CONFIG.resyncEnabled,h=e.has(x,"recoveryValueFunc")?x.recoveryValueFunc:o.DEFAULT_RULE_CONFIG.recoveryValueFunc,y=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[y]=p,this.fullRuleNameToShort[p]=y;function S(C){try{if(this.outputCst===!0){g.apply(this,C);var v=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(v),v}else return g.apply(this,C)}catch(b){return this.invokeRuleCatch(b,u,h)}finally{this.ruleFinallyStateUpdate()}}var _=function(C,v){return C===void 0&&(C=0),this.ruleInvocationStateUpdate(y,p,C),S.call(this,v)},A="ruleName";return _[A]=p,_.originalGrammarAction=g,_},d.prototype.invokeRuleCatch=function(p,g,x){var u=this.RULE_STACK.length===1,h=g&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(p)){var y=p;if(h){var S=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(S))if(y.resyncedTokens=this.reSyncTo(S),this.outputCst){var _=this.CST_STACK[this.CST_STACK.length-1];return _.recoveredNode=!0,_}else return x();else{if(this.outputCst){var _=this.CST_STACK[this.CST_STACK.length-1];_.recoveredNode=!0,y.partialCstResult=_}throw y}}else{if(u)return this.moveToTerminatedState(),x();throw y}}else throw p},d.prototype.optionInternal=function(p,g){var x=this.getKeyForAutomaticLookahead(t.OPTION_IDX,g);return this.optionInternalLogic(p,g,x)},d.prototype.optionInternalLogic=function(p,g,x){var u=this,h=this.getLaFuncFromCache(x),y,S;if(p.DEF!==void 0){if(y=p.DEF,S=p.GATE,S!==void 0){var _=h;h=function(){return S.call(u)&&_.call(u)}}}else y=p;if(h.call(this)===!0)return y.call(this)},d.prototype.atLeastOneInternal=function(p,g){var x=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,p);return this.atLeastOneInternalLogic(p,g,x)},d.prototype.atLeastOneInternalLogic=function(p,g,x){var u=this,h=this.getLaFuncFromCache(x),y,S;if(g.DEF!==void 0){if(y=g.DEF,S=g.GATE,S!==void 0){var _=h;h=function(){return S.call(u)&&_.call(u)}}}else y=g;if(h.call(this)===!0)for(var A=this.doSingleRepetition(y);h.call(this)===!0&&A===!0;)A=this.doSingleRepetition(y);else throw this.raiseEarlyExitException(p,r.PROD_TYPE.REPETITION_MANDATORY,g.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[p,g],h,t.AT_LEAST_ONE_IDX,p,s.NextTerminalAfterAtLeastOneWalker)},d.prototype.atLeastOneSepFirstInternal=function(p,g){var x=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,p);this.atLeastOneSepFirstInternalLogic(p,g,x)},d.prototype.atLeastOneSepFirstInternalLogic=function(p,g,x){var u=this,h=g.DEF,y=g.SEP,S=this.getLaFuncFromCache(x);if(S.call(this)===!0){h.call(this);for(var _=function(){return u.tokenMatcher(u.LA(1),y)};this.tokenMatcher(this.LA(1),y)===!0;)this.CONSUME(y),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,y,_,h,s.NextTerminalAfterAtLeastOneSepWalker],_,t.AT_LEAST_ONE_SEP_IDX,p,s.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(p,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,g.ERR_MSG)},d.prototype.manyInternal=function(p,g){var x=this.getKeyForAutomaticLookahead(t.MANY_IDX,p);return this.manyInternalLogic(p,g,x)},d.prototype.manyInternalLogic=function(p,g,x){var u=this,h=this.getLaFuncFromCache(x),y,S;if(g.DEF!==void 0){if(y=g.DEF,S=g.GATE,S!==void 0){var _=h;h=function(){return S.call(u)&&_.call(u)}}}else y=g;for(var A=!0;h.call(this)===!0&&A===!0;)A=this.doSingleRepetition(y);this.attemptInRepetitionRecovery(this.manyInternal,[p,g],h,t.MANY_IDX,p,s.NextTerminalAfterManyWalker,A)},d.prototype.manySepFirstInternal=function(p,g){var x=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,p);this.manySepFirstInternalLogic(p,g,x)},d.prototype.manySepFirstInternalLogic=function(p,g,x){var u=this,h=g.DEF,y=g.SEP,S=this.getLaFuncFromCache(x);if(S.call(this)===!0){h.call(this);for(var _=function(){return u.tokenMatcher(u.LA(1),y)};this.tokenMatcher(this.LA(1),y)===!0;)this.CONSUME(y),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,y,_,h,s.NextTerminalAfterManySepWalker],_,t.MANY_SEP_IDX,p,s.NextTerminalAfterManySepWalker)}},d.prototype.repetitionSepSecondInternal=function(p,g,x,u,h){for(;x();)this.CONSUME(g),u.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[p,g,x,u,h],x,t.AT_LEAST_ONE_SEP_IDX,p,h)},d.prototype.doSingleRepetition=function(p){var g=this.getLexerPosition();p.call(this);var x=this.getLexerPosition();return x>g},d.prototype.orInternal=function(p,g){var x=this.getKeyForAutomaticLookahead(t.OR_IDX,g),u=e.isArray(p)?p:p.DEF,h=this.getLaFuncFromCache(x),y=h.call(this,u);if(y!==void 0){var S=u[y];return S.ALT.call(this)}this.raiseNoAltException(g,p.ERR_MSG)},d.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var p=this.LA(1),g=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:p,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(g,p))}},d.prototype.subruleInternal=function(p,g,x){var u;try{var h=x!==void 0?x.ARGS:void 0;return u=p.call(this,g,h),this.cstPostNonTerminal(u,x!==void 0&&x.LABEL!==void 0?x.LABEL:p.ruleName),u}catch(y){this.subruleInternalError(y,x,p.ruleName)}},d.prototype.subruleInternalError=function(p,g,x){throw i.isRecognitionException(p)&&p.partialCstResult!==void 0&&(this.cstPostNonTerminal(p.partialCstResult,g!==void 0&&g.LABEL!==void 0?g.LABEL:x),delete p.partialCstResult),p},d.prototype.consumeInternal=function(p,g,x){var u;try{var h=this.LA(1);this.tokenMatcher(h,p)===!0?(this.consumeToken(),u=h):this.consumeInternalError(p,h,x)}catch(y){u=this.consumeInternalRecovery(p,g,y)}return this.cstPostTerminal(x!==void 0&&x.LABEL!==void 0?x.LABEL:p.name,u),u},d.prototype.consumeInternalError=function(p,g,x){var u,h=this.LA(0);throw x!==void 0&&x.ERR_MSG?u=x.ERR_MSG:u=this.errorMessageProvider.buildMismatchTokenMessage({expected:p,actual:g,previous:h,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(u,g,h))},d.prototype.consumeInternalRecovery=function(p,g,x){if(this.recoveryEnabled&&x.name==="MismatchedTokenException"&&!this.isBackTracking()){var u=this.getFollowsForInRuleRecovery(p,g);try{return this.tryInRuleRecovery(p,u)}catch(h){throw h.name===c.IN_RULE_RECOVERY_EXCEPTION?x:h}}else throw x},d.prototype.saveRecogState=function(){var p=this.errors,g=e.cloneArr(this.RULE_STACK);return{errors:p,lexerState:this.exportLexerState(),RULE_STACK:g,CST_STACK:this.CST_STACK}},d.prototype.reloadRecogState=function(p){this.errors=p.errors,this.importLexerState(p.lexerState),this.RULE_STACK=p.RULE_STACK},d.prototype.ruleInvocationStateUpdate=function(p,g,x){this.RULE_OCCURRENCE_STACK.push(x),this.RULE_STACK.push(p),this.cstInvocationStateUpdate(g,p)},d.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},d.prototype.getCurrRuleFullName=function(){var p=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[p]},d.prototype.shortRuleNameToFullName=function(p){return this.shortRuleNameToFull[p]},d.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),l.EOF)},d.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},d})();n.RecognizerEngine=m}),l0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=ds(),t=pt(),i=Ea(),r=un(),s=(function(){function o(){}return o.prototype.initErrorHandler=function(c){this._errors=[],this.errorMessageProvider=t.has(c,"errorMessageProvider")?c.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},o.prototype.SAVE_ERROR=function(c){if(e.isRecognitionException(c))return c.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(c),c;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(o.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(c){this._errors=c},enumerable:!1,configurable:!0}),o.prototype.raiseEarlyExitException=function(c,l,a){for(var f=this.getCurrRuleFullName(),m=this.getGAstProductions()[f],d=i.getLookaheadPathsForOptionalProd(c,m,l,this.maxLookahead),p=d[0],g=[],x=1;x<=this.maxLookahead;x++)g.push(this.LA(x));var u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:p,actual:g,previous:this.LA(0),customUserDescription:a,ruleName:f});throw this.SAVE_ERROR(new e.EarlyExitException(u,this.LA(1),this.LA(0)))},o.prototype.raiseNoAltException=function(c,l){for(var a=this.getCurrRuleFullName(),f=this.getGAstProductions()[a],m=i.getLookaheadPathsForOr(c,f,this.maxLookahead),d=[],p=1;p<=this.maxLookahead;p++)d.push(this.LA(p));var g=this.LA(0),x=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:m,actual:d,previous:g,customUserDescription:l,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(x,this.LA(1),g))},o})();n.ErrorHandler=s}),u0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=Ma(),t=pt(),i=(function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(s,o){var c=this.gastProductionsCache[s];if(t.isUndefined(c))throw Error("Rule ->"+s+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([c],o,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(s){var o=t.first(s.ruleStack),c=this.getGAstProductions(),l=c[o],a=new e.NextAfterTokenWalker(l,s).startWalking();return a},r})();n.ContentAssist=i}),h0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=pt(),t=on(),i=xa(),r=us(),s=wi(),o=un(),c=nl(),l={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(l);var a=!0,f=Math.pow(2,c.BITS_FOR_OCCURRENCE_IDX)-1,m=s.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([m]);var d=s.createTokenInstance(m,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(d);var p={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},g=(function(){function S(){}return S.prototype.initGastRecorder=function(_){this.recordingProdStack=[],this.RECORDING_PHASE=!1},S.prototype.enableRecording=function(){var _=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var A=function(v){var b=v>0?v:"";_["CONSUME"+b]=function(P,N){return this.consumeInternalRecord(P,v,N)},_["SUBRULE"+b]=function(P,N){return this.subruleInternalRecord(P,v,N)},_["OPTION"+b]=function(P){return this.optionInternalRecord(P,v)},_["OR"+b]=function(P){return this.orInternalRecord(P,v)},_["MANY"+b]=function(P){this.manyInternalRecord(v,P)},_["MANY_SEP"+b]=function(P){this.manySepFirstInternalRecord(v,P)},_["AT_LEAST_ONE"+b]=function(P){this.atLeastOneInternalRecord(v,P)},_["AT_LEAST_ONE_SEP"+b]=function(P){this.atLeastOneSepFirstInternalRecord(v,P)}},C=0;C<10;C++)A(C);_.consume=function(v,b,P){return this.consumeInternalRecord(b,v,P)},_.subrule=function(v,b,P){return this.subruleInternalRecord(b,v,P)},_.option=function(v,b){return this.optionInternalRecord(b,v)},_.or=function(v,b){return this.orInternalRecord(b,v)},_.many=function(v,b){this.manyInternalRecord(v,b)},_.atLeastOne=function(v,b){this.atLeastOneInternalRecord(v,b)},_.ACTION=_.ACTION_RECORD,_.BACKTRACK=_.BACKTRACK_RECORD,_.LA=_.LA_RECORD})},S.prototype.disableRecording=function(){var _=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var A=0;A<10;A++){var C=A>0?A:"";delete _["CONSUME"+C],delete _["SUBRULE"+C],delete _["OPTION"+C],delete _["OR"+C],delete _["MANY"+C],delete _["MANY_SEP"+C],delete _["AT_LEAST_ONE"+C],delete _["AT_LEAST_ONE_SEP"+C]}delete _.consume,delete _.subrule,delete _.option,delete _.or,delete _.many,delete _.atLeastOne,delete _.ACTION,delete _.BACKTRACK,delete _.LA})},S.prototype.ACTION_RECORD=function(_){},S.prototype.BACKTRACK_RECORD=function(_,A){return function(){return!0}},S.prototype.LA_RECORD=function(_){return o.END_OF_FILE},S.prototype.topLevelRuleRecord=function(_,A){try{var C=new t.Rule({definition:[],name:_});return C.name=_,this.recordingProdStack.push(C),A.call(this),this.recordingProdStack.pop(),C}catch(v){if(v.KNOWN_RECORDER_ERROR!==!0)try{v.message=v.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw v}throw v}},S.prototype.optionInternalRecord=function(_,A){return x.call(this,t.Option,_,A)},S.prototype.atLeastOneInternalRecord=function(_,A){x.call(this,t.RepetitionMandatory,A,_)},S.prototype.atLeastOneSepFirstInternalRecord=function(_,A){x.call(this,t.RepetitionMandatoryWithSeparator,A,_,a)},S.prototype.manyInternalRecord=function(_,A){x.call(this,t.Repetition,A,_)},S.prototype.manySepFirstInternalRecord=function(_,A){x.call(this,t.RepetitionWithSeparator,A,_,a)},S.prototype.orInternalRecord=function(_,A){return u.call(this,_,A)},S.prototype.subruleInternalRecord=function(_,A,C){if(y(A),!_||e.has(_,"ruleName")===!1){var v=new Error("<SUBRULE"+h(A)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(_)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw v.KNOWN_RECORDER_ERROR=!0,v}var b=e.peek(this.recordingProdStack),P=_.ruleName,N=new t.NonTerminal({idx:A,nonTerminalName:P,referencedRule:void 0});return b.definition.push(N),this.outputCst?p:l},S.prototype.consumeInternalRecord=function(_,A,C){if(y(A),!r.hasShortKeyProperty(_)){var v=new Error("<CONSUME"+h(A)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(_)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw v.KNOWN_RECORDER_ERROR=!0,v}var b=e.peek(this.recordingProdStack),P=new t.Terminal({idx:A,terminalType:_});return b.definition.push(P),d},S})();n.GastRecorder=g;function x(S,_,A,C){C===void 0&&(C=!1),y(A);var v=e.peek(this.recordingProdStack),b=e.isFunction(_)?_:_.DEF,P=new S({definition:[],idx:A});return C&&(P.separator=_.SEP),e.has(_,"MAX_LOOKAHEAD")&&(P.maxLookahead=_.MAX_LOOKAHEAD),this.recordingProdStack.push(P),b.call(this),v.definition.push(P),this.recordingProdStack.pop(),l}function u(S,_){var A=this;y(_);var C=e.peek(this.recordingProdStack),v=e.isArray(S)===!1,b=v===!1?S:S.DEF,P=new t.Alternation({definition:[],idx:_,ignoreAmbiguities:v&&S.IGNORE_AMBIGUITIES===!0});e.has(S,"MAX_LOOKAHEAD")&&(P.maxLookahead=S.MAX_LOOKAHEAD);var N=e.some(b,function(L){return e.isFunction(L.GATE)});return P.hasPredicates=N,C.definition.push(P),e.forEach(b,function(L){var R=new t.Alternative({definition:[]});P.definition.push(R),e.has(L,"IGNORE_AMBIGUITIES")?R.ignoreAmbiguities=L.IGNORE_AMBIGUITIES:e.has(L,"GATE")&&(R.ignoreAmbiguities=!0),A.recordingProdStack.push(R),L.ALT.call(A),A.recordingProdStack.pop()}),l}function h(S){return S===0?"":""+S}function y(S){if(S<0||S>f){var _=new Error("Invalid DSL Method idx value: <"+S+`>
	`+("Idx value must be a none negative value smaller than "+(f+1)));throw _.KNOWN_RECORDER_ERROR=!0,_}}}),d0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=pt(),t=un(),i=(function(){function r(){}return r.prototype.initPerformanceTracer=function(s){if(e.has(s,"traceInitPerf")){var o=s.traceInitPerf,c=typeof o=="number";this.traceInitMaxIdent=c?o:1/0,this.traceInitPerf=c?o>0:o}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(s,o){if(this.traceInitPerf===!0){this.traceInitIndent++;var c=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(c+"--> <"+s+">");var l=e.timer(o),a=l.time,f=l.value,m=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&m(c+"<-- <"+s+"> time: "+a+"ms"),this.traceInitIndent--,f}else return o()},r})();n.PerformanceTracer=i}),f0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var s=r.prototype;Object.getOwnPropertyNames(s).forEach(function(o){if(o!=="constructor"){var c=Object.getOwnPropertyDescriptor(s,o);c&&(c.get||c.set)?Object.defineProperty(t.prototype,o,c):t.prototype[o]=r.prototype[o]}})})}n.applyMixins=e}),un=et(n=>{"use strict";var e=n&&n.__extends||(function(){var v=function(b,P){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(N,L){N.__proto__=L}||function(N,L){for(var R in L)Object.prototype.hasOwnProperty.call(L,R)&&(N[R]=L[R])},v(b,P)};return function(b,P){if(typeof P!="function"&&P!==null)throw new TypeError("Class extends value "+String(P)+" is not a constructor or null");v(b,P);function N(){this.constructor=b}b.prototype=P===null?Object.create(P):(N.prototype=P.prototype,new N)}})();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=pt(),i=Q_(),r=wi(),s=Sa(),o=t0(),c=Lh(),l=n0(),a=s0(),f=o0(),m=a0(),d=c0(),p=l0(),g=u0(),x=h0(),u=d0(),h=f0();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:s.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0});var y;(function(v){v[v.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",v[v.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",v[v.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",v[v.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",v[v.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",v[v.LEFT_RECURSION=5]="LEFT_RECURSION",v[v.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",v[v.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",v[v.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",v[v.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",v[v.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",v[v.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",v[v.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"})(y=n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function S(v){return v===void 0&&(v=void 0),function(){return v}}n.EMPTY_ALT=S;var _=(function(){function v(b,P){this.definitionErrors=[],this.selfAnalysisDone=!1;var N=this;if(N.initErrorHandler(P),N.initLexerAdapter(),N.initLooksAhead(P),N.initRecognizerEngine(b,P),N.initRecoverable(P),N.initTreeBuilder(P),N.initContentAssist(),N.initGastRecorder(P),N.initPerformanceTracer(P),t.has(P,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(P,"skipValidations")?P.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return v.performSelfAnalysis=function(b){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},v.prototype.performSelfAnalysis=function(){var b=this;this.TRACE_INIT("performSelfAnalysis",function(){var P;b.selfAnalysisDone=!0;var N=b.className;b.TRACE_INIT("toFastProps",function(){t.toFastProperties(b)}),b.TRACE_INIT("Grammar Recording",function(){try{b.enableRecording(),t.forEach(b.definedRulesNames,function(R){var D=b[R],w=D.originalGrammarAction,G=void 0;b.TRACE_INIT(R+" Rule",function(){G=b.topLevelRuleRecord(R,w)}),b.gastProductionsCache[R]=G})}finally{b.disableRecording()}});var L=[];if(b.TRACE_INIT("Grammar Resolving",function(){L=o.resolveGrammar({rules:t.values(b.gastProductionsCache)}),b.definitionErrors=b.definitionErrors.concat(L)}),b.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(L)&&b.skipValidations===!1){var R=o.validateGrammar({rules:t.values(b.gastProductionsCache),maxLookahead:b.maxLookahead,tokenTypes:t.values(b.tokensMap),errMsgProvider:s.defaultGrammarValidatorErrorProvider,grammarName:N});b.definitionErrors=b.definitionErrors.concat(R)}}),t.isEmpty(b.definitionErrors)&&(b.recoveryEnabled&&b.TRACE_INIT("computeAllProdsFollows",function(){var R=i.computeAllProdsFollows(t.values(b.gastProductionsCache));b.resyncFollows=R}),b.TRACE_INIT("ComputeLookaheadFunctions",function(){b.preComputeLookaheadFunctions(t.values(b.gastProductionsCache))})),!v.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(b.definitionErrors))throw P=t.map(b.definitionErrors,function(R){return R.message}),new Error(`Parser Definition Errors detected:
 `+P.join(`
-------------------------------
`))})},v.DEFER_DEFINITION_ERRORS_HANDLING=!1,v})();n.Parser=_,h.applyMixins(_,[c.Recoverable,l.LooksAhead,a.TreeBuilder,f.LexerAdapter,d.RecognizerEngine,m.RecognizerApi,p.ErrorHandler,g.ContentAssist,x.GastRecorder,u.PerformanceTracer]);var A=(function(v){e(b,v);function b(P,N){N===void 0&&(N=n.DEFAULT_PARSER_CONFIG);var L=this,R=t.cloneObj(N);return R.outputCst=!0,L=v.call(this,P,R)||this,L}return b})(_);n.CstParser=A;var C=(function(v){e(b,v);function b(P,N){N===void 0&&(N=n.DEFAULT_PARSER_CONFIG);var L=this,R=t.cloneObj(N);return R.outputCst=!1,L=v.call(this,P,R)||this,L}return b})(_);n.EmbeddedActionsParser=C}),p0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=Ah();function t(i,r){var s=r===void 0?{}:r,o=s.resourceBase,c=o===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":o,l=s.css,a=l===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":l,f=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,m=`
<link rel='stylesheet' href='`+a+`'>
`,d=`
<script src='`+c+`vendor/railroad-diagrams.js'><\/script>
<script src='`+c+`src/diagrams_builder.js'><\/script>
<script src='`+c+`src/diagrams_behavior.js'><\/script>
<script src='`+c+`src/main.js'><\/script>
`,p=`
<div id="diagrams" align="center"></div>
`,g=`
<script>
    window.serializedGrammar = `+JSON.stringify(i,null,"  ")+`;
<\/script>
`,x=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return f+m+d+p+g+x}n.createSyntaxDiagramsCode=t}),m0=et(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=Ah();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=un();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=xa();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=wi();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var s=Sa();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return s.defaultParserErrorProvider}});var o=ds();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return o.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return o.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return o.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return o.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return o.NoViableAltException}});var c=Rh();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return c.defaultLexerErrorProvider}});var l=on();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return l.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return l.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return l.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return l.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return l.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return l.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return l.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return l.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return l.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return l.Terminal}});var a=on();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return a.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return a.serializeProduction}});var f=hs();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return f.GAstVisitor}});function m(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=m;var d=p0();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return d.createSyntaxDiagramsCode}});var p=(function(){function g(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return g})();n.Parser=p}),pr=m0();var Ta=class extends sn{constructor(e){super(e)}load(e,t,i,r){let s=this,o=s.path===""?jr.extractUrlBase(e):s.path,c=new Xr(s.manager);c.setPriority(s.priority),c.setCache(s.cache),c.setPath(s.path),c.setRequestHeader(s.requestHeader),c.setWithCredentials(s.withCredentials),c.load(e,function(l){try{t(s.parse(l,o))}catch(a){r?r(a):console.error(a),s.manager.itemError(e)}},i,r)}parse(e,t){let i={};function r(E){let U=s(),k=new il(U.tokens),W=new rl(U.tokenVocabulary),O=o(W.getBaseCstVisitorConstructor()),q=k.lex(E);W.input=q.tokens;let z=W.vrml();if(W.errors.length>0)throw console.error(W.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return O.visit(z)}function s(){let E=pr.createToken,U=E({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),k=E({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:U}),W=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","PerspectiveCamera","OrthographicCamera","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],O=E({name:"Version",pattern:/#VRML.*/,longer_alt:k}),q=E({name:"NodeName",pattern:new RegExp(W.join("|")),longer_alt:k}),z=E({name:"DEF",pattern:/DEF/,longer_alt:k}),j=E({name:"USE",pattern:/USE/,longer_alt:k}),T=E({name:"ROUTE",pattern:/ROUTE/,longer_alt:k}),M=E({name:"TO",pattern:/TO/,longer_alt:k}),F=E({name:"StringLiteral",pattern:/"(?:[^\\"]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),$=E({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),te=E({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),xe=E({name:"TrueLiteral",pattern:/TRUE/}),_e=E({name:"FalseLiteral",pattern:/FALSE/}),ee=E({name:"NullLiteral",pattern:/NULL/}),re=E({name:"LSquare",pattern:/\[/}),Me=E({name:"RSquare",pattern:/]/}),B=E({name:"LCurly",pattern:/{/}),ue=E({name:"RCurly",pattern:/}/}),de=E({name:"Comment",pattern:/#.*/,group:pr.Lexer.SKIPPED}),we=[E({name:"WhiteSpace",pattern:/[ ,\s]/,group:pr.Lexer.SKIPPED}),q,z,j,T,M,xe,_e,ee,O,k,U,F,$,te,re,Me,B,ue,de],Ce={};for(let Ne=0,Pe=we.length;Ne<Pe;Ne++){let ce=we[Ne];Ce[ce.name]=ce}return{tokens:we,tokenVocabulary:Ce}}function o(E){class U extends E{constructor(){super(),this.validateVisitor()}vrml(O){let q={version:this.visit(O.version),nodes:[],routes:[]};for(let z=0,j=O.node.length;z<j;z++){let T=O.node[z];q.nodes.push(this.visit(T))}if(O.route)for(let z=0,j=O.route.length;z<j;z++){let T=O.route[z];q.routes.push(this.visit(T))}return q}version(O){return O.Version[0].image}node(O){let q={name:O.NodeName[0].image,fields:[]};if(O.field)for(let z=0,j=O.field.length;z<j;z++){let T=O.field[z];q.fields.push(this.visit(T))}return O.def&&(q.DEF=this.visit(O.def[0])),q}field(O){let q={name:O.Identifier[0].image,type:null,values:null},z;return O.singleFieldValue&&(z=this.visit(O.singleFieldValue[0])),O.multiFieldValue&&(z=this.visit(O.multiFieldValue[0])),q.type=z.type,q.values=z.values,q}def(O){return(O.Identifier||O.NodeName)[0].image}use(O){return{USE:(O.Identifier||O.NodeName)[0].image}}singleFieldValue(O){return k(this,O)}multiFieldValue(O){return k(this,O)}route(O){return{FROM:O.RouteIdentifier[0].image,TO:O.RouteIdentifier[1].image}}}function k(W,O){let q={type:null,values:[]};if(O.node){q.type="node";for(let z=0,j=O.node.length;z<j;z++){let T=O.node[z];q.values.push(W.visit(T))}}if(O.use){q.type="use";for(let z=0,j=O.use.length;z<j;z++){let T=O.use[z];q.values.push(W.visit(T))}}if(O.StringLiteral){q.type="string";for(let z=0,j=O.StringLiteral.length;z<j;z++){let T=O.StringLiteral[z];q.values.push(T.image.replace(/'|"/g,""))}}if(O.NumberLiteral){q.type="number";for(let z=0,j=O.NumberLiteral.length;z<j;z++){let T=O.NumberLiteral[z];q.values.push(parseFloat(T.image))}}if(O.HexLiteral){q.type="hex";for(let z=0,j=O.HexLiteral.length;z<j;z++){let T=O.HexLiteral[z];q.values.push(T.image)}}if(O.TrueLiteral){q.type="boolean";for(let z=0,j=O.TrueLiteral.length;z<j;z++)O.TrueLiteral[z].image==="TRUE"&&q.values.push(!0)}if(O.FalseLiteral){q.type="boolean";for(let z=0,j=O.FalseLiteral.length;z<j;z++)O.FalseLiteral[z].image==="FALSE"&&q.values.push(!1)}return O.NullLiteral&&(q.type="null",O.NullLiteral.forEach(function(){q.values.push(null)})),q}return new U}function c(E){let U=E.nodes,k=new _i;for(let W=0,O=U.length;W<O;W++){let q=U[W];l(q)}for(let W=0,O=U.length;W<O;W++){let q=U[W],z=a(q);z instanceof Tt&&k.add(z),q.name==="WorldInfo"&&(k.userData.worldInfo=z)}return k}function l(E){E.DEF&&(i[E.DEF]=E);let U=E.fields;for(let k=0,W=U.length;k<W;k++){let O=U[k];if(O.type==="node"){let q=O.values;for(let z=0,j=q.length;z<j;z++)l(q[z])}}}function a(E){return E.USE?V(E.USE):(E.build!==void 0||(E.build=f(E)),E.build)}function f(E){let U=E.name,k;switch(U){case"Anchor":case"Group":case"Transform":case"Collision":k=m(E);break;case"Background":k=d(E);break;case"Shape":k=p(E);break;case"Appearance":k=g(E);break;case"Material":k=x(E);break;case"ImageTexture":k=S(E);break;case"PixelTexture":k=y(E);break;case"TextureTransform":k=_(E);break;case"IndexedFaceSet":k=b(E);break;case"IndexedLineSet":k=P(E);break;case"PointSet":k=N(E);break;case"Box":k=L(E);break;case"Cone":k=R(E);break;case"Cylinder":k=D(E);break;case"Sphere":k=w(E);break;case"ElevationGrid":k=G(E);break;case"Extrusion":k=Y(E);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":k=A(E);break;case"WorldInfo":k=C(E);break;case"OrthographicCamera":case"PerspectiveCamera":k=v(E,U);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",U);break}return k!==void 0&&E.DEF!==void 0&&k.hasOwnProperty("name")===!0&&(k.name=E.DEF),k}function m(E){let U=new Mn,k=E.fields;for(let W=0,O=k.length;W<O;W++){let q=k[W],z=q.name,j=q.values;switch(z){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":ne(j,U);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":let T=new J(j[0],j[1],j[2]).normalize(),M=j[3];U.quaternion.setFromAxisAngle(T,M);break;case"scale":U.scale.set(j[0],j[1],j[2]);break;case"scaleOrientation":break;case"translation":U.position.set(j[0],j[1],j[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return U}function d(E){let U=new Mn,k,W,O,q,z=E.fields;for(let T=0,M=z.length;T<M;T++){let F=z[T],$=F.name,te=F.values;switch($){case"groundAngle":k=te;break;case"groundColor":W=te;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":O=te;break;case"skyColor":q=te;break;default:console.warn("THREE.VRMLLoader: Unknown field:",$);break}}let j=1e4;if(q){let T=new xi(j,32,16),M=new Gn({fog:!1,side:Dt,depthWrite:!1,depthTest:!1});q.length>3?(Ie(T,j,O,ae(q),!0),M.vertexColors=!0):M.color.setRGB(q[0],q[1],q[2],vt);let F=new jt(T,M);U.add(F)}if(W&&W.length>0){let T=new xi(j,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),M=new Gn({fog:!1,side:Dt,vertexColors:!0,depthWrite:!1,depthTest:!1});Ie(T,j,k,ae(W),!1);let F=new jt(T,M);U.add(F)}return U.renderOrder=-1/0,U}function p(E){let U=E.fields,k=new Gn({name:sn.DEFAULT_MATERIAL_NAME,color:0}),W;for(let q=0,z=U.length;q<z;q++){let j=U[q],T=j.name,M=j.values;switch(T){case"appearance":M[0]!==null&&(k=a(M[0]));break;case"geometry":M[0]!==null&&(W=a(M[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",T);break}}let O;if(W&&W.attributes.position){let q=W._type;if(q==="points"){let z=new er({name:sn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:k.opacity,transparent:k.transparent});W.attributes.color!==void 0?z.vertexColors=!0:k.isMeshPhongMaterial&&z.color.copy(k.emissive),O=new Nr(W,z)}else if(q==="line"){let z=new Qi({name:sn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:k.opacity,transparent:k.transparent});W.attributes.color!==void 0?z.vertexColors=!0:k.isMeshPhongMaterial&&z.color.copy(k.emissive),O=new Lr(W,z)}else W._solid!==void 0&&(k.side=W._solid?An:Kt),W.attributes.color!==void 0&&(k.vertexColors=!0),O=new jt(W,k)}else O=new Tt,O.visible=!1;return O}function g(E){let U=new Hr,k,W=E.fields;for(let O=0,q=W.length;O<q;O++){let z=W[O],j=z.name,T=z.values;switch(j){case"material":if(T[0]!==null){let F=a(T[0]);F.diffuseColor&&U.color.copy(F.diffuseColor),F.emissiveColor&&U.emissive.copy(F.emissiveColor),F.shininess&&(U.shininess=F.shininess),F.specularColor&&U.specular.copy(F.specularColor),F.transparency&&(U.opacity=1-F.transparency),F.transparency>0&&(U.transparent=!0)}else U=new Gn({name:sn.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":let M=T[0];M!==null&&(M.name==="ImageTexture"||M.name==="PixelTexture")&&(U.map=a(M));break;case"textureTransform":T[0]!==null&&(k=a(T[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",j);break}}if(U.map){if(U.map.__type){switch(U.map.__type){case vn.INTENSITY_ALPHA:U.opacity=1;break;case vn.RGB:U.color.set(16777215);break;case vn.RGBA:U.color.set(16777215),U.opacity=1;break;default:}delete U.map.__type}k&&(U.map.center.copy(k.center),U.map.rotation=k.rotation,U.map.repeat.copy(k.scale),U.map.offset.copy(k.translation))}return U}function x(E){let U={},k=E.fields;for(let W=0,O=k.length;W<O;W++){let q=k[W],z=q.name,j=q.values;switch(z){case"ambientIntensity":break;case"diffuseColor":U.diffuseColor=new qe().setRGB(j[0],j[1],j[2],vt);break;case"emissiveColor":U.emissiveColor=new qe().setRGB(j[0],j[1],j[2],vt);break;case"shininess":U.shininess=j[0];break;case"specularColor":U.specularColor=new qe().setRGB(j[0],j[1],j[2],vt);break;case"transparency":U.transparency=j[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return U}function u(E,U,k){let W;switch(U){case vn.INTENSITY:W=parseInt(E),k.r=W,k.g=W,k.b=W,k.a=1;break;case vn.INTENSITY_ALPHA:W=parseInt("0x"+E.substring(2,4)),k.r=W,k.g=W,k.b=W,k.a=parseInt("0x"+E.substring(4,6));break;case vn.RGB:k.r=parseInt("0x"+E.substring(2,4)),k.g=parseInt("0x"+E.substring(4,6)),k.b=parseInt("0x"+E.substring(6,8)),k.a=1;break;case vn.RGBA:k.r=parseInt("0x"+E.substring(2,4)),k.g=parseInt("0x"+E.substring(4,6)),k.b=parseInt("0x"+E.substring(6,8)),k.a=parseInt("0x"+E.substring(8,10));break;default:}}function h(E){let U;switch(E){case 1:U=vn.INTENSITY;break;case 2:U=vn.INTENSITY_ALPHA;break;case 3:U=vn.RGB;break;case 4:U=vn.RGBA;break;default:}return U}function y(E){let U,k=Bn,W=Bn,O=E.fields;for(let q=0,z=O.length;q<z;q++){let j=O[q],T=j.name,M=j.values;switch(T){case"image":let F=M[0],$=M[1],te=M[2],xe=h(te),_e=new Uint8Array(4*F*$),ee={r:0,g:0,b:0,a:0};for(let re=3,Me=0,B=M.length;re<B;re++,Me++){u(M[re],xe,ee);let ue=Me*4;_e[ue+0]=ee.r,_e[ue+1]=ee.g,_e[ue+2]=ee.b,_e[ue+3]=ee.a}U=new $i(_e,F,$),U.colorSpace=vt,U.needsUpdate=!0,U.__type=xe;break;case"repeatS":M[0]===!1&&(k=Wt);break;case"repeatT":M[0]===!1&&(W=Wt);break;default:console.warn("THREE.VRMLLoader: Unknown field:",T);break}}return U&&(U.wrapS=k,U.wrapT=W),U}function S(E){let U,k=Bn,W=Bn,O=E.fields;for(let q=0,z=O.length;q<z;q++){let j=O[q],T=j.name,M=j.values;switch(T){case"url":let F=M[0];F&&(U=Re.load(F));break;case"repeatS":M[0]===!1&&(k=Wt);break;case"repeatT":M[0]===!1&&(W=Wt);break;default:console.warn("THREE.VRMLLoader: Unknown field:",T);break}}return U&&(U.wrapS=k,U.wrapT=W,U.colorSpace=vt),U}function _(E){let U={center:new He,rotation:new He,scale:new He,translation:new He},k=E.fields;for(let W=0,O=k.length;W<O;W++){let q=k[W],z=q.name,j=q.values;switch(z){case"center":U.center.set(j[0],j[1]);break;case"rotation":U.rotation=j[0];break;case"scale":U.scale.set(j[0],j[1]);break;case"translation":U.translation.set(j[0],j[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return U}function A(E){return E.fields[0].values}function C(E){let U={},k=E.fields;for(let W=0,O=k.length;W<O;W++){let q=k[W],z=q.name,j=q.values;switch(z){case"title":U.title=j[0];break;case"info":U.info=j;break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return U}function v(E,U){let k=U==="PerspectiveCamera"?new Ft:new Si,W=typeof window<"u"?window.innerWidth:1,O=typeof window<"u"?window.innerHeight:1,q=W/O,z=E.fields;for(let j=0,T=z.length;j<T;j++){let M=z[j],F=M.name,$=M.values;switch(F){case"position":k.position.set($[0],$[1],$[0]);break;case"orientation":let te=new J($[0],$[1],$[2]).normalize(),xe=$[3];k.quaternion.setFromAxisAngle(te,xe);break;case"focalDistance":k.userData.focalDistance=$[0];break;case"heightAngle":k.fov=ss.radToDeg($[0]),k.aspect=q,k.updateProjectionMatrix();break;case"height":let _e=$[0]/2,ee=_e*q;k.left=-ee,k.right=ee,k.top=_e,k.bottom=-_e,k.updateProjectionMatrix();break;default:console.warn("THREE.VRMLLoader: Unknown field:",F);break}}return k}function b(E){let U,k,W,O,q=!0,z=!0,j=0,T,M,F,$,te=!0,xe=!0,_e=E.fields;for(let Ee=0,we=_e.length;Ee<we;Ee++){let Ce=_e[Ee],Ne=Ce.name,Pe=Ce.values;switch(Ne){case"color":let ce=Pe[0];ce!==null&&(U=a(ce));break;case"coord":let ye=Pe[0];ye!==null&&(k=a(ye));break;case"normal":let be=Pe[0];be!==null&&(W=a(be));break;case"texCoord":let ge=Pe[0];ge!==null&&(O=a(ge));break;case"ccw":q=Pe[0];break;case"colorIndex":T=Pe;break;case"colorPerVertex":te=Pe[0];break;case"convex":break;case"coordIndex":M=Pe;break;case"creaseAngle":j=Pe[0];break;case"normalIndex":F=Pe;break;case"normalPerVertex":xe=Pe[0];break;case"solid":z=Pe[0];break;case"texCoordIndex":$=Pe;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ne);break}}if(M===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new wt;let ee=X(M,q),re,Me,B;if(U){if(te===!0)if(T&&T.length>0){let Ee=X(T,q);re=Oe(ee,Ee,U,3)}else re=ze(ee,new tt(U,3));else if(T&&T.length>0){let Ee=oe(U,T),we=ie(Ee,M);re=Le(ee,we)}else{let Ee=ie(U,M);re=Le(ee,Ee)}ve(re)}if(W)if(xe===!0)if(F&&F.length>0){let Ee=X(F,q);Me=Oe(ee,Ee,W,3)}else Me=ze(ee,new tt(W,3));else if(F&&F.length>0){let Ee=oe(W,F),we=ie(Ee,M);Me=Le(ee,we)}else{let Ee=ie(W,M);Me=Le(ee,Ee)}else Me=st(ee,k,j);if(O)if($&&$.length>0){let Ee=X($,q);B=Oe(ee,Ee,O,2)}else B=ze(ee,new tt(O,2));let ue=new wt,de=ze(ee,new tt(k,3));return ue.setAttribute("position",de),ue.setAttribute("normal",Me),re&&ue.setAttribute("color",re),B&&ue.setAttribute("uv",B),ue._solid=z,ue._type="mesh",ue}function P(E){let U,k,W,O,q=!0,z=E.fields;for(let $=0,te=z.length;$<te;$++){let xe=z[$],_e=xe.name,ee=xe.values;switch(_e){case"color":let re=ee[0];re!==null&&(U=a(re));break;case"coord":let Me=ee[0];Me!==null&&(k=a(Me));break;case"colorIndex":W=ee;break;case"colorPerVertex":q=ee[0];break;case"coordIndex":O=ee;break;default:console.warn("THREE.VRMLLoader: Unknown field:",_e);break}}let j,T=Se(O);if(U){if(q===!0)if(W.length>0){let $=Se(W);j=Oe(T,$,U,3)}else j=ze(T,new tt(U,3));else if(W.length>0){let $=oe(U,W),te=Te($,O);j=Ve(T,te)}else{let $=Te(U,O);j=Ve(T,$)}ve(j)}let M=new wt,F=ze(T,new tt(k,3));return M.setAttribute("position",F),j&&M.setAttribute("color",j),M._type="line",M}function N(E){let U,k,W=E.fields;for(let q=0,z=W.length;q<z;q++){let j=W[q],T=j.name,M=j.values;switch(T){case"color":let F=M[0];F!==null&&(U=a(F));break;case"coord":let $=M[0];$!==null&&(k=a($));break;default:console.warn("THREE.VRMLLoader: Unknown field:",T);break}}let O=new wt;if(O.setAttribute("position",new tt(k,3)),U){let q=new tt(U,3);ve(q),O.setAttribute("color",q)}return O._type="points",O}function L(E){let U=new J(2,2,2),k=E.fields;for(let O=0,q=k.length;O<q;O++){let z=k[O],j=z.name,T=z.values;j==="size"?(U.x=T[0],U.y=T[1],U.z=T[2]):console.warn("THREE.VRMLLoader: Unknown field:",j)}return new ii(U.x,U.y,U.z)}function R(E){let U=1,k=2,W=!1,O=E.fields;for(let z=0,j=O.length;z<j;z++){let T=O[z],M=T.name,F=T.values;switch(M){case"bottom":W=!F[0];break;case"bottomRadius":U=F[0];break;case"height":k=F[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",M);break}}return new Fr(U,k,16,1,W)}function D(E){let U=1,k=2,W=E.fields;for(let q=0,z=W.length;q<z;q++){let j=W[q],T=j.name,M=j.values;switch(T){case"bottom":break;case"radius":U=M[0];break;case"height":k=M[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",T);break}}return new tr(U,U,k,16,1)}function w(E){let U=1,k=E.fields;for(let O=0,q=k.length;O<q;O++){let z=k[O],j=z.name,T=z.values;j==="radius"?U=T[0]:console.warn("THREE.VRMLLoader: Unknown field:",j)}return new xi(U,16,16)}function G(E){let U,k,W,O,q=!0,z=!0,j=!0,T=!0,M=0,F=2,$=2,te=1,xe=1,_e=E.fields;for(let Pe=0,ce=_e.length;Pe<ce;Pe++){let ye=_e[Pe],be=ye.name,ge=ye.values;switch(be){case"color":let Ke=ge[0];Ke!==null&&(U=a(Ke));break;case"normal":let mt=ge[0];mt!==null&&(k=a(mt));break;case"texCoord":let Pt=ge[0];Pt!==null&&(W=a(Pt));break;case"height":O=ge;break;case"ccw":T=ge[0];break;case"colorPerVertex":q=ge[0];break;case"creaseAngle":M=ge[0];break;case"normalPerVertex":z=ge[0];break;case"solid":j=ge[0];break;case"xDimension":F=ge[0];break;case"xSpacing":te=ge[0];break;case"zDimension":$=ge[0];break;case"zSpacing":xe=ge[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",be);break}}let ee=[],re=[],Me=[],B=[];for(let Pe=0;Pe<$;Pe++)for(let ce=0;ce<F;ce++){let ye=Pe*F+ce,be=te*Pe,ge=O[ye],Ke=xe*ce;if(ee.push(be,ge,Ke),U&&q===!0){let mt=U[ye*3+0],Pt=U[ye*3+1],Ri=U[ye*3+2];Me.push(mt,Pt,Ri)}if(k&&z===!0){let mt=k[ye*3+0],Pt=k[ye*3+1],Ri=k[ye*3+2];re.push(mt,Pt,Ri)}if(W){let mt=W[ye*2+0],Pt=W[ye*2+1];B.push(mt,Pt)}else B.push(Pe/(F-1),ce/($-1))}let ue=[];for(let Pe=0;Pe<F-1;Pe++)for(let ce=0;ce<$-1;ce++){let ye=Pe+ce*F,be=Pe+(ce+1)*F,ge=Pe+1+(ce+1)*F,Ke=Pe+1+ce*F;T===!0?(ue.push(ye,ge,be),ue.push(ge,ye,Ke)):(ue.push(ye,be,ge),ue.push(ge,Ke,ye))}let de=ze(ue,new tt(ee,3)),Ee=ze(ue,new tt(B,2)),we,Ce;if(U){if(q===!1){for(let Pe=0;Pe<F-1;Pe++)for(let ce=0;ce<$-1;ce++){let ye=Pe+ce*(F-1),be=U[ye*3+0],ge=U[ye*3+1],Ke=U[ye*3+2];Me.push(be,ge,Ke),Me.push(be,ge,Ke),Me.push(be,ge,Ke),Me.push(be,ge,Ke),Me.push(be,ge,Ke),Me.push(be,ge,Ke)}we=new tt(Me,3)}else we=ze(ue,new tt(Me,3));ve(we)}if(k)if(z===!1){for(let Pe=0;Pe<F-1;Pe++)for(let ce=0;ce<$-1;ce++){let ye=Pe+ce*(F-1),be=k[ye*3+0],ge=k[ye*3+1],Ke=k[ye*3+2];re.push(be,ge,Ke),re.push(be,ge,Ke),re.push(be,ge,Ke),re.push(be,ge,Ke),re.push(be,ge,Ke),re.push(be,ge,Ke)}Ce=new tt(re,3)}else Ce=ze(ue,new tt(re,3));else Ce=st(ue,ee,M);let Ne=new wt;return Ne.setAttribute("position",de),Ne.setAttribute("normal",Ce),Ne.setAttribute("uv",Ee),we&&Ne.setAttribute("color",we),Ne._solid=j,Ne._type="mesh",Ne}function Y(E){let U=[1,1,1,-1,-1,-1,-1,1,1,1],k=[0,0,0,0,1,0],W,O,q=!0,z=!0,j=0,T=!0,M=!0,F=E.fields;for(let Ne=0,Pe=F.length;Ne<Pe;Ne++){let ce=F[Ne],ye=ce.name,be=ce.values;switch(ye){case"beginCap":q=be[0];break;case"ccw":z=be[0];break;case"convex":break;case"creaseAngle":j=be[0];break;case"crossSection":U=be;break;case"endCap":T=be[0];break;case"orientation":O=be;break;case"scale":W=be;break;case"solid":M=be[0];break;case"spine":k=be;break;default:console.warn("THREE.VRMLLoader: Unknown field:",ye);break}}let $=U[0]===U[U.length-2]&&U[1]===U[U.length-1],te=[],xe=new J,_e=new J,ee=new J,re=new J,Me=new Yt;for(let Ne=0,Pe=0,ce=0,ye=k.length;Ne<ye;Ne+=3,Pe+=2,ce+=4){xe.fromArray(k,Ne),_e.x=W?W[Pe+0]:1,_e.y=1,_e.z=W?W[Pe+1]:1,ee.x=O?O[ce+0]:0,ee.y=O?O[ce+1]:0,ee.z=O?O[ce+2]:1;let be=O?O[ce+3]:0;for(let ge=0,Ke=U.length;ge<Ke;ge+=2)re.x=U[ge+0],re.y=0,re.z=U[ge+1],re.multiply(_e),Me.setFromAxisAngle(ee,be),re.applyQuaternion(Me),re.add(xe),te.push(re.x,re.y,re.z)}let B=[],ue=k.length/3,de=U.length/2;for(let Ne=0;Ne<ue-1;Ne++)for(let Pe=0;Pe<de-1;Pe++){let ce=Pe+Ne*de,ye=Pe+1+Ne*de,be=Pe+(Ne+1)*de,ge=Pe+1+(Ne+1)*de;Pe===de-2&&$===!0&&(ye=Ne*de,ge=(Ne+1)*de),z===!0?(B.push(ce,ye,be),B.push(be,ye,ge)):(B.push(ce,be,ye),B.push(be,ge,ye))}if(q===!0||T===!0){let Ne=[];for(let ye=0,be=U.length;ye<be;ye+=2)Ne.push(new He(U[ye],U[ye+1]));let Pe=Vr.triangulateShape(Ne,[]),ce=[];for(let ye=0,be=Pe.length;ye<be;ye++){let ge=Pe[ye];ce.push(ge[0],ge[1],ge[2])}if(q===!0)for(let ye=0,be=ce.length;ye<be;ye+=3)z===!0?B.push(ce[ye+0],ce[ye+1],ce[ye+2]):B.push(ce[ye+0],ce[ye+2],ce[ye+1]);if(T===!0){let ye=de*(ue-1);for(let be=0,ge=ce.length;be<ge;be+=3)z===!0?B.push(ye+ce[be+0],ye+ce[be+2],ye+ce[be+1]):B.push(ye+ce[be+0],ye+ce[be+1],ye+ce[be+2])}}let Ee=ze(B,new tt(te,3)),we=st(B,te,j),Ce=new wt;return Ce.setAttribute("position",Ee),Ce.setAttribute("normal",we),Ce._solid=M,Ce._type="mesh",Ce}function V(E){let U=i[E],k=a(U);return k.isObject3D||k.isMaterial?k.clone():k}function ne(E,U){for(let k=0,W=E.length;k<W;k++){let O=a(E[k]);O instanceof Tt&&U.add(O)}}function X(E,U){let k=[],W=0;for(let O=0,q=E.length;O<q;O++){let z=E[W],j=E[O+(U?1:2)],T=E[O+(U?2:1)];k.push(z,j,T),(E[O+3]===-1||O+3>=q)&&(O+=3,W=O+1)}return k}function ie(E,U){let k=[],W=0;for(let O=0,q=U.length;O<q;O++){let z=W*3,j=E[z],T=E[z+1],M=E[z+2];k.push(j,T,M),(U[O+3]===-1||O+3>=q)&&(O+=3,W++)}return k}function oe(E,U){let k=[];for(let W=0,O=U.length;W<O;W++){let z=U[W]*3,j=E[z],T=E[z+1],M=E[z+2];k.push(j,T,M)}return k}function Se(E){let U=[];for(let k=0,W=E.length;k<W;k++){let O=E[k],q=E[k+1];U.push(O,q),(E[k+2]===-1||k+2>=W)&&(k+=2)}return U}function Te(E,U){let k=[],W=0;for(let O=0,q=U.length;O<q;O++){let z=W*3,j=E[z],T=E[z+1],M=E[z+2];k.push(j,T,M),(U[O+2]===-1||O+2>=q)&&(O+=2,W++)}return k}let Q=new J,H=new J,K=new J,le=new He,se=new He,me=new He;function Oe(E,U,k,W){let O=[];for(let q=0,z=E.length;q<z;q+=3){let j=U[q],T=U[q+1],M=U[q+2];W===2?(le.fromArray(k,j*W),se.fromArray(k,T*W),me.fromArray(k,M*W),O.push(le.x,le.y),O.push(se.x,se.y),O.push(me.x,me.y)):(Q.fromArray(k,j*W),H.fromArray(k,T*W),K.fromArray(k,M*W),O.push(Q.x,Q.y,Q.z),O.push(H.x,H.y,H.z),O.push(K.x,K.y,K.z))}return new tt(O,W)}function Le(E,U){let k=[];for(let W=0,O=0,q=E.length;W<q;W+=3,O++)Q.fromArray(U,O*3),k.push(Q.x,Q.y,Q.z),k.push(Q.x,Q.y,Q.z),k.push(Q.x,Q.y,Q.z);return new tt(k,3)}function Ve(E,U){let k=[];for(let W=0,O=0,q=E.length;W<q;W+=2,O++)Q.fromArray(U,O*3),k.push(Q.x,Q.y,Q.z),k.push(Q.x,Q.y,Q.z);return new tt(k,3)}function ze(E,U){let k=U.array,W=U.itemSize,O=new k.constructor(E.length*W),q=0,z=0;for(let j=0,T=E.length;j<T;j++){q=E[j]*W;for(let M=0;M<W;M++)O[z++]=k[q++]}return new tt(O,W)}let Ge=new J,ct=new J;function st(E,U,k){let W=[],O={};for(let z=0,j=E.length;z<j;z+=3){let T=E[z],M=E[z+1],F=E[z+2],$=new sl(T,M,F);Q.fromArray(U,T*3),H.fromArray(U,M*3),K.fromArray(U,F*3),ct.subVectors(K,H),Ge.subVectors(Q,H),ct.cross(Ge),ct.normalize(),$.normal.copy(ct),O[T]===void 0&&(O[T]=[]),O[M]===void 0&&(O[M]=[]),O[F]===void 0&&(O[F]=[]),O[T].push($.normal),O[M].push($.normal),O[F].push($.normal),W.push($)}let q=[];for(let z=0,j=W.length;z<j;z++){let T=W[z],M=_t(O[T.a],T.normal,k),F=_t(O[T.b],T.normal,k),$=_t(O[T.c],T.normal,k);Q.fromArray(U,T.a*3),H.fromArray(U,T.b*3),K.fromArray(U,T.c*3),q.push(M.x,M.y,M.z),q.push(F.x,F.y,F.z),q.push($.x,$.y,$.z)}return new tt(q,3)}function _t(E,U,k){let W=new J;if(k===0)W.copy(U);else for(let O=0,q=E.length;O<q;O++)E[O].angleTo(U)<k&&W.add(E[O]);return W.normalize()}function ae(E){let U=[];for(let k=0,W=E.length;k<W;k+=3)U.push(new qe(E[k],E[k+1],E[k+2]));return U}function ve(E){let U=new qe;for(let k=0;k<E.count;k++)U.fromBufferAttribute(E,k),it.colorSpaceToWorking(U,vt),E.setXYZ(k,U.r,U.g,U.b)}function Ie(E,U,k,W,O){let q=[],z=O===!0?0:Math.PI;for(let te=0,xe=W.length;te<xe;te++){let _e=te===0?0:k[te-1];_e=O===!0?_e:z-_e;let ee=new J;ee.setFromSphericalCoords(U,_e,0),q.push(ee)}let j=E.index,T=E.attributes.position,M=new ln(new Float32Array(E.attributes.position.count*3),3),F=new J,$=new qe;for(let te=0;te<j.count;te++){let xe=j.getX(te);F.fromBufferAttribute(T,xe);let _e,ee,re=1;for(let ue=1;ue<q.length;ue++){_e=ue-1,ee=ue;let de=q[_e],Ee=q[ee];if(O===!0){if(F.y<=de.y&&F.y>Ee.y){re=Math.abs(de.y-F.y)/Math.abs(de.y-Ee.y);break}}else if(F.y>=de.y&&F.y<Ee.y){re=Math.abs(de.y-F.y)/Math.abs(de.y-Ee.y);break}}let Me=W[_e],B=W[ee];$.copy(Me).lerp(B,re),it.colorSpaceToWorking($,vt),M.setXYZ(xe,$.r,$.g,$.b)}E.setAttribute("color",M)}let Re=new Yr(this.manager);if(Re.setPriority(this.priority),Re.setCache(this.cache),Re.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");let Ae=r(e);return c(Ae)}},il=class{constructor(e){this.lexer=new pr.Lexer(e)}lex(e){let t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}},g0=pr.CstParser,rl=class extends g0{constructor(e){super(e);let t=this,i=e.Version,r=e.LCurly,s=e.RCurly,o=e.LSquare,c=e.RSquare,l=e.Identifier,a=e.RouteIdentifier,f=e.StringLiteral,m=e.HexLiteral,d=e.NumberLiteral,p=e.TrueLiteral,g=e.FalseLiteral,x=e.NullLiteral,u=e.DEF,h=e.USE,y=e.ROUTE,S=e.TO,_=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(_),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(s)}),t.RULE("field",function(){t.CONSUME(l),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(u),t.OR([{ALT:function(){t.CONSUME(l)}},{ALT:function(){t.CONSUME(_)}}])}),t.RULE("use",function(){t.CONSUME(h),t.OR([{ALT:function(){t.CONSUME(l)}},{ALT:function(){t.CONSUME(_)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(f)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(g)}},{ALT:function(){t.CONSUME(x)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(o),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(f)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(x)}}])}),t.CONSUME(c)}),t.RULE("route",function(){t.CONSUME(y),t.CONSUME(a),t.CONSUME(S),t.CONSUME2(a)}),this.performSelfAnalysis()}},sl=class{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new J}},vn={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4};var ol=class{constructor(){this.id=0,this.object=null,this.z=0,this.renderOrder=0}},fs=class{constructor(){this.id=0,this.v1=new qn,this.v2=new qn,this.v3=new qn,this.normalModel=new J,this.vertexNormalsModel=[new J,new J,new J],this.vertexNormalsLength=0,this.color=new qe,this.material=null,this.uvs=[new He,new He,new He],this.z=0,this.renderOrder=0}},qn=class{constructor(){this.position=new J,this.positionWorld=new J,this.positionScreen=new ht,this.visible=!0}copy(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)}},ps=class{constructor(){this.id=0,this.v1=new qn,this.v2=new qn,this.vertexColors=[new qe,new qe],this.material=null,this.z=0,this.renderOrder=0}},ms=class{constructor(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new He,this.material=null,this.renderOrder=0}},ba=class{constructor(){let e,t,i=0,r,s,o=0,c,l,a=0,f,m,d=0,p,g,x=0,u,h=[],y=[],S={objects:[],lights:[],elements:[]},_=new J,A=new ht,C=new nn(new J(-1,-1,-1),new J(1,1,1)),v=new nn,b=new Array(3),P=new ut,N=new ut,L=new ut,R=new Tn,D=[],w=[],G=[],Y=[],V=[],ne=[],X=new ht,ie=new ht,oe=new ht,Se=[],Te=[null,null,null],Q=[{sign:1},{sign:-1}];function H(){let ae=[],ve=[],Ie=[],Re=null,Ae=new Je;function De(M){Re=M,Ae.getNormalMatrix(Re.matrixWorld),ae.length=0,ve.length=0,Ie.length=0}function E(M){let F=M.position,$=M.positionWorld,te=M.positionScreen;$.copy(F).applyMatrix4(u),te.copy($).applyMatrix4(N);let xe=1/te.w;te.x*=xe,te.y*=xe,te.z*=xe,M.visible=te.x>=-1&&te.x<=1&&te.y>=-1&&te.y<=1&&te.z>=-1&&te.z<=1}function U(M,F,$){r=Le(),r.position.set(M,F,$),E(r)}function k(M,F,$){ae.push(M,F,$)}function W(M,F,$){ve.push(M,F,$)}function O(M,F){Ie.push(M,F)}function q(M,F,$){return M.visible===!0||F.visible===!0||$.visible===!0?!0:(b[0]=M.positionScreen,b[1]=F.positionScreen,b[2]=$.positionScreen,C.intersectsBox(v.setFromPoints(b)))}function z(M,F,$){return($.positionScreen.x-M.positionScreen.x)*(F.positionScreen.y-M.positionScreen.y)-($.positionScreen.y-M.positionScreen.y)*(F.positionScreen.x-M.positionScreen.x)<0}function j(M,F){let $=w[M],te=w[F];$.positionScreen.copy($.position).applyMatrix4(L),te.positionScreen.copy(te.position).applyMatrix4(L),_t($.positionScreen,te.positionScreen)===!0&&($.positionScreen.multiplyScalar(1/$.positionScreen.w),te.positionScreen.multiplyScalar(1/te.positionScreen.w),f=ze(),f.id=Re.id,f.v1.copy($),f.v2.copy(te),f.z=Math.max($.positionScreen.z,te.positionScreen.z),f.renderOrder=Re.renderOrder,f.material=Re.material,Re.material.vertexColors&&(f.vertexColors[0].fromArray(ve,M*3),f.vertexColors[1].fromArray(ve,F*3)),S.elements.push(f))}function T(M,F,$,te){let xe=w[M],_e=w[F],ee=w[$],re=xe.positionScreen.w,Me=_e.positionScreen.w,B=ee.positionScreen.w,ue=re*(xe.positionScreen.z+1),de=Me*(_e.positionScreen.z+1),Ee=B*(ee.positionScreen.z+1),we=re*(1-xe.positionScreen.z),Ce=Me*(1-_e.positionScreen.z),Ne=B*(1-ee.positionScreen.z);if(ue<0&&de<0&&Ee<0||we<0&&Ce<0&&Ne<0)return;if(ue>=0&&de>=0&&Ee>=0&&we>=0&&Ce>=0&&Ne>=0){if(q(xe,_e,ee)===!1)return;if(te.side===Kt||z(xe,_e,ee)===!0){c=Ve(),c.id=Re.id,c.v1.copy(xe),c.v2.copy(_e),c.v3.copy(ee),c.z=(xe.positionScreen.z+_e.positionScreen.z+ee.positionScreen.z)/3,c.renderOrder=Re.renderOrder,_.subVectors(ee.position,_e.position),A.subVectors(xe.position,_e.position),_.cross(A),c.normalModel.copy(_),c.normalModel.applyMatrix3(Ae).normalize();for(let ce=0;ce<3;ce++){let ye=c.vertexNormalsModel[ce];ye.fromArray(ae,arguments[ce]*3),ye.applyMatrix3(Ae).normalize(),c.uvs[ce].fromArray(Ie,arguments[ce]*2)}c.vertexNormalsLength=3,c.material=te,te.vertexColors&&c.color.fromArray(ve,M*3),S.elements.push(c)}return}X.set(xe.positionScreen.x*re,xe.positionScreen.y*re,xe.positionScreen.z*re,re),ie.set(_e.positionScreen.x*Me,_e.positionScreen.y*Me,_e.positionScreen.z*Me,Me),oe.set(ee.positionScreen.x*B,ee.positionScreen.y*B,ee.positionScreen.z*B,B),Te[0]=X,Te[1]=ie,Te[2]=oe;let Pe=st(Te);if(!(Pe<3)){for(let ce=0;ce<Pe;ce++){let ye=h[ce],be=Se[ce];be||(be=new qn,Se[ce]=be);let ge=1/ye.w;be.positionScreen.set(ye.x*ge,ye.y*ge,ye.z*ge,1),be.positionWorld.copy(xe.positionWorld),be.visible=!0}for(let ce=1;ce<Pe-1;ce++){let ye=Se[0],be=Se[ce],ge=Se[ce+1];if(te.side===Kt||z(ye,be,ge)===!0){c=Ve(),c.id=Re.id,c.v1.copy(ye),c.v2.copy(be),c.v3.copy(ge),c.z=(ye.positionScreen.z+be.positionScreen.z+ge.positionScreen.z)/3,c.renderOrder=Re.renderOrder,_.subVectors(ee.position,_e.position),A.subVectors(xe.position,_e.position),_.cross(A),c.normalModel.copy(_),c.normalModel.applyMatrix3(Ae).normalize();for(let Ke=0;Ke<3;Ke++){let mt=c.vertexNormalsModel[Ke];mt.fromArray(ae,arguments[Ke]*3),mt.applyMatrix3(Ae).normalize(),c.uvs[Ke].fromArray(Ie,arguments[Ke]*2)}c.vertexNormalsLength=3,c.material=te,te.vertexColors&&c.color.fromArray(ve,M*3),S.elements.push(c)}}}}return{setObject:De,projectVertex:E,checkTriangleVisibility:q,checkBackfaceCulling:z,pushVertex:U,pushNormal:k,pushColor:W,pushUv:O,pushLine:j,pushTriangle:T}}let K=new H;function le(ae){if(ae.visible===!1)return;if(ae.isLight)S.lights.push(ae);else if(ae.isMesh||ae.isLine||ae.isPoints){if(ae.material.visible===!1||ae.frustumCulled===!0&&R.intersectsObject(ae)===!1)return;se(ae)}else if(ae.isSprite){if(ae.material.visible===!1||ae.frustumCulled===!0&&R.intersectsSprite(ae)===!1)return;se(ae)}let ve=ae.children;for(let Ie=0,Re=ve.length;Ie<Re;Ie++)le(ve[Ie])}function se(ae){e=Oe(),e.id=ae.id,e.object=ae,_.setFromMatrixPosition(ae.matrixWorld),_.applyMatrix4(N),e.z=_.z,e.renderOrder=ae.renderOrder,S.objects.push(e)}this.projectScene=function(ae,ve,Ie,Re){l=0,m=0,g=0,S.elements.length=0,ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),ve.parent===null&&ve.matrixWorldAutoUpdate===!0&&ve.updateMatrixWorld(),P.copy(ve.matrixWorldInverse),N.multiplyMatrices(ve.projectionMatrix,P),R.setFromProjectionMatrix(N),t=0,S.objects.length=0,S.lights.length=0,le(ae),Ie===!0&&S.objects.sort(ct);let Ae=S.objects;for(let De=0,E=Ae.length;De<E;De++){let U=Ae[De].object,k=U.geometry;if(K.setObject(U),u=U.matrixWorld,s=0,U.isMesh){let W=U.material,O=Array.isArray(W),q=k.attributes,z=k.groups;if(q.position===void 0)continue;let j=q.position.array;for(let T=0,M=j.length;T<M;T+=3){let F=j[T],$=j[T+1],te=j[T+2],xe=k.morphAttributes.position;if(xe!==void 0){let _e=k.morphTargetsRelative,ee=U.morphTargetInfluences;for(let re=0,Me=xe.length;re<Me;re++){let B=ee[re];if(B===0)continue;let ue=xe[re];_e?(F+=ue.getX(T/3)*B,$+=ue.getY(T/3)*B,te+=ue.getZ(T/3)*B):(F+=(ue.getX(T/3)-j[T])*B,$+=(ue.getY(T/3)-j[T+1])*B,te+=(ue.getZ(T/3)-j[T+2])*B)}}K.pushVertex(F,$,te)}if(q.normal!==void 0){let T=q.normal.array;for(let M=0,F=T.length;M<F;M+=3)K.pushNormal(T[M],T[M+1],T[M+2])}if(q.color!==void 0){let T=q.color.array;for(let M=0,F=T.length;M<F;M+=3)K.pushColor(T[M],T[M+1],T[M+2])}if(q.uv!==void 0){let T=q.uv.array;for(let M=0,F=T.length;M<F;M+=2)K.pushUv(T[M],T[M+1])}if(k.index!==null){let T=k.index.array;if(z.length>0)for(let M=0;M<z.length;M++){let F=z[M];if(W=O===!0?U.material[F.materialIndex]:U.material,W!==void 0)for(let $=F.start,te=F.start+F.count;$<te;$+=3)K.pushTriangle(T[$],T[$+1],T[$+2],W)}else for(let M=0,F=T.length;M<F;M+=3)K.pushTriangle(T[M],T[M+1],T[M+2],W)}else if(z.length>0)for(let T=0;T<z.length;T++){let M=z[T];if(W=O===!0?U.material[M.materialIndex]:U.material,W!==void 0)for(let F=M.start,$=M.start+M.count;F<$;F+=3)K.pushTriangle(F,F+1,F+2,W)}else for(let T=0,M=j.length/3;T<M;T+=3)K.pushTriangle(T,T+1,T+2,W)}else if(U.isLine){L.multiplyMatrices(N,u);let W=k.attributes;if(W.position!==void 0){let O=W.position.array;for(let q=0,z=O.length;q<z;q+=3)K.pushVertex(O[q],O[q+1],O[q+2]);if(W.color!==void 0){let q=W.color.array;for(let z=0,j=q.length;z<j;z+=3)K.pushColor(q[z],q[z+1],q[z+2])}if(k.index!==null){let q=k.index.array;for(let z=0,j=q.length;z<j;z+=2)K.pushLine(q[z],q[z+1])}else{let q=U.isLineSegments?2:1;for(let z=0,j=O.length/3-1;z<j;z+=q)K.pushLine(z,z+1)}}}else if(U.isPoints){L.multiplyMatrices(N,u);let W=k.attributes;if(W.position!==void 0){let O=W.position.array;for(let q=0,z=O.length;q<z;q+=3)A.set(O[q],O[q+1],O[q+2],1),A.applyMatrix4(L),me(A,U,ve)}}else U.isSprite&&(U.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,U.matrixWorld),A.set(u.elements[12],u.elements[13],u.elements[14],1),A.applyMatrix4(N),me(A,U,ve))}return Re===!0&&S.elements.sort(ct),S};function me(ae,ve,Ie){let Re=1/ae.w;ae.z*=Re,ae.z>=-1&&ae.z<=1&&(p=Ge(),p.id=ve.id,p.x=ae.x*Re,p.y=ae.y*Re,p.z=ae.z,p.renderOrder=ve.renderOrder,p.object=ve,p.rotation=ve.rotation,p.scale.x=ve.scale.x*Math.abs(p.x-(ae.x+Ie.projectionMatrix.elements[0])/(ae.w+Ie.projectionMatrix.elements[12])),p.scale.y=ve.scale.y*Math.abs(p.y-(ae.y+Ie.projectionMatrix.elements[5])/(ae.w+Ie.projectionMatrix.elements[13])),p.material=ve.material,S.elements.push(p))}function Oe(){if(t===i){let ae=new ol;return D.push(ae),i++,t++,ae}return D[t++]}function Le(){if(s===o){let ae=new qn;return w.push(ae),o++,s++,ae}return w[s++]}function Ve(){if(l===a){let ae=new fs;return G.push(ae),a++,l++,ae}return G[l++]}function ze(){if(m===d){let ae=new ps;return Y.push(ae),d++,m++,ae}return Y[m++]}function Ge(){if(g===x){let ae=new ms;return V.push(ae),x++,g++,ae}return V[g++]}function ct(ae,ve){return ae.renderOrder!==ve.renderOrder?ae.renderOrder-ve.renderOrder:ae.z!==ve.z?ve.z-ae.z:ae.id!==ve.id?ae.id-ve.id:0}function st(ae){h[0]=ae[0],h[1]=ae[1],h[2]=ae[2];let ve=3,Ie=0;for(let Re=0;Re<Q.length;Re++){let Ae=Q[Re];if(Ie=0,ve===0)break;for(let E=0;E<ve;E++){let U=h[E],k=h[(E+1)%ve],W=Ae.sign*U.z+U.w,O=Ae.sign*k.z+k.w,q=W>=0,z=O>=0;if(q&&z)y[Ie++]=U;else if(q&&!z){y[Ie++]=U;let j=W/(W-O),T=ne[Ie];T||(T=new ht,ne[Ie]=T),T.lerpVectors(U,k,j),y[Ie++]=T}else if(!q&&z){let j=W/(W-O),T=ne[Ie];T||(T=new ht,ne[Ie]=T),T.lerpVectors(U,k,j),y[Ie++]=T}}let De=h;h=y,y=De,ve=Ie}return ve}function _t(ae,ve){let Ie=0,Re=1,Ae=ae.z+ae.w,De=ve.z+ve.w,E=-ae.z+ae.w,U=-ve.z+ve.w;return Ae>=0&&De>=0&&E>=0&&U>=0?!0:Ae<0&&De<0||E<0&&U<0?!1:(Ae<0?Ie=Math.max(Ie,Ae/(Ae-De)):De<0&&(Re=Math.min(Re,Ae/(Ae-De))),E<0?Ie=Math.max(Ie,E/(E-U)):U<0&&(Re=Math.min(Re,E/(E-U))),Re<Ie?!1:(ae.lerp(ve,Ie),ve.lerp(ae,1-Re),!0))}}};var Aa=class{constructor(){let e,t,i,r,s,o,c,l,a,f,m,d=0,p=0,g=0,x=null,u=1,h,y,S=this,_=new or,A=new or,C=new qe,v=new qe,b=new qe,P=new qe,N=new qe,L=new qe,R=new J,D=new J,w=new J,G=new J,Y=new Je,V=new ut,ne=new ut,X=[],ie=[],oe=[],Se=new ba,Te=document.createElementNS("http://www.w3.org/2000/svg","svg");this.domElement=Te,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.overdraw=.5,this.outputColorSpace=vt,this.info={render:{vertices:0,faces:0}},this.setQuality=function(ae){switch(ae){case"high":u=1;break;case"low":u=0;break}},this.setClearColor=function(ae){L.set(ae)},this.setPixelRatio=function(){},this.setSize=function(ae,ve){r=ae,s=ve,o=r/2,c=s/2,Te.setAttribute("viewBox",-o+" "+-c+" "+r+" "+s),Te.setAttribute("width",r),Te.setAttribute("height",s),_.min.set(-o,-c),_.max.set(o,c)},this.getSize=function(){return{width:r,height:s}},this.setPrecision=function(ae){x=ae};function Q(){for(d=0;Te.childNodes.length>0;)Te.removeChild(Te.childNodes[0])}function H(ae){return x!==null?ae.toFixed(x):ae}function K(ae,ve){let Ie=ae.data.renderOrder!==void 0?ae.data.renderOrder:0,Re=ve.data.renderOrder!==void 0?ve.data.renderOrder:0;if(Ie!==Re)return Ie-Re;{let Ae=ae.data.z!==void 0?ae.data.z:0;return(ve.data.z!==void 0?ve.data.z:0)-Ae}}this.clear=function(){Q(),Te.style.backgroundColor=L.getStyle(S.outputColorSpace)},this.render=function(ae,ve){if(!(ve instanceof vi)){console.error("THREE.SVGRenderer.render: camera is not an instance of Camera.");return}let Ie=ae.background;Ie&&Ie.isColor?(Q(),Te.style.backgroundColor=Ie.getStyle(S.outputColorSpace)):this.autoClear===!0&&this.clear(),S.info.render.vertices=0,S.info.render.faces=0,V.copy(ve.matrixWorldInverse),ne.multiplyMatrices(ve.projectionMatrix,V),e=Se.projectScene(ae,ve,this.sortObjects,this.sortElements),t=e.elements,i=e.lights,Y.getNormalMatrix(ve.matrixWorldInverse),le(i),g=0;for(let Re=0,Ae=t.length;Re<Ae;Re++){let De=t[Re],E=De.material;E===void 0||E.opacity===0||_t(g++,"element",De,E)}p=0,ae.traverseVisible(function(Re){if(Re.isSVGObject){if(R.setFromMatrixPosition(Re.matrixWorld),R.applyMatrix4(ne),R.z<-1||R.z>1)return;let Ae=R.x*o,De=-R.y*c,E=st(p++);E.node=Re.node,E.x=Ae,E.y=De,E.z=R.z,E.renderOrder=Re.renderOrder,_t(g++,"svgObject",E,null)}}),oe.length=g,this.sortElements&&p>0&&oe.sort(K),h="",y="";for(let Re=0;Re<g;Re++){let Ae=oe[Re];if(Ae.type==="svgObject"){Ge();let De=Ae.data,E=De.node;E.setAttribute("transform","translate("+De.x+","+De.y+")"),Te.appendChild(E)}else{let De=Ae.data,E=Ae.material;A.makeEmpty(),De instanceof ms?(l=De,l.x*=o,l.y*=-c,me(l,De,E)):De instanceof ps?(l=De.v1,a=De.v2,l.positionScreen.x*=o,l.positionScreen.y*=-c,a.positionScreen.x*=o,a.positionScreen.y*=-c,A.setFromPoints([l.positionScreen,a.positionScreen]),_.intersectsBox(A)===!0&&Oe(l,a,E)):De instanceof fs&&(l=De.v1,a=De.v2,f=De.v3,l.positionScreen.x*=o,l.positionScreen.y*=-c,a.positionScreen.x*=o,a.positionScreen.y*=-c,f.positionScreen.x*=o,f.positionScreen.y*=-c,this.overdraw>0&&(Ve(l.positionScreen,a.positionScreen,this.overdraw),Ve(a.positionScreen,f.positionScreen,this.overdraw),Ve(f.positionScreen,l.positionScreen,this.overdraw)),A.setFromPoints([l.positionScreen,a.positionScreen,f.positionScreen]),_.intersectsBox(A)===!0&&Le(l,a,f,De,E))}}Ge()};function le(ae){b.setRGB(0,0,0),P.setRGB(0,0,0),N.setRGB(0,0,0);for(let ve=0,Ie=ae.length;ve<Ie;ve++){let Re=ae[ve],Ae=Re.color;Re.isAmbientLight?(b.r+=Ae.r,b.g+=Ae.g,b.b+=Ae.b):Re.isDirectionalLight?(P.r+=Ae.r,P.g+=Ae.g,P.b+=Ae.b):Re.isPointLight&&(N.r+=Ae.r,N.g+=Ae.g,N.b+=Ae.b)}}function se(ae,ve,Ie,Re){for(let Ae=0,De=ae.length;Ae<De;Ae++){let E=ae[Ae],U=E.color;if(E.isDirectionalLight){let k=R.setFromMatrixPosition(E.matrixWorld).sub(D.setFromMatrixPosition(E.target.matrixWorld)).normalize(),W=Ie.dot(k);if(W<=0)continue;W*=E.intensity,Re.r+=U.r*W,Re.g+=U.g*W,Re.b+=U.b*W}else if(E.isPointLight){let k=R.setFromMatrixPosition(E.matrixWorld),W=Ie.dot(R.subVectors(k,ve).normalize());if(W<=0||(W*=E.distance==0?1:1-Math.min(ve.distanceTo(k)/E.distance,1),W==0))continue;W*=E.intensity,Re.r+=U.r*W,Re.g+=U.g*W,Re.b+=U.b*W}}}function me(ae,ve,Ie){let Re=ve.scale.x*o,Ae=ve.scale.y*c;Ie.isPointsMaterial&&(Re*=Ie.size,Ae*=Ie.size);let De="M"+H(ae.x-Re*.5)+","+H(ae.y-Ae*.5)+"h"+H(Re)+"v"+H(Ae)+"h"+H(-Re)+"z",E="";(Ie.isSpriteMaterial||Ie.isPointsMaterial)&&(E="fill:"+Ie.color.getStyle(S.outputColorSpace)+";fill-opacity:"+Ie.opacity),ze(E,De)}function Oe(ae,ve,Ie){let Re="M"+H(ae.positionScreen.x)+","+H(ae.positionScreen.y)+"L"+H(ve.positionScreen.x)+","+H(ve.positionScreen.y);if(Ie.isLineBasicMaterial){let Ae="fill:none;stroke:"+Ie.color.getStyle(S.outputColorSpace)+";stroke-opacity:"+Ie.opacity+";stroke-width:"+Ie.linewidth+";stroke-linecap:"+Ie.linecap;Ie.isLineDashedMaterial&&(Ae=Ae+";stroke-dasharray:"+Ie.dashSize+","+Ie.gapSize),ze(Ae,Re)}}function Le(ae,ve,Ie,Re,Ae){S.info.render.vertices+=3,S.info.render.faces++;let De="M"+H(ae.positionScreen.x)+","+H(ae.positionScreen.y)+"L"+H(ve.positionScreen.x)+","+H(ve.positionScreen.y)+"L"+H(Ie.positionScreen.x)+","+H(Ie.positionScreen.y)+"z",E="";Ae.isMeshBasicMaterial?(C.copy(Ae.color),Ae.vertexColors&&C.multiply(Re.color)):Ae.isMeshLambertMaterial||Ae.isMeshPhongMaterial||Ae.isMeshStandardMaterial?(v.copy(Ae.color),Ae.vertexColors&&v.multiply(Re.color),C.copy(b),w.copy(ae.positionWorld).add(ve.positionWorld).add(Ie.positionWorld).divideScalar(3),se(i,w,Re.normalModel,C),C.multiply(v).add(Ae.emissive)):Ae.isMeshNormalMaterial&&(G.copy(Re.normalModel).applyMatrix3(Y).normalize(),C.setRGB(G.x,G.y,G.z).multiplyScalar(.5).addScalar(.5)),Ae.wireframe?E="fill:none;stroke:"+C.getStyle(S.outputColorSpace)+";stroke-opacity:"+Ae.opacity+";stroke-width:"+Ae.wireframeLinewidth+";stroke-linecap:"+Ae.wireframeLinecap+";stroke-linejoin:"+Ae.wireframeLinejoin:E="fill:"+C.getStyle(S.outputColorSpace)+";fill-opacity:"+Ae.opacity,ze(E,De)}function Ve(ae,ve,Ie){let Re=ve.x-ae.x,Ae=ve.y-ae.y,De=Re*Re+Ae*Ae;if(De===0)return;let E=Ie/Math.sqrt(De);Re*=E,Ae*=E,ve.x+=Re,ve.y+=Ae,ae.x-=Re,ae.y-=Ae}function ze(ae,ve){y===ae?h+=ve:(Ge(),y=ae,h=ve)}function Ge(){h&&(m=ct(d++),m.setAttribute("d",h),m.setAttribute("style",y),Te.appendChild(m)),h="",y=""}function ct(ae){let ve=X[ae];return ve===void 0&&(ve=document.createElementNS("http://www.w3.org/2000/svg","path"),u==0&&ve.setAttribute("shape-rendering","crispEdges"),X[ae]=ve),ve}function st(ae){let ve=ie[ae];return ve===void 0&&(ve={node:null,x:0,y:0,z:0,renderOrder:0},ie[ae]=ve),ve}function _t(ae,ve,Ie,Re){let Ae=oe[ae];return Ae===void 0?(Ae={type:ve,data:Ie,material:Re},oe[ae]=Ae,Ae):(Ae.type=ve,Ae.data=Ie,Ae.material=Re,Ae)}}};var In=null;function _0(){In&&(In.dispose(),In=null)}async function Jv(n,e,t){_0();let i,r=!1,s=document.createElement("canvas"),o=s.getContext("webgl2",{powerPreference:"low-power"});o?i=new pa({canvas:s,context:o,antialias:!0,alpha:!0,powerPreference:"low-power"}):(r=!0,i=new Aa,i.setQuality("low"),i.setPrecision(2),i.setClearColor(new qe("#101c29"))),i.setPixelRatio?.(Math.min(devicePixelRatio,1.5)),i.setSize(n.clientWidth,n.clientHeight),i.outputColorSpace=vt,n.append(i.domElement);let c=new _i;c.background=new qe("#101c29");let l=new Ft(40,n.clientWidth/n.clientHeight,.01,5e3);l.position.set(10,8,12);let a=new ya(l,i.domElement);a.enableDamping=!0,a.dampingFactor=.12,c.add(new Kr(14282751,2699842,2.5));let f=new ir(16777215,3);f.position.set(5,10,8),c.add(f);let m=new ir(8173823,1.5);m.position.set(-5,2,-5),c.add(m);let d,p=!0,g,x=0,u=!0;a.addEventListener("change",()=>u=!0);let h=new AbortController,y=setTimeout(()=>h.abort(),25e3),S=()=>{p=!1,h.abort(),clearTimeout(y),cancelAnimationFrame(g),a.dispose(),_.disconnect(),c.traverse(C=>{C.geometry?.dispose();for(let v of[C.material].flat().filter(Boolean))v.map?.dispose(),v.dispose()}),i.dispose?.(),i.forceContextLoss?.(),i.domElement.remove()},_=new ResizeObserver(()=>{!n.clientWidth||!n.clientHeight||(l.aspect=n.clientWidth/n.clientHeight,l.updateProjectionMatrix(),i.setSize(n.clientWidth,n.clientHeight),u=!0)});_.observe(n),In={dispose:S,controls:a,camera:l,renderer:i,scene:c};function A(C){p&&(g=requestAnimationFrame(A),!(document.hidden||C-x<33)&&(x=C,a.update(),u&&(i.render(c,l),u=!1)))}g=requestAnimationFrame(A);try{t("\u05D8\u05D5\u05E2\u05DF \u05DE\u05D5\u05D3\u05DC \u05EA\u05DC\u05EA\u05BE\u05DE\u05DE\u05D3\u05D9\u2026");let C;try{let D=await(await caches.open("voltlab-cad-v1")).match(e);D&&(C=await D.text())}catch{}if(!C){let R=await fetch(e,{signal:h.signal});if(!R.ok)throw Error("HTTP "+R.status);if(Number(R.headers.get("content-length"))>12e6)throw Error("\u05D4\u05DE\u05D5\u05D3\u05DC \u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9 \u05DC\u05EA\u05E6\u05D5\u05D2\u05D4 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF");if(C=await R.text(),C.length>12e6)throw Error("\u05D4\u05DE\u05D5\u05D3\u05DC \u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9");try{let w=await caches.open("voltlab-cad-v1"),G=await w.keys();for(;G.length>=16;)await w.delete(G.shift());await w.put(e,new Response(C,{headers:{"Content-Type":"text/plain"}}))}catch{}}if(clearTimeout(y),!p)return;d=new Ta().parse(C,""),d.rotation.x=-Math.PI/2,d.updateMatrixWorld(!0);let v=new nn().setFromObject(d);if(v.isEmpty())throw Error("\u05D4\u05DE\u05D5\u05D3\u05DC \u05D0\u05D9\u05E0\u05D5 \u05DE\u05DB\u05D9\u05DC \u05D2\u05D0\u05D5\u05DE\u05D8\u05E8\u05D9\u05D4 \u05E0\u05EA\u05DE\u05DB\u05EA");let b=v.getCenter(new J),P=v.getSize(new J);d.position.sub(b);let N=Math.max(P.x,P.y,P.z);d.scale.setScalar(5/N),d.position.multiplyScalar(5/N);let L=0;if(d.traverse(R=>{R.isMesh&&(L+=(R.geometry.index?.count||R.geometry.attributes.position?.count||0)/3)}),r&&L>18e3)throw Error("\u05D4\u05DE\u05D5\u05D3\u05DC \u05D2\u05D3\u05D5\u05DC \u05DC\u05EA\u05E6\u05D5\u05D2\u05D4 \u05E7\u05DC\u05D4 \u05DC\u05DC\u05D0 WebGL. \u05D1\u05D7\u05E8\u05D5 \u05DE\u05D5\u05D3\u05DC \u05E7\u05D8\u05DF \u05D9\u05D5\u05EA\u05E8 \u05D0\u05D5 \u05D4\u05D5\u05E8\u05D9\u05D3\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E7\u05D5\u05E8.");c.add(d),u=!0,a.target.set(0,0,0),l.position.set(6,4,7),a.update(),t((r?"\u05EA\u05E6\u05D5\u05D2\u05EA CAD \u05E7\u05DC\u05D4 \u05DC\u05DC\u05D0 WebGL":"\u05DE\u05D5\u05D3\u05DC CAD \u05D0\u05DE\u05D9\u05EA\u05D9")+" \xB7 \u05D2\u05E8\u05E8\u05D5 \u05DC\u05E1\u05D9\u05D1\u05D5\u05D1 \u05DE\u05DB\u05DC \u05D4\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \xB7 \u05E6\u05D1\u05D9\u05D8\u05D4 \u05DC\u05E7\u05D9\u05E8\u05D5\u05D1")}catch(C){clearTimeout(y),p&&t(C.name==="AbortError"?"\u05D4\u05D8\u05E2\u05D9\u05E0\u05D4 \u05D0\u05E8\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9. \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D4\u05D5\u05E8\u05D9\u05D3\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E7\u05D5\u05E8.":"\u05D4\u05DE\u05D5\u05D3\u05DC \u05DC\u05D0 \u05E0\u05D8\u05E2\u05DF: "+C.message)}}function $v(){In&&(In.camera.position.set(6,4,7),In.controls.target.set(0,0,0),In.controls.update())}function Qv(){In?.scene.traverse(n=>{for(let e of[n.material].flat().filter(Boolean))e.wireframe=!e.wireframe}),In?.controls.dispatchEvent({type:"change"})}export{_0 as closeCAD,Jv as openCAD,$v as resetCAD,Qv as toggleWireframe};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/chevrotain.module.min.js:
  (*! chevrotain - v9.0.1 *)
*/
