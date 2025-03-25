var bh=Object.defineProperty;var Th=(i,e,t)=>e in i?bh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Qe=(i,e,t)=>Th(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="162",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wh=0,Wo=1,Ah=2,eu=1,Rh=2,Sn=3,un=0,Ot=1,bn=2,Vn=0,Gi=1,Xo=2,$o=3,qo=4,Ch=5,ri=100,Ph=101,Lh=102,jo=103,Yo=104,Dh=200,Ih=201,Nh=202,Uh=203,Va=204,Wa=205,Oh=206,Fh=207,Bh=208,kh=209,zh=210,Hh=211,Gh=212,Vh=213,Wh=214,Xh=0,$h=1,qh=2,Es=3,jh=4,Yh=5,Zh=6,Kh=7,uo=0,Jh=1,Qh=2,Wn=0,ef=1,tf=2,nf=3,rf=4,sf=5,af=6,of=7,tu=300,Xi=301,$i=302,Xa=303,$a=304,ks=306,qa=1e3,Yt=1001,ja=1002,At=1003,Zo=1004,Qi=1005,It=1006,ea=1007,ai=1008,Xn=1009,lf=1010,cf=1011,ho=1012,nu=1013,zn=1014,Tn=1015,xr=1016,iu=1017,ru=1018,ci=1020,uf=1021,Zt=1023,hf=1024,ff=1025,ui=1026,qi=1027,df=1028,su=1029,pf=1030,au=1031,ou=1033,ta=33776,na=33777,ia=33778,ra=33779,Ko=35840,Jo=35841,Qo=35842,el=35843,lu=36196,tl=37492,nl=37496,il=37808,rl=37809,sl=37810,al=37811,ol=37812,ll=37813,cl=37814,ul=37815,hl=37816,fl=37817,dl=37818,pl=37819,ml=37820,gl=37821,sa=36492,_l=36494,xl=36495,mf=36283,vl=36284,yl=36285,Sl=36286,gf=3200,_f=3201,cu=0,xf=1,kn="",an="srgb",$n="srgb-linear",fo="display-p3",zs="display-p3-linear",bs="linear",nt="srgb",Ts="rec709",ws="p3",Mi=7680,Ml=519,vf=512,yf=513,Sf=514,uu=515,Mf=516,Ef=517,bf=518,Tf=519,Ya=35044,El="300 es",Za=1035,wn=2e3,As=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const hr=Math.PI/180,vr=180/Math.PI;function An(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function po(i,e){return(i%e+e)%e}function wf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Af(i,e,t){return i!==e?(t-i)/(e-i):0}function fr(i,e,t){return(1-t)*i+t*e}function Rf(i,e,t,n){return fr(i,e,1-Math.exp(-t*n))}function Cf(i,e=1){return e-Math.abs(po(i,e*2)-e)}function Pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Df(i,e){return i+Math.floor(Math.random()*(e-i+1))}function If(i,e){return i+Math.random()*(e-i)}function Nf(i){return i*(.5-Math.random())}function Uf(i){i!==void 0&&(bl=i);let e=bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Of(i){return i*hr}function Ff(i){return i*vr}function Ka(i){return(i&i-1)===0&&i!==0}function Bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hu={DEG2RAD:hr,RAD2DEG:vr,generateUUID:An,clamp:vt,euclideanModulo:po,mapLinear:wf,inverseLerp:Af,lerp:fr,damp:Rf,pingpong:Cf,smoothstep:Pf,smootherstep:Lf,randInt:Df,randFloat:If,randFloatSpread:Nf,seededRandom:Uf,degToRad:Of,radToDeg:Ff,isPowerOfTwo:Ka,ceilPowerOfTwo:Bf,floorPowerOfTwo:Rs,setQuaternionFromProperEuler:kf,normalize:Ye,denormalize:Kt};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=r[0],d=r[3],p=r[6],M=r[1],x=r[4],E=r[7],R=r[2],C=r[5],T=r[8];return s[0]=o*_+a*M+l*R,s[3]=o*d+a*x+l*C,s[6]=o*p+a*E+l*T,s[1]=c*_+u*M+h*R,s[4]=c*d+u*x+h*C,s[7]=c*p+u*E+h*T,s[2]=f*_+m*M+g*R,s[5]=f*d+m*x+g*C,s[8]=f*p+m*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new ke;function fu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zf(){const i=yr("canvas");return i.style.display="block",i}const Tl={};function du(i){i in Tl||(Tl[i]=!0,console.warn(i))}const wl=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nr={[$n]:{transfer:bs,primaries:Ts,toReference:i=>i,fromReference:i=>i},[an]:{transfer:nt,primaries:Ts,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zs]:{transfer:bs,primaries:ws,toReference:i=>i.applyMatrix3(Al),fromReference:i=>i.applyMatrix3(wl)},[fo]:{transfer:nt,primaries:ws,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Al),fromReference:i=>i.applyMatrix3(wl).convertLinearToSRGB()}},Hf=new Set([$n,zs]),qe={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Nr[e].toReference,r=Nr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Nr[i].primaries},getTransfer:function(i){return i===kn?bs:Nr[i].transfer}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ei;class pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=yr("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gf=0;class mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class Pt extends _i{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Yt,r=Yt,s=It,o=ai,a=Zt,l=Xn,c=Pt.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=An(),this.name="",this.source=new mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=tu;Pt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(m+1)/2,R=(p+1)/2,C=(u+f)/4,T=(h+_)/4,O=(g+d)/4;return x>E&&x>R?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=T/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=O/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=T/s,r=O/s),this.set(n,r,s,t),this}let M=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wf extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Wf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gu extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xf extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let d=1-a;const p=l*f+c*m+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),C=Math.atan2(R,p*M);d=Math.sin(d*C)/R,a=Math.sin(a*C)/R}const E=a*M;if(l=l*d+f*E,c=c*d+m*E,u=u*d+g*E,h=h*d+_*E,d===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new D,Rl=new pi;class qn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(s,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Or.subVectors(this.max,er),bi.subVectors(e.a,er),Ti.subVectors(e.b,er),wi.subVectors(e.c,er),Ln.subVectors(Ti,bi),Dn.subVectors(wi,Ti),Kn.subVectors(bi,wi);let t=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Kn.y,Kn.x,0];return!ua(t,bi,Ti,wi,Or)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,bi,Ti,wi,Or))?!1:(Fr.crossVectors(Ln,Dn),t=[Fr.x,Fr.y,Fr.z],ua(t,bi,Ti,wi,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new D,new D,new D,new D,new D,new D,new D,new D],$t=new D,Ur=new qn,bi=new D,Ti=new D,wi=new D,Ln=new D,Dn=new D,Kn=new D,er=new D,Or=new D,Fr=new D,Jn=new D;function ua(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Jn.fromArray(i,s);const a=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $f=new qn,tr=new D,ha=new D;class Tr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$f.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(ha)),this.expandByPoint(tr.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new D,fa=new D,Br=new D,In=new D,da=new D,kr=new D,pa=new D;class _u{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fa.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),In.copy(this.origin).sub(fa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Br),a=In.dot(this.direction),l=-In.dot(Br),c=In.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fa).addScaledVector(Br,f),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),r=gn.dot(gn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,r,s){da.subVectors(t,e),kr.subVectors(n,e),pa.crossVectors(da,kr);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);const l=a*this.direction.dot(kr.crossVectors(In,kr));if(l<0)return null;const c=a*this.direction.dot(da.cross(In));if(c<0||l+c>o)return null;const u=-a*In.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,o,a,l,c,u,h,f,m,g,_,d){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,m,g,_,d)}set(e,t,n,r,s,o,a,l,c,u,h,f,m,g,_,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,jf)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Nn.crossVectors(n,Bt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Nn.crossVectors(n,Bt)),Nn.normalize(),zr.crossVectors(Bt,Nn),r[0]=Nn.x,r[4]=zr.x,r[8]=Bt.x,r[1]=Nn.y,r[5]=zr.y,r[9]=Bt.y,r[2]=Nn.z,r[6]=zr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],M=n[3],x=n[7],E=n[11],R=n[15],C=r[0],T=r[4],O=r[8],ee=r[12],y=r[1],w=r[5],J=r[9],Y=r[13],L=r[2],X=r[6],H=r[10],Z=r[14],W=r[3],$=r[7],K=r[11],ae=r[15];return s[0]=o*C+a*y+l*L+c*W,s[4]=o*T+a*w+l*X+c*$,s[8]=o*O+a*J+l*H+c*K,s[12]=o*ee+a*Y+l*Z+c*ae,s[1]=u*C+h*y+f*L+m*W,s[5]=u*T+h*w+f*X+m*$,s[9]=u*O+h*J+f*H+m*K,s[13]=u*ee+h*Y+f*Z+m*ae,s[2]=g*C+_*y+d*L+p*W,s[6]=g*T+_*w+d*X+p*$,s[10]=g*O+_*J+d*H+p*K,s[14]=g*ee+_*Y+d*Z+p*ae,s[3]=M*C+x*y+E*L+R*W,s[7]=M*T+x*w+E*X+R*$,s[11]=M*O+x*J+E*H+R*K,s[15]=M*ee+x*Y+E*Z+R*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],d=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*m-n*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+d*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],d=e[14],p=e[15],M=h*d*c-_*f*c+_*l*m-a*d*m-h*l*p+a*f*p,x=g*f*c-u*d*c-g*l*m+o*d*m+u*l*p-o*f*p,E=u*_*c-g*h*c+g*a*m-o*_*m-u*a*p+o*h*p,R=g*h*l-u*_*l-g*a*f+o*_*f+u*a*d-o*h*d,C=t*M+n*x+r*E+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=M*T,e[1]=(_*f*s-h*d*s-_*r*m+n*d*m+h*r*p-n*f*p)*T,e[2]=(a*d*s-_*l*s+_*r*c-n*d*c-a*r*p+n*l*p)*T,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*m-n*l*m)*T,e[4]=x*T,e[5]=(u*d*s-g*f*s+g*r*m-t*d*m-u*r*p+t*f*p)*T,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*T,e[8]=E*T,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*p-t*h*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*T,e[12]=R*T,e[13]=(u*_*r-g*h*r+g*n*f-t*_*f-u*n*d+t*h*d)*T,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*d-t*a*d)*T,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,g=s*h,_=o*u,d=o*h,p=a*h,M=l*c,x=l*u,E=l*h,R=n.x,C=n.y,T=n.z;return r[0]=(1-(_+p))*R,r[1]=(m+E)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(f+p))*C,r[6]=(d+M)*C,r[7]=0,r[8]=(g+x)*T,r[9]=(d-M)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ai.set(r[0],r[1],r[2]).length();const o=Ai.set(r[4],r[5],r[6]).length(),a=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=wn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(a===wn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===As)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=wn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,m=(n+r)*u;let g,_;if(a===wn)g=(o+s)*h,_=-2*h;else if(a===As)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new D,qt=new lt,qf=new D(0,0,0),jf=new D(1,1,1),Nn=new D,zr=new D,Bt=new D,Cl=new lt,Pl=new pi;class hn{constructor(e=0,t=0,n=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const Ll=new D,Ri=new pi,_n=new lt,Hr=new D,nr=new D,Zf=new D,Kf=new pi,Dl=new D(1,0,0),Il=new D(0,1,0),Nl=new D(0,0,1),Jf={type:"added"},Qf={type:"removed"},ma={type:"childadded",child:null},ga={type:"childremoved",child:null};class yt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new D,t=new hn,n=new pi,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(nr,Hr,this.up):_n.lookAt(Hr,nr,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(_n),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jf),ma.child=e,this.dispatchEvent(ma),ma.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qf),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new D,xn=new D,_a=new D,vn=new D,Ci=new D,Pi=new D,Ul=new D,xa=new D,va=new D,ya=new D;class on{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jt.subVectors(r,t),xn.subVectors(n,t),_a.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(xn),l=jt.dot(_a),c=xn.dot(xn),u=xn.dot(_a),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static isFrontFacing(e,t,n,r){return jt.subVectors(n,t),xn.subVectors(e,t),jt.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),jt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ci.subVectors(r,n),Pi.subVectors(s,n),xa.subVectors(e,n);const l=Ci.dot(xa),c=Pi.dot(xa);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,r);const u=Ci.dot(va),h=Pi.dot(va);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ci,o);ya.subVectors(e,s);const m=Ci.dot(ya),g=Pi.dot(ya);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Pi,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Ul.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(Ul,a);const p=1/(d+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=po(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sa(o,s,e+1/3),this.g=Sa(o,s,e),this.b=Sa(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return qe.fromWorkingColorSpace(bt.copy(this),e),Math.round(vt(bt.r*255,0,255))*65536+Math.round(vt(bt.g*255,0,255))*256+Math.round(vt(bt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,s=bt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=an){qe.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Gr);const n=fr(Un.h,Gr.h,t),r=fr(Un.s,Gr.s,t),s=fr(Un.l,Gr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const bt=new We;We.NAMES=vu;let ed=0;class wr extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Gi,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hs extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new D,Vr=new Te;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return du("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class yu extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Su extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let td=0;const Gt=new lt,Ma=new yt,Li=new D,kt=new qn,ir=new qn,mt=new D;class fn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)?Su:yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(kt.min,ir.min),kt.expandByPoint(mt),mt.addVectors(kt.max,ir.max),kt.expandByPoint(mt)):(kt.expandByPoint(ir.min),kt.expandByPoint(ir.max))}kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),mt.add(Li)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new D,l[O]=new D;const c=new D,u=new D,h=new D,f=new Te,m=new Te,g=new Te,_=new D,d=new D;function p(O,ee,y){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,ee),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,O),m.fromBufferAttribute(s,ee),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(w),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),a[O].add(_),a[ee].add(_),a[y].add(_),l[O].add(d),l[ee].add(d),l[y].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,ee=M.length;O<ee;++O){const y=M[O],w=y.start,J=y.count;for(let Y=w,L=w+J;Y<L;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const x=new D,E=new D,R=new D,C=new D;function T(O){R.fromBufferAttribute(r,O),C.copy(R);const ee=a[O];x.copy(ee),x.sub(R.multiplyScalar(R.dot(ee))).normalize(),E.crossVectors(C,ee);const w=E.dot(l[O])<0?-1:1;o.setXYZW(O,x.x,x.y,x.z,w)}for(let O=0,ee=M.length;O<ee;++O){const y=M[O],w=y.start,J=y.count;for(let Y=w,L=w+J;Y<L;Y+=3)T(e.getX(Y+0)),T(e.getX(Y+1)),T(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new Qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new lt,Qn=new _u,Wr=new Tr,Fl=new D,Di=new D,Ii=new D,Ni=new D,Ea=new D,Xr=new D,$r=new Te,qr=new Te,jr=new Te,Bl=new D,kl=new D,zl=new D,Yr=new D,Zr=new D;class Rt extends yt{constructor(e=new fn,t=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ea.fromBufferAttribute(h,e),o?Xr.addScaledVector(Ea,u):Xr.addScaledVector(Ea.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),!(Wr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Wr,Fl)===null||Qn.origin.distanceToSquared(Fl)>(e.far-e.near)**2))&&(Ol.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let E=M,R=x;E<R;E+=3){const C=a.getX(E),T=a.getX(E+1),O=a.getX(E+2);r=Kr(this,p,e,n,c,u,h,C,T,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const M=a.getX(d),x=a.getX(d+1),E=a.getX(d+2);r=Kr(this,o,e,n,c,u,h,M,x,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let E=M,R=x;E<R;E+=3){const C=E,T=E+1,O=E+2;r=Kr(this,p,e,n,c,u,h,C,T,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const M=d,x=d+1,E=d+2;r=Kr(this,o,e,n,c,u,h,M,x,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function nd(i,e,t,n,r,s,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===un,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:i}}function Kr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Di),i.getVertexPosition(l,Ii),i.getVertexPosition(c,Ni);const u=nd(i,e,t,n,Di,Ii,Ni,Yr);if(u){r&&($r.fromBufferAttribute(r,a),qr.fromBufferAttribute(r,l),jr.fromBufferAttribute(r,c),u.uv=on.getInterpolation(Yr,Di,Ii,Ni,$r,qr,jr,new Te)),s&&($r.fromBufferAttribute(s,a),qr.fromBufferAttribute(s,l),jr.fromBufferAttribute(s,c),u.uv1=on.getInterpolation(Yr,Di,Ii,Ni,$r,qr,jr,new Te)),o&&(Bl.fromBufferAttribute(o,a),kl.fromBufferAttribute(o,l),zl.fromBufferAttribute(o,c),u.normal=on.getInterpolation(Yr,Di,Ii,Ni,Bl,kl,zl,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};on.getNormal(Di,Ii,Ni,h.normal),u.face=h}return u}class Ar extends fn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function g(_,d,p,M,x,E,R,C,T,O,ee){const y=E/T,w=R/O,J=E/2,Y=R/2,L=C/2,X=T+1,H=O+1;let Z=0,W=0;const $=new D;for(let K=0;K<H;K++){const ae=K*w-Y;for(let de=0;de<X;de++){const Ce=de*y-J;$[_]=Ce*M,$[d]=ae*x,$[p]=L,c.push($.x,$.y,$.z),$[_]=0,$[d]=0,$[p]=C>0?1:-1,u.push($.x,$.y,$.z),h.push(de/T),h.push(1-K/O),Z+=1}}for(let K=0;K<O;K++)for(let ae=0;ae<T;ae++){const de=f+ae+X*K,Ce=f+ae+X*(K+1),G=f+(ae+1)+X*(K+1),ne=f+(ae+1)+X*K;l.push(de,Ce,ne),l.push(Ce,G,ne),W+=6}a.addGroup(m,W,ee),m+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const r in n)e[r]=n[r]}return e}function id(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mu(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}const mo={clone:ji,merge:wt};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eu extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new D,Hl=new Te,Gl=new Te;class Vt extends Eu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Gl),t.subVectors(Gl,Hl)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Oi=1;class ad extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Ui,Oi,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Ui,Oi,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Ui,Oi,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Ui,Oi,e,t);a.layers=this.layers,this.add(a);const l=new Vt(Ui,Oi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Ui,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bu extends Pt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class od extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Vn});s.uniforms.tEquirect.value=t;const o=new Rt(r,s),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=It),new ad(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ba=new D,ld=new D,cd=new ke;class Fn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ba.subVectors(n,t).cross(ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cd.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Tr,Jr=new D;class go{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],M=r[13],x=r[14],E=r[15];if(n[0].setComponents(l-s,f-c,d-m,E-p).normalize(),n[1].setComponents(l+s,f+c,d+m,E+p).normalize(),n[2].setComponents(l+o,f+u,d+g,E+M).normalize(),n[3].setComponents(l-o,f-u,d-g,E-M).normalize(),n[4].setComponents(l-a,f-h,d-_,E-x).normalize(),t===wn)n[5].setComponents(l+a,f+h,d+_,E+x).normalize();else if(t===As)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ud(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const f=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let _=0,d=g.length;_<d;_++){const p=g[_];t?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Gs extends fn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const M=p*f-o;for(let x=0;x<c;x++){const E=x*h-s;g.push(E,-M,0),_.push(0,0,1),d.push(x/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,E=M+c*(p+1),R=M+1+c*(p+1),C=M+1+c*p;m.push(x,E,C),m.push(E,R,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
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
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Td=`#ifdef USE_BUMPMAP
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,Qd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,rp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,am=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Im=`#define PHONG
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
}`,Nm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Um=`#define STANDARD
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
}`,Om=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Fm=`#define TOON
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
}`,Bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,km=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Gm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:hd,alphahash_pars_fragment:fd,alphamap_fragment:dd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:_d,aomap_pars_fragment:xd,batching_pars_vertex:vd,batching_vertex:yd,begin_vertex:Sd,beginnormal_vertex:Md,bsdfs:Ed,iridescence_fragment:bd,bumpmap_pars_fragment:Td,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Cd,color_fragment:Pd,color_pars_fragment:Ld,color_pars_vertex:Dd,color_vertex:Id,common:Nd,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Od,displacementmap_pars_vertex:Fd,displacementmap_vertex:Bd,emissivemap_fragment:kd,emissivemap_pars_fragment:zd,colorspace_fragment:Hd,colorspace_pars_fragment:Gd,envmap_fragment:Vd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:rp,envmap_vertex:qd,fog_vertex:jd,fog_pars_vertex:Yd,fog_fragment:Zd,fog_pars_fragment:Kd,gradientmap_pars_fragment:Jd,lightmap_fragment:Qd,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:ap,lights_phong_fragment:op,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:up,lights_fragment_begin:hp,lights_fragment_maps:fp,lights_fragment_end:dp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:xp,map_pars_fragment:vp,map_particle_fragment:yp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:bp,morphcolor_vertex:Tp,morphnormal_vertex:wp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Ip,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Bp,opaque_fragment:kp,packing:zp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:jp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Zp,skinbase_vertex:Kp,skinning_pars_vertex:Jp,skinning_vertex:Qp,skinnormal_vertex:em,specularmap_fragment:tm,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:rm,transmission_fragment:sm,transmission_pars_fragment:am,uv_pars_fragment:om,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:um,background_vert:hm,background_frag:fm,backgroundCube_vert:dm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:xm,distanceRGBA_vert:vm,distanceRGBA_frag:ym,equirect_vert:Sm,equirect_frag:Mm,linedashed_vert:Em,linedashed_frag:bm,meshbasic_vert:Tm,meshbasic_frag:wm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Im,meshphong_frag:Nm,meshphysical_vert:Um,meshphysical_frag:Om,meshtoon_vert:Fm,meshtoon_frag:Bm,points_vert:km,points_frag:zm,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},oe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Nt={basic:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:wt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:wt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:wt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:wt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:wt([oe.lights,oe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Nt.physical={uniforms:wt([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Qr={r:0,b:0,g:0},ti=new hn,Xm=new lt;function $m(i,e,t,n,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(d,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ks)?(u===void 0&&(u=new Rt(new Ar(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ji(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ti.copy(p.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(ti)),u.material.toneMapped=qe.getTransfer(x.colorSpace)!==nt,(h!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Rt(new Gs(2,2),new Rn({name:"BackgroundMaterial",uniforms:ji(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=qe.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,p){d.getRGB(Qr,Mu(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(a,l)},render:g}}function qm(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(L,X,H,Z,W){let $=!1;if(o){const K=_(Z,H,X);c!==K&&(c=K,m(c.object)),$=p(L,Z,H,W),$&&M(L,Z,H,W)}else{const K=X.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=K,$=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,O(L,X,H,Z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,X,H){const Z=H.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let $=W[X.id];$===void 0&&($={},W[X.id]=$);let K=$[Z];return K===void 0&&(K=d(f()),$[Z]=K),K}function d(L){const X=[],H=[],Z=[];for(let W=0;W<r;W++)X[W]=0,H[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:H,attributeDivisors:Z,object:L,attributes:{},index:null}}function p(L,X,H,Z){const W=c.attributes,$=X.attributes;let K=0;const ae=H.getAttributes();for(const de in ae)if(ae[de].location>=0){const G=W[de];let ne=$[de];if(ne===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),G===void 0||G.attribute!==ne||ne&&G.data!==ne.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function M(L,X,H,Z){const W={},$=X.attributes;let K=0;const ae=H.getAttributes();for(const de in ae)if(ae[de].location>=0){let G=$[de];G===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));const ne={};ne.attribute=G,G&&G.data&&(ne.data=G.data),W[de]=ne,K++}c.attributes=W,c.attributesNum=K,c.index=Z}function x(){const L=c.newAttributes;for(let X=0,H=L.length;X<H;X++)L[X]=0}function E(L){R(L,0)}function R(L,X){const H=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;H[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),W[L]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),W[L]=X)}function C(){const L=c.newAttributes,X=c.enabledAttributes;for(let H=0,Z=X.length;H<Z;H++)X[H]!==L[H]&&(i.disableVertexAttribArray(H),X[H]=0)}function T(L,X,H,Z,W,$,K){K===!0?i.vertexAttribIPointer(L,X,H,W,$):i.vertexAttribPointer(L,X,H,Z,W,$)}function O(L,X,H,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=Z.attributes,$=H.getAttributes(),K=X.defaultAttributeValues;for(const ae in $){const de=$[ae];if(de.location>=0){let Ce=W[ae];if(Ce===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(Ce=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(Ce=L.instanceColor)),Ce!==void 0){const G=Ce.normalized,ne=Ce.itemSize,fe=t.get(Ce);if(fe===void 0)continue;const Ae=fe.buffer,ve=fe.type,pe=fe.bytesPerElement,Xe=n.isWebGL2===!0&&(ve===i.INT||ve===i.UNSIGNED_INT||Ce.gpuType===nu);if(Ce.isInterleavedBufferAttribute){const we=Ce.data,U=we.stride,ht=Ce.offset;if(we.isInstancedInterleavedBuffer){for(let Se=0;Se<de.locationSize;Se++)R(de.location+Se,we.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Se=0;Se<de.locationSize;Se++)E(de.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Se=0;Se<de.locationSize;Se++)T(de.location+Se,ne/de.locationSize,ve,G,U*pe,(ht+ne/de.locationSize*Se)*pe,Xe)}else{if(Ce.isInstancedBufferAttribute){for(let we=0;we<de.locationSize;we++)R(de.location+we,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let we=0;we<de.locationSize;we++)E(de.location+we);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let we=0;we<de.locationSize;we++)T(de.location+we,ne/de.locationSize,ve,G,ne*pe,ne/de.locationSize*we*pe,Xe)}}else if(K!==void 0){const G=K[ae];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(de.location,G);break;case 3:i.vertexAttrib3fv(de.location,G);break;case 4:i.vertexAttrib4fv(de.location,G);break;default:i.vertexAttrib1fv(de.location,G)}}}}C()}function ee(){J();for(const L in a){const X=a[L];for(const H in X){const Z=X[H];for(const W in Z)g(Z[W].object),delete Z[W];delete X[H]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const X=a[L.id];for(const H in X){const Z=X[H];for(const W in Z)g(Z[W].object),delete Z[W];delete X[H]}delete a[L.id]}function w(L){for(const X in a){const H=a[X];if(H[L.id]===void 0)continue;const Z=H[L.id];for(const W in Z)g(Z[W].object),delete Z[W];delete H[L.id]}}function J(){Y(),u=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:Y,dispose:ee,releaseStatesOfGeometry:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:E,disableUnusedAttributes:C}}function jm(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ym(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||e.has("OES_texture_float"),R=x&&E,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:C}}function Zm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Fn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const M=s?0:n,x=M*4;let E=p.clippingState||null;l.value=E,E=u(g,f,x,m);for(let R=0;R!==x;++R)E[R]=t[R];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,E=m;x!==_;++x,E+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function Km(i){let e=new WeakMap;function t(o,a){return a===Xa?o.mapping=Xi:a===$a&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===$a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new od(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wu extends Eu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,Vl=[.125,.215,.35,.446,.526,.582],si=20,Ta=new wu,Wl=new We;let wa=null,Aa=0,Ra=0;const ii=(1+Math.sqrt(5))/2,Fi=1/ii,Xl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ii,Fi),new D(0,ii,-Fi),new D(Fi,0,ii),new D(-Fi,0,ii),new D(ii,Fi,0),new D(-ii,Fi,0)];class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Aa,Ra),e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:xr,format:Zt,colorSpace:$n,depthBuffer:!1},r=ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=Qm(s,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,r){const a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wl),u.toneMapping=Wn,u.autoClear=!1;const m=new Hs({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Rt(new Ar,m);let _=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,_=!0):(m.color.copy(Wl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;es(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xl[(r-1)%Xl.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*si-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):si;d>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${si}`);const p=[];let M=0;for(let T=0;T<si;++T){const O=T/_,ee=Math.exp(-O*O/2);p.push(ee),T===0?M+=ee:T<d&&(M+=2*ee)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const E=this._sizeLods[r],R=3*E*(r>x-zi?r-x+zi:0),C=4*(this._cubeSize-E);es(t,R,C,3*E,2*E),l.setRenderTarget(t),l.render(h,Ta)}}function Jm(i){const e=[],t=[],n=[];let r=i;const s=i-zi+1+Vl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-zi?l=Vl[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,d=2,p=1,M=new Float32Array(_*g*m),x=new Float32Array(d*g*m),E=new Float32Array(p*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,O=C>2?0:-1,ee=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];M.set(ee,_*g*C),x.set(f,d*g*C);const y=[C,C,C,C,C,C];E.set(y,p*g*C)}const R=new fn;R.setAttribute("position",new Qt(M,_)),R.setAttribute("uv",new Qt(x,d)),R.setAttribute("faceIndex",new Qt(E,p)),e.push(R),r>zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ql(i,e,t){const n=new di(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qm(i,e,t){const n=new Float32Array(si),r=new D(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function jl(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Yl(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xa||l===$a,u=l===Xi||l===$i;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new $l(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new $l(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ng(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)e.remove(_[d])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)e.update(_[d],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,E=M.length;x<E;x+=3){const R=M[x+0],C=M[x+1],T=M[x+2];f.push(R,C,C,T,T,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const R=x+0,C=x+1,T=x+2;f.push(R,C,C,T,T,R)}}else return;const d=new(fu(f)?Su:yu)(f,1);d.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ig(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(s,g,a,m*l),t.update(g,s,1)}function h(m,g,_){if(_===0)return;let d,p;if(r)d=i,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{d.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function rg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function sg(i,e){return i[0]-e[0]}function ag(i,e){return Math.abs(e[1])-Math.abs(i[1])}function og(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let d=s.get(u);if(d===void 0||d.count!==_){let Y=function(){w.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var m=Y;d!==void 0&&d.texture.dispose();const p=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let T=0;p===!0&&(T=1),M===!0&&(T=2),x===!0&&(T=3);let O=u.attributes.position.count*T,ee=1;O>e.maxTextureSize&&(ee=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const y=new Float32Array(O*ee*4*_),w=new gu(y,O,ee,_);w.type=Tn,w.needsUpdate=!0;const J=T*4;for(let L=0;L<_;L++){const X=E[L],H=R[L],Z=C[L],W=O*ee*4*L;for(let $=0;$<X.count;$++){const K=$*J;p===!0&&(o.fromBufferAttribute(X,$),y[W+K+0]=o.x,y[W+K+1]=o.y,y[W+K+2]=o.z,y[W+K+3]=0),M===!0&&(o.fromBufferAttribute(H,$),y[W+K+4]=o.x,y[W+K+5]=o.y,y[W+K+6]=o.z,y[W+K+7]=0),x===!0&&(o.fromBufferAttribute(Z,$),y[W+K+8]=o.x,y[W+K+9]=o.y,y[W+K+10]=o.z,y[W+K+11]=Z.itemSize===4?o.w:1)}}d={count:_,texture:w,size:new Te(O,ee)},s.set(u,d),u.addEventListener("dispose",Y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let p=0;for(let x=0;x<f.length;x++)p+=f[x];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<g;E++){const R=_[E];R[0]=E,R[1]=f[E]}_.sort(ag);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(sg);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const R=a[E],C=R[0],T=R[1];C!==Number.MAX_SAFE_INTEGER&&T?(d&&u.getAttribute("morphTarget"+E)!==d[C]&&u.setAttribute("morphTarget"+E,d[C]),p&&u.getAttribute("morphNormal"+E)!==p[C]&&u.setAttribute("morphNormal"+E,p[C]),r[E]=T,M+=T):(d&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),p&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function lg(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Au extends Pt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=zn),n===void 0&&u===qi&&(n=ci),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ru=new Pt,Cu=new Au(1,1);Cu.compareFunction=uu;const Pu=new gu,Lu=new Xf,Du=new bu,Zl=[],Kl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),ec=new Float32Array(4);function Ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Zl[r];if(s===void 0&&(s=new Float32Array(r),Zl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vs(i,e){let t=Kl[e];t===void 0&&(t=new Int32Array(e),Kl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),dt(t,n)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),dt(t,n)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),dt(t,n)}}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function bg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Cu:Ru;t.setTexture2D(e||s,r)}function Tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lu,r)}function wg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Du,r)}function Ag(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pu,r)}function Rg(i){switch(i){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return vg;case 5125:return yg;case 36294:return Sg;case 36295:return Mg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(i,e){i.uniform1fv(this.addr,e)}function Pg(i,e){const t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function Lg(i,e){const t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){const t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function Ig(i,e){const t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ng(i,e){const t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ug(i,e){const t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Og(i,e){i.uniform1iv(this.addr,e)}function Fg(i,e){i.uniform2iv(this.addr,e)}function Bg(i,e){i.uniform3iv(this.addr,e)}function kg(i,e){i.uniform4iv(this.addr,e)}function zg(i,e){i.uniform1uiv(this.addr,e)}function Hg(i,e){i.uniform2uiv(this.addr,e)}function Gg(i,e){i.uniform3uiv(this.addr,e)}function Vg(i,e){i.uniform4uiv(this.addr,e)}function Wg(i,e,t){const n=this.cache,r=e.length,s=Vs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ru,s[o])}function Xg(i,e,t){const n=this.cache,r=e.length,s=Vs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lu,s[o])}function $g(i,e,t){const n=this.cache,r=e.length,s=Vs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Du,s[o])}function qg(i,e,t){const n=this.cache,r=e.length,s=Vs(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pu,s[o])}function jg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ig;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return zg;case 36294:return Hg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return qg}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jg(t.type)}}class Kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function tc(i,e){i.seq.push(e),i.map[e.id]=e}function Jg(i,e,t){const n=i.name,r=n.length;for(Ca.lastIndex=0;;){const s=Ca.exec(n),o=Ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tc(t,c===void 0?new Yg(a,i,e):new Zg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Kg(a),tc(t,h)),t=h}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Jg(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function nc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Qg=37297;let e_=0;function t_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function n_(i){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i);let n;switch(e===t?n="":e===ws&&t===Ts?n="LinearDisplayP3ToLinearSRGB":e===Ts&&t===ws&&(n="LinearSRGBToLinearDisplayP3"),i){case $n:case zs:return[n,"LinearTransferOETF"];case an:case fo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(e),o)}else return r}function i_(i,e){const t=n_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function r_(i,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case nf:t="OptimizedCineon";break;case rf:t="ACESFilmic";break;case af:t="AgX";break;case of:t="Neutral";break;case sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hi).join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function o_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hi(i){return i!==""}function rc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(c_,h_)}const u_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function h_(i,e){let t=Be[e];if(t===void 0){const n=u_.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace(f_,d_)}function d_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function m_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case $i:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function __(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uo:e="ENVMAP_BLENDING_MULTIPLY";break;case Jh:e="ENVMAP_BLENDING_MIX";break;case Qh:e="ENVMAP_BLENDING_ADD";break}return e}function x_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function v_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=p_(t),c=m_(t),u=g_(t),h=__(t),f=x_(t),m=t.isWebGL2?"":s_(t),g=a_(t),_=o_(s),d=r.createProgram();let p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hi).join(`
`),p.length>0&&(p+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hi).join(`
`),M.length>0&&(M+=`
`)):(p=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),M=[m,oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Wn?r_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),o=Ja(o),o=rc(o,t),o=sc(o,t),a=Ja(a),a=rc(a,t),a=sc(a,t),o=ac(o),a=ac(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=x+p+o,R=x+M+a,C=nc(r,r.VERTEX_SHADER,E),T=nc(r,r.FRAGMENT_SHADER,R);r.attachShader(d,C),r.attachShader(d,T),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function O(J){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(T).trim();let H=!0,Z=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,d,C,T);else{const W=ic(r,C,"vertex"),$=ic(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+Y+`
`+W+`
`+$)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||X==="")&&(Z=!1);Z&&(J.diagnostics={runnable:H,programLog:Y,vertexShader:{log:L,prefix:p},fragmentShader:{log:X,prefix:M}})}r.deleteShader(C),r.deleteShader(T),ee=new ds(r,d),y=l_(r,d)}let ee;this.getUniforms=function(){return ee===void 0&&O(this),ee};let y;this.getAttributes=function(){return y===void 0&&O(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(d,Qg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=C,this.fragmentShader=T,this}let y_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new M_(e),t.set(e,n)),n}}class M_{constructor(e){this.id=y_++,this.code=e,this.usedTimes=0}}function E_(i,e,t,n,r,s,o){const a=new xu,l=new S_,c=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,w,J,Y,L){const X=Y.fog,H=L.geometry,Z=y.isMeshStandardMaterial?Y.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),$=W&&W.mapping===ks?W.image.height:null,K=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ae!==void 0?ae.length:0;let Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let G,ne,fe,Ae;if(K){const je=Nt[K];G=je.vertexShader,ne=je.fragmentShader}else G=y.vertexShader,ne=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),Ae=l.getFragmentShaderID(y);const ve=i.getRenderTarget(),pe=L.isInstancedMesh===!0,Xe=L.isBatchedMesh===!0,we=!!y.map,U=!!y.matcap,ht=!!W,Se=!!y.aoMap,Ie=!!y.lightMap,Me=!!y.bumpMap,Ve=!!y.normalMap,Ne=!!y.displacementMap,Oe=!!y.emissiveMap,et=!!y.metalnessMap,b=!!y.roughnessMap,v=y.anisotropy>0,V=y.clearcoat>0,q=y.iridescence>0,ie=y.sheen>0,Q=y.transmission>0,Pe=v&&!!y.anisotropyMap,Ee=V&&!!y.clearcoatMap,le=V&&!!y.clearcoatNormalMap,ce=V&&!!y.clearcoatRoughnessMap,Le=q&&!!y.iridescenceMap,se=q&&!!y.iridescenceThicknessMap,st=ie&&!!y.sheenColorMap,ze=ie&&!!y.sheenRoughnessMap,ye=!!y.specularMap,me=!!y.specularColorMap,_e=!!y.specularIntensityMap,A=Q&&!!y.transmissionMap,j=Q&&!!y.thicknessMap,ge=!!y.gradientMap,P=!!y.alphaMap,re=y.alphaTest>0,F=!!y.alphaHash,te=!!y.extensions;let ue=Wn;y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Ge={isWebGL2:h,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:ne,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Xe,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:$n,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:U,envMap:ht,envMapMode:ht&&W.mapping,envMapCubeUVHeight:$,aoMap:Se,lightMap:Ie,bumpMap:Me,normalMap:Ve,displacementMap:m&&Ne,emissiveMap:Oe,normalMapObjectSpace:Ve&&y.normalMapType===xf,normalMapTangentSpace:Ve&&y.normalMapType===cu,metalnessMap:et,roughnessMap:b,anisotropy:v,anisotropyMap:Pe,clearcoat:V,clearcoatMap:Ee,clearcoatNormalMap:le,clearcoatRoughnessMap:ce,iridescence:q,iridescenceMap:Le,iridescenceThicknessMap:se,sheen:ie,sheenColorMap:st,sheenRoughnessMap:ze,specularMap:ye,specularColorMap:me,specularIntensityMap:_e,transmission:Q,transmissionMap:A,thicknessMap:j,gradientMap:ge,opaque:y.transparent===!1&&y.blending===Gi&&y.alphaToCoverage===!1,alphaMap:P,alphaTest:re,alphaHash:F,combine:y.combine,mapUv:we&&d(y.map.channel),aoMapUv:Se&&d(y.aoMap.channel),lightMapUv:Ie&&d(y.lightMap.channel),bumpMapUv:Me&&d(y.bumpMap.channel),normalMapUv:Ve&&d(y.normalMap.channel),displacementMapUv:Ne&&d(y.displacementMap.channel),emissiveMapUv:Oe&&d(y.emissiveMap.channel),metalnessMapUv:et&&d(y.metalnessMap.channel),roughnessMapUv:b&&d(y.roughnessMap.channel),anisotropyMapUv:Pe&&d(y.anisotropyMap.channel),clearcoatMapUv:Ee&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:st&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&d(y.sheenRoughnessMap.channel),specularMapUv:ye&&d(y.specularMap.channel),specularColorMapUv:me&&d(y.specularColorMap.channel),specularIntensityMapUv:_e&&d(y.specularIntensityMap.channel),transmissionMapUv:A&&d(y.transmissionMap.channel),thicknessMapUv:j&&d(y.thicknessMap.channel),alphaMapUv:P&&d(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ve||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(we||P),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===Ot,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:te&&y.extensions.derivatives===!0,extensionFragDepth:te&&y.extensions.fragDepth===!0,extensionDrawBuffers:te&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:te&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:te&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function M(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const J in y.defines)w.push(J),w.push(y.defines[J]);return y.isRawShaderMaterial===!1&&(x(w,y),E(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function E(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const w=_[y.type];let J;if(w){const Y=Nt[w];J=mo.clone(Y.uniforms)}else J=y.uniforms;return J}function C(y,w){let J;for(let Y=0,L=u.length;Y<L;Y++){const X=u[Y];if(X.cacheKey===w){J=X,++J.usedTimes;break}}return J===void 0&&(J=new v_(i,w,y,s),u.push(J)),J}function T(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function O(y){l.remove(y)}function ee(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:R,acquireProgram:C,releaseProgram:T,releaseShaderCache:O,programs:u,dispose:ee}}function b_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function T_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,g,_,d){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),e++,p}function a(h,f,m,g,_,d){const p=o(h,f,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(h,f,m,g,_,d){const p=o(h,f,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||T_),n.length>1&&n.sort(f||lc),r.length>1&&r.sort(f||lc)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function w_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cc,i.set(n,[o])):r>=s.length?(o=new cc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function A_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function R_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let C_=0;function P_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L_(i,e){const t=new A_,n=R_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new lt,a=new lt;function l(u,h){let f=0,m=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let _=0,d=0,p=0,M=0,x=0,E=0,R=0,C=0,T=0,O=0,ee=0;u.sort(P_);const y=h===!0?Math.PI:1;for(let J=0,Y=u.length;J<Y;J++){const L=u[J],X=L.color,H=L.intensity,Z=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=X.r*H*y,m+=X.g*H*y,g+=X.b*H*y;else if(L.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(L.sh.coefficients[$],H);ee++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const K=L.shadow,ae=n.get(L);ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,r.directionalShadow[_]=ae,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=L.shadow.matrix,E++}r.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(X).multiplyScalar(H*y),$.distance=Z,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,r.spot[p]=$;const K=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,K.updateMatrices(L),L.castShadow&&O++),r.spotLightMatrix[p]=K.matrix,L.castShadow){const ae=n.get(L);ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,r.spotShadow[p]=ae,r.spotShadowMap[p]=W,C++}p++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(X).multiplyScalar(H),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),r.rectArea[M]=$,M++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),$.distance=L.distance,$.decay=L.decay,L.castShadow){const K=L.shadow,ae=n.get(L);ae.shadowBias=K.bias,ae.shadowNormalBias=K.normalBias,ae.shadowRadius=K.radius,ae.shadowMapSize=K.mapSize,ae.shadowCameraNear=K.camera.near,ae.shadowCameraFar=K.camera.far,r.pointShadow[d]=ae,r.pointShadowMap[d]=W,r.pointShadowMatrix[d]=L.shadow.matrix,R++}r.point[d]=$,d++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(H*y),$.groundColor.copy(L.groundColor).multiplyScalar(H*y),r.hemi[x]=$,x++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==d||w.spotLength!==p||w.rectAreaLength!==M||w.hemiLength!==x||w.numDirectionalShadows!==E||w.numPointShadows!==R||w.numSpotShadows!==C||w.numSpotMaps!==T||w.numLightProbes!==ee)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=M,r.point.length=d,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+T-O,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=ee,w.directionalLength=_,w.pointLength=d,w.spotLength=p,w.rectAreaLength=M,w.hemiLength=x,w.numDirectionalShadows=E,w.numPointShadows=R,w.numSpotShadows=C,w.numSpotMaps=T,w.numLightProbes=ee,r.version=C_++)}function c(u,h){let f=0,m=0,g=0,_=0,d=0;const p=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const E=u[M];if(E.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),f++}else if(E.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){const R=r.hemi[d];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(p),d++}}}return{setup:l,setupView:c,state:r}}function uc(i,e){const t=new L_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function D_(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new uc(i,e),t.set(s,[l])):o>=a.length?(l=new uc(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class I_ extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N_ extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F_(i,e,t){let n=new go;const r=new Te,s=new Te,o=new ot,a=new I_({depthPacking:_f}),l=new N_,c={},u=t.maxTextureSize,h={[un]:Ot,[Ot]:un,[bn]:bn},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:U_,fragmentShader:O_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(C,T,O){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const ee=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Vn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=p!==Sn&&this.type===Sn,L=p===Sn&&this.type!==Sn;for(let X=0,H=C.length;X<H;X++){const Z=C[X],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const $=W.getFrameExtents();if(r.multiply($),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,W.mapSize.y=s.y)),W.map===null||Y===!0||L===!0){const ae=this.type!==Sn?{minFilter:At,magFilter:At}:{};W.map!==null&&W.map.dispose(),W.map=new di(r.x,r.y,ae),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const K=W.getViewportCount();for(let ae=0;ae<K;ae++){const de=W.getViewport(ae);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),J.viewport(o),W.updateMatrices(Z,ae),n=W.getFrustum(),E(T,O,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Sn&&M(W,O),W.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(ee,y,w)};function M(C,T){const O=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new di(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,O,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,O,m,_,null)}function x(C,T,O,ee){let y=null;const w=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)y=w;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const J=y.uuid,Y=T.uuid;let L=c[J];L===void 0&&(L={},c[J]=L);let X=L[Y];X===void 0&&(X=y.clone(),L[Y]=X,T.addEventListener("dispose",R)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,ee===Sn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const J=i.properties.get(y);J.light=O}return y}function E(C,T,O,ee,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Sn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const Y=e.update(C),L=C.material;if(Array.isArray(L)){const X=Y.groups;for(let H=0,Z=X.length;H<Z;H++){const W=X[H],$=L[W.materialIndex];if($&&$.visible){const K=x(C,$,ee,y);C.onBeforeShadow(i,C,T,O,Y,K,W),i.renderBufferDirect(O,null,Y,K,C,W),C.onAfterShadow(i,C,T,O,Y,K,W)}}}else if(L.visible){const X=x(C,L,ee,y);C.onBeforeShadow(i,C,T,O,Y,X,null),i.renderBufferDirect(O,null,Y,X,C,null),C.onAfterShadow(i,C,T,O,Y,X,null)}}const J=C.children;for(let Y=0,L=J.length;Y<L;Y++)E(J[Y],T,O,ee,y)}function R(C){C.target.removeEventListener("dispose",R);for(const O in c){const ee=c[O],y=C.target.uuid;y in ee&&(ee[y].dispose(),delete ee[y])}}}function B_(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const re=new ot;let F=null;const te=new ot(0,0,0,0);return{setMask:function(ue){F!==ue&&!P&&(i.colorMask(ue,ue,ue,ue),F=ue)},setLocked:function(ue){P=ue},setClear:function(ue,Ge,je,Je,at){at===!0&&(ue*=Je,Ge*=Je,je*=Je),re.set(ue,Ge,je,Je),te.equals(re)===!1&&(i.clearColor(ue,Ge,je,Je),te.copy(re))},reset:function(){P=!1,F=null,te.set(-1,0,0,0)}}}function s(){let P=!1,re=null,F=null,te=null;return{setTest:function(ue){ue?pe(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(ue){re!==ue&&!P&&(i.depthMask(ue),re=ue)},setFunc:function(ue){if(F!==ue){switch(ue){case Xh:i.depthFunc(i.NEVER);break;case $h:i.depthFunc(i.ALWAYS);break;case qh:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case jh:i.depthFunc(i.EQUAL);break;case Yh:i.depthFunc(i.GEQUAL);break;case Zh:i.depthFunc(i.GREATER);break;case Kh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=ue}},setLocked:function(ue){P=ue},setClear:function(ue){te!==ue&&(i.clearDepth(ue),te=ue)},reset:function(){P=!1,re=null,F=null,te=null}}}function o(){let P=!1,re=null,F=null,te=null,ue=null,Ge=null,je=null,Je=null,at=null;return{setTest:function($e){P||($e?pe(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function($e){re!==$e&&!P&&(i.stencilMask($e),re=$e)},setFunc:function($e,tt,St){(F!==$e||te!==tt||ue!==St)&&(i.stencilFunc($e,tt,St),F=$e,te=tt,ue=St)},setOp:function($e,tt,St){(Ge!==$e||je!==tt||Je!==St)&&(i.stencilOp($e,tt,St),Ge=$e,je=tt,Je=St)},setLocked:function($e){P=$e},setClear:function($e){at!==$e&&(i.clearStencil($e),at=$e)},reset:function(){P=!1,re=null,F=null,te=null,ue=null,Ge=null,je=null,Je=null,at=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,_=[],d=null,p=!1,M=null,x=null,E=null,R=null,C=null,T=null,O=null,ee=new We(0,0,0),y=0,w=!1,J=null,Y=null,L=null,X=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=$>=2);let ae=null,de={};const Ce=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),ne=new ot().fromArray(Ce),fe=new ot().fromArray(G);function Ae(P,re,F,te){const ue=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(P,Ge),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<F;je++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(re+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Ge}const ve={};ve[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(i.DEPTH_TEST),l.setFunc(Es),Ne(!1),Oe(Wo),pe(i.CULL_FACE),Me(Vn);function pe(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Xe(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function we(P,re){return m[P]!==re?(i.bindFramebuffer(P,re),m[P]=re,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function U(P,re){let F=_,te=!1;if(P){F=g.get(re),F===void 0&&(F=[],g.set(re,F));const ue=P.textures;if(F.length!==ue.length||F[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,je=ue.length;Ge<je;Ge++)F[Ge]=i.COLOR_ATTACHMENT0+Ge;F.length=ue.length,te=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,te=!0);if(te)if(t.isWebGL2)i.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ht(P){return d!==P?(i.useProgram(P),d=P,!0):!1}const Se={[ri]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};if(n)Se[jo]=i.MIN,Se[Yo]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Se[jo]=P.MIN_EXT,Se[Yo]=P.MAX_EXT)}const Ie={[Dh]:i.ZERO,[Ih]:i.ONE,[Nh]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[zh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Gh]:i.ONE_MINUS_CONSTANT_COLOR,[Vh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(P,re,F,te,ue,Ge,je,Je,at,$e){if(P===Vn){p===!0&&(Xe(i.BLEND),p=!1);return}if(p===!1&&(pe(i.BLEND),p=!0),P!==Ch){if(P!==M||$e!==w){if((x!==ri||C!==ri)&&(i.blendEquation(i.FUNC_ADD),x=ri,C=ri),$e)switch(P){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,R=null,T=null,O=null,ee.set(0,0,0),y=0,M=P,w=$e}return}ue=ue||re,Ge=Ge||F,je=je||te,(re!==x||ue!==C)&&(i.blendEquationSeparate(Se[re],Se[ue]),x=re,C=ue),(F!==E||te!==R||Ge!==T||je!==O)&&(i.blendFuncSeparate(Ie[F],Ie[te],Ie[Ge],Ie[je]),E=F,R=te,T=Ge,O=je),(Je.equals(ee)===!1||at!==y)&&(i.blendColor(Je.r,Je.g,Je.b,at),ee.copy(Je),y=at),M=P,w=!1}function Ve(P,re){P.side===bn?Xe(i.CULL_FACE):pe(i.CULL_FACE);let F=P.side===Ot;re&&(F=!F),Ne(F),P.blending===Gi&&P.transparent===!1?Me(Vn):Me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const te=P.stencilWrite;c.setTest(te),te&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),b(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(P){J!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),J=P)}function Oe(P){P!==wh?(pe(i.CULL_FACE),P!==Y&&(P===Wo?i.cullFace(i.BACK):P===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),Y=P}function et(P){P!==L&&(W&&i.lineWidth(P),L=P)}function b(P,re,F){P?(pe(i.POLYGON_OFFSET_FILL),(X!==re||H!==F)&&(i.polygonOffset(re,F),X=re,H=F)):Xe(i.POLYGON_OFFSET_FILL)}function v(P){P?pe(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function V(P){P===void 0&&(P=i.TEXTURE0+Z-1),ae!==P&&(i.activeTexture(P),ae=P)}function q(P,re,F){F===void 0&&(ae===null?F=i.TEXTURE0+Z-1:F=ae);let te=de[F];te===void 0&&(te={type:void 0,texture:void 0},de[F]=te),(te.type!==P||te.texture!==re)&&(ae!==F&&(i.activeTexture(F),ae=F),i.bindTexture(P,re||ve[P]),te.type=P,te.texture=re)}function ie(){const P=de[ae];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){ne.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function _e(P){fe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function A(P,re){let F=h.get(re);F===void 0&&(F=new WeakMap,h.set(re,F));let te=F.get(P);te===void 0&&(te=i.getUniformBlockIndex(re,P.name),F.set(P,te))}function j(P,re){const te=h.get(re).get(P);u.get(re)!==te&&(i.uniformBlockBinding(re,te,P.__bindingPointIndex),u.set(re,te))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ae=null,de={},m={},g=new WeakMap,_=[],d=null,p=!1,M=null,x=null,E=null,R=null,C=null,T=null,O=null,ee=new We(0,0,0),y=0,w=!1,J=null,Y=null,L=null,X=null,H=null,ne.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:Xe,bindFramebuffer:we,drawBuffers:U,useProgram:ht,setBlending:Me,setMaterial:Ve,setFlipSided:Ne,setCullFace:Oe,setLineWidth:et,setPolygonOffset:b,setScissorTest:v,activeTexture:V,bindTexture:q,unbindTexture:ie,compressedTexImage2D:Q,compressedTexImage3D:Pe,texImage2D:ze,texImage3D:ye,updateUBOMapping:A,uniformBlockBinding:j,texStorage2D:se,texStorage3D:st,texSubImage2D:Ee,texSubImage3D:le,compressedTexSubImage2D:ce,compressedTexSubImage3D:Le,scissor:me,viewport:_e,reset:ge}}function k_(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Te,h=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return g?new OffscreenCanvas(b,v):yr("canvas")}function d(b,v,V,q){let ie=1;const Q=et(b);if((Q.width>q||Q.height>q)&&(ie=q/Math.max(Q.width,Q.height)),ie<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Pe=v?Rs:Math.floor,Ee=Pe(ie*Q.width),le=Pe(ie*Q.height);f===void 0&&(f=_(Ee,le));const ce=V?_(Ee,le):f;return ce.width=Ee,ce.height=le,ce.getContext("2d").drawImage(b,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Ee+"x"+le+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function p(b){const v=et(b);return Ka(v.width)&&Ka(v.height)}function M(b){return a?!1:b.wrapS!==Yt||b.wrapT!==Yt||b.minFilter!==At&&b.minFilter!==It}function x(b,v){return b.generateMipmaps&&v&&b.minFilter!==At&&b.minFilter!==It}function E(b){i.generateMipmap(b)}function R(b,v,V,q,ie=!1){if(a===!1)return v;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=v;if(v===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),v===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),v===i.RGBA){const Pe=ie?bs:qe.getTransfer(q);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=Pe===nt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(b,v,V){return x(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==At&&b.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){return b===At||b===Zo||b===Qi?i.NEAREST:i.LINEAR}function O(b){const v=b.target;v.removeEventListener("dispose",O),y(v),v.isVideoTexture&&h.delete(v)}function ee(b){const v=b.target;v.removeEventListener("dispose",ee),J(v)}function y(b){const v=n.get(b);if(v.__webglInit===void 0)return;const V=b.source,q=m.get(V);if(q){const ie=q[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(b),Object.keys(q).length===0&&m.delete(V)}n.remove(b)}function w(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const V=b.source,q=m.get(V);delete q[v.__cacheKey],o.memory.textures--}function J(b){const v=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let ie=0;ie<v.__webglFramebuffer[q].length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[q][ie]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=b.textures;for(let q=0,ie=V.length;q<ie;q++){const Q=n.get(V[q]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(b)}let Y=0;function L(){Y=0}function X(){const b=Y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),Y+=1,b}function H(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const V=n.get(b);if(b.isVideoTexture&&Ne(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(V,b,v);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function W(b,v){const V=n.get(b);if(b.version>0&&V.__version!==b.version){fe(V,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function $(b,v){const V=n.get(b);if(b.version>0&&V.__version!==b.version){fe(V,b,v);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function K(b,v){const V=n.get(b);if(b.version>0&&V.__version!==b.version){Ae(V,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}const ae={[qa]:i.REPEAT,[Yt]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},de={[At]:i.NEAREST,[Zo]:i.NEAREST_MIPMAP_NEAREST,[Qi]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Ce={[vf]:i.NEVER,[Tf]:i.ALWAYS,[yf]:i.LESS,[uu]:i.LEQUAL,[Sf]:i.EQUAL,[bf]:i.GEQUAL,[Mf]:i.GREATER,[Ef]:i.NOTEQUAL};function G(b,v,V){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===It||v.magFilter===ea||v.magFilter===Qi||v.magFilter===ai||v.minFilter===It||v.minFilter===ea||v.minFilter===Qi||v.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(i.texParameteri(b,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ae[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,de[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,de[v.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Yt||v.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,T(v.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==At&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===At||v.minFilter!==Qi&&v.minFilter!==ai||v.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(b,v){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",O));const q=v.source;let ie=m.get(q);ie===void 0&&(ie={},m.set(q,ie));const Q=H(v);if(Q!==b.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[Q].usedTimes++;const Pe=ie[b.__cacheKey];Pe!==void 0&&(ie[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(v)),b.__cacheKey=Q,b.__webglTexture=ie[Q].texture}return V}function fe(b,v,V){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const ie=ne(b,v),Q=v.source;t.bindTexture(q,b.__webglTexture,i.TEXTURE0+V);const Pe=n.get(Q);if(Q.version!==Pe.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);const Ee=qe.getPrimaries(qe.workingColorSpace),le=v.colorSpace===kn?null:qe.getPrimaries(v.colorSpace),ce=v.colorSpace===kn||Ee===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Le=M(v)&&p(v.image)===!1;let se=d(v.image,Le,!1,r.maxTextureSize);se=Oe(v,se);const st=p(se)||a,ze=s.convert(v.format,v.colorSpace);let ye=s.convert(v.type),me=R(v.internalFormat,ze,ye,v.colorSpace,v.isVideoTexture);G(q,v,st);let _e;const A=v.mipmaps,j=a&&v.isVideoTexture!==!0&&me!==lu,ge=Pe.__version===void 0||ie===!0,P=Q.dataReady,re=C(v,se,st);if(v.isDepthTexture)me=i.DEPTH_COMPONENT,a?v.type===Tn?me=i.DEPTH_COMPONENT32F:v.type===zn?me=i.DEPTH_COMPONENT24:v.type===ci?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:v.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ui&&me===i.DEPTH_COMPONENT&&v.type!==ho&&v.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=zn,ye=s.convert(v.type)),v.format===qi&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,v.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ci,ye=s.convert(v.type))),ge&&(j?t.texStorage2D(i.TEXTURE_2D,1,me,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,me,se.width,se.height,0,ze,ye,null));else if(v.isDataTexture)if(A.length>0&&st){j&&ge&&t.texStorage2D(i.TEXTURE_2D,re,me,A[0].width,A[0].height);for(let F=0,te=A.length;F<te;F++)_e=A[F],j?P&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,_e.width,_e.height,ze,ye,_e.data):t.texImage2D(i.TEXTURE_2D,F,me,_e.width,_e.height,0,ze,ye,_e.data);v.generateMipmaps=!1}else j?(ge&&t.texStorage2D(i.TEXTURE_2D,re,me,se.width,se.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,ze,ye,se.data)):t.texImage2D(i.TEXTURE_2D,0,me,se.width,se.height,0,ze,ye,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){j&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,me,A[0].width,A[0].height,se.depth);for(let F=0,te=A.length;F<te;F++)_e=A[F],v.format!==Zt?ze!==null?j?P&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,_e.width,_e.height,se.depth,ze,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,me,_e.width,_e.height,se.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,_e.width,_e.height,se.depth,ze,ye,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,me,_e.width,_e.height,se.depth,0,ze,ye,_e.data)}else{j&&ge&&t.texStorage2D(i.TEXTURE_2D,re,me,A[0].width,A[0].height);for(let F=0,te=A.length;F<te;F++)_e=A[F],v.format!==Zt?ze!==null?j?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,_e.width,_e.height,ze,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,F,me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?P&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,_e.width,_e.height,ze,ye,_e.data):t.texImage2D(i.TEXTURE_2D,F,me,_e.width,_e.height,0,ze,ye,_e.data)}else if(v.isDataArrayTexture)j?(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,me,se.width,se.height,se.depth),P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ze,ye,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,se.width,se.height,se.depth,0,ze,ye,se.data);else if(v.isData3DTexture)j?(ge&&t.texStorage3D(i.TEXTURE_3D,re,me,se.width,se.height,se.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ze,ye,se.data)):t.texImage3D(i.TEXTURE_3D,0,me,se.width,se.height,se.depth,0,ze,ye,se.data);else if(v.isFramebufferTexture){if(ge)if(j)t.texStorage2D(i.TEXTURE_2D,re,me,se.width,se.height);else{let F=se.width,te=se.height;for(let ue=0;ue<re;ue++)t.texImage2D(i.TEXTURE_2D,ue,me,F,te,0,ze,ye,null),F>>=1,te>>=1}}else if(A.length>0&&st){if(j&&ge){const F=et(A[0]);t.texStorage2D(i.TEXTURE_2D,re,me,F.width,F.height)}for(let F=0,te=A.length;F<te;F++)_e=A[F],j?P&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,ze,ye,_e):t.texImage2D(i.TEXTURE_2D,F,me,ze,ye,_e);v.generateMipmaps=!1}else if(j){if(ge){const F=et(se);t.texStorage2D(i.TEXTURE_2D,re,me,F.width,F.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,ye,se)}else t.texImage2D(i.TEXTURE_2D,0,me,ze,ye,se);x(v,st)&&E(q),Pe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ae(b,v,V){if(v.image.length!==6)return;const q=ne(b,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+V);const Q=n.get(ie);if(ie.version!==Q.__version||q===!0){t.activeTexture(i.TEXTURE0+V);const Pe=qe.getPrimaries(qe.workingColorSpace),Ee=v.colorSpace===kn?null:qe.getPrimaries(v.colorSpace),le=v.colorSpace===kn||Pe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ce=v.isCompressedTexture||v.image[0].isCompressedTexture,Le=v.image[0]&&v.image[0].isDataTexture,se=[];for(let F=0;F<6;F++)!ce&&!Le?se[F]=d(v.image[F],!1,!0,r.maxCubemapSize):se[F]=Le?v.image[F].image:v.image[F],se[F]=Oe(v,se[F]);const st=se[0],ze=p(st)||a,ye=s.convert(v.format,v.colorSpace),me=s.convert(v.type),_e=R(v.internalFormat,ye,me,v.colorSpace),A=a&&v.isVideoTexture!==!0,j=Q.__version===void 0||q===!0,ge=ie.dataReady;let P=C(v,st,ze);G(i.TEXTURE_CUBE_MAP,v,ze);let re;if(ce){A&&j&&t.texStorage2D(i.TEXTURE_CUBE_MAP,P,_e,st.width,st.height);for(let F=0;F<6;F++){re=se[F].mipmaps;for(let te=0;te<re.length;te++){const ue=re[te];v.format!==Zt?ye!==null?A?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te,0,0,ue.width,ue.height,ye,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te,0,0,ue.width,ue.height,ye,me,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te,_e,ue.width,ue.height,0,ye,me,ue.data)}}}else{if(re=v.mipmaps,A&&j){re.length>0&&P++;const F=et(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,P,_e,F.width,F.height)}for(let F=0;F<6;F++)if(Le){A?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,se[F].width,se[F].height,ye,me,se[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,_e,se[F].width,se[F].height,0,ye,me,se[F].data);for(let te=0;te<re.length;te++){const Ge=re[te].image[F].image;A?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te+1,0,0,Ge.width,Ge.height,ye,me,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te+1,_e,Ge.width,Ge.height,0,ye,me,Ge.data)}}else{A?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ye,me,se[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,_e,ye,me,se[F]);for(let te=0;te<re.length;te++){const ue=re[te];A?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te+1,0,0,ye,me,ue.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te+1,_e,ye,me,ue.image[F])}}}x(v,ze)&&E(i.TEXTURE_CUBE_MAP),Q.__version=ie.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ve(b,v,V,q,ie,Q){const Pe=s.convert(V.format,V.colorSpace),Ee=s.convert(V.type),le=R(V.internalFormat,Pe,Ee,V.colorSpace);if(!n.get(v).__hasExternalTextures){const Le=Math.max(1,v.width>>Q),se=Math.max(1,v.height>>Q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,le,Le,se,v.depth,0,Pe,Ee,null):t.texImage2D(ie,Q,le,Le,se,0,Pe,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Ve(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ie,n.get(V).__webglTexture,0,Me(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ie,n.get(V).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(b,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||Ve(v)){const ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Tn?q=i.DEPTH_COMPONENT32F:ie.type===zn&&(q=i.DEPTH_COMPONENT24));const Q=Me(v);Ve(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,q,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,q,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const q=Me(v);V&&Ve(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,v.width,v.height):Ve(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const q=v.textures;for(let ie=0;ie<q.length;ie++){const Q=q[ie],Pe=s.convert(Q.format,Q.colorSpace),Ee=s.convert(Q.type),le=R(Q.internalFormat,Pe,Ee,Q.colorSpace),ce=Me(v);V&&Ve(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,le,v.width,v.height):Ve(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const q=n.get(v.depthTexture).__webglTexture,ie=Me(v);if(v.depthTexture.format===ui)Ve(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(v.depthTexture.format===qi)Ve(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function we(b){const v=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Xe(v.__webglFramebuffer,b)}else if(V){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]=i.createRenderbuffer(),pe(v.__webglDepthbuffer[q],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),pe(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function U(b,v,V){const q=n.get(b);v!==void 0&&ve(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&we(b)}function ht(b){const v=b.texture,V=n.get(b),q=n.get(v);b.addEventListener("dispose",ee);const ie=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Pe=ie.length>1,Ee=p(b)||a;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let ce=0;ce<v.mipmaps.length;ce++)V.__webglFramebuffer[le][ce]=i.createFramebuffer()}else V.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)V.__webglFramebuffer[le]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pe)if(r.drawBuffers)for(let le=0,ce=ie.length;le<ce;le++){const Le=n.get(ie[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ve(b)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const ce=ie[le];V.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const Le=s.convert(ce.format,ce.colorSpace),se=s.convert(ce.type),st=R(ce.internalFormat,Le,se,ce.colorSpace,b.isXRRenderTarget===!0),ze=Me(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,st,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,V.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),G(i.TEXTURE_CUBE_MAP,v,Ee);for(let le=0;le<6;le++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ve(V.__webglFramebuffer[le][ce],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ce);else ve(V.__webglFramebuffer[le],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(v,Ee)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let le=0,ce=ie.length;le<ce;le++){const Le=ie[le],se=n.get(Le);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),G(i.TEXTURE_2D,Le,Ee),ve(V.__webglFramebuffer,b,Le,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),x(Le,Ee)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,q.__webglTexture),G(le,v,Ee),a&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)ve(V.__webglFramebuffer[ce],b,v,i.COLOR_ATTACHMENT0,le,ce);else ve(V.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,le,0);x(v,Ee)&&E(le),t.unbindTexture()}b.depthBuffer&&we(b)}function Se(b){const v=p(b)||a,V=b.textures;for(let q=0,ie=V.length;q<ie;q++){const Q=V[q];if(x(Q,v)){const Pe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get(Q).__webglTexture;t.bindTexture(Pe,Ee),E(Pe),t.unbindTexture()}}}function Ie(b){if(a&&b.samples>0&&Ve(b)===!1){const v=b.textures,V=b.width,q=b.height;let ie=i.COLOR_BUFFER_BIT;const Q=[],Pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(b),le=v.length>1;if(le)for(let ce=0;ce<v.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ce=0;ce<v.length;ce++){Q.push(i.COLOR_ATTACHMENT0+ce),b.depthBuffer&&Q.push(Pe);const Le=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Le===!1&&(b.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ce]),Le===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),le){const se=n.get(v[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let ce=0;ce<v.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ce]);const Le=n.get(v[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function Me(b){return Math.min(r.maxSamples,b.samples)}function Ve(b){const v=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ne(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Oe(b,v){const V=b.colorSpace,q=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Za||V!==$n&&V!==kn&&(qe.getTransfer(V)===nt?a===!1?e.has("EXT_sRGB")===!0&&q===Zt?(b.format=Za,b.minFilter=It,b.generateMipmaps=!1):v=pu.sRGBToLinear(v):(q!==Zt||ie!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=U,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ve}function z_(i,e,t){const n=t.isWebGL2;function r(s,o=kn){let a;const l=qe.getTransfer(o);if(s===Xn)return i.UNSIGNED_BYTE;if(s===iu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ru)return i.UNSIGNED_SHORT_5_5_5_1;if(s===lf)return i.BYTE;if(s===cf)return i.SHORT;if(s===ho)return i.UNSIGNED_SHORT;if(s===nu)return i.INT;if(s===zn)return i.UNSIGNED_INT;if(s===Tn)return i.FLOAT;if(s===xr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===uf)return i.ALPHA;if(s===Zt)return i.RGBA;if(s===hf)return i.LUMINANCE;if(s===ff)return i.LUMINANCE_ALPHA;if(s===ui)return i.DEPTH_COMPONENT;if(s===qi)return i.DEPTH_STENCIL;if(s===Za)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===df)return i.RED;if(s===su)return i.RED_INTEGER;if(s===pf)return i.RG;if(s===au)return i.RG_INTEGER;if(s===ou)return i.RGBA_INTEGER;if(s===ta||s===na||s===ia||s===ra)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ko||s===Jo||s===Qo||s===el)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===el)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tl||s===nl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===tl)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===il||s===rl||s===sl||s===al||s===ol||s===ll||s===cl||s===ul||s===hl||s===fl||s===dl||s===pl||s===ml||s===gl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===il)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===al)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ol)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ll)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ul)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ml)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sa||s===_l||s===xl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===sa)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_l)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mf||s===vl||s===yl||s===Sl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===sa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===vl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ci?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class H_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G_={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,n),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Rn({extensions:{fragDepth:!0},vertexShader:V_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rt(new Gs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class $_ extends _i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new X_,d=t.getContextAttributes();let p=null,M=null;const x=[],E=[],R=new Te;let C=null;const T=new Vt;T.layers.enable(1),T.viewport=new ot;const O=new Vt;O.layers.enable(2),O.viewport=new ot;const ee=[T,O],y=new H_;y.layers.enable(1),y.layers.enable(2);let w=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=x[G];return ne===void 0&&(ne=new Pa,x[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=x[G];return ne===void 0&&(ne=new Pa,x[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=x[G];return ne===void 0&&(ne=new Pa,x[G]=ne),ne.getHandSpace()};function Y(G){const ne=E.indexOf(G.inputSource);if(ne===-1)return;const fe=x[ne];fe!==void 0&&(fe.update(G.inputSource,G.frame,c||o),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",X);for(let G=0;G<x.length;G++){const ne=E[G];ne!==null&&(E[G]=null,x[G].disconnect(ne))}w=null,J=null,_.reset(),e.setRenderTarget(p),m=null,f=null,h=null,r=null,M=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",L),r.addEventListener("inputsourceschange",X),d.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new di(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ne=null,fe=null,Ae=null;d.depth&&(Ae=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=d.stencil?qi:ui,fe=d.stencil?ci:zn);const ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new di(f.textureWidth,f.textureHeight,{format:Zt,type:Xn,depthTexture:new Au(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const pe=e.properties.get(M);pe.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(G){for(let ne=0;ne<G.removed.length;ne++){const fe=G.removed[ne],Ae=E.indexOf(fe);Ae>=0&&(E[Ae]=null,x[Ae].disconnect(fe))}for(let ne=0;ne<G.added.length;ne++){const fe=G.added[ne];let Ae=E.indexOf(fe);if(Ae===-1){for(let pe=0;pe<x.length;pe++)if(pe>=E.length){E.push(fe),Ae=pe;break}else if(E[pe]===null){E[pe]=fe,Ae=pe;break}if(Ae===-1)break}const ve=x[Ae];ve&&ve.connect(fe)}}const H=new D,Z=new D;function W(G,ne,fe){H.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);const Ae=H.distanceTo(Z),ve=ne.projectionMatrix.elements,pe=fe.projectionMatrix.elements,Xe=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),U=(ve[9]+1)/ve[5],ht=(ve[9]-1)/ve[5],Se=(ve[8]-1)/ve[0],Ie=(pe[8]+1)/pe[0],Me=Xe*Se,Ve=Xe*Ie,Ne=Ae/(-Se+Ie),Oe=Ne*-Se;ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Oe),G.translateZ(Ne),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const et=Xe+Ne,b=we+Ne,v=Me-Oe,V=Ve+(Ae-Oe),q=U*we/b*et,ie=ht*we/b*et;G.projectionMatrix.makePerspective(v,V,q,ie,et,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function $(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),y.near=O.near=T.near=G.near,y.far=O.far=T.far=G.far,(w!==y.near||J!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,J=y.far,T.near=w,T.far=J,O.near=w,O.far=J,T.updateProjectionMatrix(),O.updateProjectionMatrix(),G.updateProjectionMatrix());const ne=G.parent,fe=y.cameras;$(y,ne);for(let Ae=0;Ae<fe.length;Ae++)$(fe[Ae],ne);fe.length===2?W(y,T,O):y.projectionMatrix.copy(T.projectionMatrix),K(G,y,ne)};function K(G,ne,fe){fe===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=vr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let ae=null;function de(G,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ae=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,Ae=!0);for(let pe=0;pe<fe.length;pe++){const Xe=fe[pe];let we=null;if(m!==null)we=m.getViewport(Xe);else{const ht=h.getViewSubImage(f,Xe);we=ht.viewport,pe===0&&(e.setRenderTargetTextures(M,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(M))}let U=ee[pe];U===void 0&&(U=new Vt,U.layers.enable(pe),U.viewport=new ot,ee[pe]=U),U.matrix.fromArray(Xe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Xe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(we.x,we.y,we.width,we.height),pe===0&&(y.matrix.copy(U.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ae===!0&&y.cameras.push(U)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const pe=h.getDepthInformation(fe[0]);pe&&pe.isValid&&pe.texture&&_.init(e,pe,r.renderState)}}for(let fe=0;fe<x.length;fe++){const Ae=E[fe],ve=x[fe];Ae!==null&&ve!==void 0&&ve.update(Ae,ne,c||o)}_.render(e,y),ae&&ae(G,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ce=new Tu;Ce.setAnimationLoop(de),this.setAnimationLoop=function(G){ae=G},this.dispose=function(){}}}const ni=new hn,q_=new lt;function j_(i,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Mu(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,M,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,E)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,M,x):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ot&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ot&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,E=M.envMapRotation;if(x&&(d.envMap.value=x,ni.copy(E),ni.x*=-1,ni.y*=-1,ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),d.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(ni)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const R=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*R,t(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,M,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*M,d.scale.value=x*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,M){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const M=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y_(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const E=x.program;n.uniformBlockBinding(M,E)}function c(M,x){let E=r[M.id];E===void 0&&(g(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",d));const R=x.program;n.updateUBOMapping(M,R);const C=e.render.frame;s[M.id]!==C&&(f(M),s[M.id]=C)}function u(M){const x=h();M.__bindingPointIndex=x;const E=i.createBuffer(),R=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=r[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,T=E.length;C<T;C++){const O=Array.isArray(E[C])?E[C]:[E[C]];for(let ee=0,y=O.length;ee<y;ee++){const w=O[ee];if(m(w,C,ee,R)===!0){const J=w.__offset,Y=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let X=0;X<Y.length;X++){const H=Y[X],Z=_(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,J+L,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,E,R){const C=M.value,T=x+"_"+E;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const O=R[T];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return R[T]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(M){const x=M.uniforms;let E=0;const R=16;for(let T=0,O=x.length;T<O;T++){const ee=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,w=ee.length;y<w;y++){const J=ee[y],Y=Array.isArray(J.value)?J.value:[J.value];for(let L=0,X=Y.length;L<X;L++){const H=Y[L],Z=_(H),W=E%R;W!==0&&R-W<Z.boundary&&(E+=R-W),J.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=E,E+=Z.storage}}}const C=E%R;return C>0&&(E+=R-C),M.__size=E,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function d(M){const x=M.target;x.removeEventListener("dispose",d);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Iu{constructor(e={}){const{canvas:t=zf(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let E=!1,R=0,C=0,T=null,O=-1,ee=null;const y=new ot,w=new ot;let J=null;const Y=new We(0);let L=0,X=t.width,H=t.height,Z=1,W=null,$=null;const K=new ot(0,0,X,H),ae=new ot(0,0,X,H);let de=!1;const Ce=new go;let G=!1,ne=!1,fe=null;const Ae=new lt,ve=new Te,pe=new D,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return T===null?Z:1}let U=n;function ht(S,I){for(let k=0;k<S.length;k++){const z=S[k],B=t.getContext(z,I);if(B!==null)return B}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),U=ht(I,S),U===null)throw ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Se,Ie,Me,Ve,Ne,Oe,et,b,v,V,q,ie,Q,Pe,Ee,le,ce,Le,se,st,ze,ye,me,_e;function A(){Se=new tg(U),Ie=new Ym(U,Se,e),Se.init(Ie),ye=new z_(U,Se,Ie),Me=new B_(U,Se,Ie),Ve=new rg(U),Ne=new b_,Oe=new k_(U,Se,Me,Ne,Ie,ye,Ve),et=new Km(x),b=new eg(x),v=new ud(U,Ie),me=new qm(U,Se,v,Ie),V=new ng(U,v,Ve,me),q=new lg(U,V,v,Ve),se=new og(U,Ie,Oe),le=new Zm(Ne),ie=new E_(x,et,b,Se,Ie,me,le),Q=new j_(x,Ne),Pe=new w_,Ee=new D_(Se,Ie),Le=new $m(x,et,b,Me,q,f,l),ce=new F_(x,q,Ie),_e=new Y_(U,Ve,Ie,Me),st=new jm(U,Se,Ve,Ie),ze=new ig(U,Se,Ve,Ie),Ve.programs=ie.programs,x.capabilities=Ie,x.extensions=Se,x.properties=Ne,x.renderLists=Pe,x.shadowMap=ce,x.state=Me,x.info=Ve}A();const j=new $_(x,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(X,H,!1))},this.getSize=function(S){return S.set(X,H)},this.setSize=function(S,I,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,H=I,t.width=Math.floor(S*Z),t.height=Math.floor(I*Z),k===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(X*Z,H*Z).floor()},this.setDrawingBufferSize=function(S,I,k){X=S,H=I,Z=k,t.width=Math.floor(S*k),t.height=Math.floor(I*k),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,I,k,z){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,I,k,z),Me.viewport(y.copy(K).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(ae)},this.setScissor=function(S,I,k,z){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,I,k,z),Me.scissor(w.copy(ae).multiplyScalar(Z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){Me.setScissorTest(de=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(S=!0,I=!0,k=!0){let z=0;if(S){let B=!1;if(T!==null){const he=T.texture.format;B=he===ou||he===au||he===su}if(B){const he=T.texture.type,xe=he===Xn||he===zn||he===ho||he===ci||he===iu||he===ru,be=Le.getClearColor(),Re=Le.getClearAlpha(),He=be.r,De=be.g,Ue=be.b;xe?(m[0]=He,m[1]=De,m[2]=Ue,m[3]=Re,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=He,g[1]=De,g[2]=Ue,g[3]=Re,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT),k&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Pe.dispose(),Ee.dispose(),Ne.dispose(),et.dispose(),b.dispose(),q.dispose(),me.dispose(),_e.dispose(),ie.dispose(),j.dispose(),j.removeEventListener("sessionstart",at),j.removeEventListener("sessionend",$e),fe&&(fe.dispose(),fe=null),tt.stop()};function ge(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Ve.autoReset,I=ce.enabled,k=ce.autoUpdate,z=ce.needsUpdate,B=ce.type;A(),Ve.autoReset=S,ce.enabled=I,ce.autoUpdate=k,ce.needsUpdate=z,ce.type=B}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function F(S){const I=S.target;I.removeEventListener("dispose",F),te(I)}function te(S){ue(S),Ne.remove(S)}function ue(S){const I=Ne.get(S).programs;I!==void 0&&(I.forEach(function(k){ie.releaseProgram(k)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,k,z,B,he){I===null&&(I=Xe);const xe=B.isMesh&&B.matrixWorld.determinant()<0,be=yh(S,I,k,z,B);Me.setMaterial(z,xe);let Re=k.index,He=1;if(z.wireframe===!0){if(Re=V.getWireframeAttribute(k),Re===void 0)return;He=2}const De=k.drawRange,Ue=k.attributes.position;let ct=De.start*He,Ft=(De.start+De.count)*He;he!==null&&(ct=Math.max(ct,he.start*He),Ft=Math.min(Ft,(he.start+he.count)*He)),Re!==null?(ct=Math.max(ct,0),Ft=Math.min(Ft,Re.count)):Ue!=null&&(ct=Math.max(ct,0),Ft=Math.min(Ft,Ue.count));const pt=Ft-ct;if(pt<0||pt===1/0)return;me.setup(B,z,be,k,Re);let pn,rt=st;if(Re!==null&&(pn=v.get(Re),rt=ze,rt.setIndex(pn)),B.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*we()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(B.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*we()),B.isLineSegments?rt.setMode(U.LINES):B.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else B.isPoints?rt.setMode(U.POINTS):B.isSprite&&rt.setMode(U.TRIANGLES);if(B.isBatchedMesh)rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)rt.renderInstances(ct,pt,B.count);else if(k.isInstancedBufferGeometry){const Fe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Zs=Math.min(k.instanceCount,Fe);rt.renderInstances(ct,pt,Zs)}else rt.render(ct,pt)};function Ge(S,I,k){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,Ir(S,I,k),S.side=un,S.needsUpdate=!0,Ir(S,I,k),S.side=bn):Ir(S,I,k)}this.compile=function(S,I,k=null){k===null&&(k=S),d=Ee.get(k),d.init(),M.push(d),k.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),S!==k&&S.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(x._useLegacyLights);const z=new Set;return S.traverse(function(B){const he=B.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const be=he[xe];Ge(be,k,B),z.add(be)}else Ge(he,k,B),z.add(he)}),M.pop(),d=null,z},this.compileAsync=function(S,I,k=null){const z=this.compile(S,I,k);return new Promise(B=>{function he(){if(z.forEach(function(xe){Ne.get(xe).currentProgram.isReady()&&z.delete(xe)}),z.size===0){B(S);return}setTimeout(he,10)}Se.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let je=null;function Je(S){je&&je(S)}function at(){tt.stop()}function $e(){tt.start()}const tt=new Tu;tt.setAnimationLoop(Je),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(S){je=S,j.setAnimationLoop(S),S===null?tt.stop():tt.start()},j.addEventListener("sessionstart",at),j.addEventListener("sessionend",$e),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,T),d=Ee.get(S,M.length),d.init(),M.push(d),Ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ce.setFromProjectionMatrix(Ae),ne=this.localClippingEnabled,G=le.init(this.clippingPlanes,ne),_=Pe.get(S,p.length),_.init(),p.push(_),St(S,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,$),this.info.render.frame++,G===!0&&le.beginShadows();const k=d.state.shadowsArray;if(ce.render(k,S,I),G===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1)&&Le.render(_,S),d.setupLights(x._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let B=0,he=z.length;B<he;B++){const xe=z[B];jn(_,S,xe,xe.viewport)}}else jn(_,S,I);T!==null&&(Oe.updateMultisampleRenderTarget(T),Oe.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(x,S,I),me.resetDefaultState(),O=-1,ee=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function St(S,I,k,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ce.intersectsSprite(S)){z&&pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ae);const xe=q.update(S),be=S.material;be.visible&&_.push(S,xe,be,k,pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ce.intersectsObject(S))){const xe=q.update(S),be=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),pe.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),pe.copy(xe.boundingSphere.center)),pe.applyMatrix4(S.matrixWorld).applyMatrix4(Ae)),Array.isArray(be)){const Re=xe.groups;for(let He=0,De=Re.length;He<De;He++){const Ue=Re[He],ct=be[Ue.materialIndex];ct&&ct.visible&&_.push(S,xe,ct,k,pe.z,Ue)}}else be.visible&&_.push(S,xe,be,k,pe.z,null)}}const he=S.children;for(let xe=0,be=he.length;xe<be;xe++)St(he[xe],I,k,z)}function jn(S,I,k,z){const B=S.opaque,he=S.transmissive,xe=S.transparent;d.setupLightsView(k),G===!0&&le.setGlobalState(x.clippingPlanes,k),he.length>0&&Lr(B,he,I,k),z&&Me.viewport(y.copy(z)),B.length>0&&Dr(B,I,k),he.length>0&&Dr(he,I,k),xe.length>0&&Dr(xe,I,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Lr(S,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const he=Ie.isWebGL2;fe===null&&(fe=new di(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?xr:Xn,minFilter:ai,samples:he?4:0})),x.getDrawingBufferSize(ve),he?fe.setSize(ve.x,ve.y):fe.setSize(Rs(ve.x),Rs(ve.y));const xe=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(Y),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const be=x.toneMapping;x.toneMapping=Wn,Dr(S,k,z),Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe);let Re=!1;for(let He=0,De=I.length;He<De;He++){const Ue=I[He],ct=Ue.object,Ft=Ue.geometry,pt=Ue.material,pn=Ue.group;if(pt.side===bn&&ct.layers.test(z.layers)){const rt=pt.side;pt.side=Ot,pt.needsUpdate=!0,ko(ct,k,z,Ft,pt,pn),pt.side=rt,pt.needsUpdate=!0,Re=!0}}Re===!0&&(Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe)),x.setRenderTarget(xe),x.setClearColor(Y,L),x.toneMapping=be}function Dr(S,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let B=0,he=S.length;B<he;B++){const xe=S[B],be=xe.object,Re=xe.geometry,He=z===null?xe.material:z,De=xe.group;be.layers.test(k.layers)&&ko(be,I,k,Re,He,De)}}function ko(S,I,k,z,B,he){S.onBeforeRender(x,I,k,z,B,he),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,I,k,z,S,he),B.transparent===!0&&B.side===bn&&B.forceSinglePass===!1?(B.side=Ot,B.needsUpdate=!0,x.renderBufferDirect(k,I,z,B,S,he),B.side=un,B.needsUpdate=!0,x.renderBufferDirect(k,I,z,B,S,he),B.side=bn):x.renderBufferDirect(k,I,z,B,S,he),S.onAfterRender(x,I,k,z,B,he)}function Ir(S,I,k){I.isScene!==!0&&(I=Xe);const z=Ne.get(S),B=d.state.lights,he=d.state.shadowsArray,xe=B.state.version,be=ie.getParameters(S,B.state,he,I,k),Re=ie.getProgramCacheKey(be);let He=z.programs;z.environment=S.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(S.isMeshStandardMaterial?b:et).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",F),He=new Map,z.programs=He);let De=He.get(Re);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===xe)return Ho(S,be),De}else be.uniforms=ie.getUniforms(S),S.onBuild(k,be,x),S.onBeforeCompile(be,x),De=ie.acquireProgram(be,Re),He.set(Re,De),z.uniforms=be.uniforms;const Ue=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=le.uniform),Ho(S,be),z.needsLights=Mh(S),z.lightsStateVersion=xe,z.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function zo(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=ds.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Ho(S,I){const k=Ne.get(S);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function yh(S,I,k,z,B){I.isScene!==!0&&(I=Xe),Oe.resetTextureUnits();const he=I.fog,xe=z.isMeshStandardMaterial?I.environment:null,be=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$n,Re=(z.isMeshStandardMaterial?b:et).get(z.envMap||xe),He=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ue=!!k.morphAttributes.position,ct=!!k.morphAttributes.normal,Ft=!!k.morphAttributes.color;let pt=Wn;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=x.toneMapping);const pn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=pn!==void 0?pn.length:0,Fe=Ne.get(z),Zs=d.state.lights;if(G===!0&&(ne===!0||S!==ee)){const Ht=S===ee&&z.id===O;le.setState(z,S,Ht)}let it=!1;z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Zs.state.version||Fe.outputColorSpace!==be||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==Re||z.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==le.numPlanes||Fe.numIntersection!==le.numIntersection)||Fe.vertexAlphas!==He||Fe.vertexTangents!==De||Fe.morphTargets!==Ue||Fe.morphNormals!==ct||Fe.morphColors!==Ft||Fe.toneMapping!==pt||Ie.isWebGL2===!0&&Fe.morphTargetsCount!==rt)&&(it=!0):(it=!0,Fe.__version=z.version);let Yn=Fe.currentProgram;it===!0&&(Yn=Ir(z,I,B));let Go=!1,Ji=!1,Ks=!1;const Mt=Yn.getUniforms(),Zn=Fe.uniforms;if(Me.useProgram(Yn.program)&&(Go=!0,Ji=!0,Ks=!0),z.id!==O&&(O=z.id,Ji=!0),Go||ee!==S){Mt.setValue(U,"projectionMatrix",S.projectionMatrix),Mt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Ht=Mt.map.cameraPosition;Ht!==void 0&&Ht.setValue(U,pe.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,Ji=!0,Ks=!0)}if(B.isSkinnedMesh){Mt.setOptional(U,B,"bindMatrix"),Mt.setOptional(U,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(Ie.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Mt.setValue(U,"boneTexture",Ht.boneTexture,Oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Mt.setOptional(U,B,"batchingTexture"),Mt.setValue(U,"batchingTexture",B._matricesTexture,Oe));const Js=k.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0&&Ie.isWebGL2===!0)&&se.update(B,k,Yn),(Ji||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,Mt.setValue(U,"receiveShadow",B.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Zn.envMap.value=Re,Zn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Ji&&(Mt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Sh(Zn,Ks),he&&z.fog===!0&&Q.refreshFogUniforms(Zn,he),Q.refreshMaterialUniforms(Zn,z,Z,H,fe),ds.upload(U,zo(Fe),Zn,Oe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ds.upload(U,zo(Fe),Zn,Oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(U,"center",B.center),Mt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Mt.setValue(U,"normalMatrix",B.normalMatrix),Mt.setValue(U,"modelMatrix",B.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ht=z.uniformsGroups;for(let Qs=0,Eh=Ht.length;Qs<Eh;Qs++)if(Ie.isWebGL2){const Vo=Ht[Qs];_e.update(Vo,Yn),_e.bind(Vo,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function Sh(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Mh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,I,k){Ne.get(S.texture).__webglTexture=I,Ne.get(S.depthTexture).__webglTexture=k;const z=Ne.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const k=Ne.get(S);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,k=0){T=S,R=I,C=k;let z=!0,B=null,he=!1,xe=!1;if(S){const Re=Ne.get(S);Re.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Re.__webglFramebuffer===void 0?Oe.setupRenderTarget(S):Re.__hasExternalTextures&&Oe.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(xe=!0);const De=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[I])?B=De[I][k]:B=De[I],he=!0):Ie.isWebGL2&&S.samples>0&&Oe.useMultisampledRTT(S)===!1?B=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?B=De[k]:B=De,y.copy(S.viewport),w.copy(S.scissor),J=S.scissorTest}else y.copy(K).multiplyScalar(Z).floor(),w.copy(ae).multiplyScalar(Z).floor(),J=de;if(Me.bindFramebuffer(U.FRAMEBUFFER,B)&&Ie.drawBuffers&&z&&Me.drawBuffers(S,B),Me.viewport(y),Me.scissor(w),Me.setScissorTest(J),he){const Re=Ne.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,k)}else if(xe){const Re=Ne.get(S.texture),He=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,k||0,He)}O=-1},this.readRenderTargetPixels=function(S,I,k,z,B,he,xe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){Me.bindFramebuffer(U.FRAMEBUFFER,be);try{const Re=S.texture,He=Re.format,De=Re.type;if(He!==Zt&&ye.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===xr&&(Se.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Se.has("EXT_color_buffer_float"));if(De!==Xn&&ye.convert(De)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Tn&&(Ie.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&k>=0&&k<=S.height-B&&U.readPixels(I,k,z,B,ye.convert(He),ye.convert(De),he)}finally{const Re=T!==null?Ne.get(T).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(S,I,k=0){const z=Math.pow(2,-k),B=Math.floor(I.image.width*z),he=Math.floor(I.image.height*z);Oe.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,S.x,S.y,B,he),Me.unbindTexture()},this.copyTextureToTexture=function(S,I,k,z=0){const B=I.image.width,he=I.image.height,xe=ye.convert(k.format),be=ye.convert(k.type);Oe.setTexture2D(k,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,B,he,xe,be,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,xe,be,I.image),z===0&&k.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,I,k,z,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=Math.round(S.max.x-S.min.x),xe=Math.round(S.max.y-S.min.y),be=S.max.z-S.min.z+1,Re=ye.convert(z.format),He=ye.convert(z.type);let De;if(z.isData3DTexture)Oe.setTexture3D(z,0),De=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Oe.setTexture2DArray(z,0),De=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Ue=U.getParameter(U.UNPACK_ROW_LENGTH),ct=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ft=U.getParameter(U.UNPACK_SKIP_PIXELS),pt=U.getParameter(U.UNPACK_SKIP_ROWS),pn=U.getParameter(U.UNPACK_SKIP_IMAGES),rt=k.isCompressedTexture?k.mipmaps[B]:k.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?U.texSubImage3D(De,B,I.x,I.y,I.z,he,xe,be,Re,He,rt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(De,B,I.x,I.y,I.z,he,xe,be,Re,rt.data):U.texSubImage3D(De,B,I.x,I.y,I.z,he,xe,be,Re,He,rt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ue),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ft),U.pixelStorei(U.UNPACK_SKIP_ROWS,pt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,pn),B===0&&z.generateMipmaps&&U.generateMipmap(De),Me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Oe.setTextureCube(S,0):S.isData3DTexture?Oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Oe.setTexture2DArray(S,0):Oe.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,Me.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fo?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===zs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Z_ extends Iu{}Z_.prototype.isWebGL1Renderer=!0;class K_ extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class J_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return du("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new D;class Gn{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xi extends fn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,m=[],g=[],_=[],d=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){const C=R/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),d.push(C+E,1-x),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=u[p][M+1],E=u[p][M],R=u[p+1][M],C=u[p+1][M+1];(p!==0||o>0)&&m.push(x,E,C),(p!==n-1||l<Math.PI)&&m.push(E,R,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Q_ extends fn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,m=h.count;for(let g=f,_=f+m;g<_;g+=3)for(let d=0;d<3;d++){const p=a.getX(g+d),M=a.getX(g+(d+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,M),hc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),hc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new zt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function hc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class xo extends wr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const fc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class e0{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const t0=new e0;class vo{constructor(e){this.manager=e!==void 0?e:t0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vo.DEFAULT_MATERIAL_NAME="__DEFAULT";class n0 extends vo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=yr("img");function l(){u(),fc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ws extends vo{constructor(e){super(e)}load(e,t,n,r){const s=new Pt,o=new n0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class yo extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class i0 extends yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const La=new lt,dc=new D,pc=new D;class r0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s0 extends r0{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a0 extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new s0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class o0 extends yo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class l0 extends fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Qa extends J_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class mc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gc=new D,ts=new D;class c0{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gc.subVectors(e,this.start),ts.subVectors(this.end,this.start);const n=ts.dot(ts);let s=ts.dot(gc)/n;return t&&(s=vt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);var u0={value:()=>{}};function Nu(){for(var i=0,e=arguments.length,t={},n;i<e;++i){if(!(n=arguments[i]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new ps(t)}function ps(i){this._=i}function h0(i,e){return i.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}ps.prototype=Nu.prototype={constructor:ps,on:function(i,e){var t=this._,n=h0(i+"",t),r,s=-1,o=n.length;if(arguments.length<2){for(;++s<o;)if((r=(i=n[s]).type)&&(r=f0(t[r],i.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(i=n[s]).type)t[r]=_c(t[r],i.name,e);else if(e==null)for(r in t)t[r]=_c(t[r],i.name,null);return this},copy:function(){var i={},e=this._;for(var t in e)i[t]=e[t].slice();return new ps(i)},call:function(i,e){if((r=arguments.length-2)>0)for(var t=new Array(r),n=0,r,s;n<r;++n)t[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(e,t)},apply:function(i,e,t){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(e,t)}};function f0(i,e){for(var t=0,n=i.length,r;t<n;++t)if((r=i[t]).name===e)return r.value}function _c(i,e,t){for(var n=0,r=i.length;n<r;++n)if(i[n].name===e){i[n]=u0,i=i.slice(0,n).concat(i.slice(n+1));break}return t!=null&&i.push({name:e,value:t}),i}var eo="http://www.w3.org/1999/xhtml";const xc={svg:"http://www.w3.org/2000/svg",xhtml:eo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Xs(i){var e=i+="",t=e.indexOf(":");return t>=0&&(e=i.slice(0,t))!=="xmlns"&&(i=i.slice(t+1)),xc.hasOwnProperty(e)?{space:xc[e],local:i}:i}function d0(i){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===eo&&e.documentElement.namespaceURI===eo?e.createElement(i):e.createElementNS(t,i)}}function p0(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function Uu(i){var e=Xs(i);return(e.local?p0:d0)(e)}function m0(){}function So(i){return i==null?m0:function(){return this.querySelector(i)}}function g0(i){typeof i!="function"&&(i=So(i));for(var e=this._groups,t=e.length,n=new Array(t),r=0;r<t;++r)for(var s=e[r],o=s.length,a=n[r]=new Array(o),l,c,u=0;u<o;++u)(l=s[u])&&(c=i.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new en(n,this._parents)}function _0(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function x0(){return[]}function Ou(i){return i==null?x0:function(){return this.querySelectorAll(i)}}function v0(i){return function(){return _0(i.apply(this,arguments))}}function y0(i){typeof i=="function"?i=v0(i):i=Ou(i);for(var e=this._groups,t=e.length,n=[],r=[],s=0;s<t;++s)for(var o=e[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(n.push(i.call(l,l.__data__,c,o)),r.push(l));return new en(n,r)}function Fu(i){return function(){return this.matches(i)}}function Bu(i){return function(e){return e.matches(i)}}var S0=Array.prototype.find;function M0(i){return function(){return S0.call(this.children,i)}}function E0(){return this.firstElementChild}function b0(i){return this.select(i==null?E0:M0(typeof i=="function"?i:Bu(i)))}var T0=Array.prototype.filter;function w0(){return Array.from(this.children)}function A0(i){return function(){return T0.call(this.children,i)}}function R0(i){return this.selectAll(i==null?w0:A0(typeof i=="function"?i:Bu(i)))}function C0(i){typeof i!="function"&&(i=Fu(i));for(var e=this._groups,t=e.length,n=new Array(t),r=0;r<t;++r)for(var s=e[r],o=s.length,a=n[r]=[],l,c=0;c<o;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&a.push(l);return new en(n,this._parents)}function ku(i){return new Array(i.length)}function P0(){return new en(this._enter||this._groups.map(ku),this._parents)}function Cs(i,e){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=e}Cs.prototype={constructor:Cs,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,e){return this._parent.insertBefore(i,e)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function L0(i){return function(){return i}}function D0(i,e,t,n,r,s){for(var o=0,a,l=e.length,c=s.length;o<c;++o)(a=e[o])?(a.__data__=s[o],n[o]=a):t[o]=new Cs(i,s[o]);for(;o<l;++o)(a=e[o])&&(r[o]=a)}function I0(i,e,t,n,r,s,o){var a,l,c=new Map,u=e.length,h=s.length,f=new Array(u),m;for(a=0;a<u;++a)(l=e[a])&&(f[a]=m=o.call(l,l.__data__,a,e)+"",c.has(m)?r[a]=l:c.set(m,l));for(a=0;a<h;++a)m=o.call(i,s[a],a,s)+"",(l=c.get(m))?(n[a]=l,l.__data__=s[a],c.delete(m)):t[a]=new Cs(i,s[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(f[a])===l&&(r[a]=l)}function N0(i){return i.__data__}function U0(i,e){if(!arguments.length)return Array.from(this,N0);var t=e?I0:D0,n=this._parents,r=this._groups;typeof i!="function"&&(i=L0(i));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=n[c],h=r[c],f=h.length,m=O0(i.call(u,u&&u.__data__,c,n)),g=m.length,_=a[c]=new Array(g),d=o[c]=new Array(g),p=l[c]=new Array(f);t(u,h,_,d,p,m,e);for(var M=0,x=0,E,R;M<g;++M)if(E=_[M]){for(M>=x&&(x=M+1);!(R=d[x])&&++x<g;);E._next=R||null}}return o=new en(o,n),o._enter=a,o._exit=l,o}function O0(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function F0(){return new en(this._exit||this._groups.map(ku),this._parents)}function B0(i,e,t){var n=this.enter(),r=this,s=this.exit();return typeof i=="function"?(n=i(n),n&&(n=n.selection())):n=n.append(i+""),e!=null&&(r=e(r),r&&(r=r.selection())),t==null?s.remove():t(s),n&&r?n.merge(r).order():r}function k0(i){for(var e=i.selection?i.selection():i,t=this._groups,n=e._groups,r=t.length,s=n.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=t[l],u=n[l],h=c.length,f=a[l]=new Array(h),m,g=0;g<h;++g)(m=c[g]||u[g])&&(f[g]=m);for(;l<r;++l)a[l]=t[l];return new en(a,this._parents)}function z0(){for(var i=this._groups,e=-1,t=i.length;++e<t;)for(var n=i[e],r=n.length-1,s=n[r],o;--r>=0;)(o=n[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function H0(i){i||(i=G0);function e(h,f){return h&&f?i(h.__data__,f.__data__):!h-!f}for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s){for(var o=t[s],a=o.length,l=r[s]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(e)}return new en(r,this._parents).order()}function G0(i,e){return i<e?-1:i>e?1:i>=e?0:NaN}function V0(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function W0(){return Array.from(this)}function X0(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var n=i[e],r=0,s=n.length;r<s;++r){var o=n[r];if(o)return o}return null}function $0(){let i=0;for(const e of this)++i;return i}function q0(){return!this.node()}function j0(i){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,o=r.length,a;s<o;++s)(a=r[s])&&i.call(a,a.__data__,s,r);return this}function Y0(i){return function(){this.removeAttribute(i)}}function Z0(i){return function(){this.removeAttributeNS(i.space,i.local)}}function K0(i,e){return function(){this.setAttribute(i,e)}}function J0(i,e){return function(){this.setAttributeNS(i.space,i.local,e)}}function Q0(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(i):this.setAttribute(i,t)}}function ex(i,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,t)}}function tx(i,e){var t=Xs(i);if(arguments.length<2){var n=this.node();return t.local?n.getAttributeNS(t.space,t.local):n.getAttribute(t)}return this.each((e==null?t.local?Z0:Y0:typeof e=="function"?t.local?ex:Q0:t.local?J0:K0)(t,e))}function zu(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function nx(i){return function(){this.style.removeProperty(i)}}function ix(i,e,t){return function(){this.style.setProperty(i,e,t)}}function rx(i,e,t){return function(){var n=e.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,t)}}function sx(i,e,t){return arguments.length>1?this.each((e==null?nx:typeof e=="function"?rx:ix)(i,e,t??"")):Yi(this.node(),i)}function Yi(i,e){return i.style.getPropertyValue(e)||zu(i).getComputedStyle(i,null).getPropertyValue(e)}function ax(i){return function(){delete this[i]}}function ox(i,e){return function(){this[i]=e}}function lx(i,e){return function(){var t=e.apply(this,arguments);t==null?delete this[i]:this[i]=t}}function cx(i,e){return arguments.length>1?this.each((e==null?ax:typeof e=="function"?lx:ox)(i,e)):this.node()[i]}function Hu(i){return i.trim().split(/^|\s+/)}function Mo(i){return i.classList||new Gu(i)}function Gu(i){this._node=i,this._names=Hu(i.getAttribute("class")||"")}Gu.prototype={add:function(i){var e=this._names.indexOf(i);e<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var e=this._names.indexOf(i);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function Vu(i,e){for(var t=Mo(i),n=-1,r=e.length;++n<r;)t.add(e[n])}function Wu(i,e){for(var t=Mo(i),n=-1,r=e.length;++n<r;)t.remove(e[n])}function ux(i){return function(){Vu(this,i)}}function hx(i){return function(){Wu(this,i)}}function fx(i,e){return function(){(e.apply(this,arguments)?Vu:Wu)(this,i)}}function dx(i,e){var t=Hu(i+"");if(arguments.length<2){for(var n=Mo(this.node()),r=-1,s=t.length;++r<s;)if(!n.contains(t[r]))return!1;return!0}return this.each((typeof e=="function"?fx:e?ux:hx)(t,e))}function px(){this.textContent=""}function mx(i){return function(){this.textContent=i}}function gx(i){return function(){var e=i.apply(this,arguments);this.textContent=e??""}}function _x(i){return arguments.length?this.each(i==null?px:(typeof i=="function"?gx:mx)(i)):this.node().textContent}function xx(){this.innerHTML=""}function vx(i){return function(){this.innerHTML=i}}function yx(i){return function(){var e=i.apply(this,arguments);this.innerHTML=e??""}}function Sx(i){return arguments.length?this.each(i==null?xx:(typeof i=="function"?yx:vx)(i)):this.node().innerHTML}function Mx(){this.nextSibling&&this.parentNode.appendChild(this)}function Ex(){return this.each(Mx)}function bx(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Tx(){return this.each(bx)}function wx(i){var e=typeof i=="function"?i:Uu(i);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Ax(){return null}function Rx(i,e){var t=typeof i=="function"?i:Uu(i),n=e==null?Ax:typeof e=="function"?e:So(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)})}function Cx(){var i=this.parentNode;i&&i.removeChild(this)}function Px(){return this.each(Cx)}function Lx(){var i=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function Dx(){var i=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(i,this.nextSibling):i}function Ix(i){return this.select(i?Dx:Lx)}function Nx(i){return arguments.length?this.property("__data__",i):this.node().__data__}function Ux(i){return function(e){i.call(this,e,this.__data__)}}function Ox(i){return i.trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function Fx(i){return function(){var e=this.__on;if(e){for(var t=0,n=-1,r=e.length,s;t<r;++t)s=e[t],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.options):e[++n]=s;++n?e.length=n:delete this.__on}}}function Bx(i,e,t){return function(){var n=this.__on,r,s=Ux(e);if(n){for(var o=0,a=n.length;o<a;++o)if((r=n[o]).type===i.type&&r.name===i.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=t),r.value=e;return}}this.addEventListener(i.type,s,t),r={type:i.type,name:i.name,value:e,listener:s,options:t},n?n.push(r):this.__on=[r]}}function kx(i,e,t){var n=Ox(i+""),r,s=n.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<s;++r)if((o=n[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=e?Bx:Fx,r=0;r<s;++r)this.each(a(n[r],e,t));return this}function Xu(i,e,t){var n=zu(i),r=n.CustomEvent;typeof r=="function"?r=new r(e,t):(r=n.document.createEvent("Event"),t?(r.initEvent(e,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(e,!1,!1)),i.dispatchEvent(r)}function zx(i,e){return function(){return Xu(this,i,e)}}function Hx(i,e){return function(){return Xu(this,i,e.apply(this,arguments))}}function Gx(i,e){return this.each((typeof e=="function"?Hx:zx)(i,e))}function*Vx(){for(var i=this._groups,e=0,t=i.length;e<t;++e)for(var n=i[e],r=0,s=n.length,o;r<s;++r)(o=n[r])&&(yield o)}var Wx=[null];function en(i,e){this._groups=i,this._parents=e}function Rr(){return new en([[document.documentElement]],Wx)}function Xx(){return this}en.prototype=Rr.prototype={constructor:en,select:g0,selectAll:y0,selectChild:b0,selectChildren:R0,filter:C0,data:U0,enter:P0,exit:F0,join:B0,merge:k0,selection:Xx,order:z0,sort:H0,call:V0,nodes:W0,node:X0,size:$0,empty:q0,each:j0,attr:tx,style:sx,property:cx,classed:dx,text:_x,html:Sx,raise:Ex,lower:Tx,append:wx,insert:Rx,remove:Px,clone:Ix,datum:Nx,on:kx,dispatch:Gx,[Symbol.iterator]:Vx};function Eo(i,e,t){i.prototype=e.prototype=t,t.constructor=i}function $u(i,e){var t=Object.create(i.prototype);for(var n in e)t[n]=e[n];return t}function Cr(){}var Sr=.7,Ps=1/Sr,Wi="\\s*([+-]?\\d+)\\s*",Mr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",cn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",$x=/^#([0-9a-f]{3,8})$/,qx=new RegExp(`^rgb\\(${Wi},${Wi},${Wi}\\)$`),jx=new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`),Yx=new RegExp(`^rgba\\(${Wi},${Wi},${Wi},${Mr}\\)$`),Zx=new RegExp(`^rgba\\(${cn},${cn},${cn},${Mr}\\)$`),Kx=new RegExp(`^hsl\\(${Mr},${cn},${cn}\\)$`),Jx=new RegExp(`^hsla\\(${Mr},${cn},${cn},${Mr}\\)$`),vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Eo(Cr,Er,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:yc,formatHex:yc,formatHex8:Qx,formatHsl:ev,formatRgb:Sc,toString:Sc});function yc(){return this.rgb().formatHex()}function Qx(){return this.rgb().formatHex8()}function ev(){return qu(this).formatHsl()}function Sc(){return this.rgb().formatRgb()}function Er(i){var e,t;return i=(i+"").trim().toLowerCase(),(e=$x.exec(i))?(t=e[1].length,e=parseInt(e[1],16),t===6?Mc(e):t===3?new Ut(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?ns(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?ns(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=qx.exec(i))?new Ut(e[1],e[2],e[3],1):(e=jx.exec(i))?new Ut(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Yx.exec(i))?ns(e[1],e[2],e[3],e[4]):(e=Zx.exec(i))?ns(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Kx.exec(i))?Tc(e[1],e[2]/100,e[3]/100,1):(e=Jx.exec(i))?Tc(e[1],e[2]/100,e[3]/100,e[4]):vc.hasOwnProperty(i)?Mc(vc[i]):i==="transparent"?new Ut(NaN,NaN,NaN,0):null}function Mc(i){return new Ut(i>>16&255,i>>8&255,i&255,1)}function ns(i,e,t,n){return n<=0&&(i=e=t=NaN),new Ut(i,e,t,n)}function tv(i){return i instanceof Cr||(i=Er(i)),i?(i=i.rgb(),new Ut(i.r,i.g,i.b,i.opacity)):new Ut}function to(i,e,t,n){return arguments.length===1?tv(i):new Ut(i,e,t,n??1)}function Ut(i,e,t,n){this.r=+i,this.g=+e,this.b=+t,this.opacity=+n}Eo(Ut,to,$u(Cr,{brighter(i){return i=i==null?Ps:Math.pow(Ps,i),new Ut(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?Sr:Math.pow(Sr,i),new Ut(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Ut(hi(this.r),hi(this.g),hi(this.b),Ls(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ec,formatHex:Ec,formatHex8:nv,formatRgb:bc,toString:bc}));function Ec(){return`#${oi(this.r)}${oi(this.g)}${oi(this.b)}`}function nv(){return`#${oi(this.r)}${oi(this.g)}${oi(this.b)}${oi((isNaN(this.opacity)?1:this.opacity)*255)}`}function bc(){const i=Ls(this.opacity);return`${i===1?"rgb(":"rgba("}${hi(this.r)}, ${hi(this.g)}, ${hi(this.b)}${i===1?")":`, ${i})`}`}function Ls(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function hi(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function oi(i){return i=hi(i),(i<16?"0":"")+i.toString(16)}function Tc(i,e,t,n){return n<=0?i=e=t=NaN:t<=0||t>=1?i=e=NaN:e<=0&&(i=NaN),new Jt(i,e,t,n)}function qu(i){if(i instanceof Jt)return new Jt(i.h,i.s,i.l,i.opacity);if(i instanceof Cr||(i=Er(i)),!i)return new Jt;if(i instanceof Jt)return i;i=i.rgb();var e=i.r/255,t=i.g/255,n=i.b/255,r=Math.min(e,t,n),s=Math.max(e,t,n),o=NaN,a=s-r,l=(s+r)/2;return a?(e===s?o=(t-n)/a+(t<n)*6:t===s?o=(n-e)/a+2:o=(e-t)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new Jt(o,a,l,i.opacity)}function iv(i,e,t,n){return arguments.length===1?qu(i):new Jt(i,e,t,n??1)}function Jt(i,e,t,n){this.h=+i,this.s=+e,this.l=+t,this.opacity=+n}Eo(Jt,iv,$u(Cr,{brighter(i){return i=i==null?Ps:Math.pow(Ps,i),new Jt(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?Sr:Math.pow(Sr,i),new Jt(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,e=isNaN(i)||isNaN(this.s)?0:this.s,t=this.l,n=t+(t<.5?t:1-t)*e,r=2*t-n;return new Ut(Da(i>=240?i-240:i+120,r,n),Da(i,r,n),Da(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new Jt(wc(this.h),is(this.s),is(this.l),Ls(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=Ls(this.opacity);return`${i===1?"hsl(":"hsla("}${wc(this.h)}, ${is(this.s)*100}%, ${is(this.l)*100}%${i===1?")":`, ${i})`}`}}));function wc(i){return i=(i||0)%360,i<0?i+360:i}function is(i){return Math.max(0,Math.min(1,i||0))}function Da(i,e,t){return(i<60?e+(t-e)*i/60:i<180?t:i<240?e+(t-e)*(240-i)/60:e)*255}const ju=i=>()=>i;function rv(i,e){return function(t){return i+t*e}}function sv(i,e,t){return i=Math.pow(i,t),e=Math.pow(e,t)-i,t=1/t,function(n){return Math.pow(i+n*e,t)}}function av(i){return(i=+i)==1?Yu:function(e,t){return t-e?sv(e,t,i):ju(isNaN(e)?t:e)}}function Yu(i,e){var t=e-i;return t?rv(i,t):ju(isNaN(i)?e:i)}const Ac=function i(e){var t=av(e);function n(r,s){var o=t((r=to(r)).r,(s=to(s)).r),a=t(r.g,s.g),l=t(r.b,s.b),c=Yu(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return n.gamma=i,n}(1);function Bn(i,e){return i=+i,e=+e,function(t){return i*(1-t)+e*t}}var no=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ia=new RegExp(no.source,"g");function ov(i){return function(){return i}}function lv(i){return function(e){return i(e)+""}}function cv(i,e){var t=no.lastIndex=Ia.lastIndex=0,n,r,s,o=-1,a=[],l=[];for(i=i+"",e=e+"";(n=no.exec(i))&&(r=Ia.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(n=n[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:Bn(n,r)})),t=Ia.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?lv(l[0].x):ov(e):(e=l.length,function(c){for(var u=0,h;u<e;++u)a[(h=l[u]).i]=h.x(c);return a.join("")})}var Rc=180/Math.PI,io={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Zu(i,e,t,n,r,s){var o,a,l;return(o=Math.sqrt(i*i+e*e))&&(i/=o,e/=o),(l=i*t+e*n)&&(t-=i*l,n-=e*l),(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a,l/=a),i*n<e*t&&(i=-i,e=-e,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(e,i)*Rc,skewX:Math.atan(l)*Rc,scaleX:o,scaleY:a}}var rs;function uv(i){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return e.isIdentity?io:Zu(e.a,e.b,e.c,e.d,e.e,e.f)}function hv(i){return i==null||(rs||(rs=document.createElementNS("http://www.w3.org/2000/svg","g")),rs.setAttribute("transform",i),!(i=rs.transform.baseVal.consolidate()))?io:(i=i.matrix,Zu(i.a,i.b,i.c,i.d,i.e,i.f))}function Ku(i,e,t,n){function r(c){return c.length?c.pop()+" ":""}function s(c,u,h,f,m,g){if(c!==h||u!==f){var _=m.push("translate(",null,e,null,t);g.push({i:_-4,x:Bn(c,h)},{i:_-2,x:Bn(u,f)})}else(h||f)&&m.push("translate("+h+e+f+t)}function o(c,u,h,f){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),f.push({i:h.push(r(h)+"rotate(",null,n)-2,x:Bn(c,u)})):u&&h.push(r(h)+"rotate("+u+n)}function a(c,u,h,f){c!==u?f.push({i:h.push(r(h)+"skewX(",null,n)-2,x:Bn(c,u)}):u&&h.push(r(h)+"skewX("+u+n)}function l(c,u,h,f,m,g){if(c!==h||u!==f){var _=m.push(r(m)+"scale(",null,",",null,")");g.push({i:_-4,x:Bn(c,h)},{i:_-2,x:Bn(u,f)})}else(h!==1||f!==1)&&m.push(r(m)+"scale("+h+","+f+")")}return function(c,u){var h=[],f=[];return c=i(c),u=i(u),s(c.translateX,c.translateY,u.translateX,u.translateY,h,f),o(c.rotate,u.rotate,h,f),a(c.skewX,u.skewX,h,f),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,f),c=u=null,function(m){for(var g=-1,_=f.length,d;++g<_;)h[(d=f[g]).i]=d.x(m);return h.join("")}}}var fv=Ku(uv,"px, ","px)","deg)"),dv=Ku(hv,", ",")",")"),Zi=0,lr=0,rr=0,Ju=1e3,Ds,cr,Is=0,mi=0,$s=0,br=typeof performance=="object"&&performance.now?performance:Date,Qu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function bo(){return mi||(Qu(pv),mi=br.now()+$s)}function pv(){mi=0}function Ns(){this._call=this._time=this._next=null}Ns.prototype=eh.prototype={constructor:Ns,restart:function(i,e,t){if(typeof i!="function")throw new TypeError("callback is not a function");t=(t==null?bo():+t)+(e==null?0:+e),!this._next&&cr!==this&&(cr?cr._next=this:Ds=this,cr=this),this._call=i,this._time=t,ro()},stop:function(){this._call&&(this._call=null,this._time=1/0,ro())}};function eh(i,e,t){var n=new Ns;return n.restart(i,e,t),n}function mv(){bo(),++Zi;for(var i=Ds,e;i;)(e=mi-i._time)>=0&&i._call.call(void 0,e),i=i._next;--Zi}function Cc(){mi=(Is=br.now())+$s,Zi=lr=0;try{mv()}finally{Zi=0,_v(),mi=0}}function gv(){var i=br.now(),e=i-Is;e>Ju&&($s-=e,Is=i)}function _v(){for(var i,e=Ds,t,n=1/0;e;)e._call?(n>e._time&&(n=e._time),i=e,e=e._next):(t=e._next,e._next=null,e=i?i._next=t:Ds=t);cr=i,ro(n)}function ro(i){if(!Zi){lr&&(lr=clearTimeout(lr));var e=i-mi;e>24?(i<1/0&&(lr=setTimeout(Cc,i-br.now()-$s)),rr&&(rr=clearInterval(rr))):(rr||(Is=br.now(),rr=setInterval(gv,Ju)),Zi=1,Qu(Cc))}}function Pc(i,e,t){var n=new Ns;return e=e==null?0:+e,n.restart(r=>{n.stop(),i(r+e)},e,t),n}var xv=Nu("start","end","cancel","interrupt"),vv=[],th=0,Lc=1,so=2,ms=3,Dc=4,ao=5,gs=6;function qs(i,e,t,n,r,s){var o=i.__transition;if(!o)i.__transition={};else if(t in o)return;yv(i,t,{name:e,index:n,group:r,on:xv,tween:vv,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:th})}function To(i,e){var t=tn(i,e);if(t.state>th)throw new Error("too late; already scheduled");return t}function dn(i,e){var t=tn(i,e);if(t.state>ms)throw new Error("too late; already running");return t}function tn(i,e){var t=i.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function yv(i,e,t){var n=i.__transition,r;n[e]=t,t.timer=eh(s,0,t.time);function s(c){t.state=Lc,t.timer.restart(o,t.delay,t.time),t.delay<=c&&o(c-t.delay)}function o(c){var u,h,f,m;if(t.state!==Lc)return l();for(u in n)if(m=n[u],m.name===t.name){if(m.state===ms)return Pc(o);m.state===Dc?(m.state=gs,m.timer.stop(),m.on.call("interrupt",i,i.__data__,m.index,m.group),delete n[u]):+u<e&&(m.state=gs,m.timer.stop(),m.on.call("cancel",i,i.__data__,m.index,m.group),delete n[u])}if(Pc(function(){t.state===ms&&(t.state=Dc,t.timer.restart(a,t.delay,t.time),a(c))}),t.state=so,t.on.call("start",i,i.__data__,t.index,t.group),t.state===so){for(t.state=ms,r=new Array(f=t.tween.length),u=0,h=-1;u<f;++u)(m=t.tween[u].value.call(i,i.__data__,t.index,t.group))&&(r[++h]=m);r.length=h+1}}function a(c){for(var u=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(l),t.state=ao,1),h=-1,f=r.length;++h<f;)r[h].call(i,u);t.state===ao&&(t.on.call("end",i,i.__data__,t.index,t.group),l())}function l(){t.state=gs,t.timer.stop(),delete n[e];for(var c in n)return;delete i.__transition}}function Sv(i,e){var t=i.__transition,n,r,s=!0,o;if(t){e=e==null?null:e+"";for(o in t){if((n=t[o]).name!==e){s=!1;continue}r=n.state>so&&n.state<ao,n.state=gs,n.timer.stop(),n.on.call(r?"interrupt":"cancel",i,i.__data__,n.index,n.group),delete t[o]}s&&delete i.__transition}}function Mv(i){return this.each(function(){Sv(this,i)})}function Ev(i,e){var t,n;return function(){var r=dn(this,i),s=r.tween;if(s!==t){n=t=s;for(var o=0,a=n.length;o<a;++o)if(n[o].name===e){n=n.slice(),n.splice(o,1);break}}r.tween=n}}function bv(i,e,t){var n,r;if(typeof t!="function")throw new Error;return function(){var s=dn(this,i),o=s.tween;if(o!==n){r=(n=o).slice();for(var a={name:e,value:t},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function Tv(i,e){var t=this._id;if(i+="",arguments.length<2){for(var n=tn(this.node(),t).tween,r=0,s=n.length,o;r<s;++r)if((o=n[r]).name===i)return o.value;return null}return this.each((e==null?Ev:bv)(t,i,e))}function wo(i,e,t){var n=i._id;return i.each(function(){var r=dn(this,n);(r.value||(r.value={}))[e]=t.apply(this,arguments)}),function(r){return tn(r,n).value[e]}}function nh(i,e){var t;return(typeof e=="number"?Bn:e instanceof Er?Ac:(t=Er(e))?(e=t,Ac):cv)(i,e)}function wv(i){return function(){this.removeAttribute(i)}}function Av(i){return function(){this.removeAttributeNS(i.space,i.local)}}function Rv(i,e,t){var n,r=t+"",s;return function(){var o=this.getAttribute(i);return o===r?null:o===n?s:s=e(n=o,t)}}function Cv(i,e,t){var n,r=t+"",s;return function(){var o=this.getAttributeNS(i.space,i.local);return o===r?null:o===n?s:s=e(n=o,t)}}function Pv(i,e,t){var n,r,s;return function(){var o,a=t(this),l;return a==null?void this.removeAttribute(i):(o=this.getAttribute(i),l=a+"",o===l?null:o===n&&l===r?s:(r=l,s=e(n=o,a)))}}function Lv(i,e,t){var n,r,s;return function(){var o,a=t(this),l;return a==null?void this.removeAttributeNS(i.space,i.local):(o=this.getAttributeNS(i.space,i.local),l=a+"",o===l?null:o===n&&l===r?s:(r=l,s=e(n=o,a)))}}function Dv(i,e){var t=Xs(i),n=t==="transform"?dv:nh;return this.attrTween(i,typeof e=="function"?(t.local?Lv:Pv)(t,n,wo(this,"attr."+i,e)):e==null?(t.local?Av:wv)(t):(t.local?Cv:Rv)(t,n,e))}function Iv(i,e){return function(t){this.setAttribute(i,e.call(this,t))}}function Nv(i,e){return function(t){this.setAttributeNS(i.space,i.local,e.call(this,t))}}function Uv(i,e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&Nv(i,s)),t}return r._value=e,r}function Ov(i,e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&Iv(i,s)),t}return r._value=e,r}function Fv(i,e){var t="attr."+i;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var n=Xs(i);return this.tween(t,(n.local?Uv:Ov)(n,e))}function Bv(i,e){return function(){To(this,i).delay=+e.apply(this,arguments)}}function kv(i,e){return e=+e,function(){To(this,i).delay=e}}function zv(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?Bv:kv)(e,i)):tn(this.node(),e).delay}function Hv(i,e){return function(){dn(this,i).duration=+e.apply(this,arguments)}}function Gv(i,e){return e=+e,function(){dn(this,i).duration=e}}function Vv(i){var e=this._id;return arguments.length?this.each((typeof i=="function"?Hv:Gv)(e,i)):tn(this.node(),e).duration}function Wv(i,e){if(typeof e!="function")throw new Error;return function(){dn(this,i).ease=e}}function Xv(i){var e=this._id;return arguments.length?this.each(Wv(e,i)):tn(this.node(),e).ease}function $v(i,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;dn(this,i).ease=t}}function qv(i){if(typeof i!="function")throw new Error;return this.each($v(this._id,i))}function jv(i){typeof i!="function"&&(i=Fu(i));for(var e=this._groups,t=e.length,n=new Array(t),r=0;r<t;++r)for(var s=e[r],o=s.length,a=n[r]=[],l,c=0;c<o;++c)(l=s[c])&&i.call(l,l.__data__,c,s)&&a.push(l);return new Cn(n,this._parents,this._name,this._id)}function Yv(i){if(i._id!==this._id)throw new Error;for(var e=this._groups,t=i._groups,n=e.length,r=t.length,s=Math.min(n,r),o=new Array(n),a=0;a<s;++a)for(var l=e[a],c=t[a],u=l.length,h=o[a]=new Array(u),f,m=0;m<u;++m)(f=l[m]||c[m])&&(h[m]=f);for(;a<n;++a)o[a]=e[a];return new Cn(o,this._parents,this._name,this._id)}function Zv(i){return(i+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function Kv(i,e,t){var n,r,s=Zv(e)?To:dn;return function(){var o=s(this,i),a=o.on;a!==n&&(r=(n=a).copy()).on(e,t),o.on=r}}function Jv(i,e){var t=this._id;return arguments.length<2?tn(this.node(),t).on.on(i):this.each(Kv(t,i,e))}function Qv(i){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==i)return;e&&e.removeChild(this)}}function ey(){return this.on("end.remove",Qv(this._id))}function ty(i){var e=this._name,t=this._id;typeof i!="function"&&(i=So(i));for(var n=this._groups,r=n.length,s=new Array(r),o=0;o<r;++o)for(var a=n[o],l=a.length,c=s[o]=new Array(l),u,h,f=0;f<l;++f)(u=a[f])&&(h=i.call(u,u.__data__,f,a))&&("__data__"in u&&(h.__data__=u.__data__),c[f]=h,qs(c[f],e,t,f,c,tn(u,t)));return new Cn(s,this._parents,e,t)}function ny(i){var e=this._name,t=this._id;typeof i!="function"&&(i=Ou(i));for(var n=this._groups,r=n.length,s=[],o=[],a=0;a<r;++a)for(var l=n[a],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var f=i.call(u,u.__data__,h,l),m,g=tn(u,t),_=0,d=f.length;_<d;++_)(m=f[_])&&qs(m,e,t,_,f,g);s.push(f),o.push(u)}return new Cn(s,o,e,t)}var iy=Rr.prototype.constructor;function ry(){return new iy(this._groups,this._parents)}function sy(i,e){var t,n,r;return function(){var s=Yi(this,i),o=(this.style.removeProperty(i),Yi(this,i));return s===o?null:s===t&&o===n?r:r=e(t=s,n=o)}}function ih(i){return function(){this.style.removeProperty(i)}}function ay(i,e,t){var n,r=t+"",s;return function(){var o=Yi(this,i);return o===r?null:o===n?s:s=e(n=o,t)}}function oy(i,e,t){var n,r,s;return function(){var o=Yi(this,i),a=t(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(i),Yi(this,i))),o===l?null:o===n&&l===r?s:(r=l,s=e(n=o,a))}}function ly(i,e){var t,n,r,s="style."+e,o="end."+s,a;return function(){var l=dn(this,i),c=l.on,u=l.value[s]==null?a||(a=ih(e)):void 0;(c!==t||r!==u)&&(n=(t=c).copy()).on(o,r=u),l.on=n}}function cy(i,e,t){var n=(i+="")=="transform"?fv:nh;return e==null?this.styleTween(i,sy(i,n)).on("end.style."+i,ih(i)):typeof e=="function"?this.styleTween(i,oy(i,n,wo(this,"style."+i,e))).each(ly(this._id,i)):this.styleTween(i,ay(i,n,e),t).on("end.style."+i,null)}function uy(i,e,t){return function(n){this.style.setProperty(i,e.call(this,n),t)}}function hy(i,e,t){var n,r;function s(){var o=e.apply(this,arguments);return o!==r&&(n=(r=o)&&uy(i,o,t)),n}return s._value=e,s}function fy(i,e,t){var n="style."+(i+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,hy(i,e,t??""))}function dy(i){return function(){this.textContent=i}}function py(i){return function(){var e=i(this);this.textContent=e??""}}function my(i){return this.tween("text",typeof i=="function"?py(wo(this,"text",i)):dy(i==null?"":i+""))}function gy(i){return function(e){this.textContent=i.call(this,e)}}function _y(i){var e,t;function n(){var r=i.apply(this,arguments);return r!==t&&(e=(t=r)&&gy(r)),e}return n._value=i,n}function xy(i){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(i==null)return this.tween(e,null);if(typeof i!="function")throw new Error;return this.tween(e,_y(i))}function vy(){for(var i=this._name,e=this._id,t=rh(),n=this._groups,r=n.length,s=0;s<r;++s)for(var o=n[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var u=tn(l,e);qs(l,i,t,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Cn(n,this._parents,i,t)}function yy(){var i,e,t=this,n=t._id,r=t.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};t.each(function(){var c=dn(this,n),u=c.on;u!==i&&(e=(i=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&s()})}var Sy=0;function Cn(i,e,t,n){this._groups=i,this._parents=e,this._name=t,this._id=n}function rh(){return++Sy}var yn=Rr.prototype;Cn.prototype={constructor:Cn,select:ty,selectAll:ny,selectChild:yn.selectChild,selectChildren:yn.selectChildren,filter:jv,merge:Yv,selection:ry,transition:vy,call:yn.call,nodes:yn.nodes,node:yn.node,size:yn.size,empty:yn.empty,each:yn.each,on:Jv,attr:Dv,attrTween:Fv,style:cy,styleTween:fy,text:my,textTween:xy,remove:ey,tween:Tv,delay:zv,duration:Vv,ease:Xv,easeVarying:qv,end:yy,[Symbol.iterator]:yn[Symbol.iterator]};function My(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var Ey={time:null,delay:0,duration:250,ease:My};function by(i,e){for(var t;!(t=i.__transition)||!(t=t[e]);)if(!(i=i.parentNode))throw new Error(`transition ${e} not found`);return t}function Ty(i){var e,t;i instanceof Cn?(e=i._id,i=i._name):(e=rh(),(t=Ey).time=bo(),i=i==null?null:i+"");for(var n=this._groups,r=n.length,s=0;s<r;++s)for(var o=n[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&qs(l,i,e,c,o,t||by(l,e));return new Cn(n,this._parents,i,e)}Rr.prototype.interrupt=Mv;Rr.prototype.transition=Ty;var Ic={},Na={},Ua=34,sr=10,Oa=13;function sh(i){return new Function("d","return {"+i.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function wy(i,e){var t=sh(i);return function(n,r){return e(t(n),r,i)}}function Nc(i){var e=Object.create(null),t=[];return i.forEach(function(n){for(var r in n)r in e||t.push(e[r]=r)}),t}function Dt(i,e){var t=i+"",n=t.length;return n<e?new Array(e-n+1).join(0)+t:t}function Ay(i){return i<0?"-"+Dt(-i,6):i>9999?"+"+Dt(i,6):Dt(i,4)}function Ry(i){var e=i.getUTCHours(),t=i.getUTCMinutes(),n=i.getUTCSeconds(),r=i.getUTCMilliseconds();return isNaN(i)?"Invalid Date":Ay(i.getUTCFullYear())+"-"+Dt(i.getUTCMonth()+1,2)+"-"+Dt(i.getUTCDate(),2)+(r?"T"+Dt(e,2)+":"+Dt(t,2)+":"+Dt(n,2)+"."+Dt(r,3)+"Z":n?"T"+Dt(e,2)+":"+Dt(t,2)+":"+Dt(n,2)+"Z":t||e?"T"+Dt(e,2)+":"+Dt(t,2)+"Z":"")}function Cy(i){var e=new RegExp('["'+i+`
\r]`),t=i.charCodeAt(0);function n(h,f){var m,g,_=r(h,function(d,p){if(m)return m(d,p-1);g=d,m=f?wy(d,f):sh(d)});return _.columns=g||[],_}function r(h,f){var m=[],g=h.length,_=0,d=0,p,M=g<=0,x=!1;h.charCodeAt(g-1)===sr&&--g,h.charCodeAt(g-1)===Oa&&--g;function E(){if(M)return Na;if(x)return x=!1,Ic;var C,T=_,O;if(h.charCodeAt(T)===Ua){for(;_++<g&&h.charCodeAt(_)!==Ua||h.charCodeAt(++_)===Ua;);return(C=_)>=g?M=!0:(O=h.charCodeAt(_++))===sr?x=!0:O===Oa&&(x=!0,h.charCodeAt(_)===sr&&++_),h.slice(T+1,C-1).replace(/""/g,'"')}for(;_<g;){if((O=h.charCodeAt(C=_++))===sr)x=!0;else if(O===Oa)x=!0,h.charCodeAt(_)===sr&&++_;else if(O!==t)continue;return h.slice(T,C)}return M=!0,h.slice(T,g)}for(;(p=E())!==Na;){for(var R=[];p!==Ic&&p!==Na;)R.push(p),p=E();f&&(R=f(R,d++))==null||m.push(R)}return m}function s(h,f){return h.map(function(m){return f.map(function(g){return u(m[g])}).join(i)})}function o(h,f){return f==null&&(f=Nc(h)),[f.map(u).join(i)].concat(s(h,f)).join(`
`)}function a(h,f){return f==null&&(f=Nc(h)),s(h,f).join(`
`)}function l(h){return h.map(c).join(`
`)}function c(h){return h.map(u).join(i)}function u(h){return h==null?"":h instanceof Date?Ry(h):e.test(h+="")?'"'+h.replace(/"/g,'""')+'"':h}return{parse:n,parseRows:r,format:o,formatBody:a,formatRows:l,formatRow:c,formatValue:u}}var Py=Cy(","),Ly=Py.parse;function Dy(i){if(!i.ok)throw new Error(i.status+" "+i.statusText);return i.text()}function Iy(i,e){return fetch(i,e).then(Dy)}function Ny(i){return function(e,t,n){return arguments.length===2&&typeof t=="function"&&(n=t,t=void 0),Iy(e,t).then(function(r){return i(r,n)})}}var Uy=Ny(Ly);function ur(i,e,t){this.k=i,this.x=e,this.y=t}ur.prototype={constructor:ur,scale:function(i){return i===1?this:new ur(this.k*i,this.x,this.y)},translate:function(i,e){return i===0&e===0?this:new ur(this.k,this.x+this.k*i,this.y+this.k*e)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ur.prototype;const Uc={type:"change"},Fa={type:"start"},Oc={type:"end"},ss=new _u,Fc=new Fn,Oy=Math.cos(70*hu.DEG2RAD);class Bc extends _i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Ee),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Uc),n.update(),s=r.NONE},this.update=function(){const A=new D,j=new pi().setFromUnitVectors(e.up,new D(0,1,0)),ge=j.clone().invert(),P=new D,re=new pi,F=new D,te=2*Math.PI;return function(Ge=null){const je=n.object.position;A.copy(je).sub(n.target),A.applyQuaternion(j),a.setFromVector3(A),n.autoRotate&&s===r.NONE&&J(y(Ge)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Je=n.minAzimuthAngle,at=n.maxAzimuthAngle;isFinite(Je)&&isFinite(at)&&(Je<-Math.PI?Je+=te:Je>Math.PI&&(Je-=te),at<-Math.PI?at+=te:at>Math.PI&&(at-=te),Je<=at?a.theta=Math.max(Je,Math.min(at,a.theta)):a.theta=a.theta>(Je+at)/2?Math.max(Je,a.theta):Math.min(at,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let $e=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)a.radius=K(a.radius);else{const tt=a.radius;a.radius=K(a.radius*c),$e=tt!=a.radius}if(A.setFromSpherical(a),A.applyQuaternion(ge),je.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&C){let tt=null;if(n.object.isPerspectiveCamera){const St=A.length();tt=K(St*c);const jn=St-tt;n.object.position.addScaledVector(E,jn),n.object.updateMatrixWorld(),$e=!!jn}else if(n.object.isOrthographicCamera){const St=new D(R.x,R.y,0);St.unproject(n.object);const jn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),$e=jn!==n.object.zoom;const Lr=new D(R.x,R.y,0);Lr.unproject(n.object),n.object.position.sub(Lr).add(St),n.object.updateMatrixWorld(),tt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(ss.origin.copy(n.object.position),ss.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ss.direction))<Oy?e.lookAt(n.target):(Fc.setFromNormalAndCoplanarPoint(n.object.up,n.target),ss.intersectPlane(Fc,n.target))))}else if(n.object.isOrthographicCamera){const tt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),tt!==n.object.zoom&&(n.object.updateProjectionMatrix(),$e=!0)}return c=1,C=!1,$e||P.distanceToSquared(n.object.position)>o||8*(1-re.dot(n.object.quaternion))>o||F.distanceToSquared(n.target)>o?(n.dispatchEvent(Uc),P.copy(n.object.position),re.copy(n.object.quaternion),F.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",q),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",b),n.domElement.getRootNode().removeEventListener("keydown",Q,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new mc,l=new mc;let c=1;const u=new D,h=new Te,f=new Te,m=new Te,g=new Te,_=new Te,d=new Te,p=new Te,M=new Te,x=new Te,E=new D,R=new Te;let C=!1;const T=[],O={};let ee=!1;function y(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function w(A){const j=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*j)}function J(A){l.theta-=A}function Y(A){l.phi-=A}const L=function(){const A=new D;return function(ge,P){A.setFromMatrixColumn(P,0),A.multiplyScalar(-ge),u.add(A)}}(),X=function(){const A=new D;return function(ge,P){n.screenSpacePanning===!0?A.setFromMatrixColumn(P,1):(A.setFromMatrixColumn(P,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ge),u.add(A)}}(),H=function(){const A=new D;return function(ge,P){const re=n.domElement;if(n.object.isPerspectiveCamera){const F=n.object.position;A.copy(F).sub(n.target);let te=A.length();te*=Math.tan(n.object.fov/2*Math.PI/180),L(2*ge*te/re.clientHeight,n.object.matrix),X(2*P*te/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(ge*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),X(P*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(A,j){if(!n.zoomToCursor)return;C=!0;const ge=n.domElement.getBoundingClientRect(),P=A-ge.left,re=j-ge.top,F=ge.width,te=ge.height;R.x=P/F*2-1,R.y=-(re/te)*2+1,E.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function ae(A){h.set(A.clientX,A.clientY)}function de(A){$(A.clientX,A.clientX),p.set(A.clientX,A.clientY)}function Ce(A){g.set(A.clientX,A.clientY)}function G(A){f.set(A.clientX,A.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const j=n.domElement;J(2*Math.PI*m.x/j.clientHeight),Y(2*Math.PI*m.y/j.clientHeight),h.copy(f),n.update()}function ne(A){M.set(A.clientX,A.clientY),x.subVectors(M,p),x.y>0?Z(w(x.y)):x.y<0&&W(w(x.y)),p.copy(M),n.update()}function fe(A){_.set(A.clientX,A.clientY),d.subVectors(_,g).multiplyScalar(n.panSpeed),H(d.x,d.y),g.copy(_),n.update()}function Ae(A){$(A.clientX,A.clientY),A.deltaY<0?W(w(A.deltaY)):A.deltaY>0&&Z(w(A.deltaY)),n.update()}function ve(A){let j=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),j=!0;break}j&&(A.preventDefault(),n.update())}function pe(A){if(T.length===1)h.set(A.pageX,A.pageY);else{const j=me(A),ge=.5*(A.pageX+j.x),P=.5*(A.pageY+j.y);h.set(ge,P)}}function Xe(A){if(T.length===1)g.set(A.pageX,A.pageY);else{const j=me(A),ge=.5*(A.pageX+j.x),P=.5*(A.pageY+j.y);g.set(ge,P)}}function we(A){const j=me(A),ge=A.pageX-j.x,P=A.pageY-j.y,re=Math.sqrt(ge*ge+P*P);p.set(0,re)}function U(A){n.enableZoom&&we(A),n.enablePan&&Xe(A)}function ht(A){n.enableZoom&&we(A),n.enableRotate&&pe(A)}function Se(A){if(T.length==1)f.set(A.pageX,A.pageY);else{const ge=me(A),P=.5*(A.pageX+ge.x),re=.5*(A.pageY+ge.y);f.set(P,re)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const j=n.domElement;J(2*Math.PI*m.x/j.clientHeight),Y(2*Math.PI*m.y/j.clientHeight),h.copy(f)}function Ie(A){if(T.length===1)_.set(A.pageX,A.pageY);else{const j=me(A),ge=.5*(A.pageX+j.x),P=.5*(A.pageY+j.y);_.set(ge,P)}d.subVectors(_,g).multiplyScalar(n.panSpeed),H(d.x,d.y),g.copy(_)}function Me(A){const j=me(A),ge=A.pageX-j.x,P=A.pageY-j.y,re=Math.sqrt(ge*ge+P*P);M.set(0,re),x.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),Z(x.y),p.copy(M);const F=(A.pageX+j.x)*.5,te=(A.pageY+j.y)*.5;$(F,te)}function Ve(A){n.enableZoom&&Me(A),n.enablePan&&Ie(A)}function Ne(A){n.enableZoom&&Me(A),n.enableRotate&&Se(A)}function Oe(A){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",et),n.domElement.addEventListener("pointerup",b)),!ze(A)&&(se(A),A.pointerType==="touch"?le(A):v(A)))}function et(A){n.enabled!==!1&&(A.pointerType==="touch"?ce(A):V(A))}function b(A){switch(st(A),T.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",b),n.dispatchEvent(Oc),s=r.NONE;break;case 1:const j=T[0],ge=O[j];le({pointerId:j,pageX:ge.x,pageY:ge.y});break}}function v(A){let j;switch(A.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case yi.DOLLY:if(n.enableZoom===!1)return;de(A),s=r.DOLLY;break;case yi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;Ce(A),s=r.PAN}else{if(n.enableRotate===!1)return;ae(A),s=r.ROTATE}break;case yi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;ae(A),s=r.ROTATE}else{if(n.enablePan===!1)return;Ce(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Fa)}function V(A){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;G(A);break;case r.DOLLY:if(n.enableZoom===!1)return;ne(A);break;case r.PAN:if(n.enablePan===!1)return;fe(A);break}}function q(A){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(A.preventDefault(),n.dispatchEvent(Fa),Ae(ie(A)),n.dispatchEvent(Oc))}function ie(A){const j=A.deltaMode,ge={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(j){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return A.ctrlKey&&!ee&&(ge.deltaY*=10),ge}function Q(A){A.key==="Control"&&(ee=!0,n.domElement.getRootNode().addEventListener("keyup",Pe,{passive:!0,capture:!0}))}function Pe(A){A.key==="Control"&&(ee=!1,n.domElement.getRootNode().removeEventListener("keyup",Pe,{passive:!0,capture:!0}))}function Ee(A){n.enabled===!1||n.enablePan===!1||ve(A)}function le(A){switch(ye(A),T.length){case 1:switch(n.touches.ONE){case Si.ROTATE:if(n.enableRotate===!1)return;pe(A),s=r.TOUCH_ROTATE;break;case Si.PAN:if(n.enablePan===!1)return;Xe(A),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(A),s=r.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(A),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Fa)}function ce(A){switch(ye(A),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(A),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ie(A),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(A),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(A),n.update();break;default:s=r.NONE}}function Le(A){n.enabled!==!1&&A.preventDefault()}function se(A){T.push(A.pointerId)}function st(A){delete O[A.pointerId];for(let j=0;j<T.length;j++)if(T[j]==A.pointerId){T.splice(j,1);return}}function ze(A){for(let j=0;j<T.length;j++)if(T[j]==A.pointerId)return!0;return!1}function ye(A){let j=O[A.pointerId];j===void 0&&(j=new Te,O[A.pointerId]=j),j.set(A.pageX,A.pageY)}function me(A){const j=A.pointerId===T[0]?T[1]:T[0];return O[j]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Q,{passive:!0,capture:!0}),this.update()}}const En=(i,e,t)=>i+(e-i)*ah(t,0,1),ah=(i,e,t)=>Math.min(Math.max(i,e),t),oo=(i,e,t)=>e===t?1:ah((i-e)/(t-e),0,1),Bi=(i,e,t)=>({x:En(i.x,e.x,t),y:En(i.y,e.y,t)}),Ao={"header-0":`Visualizing the Polar 
Jet Stream`,"segment-0":"Intro text","header-1":"The Polar Vortex","segment-1":"the problem statement","segment-2":"segment 2 text","segment-3":"segment 3 text"},Fy=.2,Us=150,By=50,ky=35,_s=50,xs=60,vs=50,ys=75,dr=50,Ss=10,pr=dr,mr=75,as=0,ki=50,Ro=28,Pn=Object.keys(Ao).filter(i=>i.startsWith("segment-")).length,N=1/Pn,li=N*Fy,oh=Ro/Pn,Co=(Ro+1)/Pn,kc=oh+li,zc=Co,zy=(Ro-1)/Pn+li,Hy=Co+li,Hc={totalScenes:Pn,heightPerScene:Us,totalHeight:Pn*Us},Mn={transition:{duration:li,opacity:{entry:1,exit:0,initial:0},entry:{duration:li},exit:{duration:li}},transform:{duration:li}},Gy={"intro-header":{position:{x:_s,y:xs},initiallyVisible:!0,transition:{entry_from:{x:_s,y:xs,opacity:1},exit_to:{x:_s,y:xs-ki,opacity:1}}},"intro-segment":{position:{x:vs,y:ys},initiallyVisible:!0,transition:{entry_from:{x:vs,y:ys,opacity:1},exit_to:{x:vs,y:ys-ki,opacity:0}}},header:{position:{x:dr,y:Ss},transition:{entry_from:{x:dr+as,y:Ss+ki,opacity:0},exit_to:{x:dr-as,y:Ss-ki,opacity:0}}},segment:{position:{x:pr,y:mr},transition:{entry_from:{x:pr+as,y:mr+ki,opacity:0},exit_to:{x:pr-as,y:mr-ki,opacity:0}}}},Vy=[{id:"earth",type:"3dObject",position:{x:By,y:ky},initiallyVisible:!0,transition:{entry_from:null,exit_to:null},transformations:[{type:"scale",scale_to:1,at:0,duration:0}]},...Array.from({length:14},(i,e)=>{const t=e+1,n=`February ${t}, 2010`,r=N*2,s=N*1/14,o=r+s*e,a=o+s;return{id:`date2010-02-${t.toString().padStart(2,"0")}`,type:"annotation",content:n,position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:o,duration:.001,opacity:0},exit_to:{x:50,y:50,at:a,duration:.001,opacity:0}}}}).filter(Boolean),{id:"background-2",type:"background",file:"/polar-vortex-viz/public/assets/backgrounds/pbd.webp",entry:{at:0},exit:{at:1}}],Gc={"segment-23":{position:{x:pr,y:mr-28}}},Ba=Object.keys(Ao).filter(i=>i.startsWith("header-")).map(i=>parseInt(i.split("-")[1])).sort((i,e)=>i-e),lh={};Ba.forEach((i,e)=>{lh[i]=e<Ba.length-1?Ba[e+1]:Pn});const Wy=Object.entries(Ao).filter(([i])=>i.startsWith("header-")||i.startsWith("segment-")).map(([i,e])=>{const t=parseInt(i.split("-")[1]),n=i==="header-0"?"intro-header":i==="segment-0"?"intro-segment":i.startsWith("header")?"header":"segment";let r;n==="intro-header"?r={x:_s,y:xs}:n==="intro-segment"?r={x:vs,y:ys}:n==="header"?r={x:dr,y:Ss}:r={x:pr,y:mr};const s=i.startsWith("header-")?N*lh[t]:N*(t+1);return{id:i,type:n,initiallyVisible:t===0,position:r,content:e||"",transition:{entry_from:{at:N*t},exit_to:{at:s}}}}),Xy=Wy.map(i=>Gc[i.id]?{...i,...Gc[i.id]}:i),ka={objects:[...Vy,...Xy],totalScenes:Pn,heightPerScene:Us,totalHeight:Pn*Us},Lt=[{id:"atmosphereHotNonlinear",entry:{at:0},exit:{at:1}},{id:"jetStream2010-02-01",type:"jetStream",entry:{at:0},exit:{at:N*2},params:{year:"2010-02-01T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-01",type:"temperature",entry:{at:0},exit:{at:N*2},params:{date:"2010-02-01",isNormalDay:!0}},{id:"date2010-02-01",type:"annotation",content:"February 1, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:0,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-02",type:"jetStream",entry:{at:N*2},exit:{at:N*2+N/13},params:{year:"2010-02-02T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-02",type:"temperature",entry:{at:N*2},exit:{at:N*2+N/13},params:{date:"2010-02-02",isNormalDay:!0}},{id:"date2010-02-02",type:"annotation",content:"February 2, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-03",type:"jetStream",entry:{at:N*2+N/13},exit:{at:N*2+N*2/13},params:{year:"2010-02-03T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-03",type:"temperature",entry:{at:N*2+N/13},exit:{at:N*2+N*2/13},params:{date:"2010-02-03",isNormalDay:!0}},{id:"date2010-02-03",type:"annotation",content:"February 3, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*2/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-04",type:"jetStream",entry:{at:N*2+N*2/13},exit:{at:N*2+N*3/13},params:{year:"2010-02-04T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-04",type:"temperature",entry:{at:N*2+N*2/13},exit:{at:N*2+N*3/13},params:{date:"2010-02-04",isNormalDay:!0}},{id:"date2010-02-04",type:"annotation",content:"February 4, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*2/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*3/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-05",type:"jetStream",entry:{at:N*2+N*3/13},exit:{at:N*2+N*4/13},params:{year:"2010-02-05T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-05",type:"temperature",entry:{at:N*2+N*3/13},exit:{at:N*2+N*4/13},params:{date:"2010-02-05",isNormalDay:!0}},{id:"date2010-02-05",type:"annotation",content:"February 5, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*3/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*4/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-06",type:"jetStream",entry:{at:N*2+N*4/13},exit:{at:N*2+N*5/13},params:{year:"2010-02-06T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-06",type:"temperature",entry:{at:N*2+N*4/13},exit:{at:N*2+N*5/13},params:{date:"2010-02-06",isNormalDay:!0}},{id:"date2010-02-06",type:"annotation",content:"February 6, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*4/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*5/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-07",type:"jetStream",entry:{at:N*2+N*5/13},exit:{at:N*2+N*6/13},params:{year:"2010-02-07T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-07",type:"temperature",entry:{at:N*2+N*5/13},exit:{at:N*2+N*6/13},params:{date:"2010-02-07",isNormalDay:!0}},{id:"date2010-02-07",type:"annotation",content:"February 7, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*5/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*6/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-08",type:"jetStream",entry:{at:N*2+N*6/13},exit:{at:N*2+N*7/13},params:{year:"2010-02-08T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-08",type:"temperature",entry:{at:N*2+N*6/13},exit:{at:N*2+N*7/13},params:{date:"2010-02-08",isNormalDay:!0}},{id:"date2010-02-08",type:"annotation",content:"February 8, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*6/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*7/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-09",type:"jetStream",entry:{at:N*2+N*7/13},exit:{at:N*2+N*8/13},params:{year:"2010-02-09T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-09",type:"temperature",entry:{at:N*2+N*7/13},exit:{at:N*2+N*8/13},params:{date:"2010-02-09",isNormalDay:!0}},{id:"date2010-02-09",type:"annotation",content:"February 9, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*7/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*8/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-10",type:"jetStream",entry:{at:N*2+N*8/13},exit:{at:N*2+N*9/13},params:{year:"2010-02-10T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-10",type:"temperature",entry:{at:N*2+N*8/13},exit:{at:N*2+N*9/13},params:{date:"2010-02-10",isNormalDay:!0}},{id:"date2010-02-10",type:"annotation",content:"February 10, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*8/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*9/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-11",type:"jetStream",entry:{at:N*2+N*9/13},exit:{at:N*2+N*10/13},params:{year:"2010-02-11T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-11",type:"temperature",entry:{at:N*2+N*9/13},exit:{at:N*2+N*10/13},params:{date:"2010-02-11",isNormalDay:!0}},{id:"date2010-02-11",type:"annotation",content:"February 11, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*9/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*10/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-12",type:"jetStream",entry:{at:N*2+N*10/13},exit:{at:N*2+N*11/13},params:{year:"2010-02-12T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-12",type:"temperature",entry:{at:N*2+N*10/13},exit:{at:N*2+N*11/13},params:{date:"2010-02-12",isNormalDay:!0}},{id:"date2010-02-12",type:"annotation",content:"February 12, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*10/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*11/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-13",type:"jetStream",entry:{at:N*2+N*11/13},exit:{at:N*2+N*12/13},params:{year:"2010-02-13T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-13",type:"temperature",entry:{at:N*2+N*11/13},exit:{at:N*2+N*12/13},params:{date:"2010-02-13",isNormalDay:!0}},{id:"date2010-02-13",type:"annotation",content:"February 13, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*11/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*12/13,duration:1e-4,opacity:0}}},{id:"jetStream2010-02-14",type:"jetStream",entry:{at:N*2+N*12/13},exit:{at:N*4},params:{year:"2010-02-14T00:00:00.000000000",isNormalDay:!0}},{id:"temp2010-02-14",type:"temperature",entry:{at:N*2+N*12/13},exit:{at:N*4},params:{date:"2010-02-14",isNormalDay:!0}},{id:"date2010-02-14",type:"annotation",content:"February 14, 2010",position:{x:50,y:50},transition:{entry_from:{x:50,y:50,at:N*2+N*11/13,duration:1e-4,opacity:0},exit_to:{x:50,y:50,at:N*2+N*13/13,duration:1e-4,opacity:0}}},{id:"background-2",type:"background",file:"/polar-vortex-viz/public/assets/backgrounds/pbd.webp",entry:{at:0},exit:{at:1}}];class $y{static calculateTransform(e,t,n=null){const r=e.duration||Mn.transform.duration,s=e.at+r;let o;switch(t<e.at?o=0:t>s?o=1:o=oo(t,e.at,s),e.type){case"scale":return{type:"scale",value:En(n??1,e.scale_to,o)};case"translation":const l=n??{x:0,y:0};return{type:"translation",value:{x:En(l.x,e.delta_x||0,o),y:En(l.y,e.delta_y||0,o)}};case"rotation":return{type:"rotation",value:En(n??0,e.rotate_to||0,o)};case"camera_look":const u=n??{x:0,y:0,z:0},h=(e.look_x-50)/25,f=-(e.look_y-50)/25;return{type:"camera_look",value:{x:En(u.x,h,o),y:En(u.y,f,o),z:En(u.z,e.look_z||0,o)}};default:return null}}static getActiveTransforms(e,t){if(!(e!=null&&e.length))return{};const n={},r=[...e].sort((o,a)=>o.at-a.at),s={};return r.forEach(o=>{if(t>=o.at){const a=this.calculateTransform(o,t,s[o.type]);a&&(n[a.type]=a.value,s[a.type]=a.value)}}),n}}class qy{static calculateTransition(e,t){var f,m,g,_;const n=Gy[e.type],r=(n==null?void 0:n.position)||{x:0,y:0},s=e.position||r,{transition:o={}}=e,{entry_from:a,exit_to:l}=o,c=a?{x:s.x,y:s.y,...((f=n==null?void 0:n.transition)==null?void 0:f.entry_from)||{},...a}:(m=n==null?void 0:n.transition)!=null&&m.entry_from?{x:s.x,y:s.y,...n.transition.entry_from}:null,u=l?{x:s.x,y:s.y,...((g=n==null?void 0:n.transition)==null?void 0:g.exit_to)||{},...l}:(_=n==null?void 0:n.transition)!=null&&_.exit_to?{x:s.x,y:s.y,...n.transition.exit_to}:null;if(!c||t+1e-4<c.at)return{position:s,opacity:e.initiallyVisible?1:(c==null?void 0:c.opacity)??0,visible:e.initiallyVisible||!1};if(c&&t>=c.at&&t<=c.at+(c.duration||Mn.transition.entry.duration)){const d=oo(t,c.at,c.at+(c.duration||Mn.transition.entry.duration));return{position:Bi(c,s,d),opacity:c.opacity!==void 0?Bi({x:c.opacity},{x:1},d).x:Bi({x:Mn.transition.opacity.initial},{x:Mn.transition.opacity.entry},d).x,visible:!0}}if(u&&t>=u.at&&t<=u.at+(u.duration||Mn.transition.exit.duration)){const d=oo(t,u.at,u.at+(u.duration||Mn.transition.exit.duration));return{position:Bi(s,u,d),opacity:u.opacity!==void 0?Bi({x:1},{x:u.opacity},d).x:Bi({x:1},{x:Mn.transition.opacity.exit},d).x,visible:!0}}return l&&t>l.at+(l.duration||Mn.transition.exit.duration)?{position:{...l},opacity:0,visible:!1}:{position:{...s},opacity:1,visible:!0}}}class jy{constructor(){this.objects=new Map,this.scrollProgress=0}registerObject(e){this.objects.set(e.id,{config:e,state:{position:{...e.position},opacity:e.initiallyVisible?1:0,transforms:{},visible:e.initiallyVisible||!1}})}updateProgress(e){this.scrollProgress=e,this.updateAllObjects()}updateObject(e){const t=this.objects.get(e);if(!t)return null;const{config:n}=t,r=qy.calculateTransition(n,this.scrollProgress),s=$y.getActiveTransforms(n.transformations,this.scrollProgress);return t.state={...t.state,...r,transforms:s},t.state}updateAllObjects(){for(const e of this.objects.keys())this.updateObject(e)}getObjectState(e){var t;return(t=this.objects.get(e))==null?void 0:t.state}getVisibleObjects(){const e=[];for(const[t,n]of this.objects)n.state.visible&&e.push({id:t,state:n.state});return e}forceUpdateStates(e){this.scrollProgress=e;for(const[t,n]of this.objects)this.updateObject(t).visible||(n.state.opacity=0)}}const Ms={SOLAR_CONSTANT:1361,STEFAN_BOLTZMANN:567e-10,EARTH_RADIUS:6371e3,ATMOSPHERE_HEIGHT:1e4,ATMOSPHERE_DENSITY:1,SPECIFIC_HEAT:1e3,HEAT_CAPACITY:1e7},Yy=Ms.ATMOSPHERE_HEIGHT*Ms.ATMOSPHERE_DENSITY*Ms.SPECIFIC_HEAT,os={HEAT_CAPACITY:Yy,A1:.58,A2:.47,T_CRIT:283,DELTA_T:18,DEFAULT_GREENHOUSE:.4,MIN_TEMP:223,MAX_TEMP:323,DEFAULT_TEMP:288},Zy={TIME_STEP:.1,MAX_TIME:10,TEMP_RESOLUTION:100,ALBEDO_RESOLUTION:100};function Po(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let vi=Po();function ch(i){vi=i}const gr={exec:()=>null};function Ke(i,e=""){let t=typeof i=="string"?i:i.source;const n={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Ct.caret,"$1"),t=t.replace(r,o),n},getRegex:()=>new RegExp(t,e)};return n}const Ct={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},Ky=/^(?:[ \t]*(?:\n|$))+/,Jy=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Qy=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Pr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,eS=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,uh=/(?:[*+-]|\d{1,9}[.)])/,hh=Ke(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,uh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Lo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,tS=/^[^\n]+/,Do=/(?!\s*\])(?:\\.|[^\[\]\\])+/,nS=Ke(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Do).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),iS=Ke(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,uh).getRegex(),js="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Io=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,rS=Ke("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Io).replace("tag",js).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fh=Ke(Lo).replace("hr",Pr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",js).getRegex(),sS=Ke(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fh).getRegex(),No={blockquote:sS,code:Jy,def:nS,fences:Qy,heading:eS,hr:Pr,html:rS,lheading:hh,list:iS,newline:Ky,paragraph:fh,table:gr,text:tS},Vc=Ke("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Pr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",js).getRegex(),aS={...No,table:Vc,paragraph:Ke(Lo).replace("hr",Pr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Vc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",js).getRegex()},oS={...No,html:Ke(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Io).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ke(Lo).replace("hr",Pr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hh).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},dh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lS=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ph=/^( {2,}|\\)\n(?!\s*$)/,cS=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ys=/[\p{P}\p{S}]/u,Uo=/[\s\p{P}\p{S}]/u,mh=/[^\s\p{P}\p{S}]/u,uS=Ke(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Uo).getRegex(),hS=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,fS=Ke(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,"u").replace(/punct/g,Ys).getRegex(),dS=Ke("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)","gu").replace(/notPunctSpace/g,mh).replace(/punctSpace/g,Uo).replace(/punct/g,Ys).getRegex(),pS=Ke("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,mh).replace(/punctSpace/g,Uo).replace(/punct/g,Ys).getRegex(),mS=Ke(/\\(punct)/,"gu").replace(/punct/g,Ys).getRegex(),gS=Ke(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_S=Ke(Io).replace("(?:-->|$)","-->").getRegex(),xS=Ke("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_S).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Os=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,vS=Ke(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Os).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),gh=Ke(/^!?\[(label)\]\[(ref)\]/).replace("label",Os).replace("ref",Do).getRegex(),_h=Ke(/^!?\[(ref)\](?:\[\])?/).replace("ref",Do).getRegex(),yS=Ke("reflink|nolink(?!\\()","g").replace("reflink",gh).replace("nolink",_h).getRegex(),Oo={_backpedal:gr,anyPunctuation:mS,autolink:gS,blockSkip:hS,br:ph,code:lS,del:gr,emStrongLDelim:fS,emStrongRDelimAst:dS,emStrongRDelimUnd:pS,escape:dh,link:vS,nolink:_h,punctuation:uS,reflink:gh,reflinkSearch:yS,tag:xS,text:cS,url:gr},SS={...Oo,link:Ke(/^!?\[(label)\]\((.*?)\)/).replace("label",Os).getRegex(),reflink:Ke(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Os).getRegex()},lo={...Oo,escape:Ke(dh).replace("])","~|])").getRegex(),url:Ke(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},MS={...lo,br:Ke(ph).replace("{2,}","*").getRegex(),text:Ke(lo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ls={normal:No,gfm:aS,pedantic:oS},ar={normal:Oo,gfm:lo,breaks:MS,pedantic:SS},ES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wc=i=>ES[i];function sn(i,e){if(e){if(Ct.escapeTest.test(i))return i.replace(Ct.escapeReplace,Wc)}else if(Ct.escapeTestNoEncode.test(i))return i.replace(Ct.escapeReplaceNoEncode,Wc);return i}function Xc(i){try{i=encodeURI(i).replace(Ct.percentDecode,"%")}catch{return null}return i}function $c(i,e){var s;const t=i.replace(Ct.findPipe,(o,a,l)=>{let c=!1,u=a;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),n=t.split(Ct.splitPipe);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!((s=n.at(-1))!=null&&s.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(Ct.slashPipe,"|");return n}function or(i,e,t){const n=i.length;if(n===0)return"";let r=0;for(;r<n&&i.charAt(n-r-1)===e;)r++;return i.slice(0,n-r)}function bS(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function qc(i,e,t,n,r){const s=e.href,o=e.title||null,a=i[1].replace(r.other.outputLinkReplace,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:s,title:o,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:s,title:o,text:a}}function TS(i,e,t){const n=i.match(t.other.indentCodeCompensation);if(n===null)return e;const r=n[1];return e.split(`
`).map(s=>{const o=s.match(t.other.beginningSpace);if(o===null)return s;const[a]=o;return a.length>=r.length?s.slice(r.length):s}).join(`
`)}class Fs{constructor(e){Qe(this,"options");Qe(this,"rules");Qe(this,"lexer");this.options=e||vi}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:or(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=TS(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=or(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:or(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=or(t[0],`
`).split(`
`),r="",s="";const o=[];for(;n.length>0;){let a=!1;const l=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);const u=l.join(`
`),h=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${h}`:h;const f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,o,!0),this.lexer.state.top=f,n.length===0)break;const m=o.at(-1);if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const g=m,_=g.raw+`
`+n.join(`
`),d=this.blockquote(_);o[o.length-1]=d,r=r.substring(0,r.length-g.raw.length)+d.raw,s=s.substring(0,s.length-g.text.length)+d.text;break}else if((m==null?void 0:m.type)==="list"){const g=m,_=g.raw+`
`+n.join(`
`),d=this.list(_);o[o.length-1]=d,r=r.substring(0,r.length-m.raw.length)+d.raw,s=s.substring(0,s.length-g.raw.length)+d.raw,n=_.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const o=this.rules.other.listItemRegex(n);let a=!1;for(;e;){let c=!1,u="",h="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let f=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,M=>" ".repeat(3*M.length)),m=e.split(`
`,1)[0],g=!f.trim(),_=0;if(this.options.pedantic?(_=2,h=f.trimStart()):g?_=t[1].length+1:(_=t[2].search(this.rules.other.nonSpaceChar),_=_>4?1:_,h=f.slice(_),_+=t[1].length),g&&this.rules.other.blankLine.test(m)&&(u+=m+`
`,e=e.substring(m.length+1),c=!0),!c){const M=this.rules.other.nextBulletRegex(_),x=this.rules.other.hrRegex(_),E=this.rules.other.fencesBeginRegex(_),R=this.rules.other.headingBeginRegex(_),C=this.rules.other.htmlBeginRegex(_);for(;e;){const T=e.split(`
`,1)[0];let O;if(m=T,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),O=m):O=m.replace(this.rules.other.tabCharGlobal,"    "),E.test(m)||R.test(m)||C.test(m)||M.test(m)||x.test(m))break;if(O.search(this.rules.other.nonSpaceChar)>=_||!m.trim())h+=`
`+O.slice(_);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||E.test(f)||R.test(f)||x.test(f))break;h+=`
`+m}!g&&!m.trim()&&(g=!0),u+=T+`
`,e=e.substring(T.length+1),f=O.slice(_)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0));let d=null,p;this.options.gfm&&(d=this.rules.other.listIsTask.exec(h),d&&(p=d[0]!=="[ ] ",h=h.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!d,checked:p,loose:!1,text:h,tokens:[]}),s.raw+=u}const l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const u=s.items[c].tokens.filter(f=>f.type==="space"),h=u.length>0&&u.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=h}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:s}}}table(e){var a;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=$c(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=t[3])!=null&&a.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(const l of s)o.rows.push($c(l,o.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[u]})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const o=or(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=bS(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),qc(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[r.toLowerCase()];if(!s){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return qc(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...r[0]].length-1;let a,l,c=o,u=0;const h=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(r=h.exec(t))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const f=[...r[0]][0].length,m=e.slice(0,o+r.index+f+l);if(Math.min(o,l)%2){const _=m.slice(1,-1);return{type:"em",raw:m,text:_,tokens:this.lexer.inlineTokens(_)}}const g=m.slice(2,-2);return{type:"strong",raw:m,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,s;if(t[2]==="@")r=t[0],s="mailto:"+r;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);r=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}}class Wt{constructor(e){Qe(this,"tokens");Qe(this,"options");Qe(this,"state");Qe(this,"tokenizer");Qe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||vi,this.options.tokenizer=this.options.tokenizer||new Fs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:Ct,block:ls.normal,inline:ar.normal};this.options.pedantic?(t.block=ls.pedantic,t.inline=ar.pedantic):this.options.gfm&&(t.block=ls.gfm,this.options.breaks?t.inline=ar.breaks:t.inline=ar.gfm),this.tokenizer.rules=t}static get rules(){return{block:ls,inline:ar}}static lex(e,t){return new Wt(t).lex(e)}static lexInline(e,t){return new Wt(t).inlineTokens(e)}lex(e){e=e.replace(Ct.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){var r,s,o;for(this.options.pedantic&&(e=e.replace(Ct.tabCharGlobal,"    ").replace(Ct.spaceLine,""));e;){let a;if((s=(r=this.options.extensions)==null?void 0:r.block)!=null&&s.some(c=>(a=c.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const c=t.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let l=e;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0;const u=e.slice(1);let h;this.options.extensions.startBlock.forEach(f=>{h=f.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const c=t.at(-1);n&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a),n=l.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var a,l,c;let n=e,r=null;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)u.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s=!1,o="";for(;e;){s||(o=""),s=!1;let u;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(f=>(u=f.call({lexer:this},e,t))?(e=e.substring(u.raw.length),t.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);const f=t.at(-1);u.type==="text"&&(f==null?void 0:f.type)==="text"?(f.raw+=u.raw,f.text+=u.text):t.push(u);continue}if(u=this.tokenizer.emStrong(e,n,o)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.del(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),t.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),t.push(u);continue}let h=e;if((c=this.options.extensions)!=null&&c.startInline){let f=1/0;const m=e.slice(1);let g;this.options.extensions.startInline.forEach(_=>{g=_.call({lexer:this},m),typeof g=="number"&&g>=0&&(f=Math.min(f,g))}),f<1/0&&f>=0&&(h=e.substring(0,f+1))}if(u=this.tokenizer.inlineText(h)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(o=u.raw.slice(-1)),s=!0;const f=t.at(-1);(f==null?void 0:f.type)==="text"?(f.raw+=u.raw,f.text+=u.text):t.push(u);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}}class Bs{constructor(e){Qe(this,"options");Qe(this,"parser");this.options=e||vi}space(e){return""}code({text:e,lang:t,escaped:n}){var o;const r=(o=(t||"").match(Ct.notSpaceStart))==null?void 0:o[0],s=e.replace(Ct.endingNewline,"")+`
`;return r?'<pre><code class="language-'+sn(r)+'">'+(n?s:sn(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:sn(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let a=0;a<e.items.length;a++){const l=e.items[a];r+=this.listitem(l)}const s=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+s+o+`>
`+r+"</"+s+`>
`}listitem(e){var n;let t="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+sn(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let r="";for(let s=0;s<e.rows.length;s++){const o=e.rows[s];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${sn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),s=Xc(e);if(s===null)return r;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+sn(t)+'"'),o+=">"+r+"</a>",o}image({href:e,title:t,text:n}){const r=Xc(e);if(r===null)return sn(n);e=r;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${sn(t)}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:sn(e.text)}}class Fo{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Xt{constructor(e){Qe(this,"options");Qe(this,"renderer");Qe(this,"textRenderer");this.options=e||vi,this.options.renderer=this.options.renderer||new Bs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Fo}static parse(e,t){return new Xt(t).parse(e)}static parseInline(e,t){return new Xt(t).parseInline(e)}parse(e,t=!0){var r,s;let n="";for(let o=0;o<e.length;o++){const a=e[o];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){n+=u||"";continue}}const l=a;switch(l.type){case"space":{n+=this.renderer.space(l);continue}case"hr":{n+=this.renderer.hr(l);continue}case"heading":{n+=this.renderer.heading(l);continue}case"code":{n+=this.renderer.code(l);continue}case"table":{n+=this.renderer.table(l);continue}case"blockquote":{n+=this.renderer.blockquote(l);continue}case"list":{n+=this.renderer.list(l);continue}case"html":{n+=this.renderer.html(l);continue}case"paragraph":{n+=this.renderer.paragraph(l);continue}case"text":{let c=l,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);t?n+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):n+=u;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,t=this.renderer){var r,s;let n="";for(let o=0;o<e.length;o++){const a=e[o];if((s=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&s[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){n+=c||"";continue}}const l=a;switch(l.type){case"escape":{n+=t.text(l);break}case"html":{n+=t.html(l);break}case"link":{n+=t.link(l);break}case"image":{n+=t.image(l);break}case"strong":{n+=t.strong(l);break}case"em":{n+=t.em(l);break}case"codespan":{n+=t.codespan(l);break}case"br":{n+=t.br(l);break}case"del":{n+=t.del(l);break}case"text":{n+=t.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}}class _r{constructor(e){Qe(this,"options");Qe(this,"block");this.options=e||vi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Wt.lex:Wt.lexInline}provideParser(){return this.block?Xt.parse:Xt.parseInline}}Qe(_r,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class wS{constructor(...e){Qe(this,"defaults",Po());Qe(this,"options",this.setOptions);Qe(this,"parse",this.parseMarkdown(!0));Qe(this,"parseInline",this.parseMarkdown(!1));Qe(this,"Parser",Xt);Qe(this,"Renderer",Bs);Qe(this,"TextRenderer",Fo);Qe(this,"Lexer",Wt);Qe(this,"Tokenizer",Fs);Qe(this,"Hooks",_r);this.use(...e)}walkTokens(e,t){var r,s;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),n.renderer){const s=this.defaults.renderer||new Bs(this.defaults);for(const o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const a=o,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new Fs(this.defaults);for(const o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new _r;for(const o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const a=o,l=n.hooks[a],c=s[a];_r.passThroughHooks.has(o)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(f=>c.call(s,f));const h=l.call(s,u);return c.call(s,h)}:s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Wt.lex(e,t??this.defaults)}parser(e,t){return Xt.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const s={...r},o={...this.defaults,...s},a=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const l=o.hooks?o.hooks.provideLexer():e?Wt.lex:Wt.lexInline,c=o.hooks?o.hooks.provideParser():e?Xt.parse:Xt.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(u=>l(u,o)).then(u=>o.hooks?o.hooks.processAllTokens(u):u).then(u=>o.walkTokens?Promise.all(this.walkTokens(u,o.walkTokens)).then(()=>u):u).then(u=>c(u,o)).then(u=>o.hooks?o.hooks.postprocess(u):u).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let u=l(n,o);o.hooks&&(u=o.hooks.processAllTokens(u)),o.walkTokens&&this.walkTokens(u,o.walkTokens);let h=c(u,o);return o.hooks&&(h=o.hooks.postprocess(h)),h}catch(u){return a(u)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+sn(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}}const gi=new wS;function Ze(i,e){return gi.parse(i,e)}Ze.options=Ze.setOptions=function(i){return gi.setOptions(i),Ze.defaults=gi.defaults,ch(Ze.defaults),Ze};Ze.getDefaults=Po;Ze.defaults=vi;Ze.use=function(...i){return gi.use(...i),Ze.defaults=gi.defaults,ch(Ze.defaults),Ze};Ze.walkTokens=function(i,e){return gi.walkTokens(i,e)};Ze.parseInline=gi.parseInline;Ze.Parser=Xt;Ze.parser=Xt.parse;Ze.Renderer=Bs;Ze.TextRenderer=Fo;Ze.Lexer=Wt;Ze.lexer=Wt.lex;Ze.Tokenizer=Fs;Ze.Hooks=_r;Ze.parse=Ze;Ze.options;Ze.setOptions;Ze.use;Ze.walkTokens;Ze.parseInline;Xt.parse;Wt.lex;function AS(i=12,e=.1,t=13298175){const n=new Hn,r=new xi(1,64,64);for(let s=0;s<i;s++){const o=s/(i-1),a=1.07+.25*Math.pow(o,2.5),l=e*(.5-Math.pow(o,3.5)),c=new Rt(r,new xo({color:t,transparent:!0,opacity:l,shininess:0,depthWrite:!1}));c.scale.set(a,a,a),n.add(c)}return n.visible=!0,n}class cs{constructor(){const{SOLAR_CONSTANT:e,STEFAN_BOLTZMANN:t,EARTH_RADIUS:n}=Ms;this.S0=e,this.sigma=t,this.R=n}calculateAlbedo(e){const{A1:t,A2:n,T_CRIT:r,DELTA_T:s}=os;return t-.5*n*(1+Math.tanh((e-r)/s))}energyIn(e){const t=this.calculateAlbedo(e);return this.S0/4*(1-t)}energyOut(e,t){return this.sigma*e**4*(1-t)}calculateDeltaT(e,t){const n=this.energyIn(e),r=this.energyOut(e,t);return(n-r)/os.HEAT_CAPACITY}simulateTemperature(e,t,n=1e3,r=100){const s=[e],o=[0],a=[this.calculateDeltaT(e,t)];for(let l=1;l<n;l++){const c=this.calculateDeltaT(s[l-1],t),u=this.calculateDeltaT(s[l-1]+.5*r*c,t),h=this.calculateDeltaT(s[l-1]+.5*r*u,t),f=this.calculateDeltaT(s[l-1]+r*h,t),m=s[l-1]+r/6*(c+2*u+2*h+f);s.push(m),o.push(l*r),a.push(c)}return{times:o,temperatures:s,rates:a}}findEquilibrium(e,t){const n=this.generateTempRange(),r=n.map(o=>this.calculateDeltaT(o,t)),s=[];for(let o=0;o<r.length-1;o++)r[o]*r[o+1]<=0&&s.push(n[o]);return s}calculatePotential(e,t){let r=0;for(let s=os.MIN_TEMP;s<=e;s+=.1){const o=this.calculateDeltaT(s,t);r-=o*.1}return r}generateTempRange(){const{MIN_TEMP:e,MAX_TEMP:t}=os,{TEMP_RESOLUTION:n}=Zy,r=[];for(let s=0;s<n;s++)r.push(e+(t-e)*s/(n-1));return r}findStableEquilibrium(e){const t=this.generateTempRange(),n=t.map(r=>this.calculateDeltaT(r,e));for(let r=0;r<n.length-1;r++)if(n[r]*n[r+1]<=0&&(n[r+1]-n[r])/(t[r+1]-t[r])<0)return t[r];return null}}const jc=new qn,us=new D;class xh extends l0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new zt(e,3)),this.setAttribute("uv",new zt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Qa(t,6,1);return this.setAttribute("instanceStart",new Gn(n,3,0)),this.setAttribute("instanceEnd",new Gn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Qa(t,6,1);return this.setAttribute("instanceColorStart",new Gn(n,3,0)),this.setAttribute("instanceColorEnd",new Gn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Q_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),jc.setFromBufferAttribute(t),this.boundingBox.union(jc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)us.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(us)),us.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(us));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Te(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Nt.line={uniforms:mo.merge([oe.common,oe.fog,oe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Bo extends Rn{constructor(e){super({type:"LineMaterial",uniforms:mo.clone(Nt.line.uniforms),vertexShader:Nt.line.vertexShader,fragmentShader:Nt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const Yc=new D,Zc=new D,gt=new ot,_t=new ot,nn=new ot,za=new D,Ha=new lt,xt=new c0,Kc=new D,hs=new qn,fs=new Tr,rn=new ot;let ln,fi;function Jc(i,e,t){return rn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),rn.multiplyScalar(1/rn.w),rn.x=fi/t.width,rn.y=fi/t.height,rn.applyMatrix4(i.projectionMatrixInverse),rn.multiplyScalar(1/rn.w),Math.abs(Math.max(rn.x,rn.y))}function RS(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,l=o;a<l;a++){xt.start.fromBufferAttribute(r,a),xt.end.fromBufferAttribute(s,a),xt.applyMatrix4(t);const c=new D,u=new D;ln.distanceSqToSegment(xt.start,xt.end,u,c),u.distanceTo(c)<fi*.5&&e.push({point:u,pointOnLine:c,distance:ln.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function CS(i,e,t){const n=e.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;ln.at(1,nn),nn.w=1,nn.applyMatrix4(e.matrixWorldInverse),nn.applyMatrix4(n),nn.multiplyScalar(1/nn.w),nn.x*=s.x/2,nn.y*=s.y/2,nn.z=0,za.copy(nn),Ha.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,m=u;f<m;f++){if(gt.fromBufferAttribute(l,f),_t.fromBufferAttribute(c,f),gt.w=1,_t.w=1,gt.applyMatrix4(Ha),_t.applyMatrix4(Ha),gt.z>h&&_t.z>h)continue;if(gt.z>h){const x=gt.z-_t.z,E=(gt.z-h)/x;gt.lerp(_t,E)}else if(_t.z>h){const x=_t.z-gt.z,E=(_t.z-h)/x;_t.lerp(gt,E)}gt.applyMatrix4(n),_t.applyMatrix4(n),gt.multiplyScalar(1/gt.w),_t.multiplyScalar(1/_t.w),gt.x*=s.x/2,gt.y*=s.y/2,_t.x*=s.x/2,_t.y*=s.y/2,xt.start.copy(gt),xt.start.z=0,xt.end.copy(_t),xt.end.z=0;const _=xt.closestPointToPointParameter(za,!0);xt.at(_,Kc);const d=hu.lerp(gt.z,_t.z,_),p=d>=-1&&d<=1,M=za.distanceTo(Kc)<fi*.5;if(p&&M){xt.start.fromBufferAttribute(l,f),xt.end.fromBufferAttribute(c,f),xt.start.applyMatrix4(o),xt.end.applyMatrix4(o);const x=new D,E=new D;ln.distanceSqToSegment(xt.start,xt.end,E,x),t.push({point:E,pointOnLine:x,distance:ln.origin.distanceTo(E),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class PS extends Rt{constructor(e=new xh,t=new Bo({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Yc.fromBufferAttribute(t,o),Zc.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Yc.distanceTo(Zc);const s=new Qa(r,2,1);return e.setAttribute("instanceDistanceStart",new Gn(s,1,0)),e.setAttribute("instanceDistanceEnd",new Gn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ln=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;fi=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),fs.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=fi*.5;else{const h=Math.max(r.near,fs.distanceToPoint(ln.origin));c=Jc(r,h,l.resolution)}if(fs.radius+=c,ln.intersectsSphere(fs)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),hs.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=fi*.5;else{const h=Math.max(r.near,hs.distanceToPoint(ln.origin));u=Jc(r,h,l.resolution)}hs.expandByScalar(u),ln.intersectsBox(hs)!==!1&&(n?RS(this,t):CS(this,r,t))}}class vh extends xh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class LS extends PS{constructor(e=new vh,t=new Bo({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function DS(i,e=1.01,t=1,n=16777215,r=!1){const s=new vh,o=new Bo({color:n,linewidth:8,transparent:!0,opacity:t,depthWrite:!1,depthTest:!0,resolution:new Te(window.innerWidth,window.innerHeight)}),a=new LS(s,o),l=new Hn;l.add(a);const c=new xi(.02,8,8),u=new Hs({color:4367861,transparent:!1,opacity:.05}),h=[],f=50;let m;if(i.startsWith("2010-02"))m=`/polar-vortex-viz/output/normal/jetstream_trajectories_ALIGNED_normal_2010_feb/jetstream_traj_${i}_aligned.csv`,console.log("Attempting to load jet stream data from:",m);else return console.error("No valid data path for year:",i),l;return m?(Uy(m).then(g=>{if(!g||g.length===0){console.error("No data loaded from:",m);return}console.log(`Successfully loaded ${g.length} points for jet stream from ${m}`),console.log("Sample data point:",g[0]);const _=[];let d=null;if(g.forEach((R,C)=>{const T=parseFloat(R.longitude),O=parseFloat(R.latitude);if(isNaN(T)||isNaN(O)){console.error(`Invalid coordinates at index ${C}:`,R);return}const ee=(90-O)*Math.PI/180,y=(T+180)*Math.PI/180,w=e*Math.sin(ee)*Math.cos(y),J=e*Math.cos(ee),Y=e*Math.sin(ee)*Math.sin(y);if(isNaN(w)||isNaN(J)||isNaN(Y)){console.error(`Calculated NaN position at index ${C}:`,{lon:T,lat:O,phi:ee,theta:y,x:w,y:J,z:Y});return}_.push(w,J,Y),d&&Math.sqrt(Math.pow(w-d.x,2)+Math.pow(J-d.y,2)+Math.pow(Y-d.z,2)),d={x:w,y:J,z:Y}}),_.length===0){console.error("No valid positions generated for:",m);return}console.log(`Generated ${_.length/3} valid positions`);const p=[];for(let R=_.length-3;R>=0;R-=3)p.push(_[R],_[R+1],_[R+2]);s.setPositions(p);for(let R=0;R<f;R++){const C=new Rt(c,u.clone());h.push(C),l.add(C)}const M=[0];let x=0;for(let R=0;R<p.length-3;R+=3){const C={x:p[R],y:p[R+1],z:p[R+2]},T={x:p[R+3],y:p[R+4],z:p[R+5]},O=Math.sqrt(Math.pow(T.x-C.x,2)+Math.pow(T.y-C.y,2)+Math.pow(T.z-C.z,2));x+=O,M.push(x)}l.userData.positions=p,l.userData.points=h,l.userData.totalDistance=x,l.userData.cumulativeDistances=M;const E=R=>{h.forEach((C,T)=>{const ee=(R+T/f)%1*x;let y=0;for(;y<M.length-1&&M[y+1]<ee;)y++;const w=M[y],Y=M[y+1]-w,L=(ee-w)/Y,X={x:p[y*3],y:p[y*3+1],z:p[y*3+2]},H={x:p[(y+1)*3],y:p[(y+1)*3+1],z:p[(y+1)*3+2]};C.position.set(X.x+(H.x-X.x)*L,X.y+(H.y-X.y)*L,X.z+(H.z-X.z)*L)})};l.userData.animate=R=>{E(R)}}).catch(g=>{console.error("Error loading jet stream data:",g)}),window.addEventListener("resize",()=>{o.resolution.set(window.innerWidth,window.innerHeight)}),l.visible=!1,l):(console.error("No valid data path for year:",i),l)}function Ga(i,e=1.01,t=.8,n=16777215){const r=new Hn,s=new xi(e,64,32),a=new Ws().load(`/polar-vortex-viz/public/assets/textures/seaice/seaice_${i}.png`),l=new Hs({map:a,transparent:!0,opacity:t,color:n,side:un,depthWrite:!1}),c=new Rt(s,l);return r.add(c),r.visible=!1,r}function IS(i,e=1.03,t=.7,n=!1){const r=new Hn,s=new xi(e,64,32),o=new Ws;let a,l;if(i.startsWith("2010-02"))l=`/polar-vortex-viz/output/normal/temperature_overlays_normal_2010_feb/temp_${i}.png`,console.log("Loading normal day temperature data from:",l),a=o.load(l);else return console.error(`Unsupported date format: ${i}`),r;a.onload=()=>{console.log(`Successfully loaded temperature texture for ${i}`)},a.onerror=h=>{console.error(`Failed to load temperature texture for ${i}:`,h)};const c=new xo({map:a,transparent:!0,opacity:t,side:un,depthWrite:!1,emissiveMap:a}),u=new Rt(s,c);return r.add(u),r.visible=!1,r}class Qc{static createObject(e){switch(e.type){case"3dObject":return this.create3DObject(e);case"intro-header":case"intro-segment":case"header":case"segment":case"annotation":return this.createText(e);case"button":return this.createButton(e);default:return console.warn(`Unknown object type: ${e.type}`),null}}static createText(e){const t=document.createElement("div"),n=e.content.replace(/\$\$(.*?)\$\$|\$(.*?)\$/g,s=>`###LATEX${encodeURIComponent(s)}###`);let r=Ze.parse(n);return r=r.replace(/###LATEX(.*?)###/g,s=>decodeURIComponent(s.replace("###LATEX","").replace("###",""))),t.innerHTML=r,r.match(/\$\$(.*?)\$\$|\$(.*?)\$/)&&window.MathJax&&window.MathJax.typesetPromise&&MathJax.typesetPromise([t]).catch(s=>{console.warn("MathJax processing failed:",s)}),t.className=`text-element text-type-${e.type}`,{type:"text",element:t}}static create3DObject(e){if(e.id==="earth"){const t=new xi(1,64,64),r=new Ws().load("/polar-vortex-viz/public/assets/textures/2_no_clouds_8k_no_seaice.jpg"),s=new xo({map:r,specular:3355443}),o=new Rt(t,s);o.scale.set(1,1,1),o.rotation.z=23.5*Math.PI/180;const a=AS(12,.1,13298175);o.add(a);const l=Ga("2001",1.01,.6,16777215);o.add(l);const c=Ga("2002",1.01,.6,16777215),u=Ga("2003",1.01,.6,16777215);o.add(c),o.add(u);const h={},f={};for(let m=1;m<=14;m++){const g=`2010-02-${m.toString().padStart(2,"0")}`,_=DS(`${g}T00:00:00.000000000`,1.05,.05,12312315,!0),d=`jetStream${g}`;h[d]=_,o.add(_);const p=IS(g,1.03,.7,!0),M=`temp${g}`;f[M]=p,o.add(p)}return{type:"3dObject",object:o,extras:{needsLight:!0,atmosphereHotNonlinear:a,...h,...f,seaIce2001:l,seaIce2002:c,seaIce2003:u,material:s}}}return null}static createButton(e){const t=document.createElement("button");return t.textContent=e.content,t.style.position="absolute",t.style.left=`${e.position.x}%`,t.style.top=`${e.position.y}%`,t.style.transform="translate(-50%, -50%)",t.style.opacity="0",e.style&&(e.style.className&&(t.className=e.style.className),Object.entries(e.style).forEach(([n,r])=>{n!=="className"&&(t.style[n]=r)})),{type:"button",element:t}}}class NS{constructor(){this.lastLoggedProgress=-1,this.logThreshold=.01,this.lastEarthPosition=null}logProgress(e){Math.abs(e-this.lastLoggedProgress)>=this.logThreshold&&(console.log(`Scroll Progress: ${(e*100).toFixed(2)}%`),this.lastLoggedProgress=e)}logObjectState(e,t){if(e==="earth"){const n=JSON.stringify(t.position);this.lastEarthPosition!==n&&(console.log("%cEarth Position Change:","color: #ff0000; font-weight: bold"),console.log("Previous:",this.lastEarthPosition?JSON.parse(this.lastEarthPosition):"Initial"),console.log("Current:",t.position),console.log("Scroll Progress:",this.lastLoggedProgress),console.log("Transforms:",t.transforms),this.lastEarthPosition=n)}}}class US{constructor(e){this.container=document.getElementById(e),this.backgrounds=new Map,this.currentBackground=null,this.currentProgress=0}loadBackground(e){const t=new Image;t.src=e.file,t.onload=()=>{t.className="background-image";const n=e.entry.at===0;t.style.cssText=`
                opacity: ${n?"1":"0"} !important;
                visibility: visible !important;
                display: block !important;
            `,this.backgrounds.set(e.id,{element:t,config:e});const r=Array.from(this.backgrounds.values()).sort((s,o)=>s.config.entry.at-o.config.entry.at);this.container.innerHTML="",r.forEach(s=>{this.container.appendChild(s.element)})},t.onerror=n=>{console.error("Failed to load background image:",e.file,n)}}updateProgress(e){this.currentProgress=e,this.backgrounds.forEach(({element:t,config:n})=>{const r=e>=n.entry.at&&e<=n.exit.at;t.style.opacity=r?"1":"0"})}}console.log("BASE_URL:","/polar-vortex-viz/");console.log("Testing asset URLs:");["public/assets/textures/2_no_clouds_8k_no_seaice.jpg","public/assets/textures/rodinia_unpix.png","public/assets/sagelabs-favicon.png"].forEach(i=>{const e=new Image;e.onload=()=>console.log(`✓ Asset found: ${i}`),e.onerror=()=>console.error(`✗ Asset NOT found: ${i}`),e.src=`/polar-vortex-viz/${i}`});qe.enabled=!0;qe.legacyMode=!1;class OS{constructor(e){this.container=document.getElementById(e),this.lifecycle=new jy,this.debugLogger=new NS,this.backgroundManager=new US("background-container"),this.setupScene();let t=null;const n=(h,f)=>{const m=this.objects.get("sim-v-plot");if(m&&m.extras.plot){const g=new cs,_=g.generateTempRange(),d={temps:_,values:_.map(x=>g.calculatePotential(x,parseFloat(h))),initialTemp:parseFloat(f)},p=g.simulateTemperature(parseFloat(f),parseFloat(h),1e3,1e6);t={...p,albedos:p.temperatures.map(x=>g.calculateAlbedo(x))};const M=p.temperatures[p.temperatures.length-1];m.extras.plot.updatePlot(d,M)}},r=h=>{const f=this.objects.get("sim-solution-plot");if(f&&f.extras.plot&&h){const g=h.temperatures[h.temperatures.length-1],_=h.temperatures.findIndex(M=>Math.abs(M-g)<.05),d=_!==-1?_+1:h.temperatures.length,p={times:h.times.slice(0,d),temperatures:h.temperatures.slice(0,d)};f.extras.plot.updatePlot(p)}};let s=null;if(ka.objects.forEach(h=>{const f=Qc.createObject(h);f&&(h.id==="sim-controls"&&(s=f),f.type==="3dObject"?(this.scene.add(f.object),f.extras&&f.extras.shadowCylinder&&this.scene.add(f.extras.shadowCylinder)):f.type==="plot"?this.container.appendChild(f.object):this.container.appendChild(f.element),this.objects.set(h.id,f),this.lifecycle.registerObject(h),f.positionLogged||(f==null||f.object,f.positionLogged=!0))}),s){const h=s.controls.gSlider.value,f=s.controls.tempSlider.value;n(h,f),r(t);const m=this.objects.get("earth");if(m&&m.extras&&m.extras.simIceGroup&&t){const g=t.albedos[0],_=Math.min(Math.max((g-.13)/(.57-.13),0),1);m.extras.simIceGroup.visible=!0,m.extras.simIceGroup.children.forEach(p=>{p.scale.set(_,_,1)});const d=new CustomEvent("temp-slider-change",{detail:{value:f}});document.dispatchEvent(d)}}this.bindEvents(),this.animate(),this.lastProgress=0,this.lastScrollTime=null,this.lastScrollY=0,this.scrollVelocity=0,this.lastVerifyTime=0,document.body.style.minHeight=`${Hc.totalScenes*Hc.heightPerScene}vh`,this.earthTextures=new Map;const o=new Ws,a=o.load("public/assets/textures/2_no_clouds_8k_no_seaice.jpg",h=>{h.colorSpace="srgb";const f=this.objects.get("earth");f&&f.extras&&(f.extras.material.map=h,f.extras.material.needsUpdate=!0,this.renderer.render(this.scene,this.camera))});this.earthTextures.set("default",a),Lt.forEach(h=>{if(h.id==="earthTexture"){const f=o.load(h.file);f.colorSpace="srgb",this.earthTextures.set(h.file,f)}});const l=this.objects.get("simulation-button");l&&l.element&&l.element.addEventListener("click",()=>{this.initSimulation(),this.enterSimulation()});const c=sessionStorage.getItem("returnScroll");c&&(window.scrollTo(0,parseFloat(c)),sessionStorage.removeItem("returnScroll")),document.addEventListener("g-slider-change",h=>{if(!s)return;const f=h.detail.value,m=s.controls.tempSlider.value;n(f,m);const g=this.objects.get("earth");if(g&&g.extras&&g.extras.simAtmosphereHotNonlinear){const _=g.extras.simAtmosphereHotNonlinear;_.visible=!0;const d=(parseFloat(f)-.3)/(.45-.3);_.children.forEach((p,M)=>{if(p.material){const x=M/(_.children.length-1);p.material.opacity=d*(.1*(.5-Math.pow(x,3.5)))}})}r(t)}),document.addEventListener("temp-slider-change",h=>{if(!s)return;const f=h.detail.value,m=s.controls.gSlider.value;n(m,f),r(t)});const u=this.updateObjects.bind(this);this.updateObjects=()=>{u();const h=document.documentElement.scrollHeight-window.innerHeight,f=window.scrollY/h,m=this.objects.get("earth");if(m&&m.extras){const g=m.extras.atmosphereHotNonlinear,_=m.extras.simAtmosphereHotNonlinear,d=m.extras.simIceGroup;if(g&&_)if(f>=oh&&f<=Co){if(g.visible=!1,_.visible=!0,d){d.visible=!0;const p=this.objects.get("sim-controls");if(p){const M=p.controls.tempSlider.value,E=new cs().calculateAlbedo(parseFloat(M)),R=Math.min(Math.max((E-.13)/(.57-.13),0),1);d.children.forEach(C=>{C.scale.set(R,R,1)})}}}else g.visible=!0,_.visible=!1,d&&(d.visible=!1)}if(m&&m.extras.snowballEarthGroup){const g=Lt.find(_=>_.id==="snowballEarthGroup");if(g){const{entry:_,exit:d,startDecrease:p,startSize:M,endSize:x,entryDuration:E}=g;if(f>=_.at&&f<=d.at){m.extras.snowballEarthGroup.visible=!0;let R;f<=_.at+g.entryDuration?R=(f-_.at)/g.entryDuration:f>=d.at-g.exitDuration?R=(d.at-f)/g.exitDuration:R=1,m.extras.snowballEarthGroup.children.forEach(C=>{C.scale.set(R,R,1)})}else m.extras.snowballEarthGroup.visible=!1}}Lt.forEach(g=>{if(g.id==="atmPaleBlueDot1"){const _=m.extras.atmPaleBlueDot1;if(f>=g.entry.at&&f<=g.exit.at){_.visible=!0;const d=(f-g.entry.at)/(g.exit.at-g.entry.at),p=g.entryOpacity+(g.exitOpacity-g.entryOpacity)*d;_.material.opacity=p,_.material.emissive.setHex(g.color)}else _.visible=!1}}),Lt.forEach(g=>{if(g.id==="atmPaleBlueDot2"){const _=m.extras.atmPaleBlueDot2;if(f>=g.entry.at&&f<=g.exit.at){_.visible=!0;const d=(f-g.entry.at)/(g.exit.at-g.entry.at),p=g.entryOpacity+(g.exitOpacity-g.entryOpacity)*d;_.material.opacity=p,_.material.emissive.setHex(g.color)}else _.visible=!1}}),Lt.forEach(g=>{if(g.id==="icePaleBlueDot"){const _=m.extras.icePaleBlueDot;if(f>=g.entry.at&&f<=g.exit.at){_.visible=!0;const p=(f-g.entry.at)/(g.exit.at-g.entry.at)*g.maxRadius;_.children.forEach(M=>{M.scale.set(p,p,1)})}else _.visible=!1}}),Lt.forEach(g=>{if(g.id==="iceGroup2"){const _=this.objects.get("earth");if(_&&_.extras&&_.extras.iceGroup2){const d=_.extras.iceGroup2;if(f>=g.entry.at&&f<=g.exit.at){d.visible=!0;const M=(f-g.entry.at)/(g.exit.at-g.entry.at)*g.maxRadius;d.children.forEach(x=>{x.scale.set(M,M,1)})}else d.visible=!1}}}),Lt.forEach(g=>{if(g.id==="earthScreenMovement"){let _=0;g.movements.forEach(d=>{if(f>=d.startAt)if(f<=d.endAt){const p=(f-d.startAt)/(d.endAt-d.startAt),M=FS(p);_=d.startOffset+(d.endOffset-d.startOffset)*M}else _=d.endOffset}),_!==0&&this.moveEarthInScreenSpace(_)}}),Lt.forEach(g=>{if(g.type==="yearSequence"){const _=this.objects.get("earth");if(!_||!_.extras.animatedJetStream)return;const d=_.extras.animatedJetStream;if(f>=g.entry.at&&f<=g.exit.at){const p=g.years.find(M=>f>=M.entry.at&&f<=M.exit.at);p&&(console.log(`[DEBUG] Showing jet stream for year ${p.year}`),d.showYear(p.year))}else d.hideAll()}}),Lt.forEach(g=>{if(g.type==="jetStream"){const _=m.extras[g.id];if(_){const d=f>=g.entry.at&&f<=g.exit.at;_.visible=d}}}),Lt.forEach(g=>{if(g.type==="seaIce"){const _=m.extras[g.id];if(_){const d=g.entry.at,p=g.exit.at,M=f>=d&&f<=p;_.visible!==M&&(_.visible=M,console.log(`${g.id} visibility changed to: ${M}`))}}}),Lt.forEach(g=>{if(g.type==="temperature"){const _=m.extras[g.id];if(_){const d=g.entry.at,p=g.exit.at,M=f>=d&&f<=p;_.visible!==M&&(_.visible=M,console.log(`${g.id} visibility changed to: ${M}`))}}})},document.addEventListener("run-animation-click",()=>{if(!t)return;const h=this.objects.get("earth"),f=this.objects.get("sim-v-plot"),m=this.objects.get("sim-solution-plot"),g=this.objects.get("sim-controls");if(!h||!h.extras||!h.extras.simIceGroup||!f||!f.extras.plot||!m||!m.extras.plot||!g)return;const _=g.controls.tempSlider,d=g.controls.gSlider.value,p=new cs;_.disabled=!0;const M=h.extras.simIceGroup;M.visible=!0;const{temperatures:x,albedos:E}=t,C=5e3/60;let T=0,O=0;const ee=.05,y=x[x.length-1],w=x.findIndex(Z=>Math.abs(Z-y)<ee),J=w!==-1?w+1:x.length;let Y;f.extras.plot.removeTrackingDot();const L=Z=>{if(Z-T<C){Y=requestAnimationFrame(L);return}if(O<J&&Math.abs(x[O]-y)>ee){const W=E[O],$=Math.min(Math.max((W-.13)/(.57-.13),0),1);M.children.forEach(ae=>{ae.scale.set($,$,1)});const K=p.calculatePotential(x[O],parseFloat(d));f.extras.plot.updateTrackingDot(x[O],K),_.value=x[O],m.extras.plot.animateToPoint(t.times[O],x[O]),O++,T=Z,Y=requestAnimationFrame(L)}else{cancelAnimationFrame(Y),_.disabled=!1;const W=x[J-1];_.value=W;const $=p.calculatePotential(W,parseFloat(d));f.extras.plot.updateTrackingDot(W,$),m.extras.plot.finishAnimation()}},X=x[0],H=p.calculatePotential(X,parseFloat(d));f.extras.plot.initTrackingDot(X,H),m.extras.plot.startAnimation(t),Y=requestAnimationFrame(L)}),document.addEventListener("temp-slider-change",h=>{var g;const f=h.detail.value,m=this.objects.get("earth");if(m&&m.extras&&m.extras.simIceGroup){const d=new cs().calculateAlbedo(parseFloat(f)),p=Math.min(Math.max((d-.13)/(.57-.13),0),1);(g=m.extras.simIceGroup.children[0])!=null&&g.userData.isAnimating||m.extras.simIceGroup.children.forEach(M=>{M.scale.set(p,p,1)})}}),Lt.forEach(h=>{h.type==="background"&&this.backgroundManager.loadBackground(h)}),this.controls=new Bc(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=.5,this.controls.enabled=!0,document.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight,f=window.scrollY/h;ka.objects.forEach(m=>{if(m.type==="animatedSolutionPlot"){const g=this.objects.get(m.id);g&&g.extras&&g.extras.plot&&(f>=m.transition.entry_from.at&&f<=m.transition.exit_to.at?g.extras.plot.startAnimation():g.extras.plot.stopAnimation())}})})}setupScene(){this.scene=new K_,this.scene.background=null,this.camera=new Vt(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.x=-4,this.camera.position.y=3.2,this.camera.position.z=3,this.camera.lookAt(0,0,0),this.renderer=new Iu({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(1779511,1),this.renderer.outputColorSpace="srgb",qe.enabled=!0,this.container.appendChild(this.renderer.domElement),this.objects=new Map;const e=new o0(4210752,.05);this.scene.add(e);const t=new a0(16777215,1);t.position.set(-10,5,10),this.scene.add(t);const n=new i0(11657727,0,1);this.scene.add(n),this.controls=new Bc(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=.5,this.controls.enabled=!1}setupObjects(){ka.forEach(e=>{this.lifecycle.registerObject(e);const t=Qc.createObject(e);t.type==="text"?this.container.appendChild(t.element):t.type==="3dObject"&&this.scene.add(t.object),this.objects.set(e.id,t)}),this.updateObjects()}updateObjects(){const e=this.lifecycle.getVisibleObjects();this.objects.forEach(t=>{t.type!=="3dObject"&&(t.type==="plot"?t.object.style.display="none":t.element.style.display="none")}),e.forEach(({id:t,state:n})=>{var c;const r=this.objects.get(t);if(!r)return;const{position:s,opacity:o,transforms:a,visible:l}=n;if(r.type==="3dObject"){if(t==="earth")r.object.position.set((s.x-50)/25,-(s.y-50)/25,0),r.object.scale.setScalar(1),r.extras&&r.extras.atmosphereHotNonlinear&&(r.extras.atmosphereHotNonlinear.visible=!0),a.translation&&(r.object.position.x+=a.translation.x/50,r.object.position.y-=a.translation.y/50),a.rotation&&(r.object.rotation.z=a.rotation);else{const u=(s.x-50)/25,h=-(s.y-50)/25;if(r.object.position.set(u,h,0),a.scale&&((c=r.extras)!=null&&c.shadowCylinder)){const f=a.scale,m=4;r.object.scale.setScalar(f),r.extras.shadowCylinder.scale.setScalar(f),r.extras.shadowCylinder.position.x=m/2*f}a.translation&&(r.object.position.x+=a.translation.x/50,r.object.position.y-=a.translation.y/50),a.rotation&&(r.object.rotation.z=a.rotation)}if(a.camera_look){const u=a.camera_look;this.camera.lookAt(u.x,u.y,u.z)}}else if(r.type.includes("plot")){if(l)switch(r.object.style.display="block",r.object.style.opacity=o,r.object.style.transform=this.getTransformString(a),r.positionLogged||(r.positionLogged=!0),r.object.id){case"sim-v-plot":break;case"sim-solution-plot":break;case"explanation-potential":r.object.style.left=`${s.x}%`,r.object.style.top=`${s.y}%`;break;case"explanation-temperature":r.object.style.left=`${s.x}%`,r.object.style.top=`${s.y}%`;break;default:r.object.style.left=`${s.x}%`,r.object.style.top=`${s.y}%`}}else l&&(r.element.style.display="block",r.element.style.left=`${s.x}%`,r.element.style.top=`${s.y}%`,r.element.style.opacity=o,r.element.style.transform=this.getTransformString(a),r.element.innerHTML.match(/\$\$(.*?)\$\$|\$(.*?)\$/)&&MathJax.typesetPromise([r.element]).catch(u=>{console.warn("MathJax reprocessing failed:",u)}))})}getTransformString(e){const t=[];return e.scale&&t.push(`scale(${e.scale})`),e.translation&&t.push(`translate(${e.translation.x}px, ${e.translation.y}px)`),e.rotation&&t.push(`rotate(${e.rotation}rad)`),t.join(" ")}bindEvents(){let e=!1,t=null;const n=o=>{const a=document.documentElement.scrollHeight-window.innerHeight,l=window.scrollY/a;if(l>=kc&&l<=zc&&!e)return o.preventDefault(),o.stopPropagation(),t||(t=window.scrollY),window.scrollTo(0,t),!1;(l<kc||l>zc)&&(e=!1,t=null)};window.addEventListener("wheel",n,{passive:!1}),window.addEventListener("touchmove",n,{passive:!1});const r=this.objects.get("return-to-story");r&&r.element&&r.element.addEventListener("click",()=>{e=!0;const o=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:zy*o,behavior:"smooth"})});const s=this.objects.get("forward-to-story");s&&s.element&&s.element.addEventListener("click",()=>{e=!0;const o=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:Hy*o,behavior:"smooth"})}),window.addEventListener("scroll",()=>{const o=Date.now(),a=o-(this.lastScrollTime||o);this.lastScrollTime=o;const l=window.scrollY,c=Math.abs(l-this.lastScrollY);this.lastScrollY=l,this.scrollVelocity=c/(a||1);const u=document.documentElement.scrollHeight-window.innerHeight,h=l/u;this.lifecycle.updateProgress(h);const f=this.objects.get("earth");if(f&&f.extras&&(Lt.forEach(g=>{var p,M;const _=((p=g.entry)==null?void 0:p.at)||0,d=((M=g.exit)==null?void 0:M.at)||1;if(g.id==="earthTexture"){if(h>=_&&h<=d){const x=this.earthTextures.get(g.file);x&&f.extras.material.map!==x&&(f.extras.material.map=x,f.extras.material.needsUpdate=!0);return}}else if(g.id==="iceGroup"){const x=f.extras.iceGroup;if(h>=_&&h<=d){x.visible=!0;const E=(h-_)/(d-_),R=g.maxRadius*E;x.children.forEach(C=>{C.scale.set(R,R,1)})}else x.visible=!1}else if(g.id==="atmosphereHotNonlinear"){const x=f.extras.atmosphereHotNonlinear;x&&(x.visible=h>=_&&h<=d)}else if(g.id==="simAtmosphereHotNonlinear"){const x=f.extras.simAtmosphereHotNonlinear;if(x){const E=h>=_&&h<=d;x.visible=E}}else if(g.id==="simIceGroup"){const x=f.extras.simIceGroup;if(h>=_&&h<=d){x.visible=!0;const E=(h-_)/(d-_),R=g.maxRadius*E;x.children.forEach(C=>{C.scale.set(R,R,1)})}else x.visible=!1}else{const x=f.extras[g.id];x&&(x.visible=h>=_&&h<=d)}}),!Lt.some(g=>{var _,d;return g.id==="earthTexture"&&h>=(((_=g.entry)==null?void 0:_.at)||0)&&h<=(((d=g.exit)==null?void 0:d.at)||1)}))){const g=this.earthTextures.get("default");g&&f.extras.material.map!==g&&(f.extras.material.map=g,f.extras.material.needsUpdate=!0)}this.backgroundManager.updateProgress(h)}),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}animate(){requestAnimationFrame(()=>this.animate());const e=this.objects.get("earth");if(e&&e.object){const n=23.5*Math.PI/180,r=new D(0,1,0).applyAxisAngle(new D(0,1,0),n).normalize();e.object.rotateOnAxis(r,0),e.extras&&(Object.entries(e.extras).forEach(([s,o])=>{s.startsWith("jetStream")&&o&&o.visible&&o.userData.animate&&o.userData.animate(performance.now()*1e-4)}),["seaIce2001","seaIce2002","seaIce2003"].forEach(s=>{const o=e.extras[s];o&&o.visible&&(o.visible=!0)}))}if(this.scrollVelocity>0&&(this.scrollVelocity*=.95),this.lastScrollTime&&Date.now()-this.lastScrollTime>150){if(this.scrollVelocity>.5){const t=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);this.lifecycle.forceUpdateStates(t)}this.lastScrollTime=null,this.scrollVelocity=0}this.updateObjects(),this.renderer.render(this.scene,this.camera),this.controls.update()}getCurrentScene(e){const t=this.lifecycle.getVisibleObjects();let n=0;return t.forEach(({id:r})=>{if(r.startsWith("segment-")){const s=parseInt(r.split("-")[1]);!isNaN(s)&&s>n&&(n=s)}}),n}initSimulation(){this.simulationScene||(this.simulationScene=new SimulationScene(this.container),this.simulationScene.onReturnToStory=()=>this.exitSimulation())}enterSimulation(){this.container.style.opacity=0,setTimeout(()=>{this.container.style.display="none",document.body.style.overflow="hidden",this.container.style.display="block",this.simulationScene.activate(),this.container.style.opacity=1},500)}exitSimulation(){this.container.style.opacity=0,setTimeout(()=>{this.simulationScene.deactivate();const t=(document.documentElement.scrollHeight-window.innerHeight)*.9;sessionStorage.setItem("returnScroll",t),window.location.reload()},500)}moveEarthInScreenSpace(e){const t=this.objects.get("earth");if(!t||!t.object)return;const n=new D;t.object.getWorldPosition(n);const r=n.clone().project(this.camera);r.y+=e/1e3;const s=r.unproject(this.camera);t.object.position.y=s.y}}document.addEventListener("DOMContentLoaded",()=>{new OS("canvas-container")});function FS(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}
