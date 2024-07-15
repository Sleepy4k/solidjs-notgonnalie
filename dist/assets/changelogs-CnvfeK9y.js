import{C as tt,m as nt,g as rt,c as z,i as U,h as st,F as we,t as I}from"./index-DgcURnP2.js";import{M as ot}from"./main.layout-BSrvuSIL.js";import"./auth.layout-DP1_hDvN.js";function Le(e,t){return function(){return e.apply(t,arguments)}}const{toString:it}=Object.prototype,{getPrototypeOf:fe}=Object,K=(e=>t=>{const n=it.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>K(t)===e),X=e=>t=>typeof t===e,{isArray:B}=Array,v=X("undefined");function at(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fe=A("ArrayBuffer");function ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fe(e.buffer),t}const lt=X("string"),O=X("function"),De=X("number"),Q=e=>e!==null&&typeof e=="object",ut=e=>e===!0||e===!1,G=e=>{if(K(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ft=A("Date"),dt=A("File"),pt=A("Blob"),ht=A("FileList"),mt=e=>Q(e)&&O(e.pipe),yt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=K(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},wt=A("URLSearchParams"),[bt,Et,gt,St]=["ReadableStream","Request","Response","Headers"].map(A),Rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Be=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ke=e=>!v(e)&&e!==Be;function se(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ue(t,s)||s;G(t[o])&&G(r)?t[o]=se(t[o],r):G(r)?t[o]=se({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&$(arguments[r],n);return t}const Ot=(e,t,n,{allOwnKeys:r}={})=>($(t,(s,o)=>{n&&O(s)?e[o]=Le(s,n):e[o]=s},{allOwnKeys:r}),e),Tt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),At=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Nt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!De(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),_t=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ft=A("HTMLFormElement"),Dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ut=A("RegExp"),je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{je(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},jt=()=>{},Ht=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ee="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",He={DIGIT:Ee,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Ee},qt=(e=16,t=He.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function vt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const It=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return $(r,(i,c)=>{const f=n(i,s+1);!v(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},$t=A("AsyncFunction"),Mt=e=>e&&(Q(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:B,isArrayBuffer:Fe,isBuffer:at,isFormData:yt,isArrayBufferView:ct,isString:lt,isNumber:De,isBoolean:ut,isObject:Q,isPlainObject:G,isReadableStream:bt,isRequest:Et,isResponse:gt,isHeaders:St,isUndefined:v,isDate:ft,isFile:dt,isBlob:pt,isRegExp:Ut,isFunction:O,isStream:mt,isURLSearchParams:wt,isTypedArray:Pt,isFileList:ht,forEach:$,merge:se,extend:Ot,trim:Rt,stripBOM:Tt,inherits:At,toFlatObject:xt,kindOf:K,kindOfTest:A,endsWith:Ct,toArray:Nt,forEachEntry:_t,matchAll:Lt,isHTMLForm:Ft,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:je,freezeMethods:Bt,toObjectSet:kt,toCamelCase:Dt,noop:jt,toFiniteNumber:Ht,findKey:Ue,global:Be,isContextDefined:ke,ALPHABET:He,generateString:qt,isSpecCompliantForm:vt,toJSONObject:It,isAsyncFn:$t,isThenable:Mt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qe=h.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ve[e]={value:e}});Object.defineProperties(h,ve);Object.defineProperty(qe,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(qe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const zt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function Ie(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ie(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Gt(e){return a.isArray(e)&&!e.some(oe)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,g){return!a.isUndefined(g[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,g){let S=d;if(d&&!g&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Gt(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(S=a.toArray(d)))return m=Ie(m),S.forEach(function(b,j){!(a.isUndefined(b)||b===null)&&t.append(i===!0?ge([m],j,o):i===null?m:m+"[]",u(b))}),!1}return oe(d)?!0:(t.append(ge(g,m,o),u(d)),!1)}const p=[],w=Object.assign(Jt,{defaultVisitor:l,convertValue:u,isVisitable:oe});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(S,x){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(x)?x.trim():x,m,w))===!0&&y(S,m?m.concat(x):[x])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Z(e,this,t)}const $e=de.prototype;$e.append=function(t,n){this._pairs.push([t,n])};$e.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||Vt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Re{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wt=typeof URLSearchParams<"u"?URLSearchParams:de,Kt=typeof FormData<"u"?FormData:null,Xt=typeof Blob<"u"?Blob:null,Qt={isBrowser:!0,classes:{URLSearchParams:Wt,FormData:Kt,Blob:Xt},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",Zt=(e=>pe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Yt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",en=pe&&window.location.href||"http://localhost",tn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:Zt,hasStandardBrowserWebWorkerEnv:Yt,origin:en},Symbol.toStringTag,{value:"Module"})),T={...tn,...Qt};function nn(e,t){return Z(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function rn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ge(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=sn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(rn(r),s,n,0)}),n}return null}function on(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:ze,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ge(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return nn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),on(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const an=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&an[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function ln(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function fn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function dn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class R{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=H(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=J(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!un(t))i(cn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return ln(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=H(i),i){const c=a.findKey(r,i);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?fn(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=H(i);r[c]||(dn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}R.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(R.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(R);function ne(e,t){const n=this||M,r=t||n,s=R.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Je(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,h,{__CANCEL__:!0});function Ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function pn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const y=l&&u-l;return y?Math.round(w*1e3/y):void 0}}function mn(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const V=(e,t,n=3)=>{let r=0;const s=hn(50,250);return mn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},n)},yn=T.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),wn=T.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function En(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t){return e&&!bn(t)?En(e,t):t}const Te=e=>e instanceof R?{...e}:e;function F(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Te(u),Te(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=f[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==c||(n[l]=w)}),n}const Ke=e=>{const t=F({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=R.from(i),t.url=Me(We(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&yn(t.url))){const u=s&&o&&wn.read(o);u&&i.set(s,u)}return t},gn=typeof XMLHttpRequest<"u",Sn=gn&&function(e){return new Promise(function(n,r){const s=Ke(e);let o=s.data;const i=R.from(s.headers).normalize();let{responseType:c}=s,f;function u(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let l=new XMLHttpRequest;l.open(s.method.toUpperCase(),s.url,!0),l.timeout=s.timeout;function p(){if(!l)return;const y=R.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Ve(function(S){n(S),u()},function(S){r(S),u()},m),l=null}"onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,s,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,l)),l=null},l.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||ze;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,l)),l=null},o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(d,m){l.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(l.withCredentials=!!s.withCredentials),c&&c!=="json"&&(l.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&l.addEventListener("progress",V(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",V(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{l&&(r(!y||y.type?new k(null,e,l):y),l.abort(),l=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const w=pn(s.url);if(w&&T.protocols.indexOf(w)===-1){r(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Rn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const u=f instanceof Error?f:this.reason;n.abort(u instanceof h?u:new k(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},On=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Tn=async function*(e,t,n){for await(const r of e)yield*On(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Ae=(e,t,n,r,s)=>{const o=Tn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:u}=await o.next();if(f){c.close(),r();return}let l=u.byteLength;n&&n(i+=l),c.enqueue(new Uint8Array(u))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},xe=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Xe=Y&&typeof ReadableStream=="function",ie=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),An=Xe&&(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Ce=64*1024,ae=Xe&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),W={stream:ae&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const xn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ie(e)).byteLength},Cn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??xn(t)},Nn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:p="same-origin",fetchOptions:w}=Ke(e);u=u?(u+"").toLowerCase():"text";let[y,d]=s||o||i?Rn([s,o],i):[],m,g;const S=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let x;try{if(f&&An&&n!=="get"&&n!=="head"&&(x=await Cn(l,r))!==0){let N=new Request(t,{method:"POST",body:r,duplex:"half"}),D;a.isFormData(r)&&(D=N.headers.get("content-type"))&&l.setContentType(D),N.body&&(r=Ae(N.body,Ce,xe(x,V(f)),null,ie))}a.isString(p)||(p=p?"cors":"omit"),g=new Request(t,{...w,signal:y,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let b=await fetch(g);const j=ae&&(u==="stream"||u==="response");if(ae&&(c||j)){const N={};["status","statusText","headers"].forEach(ye=>{N[ye]=b[ye]});const D=a.toFiniteNumber(b.headers.get("content-length"));b=new Response(Ae(b.body,Ce,c&&xe(D,V(c,!0)),j&&S,ie),N)}u=u||"text";let et=await W[a.findKey(W,u)||"text"](b,e);return!j&&S(),d&&d(),await new Promise((N,D)=>{Ve(N,D,{data:et,headers:R.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:g})})}catch(b){throw S(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,g),{cause:b.cause||b}):h.from(b,b&&b.code,e,g)}}),ce={http:zt,xhr:Sn,fetch:Nn};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ne=e=>`- ${e}`,Pn=e=>a.isFunction(e)||e===null||e===!1,Qe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Pn(n)&&(r=ce[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ne).join(`
`):" "+Ne(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ce};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Pe(e){return re(e),e.headers=R.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qe.getAdapter(e.adapter||M.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return Je(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const Ze="1.7.2",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _e={};he.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!_e[i]&&(_e[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function _n(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const le={assertOptions:_n,validators:he},P=le.validators;class L{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=R.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let l,p=0,w;if(!f){const d=[Pe.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,u),w=d.length,l=Promise.resolve(n);p<w;)l=l.then(d[p++],d[p++]);return l}w=c.length;let y=n;for(p=0;p<w;){const d=c[p++],m=c[p++];try{y=d(y)}catch(g){m.call(this,g);break}}try{l=Pe.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,w=u.length;p<w;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=F(this.defaults,t);const n=We(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){L.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}L.prototype[t]=n(),L.prototype[t+"Form"]=n(!0)});class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}function Ln(e){return function(n){return e.apply(null,n)}}function Fn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function Ye(e){const t=new L(e),n=Le(L.prototype.request,t);return a.extend(n,L.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ye(F(e,s))},n}const E=Ye(M);E.Axios=L;E.CanceledError=k;E.CancelToken=me;E.isCancel=Je;E.VERSION=Ze;E.toFormData=Z;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Ln;E.isAxiosError=Fn;E.mergeConfig=F;E.AxiosHeaders=R;E.formToJSON=e=>Ge(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Qe.getAdapter;E.HttpStatusCode=ue;E.default=E;var _=(e=>(e[e.CHANGELOG=tt]="CHANGELOG",e))(_||{}),C=(e=>(e.GET="get",e.POST="post",e.PUT="put",e.PATCH="patch",e.DELETE="delete",e))(C||{});const Dn=(e=_.CHANGELOG)=>{let t=_.CHANGELOG.valueOf();switch(e){case _.CHANGELOG:t=_.CHANGELOG.valueOf();break;default:t=_.CHANGELOG.valueOf();break}return E.create({baseURL:String(t),headers:{Accept:"*/*","Content-Type":"application/json"}})},Un=e=>{let t=[];return e.split(`
`).map(r=>{const s=r.indexOf(":"),o=r.substring(s+2);t.push(o)}),t},q=async(e,t=C.GET)=>{const n=nt({server:_.GPT,name:"Server",headers:{}},e),r={headers:{...n.headers},params:n.params,responseType:"json"},s=Dn(n.server);try{let o;if(t==C.GET||t==C.DELETE?o=await s[t.valueOf()](n.url,r):o=await s[t.valueOf()](n.url,n.data,r),n.success)n.success(o);else{const i=o.data;console.log(`[${n.name}] ${i.message}`)}return o?o.data:null}catch(o){if(n.error&&n.error(o.response),o.response){const i=o.response.data;if(i.data&&i.data.length>0){const c=Un(i.data[0]);for(let f=0;f<c.length;f++)console.log(`[${n.name}] ${c[f]}`)}}}finally{n.finally&&n.finally()}},Bn={get:async e=>await q(e,C.GET),post:async e=>await q(e,C.POST),put:async e=>{await q(e,C.PUT)},patch:async e=>{await q(e,C.PATCH)},delete:async e=>{await q(e,C.DELETE)}};var kn=I('<div class="overflow-y-auto mb-[5vh]">'),jn=I('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4 h-auto"><h1 class="text-2xl font-bold text-center">Changelogs'),Hn=I('<div class="flex justify-center items-center mt-[25vh]"><span class="loading loading-ring loading-lg h-32 w-32 border-t-2 border-b-2">'),qn=I('<div class="card shadow-2xl"><div class=card-body><h2 class="text-lg font-bold">Version <!> (<!>)</h2><ul class="list-disc list-inside">'),vn=I("<li>");function zn(){const[e]=rt(async()=>(await new Promise(n=>setTimeout(n,1e3)),await Bn.get({url:"changelogs/main.json",name:"System",server:_.CHANGELOG})));return z(ot,{title:"Change Logs",get children(){var t=jn(),n=t.firstChild;return n.firstChild,U(n,z(st,{get fallback(){return Hn()},get children(){var r=kn();return U(r,z(we,{get each(){return e()},children:s=>(()=>{var o=qn(),i=o.firstChild,c=i.firstChild,f=c.firstChild,u=f.nextSibling,l=u.nextSibling,p=l.nextSibling;p.nextSibling;var w=c.nextSibling;return U(c,()=>s.version,u),U(c,()=>s.date,p),U(w,z(we,{get each(){return s.changes},children:y=>(()=>{var d=vn();return U(d,y),d})()})),o})()})),r}}),null),t}})}export{zn as default};