const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-BBYqwLsD.js","./main.layout-Bf07d-3g.js","./auth.layout-BXNnW5Rk.js","./contact-BYcqRKcE.js","./safe.form-GaaacsvZ.js","./changelogs-SHNrcl_Y.js","./home-BpEjlkHI.js","./question.model-BA7JUW26.js","./add-DsC0-Gl-.js","./edit-IAybl3ty.js","./answer-BBIyTxvK.js","./answer.model-DcXM2-aC.js","./login-CZBlLmco.js","./user.model-BhenvFXu.js","./register-PicbZq1e.js","./share-79_z3s0y.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Y={context:void 0,registry:void 0};function nn(n){Y.context=n}function mw(){return{...Y.context,id:`${Y.context.id}${Y.context.count++}-`,count:0}}const gw=(n,e)=>n===e,ln=Symbol("solid-proxy"),Hc=Symbol("solid-track"),Ja={equals:gw};let bp=Pp;const cn=1,go=2,Ip={owned:null,cleanups:null,context:null,owner:null},vc={};var oe=null;let H=null,_w=null,ve=null,bt=null,_t=null,Nl=0;function Jr(n,e){const t=ve,r=oe,i=n.length===0,s=e===void 0?r:e,o=i?Ip:{owned:null,cleanups:null,context:s?s.context:null,owner:s},l=i?n:()=>n(()=>Fe(()=>wr(o)));oe=o,ve=null;try{return Ut(l,!0)}finally{ve=t,oe=r}}function Le(n,e){e=e?Object.assign({},Ja,e):Ja;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},r=i=>(typeof i=="function"&&(H&&H.running&&H.sources.has(t)?i=i(t.tValue):i=i(t.value)),Rp(t,i));return[Sp.bind(t),r]}function _d(n,e,t){const r=Dl(n,e,!0,cn);ds(r)}function Ve(n,e,t){const r=Dl(n,e,!1,cn);ds(r)}function ti(n,e,t){bp=Aw;const r=Dl(n,e,!1,cn),i=ni&&Sn(ni);i&&(r.suspense=i),r.user=!0,_t?_t.push(r):ds(r)}function ye(n,e,t){t=t?Object.assign({},Ja,t):Ja;const r=Dl(n,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,ds(r),Sp.bind(r)}function yw(n){return n&&typeof n=="object"&&"then"in n}function ww(n,e,t){let r,i,s;arguments.length===2&&typeof e=="object"||arguments.length===1?(r=!0,i=n,s={}):(r=n,i=e,s={});let o=null,l=vc,u=null,h=!1,p=!1,y="initialValue"in s,v=typeof r=="function"&&ye(r);const C=new Set,[N,x]=(s.storage||Le)(s.initialValue),[D,j]=Le(void 0),[U,z]=Le(void 0,{equals:!1}),[G,ae]=Le(y?"ready":"unresolved");if(Y.context){u=`${Y.context.id}${Y.context.count++}`;let A;s.ssrLoadFrom==="initial"?l=s.initialValue:Y.load&&(A=Y.load(u))&&(l=A)}function re(A,S,P,E){return o===A&&(o=null,E!==void 0&&(y=!0),(A===l||S===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(E,{value:S})),l=vc,H&&A&&h?(H.promises.delete(A),h=!1,Ut(()=>{H.running=!0,R(S,P)},!1)):R(S,P)),S}function R(A,S){Ut(()=>{S===void 0&&x(()=>A),ae(S!==void 0?"errored":y?"ready":"unresolved"),j(S);for(const P of C.keys())P.decrement();C.clear()},!1)}function b(){const A=ni&&Sn(ni),S=N(),P=D();if(P!==void 0&&!o)throw P;return ve&&!ve.user&&A&&_d(()=>{U(),o&&(A.resolved&&H&&h?H.promises.add(o):C.has(A)||(A.increment(),C.add(A)))}),S}function I(A=!0){if(A!==!1&&p)return;p=!1;const S=v?v():r;if(h=H&&H.running,S==null||S===!1){re(o,Fe(N));return}H&&o&&H.promises.delete(o);const P=l!==vc?l:Fe(()=>i(S,{value:N(),refetching:A}));return yw(P)?(o=P,"value"in P?(P.status==="success"?re(o,P.value,void 0,S):re(o,void 0,Wc(P.value),S),P):(p=!0,queueMicrotask(()=>p=!1),Ut(()=>{ae(y?"refreshing":"pending"),z()},!1),P.then(E=>re(P,E,void 0,S),E=>re(P,void 0,Wc(E),S)))):(re(o,P,void 0,S),P)}return Object.defineProperties(b,{state:{get:()=>G()},error:{get:()=>D()},loading:{get(){const A=G();return A==="pending"||A==="refreshing"}},latest:{get(){if(!y)return b();const A=D();if(A&&!o)throw A;return N()}}}),v?_d(()=>I(!1)):I(!1),[b,{refetch:I,mutate:x}]}function Ap(n){return Ut(n,!1)}function Fe(n){if(ve===null)return n();const e=ve;ve=null;try{return n()}finally{ve=e}}function Ou(n,e,t){const r=Array.isArray(n);let i,s=t&&t.defer;return o=>{let l;if(r){l=Array(n.length);for(let h=0;h<n.length;h++)l[h]=n[h]()}else l=n();if(s)return s=!1,o;const u=Fe(()=>e(l,i,o));return i=l,u}}function vw(n){ti(()=>Fe(n))}function hs(n){return oe===null||(oe.cleanups===null?oe.cleanups=[n]:oe.cleanups.push(n)),n}function zc(){return ve}function xu(){return oe}function Cp(n,e){const t=oe,r=ve;oe=n,ve=null;try{return Ut(e,!0)}catch(i){Mu(i)}finally{oe=t,ve=r}}function Ew(n){if(H&&H.running)return n(),H.done;const e=ve,t=oe;return Promise.resolve().then(()=>{ve=e,oe=t;let r;return ni&&(r=H||(H={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(i=>r.resolve=i)),r.running=!0),Ut(n,!1),ve=oe=null,r?r.done:void 0})}const[xP,yd]=Le(!1);function Tw(n){_t.push.apply(_t,n),n.length=0}function Yn(n,e){const t=Symbol("context");return{id:t,Provider:Cw(t),defaultValue:n}}function Sn(n){return oe&&oe.context&&oe.context[n.id]!==void 0?oe.context[n.id]:n.defaultValue}function Lu(n){const e=ye(n),t=ye(()=>Gc(e()));return t.toArray=()=>{const r=t();return Array.isArray(r)?r:r!=null?[r]:[]},t}let ni;function bw(){return ni||(ni=Yn())}function Sp(){const n=H&&H.running;if(this.sources&&(n?this.tState:this.state))if((n?this.tState:this.state)===cn)ds(this);else{const e=bt;bt=null,Ut(()=>el(this),!1),bt=e}if(ve){const e=this.observers?this.observers.length:0;ve.sources?(ve.sources.push(this),ve.sourceSlots.push(e)):(ve.sources=[this],ve.sourceSlots=[e]),this.observers?(this.observers.push(ve),this.observerSlots.push(ve.sources.length-1)):(this.observers=[ve],this.observerSlots=[ve.sources.length-1])}return n&&H.sources.has(this)?this.tValue:this.value}function Rp(n,e,t){let r=H&&H.running&&H.sources.has(n)?n.tValue:n.value;if(!n.comparator||!n.comparator(r,e)){if(H){const i=H.running;(i||!t&&H.sources.has(n))&&(H.sources.add(n),n.tValue=e),i||(n.value=e)}else n.value=e;n.observers&&n.observers.length&&Ut(()=>{for(let i=0;i<n.observers.length;i+=1){const s=n.observers[i],o=H&&H.running;o&&H.disposed.has(s)||((o?!s.tState:!s.state)&&(s.pure?bt.push(s):_t.push(s),s.observers&&kp(s)),o?s.tState=cn:s.state=cn)}if(bt.length>1e6)throw bt=[],new Error},!1)}return e}function ds(n){if(!n.fn)return;wr(n);const e=Nl;wd(n,H&&H.running&&H.sources.has(n)?n.tValue:n.value,e),H&&!H.running&&H.sources.has(n)&&queueMicrotask(()=>{Ut(()=>{H&&(H.running=!0),ve=oe=n,wd(n,n.tValue,e),ve=oe=null},!1)})}function wd(n,e,t){let r;const i=oe,s=ve;ve=oe=n;try{r=n.fn(e)}catch(o){return n.pure&&(H&&H.running?(n.tState=cn,n.tOwned&&n.tOwned.forEach(wr),n.tOwned=void 0):(n.state=cn,n.owned&&n.owned.forEach(wr),n.owned=null)),n.updatedAt=t+1,Mu(o)}finally{ve=s,oe=i}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?Rp(n,r,!0):H&&H.running&&n.pure?(H.sources.add(n),n.tValue=r):n.value=r,n.updatedAt=t)}function Dl(n,e,t,r=cn,i){const s={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:oe,context:oe?oe.context:null,pure:t};return H&&H.running&&(s.state=0,s.tState=r),oe===null||oe!==Ip&&(H&&H.running&&oe.pure?oe.tOwned?oe.tOwned.push(s):oe.tOwned=[s]:oe.owned?oe.owned.push(s):oe.owned=[s]),s}function Za(n){const e=H&&H.running;if((e?n.tState:n.state)===0)return;if((e?n.tState:n.state)===go)return el(n);if(n.suspense&&Fe(n.suspense.inFallback))return n.suspense.effects.push(n);const t=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<Nl);){if(e&&H.disposed.has(n))return;(e?n.tState:n.state)&&t.push(n)}for(let r=t.length-1;r>=0;r--){if(n=t[r],e){let i=n,s=t[r+1];for(;(i=i.owner)&&i!==s;)if(H.disposed.has(i))return}if((e?n.tState:n.state)===cn)ds(n);else if((e?n.tState:n.state)===go){const i=bt;bt=null,Ut(()=>el(n,t[0]),!1),bt=i}}}function Ut(n,e){if(bt)return n();let t=!1;e||(bt=[]),_t?t=!0:_t=[],Nl++;try{const r=n();return Iw(t),r}catch(r){t||(_t=null),bt=null,Mu(r)}}function Iw(n){if(bt&&(Pp(bt),bt=null),n)return;let e;if(H){if(!H.promises.size&&!H.queue.size){const r=H.sources,i=H.disposed;_t.push.apply(_t,H.effects),e=H.resolve;for(const s of _t)"tState"in s&&(s.state=s.tState),delete s.tState;H=null,Ut(()=>{for(const s of i)wr(s);for(const s of r){if(s.value=s.tValue,s.owned)for(let o=0,l=s.owned.length;o<l;o++)wr(s.owned[o]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}yd(!1)},!1)}else if(H.running){H.running=!1,H.effects.push.apply(H.effects,_t),_t=null,yd(!0);return}}const t=_t;_t=null,t.length&&Ut(()=>bp(t),!1),e&&e()}function Pp(n){for(let e=0;e<n.length;e++)Za(n[e])}function Aw(n){let e,t=0;for(e=0;e<n.length;e++){const r=n[e];r.user?n[t++]=r:Za(r)}if(Y.context){if(Y.count){Y.effects||(Y.effects=[]),Y.effects.push(...n.slice(0,t));return}else Y.effects&&(n=[...Y.effects,...n],t+=Y.effects.length,delete Y.effects);nn()}for(e=0;e<t;e++)Za(n[e])}function el(n,e){const t=H&&H.running;t?n.tState=0:n.state=0;for(let r=0;r<n.sources.length;r+=1){const i=n.sources[r];if(i.sources){const s=t?i.tState:i.state;s===cn?i!==e&&(!i.updatedAt||i.updatedAt<Nl)&&Za(i):s===go&&el(i,e)}}}function kp(n){const e=H&&H.running;for(let t=0;t<n.observers.length;t+=1){const r=n.observers[t];(e?!r.tState:!r.state)&&(e?r.tState=go:r.state=go,r.pure?bt.push(r):_t.push(r),r.observers&&kp(r))}}function wr(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),r=n.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),o=t.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,t.observerSlots[r]=o)}}if(H&&H.running&&n.pure){if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)wr(n.tOwned[e]);delete n.tOwned}Np(n,!0)}else if(n.owned){for(e=n.owned.length-1;e>=0;e--)wr(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}H&&H.running?n.tState=0:n.state=0}function Np(n,e){if(e||(n.tState=0,H.disposed.add(n)),n.owned)for(let t=0;t<n.owned.length;t++)Np(n.owned[t])}function Wc(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function Mu(n,e=oe){throw Wc(n)}function Gc(n){if(typeof n=="function"&&!n.length)return Gc(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const r=Gc(n[t]);Array.isArray(r)?e.push.apply(e,r):e.push(r)}return e}return n}function Cw(n,e){return function(r){let i;return Ve(()=>i=Fe(()=>(oe.context={...oe.context,[n]:r.value},Lu(()=>r.children))),void 0),i}}const Sw=Symbol("fallback");function vd(n){for(let e=0;e<n.length;e++)n[e]()}function Rw(n,e,t={}){let r=[],i=[],s=[],o=0,l=e.length>1?[]:null;return hs(()=>vd(s)),()=>{let u=n()||[],h,p;return u[Hc],Fe(()=>{let v=u.length,C,N,x,D,j,U,z,G,ae;if(v===0)o!==0&&(vd(s),s=[],r=[],i=[],o=0,l&&(l=[])),t.fallback&&(r=[Sw],i[0]=Jr(re=>(s[0]=re,t.fallback())),o=1);else if(o===0){for(i=new Array(v),p=0;p<v;p++)r[p]=u[p],i[p]=Jr(y);o=v}else{for(x=new Array(v),D=new Array(v),l&&(j=new Array(v)),U=0,z=Math.min(o,v);U<z&&r[U]===u[U];U++);for(z=o-1,G=v-1;z>=U&&G>=U&&r[z]===u[G];z--,G--)x[G]=i[z],D[G]=s[z],l&&(j[G]=l[z]);for(C=new Map,N=new Array(G+1),p=G;p>=U;p--)ae=u[p],h=C.get(ae),N[p]=h===void 0?-1:h,C.set(ae,p);for(h=U;h<=z;h++)ae=r[h],p=C.get(ae),p!==void 0&&p!==-1?(x[p]=i[h],D[p]=s[h],l&&(j[p]=l[h]),p=N[p],C.set(ae,p)):s[h]();for(p=U;p<v;p++)p in x?(i[p]=x[p],s[p]=D[p],l&&(l[p]=j[p],l[p](p))):i[p]=Jr(y);i=i.slice(0,o=v),r=u.slice(0)}return i});function y(v){if(s[p]=v,l){const[C,N]=Le(p);return l[p]=N,e(u[p],C)}return e(u[p])}}}let Pw=!1;function se(n,e){if(Pw&&Y.context){const t=Y.context;nn(mw());const r=Fe(()=>n(e||{}));return nn(t),r}return Fe(()=>n(e||{}))}function ka(){return!0}const Kc={get(n,e,t){return e===ln?t:n.get(e)},has(n,e){return e===ln?!0:n.has(e)},set:ka,deleteProperty:ka,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:ka,deleteProperty:ka}},ownKeys(n){return n.keys()}};function Ec(n){return(n=typeof n=="function"?n():n)?n:{}}function kw(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function Kr(...n){let e=!1;for(let o=0;o<n.length;o++){const l=n[o];e=e||!!l&&ln in l,n[o]=typeof l=="function"?(e=!0,ye(l)):l}if(e)return new Proxy({get(o){for(let l=n.length-1;l>=0;l--){const u=Ec(n[l])[o];if(u!==void 0)return u}},has(o){for(let l=n.length-1;l>=0;l--)if(o in Ec(n[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<n.length;l++)o.push(...Object.keys(Ec(n[l])));return[...new Set(o)]}},Kc);const t={},r=Object.create(null);for(let o=n.length-1;o>=0;o--){const l=n[o];if(!l)continue;const u=Object.getOwnPropertyNames(l);for(let h=u.length-1;h>=0;h--){const p=u[h];if(p==="__proto__"||p==="constructor")continue;const y=Object.getOwnPropertyDescriptor(l,p);if(!r[p])r[p]=y.get?{enumerable:!0,configurable:!0,get:kw.bind(t[p]=[y.get.bind(l)])}:y.value!==void 0?y:void 0;else{const v=t[p];v&&(y.get?v.push(y.get.bind(l)):y.value!==void 0&&v.push(()=>y.value))}}}const i={},s=Object.keys(r);for(let o=s.length-1;o>=0;o--){const l=s[o],u=r[l];u&&u.get?Object.defineProperty(i,l,u):i[l]=u?u.value:void 0}return i}function Nw(n,...e){if(ln in n){const i=new Set(e.length>1?e.flat():e[0]),s=e.map(o=>new Proxy({get(l){return o.includes(l)?n[l]:void 0},has(l){return o.includes(l)&&l in n},keys(){return o.filter(l=>l in n)}},Kc));return s.push(new Proxy({get(o){return i.has(o)?void 0:n[o]},has(o){return i.has(o)?!1:o in n},keys(){return Object.keys(n).filter(o=>!i.has(o))}},Kc)),s}const t={},r=e.map(()=>({}));for(const i of Object.getOwnPropertyNames(n)){const s=Object.getOwnPropertyDescriptor(n,i),o=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let l=!1,u=0;for(const h of e)h.includes(i)&&(l=!0,o?r[u][i]=s.value:Object.defineProperty(r[u],i,s)),++u;l||(o?t[i]=s.value:Object.defineProperty(t,i,s))}return[...r,t]}function Wt(n){let e,t;const r=i=>{const s=Y.context;if(s){const[l,u]=Le();Y.count||(Y.count=0),Y.count++,(t||(t=n())).then(h=>{nn(s),Y.count--,u(()=>h.default),nn()}),e=l}else if(!e){const[l]=ww(()=>(t||(t=n())).then(u=>u.default));e=l}let o;return ye(()=>(o=e())&&Fe(()=>{if(!s)return o(i);const l=Y.context;nn(s);const u=o(i);return nn(l),u}))};return r.preload=()=>t||((t=n()).then(i=>e=()=>i.default),t),r}let Dw=0;function Ow(){const n=Y.context;return n?`${n.id}${n.count++}`:`cl-${Dw++}`}const Dp=n=>`Stale read from <${n}>.`;function xw(n){const e="fallback"in n&&{fallback:()=>n.fallback};return ye(Rw(()=>n.each,n.children,e||void 0))}function Op(n){const e=n.keyed,t=ye(()=>n.when,void 0,{equals:(r,i)=>e?r===i:!r==!i});return ye(()=>{const r=t();if(r){const i=n.children;return typeof i=="function"&&i.length>0?Fe(()=>i(e?r:()=>{if(!Fe(t))throw Dp("Show");return n.when})):i}return n.fallback},void 0,void 0)}function Lw(n){let e=!1;const t=(s,o)=>(e?s[1]===o[1]:!s[1]==!o[1])&&s[2]===o[2],r=Lu(()=>n.children),i=ye(()=>{let s=r();Array.isArray(s)||(s=[s]);for(let o=0;o<s.length;o++){const l=s[o].when;if(l)return e=!!s[o].keyed,[o,l,s[o]]}return[-1]},void 0,{equals:t});return ye(()=>{const[s,o,l]=i();if(s<0)return n.fallback;const u=l.children;return typeof u=="function"&&u.length>0?Fe(()=>u(e?o:()=>{if(Fe(i)[0]!==s)throw Dp("Match");return l.when})):u},void 0,void 0)}function Na(n){return n}const Mw=Yn();function Vw(n){let e=0,t,r,i,s,o;const[l,u]=Le(!1),h=bw(),p={increment:()=>{++e===1&&u(!0)},decrement:()=>{--e===0&&u(!1)},inFallback:l,effects:[],resolved:!1},y=xu();if(Y.context&&Y.load){const N=Y.context.id+Y.context.count;let x=Y.load(N);if(x&&(typeof x!="object"||x.status!=="success"?i=x:Y.gather(N)),i&&i!=="$$f"){const[D,j]=Le(void 0,{equals:!1});s=D,i.then(()=>{if(Y.done)return j();Y.gather(N),nn(r),j(),nn()},U=>{o=U,j()})}}const v=Sn(Mw);v&&(t=v.register(p.inFallback));let C;return hs(()=>C&&C()),se(h.Provider,{value:p,get children(){return ye(()=>{if(o)throw o;if(r=Y.context,s)return s(),s=void 0;r&&i==="$$f"&&nn();const N=ye(()=>n.children);return ye(x=>{const D=p.inFallback(),{showContent:j=!0,showFallback:U=!0}=t?t():{};if((!D||i&&i!=="$$f")&&j)return p.resolved=!0,C&&C(),C=r=i=void 0,Tw(p.effects),N();if(U)return C?x:Jr(z=>(C=z,r&&(nn({id:r.id+"f",count:0}),r=void 0),n.fallback),y)})})}})}const Fw=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Uw=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Fw]),Bw=new Set(["innerHTML","textContent","innerText","children"]),jw=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),qw=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function $w(n,e){const t=qw[n];return typeof t=="object"?t[e]?t.$:void 0:t}const Hw=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),zw=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ww={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Gw(n,e,t){let r=t.length,i=e.length,s=r,o=0,l=0,u=e[i-1].nextSibling,h=null;for(;o<i||l<s;){if(e[o]===t[l]){o++,l++;continue}for(;e[i-1]===t[s-1];)i--,s--;if(i===o){const p=s<r?l?t[l-1].nextSibling:t[s-l]:u;for(;l<s;)n.insertBefore(t[l++],p)}else if(s===l)for(;o<i;)(!h||!h.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[l]===e[i-1]){const p=e[--i].nextSibling;n.insertBefore(t[l++],e[o++].nextSibling),n.insertBefore(t[--s],p),e[i]=t[s]}else{if(!h){h=new Map;let y=l;for(;y<s;)h.set(t[y],y++)}const p=h.get(e[o]);if(p!=null)if(l<p&&p<s){let y=o,v=1,C;for(;++y<i&&y<s&&!((C=h.get(e[y]))==null||C!==p+v);)v++;if(v>p-l){const N=e[o];for(;l<p;)n.insertBefore(t[l++],N)}else n.replaceChild(t[l++],e[o++])}else o++;else e[o++].remove()}}}const Ed="_$DX_DELEGATE";function Kw(n,e,t,r={}){let i;return Jr(s=>{i=s,e===document?n():Pt(e,n(),e.firstChild?null:void 0,t)},r.owner),()=>{i(),e.textContent=""}}function pn(n,e,t){let r;const i=()=>{const o=document.createElement("template");return o.innerHTML=n,t?o.content.firstChild.firstChild:o.content.firstChild},s=e?()=>Fe(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return s.cloneNode=s,s}function xp(n,e=window.document){const t=e[Ed]||(e[Ed]=new Set);for(let r=0,i=n.length;r<i;r++){const s=n[r];t.has(s)||(t.add(s),e.addEventListener(s,tv))}}function In(n,e,t){Y.context&&n.isConnected||(t==null?n.removeAttribute(e):n.setAttribute(e,t))}function Qw(n,e,t,r){Y.context&&n.isConnected||(r==null?n.removeAttributeNS(e,t):n.setAttributeNS(e,t,r))}function Ol(n,e){Y.context&&n.isConnected||(e==null?n.removeAttribute("class"):n.className=e)}function Yw(n,e,t,r){if(r)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const i=t[0];n.addEventListener(e,t[0]=s=>i.call(n,t[1],s))}else n.addEventListener(e,t)}function Xw(n,e,t={}){const r=Object.keys(e||{}),i=Object.keys(t);let s,o;for(s=0,o=i.length;s<o;s++){const l=i[s];!l||l==="undefined"||e[l]||(Td(n,l,!1),delete t[l])}for(s=0,o=r.length;s<o;s++){const l=r[s],u=!!e[l];!l||l==="undefined"||t[l]===u||!u||(Td(n,l,!0),t[l]=u)}return t}function jn(n,e,t){if(!e)return t?In(n,"style"):e;const r=n.style;if(typeof e=="string")return r.cssText=e;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),e||(e={});let i,s;for(s in t)e[s]==null&&r.removeProperty(s),delete t[s];for(s in e)i=e[s],i!==t[s]&&(r.setProperty(s,i),t[s]=i);return t}function un(n,e={},t,r){const i={};return r||Ve(()=>i.children=_o(n,e.children,i.children)),Ve(()=>typeof e.ref=="function"?Vu(e.ref,n):e.ref=n),Ve(()=>Jw(n,e,t,!0,i,!0)),i}function Vu(n,e,t){return Fe(()=>n(e,t))}function Pt(n,e,t,r){if(t!==void 0&&!r&&(r=[]),typeof e!="function")return _o(n,e,r,t);Ve(i=>_o(n,e(),i,t),r)}function Jw(n,e,t,r,i={},s=!1){e||(e={});for(const o in i)if(!(o in e)){if(o==="children")continue;i[o]=bd(n,o,null,i[o],t,s)}for(const o in e){if(o==="children")continue;const l=e[o];i[o]=bd(n,o,l,i[o],t,s)}}function Zw(n){let e,t;return!Y.context||!(e=Y.registry.get(t=nv()))?n():(Y.completed&&Y.completed.add(e),Y.registry.delete(t),e)}function ev(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Td(n,e,t){const r=e.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)n.classList.toggle(r[i],t)}function bd(n,e,t,r,i,s){let o,l,u,h,p;if(e==="style")return jn(n,t,r);if(e==="classList")return Xw(n,t,r);if(t===r)return r;if(e==="ref")s||t(n);else if(e.slice(0,3)==="on:"){const y=e.slice(3);r&&n.removeEventListener(y,r),t&&n.addEventListener(y,t)}else if(e.slice(0,10)==="oncapture:"){const y=e.slice(10);r&&n.removeEventListener(y,r,!0),t&&n.addEventListener(y,t,!0)}else if(e.slice(0,2)==="on"){const y=e.slice(2).toLowerCase(),v=Hw.has(y);if(!v&&r){const C=Array.isArray(r)?r[0]:r;n.removeEventListener(y,C)}(v||t)&&(Yw(n,y,t,v),v&&xp([y]))}else if(e.slice(0,5)==="attr:")In(n,e.slice(5),t);else if((p=e.slice(0,5)==="prop:")||(u=Bw.has(e))||!i&&((h=$w(e,n.tagName))||(l=Uw.has(e)))||(o=n.nodeName.includes("-"))){if(p)e=e.slice(5),l=!0;else if(Y.context&&n.isConnected)return t;e==="class"||e==="className"?Ol(n,t):o&&!l&&!u?n[ev(e)]=t:n[h||e]=t}else{const y=i&&e.indexOf(":")>-1&&Ww[e.split(":")[0]];y?Qw(n,y,e,t):In(n,jw[e]||e,t)}return t}function tv(n){const e=`$$${n.type}`;let t=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==t&&Object.defineProperty(n,"target",{configurable:!0,value:t}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return t||document}}),Y.registry&&!Y.done&&(Y.done=_$HY.done=!0);t;){const r=t[e];if(r&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?r.call(t,i,n):r.call(t,n),n.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function _o(n,e,t,r,i){const s=!!Y.context&&n.isConnected;if(s){!t&&(t=[...n.childNodes]);let u=[];for(let h=0;h<t.length;h++){const p=t[h];p.nodeType===8&&p.data.slice(0,2)==="!$"?p.remove():u.push(p)}t=u}for(;typeof t=="function";)t=t();if(e===t)return t;const o=typeof e,l=r!==void 0;if(n=l&&t[0]&&t[0].parentNode||n,o==="string"||o==="number"){if(s||o==="number"&&(e=e.toString(),e===t))return t;if(l){let u=t[0];u&&u.nodeType===3?u.data!==e&&(u.data=e):u=document.createTextNode(e),t=Vi(n,t,r,u)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||o==="boolean"){if(s)return t;t=Vi(n,t,r)}else{if(o==="function")return Ve(()=>{let u=e();for(;typeof u=="function";)u=u();t=_o(n,u,t,r)}),()=>t;if(Array.isArray(e)){const u=[],h=t&&Array.isArray(t);if(Qc(u,e,t,i))return Ve(()=>t=_o(n,u,t,r,!0)),()=>t;if(s){if(!u.length)return t;if(r===void 0)return[...n.childNodes];let p=u[0],y=[p];for(;(p=p.nextSibling)!==r;)y.push(p);return t=y}if(u.length===0){if(t=Vi(n,t,r),l)return t}else h?t.length===0?Id(n,u,r):Gw(n,t,u):(t&&Vi(n),Id(n,u));t=u}else if(e.nodeType){if(s&&e.parentNode)return t=l?[e]:e;if(Array.isArray(t)){if(l)return t=Vi(n,t,r,e);Vi(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function Qc(n,e,t,r){let i=!1;for(let s=0,o=e.length;s<o;s++){let l=e[s],u=t&&t[n.length],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))i=Qc(n,l,u)||i;else if(h==="function")if(r){for(;typeof l=="function";)l=l();i=Qc(n,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else n.push(l),i=!0;else{const p=String(l);u&&u.nodeType===3&&u.data===p?n.push(u):n.push(document.createTextNode(p))}}return i}function Id(n,e,t=null){for(let r=0,i=e.length;r<i;r++)n.insertBefore(e[r],t)}function Vi(n,e,t,r){if(t===void 0)return n.textContent="";const i=r||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const l=e[o];if(i!==l){const u=l.parentNode===n;!s&&!o?u?n.replaceChild(i,l):n.insertBefore(i,t):u&&l.remove()}else s=!0}}else n.insertBefore(i,t);return[i]}function nv(){const n=Y.context;return`${n.id}${n.count++}`}const rv=!1,iv="http://www.w3.org/2000/svg";function sv(n,e=!1){return e?document.createElementNS(iv,n):document.createElement(n)}function LP(n){const[e,t]=Nw(n,["component"]),r=ye(()=>e.component);return ye(()=>{const i=r();switch(typeof i){case"function":return Fe(()=>i(t));case"string":const s=zw.has(i),o=Y.context?Zw():sv(i,s);return un(o,t,s),o}})}const ov="modulepreload",av=function(n,e){return new URL(n,e).href},Ad={},Gt=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=Promise.all(t.map(u=>{if(u=av(u,r),u in Ad)return;Ad[u]=!0;const h=u.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let C=s.length-1;C>=0;C--){const N=s[C];if(N.href===u&&(!h||N.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const v=document.createElement("link");if(v.rel=h?"stylesheet":ov,h||(v.as="script",v.crossOrigin=""),v.href=u,l&&v.setAttribute("nonce",l),document.head.appendChild(v),h)return new Promise((C,N)=>{v.addEventListener("load",C),v.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${u}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},lv=[{path:"/",component:Wt(()=>Gt(()=>import("./home-BBYqwLsD.js"),__vite__mapDeps([0,1,2]),import.meta.url))},{path:"/contact",component:Wt(()=>Gt(()=>import("./contact-BYcqRKcE.js"),__vite__mapDeps([3,1,2,4]),import.meta.url))},{path:"/changelogs",component:Wt(()=>Gt(()=>import("./changelogs-SHNrcl_Y.js"),__vite__mapDeps([5,1,2]),import.meta.url))},{path:"/questions",component:Wt(()=>Gt(()=>import("./home-BpEjlkHI.js"),__vite__mapDeps([6,1,2,7]),import.meta.url))},{path:"/questions/add",component:Wt(()=>Gt(()=>import("./add-DsC0-Gl-.js"),__vite__mapDeps([8,4,1,2,7]),import.meta.url))},{path:"/questions/edit",component:Wt(()=>Gt(()=>import("./edit-IAybl3ty.js"),__vite__mapDeps([9,1,2,4,7]),import.meta.url))},{path:"/questions/answer",component:Wt(()=>Gt(()=>import("./answer-BBIyTxvK.js"),__vite__mapDeps([10,1,2,11]),import.meta.url))},{path:"/login",component:Wt(()=>Gt(()=>import("./login-CZBlLmco.js"),__vite__mapDeps([12,4,13,2]),import.meta.url))},{path:"/register",component:Wt(()=>Gt(()=>import("./register-PicbZq1e.js"),__vite__mapDeps([14,4,13,2]),import.meta.url))},{path:"/419",component:Wt(()=>Gt(()=>import("./419-BLbMh23m.js"),[],import.meta.url))},{path:"/:uid/:questid",component:Wt(()=>Gt(()=>import("./share-79_z3s0y.js"),__vite__mapDeps([15,4,2,11,7]),import.meta.url))},{path:"/*all",component:Wt(()=>Gt(()=>import("./404-yD7vkKc-.js"),[],import.meta.url))}];var Cd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(n,e){if(!n)throw fs(e)},fs=function(n){return new Error("Firebase Database ("+Lp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},cv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,p=s>>2,y=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,C=h&63;u||(C=64,o||(v=64)),r.push(t[p],t[y],t[v],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||y==null)throw new uv;const v=s<<2|l>>4;if(r.push(v),h!==64){const C=l<<4&240|h>>2;if(r.push(C),y!==64){const N=h<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class uv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vp=function(n){const e=Mp(n);return Fu.encodeByteArray(e,!0)},tl=function(n){return Vp(n).replace(/\./g,"")},nl=function(n){try{return Fu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){return Fp(void 0,n)}function Fp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!dv(t)||(n[t]=Fp(n[t],e[t]));return n}function dv(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=()=>fv().__FIREBASE_DEFAULTS__,mv=()=>{if(typeof process>"u"||typeof Cd>"u")return;const n=Cd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&nl(n[1]);return e&&JSON.parse(e)},xl=()=>{try{return pv()||mv()||gv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_v=n=>{var e,t;return(t=(e=xl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},yv=n=>{const e=_v(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Up=()=>{var n;return(n=xl())===null||n===void 0?void 0:n.config},wv=n=>{var e;return(e=xl())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[tl(JSON.stringify(t)),tl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function Ev(){var n;const e=(n=xl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jp(){return Lp.NODE_ADMIN===!0}function bv(){return!Ev()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Iv(){try{return typeof indexedDB=="object"}catch{return!1}}function Av(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="FirebaseError";class Xn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cv,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Sv(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,l,r)}}function Sv(n,e){return n.replace(Rv,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Rv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){return JSON.parse(n)}function ct(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=yo(nl(s[0])||""),t=yo(nl(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},Pv=function(n){const e=qp(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},kv=function(n){const e=qp(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ji(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Sd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rl(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Yc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Rd(s)&&Rd(o)){if(!Yc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Rd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)r[y]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let y=0;y<16;y++)r[y]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let y=16;y<80;y++){const v=r[y-3]^r[y-8]^r[y-14]^r[y-16];r[y]=(v<<1|v>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],h,p;for(let y=0;y<80;y++){y<40?y<20?(h=l^s&(o^l),p=1518500249):(h=s^o^l,p=1859775393):y<60?(h=s&o|l&(s|o),p=2400959708):(h=s^o^l,p=3395469782);const v=(i<<5|i>>>27)+h+u+p+r[y]&4294967295;u=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=v}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Dv(n,e){const t=new Ov(n,e);return t.subscribe.bind(t)}class Ov{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Tc),i.error===void 0&&(i.error=Tc),i.complete===void 0&&(i.complete=Tc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Tc(){}function Lv(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,q(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ll=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){return n&&n._delegate?n._delegate:n}class Wn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Uu;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uv(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fv(n){return n===$r?void 0:n}function Uv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const jv={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},qv=le.INFO,$v={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Hv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$v[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=qv,this._logHandler=Hv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const zv=(n,e)=>e.some(t=>n instanceof t);let Pd,kd;function Wv(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gv(){return kd||(kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $p=new WeakMap,Xc=new WeakMap,Hp=new WeakMap,bc=new WeakMap,qu=new WeakMap;function Kv(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(pr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$p.set(t,n)}).catch(()=>{}),qu.set(e,n),e}function Qv(n){if(Xc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Xc.set(n,e)}let Jc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yv(n){Jc=n(Jc)}function Xv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ic(this),e,...t);return Hp.set(r,e.sort?e.sort():[e]),pr(r)}:Gv().includes(n)?function(...e){return n.apply(Ic(this),e),pr($p.get(this))}:function(...e){return pr(n.apply(Ic(this),e))}}function Jv(n){return typeof n=="function"?Xv(n):(n instanceof IDBTransaction&&Qv(n),zv(n,Wv())?new Proxy(n,Jc):n)}function pr(n){if(n instanceof IDBRequest)return Kv(n);if(bc.has(n))return bc.get(n);const e=Jv(n);return e!==n&&(bc.set(n,e),qu.set(e,n)),e}const Ic=n=>qu.get(n);function Zv(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const eE=["get","getKey","getAll","getAllKeys","count"],tE=["put","add","delete","clear"],Ac=new Map;function Nd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=tE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eE.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return Ac.set(e,s),s}Yv(n=>({...n,get:(e,t,r)=>Nd(e,t)||n.get(e,t,r),has:(e,t)=>!!Nd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function rE(n){const e=n.getComponent();return e?.type==="VERSION"}const Zc="@firebase/app",Dd="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Ml("@firebase/app"),iE="@firebase/app-compat",sE="@firebase/analytics-compat",oE="@firebase/analytics",aE="@firebase/app-check-compat",lE="@firebase/app-check",cE="@firebase/auth",uE="@firebase/auth-compat",hE="@firebase/database",dE="@firebase/database-compat",fE="@firebase/functions",pE="@firebase/functions-compat",mE="@firebase/installations",gE="@firebase/installations-compat",_E="@firebase/messaging",yE="@firebase/messaging-compat",wE="@firebase/performance",vE="@firebase/performance-compat",EE="@firebase/remote-config",TE="@firebase/remote-config-compat",bE="@firebase/storage",IE="@firebase/storage-compat",AE="@firebase/firestore",CE="@firebase/vertexai-preview",SE="@firebase/firestore-compat",RE="firebase",PE="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]",kE={[Zc]:"fire-core",[iE]:"fire-core-compat",[oE]:"fire-analytics",[sE]:"fire-analytics-compat",[lE]:"fire-app-check",[aE]:"fire-app-check-compat",[cE]:"fire-auth",[uE]:"fire-auth-compat",[hE]:"fire-rtdb",[dE]:"fire-rtdb-compat",[fE]:"fire-fn",[pE]:"fire-fn-compat",[mE]:"fire-iid",[gE]:"fire-iid-compat",[_E]:"fire-fcm",[yE]:"fire-fcm-compat",[wE]:"fire-perf",[vE]:"fire-perf-compat",[EE]:"fire-rc",[TE]:"fire-rc-compat",[bE]:"fire-gcs",[IE]:"fire-gcs-compat",[AE]:"fire-fst",[SE]:"fire-fst-compat",[CE]:"fire-vertex","fire-js":"fire-js",[RE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Map,NE=new Map,tu=new Map;function Od(n,e){try{n.container.addComponent(e)}catch(t){ri.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vr(n){const e=n.name;if(tu.has(e))return ri.debug(`There were multiple attempts to register component ${e}.`),!1;tu.set(e,n);for(const t of il.values())Od(t,n);for(const t of NE.values())Od(t,n);return!0}function DE(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ys(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Po("app","Firebase",OE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=PE;function zp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(t||(t=Up()),!t)throw mr.create("no-options");const s=il.get(i);if(s){if(Yc(t,s.options)&&Yc(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new Bv(i);for(const u of tu.values())o.addComponent(u);const l=new xE(t,r,o);return il.set(i,l),l}function LE(n=eu){const e=il.get(n);if(!e&&n===eu&&Up())return zp();if(!e)throw mr.create("no-app",{appName:n});return e}function Qt(n,e,t){var r;let i=(r=kE[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ri.warn(l.join(" "));return}vr(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firebase-heartbeat-database",VE=1,wo="firebase-heartbeat-store";let Cc=null;function Wp(){return Cc||(Cc=Zv(ME,VE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wo)}catch(t){console.warn(t)}}}}).catch(n=>{throw mr.create("idb-open",{originalErrorMessage:n.message})})),Cc}async function FE(n){try{const t=(await Wp()).transaction(wo),r=await t.objectStore(wo).get(Gp(n));return await t.done,r}catch(e){if(e instanceof Xn)ri.warn(e.message);else{const t=mr.create("idb-get",{originalErrorMessage:e?.message});ri.warn(t.message)}}}async function xd(n,e){try{const r=(await Wp()).transaction(wo,"readwrite");await r.objectStore(wo).put(e,Gp(n)),await r.done}catch(t){if(t instanceof Xn)ri.warn(t.message);else{const r=mr.create("idb-set",{originalErrorMessage:t?.message});ri.warn(r.message)}}}function Gp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=1024,BE=30*24*60*60*1e3;class jE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $E(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ld();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=BE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ld(),{heartbeatsToSend:r,unsentEntries:i}=qE(this._heartbeatsCache.heartbeats),s=tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ld(){return new Date().toISOString().substring(0,10)}function qE(n,e=UE){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Md(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Md(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Iv()?Av().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Md(n){return tl(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(n){vr(new Wn("platform-logger",e=>new nE(e),"PRIVATE")),vr(new Wn("heartbeat",e=>new jE(e),"PRIVATE")),Qt(Zc,Dd,n),Qt(Zc,Dd,"esm2017"),Qt("fire-js","")}HE("");var zE="firebase",WE="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(zE,WE,"app");const Sc="SolidJS NGL",MP="https://raw.githubusercontent.com/sleepy4k/solidjs-notgonnalie/main",GE="AIzaSyCJTMXqr1nh_tcS1OmqcDSU_orv8dr772Q",KE="notgonnalie-a59e3.firebaseapp.com",QE="notgonnalie-a59e3",YE="notgonnalie-a59e3.appspot.com",XE="543354798140",JE="1:543354798140:web:8abc11ecc941b7cbc94339",ZE="G-Q17S32JLEP",eT={apiKey:GE,authDomain:KE,projectId:QE,storageBucket:YE,messagingSenderId:XE,appId:JE,measurementId:ZE},tT=eT,Kp=zp(tT);var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,Qp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,b){function I(){}I.prototype=b.prototype,R.D=b.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(A,S,P){for(var E=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)E[ue-2]=arguments[ue];return b.prototype[S].apply(A,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,b,I){I||(I=0);var A=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)A[S]=b.charCodeAt(I++)|b.charCodeAt(I++)<<8|b.charCodeAt(I++)<<16|b.charCodeAt(I++)<<24;else for(S=0;16>S;++S)A[S]=b[I++]|b[I++]<<8|b[I++]<<16|b[I++]<<24;b=R.g[0],I=R.g[1],S=R.g[2];var P=R.g[3],E=b+(P^I&(S^P))+A[0]+3614090360&4294967295;b=I+(E<<7&4294967295|E>>>25),E=P+(S^b&(I^S))+A[1]+3905402710&4294967295,P=b+(E<<12&4294967295|E>>>20),E=S+(I^P&(b^I))+A[2]+606105819&4294967295,S=P+(E<<17&4294967295|E>>>15),E=I+(b^S&(P^b))+A[3]+3250441966&4294967295,I=S+(E<<22&4294967295|E>>>10),E=b+(P^I&(S^P))+A[4]+4118548399&4294967295,b=I+(E<<7&4294967295|E>>>25),E=P+(S^b&(I^S))+A[5]+1200080426&4294967295,P=b+(E<<12&4294967295|E>>>20),E=S+(I^P&(b^I))+A[6]+2821735955&4294967295,S=P+(E<<17&4294967295|E>>>15),E=I+(b^S&(P^b))+A[7]+4249261313&4294967295,I=S+(E<<22&4294967295|E>>>10),E=b+(P^I&(S^P))+A[8]+1770035416&4294967295,b=I+(E<<7&4294967295|E>>>25),E=P+(S^b&(I^S))+A[9]+2336552879&4294967295,P=b+(E<<12&4294967295|E>>>20),E=S+(I^P&(b^I))+A[10]+4294925233&4294967295,S=P+(E<<17&4294967295|E>>>15),E=I+(b^S&(P^b))+A[11]+2304563134&4294967295,I=S+(E<<22&4294967295|E>>>10),E=b+(P^I&(S^P))+A[12]+1804603682&4294967295,b=I+(E<<7&4294967295|E>>>25),E=P+(S^b&(I^S))+A[13]+4254626195&4294967295,P=b+(E<<12&4294967295|E>>>20),E=S+(I^P&(b^I))+A[14]+2792965006&4294967295,S=P+(E<<17&4294967295|E>>>15),E=I+(b^S&(P^b))+A[15]+1236535329&4294967295,I=S+(E<<22&4294967295|E>>>10),E=b+(S^P&(I^S))+A[1]+4129170786&4294967295,b=I+(E<<5&4294967295|E>>>27),E=P+(I^S&(b^I))+A[6]+3225465664&4294967295,P=b+(E<<9&4294967295|E>>>23),E=S+(b^I&(P^b))+A[11]+643717713&4294967295,S=P+(E<<14&4294967295|E>>>18),E=I+(P^b&(S^P))+A[0]+3921069994&4294967295,I=S+(E<<20&4294967295|E>>>12),E=b+(S^P&(I^S))+A[5]+3593408605&4294967295,b=I+(E<<5&4294967295|E>>>27),E=P+(I^S&(b^I))+A[10]+38016083&4294967295,P=b+(E<<9&4294967295|E>>>23),E=S+(b^I&(P^b))+A[15]+3634488961&4294967295,S=P+(E<<14&4294967295|E>>>18),E=I+(P^b&(S^P))+A[4]+3889429448&4294967295,I=S+(E<<20&4294967295|E>>>12),E=b+(S^P&(I^S))+A[9]+568446438&4294967295,b=I+(E<<5&4294967295|E>>>27),E=P+(I^S&(b^I))+A[14]+3275163606&4294967295,P=b+(E<<9&4294967295|E>>>23),E=S+(b^I&(P^b))+A[3]+4107603335&4294967295,S=P+(E<<14&4294967295|E>>>18),E=I+(P^b&(S^P))+A[8]+1163531501&4294967295,I=S+(E<<20&4294967295|E>>>12),E=b+(S^P&(I^S))+A[13]+2850285829&4294967295,b=I+(E<<5&4294967295|E>>>27),E=P+(I^S&(b^I))+A[2]+4243563512&4294967295,P=b+(E<<9&4294967295|E>>>23),E=S+(b^I&(P^b))+A[7]+1735328473&4294967295,S=P+(E<<14&4294967295|E>>>18),E=I+(P^b&(S^P))+A[12]+2368359562&4294967295,I=S+(E<<20&4294967295|E>>>12),E=b+(I^S^P)+A[5]+4294588738&4294967295,b=I+(E<<4&4294967295|E>>>28),E=P+(b^I^S)+A[8]+2272392833&4294967295,P=b+(E<<11&4294967295|E>>>21),E=S+(P^b^I)+A[11]+1839030562&4294967295,S=P+(E<<16&4294967295|E>>>16),E=I+(S^P^b)+A[14]+4259657740&4294967295,I=S+(E<<23&4294967295|E>>>9),E=b+(I^S^P)+A[1]+2763975236&4294967295,b=I+(E<<4&4294967295|E>>>28),E=P+(b^I^S)+A[4]+1272893353&4294967295,P=b+(E<<11&4294967295|E>>>21),E=S+(P^b^I)+A[7]+4139469664&4294967295,S=P+(E<<16&4294967295|E>>>16),E=I+(S^P^b)+A[10]+3200236656&4294967295,I=S+(E<<23&4294967295|E>>>9),E=b+(I^S^P)+A[13]+681279174&4294967295,b=I+(E<<4&4294967295|E>>>28),E=P+(b^I^S)+A[0]+3936430074&4294967295,P=b+(E<<11&4294967295|E>>>21),E=S+(P^b^I)+A[3]+3572445317&4294967295,S=P+(E<<16&4294967295|E>>>16),E=I+(S^P^b)+A[6]+76029189&4294967295,I=S+(E<<23&4294967295|E>>>9),E=b+(I^S^P)+A[9]+3654602809&4294967295,b=I+(E<<4&4294967295|E>>>28),E=P+(b^I^S)+A[12]+3873151461&4294967295,P=b+(E<<11&4294967295|E>>>21),E=S+(P^b^I)+A[15]+530742520&4294967295,S=P+(E<<16&4294967295|E>>>16),E=I+(S^P^b)+A[2]+3299628645&4294967295,I=S+(E<<23&4294967295|E>>>9),E=b+(S^(I|~P))+A[0]+4096336452&4294967295,b=I+(E<<6&4294967295|E>>>26),E=P+(I^(b|~S))+A[7]+1126891415&4294967295,P=b+(E<<10&4294967295|E>>>22),E=S+(b^(P|~I))+A[14]+2878612391&4294967295,S=P+(E<<15&4294967295|E>>>17),E=I+(P^(S|~b))+A[5]+4237533241&4294967295,I=S+(E<<21&4294967295|E>>>11),E=b+(S^(I|~P))+A[12]+1700485571&4294967295,b=I+(E<<6&4294967295|E>>>26),E=P+(I^(b|~S))+A[3]+2399980690&4294967295,P=b+(E<<10&4294967295|E>>>22),E=S+(b^(P|~I))+A[10]+4293915773&4294967295,S=P+(E<<15&4294967295|E>>>17),E=I+(P^(S|~b))+A[1]+2240044497&4294967295,I=S+(E<<21&4294967295|E>>>11),E=b+(S^(I|~P))+A[8]+1873313359&4294967295,b=I+(E<<6&4294967295|E>>>26),E=P+(I^(b|~S))+A[15]+4264355552&4294967295,P=b+(E<<10&4294967295|E>>>22),E=S+(b^(P|~I))+A[6]+2734768916&4294967295,S=P+(E<<15&4294967295|E>>>17),E=I+(P^(S|~b))+A[13]+1309151649&4294967295,I=S+(E<<21&4294967295|E>>>11),E=b+(S^(I|~P))+A[4]+4149444226&4294967295,b=I+(E<<6&4294967295|E>>>26),E=P+(I^(b|~S))+A[11]+3174756917&4294967295,P=b+(E<<10&4294967295|E>>>22),E=S+(b^(P|~I))+A[2]+718787259&4294967295,S=P+(E<<15&4294967295|E>>>17),E=I+(P^(S|~b))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+P&4294967295}r.prototype.u=function(R,b){b===void 0&&(b=R.length);for(var I=b-this.blockSize,A=this.B,S=this.h,P=0;P<b;){if(S==0)for(;P<=I;)i(this,R,P),P+=this.blockSize;if(typeof R=="string"){for(;P<b;)if(A[S++]=R.charCodeAt(P++),S==this.blockSize){i(this,A),S=0;break}}else for(;P<b;)if(A[S++]=R[P++],S==this.blockSize){i(this,A),S=0;break}}this.h=S,this.o+=b},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;var I=8*this.o;for(b=R.length-8;b<R.length;++b)R[b]=I&255,I/=256;for(this.u(R),R=Array(16),b=I=0;4>b;++b)for(var A=0;32>A;A+=8)R[I++]=this.g[b]>>>A&255;return R};function s(R,b){var I=l;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=b(R)}function o(R,b){this.h=b;for(var I=[],A=!0,S=R.length-1;0<=S;S--){var P=R[S]|0;A&&P==b||(I[S]=P,A=!1)}this.g=I}var l={};function u(R){return-128<=R&&128>R?s(R,function(b){return new o([b|0],0>b?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return y;if(0>R)return D(h(-R));for(var b=[],I=1,A=0;R>=I;A++)b[A]=R/I|0,I*=4294967296;return new o(b,0)}function p(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return D(p(R.substring(1),b));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(b,8)),A=y,S=0;S<R.length;S+=8){var P=Math.min(8,R.length-S),E=parseInt(R.substring(S,S+P),b);8>P?(P=h(Math.pow(b,P)),A=A.j(P).add(h(E))):(A=A.j(I),A=A.add(h(E)))}return A}var y=u(0),v=u(1),C=u(16777216);n=o.prototype,n.m=function(){if(x(this))return-D(this).m();for(var R=0,b=1,I=0;I<this.g.length;I++){var A=this.i(I);R+=(0<=A?A:4294967296+A)*b,b*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(N(this))return"0";if(x(this))return"-"+D(this).toString(R);for(var b=h(Math.pow(R,6)),I=this,A="";;){var S=G(I,b).g;I=j(I,S.j(b));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=S,N(I))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function N(R){if(R.h!=0)return!1;for(var b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function x(R){return R.h==-1}n.l=function(R){return R=j(this,R),x(R)?-1:N(R)?0:1};function D(R){for(var b=R.g.length,I=[],A=0;A<b;A++)I[A]=~R.g[A];return new o(I,~R.h).add(v)}n.abs=function(){return x(this)?D(this):this},n.add=function(R){for(var b=Math.max(this.g.length,R.g.length),I=[],A=0,S=0;S<=b;S++){var P=A+(this.i(S)&65535)+(R.i(S)&65535),E=(P>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);A=E>>>16,P&=65535,E&=65535,I[S]=E<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function j(R,b){return R.add(D(b))}n.j=function(R){if(N(this)||N(R))return y;if(x(this))return x(R)?D(this).j(D(R)):D(D(this).j(R));if(x(R))return D(this.j(D(R)));if(0>this.l(C)&&0>R.l(C))return h(this.m()*R.m());for(var b=this.g.length+R.g.length,I=[],A=0;A<2*b;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<R.g.length;S++){var P=this.i(A)>>>16,E=this.i(A)&65535,ue=R.i(S)>>>16,ze=R.i(S)&65535;I[2*A+2*S]+=E*ze,U(I,2*A+2*S),I[2*A+2*S+1]+=P*ze,U(I,2*A+2*S+1),I[2*A+2*S+1]+=E*ue,U(I,2*A+2*S+1),I[2*A+2*S+2]+=P*ue,U(I,2*A+2*S+2)}for(A=0;A<b;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=b;A<2*b;A++)I[A]=0;return new o(I,0)};function U(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function z(R,b){this.g=R,this.h=b}function G(R,b){if(N(b))throw Error("division by zero");if(N(R))return new z(y,y);if(x(R))return b=G(D(R),b),new z(D(b.g),D(b.h));if(x(b))return b=G(R,D(b)),new z(D(b.g),b.h);if(30<R.g.length){if(x(R)||x(b))throw Error("slowDivide_ only works with positive integers.");for(var I=v,A=b;0>=A.l(R);)I=ae(I),A=ae(A);var S=re(I,1),P=re(A,1);for(A=re(A,2),I=re(I,2);!N(A);){var E=P.add(A);0>=E.l(R)&&(S=S.add(I),P=E),A=re(A,1),I=re(I,1)}return b=j(R,S.j(b)),new z(S,b)}for(S=y;0<=R.l(b);){for(I=Math.max(1,Math.floor(R.m()/b.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=h(I),E=P.j(b);x(E)||0<E.l(R);)I-=A,P=h(I),E=P.j(b);N(P)&&(P=v),S=S.add(P),R=j(R,E)}return new z(S,R)}n.A=function(R){return G(this,R).h},n.and=function(R){for(var b=Math.max(this.g.length,R.g.length),I=[],A=0;A<b;A++)I[A]=this.i(A)&R.i(A);return new o(I,this.h&R.h)},n.or=function(R){for(var b=Math.max(this.g.length,R.g.length),I=[],A=0;A<b;A++)I[A]=this.i(A)|R.i(A);return new o(I,this.h|R.h)},n.xor=function(R){for(var b=Math.max(this.g.length,R.g.length),I=[],A=0;A<b;A++)I[A]=this.i(A)^R.i(A);return new o(I,this.h^R.h)};function ae(R){for(var b=R.g.length+1,I=[],A=0;A<b;A++)I[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(I,R.h)}function re(R,b){var I=b>>5;b%=32;for(var A=R.g.length-I,S=[],P=0;P<A;P++)S[P]=0<b?R.i(P+I)>>>b|R.i(P+I+1)<<32-b:R.i(P+I);return new o(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Zr=o}).apply(typeof Vd<"u"?Vd:typeof self<"u"?self:typeof window<"u"?window:{});var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yp,Xp,Xs,Jp,Ha,nu,Zp,em,tm;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,m){return a==Array.prototype||a==Object.prototype||(a[f]=m.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Da=="object"&&Da];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(a,f){if(f)e:{var m=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var k=a[w];if(!(k in m))break e;m=m[k]}a=a[a.length-1],w=m[a],f=f(w),f!=w&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}function s(a,f){a instanceof String&&(a+="");var m=0,w=!1,k={next:function(){if(!w&&m<a.length){var O=m++;return{value:f(O,a[O]),done:!1}}return w=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function h(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function p(a,f,m){return a.call.apply(a.bind,arguments)}function y(a,f,m){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,w),a.apply(f,k)}}return function(){return a.apply(f,arguments)}}function v(a,f,m){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,v.apply(null,arguments)}function C(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function N(a,f){function m(){}m.prototype=f.prototype,a.aa=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(w,k,O){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return f.prototype[k].apply(w,B)}}function x(a){const f=a.length;if(0<f){const m=Array(f);for(let w=0;w<f;w++)m[w]=a[w];return m}return[]}function D(a,f){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(u(w)){const k=a.length||0,O=w.length||0;a.length=k+O;for(let B=0;B<O;B++)a[k+B]=w[B]}else a.push(w)}}class j{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function U(a){return/^[\s\xa0]*$/.test(a)}function z(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function G(a){return G[" "](a),a}G[" "]=function(){};var ae=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function re(a,f,m){for(const w in a)f.call(m,a[w],w,a)}function R(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function b(a){const f={};for(const m in a)f[m]=a[m];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,f){let m,w;for(let k=1;k<arguments.length;k++){w=arguments[k];for(m in w)a[m]=w[m];for(let O=0;O<I.length;O++)m=I[O],Object.prototype.hasOwnProperty.call(w,m)&&(a[m]=w[m])}}function S(a){var f=1;a=a.split(":");const m=[];for(;0<f&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function P(a){l.setTimeout(()=>{throw a},0)}function E(){var a=J;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class ue{constructor(){this.h=this.g=null}add(f,m){const w=ze.get();w.set(f,m),this.h?this.h.next=w:this.g=w,this.h=w}}var ze=new j(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let xt,St=!1,J=new ue,jt=()=>{const a=l.Promise.resolve(void 0);xt=()=>{a.then(mi)}};var mi=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(m){P(m)}var f=ze;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}St=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,f),l.removeEventListener("test",m,f)}catch{}return a}();function Cr(a,f){if(Je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(ae){e:{try{G(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gi[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Cr.aa.h.call(this)}}N(Cr,Je);var gi={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Sr="closure_listenable_"+(1e6*Math.random()|0),bs=0;function dt(a,f,m,w,k){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!w,this.ha=k,this.key=++bs,this.da=this.fa=!1}function qt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rr(a){this.src=a,this.g={},this.h=0}Rr.prototype.add=function(a,f,m,w,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=_i(a,f,w,k);return-1<B?(f=a[B],m||(f.fa=!1)):(f=new dt(f,this.src,O,!!w,k),f.fa=m,a.push(f)),f};function Is(a,f){var m=f.type;if(m in a.g){var w=a.g[m],k=Array.prototype.indexOf.call(w,f,void 0),O;(O=0<=k)&&Array.prototype.splice.call(w,k,1),O&&(qt(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function _i(a,f,m,w){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==f&&O.capture==!!m&&O.ha==w)return k}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),Pr={};function er(a,f,m,w,k){if(Array.isArray(f)){for(var O=0;O<f.length;O++)er(a,f[O],m,w,k);return null}return m=wi(m),a&&a[Sr]?a.K(f,m,h(w)?!!w.capture:!!w,k):As(a,f,m,!1,w,k)}function As(a,f,m,w,k,O){if(!f)throw Error("Invalid event type");var B=h(k)?!!k.capture:!!k,_e=Cs(a);if(_e||(a[Zn]=_e=new Rr(a)),m=_e.add(f,m,w,B,O),m.proxy)return m;if(w=ft(),m.proxy=w,w.src=a,w.listener=m,a.addEventListener)L||(k=B),k===void 0&&(k=!1),a.addEventListener(f.toString(),w,k);else if(a.attachEvent)a.attachEvent(ge(f.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ft(){function a(m){return f.call(a.src,a.listener,m)}const f=kr;return a}function tr(a,f,m,w,k){if(Array.isArray(f))for(var O=0;O<f.length;O++)tr(a,f[O],m,w,k);else w=h(w)?!!w.capture:!!w,m=wi(m),a&&a[Sr]?(a=a.i,f=String(f).toString(),f in a.g&&(O=a.g[f],m=_i(O,m,w,k),-1<m&&(qt(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete a.g[f],a.h--)))):a&&(a=Cs(a))&&(f=a.g[f.toString()],a=-1,f&&(a=_i(f,m,w,k)),(m=-1<a?f[a]:null)&&st(m))}function st(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Sr])Is(f.i,a);else{var m=a.type,w=a.proxy;f.removeEventListener?f.removeEventListener(m,w,a.capture):f.detachEvent?f.detachEvent(ge(m),w):f.addListener&&f.removeListener&&f.removeListener(w),(m=Cs(f))?(Is(m,a),m.h==0&&(m.src=null,f[Zn]=null)):qt(a)}}}function ge(a){return a in Pr?Pr[a]:Pr[a]="on"+a}function kr(a,f){if(a.da)a=!0;else{f=new Cr(f,this);var m=a.listener,w=a.ha||a.src;a.fa&&st(a),a=m.call(w,f)}return a}function Cs(a){return a=a[Zn],a instanceof Rr?a:null}var yi="__closure_events_fn_"+(1e9*Math.random()>>>0);function wi(a){return typeof a=="function"?a:(a[yi]||(a[yi]=function(f){return a.handleEvent(f)}),a[yi])}function We(){Xt.call(this),this.i=new Rr(this),this.M=this,this.F=null}N(We,Xt),We.prototype[Sr]=!0,We.prototype.removeEventListener=function(a,f,m,w){tr(this,a,f,m,w)};function Ge(a,f){var m,w=a.F;if(w)for(m=[];w;w=w.F)m.push(w);if(a=a.M,w=f.type||f,typeof f=="string")f=new Je(f,a);else if(f instanceof Je)f.target=f.target||a;else{var k=f;f=new Je(w,a),A(f,k)}if(k=!0,m)for(var O=m.length-1;0<=O;O--){var B=f.g=m[O];k=Pn(B,w,!0,f)&&k}if(B=f.g=a,k=Pn(B,w,!0,f)&&k,k=Pn(B,w,!1,f)&&k,m)for(O=0;O<m.length;O++)B=f.g=m[O],k=Pn(B,w,!1,f)&&k}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var m=a.g[f],w=0;w<m.length;w++)qt(m[w]);delete a.g[f],a.h--}}this.F=null},We.prototype.K=function(a,f,m,w){return this.i.add(String(a),f,!1,m,w)},We.prototype.L=function(a,f,m,w){return this.i.add(String(a),f,!0,m,w)};function Pn(a,f,m,w){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,O=0;O<f.length;++O){var B=f[O];if(B&&!B.da&&B.capture==m){var _e=B.listener,Qe=B.ha||B.src;B.fa&&Is(a.i,B),k=_e.call(Qe,w)!==!1&&k}}return k&&!w.defaultPrevented}function Lt(a,f,m){if(typeof a=="function")m&&(a=v(a,m));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function kn(a){a.g=Lt(()=>{a.g=null,a.i&&(a.i=!1,kn(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Nn extends Xt{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nr(a){Xt.call(this),this.h=a,this.g={}}N(Nr,Xt);var Dn=[];function nr(a){re(a.g,function(f,m){this.g.hasOwnProperty(m)&&st(f)},a),a.g={}}Nr.prototype.N=function(){Nr.aa.N.call(this),nr(this)},Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vi=l.JSON.stringify,Ei=l.JSON.parse,Ss=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Rs(){}Rs.prototype.h=null;function Ti(a){return a.h||(a.h=a.i())}function bi(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ps(){Je.call(this,"d")}N(Ps,Je);function ot(){Je.call(this,"c")}N(ot,Je);var at={},Wo=null;function lt(){return Wo=Wo||new We}at.La="serverreachability";function Dr(a){Je.call(this,at.La,a)}N(Dr,Je);function rr(a){const f=lt();Ge(f,new Dr(f))}at.STAT_EVENT="statevent";function ks(a,f){Je.call(this,at.STAT_EVENT,a),this.stat=f}N(ks,Je);function X(a){const f=lt();Ge(f,new ks(f,a))}at.Ma="timingevent";function Mt(a,f){Je.call(this,at.Ma,a),this.size=f}N(Mt,Je);function Rt(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Vt(){this.g=!0}Vt.prototype.xa=function(){this.g=!1};function Ue(a,f,m,w,k,O){a.info(function(){if(a.g)if(O)for(var B="",_e=O.split("&"),Qe=0;Qe<_e.length;Qe++){var de=_e[Qe].split("=");if(1<de.length){var et=de[0];de=de[1];var Ye=et.split("_");B=2<=Ye.length&&Ye[1]=="type"?B+(et+"="+de+"&"):B+(et+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+w+") [attempt "+k+"]: "+f+`
`+m+`
`+B})}function Ze(a,f,m,w,k,O,B){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+k+"]: "+f+`
`+m+`
`+O+" "+B})}function gn(a,f,m,w){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Or(a,m)+(w?" "+w:"")})}function Go(a,f){a.info(function(){return"TIMEOUT: "+f})}Vt.prototype.info=function(){};function Or(a,f){if(!a.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var w=m[a];if(!(2>w.length)){var k=w[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<k.length;B++)k[B]=""}}}}return vi(m)}catch{return f}}var Ke={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ko={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function xr(){}N(xr,Rs),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},Ii=new xr;function $t(a,f,m,w){this.j=a,this.i=f,this.l=m,this.R=w||1,this.U=new Nr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qo}function Qo(){this.i=null,this.g="",this.h=!1}var Ns={},Ds={};function Os(a,f,m){a.L=1,a.v=Mr(Jt(f)),a.m=m,a.P=!0,_n(a,null)}function _n(a,f){a.F=Date.now(),Ai(a),a.A=Jt(a.v);var m=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),aa(m.i,"t",w),a.C=0,m=a.j.J,a.h=new Qo,a.g=$s(a.j,m?f:null,!a.m),0<a.O&&(a.M=new Nn(v(a.Y,a,a.g),a.O)),f=a.U,m=a.g,w=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Dn[0]=k.toString()),k=Dn);for(var O=0;O<k.length;O++){var B=er(m,k[O],w||f.handleEvent,!1,f.h||f);if(!B)break;f.g[B.key]=B}f=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),rr(),Ue(a.i,a.u,a.A,a.l,a.R,a.m)}$t.prototype.ca=function(a){a=a.target;const f=this.M;f&&pt(a)==3?f.j():this.Y(a)},$t.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=pt(this.g);var f=this.g.Ba();const lr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||ma(this.g)))){this.J||Ye!=4||f==7||(f==8||0>=lr?rr(3):rr(2)),xs(this);var m=this.g.Z();this.X=m;t:if(Yo(this)){var w=ma(this.g);a="";var k=w.length,O=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),On(this);var B="";break t}this.h.i=new l.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,a+=this.h.i.decode(w[f],{stream:!(O&&f==k-1)});w.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=m==200,Ze(this.i,this.u,this.A,this.l,this.R,Ye,m),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Qe=this.g;if((_e=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(_e)){var de=_e;break t}}de=null}if(m=de)gn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ls(this,m);else{this.o=!1,this.s=3,X(12),xn(this),On(this);break e}}if(this.P){m=!0;let Ct;for(;!this.J&&this.C<B.length;)if(Ct=rc(this,B),Ct==Ds){Ye==4&&(this.s=4,X(14),m=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Ns){this.s=4,X(15),gn(this.i,this.l,B,"[Invalid Chunk]"),m=!1;break}else gn(this.i,this.l,Ct,null),Ls(this,Ct);if(Yo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||B.length!=0||this.h.h||(this.s=1,X(16),m=!1),this.o=this.o&&m,!m)gn(this.i,this.l,B,"[Invalid Chunked Response]"),xn(this),On(this);else if(0<B.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),js(et),et.M=!0,X(11))}}else gn(this.i,this.l,B,null),Ls(this,B);Ye==4&&xn(this),this.o&&!this.J&&(Ye==4?qs(this.j,this):(this.o=!1,Ai(this)))}else ga(this.g),m==400&&0<B.indexOf("Unknown SID")?(this.s=3,X(12)):(this.s=0,X(13)),xn(this),On(this)}}}catch{}finally{}};function Yo(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function rc(a,f){var m=a.C,w=f.indexOf(`
`,m);return w==-1?Ds:(m=Number(f.substring(m,w)),isNaN(m)?Ns:(w+=1,w+m>f.length?Ds:(f=f.slice(w,w+m),a.C=w+m,f)))}$t.prototype.cancel=function(){this.J=!0,xn(this)};function Ai(a){a.S=Date.now()+a.I,Xo(a,a.I)}function Xo(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Rt(v(a.ba,a),f)}function xs(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$t.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Go(this.i,this.A),this.L!=2&&(rr(),X(17)),xn(this),this.s=2,On(this)):Xo(this,this.S-a)};function On(a){a.j.G==0||a.J||qs(a.j,a)}function xn(a){xs(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,nr(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Ls(a,f){try{var m=a.j;if(m.G!=0&&(m.g==a||Lr(m.h,a))){if(!a.K&&Lr(m.h,a)&&m.G==3){try{var w=m.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var k=w;if(k[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Oi(m),ki(m);else break e;Di(m),X(18)}}else m.za=k[1],0<m.za-m.T&&37500>k[2]&&m.F&&m.v==0&&!m.C&&(m.C=Rt(v(m.Za,m),6e3));if(1>=ea(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Vn(m,11)}else if((a.K||m.g==a)&&Oi(m),!U(f))for(k=m.Da.g.parse(f),f=0;f<k.length;f++){let de=k[f];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const et=de[3];et!=null&&(m.la=et,m.j.info("VER="+m.la));const Ye=de[4];Ye!=null&&(m.Aa=Ye,m.j.info("SVER="+m.Aa));const lr=de[5];lr!=null&&typeof lr=="number"&&0<lr&&(w=1.5*lr,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Ct=a.g;if(Ct){const jr=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jr){var O=w.h;O.g||jr.indexOf("spdy")==-1&&jr.indexOf("quic")==-1&&jr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ms(O,O.h),O.h=null))}if(w.D){const Li=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Li&&(w.ya=Li,we(w.I,w.D,Li))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var B=a;if(w.qa=ba(w,w.J?w.ia:null,w.W),B.K){ta(w.h,B);var _e=B,Qe=w.L;Qe&&(_e.I=Qe),_e.B&&(xs(_e),Ai(_e)),w.g=B}else Ea(w);0<m.i.length&&Ni(m)}else de[0]!="stop"&&de[0]!="close"||Vn(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Vn(m,7):Bs(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}rr(4)}catch{}}var Ln=class{constructor(a,f){this.g=a,this.map=f}};function Jo(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zo(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ea(a){return a.h?1:a.g?a.g.size:0}function Lr(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Ms(a,f){a.g?a.g.add(f):a.h=f}function ta(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Jo.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function na(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.D);return f}return x(a.i)}function ic(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],m=a.length,w=0;w<m;w++)f.push(a[w]);return f}f=[],m=0;for(w in a)f[m++]=a[w];return f}function sc(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var m=0;m<a;m++)f.push(m);return f}f=[],m=0;for(const w in a)f[m++]=w;return f}}}function Ie(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var m=sc(a),w=ic(a),k=w.length,O=0;O<k;O++)f.call(void 0,w[O],m&&m[O],a)}var ra=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oc(a,f){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var w=a[m].indexOf("="),k=null;if(0<=w){var O=a[m].substring(0,w);k=a[m].substring(w+1)}else O=a[m];f(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Mn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mn){this.h=a.h,Ci(this,a.j),this.o=a.o,this.g=a.g,Si(this,a.s),this.l=a.l;var f=a.i,m=new Vr;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Ri(this,m),this.m=a.m}else a&&(f=String(a).match(ra))?(this.h=!1,Ci(this,f[1]||"",!0),this.o=yn(f[2]||""),this.g=yn(f[3]||"",!0),Si(this,f[4]),this.l=yn(f[5]||"",!0),Ri(this,f[6]||"",!0),this.m=yn(f[7]||"")):(this.h=!1,this.i=new Vr(null,this.h))}Mn.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Ce(f,ia,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Ce(f,ia,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Ce(m,m.charAt(0)=="/"?sa:lc,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Ce(m,uc)),a.join("")};function Jt(a){return new Mn(a)}function Ci(a,f,m){a.j=m?yn(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Si(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Ri(a,f,m){f instanceof Vr?(a.i=f,hc(a.i,a.h)):(m||(f=Ce(f,cc)),a.i=new Vr(f,a.h))}function we(a,f,m){a.i.set(f,m)}function Mr(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function yn(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ce(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,ac),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ac(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ia=/[#\/\?@]/g,lc=/[#\?:]/g,sa=/[#\?]/g,cc=/[#\?@]/g,uc=/#/g;function Vr(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Zt(a){a.g||(a.g=new Map,a.h=0,a.i&&oc(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=Vr.prototype,n.add=function(a,f){Zt(this),this.i=null,a=ir(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function oa(a,f){Zt(a),f=ir(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Vs(a,f){return Zt(a),f=ir(a,f),a.g.has(f)}n.forEach=function(a,f){Zt(this),this.g.forEach(function(m,w){m.forEach(function(k){a.call(f,k,w,this)},this)},this)},n.na=function(){Zt(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let w=0;w<f.length;w++){const k=a[w];for(let O=0;O<k.length;O++)m.push(f[w])}return m},n.V=function(a){Zt(this);let f=[];if(typeof a=="string")Vs(this,a)&&(f=f.concat(this.g.get(ir(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)f=f.concat(a[m])}return f},n.set=function(a,f){return Zt(this),this.i=null,a=ir(this,a),Vs(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function aa(a,f,m){oa(a,f),0<m.length&&(a.i=null,a.g.set(ir(a,f),x(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var w=f[m];const O=encodeURIComponent(String(w)),B=this.V(w);for(w=0;w<B.length;w++){var k=O;B[w]!==""&&(k+="="+encodeURIComponent(String(B[w]))),a.push(k)}}return this.i=a.join("&")};function ir(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function hc(a,f){f&&!a.j&&(Zt(a),a.i=null,a.g.forEach(function(m,w){var k=w.toLowerCase();w!=k&&(oa(this,w),aa(this,k,m))},a)),a.j=f}function dc(a,f){const m=new Vt;if(l.Image){const w=new Image;w.onload=C(wn,m,"TestLoadImage: loaded",!0,f,w),w.onerror=C(wn,m,"TestLoadImage: error",!1,f,w),w.onabort=C(wn,m,"TestLoadImage: abort",!1,f,w),w.ontimeout=C(wn,m,"TestLoadImage: timeout",!1,f,w),l.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else f(!1)}function fc(a,f){const m=new Vt,w=new AbortController,k=setTimeout(()=>{w.abort(),wn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:w.signal}).then(O=>{clearTimeout(k),O.ok?wn(m,"TestPingServer: ok",!0,f):wn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),wn(m,"TestPingServer: error",!1,f)})}function wn(a,f,m,w,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),w(m)}catch{}}function pc(){this.g=new Ss}function la(a,f,m){const w=m||"";try{Ie(a,function(k,O){let B=k;h(k)&&(B=vi(k)),f.push(w+O+"="+encodeURIComponent(B))})}catch(k){throw f.push(w+"type="+encodeURIComponent("_badmap")),k}}function Fr(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Fr,Rs),Fr.prototype.g=function(){return new Ur(this.l,this.j)},Fr.prototype.i=function(a){return function(){return a}}({});function Ur(a,f){We.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ur,We),n=Ur.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ht(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ht(this)),this.g&&(this.readyState=3,Ht(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ca(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ca(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Br(this):Ht(this),this.readyState==3&&ca(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Br(this))},n.Qa=function(a){this.g&&(this.response=a,Br(this))},n.ga=function(){this.g&&Br(this)};function Br(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ht(a)}n.setRequestHeader=function(a,f){this.u.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function Ht(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fs(a){let f="";return re(a,function(m,w){f+=w,f+=":",f+=m,f+=`\r
`}),f}function Us(a,f,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=Fs(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):we(a,f,m))}function Se(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Se,We);var ua=/^https?$/i,mc=["POST","PUT"];n=Se.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,f,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?Ti(this.o):Ti(Ii),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(O){ha(this,O);return}if(a=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var k in w)m.set(k,w[k]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())m.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(mc,f,void 0))||w||k||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of m)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pa(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){ha(this,O)}};function ha(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,da(a),Pi(a)}function da(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ge(this,"complete"),Ge(this,"abort"),Pi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pi(this,!0)),Se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fa(this):this.bb())},n.bb=function(){fa(this)};function fa(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pt(a)!=4||a.Z()!=2)){if(a.u&&pt(a)==4)Lt(a.Ea,0,a);else if(Ge(a,"readystatechange"),pt(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var w;if(w=B===0){var k=String(a.D).match(ra)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),w=!ua.test(k?k.toLowerCase():"")}m=w}if(m)Ge(a,"complete"),Ge(a,"success");else{a.m=6;try{var O=2<pt(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",da(a)}}finally{Pi(a)}}}}function Pi(a,f){if(a.g){pa(a);const m=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||Ge(a,"ready");try{m.onreadystatechange=w}catch{}}}function pa(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function pt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Ei(f)}};function ma(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ga(a){const f={};a=(a.g&&2<=pt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(U(a[w]))continue;var m=S(a[w]);const k=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=f[k]||[];f[k]=O,O.push(m)}R(f,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function _a(a){this.Aa=0,this.i=[],this.j=new Vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,a),this.cb=sr("retryDelaySeedMs",1e4,a),this.Wa=sr("forwardChannelMaxRetries",2,a),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jo(a&&a.concurrentRequestLimit),this.Da=new pc,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_a.prototype,n.la=8,n.G=1,n.connect=function(a,f,m,w){X(0),this.W=a,this.H=f||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=ba(this,null,this.W),Ni(this)};function Bs(a){if(ya(a),a.G==3){var f=a.U++,m=Jt(a.I);if(we(m,"SID",a.K),we(m,"RID",f),we(m,"TYPE","terminate"),zt(a,m),f=new $t(a,a.j,f),f.L=2,f.v=Mr(Jt(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=f.v,m=!0),m||(f.g=$s(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ai(f)}Ta(a)}function ki(a){a.g&&(js(a),a.g.cancel(),a.g=null)}function ya(a){ki(a),a.u&&(l.clearTimeout(a.u),a.u=null),Oi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ni(a){if(!Zo(a.h)&&!a.s){a.s=!0;var f=a.Ga;xt||jt(),St||(xt(),St=!0),J.add(f,a),a.B=0}}function gc(a,f){return ea(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Rt(v(a.Ga,a,f),or(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new $t(this,this.j,a);let O=this.o;if(this.S&&(O?(O=b(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=va(this,k,f),m=Jt(this.I),we(m,"RID",a),we(m,"CVER",22),this.D&&we(m,"X-HTTP-Session-Id",this.D),zt(this,m),O&&(this.O?f="headers="+encodeURIComponent(String(Fs(O)))+"&"+f:this.m&&Us(m,this.m,O)),Ms(this.h,k),this.Ua&&we(m,"TYPE","init"),this.P?(we(m,"$req",f),we(m,"SID","null"),k.T=!0,Os(k,m,null)):Os(k,m,f),this.G=2}}else this.G==3&&(a?wa(this,a):this.i.length==0||Zo(this.h)||wa(this))};function wa(a,f){var m;f?m=f.l:m=a.U++;const w=Jt(a.I);we(w,"SID",a.K),we(w,"RID",m),we(w,"AID",a.T),zt(a,w),a.m&&a.o&&Us(w,a.m,a.o),m=new $t(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),f&&(a.i=f.D.concat(a.i)),f=va(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ms(a.h,m),Os(m,w,f)}function zt(a,f){a.H&&re(a.H,function(m,w){we(f,w,m)}),a.l&&Ie({},function(m,w){we(f,w,m)})}function va(a,f,m){m=Math.min(a.i.length,m);var w=a.l?v(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const B=["count="+m];O==-1?0<m?(O=k[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let _e=!0;for(let Qe=0;Qe<m;Qe++){let de=k[Qe].g;const et=k[Qe].map;if(de-=O,0>de)O=Math.max(0,k[Qe].g-100),_e=!1;else try{la(et,B,"req"+de+"_")}catch{w&&w(et)}}if(_e){w=B.join("&");break e}}}return a=a.i.splice(0,m),f.D=a,w}function Ea(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;xt||jt(),St||(xt(),St=!0),J.add(f,a),a.v=0}}function Di(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Rt(v(a.Fa,a),or(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,en(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Rt(v(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,X(10),ki(this),en(this))};function js(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function en(a){a.g=new $t(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Jt(a.qa);we(f,"RID","rpc"),we(f,"SID",a.K),we(f,"AID",a.T),we(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(f,"TO",a.ja),we(f,"TYPE","xmlhttp"),zt(a,f),a.m&&a.o&&Us(f,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=Mr(Jt(f)),m.m=null,m.P=!0,_n(m,a)}n.Za=function(){this.C!=null&&(this.C=null,ki(this),Di(this),X(19))};function Oi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function qs(a,f){var m=null;if(a.g==f){Oi(a),js(a),a.g=null;var w=2}else if(Lr(a.h,f))m=f.D,ta(a.h,f),w=1;else return;if(a.G!=0){if(f.o)if(w==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var k=a.B;w=lt(),Ge(w,new Mt(w,m)),Ni(a)}else Ea(a);else if(k=f.s,k==3||k==0&&0<f.X||!(w==1&&gc(a,f)||w==2&&Di(a)))switch(m&&0<m.length&&(f=a.h,f.i=f.i.concat(m)),k){case 1:Vn(a,5);break;case 4:Vn(a,10);break;case 3:Vn(a,6);break;default:Vn(a,2)}}}function or(a,f){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*f}function Vn(a,f){if(a.j.info("Error code "+f),f==2){var m=v(a.fb,a),w=a.Xa;const k=!w;w=new Mn(w||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ci(w,"https"),Mr(w),k?dc(w.toString(),m):fc(w.toString(),m)}else X(2);a.G=0,a.l&&a.l.sa(f),Ta(a),ya(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function Ta(a){if(a.G=0,a.ka=[],a.l){const f=na(a.h);(f.length!=0||a.i.length!=0)&&(D(a.ka,f),D(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function ba(a,f,m){var w=m instanceof Mn?Jt(m):new Mn(m);if(w.g!="")f&&(w.g=f+"."+w.g),Si(w,w.s);else{var k=l.location;w=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var O=new Mn(null);w&&Ci(O,w),f&&(O.g=f),k&&Si(O,k),m&&(O.l=m),w=O}return m=a.D,f=a.ya,m&&f&&we(w,m,f),we(w,"VER",a.la),zt(a,w),w}function $s(a,f,m){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Se(new Fr({eb:m})):new Se(a.pa),f.Ha(a.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fn(){}n=Fn.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function xi(){}xi.prototype.g=function(a,f){return new At(a,f)};function At(a,f){We.call(this),this.g=new _a(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!U(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!U(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new ar(this)}N(At,We),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Bs(this.g)},At.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=vi(a),a=m);f.i.push(new Ln(f.Ya++,a)),f.G==3&&Ni(f)},At.prototype.N=function(){this.g.l=null,delete this.j,Bs(this.g),delete this.g,At.aa.N.call(this)};function Ia(a){Ps.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}N(Ia,Ps);function Aa(){ot.call(this),this.status=1}N(Aa,ot);function ar(a){this.g=a}N(ar,Fn),ar.prototype.ua=function(){Ge(this.g,"a")},ar.prototype.ta=function(a){Ge(this.g,new Ia(a))},ar.prototype.sa=function(a){Ge(this.g,new Aa)},ar.prototype.ra=function(){Ge(this.g,"b")},xi.prototype.createWebChannel=xi.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,tm=function(){return new xi},em=function(){return lt()},Zp=at,nu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ke.NO_ERROR=0,Ke.TIMEOUT=8,Ke.HTTP_ERROR=6,Ha=Ke,Ko.COMPLETE="complete",Jp=Ko,bi.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",We.prototype.listen=We.prototype.K,Xs=bi,Xp=Fr,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,Yp=Se}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});const Fd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Ml("@firebase/firestore");function zs(){return ii.logLevel}function K(n,...e){if(ii.logLevel<=le.DEBUG){const t=e.map($u);ii.debug(`Firestore (${ms}): ${n}`,...t)}}function Gn(n,...e){if(ii.logLevel<=le.ERROR){const t=e.map($u);ii.error(`Firestore (${ms}): ${n}`,...t)}}function Zi(n,...e){if(ii.logLevel<=le.WARN){const t=e.map($u);ii.warn(`Firestore (${ms}): ${n}`,...t)}}function $u(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+n;throw Gn(e),new Error(e)}function Re(n,e){n||Z()}function ne(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gt.UNAUTHENTICATED))}shutdown(){}}class rT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iT{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new nm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new gt(e)}}class sT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new sT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Re(typeof t.token=="string"),this.R=t.token,new aT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=cT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Ee(n,e){return n<e?-1:n>e?1:0}function es(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Xe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Xe(0,0))}static max(){return new ee(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(),r===void 0?r=e.length-t:r>e.length-t&&Z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vo?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ne extends vo{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const uT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends vo{construct(e,t,r){return new ut(e,t,r)}static isValidIdentifier(e){return uT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(t)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ne.fromString(e))}static fromName(e){return new Q(Ne.fromString(e).popFirst(5))}static empty(){return new Q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ne(e.slice()))}}function hT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Xe(t+1,0):new Xe(t,r));return new Er(i,Q.empty(),e)}function dT(n){return new Er(n.readTime,n.key,-1)}class Er{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Er(ee.min(),Q.empty(),-1)}static max(){return new Er(ee.max(),Q.empty(),-1)}}function fT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:Ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==pT)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,r)=>{t(e)})}static reject(e){return new F((t,r)=>{r(e)})}static waitFor(e){return new F((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next(i=>i?F.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,t){return new F((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function gT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function No(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hu.oe=-1;function Vl(n){return n==null}function sl(n){return n===0&&1/n==-1/0}function _T(n){return typeof n=="number"&&Number.isInteger(n)&&!sl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function im(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He=class ru{constructor(e,t){this.comparator=e,this.root=t||gr.EMPTY}insert(e,t){return new ru(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gr.BLACK,null,null))}remove(e){return new ru(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}},Oa=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},gr=class Un{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Un.RED,this.left=i??Un.EMPTY,this.right=s??Un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Un(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Un.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Un.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Un.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Un.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}};gr.EMPTY=null,gr.RED=!0,gr.BLACK=!1;gr.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,t,r,i,s){return this}insert(e,t,r){return new gr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bd(this.data.getIterator())}getIteratorFrom(e){return new Bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ht(this.comparator);return t.data=e,t}}class Bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new ht(ut.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sm("Invalid base64 string: "+s):s}}(e);return new It(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new It(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const yT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(n){if(Re(!!n),typeof n=="string"){let e=0;const t=yT.exec(n);if(Re(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function si(n){return typeof n=="string"?It.fromBase64String(n):It.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wu(n){const e=n.mapValue.fields.__previous_value__;return zu(e)?Wu(e):e}function Eo(n){const e=Tr(n.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,t,r,i,s,o,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class To{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new To("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zu(n)?4:vT(n)?9007199254740991:10:Z()}function An(n,e){if(n===e)return!0;const t=oi(n);if(t!==oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Eo(n).isEqual(Eo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Tr(i.timestampValue),l=Tr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return si(i.bytesValue).isEqual(si(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),l=qe(s.doubleValue);return o===l?sl(o)===sl(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return es(n.arrayValue.values||[],e.arrayValue.values||[],An);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ud(o)!==Ud(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!An(o[u],l[u])))return!1;return!0}(n,e);default:return Z()}}function bo(n,e){return(n.values||[]).find(t=>An(t,e))!==void 0}function ts(n,e){if(n===e)return 0;const t=oi(n),r=oi(e);if(t!==r)return Ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ee(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=qe(s.integerValue||s.doubleValue),u=qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return jd(n.timestampValue,e.timestampValue);case 4:return jd(Eo(n),Eo(e));case 5:return Ee(n.stringValue,e.stringValue);case 6:return function(s,o){const l=si(s),u=si(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=Ee(l[h],u[h]);if(p!==0)return p}return Ee(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Ee(qe(s.latitude),qe(o.latitude));return l!==0?l:Ee(qe(s.longitude),qe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let h=0;h<l.length&&h<u.length;++h){const p=ts(l[h],u[h]);if(p)return p}return Ee(l.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===xa.mapValue&&o===xa.mapValue)return 0;if(s===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const v=Ee(u[y],p[y]);if(v!==0)return v;const C=ts(l[u[y]],h[p[y]]);if(C!==0)return C}return Ee(u.length,p.length)}(n.mapValue,e.mapValue);default:throw Z()}}function jd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ee(n,e);const t=Tr(n),r=Tr(e),i=Ee(t.seconds,r.seconds);return i!==0?i:Ee(t.nanos,r.nanos)}function ns(n){return iu(n)}function iu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Tr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return si(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=iu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${iu(t.fields[o])}`;return i+"}"}(n.mapValue):Z()}function qd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function su(n){return!!n&&"integerValue"in n}function Gu(n){return!!n&&"arrayValue"in n}function $d(n){return!!n&&"nullValue"in n}function Hd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function za(n){return!!n&&"mapValue"in n}function ro(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hi(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ro(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ro(n.arrayValue.values[t]);return e}return Object.assign({},n)}function vT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!za(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ro(t)}setAll(e){let t=ut.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());za(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){hi(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(ro(this.value))}}function om(n){const e=[];return hi(n.fields,(t,r)=>{const i=new ut([t]);if(za(r)){const s=om(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,ee.min(),ee.min(),ee.min(),kt.empty(),0)}static newFoundDocument(e,t,r,i){return new yt(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new yt(e,2,t,ee.min(),ee.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new yt(e,3,t,ee.min(),ee.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.position=e,this.inclusive=t}}function zd(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),t.key):r=ts(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!An(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t="asc"){this.field=e,this.dir=t}}function ET(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{}class $e extends am{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new bT(e,t,r):t==="array-contains"?new CT(e,r):t==="in"?new ST(e,r):t==="not-in"?new RT(e,r):t==="array-contains-any"?new PT(e,r):new $e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new IT(e,r):new AT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ts(t,this.value)):t!==null&&oi(this.value)===oi(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends am{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dn(e,t)}matches(e){return lm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lm(n){return n.op==="and"}function cm(n){return TT(n)&&lm(n)}function TT(n){for(const e of n.filters)if(e instanceof dn)return!1;return!0}function ou(n){if(n instanceof $e)return n.field.canonicalString()+n.op.toString()+ns(n.value);if(cm(n))return n.filters.map(e=>ou(e)).join(",");{const e=n.filters.map(t=>ou(t)).join(",");return`${n.op}(${e})`}}function um(n,e){return n instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&An(r.value,i.value)}(n,e):n instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&um(o,i.filters[l]),!0):!1}(n,e):void Z()}function hm(n){return n instanceof $e?function(t){return`${t.field.canonicalString()} ${t.op} ${ns(t.value)}`}(n):n instanceof dn?function(t){return t.op.toString()+" {"+t.getFilters().map(hm).join(" ,")+"}"}(n):"Filter"}class bT extends $e{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class IT extends $e{constructor(e,t){super(e,"in",t),this.keys=dm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class AT extends $e{constructor(e,t){super(e,"not-in",t),this.keys=dm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class CT extends $e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gu(t)&&bo(t.arrayValue,this.value)}}class ST extends $e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bo(this.value.arrayValue,t)}}class RT extends $e{constructor(e,t){super(e,"not-in",t)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!bo(this.value.arrayValue,t)}}class PT extends $e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>bo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Gd(n,e=null,t=[],r=[],i=null,s=null,o=null){return new kT(n,e,t,r,i,s,o)}function Ku(n){const e=ne(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ou(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ns(r)).join(",")),e.ue=t}return e.ue}function Qu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ET(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!um(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wd(n.startAt,e.startAt)&&Wd(n.endAt,e.endAt)}function au(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function NT(n,e,t,r,i,s,o,l){return new Do(n,e,t,r,i,s,o,l)}function Yu(n){return new Do(n)}function Kd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fm(n){return n.collectionGroup!==null}function io(n){const e=ne(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new al(s,r))}),t.has(ut.keyField().canonicalString())||e.ce.push(new al(ut.keyField(),r))}return e.ce}function Tn(n){const e=ne(n);return e.le||(e.le=DT(e,io(n))),e.le}function DT(n,e){if(n.limitType==="F")return Gd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new al(i.field,s)});const t=n.endAt?new ol(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ol(n.startAt.position,n.startAt.inclusive):null;return Gd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function lu(n,e){const t=n.filters.concat([e]);return new Do(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cu(n,e,t){return new Do(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fl(n,e){return Qu(Tn(n),Tn(e))&&n.limitType===e.limitType}function pm(n){return`${Ku(Tn(n))}|lt:${n.limitType}`}function Ui(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>hm(i)).join(", ")}]`),Vl(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ns(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ns(i)).join(",")),`Target(${r})`}(Tn(n))}; limitType=${n.limitType})`}function Ul(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of io(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=zd(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,io(r),i)||r.endAt&&!function(o,l,u){const h=zd(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,io(r),i))}(n,e)}function OT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mm(n){return(e,t)=>{let r=!1;for(const i of io(n)){const s=xT(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xT(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ts(u,h):Z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return im(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new He(Q.comparator);function Kn(){return LT}const gm=new He(Q.comparator);function Js(...n){let e=gm;for(const t of n)e=e.insert(t.key,t);return e}function _m(n){let e=gm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Qr(){return so()}function ym(){return so()}function so(){return new gs(n=>n.toString(),(n,e)=>n.isEqual(e))}const MT=new He(Q.comparator),VT=new ht(Q.comparator);function ce(...n){let e=VT;for(const t of n)e=e.add(t);return e}const FT=new ht(Ee);function UT(){return FT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sl(e)?"-0":e}}function vm(n){return{integerValue:""+n}}function BT(n,e){return _T(e)?vm(e):wm(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this._=void 0}}function jT(n,e,t){return n instanceof ll?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zu(s)&&(s=Wu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Io?Tm(n,e):n instanceof Ao?bm(n,e):function(i,s){const o=Em(i,s),l=Qd(o)+Qd(i.Pe);return su(o)&&su(i.Pe)?vm(l):wm(i.serializer,l)}(n,e)}function qT(n,e,t){return n instanceof Io?Tm(n,e):n instanceof Ao?bm(n,e):t}function Em(n,e){return n instanceof cl?function(r){return su(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ll extends Bl{}class Io extends Bl{constructor(e){super(),this.elements=e}}function Tm(n,e){const t=Im(e);for(const r of n.elements)t.some(i=>An(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ao extends Bl{constructor(e){super(),this.elements=e}}function bm(n,e){let t=Im(e);for(const r of n.elements)t=t.filter(i=>!An(i,r));return{arrayValue:{values:t}}}class cl extends Bl{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Qd(n){return qe(n.integerValue||n.doubleValue)}function Im(n){return Gu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $T(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof Ao&&i instanceof Ao?es(r.elements,i.elements,An):r instanceof cl&&i instanceof cl?An(r.Pe,i.Pe):r instanceof ll&&i instanceof ll}(n.transform,e.transform)}class HT{constructor(e,t){this.version=e,this.transformResults=t}}class on{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jl{}function Am(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xu(n.key,on.none()):new Oo(n.key,n.data,on.none());{const t=n.data,r=kt.empty();let i=new ht(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(n.key,r,new Ft(i.toArray()),on.none())}}function zT(n,e,t){n instanceof Oo?function(i,s,o){const l=i.value.clone(),u=Xd(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ar?function(i,s,o){if(!Wa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Xd(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Cm(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function oo(n,e,t,r){return n instanceof Oo?function(s,o,l,u){if(!Wa(s.precondition,o))return l;const h=s.value.clone(),p=Jd(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ar?function(s,o,l,u){if(!Wa(s.precondition,o))return l;const h=Jd(s.fieldTransforms,u,o),p=o.data;return p.setAll(Cm(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,o,l){return Wa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function WT(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Em(r.transform,i||null);s!=null&&(t===null&&(t=kt.empty()),t.set(r.field,s))}return t||null}function Yd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&es(r,i,(s,o)=>$T(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Oo extends jl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends jl{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Cm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Xd(n,e,t){const r=new Map;Re(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,qT(o,l,t[i]))}return r}function Jd(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,jT(s,o,e))}return r}class Xu extends jl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GT extends jl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zT(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=oo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=oo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ym();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const u=Am(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(t,r)=>Yd(t,r))&&es(this.baseMutations,e.baseMutations,(t,r)=>Yd(t,r))}}class Ju{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Re(e.mutations.length===r.length);let i=function(){return MT}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ju(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,fe;function XT(n){switch(n){default:return Z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Sm(n){if(n===void 0)return Gn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return Z()}}(fe=Be||(Be={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=new Zr([4294967295,4294967295],0);function Zd(n){const e=JT().encode(n),t=new Qp;return t.update(e),new Uint8Array(t.digest())}function ef(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zr([t,r],0),new Zr([i,s],0)]}class Zu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Zs(`Invalid padding: ${t}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Zr.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Zr.fromNumber(r)));return i.compare(ZT)===1&&(i=new Zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Zd(e),[r,i]=ef(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zu(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Zd(e),[r,i]=ef(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,xo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ql(ee.min(),i,new He(Ee),Kn(),ce())}}class xo{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xo(r,t,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Rm{constructor(e,t){this.targetId=e,this.me=t}}class Pm{constructor(e,t,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class tf{constructor(){this.fe=0,this.ge=rf(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ce(),t=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new xo(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=rf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class eb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=nf(),this.Qe=new He(Ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(au(s))if(r===0){const o=new Q(s.path);this.Ue(t,o,yt.newNoDocument(o,ee.min()))}else Re(r===1);else{const o=this.Ye(t);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=si(r).toUint8Array()}catch(u){if(u instanceof sm)return Zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zu(o,i,s)}catch(u){return Zi(u instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&au(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}s.be&&(t.set(o,s.Ce()),s.ve())}});let r=ce();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ql(e,t,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=nf(),this.Qe=new He(Ee),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new tf,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ht(Ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new tf),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function nf(){return new He(Q.comparator)}function rf(){return new He(Q.comparator)}const tb={asc:"ASCENDING",desc:"DESCENDING"},nb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rb={and:"AND",or:"OR"};class ib{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uu(n,e){return n.useProto3Json||Vl(e)?e:{value:e}}function ul(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function km(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sb(n,e){return ul(n,e.toTimestamp())}function bn(n){return Re(!!n),ee.fromTimestamp(function(t){const r=Tr(t);return new Xe(r.seconds,r.nanos)}(n))}function eh(n,e){return hu(n,e).canonicalString()}function hu(n,e){const t=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nm(n){const e=Ne.fromString(n);return Re(Mm(e)),e}function du(n,e){return eh(n.databaseId,e.path)}function Rc(n,e){const t=Nm(e);if(t.get(1)!==n.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Om(t))}function Dm(n,e){return eh(n.databaseId,e)}function ob(n){const e=Nm(n);return e.length===4?Ne.emptyPath():Om(e)}function fu(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Om(n){return Re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function sf(n,e,t){return{name:du(n,e),fields:t.value.mapValue.fields}}function ab(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(Re(p===void 0||typeof p=="string"),It.fromBase64String(p||"")):(Re(p===void 0||p instanceof Buffer||p instanceof Uint8Array),It.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?V.UNKNOWN:Sm(h.code);return new W(p,h.message||"")}(o);t=new Pm(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rc(n,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ee.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];t=new Ga(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rc(n,r.document),s=r.readTime?bn(r.readTime):ee.min(),o=yt.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ga([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rc(n,r.document),s=r.removedTargetIds||[];t=new Ga([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YT(i,s),l=r.targetId;t=new Rm(l,o)}}return t}function lb(n,e){let t;if(e instanceof Oo)t={update:sf(n,e.key,e.value)};else if(e instanceof Xu)t={delete:du(n,e.key)};else if(e instanceof Ar)t={update:sf(n,e.key,e.data),updateMask:_b(e.fieldMask)};else{if(!(e instanceof GT))return Z();t={verify:du(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ll)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(n,e.precondition)),t}function cb(n,e){return n&&n.length>0?(Re(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(ee.min())&&(o=bn(s)),new HT(o,i.transformResults||[])}(t,e))):[]}function ub(n,e){return{documents:[Dm(n,e.path)]}}function hb(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Dm(n,i);const s=function(h){if(h.length!==0)return Lm(dn.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(v){return{field:Bi(v.field),direction:pb(v.dir)}}(p))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=uu(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function db(n){let e=ob(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Re(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(y){const v=xm(y);return v instanceof dn&&cm(v)?v.getFilters():[v]}(t.where));let o=[];t.orderBy&&(o=function(y){return y.map(v=>function(N){return new al(ji(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,Vl(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(y){const v=!!y.before,C=y.values||[];return new ol(C,v)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const v=!y.before,C=y.values||[];return new ol(C,v)}(t.endAt)),NT(e,i,o,s,l,"F",u,h)}function fb(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ji(t.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ji(t.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ji(t.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ji(t.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(n):n.fieldFilter!==void 0?function(t){return $e.create(ji(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return dn.create(t.compositeFilter.filters.map(r=>xm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(t.compositeFilter.op))}(n):Z()}function pb(n){return tb[n]}function mb(n){return nb[n]}function gb(n){return rb[n]}function Bi(n){return{fieldPath:n.canonicalString()}}function ji(n){return ut.fromServerFormat(n.fieldPath)}function Lm(n){return n instanceof $e?function(t){if(t.op==="=="){if(Hd(t.value))return{unaryFilter:{field:Bi(t.field),op:"IS_NAN"}};if($d(t.value))return{unaryFilter:{field:Bi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hd(t.value))return{unaryFilter:{field:Bi(t.field),op:"IS_NOT_NAN"}};if($d(t.value))return{unaryFilter:{field:Bi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(t.field),op:mb(t.op),value:t.value}}}(n):n instanceof dn?function(t){const r=t.getFilters().map(i=>Lm(i));return r.length===1?r[0]:{compositeFilter:{op:gb(t.op),filters:r}}}(n):Z()}function _b(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,r,i,s=ee.min(),o=ee.min(),l=It.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.ct=e}}function wb(n){const e=db({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this._n=new Eb}addToCollectionParentIndex(e,t){return this._n.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(Er.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class Eb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ht(Ne.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new rs(0)}static Ln(){return new rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.changes=new gs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&oo(r.mutation,i,Ft.empty(),Xe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const i=Qr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Js();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Qr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=Kn();const o=so(),l=function(){return so()}();return t.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Ar)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),oo(p.mutation,h,p.mutation.getFieldMask(),Xe.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),t.forEach((h,p)=>{var y;return l.set(h,new bb(p,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=so();let i=new He((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let p=r.get(u)||Ft.empty();p=l.applyToLocalView(h,p),r.set(u,p);const y=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,y=ym();p.forEach(v=>{if(!s.has(v)){const C=Am(t.get(v),r.get(v));C!==null&&y.set(v,C),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):fm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):F.resolve(Qr());let l=-1,u=s;return o.next(h=>F.forEach(h,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(p)?F.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ce())).next(p=>({batchId:l,changes:_m(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let i=Js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Js();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const h=function(y,v){return new Do(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((y,v)=>{o=o.insert(y,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,yt.newInvalidDocument(p)))});let l=Js();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&oo(p.mutation,h,Ft.empty(),Xe.now()),Ul(t,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return F.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:wb(i.bundledQuery),readTime:bn(i.readTime)}}(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.overlays=new He(Q.comparator),this.hr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qr();return F.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),F.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const i=Qr(),s=t.length+1,o=new Q(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new He((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Qr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return F.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QT(t,r));let s=this.hr.get(t);s===void 0&&(s=ce(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.Pr=new ht(nt.Ir),this.Tr=new ht(nt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new nt(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new nt(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new Q(new Ne([])),r=new nt(t,e),i=new nt(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Q(new Ne([])),r=new nt(t,e),i=new nt(t,e+1);let s=ce();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new nt(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Q.comparator(e.key,t.key)||Ee(e.pr,t.pr)}static Er(e,t){return Ee(e.pr,t.pr)||Q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ht(nt.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KT(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new nt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,t){return F.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new nt(t,0),i=new nt(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ht(Ee);return t.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new nt(new Q(s),0);let l=new ht(Ee);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.pr)),!0)},o),F.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Re(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(t.mutations,i=>{const s=new nt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new nt(t,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.vr=e,this.docs=function(){return new He(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(t))}getEntries(e,t){let r=Kn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Kn();const o=t.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||fT(dT(p),r)<=0||(i.has(p.key)||Ul(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Z()}Fr(e,t){return F.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Pb(this)}getSize(e){return F.resolve(this.size)}}class Pb extends Tb{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),F.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.persistence=e,this.Mr=new gs(t=>Ku(t),Qu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new th,this.targetCount=0,this.Lr=rs.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),F.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new rs(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.qn(t),F.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t){this.Br={},this.overlays={},this.kr=new Hu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new kb(this),this.indexManager=new vb,this.remoteDocumentCache=function(i){return new Rb(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yb(t),this.$r=new Ab(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Sb(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const i=new Db(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class Db extends mT{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.zr=new th,this.jr=null}static Hr(e){return new nh(e)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),F.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=Q.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return F.or([()=>F.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=ce(),i=ce();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rh(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return bv()?8:gT(hn())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ob;return this.Ji(e,t,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,t,o,l.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(zs()<=le.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ui(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(zs()<=le.DEBUG&&K("QueryEngine","Query:",Ui(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(zs()<=le.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ui(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(t))):F.resolve())}ji(e,t){if(Kd(t))return F.resolve(null);let r=Tn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=cu(t,null,"F"),r=Tn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Zi(t,l);return this.Xi(t,h,o,u.readTime)?this.ji(e,cu(t,null,"F")):this.es(e,h,t,u)}))})))}Hi(e,t,r,i){return Kd(t)||i.isEqual(ee.min())?F.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(t,s);return this.Xi(t,o,r,i)?F.resolve(null):(zs()<=le.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ui(t)),this.es(e,o,t,hT(i,-1)).next(l=>l))})}Zi(e,t){let r=new ht(mm(e));return t.forEach((i,s)=>{Ul(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return zs()<=le.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ui(t)),this.zi.getDocumentsMatchingQuery(e,t,Er.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new He(Ee),this.rs=new gs(s=>Ku(s),Qu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ib(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Mb(n,e,t,r){return new Lb(n,e,t,r)}async function Vm(n,e){const t=ne(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:l}))})})}function Vb(n,e){const t=ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const y=h.batch,v=y.keys();let C=F.resolve();return v.forEach(N=>{C=C.next(()=>p.getEntry(u,N)).next(x=>{const D=h.docVersions.get(N);Re(D!==null),x.version.compareTo(D)<0&&(y.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),p.addEntry(x)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Fm(n){const e=ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function Fb(n,e){const t=ne(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const l=[];e.targetChanges.forEach((p,y)=>{const v=i.get(y);if(!v)return;l.push(t.Qr.removeMatchingKeys(s,p.removedDocuments,y).next(()=>t.Qr.addMatchingKeys(s,p.addedDocuments,y)));let C=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?C=C.withResumeToken(It.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),i=i.insert(y,C),function(x,D,j){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(v,C,p)&&l.push(t.Qr.updateTargetData(s,C))});let u=Kn(),h=ce();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(Ub(s,o,e.documentUpdates).next(p=>{u=p.cs,h=p.ls})),!r.isEqual(ee.min())){const p=t.Qr.getLastRemoteSnapshotVersion(s).next(y=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.ns=i,s))}function Ub(n,e,t){let r=ce(),i=ce();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Kn();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Bb(n,e){const t=ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jb(n,e){const t=ne(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):t.Qr.allocateTargetId(r).next(o=>(i=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function pu(n,e,t){const r=ne(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!No(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function of(n,e,t){const r=ne(n);let i=ee.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const y=ne(u),v=y.rs.get(p);return v!==void 0?F.resolve(y.ns.get(v)):y.Qr.getTargetData(h,p)}(r,o,Tn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,t?i:ee.min(),t?s:ce())).next(l=>(qb(r,OT(e),l),{documents:l,hs:s})))}function qb(n,e,t){let r=n.ss.get(e)||ee.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}class af{constructor(){this.activeTargetIds=UT()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $b{constructor(){this.no=new af,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new af,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La=null;function Pc(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Gb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,o){const l=Pc(),u=this.vo(t,r.toUriEncodedString());K("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,o),this.Mo(t,u,h,i).then(p=>(K("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw Zi("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}xo(t,r,i,s,o,l){return this.Co(t,r,i,s,o)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}vo(t,r){const i=zb[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const s=Pc();return new Promise((o,l)=>{const u=new Yp;u.setWithCredentials(!0),u.listenOnce(Jp.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ha.NO_ERROR:const p=u.getResponseJson();K(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case Ha.TIMEOUT:K(mt,`RPC '${e}' ${s} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ha.HTTP_ERROR:const y=u.getStatus();if(K(mt,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v?.error;if(C&&C.status&&C.message){const N=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(j)>=0?j:V.UNKNOWN}(C.status);l(new W(N,C.message))}else l(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{K(mt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);K(mt,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}Oo(e,t,r){const i=Pc(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tm(),l=em(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new Xp({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=s.join("");K(mt,`Creating RPC '${e}' stream ${i}: ${p}`,u);const y=o.createWebChannel(p,u);let v=!1,C=!1;const N=new Wb({lo:D=>{C?K(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(v||(K(mt,`Opening RPC '${e}' stream ${i} transport.`),y.open(),v=!0),K(mt,`RPC '${e}' stream ${i} sending:`,D),y.send(D))},ho:()=>y.close()}),x=(D,j,U)=>{D.listen(j,z=>{try{U(z)}catch(G){setTimeout(()=>{throw G},0)}})};return x(y,Xs.EventType.OPEN,()=>{C||(K(mt,`RPC '${e}' stream ${i} transport opened.`),N.mo())}),x(y,Xs.EventType.CLOSE,()=>{C||(C=!0,K(mt,`RPC '${e}' stream ${i} transport closed`),N.po())}),x(y,Xs.EventType.ERROR,D=>{C||(C=!0,Zi(mt,`RPC '${e}' stream ${i} transport errored:`,D),N.po(new W(V.UNAVAILABLE,"The operation could not be completed")))}),x(y,Xs.EventType.MESSAGE,D=>{var j;if(!C){const U=D.data[0];Re(!!U);const z=U,G=z.error||((j=z[0])===null||j===void 0?void 0:j.error);if(G){K(mt,`RPC '${e}' stream ${i} received error:`,G);const ae=G.status;let re=function(I){const A=Be[I];if(A!==void 0)return Sm(A)}(ae),R=G.message;re===void 0&&(re=V.INTERNAL,R="Unknown error status: "+ae+" with message "+G.message),C=!0,N.po(new W(re,R)),y.close()}else K(mt,`RPC '${e}' stream ${i} received:`,U),N.yo(U)}}),x(l,Zp.STAT_EVENT,D=>{D.stat===nu.PROXY?K(mt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===nu.NOPROXY&&K(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(n){return new ib(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Um(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Gn(t.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kb extends Bm{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=ab(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?bn(o.readTime):ee.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=fu(this.serializer),t.addTarget=function(s,o){let l;const u=o.target;if(l=au(u)?{documents:ub(s,u)}:{query:hb(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=km(s,o.resumeToken);const h=uu(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=ul(s,o.snapshotVersion.toTimestamp());const h=uu(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=fb(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=fu(this.serializer),t.removeTarget=e,this.i_(t)}}class Qb extends Bm{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=cb(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.A_(r,t)}return Re(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=fu(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>lb(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,hu(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,hu(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Xb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Gn(t),this.y_=!1):K("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{di(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.M_.add(4),await Lo(h),h.N_.set("Unknown"),h.M_.delete(4),await Hl(h)}(this))})}),this.N_=new Xb(r,i)}}async function Hl(n){if(di(n))for(const e of n.x_)await e(!0)}async function Lo(n){for(const e of n.x_)await e(!1)}function jm(n,e){const t=ne(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),ah(t)?oh(t):_s(t).Xo()&&sh(t,e))}function ih(n,e){const t=ne(n),r=_s(t);t.F_.delete(e),r.Xo()&&qm(t,e),t.F_.size===0&&(r.Xo()?r.n_():di(t)&&t.N_.set("Unknown"))}function sh(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_s(n).P_(e)}function qm(n,e){n.L_.xe(e),_s(n).I_(e)}function oh(n){n.L_=new eb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),_s(n).start(),n.N_.w_()}function ah(n){return di(n)&&!_s(n).Zo()&&n.F_.size>0}function di(n){return ne(n).M_.size===0}function $m(n){n.L_=void 0}async function Zb(n){n.N_.set("Online")}async function e0(n){n.F_.forEach((e,t)=>{sh(n,e)})}async function t0(n,e){$m(n),ah(n)?(n.N_.D_(e),oh(n)):n.N_.set("Unknown")}async function n0(n,e,t){if(n.N_.set("Online"),e instanceof Pm&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(n,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hl(n,r)}else if(e instanceof Ga?n.L_.Ke(e):e instanceof Rm?n.L_.He(e):n.L_.We(e),!t.isEqual(ee.min()))try{const r=await Fm(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.F_.get(h);p&&s.F_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=s.F_.get(u);if(!p)return;s.F_.set(u,p.withResumeToken(It.EMPTY_BYTE_STRING,p.snapshotVersion)),qm(s,u);const y=new dr(p.target,u,h,p.sequenceNumber);sh(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await hl(n,r)}}async function hl(n,e,t){if(!No(e))throw e;n.M_.add(1),await Lo(n),n.N_.set("Offline"),t||(t=()=>Fm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Hl(n)})}function Hm(n,e){return e().catch(t=>hl(n,t,e))}async function zl(n){const e=ne(n),t=br(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;r0(e);)try{const i=await Bb(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,i0(e,i)}catch(i){await hl(e,i)}zm(e)&&Wm(e)}function r0(n){return di(n)&&n.v_.length<10}function i0(n,e){n.v_.push(e);const t=br(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function zm(n){return di(n)&&!br(n).Zo()&&n.v_.length>0}function Wm(n){br(n).start()}async function s0(n){br(n).V_()}async function o0(n){const e=br(n);for(const t of n.v_)e.d_(t.mutations)}async function a0(n,e,t){const r=n.v_.shift(),i=Ju.from(r,e,t);await Hm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await zl(n)}async function l0(n,e){e&&br(n).E_&&await async function(r,i){if(function(o){return XT(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();br(r).t_(),await Hm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zl(r)}}(n,e),zm(n)&&Wm(n)}async function cf(n,e){const t=ne(n);t.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=di(t);t.M_.add(3),await Lo(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Hl(t)}async function c0(n,e){const t=ne(n);e?(t.M_.delete(2),await Hl(t)):e||(t.M_.add(2),await Lo(t),t.N_.set("Unknown"))}function _s(n){return n.B_||(n.B_=function(t,r,i){const s=ne(t);return s.f_(),new Kb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Zb.bind(null,n),To:e0.bind(null,n),Ao:t0.bind(null,n),h_:n0.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),ah(n)?oh(n):n.N_.set("Unknown")):(await n.B_.stop(),$m(n))})),n.B_}function br(n){return n.k_||(n.k_=function(t,r,i){const s=ne(t);return s.f_(),new Qb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:s0.bind(null,n),Ao:l0.bind(null,n),R_:o0.bind(null,n),A_:a0.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await zl(n)):(await n.k_.stop(),n.v_.length>0&&(K("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new lh(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(n,e){if(Gn("AsyncQueue",`${e}: ${n}`),No(n))return new W(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Js(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.q_=new He(Q.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):Z():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class is{constructor(e,t,r,i,s,o,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new is(e,t,zi.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class h0{constructor(){this.queries=new gs(e=>pm(e),Fl),this.onlineState="Unknown",this.z_=new Set}}async function Gm(n,e){const t=ne(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new u0,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=ch(o,`Initialization of query '${Ui(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&uh(t)}async function Km(n,e){const t=ne(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function d0(n,e){const t=ne(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&uh(t)}function f0(n,e,t){const r=ne(n),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(t);r.queries.delete(e)}function uh(n){n.z_.forEach(e=>{e.next()})}var mu,hf;(hf=mu||(mu={})).J_="default",hf.Cache="cache";class Qm{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==mu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.key=e}}class Xm{constructor(e){this.key=e}}class p0{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ce(),this.mutatedKeys=ce(),this.Ia=mm(e),this.Ta=new zi(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new uf,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{const v=i.get(p),C=Ul(this.query,y)?y:null,N=!!v&&this.mutatedKeys.has(v.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;v&&C?v.data.isEqual(C.data)?N!==x&&(r.track({type:3,doc:C}),D=!0):this.Ra(v,C)||(r.track({type:2,doc:C}),D=!0,(u&&this.Ia(C,u)>0||h&&this.Ia(C,h)<0)&&(l=!0)):!v&&C?(r.track({type:0,doc:C}),D=!0):v&&!C&&(r.track({type:1,doc:v}),D=!0,(u||h)&&(l=!0)),D&&(C?(o=o.add(C),s=x?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((p,y)=>function(C,N){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return x(C)-x(N)}(p.type,y.type)||this.Ia(p.doc,y.doc)),this.Va(r),i=i!=null&&i;const l=t&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,h=u!==this.ha;return this.ha=u,o.length!==0||h?{snapshot:new is(this.query,e.Ta,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new uf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ce(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Xm(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Ym(r))}),t}pa(e){this.la=e.hs,this.Pa=ce();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return is.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class m0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class g0{constructor(e){this.key=e,this.wa=!1}}class _0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new gs(l=>pm(l),Fl),this.Da=new Map,this.Ca=new Set,this.va=new He(Q.comparator),this.Fa=new Map,this.Ma=new th,this.xa={},this.Oa=new Map,this.Na=rs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function y0(n,e,t=!0){const r=rg(n);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Jm(r,e,t,!0),i}async function w0(n,e){const t=rg(n);await Jm(t,e,!0,!1)}async function Jm(n,e,t,r){const i=await jb(n.localStore,Tn(e)),s=i.targetId,o=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await v0(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&jm(n.remoteStore,i),l}async function v0(n,e,t,r,i){n.Ba=(y,v,C)=>async function(x,D,j,U){let z=D.view.da(j);z.Xi&&(z=await of(x.localStore,D.query,!1).then(({documents:R})=>D.view.da(R,z)));const G=U&&U.targetChanges.get(D.targetId),ae=U&&U.targetMismatches.get(D.targetId)!=null,re=D.view.applyChanges(z,x.isPrimaryClient,G,ae);return ff(x,D.targetId,re.fa),re.snapshot}(n,y,v,C);const s=await of(n.localStore,e,!0),o=new p0(e,s.hs),l=o.da(s.documents),u=xo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(l,n.isPrimaryClient,u);ff(n,t,h.fa);const p=new m0(e,t,o);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function E0(n,e,t){const r=ne(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Fl(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ih(r.remoteStore,i.targetId),gu(r,i.targetId)}).catch(ko)):(gu(r,i.targetId),await pu(r.localStore,i.targetId,!0))}async function T0(n,e){const t=ne(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ih(t.remoteStore,r.targetId))}async function b0(n,e,t){const r=k0(n);try{const i=await function(o,l){const u=ne(o),h=Xe.now(),p=l.reduce((C,N)=>C.add(N.key),ce());let y,v;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Kn(),x=ce();return u.os.getEntries(C,p).next(D=>{N=D,N.forEach((j,U)=>{U.isValidDocument()||(x=x.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,N)).next(D=>{y=D;const j=[];for(const U of l){const z=WT(U,y.get(U.key).overlayedDocument);z!=null&&j.push(new Ar(U.key,z,om(z.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,j,l)}).next(D=>{v=D;const j=D.applyToLocalDocumentSet(y,x);return u.documentOverlayCache.saveOverlays(C,D.batchId,j)})}).then(()=>({batchId:v.batchId,changes:_m(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.xa[o.currentUser.toKey()];h||(h=new He(Ee)),h=h.insert(l,u),o.xa[o.currentUser.toKey()]=h}(r,i.batchId,t),await Mo(r,i.changes),await zl(r.remoteStore)}catch(i){const s=ch(i,"Failed to persist write");t.reject(s)}}async function Zm(n,e){const t=ne(n);try{const r=await Fb(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Fa.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Re(o.wa):i.removedDocuments.size>0&&(Re(o.wa),o.wa=!1))}),await Mo(t,r,e)}catch(r){await ko(r)}}function df(n,e,t){const r=ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((p,y)=>{for(const v of y.U_)v.j_(l)&&(h=!0)}),h&&uh(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I0(n,e,t){const r=ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new He(Q.comparator);o=o.insert(s,yt.newNoDocument(s,ee.min()));const l=ce().add(s),u=new ql(ee.min(),new Map,new He(Ee),o,l);await Zm(r,u),r.va=r.va.remove(s),r.Fa.delete(e),hh(r)}else await pu(r.localStore,e,!1).then(()=>gu(r,e,t)).catch(ko)}async function A0(n,e){const t=ne(n),r=e.batch.batchId;try{const i=await Vb(t.localStore,e);tg(t,r,null),eg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mo(t,i)}catch(i){await ko(i)}}async function C0(n,e,t){const r=ne(n);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(Re(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);tg(r,e,t),eg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mo(r,i)}catch(i){await ko(i)}}function eg(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function tg(n,e,t){const r=ne(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function gu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||ng(n,r)})}function ng(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(ih(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),hh(n))}function ff(n,e,t){for(const r of t)r instanceof Ym?(n.Ma.addReference(r.key,e),S0(n,r)):r instanceof Xm?(K("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||ng(n,r.key)):Z()}function S0(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(K("SyncEngine","New document in limbo: "+t),n.Ca.add(r),hh(n))}function hh(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new Q(Ne.fromString(e)),r=n.Na.next();n.Fa.set(r,new g0(t)),n.va=n.va.insert(t,r),jm(n.remoteStore,new dr(Tn(Yu(t.path)),r,"TargetPurposeLimboResolution",Hu.oe))}}async function Mo(n,e,t){const r=ne(n),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,t).then(h=>{var p;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(p=t?.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){i.push(h);const y=rh.Ki(u.targetId,h);s.push(y)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,h){const p=ne(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>F.forEach(h,v=>F.forEach(v.qi,C=>p.persistence.referenceDelegate.addReference(y,v.targetId,C)).next(()=>F.forEach(v.Qi,C=>p.persistence.referenceDelegate.removeReference(y,v.targetId,C)))))}catch(y){if(!No(y))throw y;K("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const v=y.targetId;if(!y.fromCache){const C=p.ns.get(v),N=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(N);p.ns=p.ns.insert(v,x)}}}(r.localStore,s))}async function R0(n,e){const t=ne(n);if(!t.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Vm(t.localStore,e);t.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mo(t,r.us)}}function P0(n,e){const t=ne(n),r=t.Fa.get(e);if(r&&r.wa)return ce().add(r.key);{let i=ce();const s=t.Da.get(e);if(!s)return i;for(const o of s){const l=t.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function rg(n){const e=ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=P0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I0.bind(null,e),e.Sa.h_=d0.bind(null,e.eventManager),e.Sa.ka=f0.bind(null,e.eventManager),e}function k0(n){const e=ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C0.bind(null,e),e}class pf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$l(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Mb(this.persistence,new xb,e.initialUser,this.serializer)}createPersistence(e){return new Nb(nh.Hr,this.serializer)}createSharedClientState(e){return new $b}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class N0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>df(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R0.bind(null,this.syncEngine),await c0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new h0}()}createDatastore(e){const t=$l(e.databaseInfo.databaseId),r=function(s){return new Gb(s)}(e.databaseInfo);return function(s,o,l,u){return new Yb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new Jb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>df(this.syncEngine,t,0),function(){return lf.D()?new lf:new Hb}())}createSyncEngine(e,t){return function(i,s,o,l,u,h,p){const y=new _0(i,s,o,l,u,h);return p&&(y.La=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=ne(r);K("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Lo(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{K("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(K("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ch(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(n,e){n.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function mf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await x0(n);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>cf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>cf(e.remoteStore,i)),n._onlineComponents=e}function O0(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function x0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!O0(t))throw t;Zi("Error using user provided cache. Falling back to memory cache: "+t),await Nc(n,new pf)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Nc(n,new pf);return n._offlineComponents}async function sg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await mf(n,n._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await mf(n,new N0))),n._onlineComponents}function L0(n){return sg(n).then(e=>e.syncEngine)}async function og(n){const e=await sg(n),t=e.eventManager;return t.onListen=y0.bind(null,e.syncEngine),t.onUnlisten=E0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=w0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=T0.bind(null,e.syncEngine),t}function M0(n,e,t={}){const r=new Hn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const p=new ig({next:v=>{o.enqueueAndForget(()=>Km(s,y));const C=v.docs.has(l);!C&&v.fromCache?h.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&v.fromCache&&u&&u.source==="server"?h.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),y=new Qm(Yu(l.path),p,{includeMetadataChanges:!0,ra:!0});return Gm(s,y)}(await og(n),n.asyncQueue,e,t,r)),r.promise}function V0(n,e,t={}){const r=new Hn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const p=new ig({next:v=>{o.enqueueAndForget(()=>Km(s,y)),v.fromCache&&u.source==="server"?h.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(v)},error:v=>h.reject(v)}),y=new Qm(l,p,{includeMetadataChanges:!0,ra:!0});return Gm(s,y)}(await og(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n,e,t){if(!t)throw new W(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function F0(n,e,t,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _f(n){if(!Q.isDocumentKey(n))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yf(n){if(Q.isDocumentKey(n))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z()}function Qn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wl(n);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ag((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nT;switch(r.type){case"firstParty":return new oT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=gf.get(t);r&&(K("ComponentProvider","Removing Datastore"),gf.delete(t),r.terminate())}(this),Promise.resolve()}}function U0(n,e,t,r={}){var i;const s=(n=Qn(n,Gl))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=gt.MOCK_USER;else{l=vv(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(h)}n._authCredentials=new rT(new nm(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class Dt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class _r extends ys{constructor(e,t,r){super(e,t,Yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new Q(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function jP(n,e,...t){if(n=Ot(n),lg("collection","path",e),n instanceof Gl){const r=Ne.fromString(e,...t);return yf(r),new _r(n,null,r)}{if(!(n instanceof Dt||n instanceof _r))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return yf(r),new _r(n.firestore,null,r)}}function B0(n,e,...t){if(n=Ot(n),arguments.length===1&&(e=rm.newId()),lg("doc","path",e),n instanceof Gl){const r=Ne.fromString(e,...t);return _f(r),new Dt(n,null,new Q(r))}{if(!(n instanceof Dt||n instanceof _r))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return _f(r),new Dt(n.firestore,n instanceof _r?n.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Um(this,"async_queue_retry"),this.hu=()=>{const t=kc();t&&K("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=kc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Hn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!No(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=lh.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class ws extends Gl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new j0}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||cg(this),this._firestoreClient.terminate()}}function q0(n,e){const t=typeof n=="object"?n:LE(),r=typeof n=="string"?n:"(default)",i=DE(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=yv("firestore");s&&U0(i,...s)}return i}function dh(n){return n._firestoreClient||cg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function cg(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,p){return new wT(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,ag(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new D0(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ss(It.fromBase64String(e))}catch(t){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ss(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=/^__.*__$/;class H0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oo(e,this.data,t,this.fieldTransforms)}}class ug{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class mh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return dl(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(hg(this.fu)&&$0.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class z0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$l(e)}Fu(e,t,r,i=!1){return new mh({fu:e,methodName:t,vu:r,path:ut.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gh(n){const e=n._freezeSettings(),t=$l(n._databaseId);return new z0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function W0(n,e,t,r,i,s={}){const o=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);_h("Data must be an object, but it was:",o,r);const l=dg(r,o);let u,h;if(s.merge)u=new Ft(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const y of s.mergeFields){const v=_u(e,y,t);if(!o.contains(v))throw new W(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);pg(p,v)||p.push(v)}u=new Ft(p),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new H0(new kt(l),u,h)}class Ql extends fh{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ql}}function G0(n,e,t,r){const i=n.Fu(1,e,t);_h("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();hi(r,(u,h)=>{const p=yh(e,u,t);h=Ot(h);const y=i.Su(p);if(h instanceof Ql)s.push(p);else{const v=Vo(h,y);v!=null&&(s.push(p),o.set(p,v))}});const l=new Ft(s);return new ug(o,l,i.fieldTransforms)}function K0(n,e,t,r,i,s){const o=n.Fu(1,e,t),l=[_u(e,r,t)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(_u(e,s[v])),u.push(s[v+1]);const h=[],p=kt.empty();for(let v=l.length-1;v>=0;--v)if(!pg(h,l[v])){const C=l[v];let N=u[v];N=Ot(N);const x=o.Su(C);if(N instanceof Ql)h.push(C);else{const D=Vo(N,x);D!=null&&(h.push(C),p.set(C,D))}}const y=new Ft(h);return new ug(p,y,o.fieldTransforms)}function Q0(n,e,t,r=!1){return Vo(t,n.Fu(r?4:3,e))}function Vo(n,e){if(fg(n=Ot(n)))return _h("Unsupported field value:",e,n),dg(n,e);if(n instanceof fh)return function(r,i){if(!hg(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Vo(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:ul(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ul(i.serializer,s)}}if(r instanceof ph)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ss)return{bytesValue:km(i.serializer,r._byteString)};if(r instanceof Dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:eh(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Wl(r)}`)}(n,e)}function dg(n,e){const t={};return im(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(n,(r,i)=>{const s=Vo(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function fg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Xe||n instanceof ph||n instanceof ss||n instanceof Dt||n instanceof fh)}function _h(n,e,t){if(!fg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Wl(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function _u(n,e,t){if((e=Ot(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return yh(n,e);throw dl("Field path arguments must be of type string or ",n,!1,void 0,t)}const Y0=new RegExp("[~\\*/\\[\\]]");function yh(n,e,t){if(e.search(Y0)>=0)throw dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kl(...e.split("."))._internalPath}catch{throw dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dl(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+n+u)}function pg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class X0 extends mg{data(){return super.data()}}function wh(n,e){return typeof e=="string"?yh(n,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vh{}class Z0 extends vh{}function qP(n,e,...t){let r=[];e instanceof vh&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Eh).length,l=s.filter(u=>u instanceof Yl).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Yl extends Z0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yl(e,t,r)}_apply(e){const t=this._parse(e);return gg(e._query,t),new ys(e.firestore,e.converter,lu(e._query,t))}_parse(e){const t=gh(e.firestore);return function(s,o,l,u,h,p,y){let v;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ef(y,p);const C=[];for(const N of y)C.push(vf(u,s,N));v={arrayValue:{values:C}}}else v=vf(u,s,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ef(y,p),v=Q0(l,o,y,p==="in"||p==="not-in");return $e.create(h,p,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function $P(n,e,t){const r=e,i=wh("where",n);return Yl._create(i,r,t)}class Eh extends vh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Eh(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)gg(o,u),o=lu(o,u)}(e._query,t),new ys(e.firestore,e.converter,lu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vf(n,e,t){if(typeof(t=Ot(t))=="string"){if(t==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fm(e)&&t.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ne.fromString(t));if(!Q.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qd(n,new Q(r))}if(t instanceof Dt)return qd(n,t._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wl(t)}.`)}function Ef(n,e){if(!Array.isArray(n)||n.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gg(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class eI{convertValue(e,t="none"){switch(oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new ph(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Wu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const t=Tr(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);Re(Mm(r));const i=new To(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(t)||Gn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _g extends mg{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ka extends _g{data(e={}){return super.data(e)}}class nI{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new eo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ka(this._firestore,this._userDataWriter,r.key,r,new eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new eo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new eo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:rI(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(n){n=Qn(n,Dt);const e=Qn(n.firestore,ws);return M0(dh(e),n._key).then(t=>iI(e,n,t))}class yg extends eI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ss(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function zP(n){n=Qn(n,ys);const e=Qn(n.firestore,ws),t=dh(e),r=new yg(e);return J0(n._query),V0(t,n._query).then(i=>new nI(e,r,n,i))}function WP(n,e,t,...r){n=Qn(n,Dt);const i=Qn(n.firestore,ws),s=gh(i);let o;return o=typeof(e=Ot(e))=="string"||e instanceof Kl?K0(s,"updateDoc",n._key,e,t,r):G0(s,"updateDoc",n._key,e),Th(i,[o.toMutation(n._key,on.exists(!0))])}function GP(n){return Th(Qn(n.firestore,ws),[new Xu(n._key,on.none())])}function KP(n,e){const t=Qn(n.firestore,ws),r=B0(n),i=tI(n.converter,e);return Th(t,[W0(gh(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function Th(n,e){return function(r,i){const s=new Hn;return r.asyncQueue.enqueueAndForget(async()=>b0(await L0(r),i,s)),s.promise}(dh(n),e)}function iI(n,e,t){const r=t.docs.get(e._key),i=new yg(n);return new _g(n,i,e._key,r,new eo(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){ms=i})(ps),vr(new Wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ws(new iT(r.getProvider("auth-internal")),new lT(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new To(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Qt(Fd,"4.6.4",e),Qt(Fd,"4.6.4","esm2017")})();const QP=q0(Kp);var Wr=(n=>(n.ERROR="error",n.WARN="warning",n.SUCCESS="success",n.OTHER="other",n))(Wr||{}),Bn=(n=>(n.DARK="dark",n.LIGHT="light",n))(Bn||{}),Hr=(n=>(n.USER="user",n.ROLE="role",n.STATUS="status",n))(Hr||{}),cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var wg={exports:{}};/*!
* sweetalert2 v11.12.2
* Released under the MIT License.
*/(function(n,e){(function(t,r){n.exports=r()})(cr,function(){function t(_,c){(c==null||c>_.length)&&(c=_.length);for(var d=0,g=Array(c);d<c;d++)g[d]=_[d];return g}function r(_){if(Array.isArray(_))return _}function i(_){if(Array.isArray(_))return t(_)}function s(_,c,d){if(typeof _=="function"?_===c:_.has(c))return arguments.length<3?c:d;throw new TypeError("Private element is not present on this object")}function o(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function l(_,c,d){return c=U(c),I(_,G()?Reflect.construct(c,d||[],U(_).constructor):c.apply(_,d))}function u(_,c){if(c.has(_))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(_,c){if(!(_ instanceof c))throw new TypeError("Cannot call a class as a function")}function p(_,c){return _.get(s(_,c))}function y(_,c,d){u(_,c),c.set(_,d)}function v(_,c,d){return _.set(s(_,c),d),d}function C(_,c,d){if(G())return Reflect.construct.apply(null,arguments);var g=[null];g.push.apply(g,c);var T=new(_.bind.apply(_,g));return T}function N(_,c){for(var d=0;d<c.length;d++){var g=c[d];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(_,ze(g.key),g)}}function x(_,c,d){return c&&N(_.prototype,c),Object.defineProperty(_,"prototype",{writable:!1}),_}function D(_,c){var d=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(!d){if(Array.isArray(_)||(d=xt(_))||c){d&&(_=d);var g=0,T=function(){};return{s:T,n:function(){return g>=_.length?{done:!0}:{done:!1,value:_[g++]}},e:function(te){throw te},f:T}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var M,$=!0,ie=!1;return{s:function(){d=d.call(_)},n:function(){var te=d.next();return $=te.done,te},e:function(te){ie=!0,M=te},f:function(){try{$||d.return==null||d.return()}finally{if(ie)throw M}}}}function j(){return j=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(_,c,d){var g=P(_,c);if(g){var T=Object.getOwnPropertyDescriptor(g,c);return T.get?T.get.call(arguments.length<3?_:d):T.value}},j.apply(null,arguments)}function U(_){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},U(_)}function z(_,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(c&&c.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),c&&A(_,c)}function G(){try{var _=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G=function(){return!!_})()}function ae(_){if(typeof Symbol<"u"&&_[Symbol.iterator]!=null||_["@@iterator"]!=null)return Array.from(_)}function re(_,c){var d=_==null?null:typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(d!=null){var g,T,M,$,ie=[],te=!0,xe=!1;try{if(M=(d=d.call(_)).next,c!==0)for(;!(te=(g=M.call(d)).done)&&(ie.push(g.value),ie.length!==c);te=!0);}catch(Hs){xe=!0,T=Hs}finally{try{if(!te&&d.return!=null&&($=d.return(),Object($)!==$))return}finally{if(xe)throw T}}return ie}}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(_,c){if(c&&(typeof c=="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(_)}function A(_,c){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,g){return d.__proto__=g,d},A(_,c)}function S(_,c){return r(_)||re(_,c)||xt(_,c)||R()}function P(_,c){for(;!{}.hasOwnProperty.call(_,c)&&(_=U(_))!==null;);return _}function E(_){return i(_)||ae(_)||xt(_)||b()}function ue(_,c){if(typeof _!="object"||!_)return _;var d=_[Symbol.toPrimitive];if(d!==void 0){var g=d.call(_,c);if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(_)}function ze(_){var c=ue(_,"string");return typeof c=="symbol"?c:c+""}function Oe(_){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Oe(_)}function xt(_,c){if(_){if(typeof _=="string")return t(_,c);var d={}.toString.call(_).slice(8,-1);return d==="Object"&&_.constructor&&(d=_.constructor.name),d==="Map"||d==="Set"?Array.from(_):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?t(_,c):void 0}}var St=100,J={},jt=function(){J.previousActiveElement instanceof HTMLElement?(J.previousActiveElement.focus(),J.previousActiveElement=null):document.body&&document.body.focus()},mi=function(c){return new Promise(function(d){if(!c)return d();var g=window.scrollX,T=window.scrollY;J.restoreFocusTimeout=setTimeout(function(){jt(),d()},St),window.scrollTo(g,T)})},Xt="swal2-",Je=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],L=Je.reduce(function(_,c){return _[c]=Xt+c,_},{}),Cr=["success","warning","info","question","error"],gi=Cr.reduce(function(_,c){return _[c]=Xt+c,_},{}),Sr="SweetAlert2:",bs=function(c){return c.charAt(0).toUpperCase()+c.slice(1)},dt=function(c){console.warn("".concat(Sr," ").concat(Oe(c)==="object"?c.join(" "):c))},qt=function(c){console.error("".concat(Sr," ").concat(c))},Rr=[],Is=function(c){Rr.includes(c)||(Rr.push(c),dt(c))},_i=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Is('"'.concat(c,'" is deprecated and will be removed in the next major release.').concat(d?' Use "'.concat(d,'" instead.'):""))},Zn=function(c){return typeof c=="function"?c():c},Pr=function(c){return c&&typeof c.toPromise=="function"},er=function(c){return Pr(c)?c.toPromise():Promise.resolve(c)},As=function(c){return c&&Promise.resolve(c)===c},ft=function(){return document.body.querySelector(".".concat(L.container))},tr=function(c){var d=ft();return d?d.querySelector(c):null},st=function(c){return tr(".".concat(c))},ge=function(){return st(L.popup)},kr=function(){return st(L.icon)},Cs=function(){return st(L["icon-content"])},yi=function(){return st(L.title)},wi=function(){return st(L["html-container"])},We=function(){return st(L.image)},Ge=function(){return st(L["progress-steps"])},Pn=function(){return st(L["validation-message"])},Lt=function(){return tr(".".concat(L.actions," .").concat(L.confirm))},kn=function(){return tr(".".concat(L.actions," .").concat(L.cancel))},Nn=function(){return tr(".".concat(L.actions," .").concat(L.deny))},Nr=function(){return st(L["input-label"])},Dn=function(){return tr(".".concat(L.loader))},nr=function(){return st(L.actions)},vi=function(){return st(L.footer)},Ei=function(){return st(L["timer-progress-bar"])},Ss=function(){return st(L.close)},Rs=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ti=function(){var c=ge();if(!c)return[];var d=c.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),g=Array.from(d).sort(function($,ie){var te=parseInt($.getAttribute("tabindex")||"0"),xe=parseInt(ie.getAttribute("tabindex")||"0");return te>xe?1:te<xe?-1:0}),T=c.querySelectorAll(Rs),M=Array.from(T).filter(function($){return $.getAttribute("tabindex")!=="-1"});return E(new Set(g.concat(M))).filter(function($){return Ke($)})},bi=function(){return at(document.body,L.shown)&&!at(document.body,L["toast-shown"])&&!at(document.body,L["no-backdrop"])},mn=function(){var c=ge();return c?at(c,L.toast):!1},Ps=function(){var c=ge();return c?c.hasAttribute("data-loading"):!1},ot=function(c,d){if(c.textContent="",d){var g=new DOMParser,T=g.parseFromString(d,"text/html"),M=T.querySelector("head");M&&Array.from(M.childNodes).forEach(function(ie){c.appendChild(ie)});var $=T.querySelector("body");$&&Array.from($.childNodes).forEach(function(ie){ie instanceof HTMLVideoElement||ie instanceof HTMLAudioElement?c.appendChild(ie.cloneNode(!0)):c.appendChild(ie)})}},at=function(c,d){if(!d)return!1;for(var g=d.split(/\s+/),T=0;T<g.length;T++)if(!c.classList.contains(g[T]))return!1;return!0},Wo=function(c,d){Array.from(c.classList).forEach(function(g){!Object.values(L).includes(g)&&!Object.values(gi).includes(g)&&!Object.values(d.showClass||{}).includes(g)&&c.classList.remove(g)})},lt=function(c,d,g){if(Wo(c,d),!!d.customClass){var T=d.customClass[g];if(T){if(typeof T!="string"&&!T.forEach){dt("Invalid type of customClass.".concat(g,'! Expected string or iterable object, got "').concat(Oe(T),'"'));return}X(c,T)}}},Dr=function(c,d){if(!d)return null;switch(d){case"select":case"textarea":case"file":return c.querySelector(".".concat(L.popup," > .").concat(L[d]));case"checkbox":return c.querySelector(".".concat(L.popup," > .").concat(L.checkbox," input"));case"radio":return c.querySelector(".".concat(L.popup," > .").concat(L.radio," input:checked"))||c.querySelector(".".concat(L.popup," > .").concat(L.radio," input:first-child"));case"range":return c.querySelector(".".concat(L.popup," > .").concat(L.range," input"));default:return c.querySelector(".".concat(L.popup," > .").concat(L.input))}},rr=function(c){if(c.focus(),c.type!=="file"){var d=c.value;c.value="",c.value=d}},ks=function(c,d,g){!c||!d||(typeof d=="string"&&(d=d.split(/\s+/).filter(Boolean)),d.forEach(function(T){Array.isArray(c)?c.forEach(function(M){g?M.classList.add(T):M.classList.remove(T)}):g?c.classList.add(T):c.classList.remove(T)}))},X=function(c,d){ks(c,d,!0)},Mt=function(c,d){ks(c,d,!1)},Rt=function(c,d){for(var g=Array.from(c.children),T=0;T<g.length;T++){var M=g[T];if(M instanceof HTMLElement&&at(M,d))return M}},Vt=function(c,d,g){g==="".concat(parseInt(g))&&(g=parseInt(g)),g||parseInt(g)===0?c.style.setProperty(d,typeof g=="number"?"".concat(g,"px"):g):c.style.removeProperty(d)},Ue=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";c&&(c.style.display=d)},Ze=function(c){c&&(c.style.display="none")},gn=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";c&&new MutationObserver(function(){Or(c,c.innerHTML,d)}).observe(c,{childList:!0,subtree:!0})},Go=function(c,d,g,T){var M=c.querySelector(d);M&&M.style.setProperty(g,T)},Or=function(c,d){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";d?Ue(c,g):Ze(c)},Ke=function(c){return!!(c&&(c.offsetWidth||c.offsetHeight||c.getClientRects().length))},Ko=function(){return!Ke(Lt())&&!Ke(Nn())&&!Ke(kn())},Ii=function(c){return c.scrollHeight>c.clientHeight},xr=function(c){var d=window.getComputedStyle(c),g=parseFloat(d.getPropertyValue("animation-duration")||"0"),T=parseFloat(d.getPropertyValue("transition-duration")||"0");return g>0||T>0},$t=function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Ei();g&&Ke(g)&&(d&&(g.style.transition="none",g.style.width="100%"),setTimeout(function(){g.style.transition="width ".concat(c/1e3,"s linear"),g.style.width="0%"},10))},Qo=function(){var c=Ei();if(c){var d=parseInt(window.getComputedStyle(c).width);c.style.removeProperty("transition"),c.style.width="100%";var g=parseInt(window.getComputedStyle(c).width),T=d/g*100;c.style.width="".concat(T,"%")}},Ns=function(){return typeof window>"u"||typeof document>"u"},Ds=`
 <div aria-labelledby="`.concat(L.title,'" aria-describedby="').concat(L["html-container"],'" class="').concat(L.popup,`" tabindex="-1">
   <button type="button" class="`).concat(L.close,`"></button>
   <ul class="`).concat(L["progress-steps"],`"></ul>
   <div class="`).concat(L.icon,`"></div>
   <img class="`).concat(L.image,`" />
   <h2 class="`).concat(L.title,'" id="').concat(L.title,`"></h2>
   <div class="`).concat(L["html-container"],'" id="').concat(L["html-container"],`"></div>
   <input class="`).concat(L.input,'" id="').concat(L.input,`" />
   <input type="file" class="`).concat(L.file,`" />
   <div class="`).concat(L.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(L.select,'" id="').concat(L.select,`"></select>
   <div class="`).concat(L.radio,`"></div>
   <label class="`).concat(L.checkbox,`">
     <input type="checkbox" id="`).concat(L.checkbox,`" />
     <span class="`).concat(L.label,`"></span>
   </label>
   <textarea class="`).concat(L.textarea,'" id="').concat(L.textarea,`"></textarea>
   <div class="`).concat(L["validation-message"],'" id="').concat(L["validation-message"],`"></div>
   <div class="`).concat(L.actions,`">
     <div class="`).concat(L.loader,`"></div>
     <button type="button" class="`).concat(L.confirm,`"></button>
     <button type="button" class="`).concat(L.deny,`"></button>
     <button type="button" class="`).concat(L.cancel,`"></button>
   </div>
   <div class="`).concat(L.footer,`"></div>
   <div class="`).concat(L["timer-progress-bar-container"],`">
     <div class="`).concat(L["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Os=function(){var c=ft();return c?(c.remove(),Mt([document.documentElement,document.body],[L["no-backdrop"],L["toast-shown"],L["has-column"]]),!0):!1},_n=function(){J.currentInstance.resetValidationMessage()},Yo=function(){var c=ge(),d=Rt(c,L.input),g=Rt(c,L.file),T=c.querySelector(".".concat(L.range," input")),M=c.querySelector(".".concat(L.range," output")),$=Rt(c,L.select),ie=c.querySelector(".".concat(L.checkbox," input")),te=Rt(c,L.textarea);d.oninput=_n,g.onchange=_n,$.onchange=_n,ie.onchange=_n,te.oninput=_n,T.oninput=function(){_n(),M.value=T.value},T.onchange=function(){_n(),M.value=T.value}},rc=function(c){return typeof c=="string"?document.querySelector(c):c},Ai=function(c){var d=ge();d.setAttribute("role",c.toast?"alert":"dialog"),d.setAttribute("aria-live",c.toast?"polite":"assertive"),c.toast||d.setAttribute("aria-modal","true")},Xo=function(c){window.getComputedStyle(c).direction==="rtl"&&X(ft(),L.rtl)},xs=function(c){var d=Os();if(Ns()){qt("SweetAlert2 requires document to initialize");return}var g=document.createElement("div");g.className=L.container,d&&X(g,L["no-transition"]),ot(g,Ds);var T=rc(c.target);T.appendChild(g),Ai(c),Xo(T),Yo()},On=function(c,d){c instanceof HTMLElement?d.appendChild(c):Oe(c)==="object"?xn(c,d):c&&ot(d,c)},xn=function(c,d){c.jquery?Ls(d,c):ot(d,c.toString())},Ls=function(c,d){if(c.textContent="",0 in d)for(var g=0;g in d;g++)c.appendChild(d[g].cloneNode(!0));else c.appendChild(d.cloneNode(!0))},Ln=function(){if(Ns())return!1;var _=document.createElement("div");return typeof _.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof _.style.animation<"u"?"animationend":!1}(),Jo=function(c,d){var g=nr(),T=Dn();!g||!T||(!d.showConfirmButton&&!d.showDenyButton&&!d.showCancelButton?Ze(g):Ue(g),lt(g,d,"actions"),Zo(g,T,d),ot(T,d.loaderHtml||""),lt(T,d,"loader"))};function Zo(_,c,d){var g=Lt(),T=Nn(),M=kn();!g||!T||!M||(Lr(g,"confirm",d),Lr(T,"deny",d),Lr(M,"cancel",d),ea(g,T,M,d),d.reverseButtons&&(d.toast?(_.insertBefore(M,g),_.insertBefore(T,g)):(_.insertBefore(M,c),_.insertBefore(T,c),_.insertBefore(g,c))))}function ea(_,c,d,g){if(!g.buttonsStyling){Mt([_,c,d],L.styled);return}X([_,c,d],L.styled),g.confirmButtonColor&&(_.style.backgroundColor=g.confirmButtonColor,X(_,L["default-outline"])),g.denyButtonColor&&(c.style.backgroundColor=g.denyButtonColor,X(c,L["default-outline"])),g.cancelButtonColor&&(d.style.backgroundColor=g.cancelButtonColor,X(d,L["default-outline"]))}function Lr(_,c,d){var g=bs(c);Or(_,d["show".concat(g,"Button")],"inline-block"),ot(_,d["".concat(c,"ButtonText")]||""),_.setAttribute("aria-label",d["".concat(c,"ButtonAriaLabel")]||""),_.className=L[c],lt(_,d,"".concat(c,"Button"))}var Ms=function(c,d){var g=Ss();g&&(ot(g,d.closeButtonHtml||""),lt(g,d,"closeButton"),Or(g,d.showCloseButton),g.setAttribute("aria-label",d.closeButtonAriaLabel||""))},ta=function(c,d){var g=ft();g&&(na(g,d.backdrop),ic(g,d.position),sc(g,d.grow),lt(g,d,"container"))};function na(_,c){typeof c=="string"?_.style.background=c:c||X([document.documentElement,document.body],L["no-backdrop"])}function ic(_,c){c&&(c in L?X(_,L[c]):(dt('The "position" parameter is not valid, defaulting to "center"'),X(_,L.center)))}function sc(_,c){c&&X(_,L["grow-".concat(c)])}var Ie={innerParams:new WeakMap,domCache:new WeakMap},ra=["input","file","range","select","radio","checkbox","textarea"],oc=function(c,d){var g=ge();if(g){var T=Ie.innerParams.get(c),M=!T||d.input!==T.input;ra.forEach(function($){var ie=Rt(g,L[$]);ie&&(Ci($,d.inputAttributes),ie.className=L[$],M&&Ze(ie))}),d.input&&(M&&Mn(d),Si(d))}},Mn=function(c){if(c.input){if(!Ce[c.input]){qt("Unexpected type of input! Expected ".concat(Object.keys(Ce).join(" | "),', got "').concat(c.input,'"'));return}var d=Mr(c.input),g=Ce[c.input](d,c);Ue(d),c.inputAutoFocus&&setTimeout(function(){rr(g)})}},Jt=function(c){for(var d=0;d<c.attributes.length;d++){var g=c.attributes[d].name;["id","type","value","style"].includes(g)||c.removeAttribute(g)}},Ci=function(c,d){var g=Dr(ge(),c);if(g){Jt(g);for(var T in d)g.setAttribute(T,d[T])}},Si=function(c){var d=Mr(c.input);Oe(c.customClass)==="object"&&X(d,c.customClass.input)},Ri=function(c,d){(!c.placeholder||d.inputPlaceholder)&&(c.placeholder=d.inputPlaceholder)},we=function(c,d,g){if(g.inputLabel){var T=document.createElement("label"),M=L["input-label"];T.setAttribute("for",c.id),T.className=M,Oe(g.customClass)==="object"&&X(T,g.customClass.inputLabel),T.innerText=g.inputLabel,d.insertAdjacentElement("beforebegin",T)}},Mr=function(c){return Rt(ge(),L[c]||L.input)},yn=function(c,d){["string","number"].includes(Oe(d))?c.value="".concat(d):As(d)||dt('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(Oe(d),'"'))},Ce={};Ce.text=Ce.email=Ce.password=Ce.number=Ce.tel=Ce.url=Ce.search=Ce.date=Ce["datetime-local"]=Ce.time=Ce.week=Ce.month=function(_,c){return yn(_,c.inputValue),we(_,_,c),Ri(_,c),_.type=c.input,_},Ce.file=function(_,c){return we(_,_,c),Ri(_,c),_},Ce.range=function(_,c){var d=_.querySelector("input"),g=_.querySelector("output");return yn(d,c.inputValue),d.type=c.input,yn(g,c.inputValue),we(d,_,c),_},Ce.select=function(_,c){if(_.textContent="",c.inputPlaceholder){var d=document.createElement("option");ot(d,c.inputPlaceholder),d.value="",d.disabled=!0,d.selected=!0,_.appendChild(d)}return we(_,_,c),_},Ce.radio=function(_){return _.textContent="",_},Ce.checkbox=function(_,c){var d=Dr(ge(),"checkbox");d.value="1",d.checked=!!c.inputValue;var g=_.querySelector("span");return ot(g,c.inputPlaceholder),d},Ce.textarea=function(_,c){yn(_,c.inputValue),Ri(_,c),we(_,_,c);var d=function(T){return parseInt(window.getComputedStyle(T).marginLeft)+parseInt(window.getComputedStyle(T).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var g=parseInt(window.getComputedStyle(ge()).width),T=function(){if(document.body.contains(_)){var $=_.offsetWidth+d(_);$>g?ge().style.width="".concat($,"px"):Vt(ge(),"width",c.width)}};new MutationObserver(T).observe(_,{attributes:!0,attributeFilter:["style"]})}}),_};var ac=function(c,d){var g=wi();g&&(gn(g),lt(g,d,"htmlContainer"),d.html?(On(d.html,g),Ue(g,"block")):d.text?(g.textContent=d.text,Ue(g,"block")):Ze(g),oc(c,d))},ia=function(c,d){var g=vi();g&&(gn(g),Or(g,d.footer,"block"),d.footer&&On(d.footer,g),lt(g,d,"footer"))},lc=function(c,d){var g=Ie.innerParams.get(c),T=kr();if(T){if(g&&d.icon===g.icon){Zt(T,d),sa(T,d);return}if(!d.icon&&!d.iconHtml){Ze(T);return}if(d.icon&&Object.keys(gi).indexOf(d.icon)===-1){qt('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon,'"')),Ze(T);return}Ue(T),Zt(T,d),sa(T,d),X(T,d.showClass&&d.showClass.icon)}},sa=function(c,d){for(var g=0,T=Object.entries(gi);g<T.length;g++){var M=S(T[g],2),$=M[0],ie=M[1];d.icon!==$&&Mt(c,ie)}X(c,d.icon&&gi[d.icon]),oa(c,d),cc(),lt(c,d,"icon")},cc=function(){var c=ge();if(c)for(var d=window.getComputedStyle(c).getPropertyValue("background-color"),g=c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),T=0;T<g.length;T++)g[T].style.backgroundColor=d},uc=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Vr=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Zt=function(c,d){if(!(!d.icon&&!d.iconHtml)){var g=c.innerHTML,T="";if(d.iconHtml)T=Vs(d.iconHtml);else if(d.icon==="success")T=uc,g=g.replace(/ style=".*?"/g,"");else if(d.icon==="error")T=Vr;else if(d.icon){var M={question:"?",warning:"!",info:"i"};T=Vs(M[d.icon])}g.trim()!==T.trim()&&ot(c,T)}},oa=function(c,d){if(d.iconColor){c.style.color=d.iconColor,c.style.borderColor=d.iconColor;for(var g=0,T=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];g<T.length;g++){var M=T[g];Go(c,M,"background-color",d.iconColor)}Go(c,".swal2-success-ring","border-color",d.iconColor)}},Vs=function(c){return'<div class="'.concat(L["icon-content"],'">').concat(c,"</div>")},aa=function(c,d){var g=We();if(g){if(!d.imageUrl){Ze(g);return}Ue(g,""),g.setAttribute("src",d.imageUrl),g.setAttribute("alt",d.imageAlt||""),Vt(g,"width",d.imageWidth),Vt(g,"height",d.imageHeight),g.className=L.image,lt(g,d,"image")}},ir=function(c,d){var g=ft(),T=ge();if(!(!g||!T)){if(d.toast){Vt(g,"width",d.width),T.style.width="100%";var M=Dn();M&&T.insertBefore(M,kr())}else Vt(T,"width",d.width);Vt(T,"padding",d.padding),d.color&&(T.style.color=d.color),d.background&&(T.style.background=d.background),Ze(Pn()),hc(T,d)}},hc=function(c,d){var g=d.showClass||{};c.className="".concat(L.popup," ").concat(Ke(c)?g.popup:""),d.toast?(X([document.documentElement,document.body],L["toast-shown"]),X(c,L.toast)):X(c,L.modal),lt(c,d,"popup"),typeof d.customClass=="string"&&X(c,d.customClass),d.icon&&X(c,L["icon-".concat(d.icon)])},dc=function(c,d){var g=Ge();if(g){var T=d.progressSteps,M=d.currentProgressStep;if(!T||T.length===0||M===void 0){Ze(g);return}Ue(g),g.textContent="",M>=T.length&&dt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),T.forEach(function($,ie){var te=fc($);if(g.appendChild(te),ie===M&&X(te,L["active-progress-step"]),ie!==T.length-1){var xe=wn(d);g.appendChild(xe)}})}},fc=function(c){var d=document.createElement("li");return X(d,L["progress-step"]),ot(d,c),d},wn=function(c){var d=document.createElement("li");return X(d,L["progress-step-line"]),c.progressStepsDistance&&Vt(d,"width",c.progressStepsDistance),d},pc=function(c,d){var g=yi();g&&(gn(g),Or(g,d.title||d.titleText,"block"),d.title&&On(d.title,g),d.titleText&&(g.innerText=d.titleText),lt(g,d,"title"))},la=function(c,d){ir(c,d),ta(c,d),dc(c,d),lc(c,d),aa(c,d),pc(c,d),Ms(c,d),ac(c,d),Jo(c,d),ia(c,d);var g=ge();typeof d.didRender=="function"&&g&&d.didRender(g)},Fr=function(){return Ke(ge())},Ur=function(){var c;return(c=Lt())===null||c===void 0?void 0:c.click()},ca=function(){var c;return(c=Nn())===null||c===void 0?void 0:c.click()},Br=function(){var c;return(c=kn())===null||c===void 0?void 0:c.click()},Ht=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Fs=function(c){c.keydownTarget&&c.keydownHandlerAdded&&(c.keydownTarget.removeEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!1)},Us=function(c,d,g){Fs(c),d.toast||(c.keydownHandler=function(T){return ha(d,T,g)},c.keydownTarget=d.keydownListenerCapture?window:ge(),c.keydownListenerCapture=d.keydownListenerCapture,c.keydownTarget.addEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!0)},Se=function(c,d){var g,T=Ti();if(T.length){c=c+d,c===T.length?c=0:c===-1&&(c=T.length-1),T[c].focus();return}(g=ge())===null||g===void 0||g.focus()},ua=["ArrowRight","ArrowDown"],mc=["ArrowLeft","ArrowUp"],ha=function(c,d,g){c&&(d.isComposing||d.keyCode===229||(c.stopKeydownPropagation&&d.stopPropagation(),d.key==="Enter"?da(d,c):d.key==="Tab"?fa(d):[].concat(ua,mc).includes(d.key)?Pi(d.key):d.key==="Escape"&&pa(d,c,g)))},da=function(c,d){if(Zn(d.allowEnterKey)){var g=Dr(ge(),d.input);if(c.target&&g&&c.target instanceof HTMLElement&&c.target.outerHTML===g.outerHTML){if(["textarea","file"].includes(d.input))return;Ur(),c.preventDefault()}}},fa=function(c){for(var d=c.target,g=Ti(),T=-1,M=0;M<g.length;M++)if(d===g[M]){T=M;break}c.shiftKey?Se(T,-1):Se(T,1),c.stopPropagation(),c.preventDefault()},Pi=function(c){var d=nr(),g=Lt(),T=Nn(),M=kn();if(!(!d||!g||!T||!M)){var $=[g,T,M];if(!(document.activeElement instanceof HTMLElement&&!$.includes(document.activeElement))){var ie=ua.includes(c)?"nextElementSibling":"previousElementSibling",te=document.activeElement;if(te){for(var xe=0;xe<d.children.length;xe++){if(te=te[ie],!te)return;if(te instanceof HTMLButtonElement&&Ke(te))break}te instanceof HTMLButtonElement&&te.focus()}}}},pa=function(c,d,g){Zn(d.allowEscapeKey)&&(c.preventDefault(),g(Ht.esc))},pt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},ma=function(){var c=ft(),d=Array.from(document.body.children);d.forEach(function(g){g.contains(c)||(g.hasAttribute("aria-hidden")&&g.setAttribute("data-previous-aria-hidden",g.getAttribute("aria-hidden")||""),g.setAttribute("aria-hidden","true"))})},ga=function(){var c=Array.from(document.body.children);c.forEach(function(d){d.hasAttribute("data-previous-aria-hidden")?(d.setAttribute("aria-hidden",d.getAttribute("data-previous-aria-hidden")||""),d.removeAttribute("data-previous-aria-hidden")):d.removeAttribute("aria-hidden")})},sr=typeof window<"u"&&!!window.GestureEvent,_a=function(){if(sr&&!at(document.body,L.iosfix)){var c=document.body.scrollTop;document.body.style.top="".concat(c*-1,"px"),X(document.body,L.iosfix),Bs()}},Bs=function(){var c=ft();if(c){var d;c.ontouchstart=function(g){d=ki(g)},c.ontouchmove=function(g){d&&(g.preventDefault(),g.stopPropagation())}}},ki=function(c){var d=c.target,g=ft(),T=wi();return!g||!T||ya(c)||Ni(c)?!1:d===g||!Ii(g)&&d instanceof HTMLElement&&d.tagName!=="INPUT"&&d.tagName!=="TEXTAREA"&&!(Ii(T)&&T.contains(d))},ya=function(c){return c.touches&&c.touches.length&&c.touches[0].touchType==="stylus"},Ni=function(c){return c.touches&&c.touches.length>1},gc=function(){if(at(document.body,L.iosfix)){var c=parseInt(document.body.style.top,10);Mt(document.body,L.iosfix),document.body.style.top="",document.body.scrollTop=c*-1}},wa=function(){var c=document.createElement("div");c.className=L["scrollbar-measure"],document.body.appendChild(c);var d=c.getBoundingClientRect().width-c.clientWidth;return document.body.removeChild(c),d},zt=null,va=function(c){zt===null&&(document.body.scrollHeight>window.innerHeight||c==="scroll")&&(zt=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(zt+wa(),"px"))},Ea=function(){zt!==null&&(document.body.style.paddingRight="".concat(zt,"px"),zt=null)};function Di(_,c,d,g){mn()?$s(_,g):(mi(d).then(function(){return $s(_,g)}),Fs(J)),sr?(c.setAttribute("style","display:none !important"),c.removeAttribute("class"),c.innerHTML=""):c.remove(),bi()&&(Ea(),gc(),ga()),js()}function js(){Mt([document.documentElement,document.body],[L.shown,L["height-auto"],L["no-backdrop"],L["toast-shown"]])}function en(_){_=Vn(_);var c=pt.swalPromiseResolve.get(this),d=Oi(this);this.isAwaitingPromise?_.isDismissed||(or(this),c(_)):d&&c(_)}var Oi=function(c){var d=ge();if(!d)return!1;var g=Ie.innerParams.get(c);if(!g||at(d,g.hideClass.popup))return!1;Mt(d,g.showClass.popup),X(d,g.hideClass.popup);var T=ft();return Mt(T,g.showClass.backdrop),X(T,g.hideClass.backdrop),Ta(c,d,g),!0};function qs(_){var c=pt.swalPromiseReject.get(this);or(this),c&&c(_)}var or=function(c){c.isAwaitingPromise&&(delete c.isAwaitingPromise,Ie.innerParams.get(c)||c._destroy())},Vn=function(c){return typeof c>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},c)},Ta=function(c,d,g){var T=ft(),M=Ln&&xr(d);typeof g.willClose=="function"&&g.willClose(d),M?ba(c,d,T,g.returnFocus,g.didClose):Di(c,T,g.returnFocus,g.didClose)},ba=function(c,d,g,T,M){Ln&&(J.swalCloseEventFinishedCallback=Di.bind(null,c,g,T,M),d.addEventListener(Ln,function($){$.target===d&&(J.swalCloseEventFinishedCallback(),delete J.swalCloseEventFinishedCallback)}))},$s=function(c,d){setTimeout(function(){typeof d=="function"&&d.bind(c.params)(),c._destroy&&c._destroy()})},Fn=function(c){var d=ge();if(d||new Pa,d=ge(),!!d){var g=Dn();mn()?Ze(kr()):xi(d,c),Ue(g),d.setAttribute("data-loading","true"),d.setAttribute("aria-busy","true"),d.focus()}},xi=function(c,d){var g=nr(),T=Dn();!g||!T||(!d&&Ke(Lt())&&(d=Lt()),Ue(g),d&&(Ze(d),T.setAttribute("data-button-to-replace",d.className),g.insertBefore(T,d)),X([c,g],L.loading))},At=function(c,d){d.input==="select"||d.input==="radio"?f(c,d):["text","email","number","tel","textarea"].some(function(g){return g===d.input})&&(Pr(d.inputValue)||As(d.inputValue))&&(Fn(Lt()),m(c,d))},Ia=function(c,d){var g=c.getInput();if(!g)return null;switch(d.input){case"checkbox":return Aa(g);case"radio":return ar(g);case"file":return a(g);default:return d.inputAutoTrim?g.value.trim():g.value}},Aa=function(c){return c.checked?1:0},ar=function(c){return c.checked?c.value:null},a=function(c){return c.files&&c.files.length?c.getAttribute("multiple")!==null?c.files:c.files[0]:null},f=function(c,d){var g=ge();if(g){var T=function($){d.input==="select"?w(g,O($),d):d.input==="radio"&&k(g,O($),d)};Pr(d.inputOptions)||As(d.inputOptions)?(Fn(Lt()),er(d.inputOptions).then(function(M){c.hideLoading(),T(M)})):Oe(d.inputOptions)==="object"?T(d.inputOptions):qt("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(Oe(d.inputOptions)))}},m=function(c,d){var g=c.getInput();g&&(Ze(g),er(d.inputValue).then(function(T){g.value=d.input==="number"?"".concat(parseFloat(T)||0):"".concat(T),Ue(g),g.focus(),c.hideLoading()}).catch(function(T){qt("Error in inputValue promise: ".concat(T)),g.value="",Ue(g),g.focus(),c.hideLoading()}))};function w(_,c,d){var g=Rt(_,L.select);if(g){var T=function($,ie,te){var xe=document.createElement("option");xe.value=te,ot(xe,ie),xe.selected=B(te,d.inputValue),$.appendChild(xe)};c.forEach(function(M){var $=M[0],ie=M[1];if(Array.isArray(ie)){var te=document.createElement("optgroup");te.label=$,te.disabled=!1,g.appendChild(te),ie.forEach(function(xe){return T(te,xe[1],xe[0])})}else T(g,ie,$)}),g.focus()}}function k(_,c,d){var g=Rt(_,L.radio);if(g){c.forEach(function(M){var $=M[0],ie=M[1],te=document.createElement("input"),xe=document.createElement("label");te.type="radio",te.name=L.radio,te.value=$,B($,d.inputValue)&&(te.checked=!0);var Hs=document.createElement("span");ot(Hs,ie),Hs.className=L.label,xe.appendChild(te),xe.appendChild(Hs),g.appendChild(xe)});var T=g.querySelectorAll("input");T.length&&T[0].focus()}}var O=function _(c){var d=[];return c instanceof Map?c.forEach(function(g,T){var M=g;Oe(M)==="object"&&(M=_(M)),d.push([T,M])}):Object.keys(c).forEach(function(g){var T=c[g];Oe(T)==="object"&&(T=_(T)),d.push([g,T])}),d},B=function(c,d){return!!d&&d.toString()===c.toString()},_e=void 0,Qe=function(c){var d=Ie.innerParams.get(c);c.disableButtons(),d.input?Ye(c,"confirm"):_c(c,!0)},de=function(c){var d=Ie.innerParams.get(c);c.disableButtons(),d.returnInputValueOnDeny?Ye(c,"deny"):Ct(c,!1)},et=function(c,d){c.disableButtons(),d(Ht.cancel)},Ye=function(c,d){var g=Ie.innerParams.get(c);if(!g.input){qt('The "input" parameter is needed to be set when using returnInputValueOn'.concat(bs(d)));return}var T=c.getInput(),M=Ia(c,g);g.inputValidator?lr(c,M,d):T&&!T.checkValidity()?(c.enableButtons(),c.showValidationMessage(g.validationMessage||T.validationMessage)):d==="deny"?Ct(c,M):_c(c,M)},lr=function(c,d,g){var T=Ie.innerParams.get(c);c.disableInput();var M=Promise.resolve().then(function(){return er(T.inputValidator(d,T.validationMessage))});M.then(function($){c.enableButtons(),c.enableInput(),$?c.showValidationMessage($):g==="deny"?Ct(c,d):_c(c,d)})},Ct=function(c,d){var g=Ie.innerParams.get(c||_e);if(g.showLoaderOnDeny&&Fn(Nn()),g.preDeny){c.isAwaitingPromise=!0;var T=Promise.resolve().then(function(){return er(g.preDeny(d,g.validationMessage))});T.then(function(M){M===!1?(c.hideLoading(),or(c)):c.close({isDenied:!0,value:typeof M>"u"?d:M})}).catch(function(M){return Li(c||_e,M)})}else c.close({isDenied:!0,value:d})},jr=function(c,d){c.close({isConfirmed:!0,value:d})},Li=function(c,d){c.rejectPromise(d)},_c=function(c,d){var g=Ie.innerParams.get(c||_e);if(g.showLoaderOnConfirm&&Fn(),g.preConfirm){c.resetValidationMessage(),c.isAwaitingPromise=!0;var T=Promise.resolve().then(function(){return er(g.preConfirm(d,g.validationMessage))});T.then(function(M){Ke(Pn())||M===!1?(c.hideLoading(),or(c)):jr(c,typeof M>"u"?d:M)}).catch(function(M){return Li(c||_e,M)})}else jr(c,d)};function Ca(){var _=Ie.innerParams.get(this);if(_){var c=Ie.domCache.get(this);Ze(c.loader),mn()?_.icon&&Ue(kr()):my(c),Mt([c.popup,c.actions],L.loading),c.popup.removeAttribute("aria-busy"),c.popup.removeAttribute("data-loading"),c.confirmButton.disabled=!1,c.denyButton.disabled=!1,c.cancelButton.disabled=!1}}var my=function(c){var d=c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));d.length?Ue(d[0],"inline-block"):Ko()&&Ze(c.actions)};function Gh(){var _=Ie.innerParams.get(this),c=Ie.domCache.get(this);return c?Dr(c.popup,_.input):null}function Kh(_,c,d){var g=Ie.domCache.get(_);c.forEach(function(T){g[T].disabled=d})}function Qh(_,c){var d=ge();if(!(!d||!_))if(_.type==="radio")for(var g=d.querySelectorAll('[name="'.concat(L.radio,'"]')),T=0;T<g.length;T++)g[T].disabled=c;else _.disabled=c}function Yh(){Kh(this,["confirmButton","denyButton","cancelButton"],!1)}function Xh(){Kh(this,["confirmButton","denyButton","cancelButton"],!0)}function Jh(){Qh(this.getInput(),!1)}function Zh(){Qh(this.getInput(),!0)}function ed(_){var c=Ie.domCache.get(this),d=Ie.innerParams.get(this);ot(c.validationMessage,_),c.validationMessage.className=L["validation-message"],d.customClass&&d.customClass.validationMessage&&X(c.validationMessage,d.customClass.validationMessage),Ue(c.validationMessage);var g=this.getInput();g&&(g.setAttribute("aria-invalid","true"),g.setAttribute("aria-describedby",L["validation-message"]),rr(g),X(g,L.inputerror))}function td(){var _=Ie.domCache.get(this);_.validationMessage&&Ze(_.validationMessage);var c=this.getInput();c&&(c.removeAttribute("aria-invalid"),c.removeAttribute("aria-describedby"),Mt(c,L.inputerror))}var Mi={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},gy=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],_y={allowEnterKey:void 0},yy=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],nd=function(c){return Object.prototype.hasOwnProperty.call(Mi,c)},rd=function(c){return gy.indexOf(c)!==-1},id=function(c){return _y[c]},wy=function(c){nd(c)||dt('Unknown parameter "'.concat(c,'"'))},vy=function(c){yy.includes(c)&&dt('The parameter "'.concat(c,'" is incompatible with toasts'))},Ey=function(c){var d=id(c);d&&_i(c,d)},Ty=function(c){c.backdrop===!1&&c.allowOutsideClick&&dt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var d in c)wy(d),c.toast&&vy(d),Ey(d)};function sd(_){var c=ge(),d=Ie.innerParams.get(this);if(!c||at(c,d.hideClass.popup)){dt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var g=by(_),T=Object.assign({},d,g);la(this,T),Ie.innerParams.set(this,T),Object.defineProperties(this,{params:{value:Object.assign({},this.params,_),writable:!1,enumerable:!0}})}var by=function(c){var d={};return Object.keys(c).forEach(function(g){rd(g)?d[g]=c[g]:dt("Invalid parameter to update: ".concat(g))}),d};function od(){var _=Ie.domCache.get(this),c=Ie.innerParams.get(this);if(!c){ad(this);return}_.popup&&J.swalCloseEventFinishedCallback&&(J.swalCloseEventFinishedCallback(),delete J.swalCloseEventFinishedCallback),typeof c.didDestroy=="function"&&c.didDestroy(),Iy(this)}var Iy=function(c){ad(c),delete c.params,delete J.keydownHandler,delete J.keydownTarget,delete J.currentInstance},ad=function(c){c.isAwaitingPromise?(yc(Ie,c),c.isAwaitingPromise=!0):(yc(pt,c),yc(Ie,c),delete c.isAwaitingPromise,delete c.disableButtons,delete c.enableButtons,delete c.getInput,delete c.disableInput,delete c.enableInput,delete c.hideLoading,delete c.disableLoading,delete c.showValidationMessage,delete c.resetValidationMessage,delete c.close,delete c.closePopup,delete c.closeModal,delete c.closeToast,delete c.rejectPromise,delete c.update,delete c._destroy)},yc=function(c,d){for(var g in c)c[g].delete(d)},Ay=Object.freeze({__proto__:null,_destroy:od,close:en,closeModal:en,closePopup:en,closeToast:en,disableButtons:Xh,disableInput:Zh,disableLoading:Ca,enableButtons:Yh,enableInput:Jh,getInput:Gh,handleAwaitingPromise:or,hideLoading:Ca,rejectPromise:qs,resetValidationMessage:td,showValidationMessage:ed,update:sd}),Cy=function(c,d,g){c.toast?Sy(c,d,g):(Py(d),ky(d),Ny(c,d,g))},Sy=function(c,d,g){d.popup.onclick=function(){c&&(Ry(c)||c.timer||c.input)||g(Ht.close)}},Ry=function(c){return!!(c.showConfirmButton||c.showDenyButton||c.showCancelButton||c.showCloseButton)},Sa=!1,Py=function(c){c.popup.onmousedown=function(){c.container.onmouseup=function(d){c.container.onmouseup=function(){},d.target===c.container&&(Sa=!0)}}},ky=function(c){c.container.onmousedown=function(d){d.target===c.container&&d.preventDefault(),c.popup.onmouseup=function(g){c.popup.onmouseup=function(){},(g.target===c.popup||g.target instanceof HTMLElement&&c.popup.contains(g.target))&&(Sa=!0)}}},Ny=function(c,d,g){d.container.onclick=function(T){if(Sa){Sa=!1;return}T.target===d.container&&Zn(c.allowOutsideClick)&&g(Ht.backdrop)}},Dy=function(c){return Oe(c)==="object"&&c.jquery},ld=function(c){return c instanceof Element||Dy(c)},Oy=function(c){var d={};return Oe(c[0])==="object"&&!ld(c[0])?Object.assign(d,c[0]):["title","html","icon"].forEach(function(g,T){var M=c[T];typeof M=="string"||ld(M)?d[g]=M:M!==void 0&&qt("Unexpected type of ".concat(g,'! Expected "string" or "Element", got ').concat(Oe(M)))}),d};function xy(){for(var _=this,c=arguments.length,d=new Array(c),g=0;g<c;g++)d[g]=arguments[g];return C(_,d)}function Ly(_){var c=function(d){function g(){return h(this,g),l(this,g,arguments)}return z(g,d),x(g,[{key:"_main",value:function(M,$){return j(U(g.prototype),"_main",this).call(this,M,Object.assign({},_,$))}}])}(this);return c}var My=function(){return J.timeout&&J.timeout.getTimerLeft()},cd=function(){if(J.timeout)return Qo(),J.timeout.stop()},ud=function(){if(J.timeout){var c=J.timeout.start();return $t(c),c}},Vy=function(){var c=J.timeout;return c&&(c.running?cd():ud())},Fy=function(c){if(J.timeout){var d=J.timeout.increase(c);return $t(d,!0),d}},Uy=function(){return!!(J.timeout&&J.timeout.isRunning())},hd=!1,wc={};function By(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";wc[_]=this,hd||(document.body.addEventListener("click",jy),hd=!0)}var jy=function(c){for(var d=c.target;d&&d!==document;d=d.parentNode)for(var g in wc){var T=d.getAttribute(g);if(T){wc[g].fire({template:T});return}}},qy=Object.freeze({__proto__:null,argsToParams:Oy,bindClickHandler:By,clickCancel:Br,clickConfirm:Ur,clickDeny:ca,enableLoading:Fn,fire:xy,getActions:nr,getCancelButton:kn,getCloseButton:Ss,getConfirmButton:Lt,getContainer:ft,getDenyButton:Nn,getFocusableElements:Ti,getFooter:vi,getHtmlContainer:wi,getIcon:kr,getIconContent:Cs,getImage:We,getInputLabel:Nr,getLoader:Dn,getPopup:ge,getProgressSteps:Ge,getTimerLeft:My,getTimerProgressBar:Ei,getTitle:yi,getValidationMessage:Pn,increaseTimer:Fy,isDeprecatedParameter:id,isLoading:Ps,isTimerRunning:Uy,isUpdatableParameter:rd,isValidParameter:nd,isVisible:Fr,mixin:Ly,resumeTimer:ud,showLoading:Fn,stopTimer:cd,toggleTimer:Vy}),$y=function(){function _(c,d){h(this,_),this.callback=c,this.remaining=d,this.running=!1,this.start()}return x(_,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(d){var g=this.running;return g&&this.stop(),this.remaining+=d,g&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),dd=["swal-title","swal-html","swal-footer"],Hy=function(c){var d=typeof c.template=="string"?document.querySelector(c.template):c.template;if(!d)return{};var g=d.content;Jy(g);var T=Object.assign(zy(g),Wy(g),Gy(g),Ky(g),Qy(g),Yy(g),Xy(g,dd));return T},zy=function(c){var d={},g=Array.from(c.querySelectorAll("swal-param"));return g.forEach(function(T){qr(T,["name","value"]);var M=T.getAttribute("name"),$=T.getAttribute("value");typeof Mi[M]=="boolean"?d[M]=$!=="false":Oe(Mi[M])==="object"?d[M]=JSON.parse($):d[M]=$}),d},Wy=function(c){var d={},g=Array.from(c.querySelectorAll("swal-function-param"));return g.forEach(function(T){var M=T.getAttribute("name"),$=T.getAttribute("value");d[M]=new Function("return ".concat($))()}),d},Gy=function(c){var d={},g=Array.from(c.querySelectorAll("swal-button"));return g.forEach(function(T){qr(T,["type","color","aria-label"]);var M=T.getAttribute("type");d["".concat(M,"ButtonText")]=T.innerHTML,d["show".concat(bs(M),"Button")]=!0,T.hasAttribute("color")&&(d["".concat(M,"ButtonColor")]=T.getAttribute("color")),T.hasAttribute("aria-label")&&(d["".concat(M,"ButtonAriaLabel")]=T.getAttribute("aria-label"))}),d},Ky=function(c){var d={},g=c.querySelector("swal-image");return g&&(qr(g,["src","width","height","alt"]),g.hasAttribute("src")&&(d.imageUrl=g.getAttribute("src")||void 0),g.hasAttribute("width")&&(d.imageWidth=g.getAttribute("width")||void 0),g.hasAttribute("height")&&(d.imageHeight=g.getAttribute("height")||void 0),g.hasAttribute("alt")&&(d.imageAlt=g.getAttribute("alt")||void 0)),d},Qy=function(c){var d={},g=c.querySelector("swal-icon");return g&&(qr(g,["type","color"]),g.hasAttribute("type")&&(d.icon=g.getAttribute("type")),g.hasAttribute("color")&&(d.iconColor=g.getAttribute("color")),d.iconHtml=g.innerHTML),d},Yy=function(c){var d={},g=c.querySelector("swal-input");g&&(qr(g,["type","label","placeholder","value"]),d.input=g.getAttribute("type")||"text",g.hasAttribute("label")&&(d.inputLabel=g.getAttribute("label")),g.hasAttribute("placeholder")&&(d.inputPlaceholder=g.getAttribute("placeholder")),g.hasAttribute("value")&&(d.inputValue=g.getAttribute("value")));var T=Array.from(c.querySelectorAll("swal-input-option"));return T.length&&(d.inputOptions={},T.forEach(function(M){qr(M,["value"]);var $=M.getAttribute("value"),ie=M.innerHTML;d.inputOptions[$]=ie})),d},Xy=function(c,d){var g={};for(var T in d){var M=d[T],$=c.querySelector(M);$&&(qr($,[]),g[M.replace(/^swal-/,"")]=$.innerHTML.trim())}return g},Jy=function(c){var d=dd.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(c.children).forEach(function(g){var T=g.tagName.toLowerCase();d.includes(T)||dt("Unrecognized element <".concat(T,">"))})},qr=function(c,d){Array.from(c.attributes).forEach(function(g){d.indexOf(g.name)===-1&&dt(['Unrecognized attribute "'.concat(g.name,'" on <').concat(c.tagName.toLowerCase(),">."),"".concat(d.length?"Allowed attributes are: ".concat(d.join(", ")):"To set the value, use HTML within the element.")])})},fd=10,Zy=function(c){var d=ft(),g=ge();typeof c.willOpen=="function"&&c.willOpen(g);var T=window.getComputedStyle(document.body),M=T.overflowY;rw(d,g,c),setTimeout(function(){tw(d,g)},fd),bi()&&(nw(d,c.scrollbarPadding,M),ma()),!mn()&&!J.previousActiveElement&&(J.previousActiveElement=document.activeElement),typeof c.didOpen=="function"&&setTimeout(function(){return c.didOpen(g)}),Mt(d,L["no-transition"])},ew=function _(c){var d=ge();if(!(c.target!==d||!Ln)){var g=ft();d.removeEventListener(Ln,_),g.style.overflowY="auto"}},tw=function(c,d){Ln&&xr(d)?(c.style.overflowY="hidden",d.addEventListener(Ln,ew)):c.style.overflowY="auto"},nw=function(c,d,g){_a(),d&&g!=="hidden"&&va(g),setTimeout(function(){c.scrollTop=0})},rw=function(c,d,g){X(c,g.showClass.backdrop),g.animation?(d.style.setProperty("opacity","0","important"),Ue(d,"grid"),setTimeout(function(){X(d,g.showClass.popup),d.style.removeProperty("opacity")},fd)):Ue(d,"grid"),X([document.documentElement,document.body],L.shown),g.heightAuto&&g.backdrop&&!g.toast&&X([document.documentElement,document.body],L["height-auto"])},pd={email:function(c,d){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid email address")},url:function(c,d){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid URL")}};function iw(_){_.inputValidator||(_.input==="email"&&(_.inputValidator=pd.email),_.input==="url"&&(_.inputValidator=pd.url))}function sw(_){(!_.target||typeof _.target=="string"&&!document.querySelector(_.target)||typeof _.target!="string"&&!_.target.appendChild)&&(dt('Target parameter is not valid, defaulting to "body"'),_.target="body")}function ow(_){iw(_),_.showLoaderOnConfirm&&!_.preConfirm&&dt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),sw(_),typeof _.title=="string"&&(_.title=_.title.split(`
`).join("<br />")),xs(_)}var vn,Ra=new WeakMap,Me=function(){function _(){if(h(this,_),y(this,Ra,void 0),!(typeof window>"u")){vn=this;for(var c=arguments.length,d=new Array(c),g=0;g<c;g++)d[g]=arguments[g];var T=Object.freeze(this.constructor.argsToParams(d));this.params=T,this.isAwaitingPromise=!1,v(Ra,this,this._main(vn.params))}}return x(_,[{key:"_main",value:function(d){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ty(Object.assign({},g,d)),J.currentInstance){var T=pt.swalPromiseResolve.get(J.currentInstance),M=J.currentInstance.isAwaitingPromise;J.currentInstance._destroy(),M||T({isDismissed:!0}),bi()&&ga()}J.currentInstance=vn;var $=lw(d,g);ow($),Object.freeze($),J.timeout&&(J.timeout.stop(),delete J.timeout),clearTimeout(J.restoreFocusTimeout);var ie=cw(vn);return la(vn,$),Ie.innerParams.set(vn,$),aw(vn,ie,$)}},{key:"then",value:function(d){return p(Ra,this).then(d)}},{key:"finally",value:function(d){return p(Ra,this).finally(d)}}])}(),aw=function(c,d,g){return new Promise(function(T,M){var $=function(te){c.close({isDismissed:!0,dismiss:te})};pt.swalPromiseResolve.set(c,T),pt.swalPromiseReject.set(c,M),d.confirmButton.onclick=function(){Qe(c)},d.denyButton.onclick=function(){de(c)},d.cancelButton.onclick=function(){et(c,$)},d.closeButton.onclick=function(){$(Ht.close)},Cy(g,d,$),Us(J,g,$),At(c,g),Zy(g),uw(J,g,$),hw(d,g),setTimeout(function(){d.container.scrollTop=0})})},lw=function(c,d){var g=Hy(c),T=Object.assign({},Mi,d,g,c);return T.showClass=Object.assign({},Mi.showClass,T.showClass),T.hideClass=Object.assign({},Mi.hideClass,T.hideClass),T.animation===!1&&(T.showClass={backdrop:"swal2-noanimation"},T.hideClass={}),T},cw=function(c){var d={popup:ge(),container:ft(),actions:nr(),confirmButton:Lt(),denyButton:Nn(),cancelButton:kn(),loader:Dn(),closeButton:Ss(),validationMessage:Pn(),progressSteps:Ge()};return Ie.domCache.set(c,d),d},uw=function(c,d,g){var T=Ei();Ze(T),d.timer&&(c.timeout=new $y(function(){g("timer"),delete c.timeout},d.timer),d.timerProgressBar&&(Ue(T),lt(T,d,"timerProgressBar"),setTimeout(function(){c.timeout&&c.timeout.running&&$t(d.timer)})))},hw=function(c,d){if(!d.toast){if(!Zn(d.allowEnterKey)){_i("allowEnterKey"),pw();return}dw(c)||fw(c,d)||Se(-1,1)}},dw=function(c){var d=c.popup.querySelectorAll("[autofocus]"),g=D(d),T;try{for(g.s();!(T=g.n()).done;){var M=T.value;if(M instanceof HTMLElement&&Ke(M))return M.focus(),!0}}catch($){g.e($)}finally{g.f()}return!1},fw=function(c,d){return d.focusDeny&&Ke(c.denyButton)?(c.denyButton.focus(),!0):d.focusCancel&&Ke(c.cancelButton)?(c.cancelButton.focus(),!0):d.focusConfirm&&Ke(c.confirmButton)?(c.confirmButton.focus(),!0):!1},pw=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var md=new Date,gd=localStorage.getItem("swal-initiation");gd?(md.getTime()-Date.parse(gd))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var _=document.createElement("audio");_.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",_.loop=!0,document.body.appendChild(_),setTimeout(function(){_.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(md))}Me.prototype.disableButtons=Xh,Me.prototype.enableButtons=Yh,Me.prototype.getInput=Gh,Me.prototype.disableInput=Zh,Me.prototype.enableInput=Jh,Me.prototype.hideLoading=Ca,Me.prototype.disableLoading=Ca,Me.prototype.showValidationMessage=ed,Me.prototype.resetValidationMessage=td,Me.prototype.close=en,Me.prototype.closePopup=en,Me.prototype.closeModal=en,Me.prototype.closeToast=en,Me.prototype.rejectPromise=qs,Me.prototype.update=sd,Me.prototype._destroy=od,Object.assign(Me,qy),Object.keys(Ay).forEach(function(_){Me[_]=function(){if(vn&&vn[_]){var c;return(c=vn)[_].apply(c,arguments)}return null}}),Me.DismissReason=Ht,Me.version="11.12.2";var Pa=Me;return Pa.default=Pa,Pa}),typeof cr<"u"&&cr.Sweetalert2&&(cr.swal=cr.sweetAlert=cr.Swal=cr.SweetAlert=cr.Sweetalert2),typeof document<"u"&&function(t,r){var i=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(wg);var oI=wg.exports;const aI=sI(oI),YP=aI.mixin({customClass:{container:"bg-base-100 dark:bg-base-800 text-base-content dark:text-base-100",popup:"bg-base-200 dark:bg-base-700 text-base-content dark:text-base-100",title:"text-base-content dark:text-neutral-100 text-lg font-semibold",closeButton:"text-base-content dark:text-neutral-100 hover:text-base-200",htmlContainer:"text-base-content dark:text-neutral-100 text-base",input:"text-base-content dark:text-neutral-100 bg-base-300 dark:bg-base-600 border-none",inputLabel:"text-base-content dark:text-neutral-100 text-base",validationMessage:"text-base-content dark:text-neutral-100 text-base",actions:"text-base-content dark:text-neutral-100 flex gap-2",confirmButton:"btn btn-primary mr-2",cancelButton:"btn btn-error ml-2"},buttonsStyling:!1}),lI=n=>typeof n=="function",fl=(n,e)=>lI(n)?n(e):n;var je;(function(n){n[n.ADD_TOAST=0]="ADD_TOAST",n[n.UPDATE_TOAST=1]="UPDATE_TOAST",n[n.UPSERT_TOAST=2]="UPSERT_TOAST",n[n.DISMISS_TOAST=3]="DISMISS_TOAST",n[n.REMOVE_TOAST=4]="REMOVE_TOAST",n[n.START_PAUSE=5]="START_PAUSE",n[n.END_PAUSE=6]="END_PAUSE"})(je||(je={}));const pl=Symbol("store-raw"),Wi=Symbol("store-node"),qn=Symbol("store-has"),vg=Symbol("store-self");function Eg(n){let e=n[ln];if(!e&&(Object.defineProperty(n,ln,{value:e=new Proxy(n,hI)}),!Array.isArray(n))){const t=Object.keys(n),r=Object.getOwnPropertyDescriptors(n);for(let i=0,s=t.length;i<s;i++){const o=t[i];r[o].get&&Object.defineProperty(n,o,{enumerable:r[o].enumerable,get:r[o].get.bind(e)})}}return e}function os(n){let e;return n!=null&&typeof n=="object"&&(n[ln]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function as(n,e=new Set){let t,r,i,s;if(t=n!=null&&n[pl])return t;if(!os(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let o=0,l=n.length;o<l;o++)i=n[o],(r=as(i,e))!==i&&(n[o]=r)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const o=Object.keys(n),l=Object.getOwnPropertyDescriptors(n);for(let u=0,h=o.length;u<h;u++)s=o[u],!l[s].get&&(i=n[s],(r=as(i,e))!==i&&(n[s]=r))}return n}function ml(n,e){let t=n[e];return t||Object.defineProperty(n,e,{value:t=Object.create(null)}),t}function Co(n,e,t){if(n[e])return n[e];const[r,i]=Le(t,{equals:!1,internal:!0});return r.$=i,n[e]=r}function cI(n,e){const t=Reflect.getOwnPropertyDescriptor(n,e);return!t||t.get||!t.configurable||e===ln||e===Wi||(delete t.value,delete t.writable,t.get=()=>n[ln][e]),t}function Tg(n){zc()&&Co(ml(n,Wi),vg)()}function uI(n){return Tg(n),Reflect.ownKeys(n)}const hI={get(n,e,t){if(e===pl)return n;if(e===ln)return t;if(e===Hc)return Tg(n),t;const r=ml(n,Wi),i=r[e];let s=i?i():n[e];if(e===Wi||e===qn||e==="__proto__")return s;if(!i){const o=Object.getOwnPropertyDescriptor(n,e);zc()&&(typeof s!="function"||n.hasOwnProperty(e))&&!(o&&o.get)&&(s=Co(r,e,s)())}return os(s)?Eg(s):s},has(n,e){return e===pl||e===ln||e===Hc||e===Wi||e===qn||e==="__proto__"?!0:(zc()&&Co(ml(n,qn),e)(),e in n)},set(){return!0},deleteProperty(){return!0},ownKeys:uI,getOwnPropertyDescriptor:cI};function ls(n,e,t,r=!1){if(!r&&n[e]===t)return;const i=n[e],s=n.length;t===void 0?(delete n[e],n[qn]&&n[qn][e]&&i!==void 0&&n[qn][e].$()):(n[e]=t,n[qn]&&n[qn][e]&&i===void 0&&n[qn][e].$());let o=ml(n,Wi),l;if((l=Co(o,e,i))&&l.$(()=>t),Array.isArray(n)&&n.length!==s){for(let u=n.length;u<s;u++)(l=o[u])&&l.$();(l=Co(o,"length",s))&&l.$(n.length)}(l=o[vg])&&l.$()}function bg(n,e){const t=Object.keys(e);for(let r=0;r<t.length;r+=1){const i=t[r];ls(n,i,e[i])}}function dI(n,e){if(typeof e=="function"&&(e=e(n)),e=as(e),Array.isArray(e)){if(n===e)return;let t=0,r=e.length;for(;t<r;t++){const i=e[t];n[t]!==i&&ls(n,t,i)}ls(n,"length",r)}else bg(n,e)}function to(n,e,t=[]){let r,i=n;if(e.length>1){r=e.shift();const o=typeof r,l=Array.isArray(n);if(Array.isArray(r)){for(let u=0;u<r.length;u++)to(n,[r[u]].concat(e),t);return}else if(l&&o==="function"){for(let u=0;u<n.length;u++)r(n[u],u)&&to(n,[u].concat(e),t);return}else if(l&&o==="object"){const{from:u=0,to:h=n.length-1,by:p=1}=r;for(let y=u;y<=h;y+=p)to(n,[y].concat(e),t);return}else if(e.length>1){to(n[r],e,[r].concat(t));return}i=n[r],t=[r].concat(t)}let s=e[0];typeof s=="function"&&(s=s(i,t),s===i)||r===void 0&&s==null||(s=as(s),r===void 0||os(i)&&os(s)&&!Array.isArray(s)?bg(i,s):ls(n,r,s))}function fI(...[n,e]){const t=as(n||{}),r=Array.isArray(t),i=Eg(t);function s(...o){Ap(()=>{r&&o.length===1?dI(t,o[0]):to(t,o)})}return[i,s]}const gl=new WeakMap,Ig={get(n,e){if(e===pl)return n;const t=n[e];let r;return os(t)?gl.get(t)||(gl.set(t,r=new Proxy(t,Ig)),r):t},set(n,e,t){return ls(n,e,as(t)),!0},deleteProperty(n,e){return ls(n,e,void 0,!0),!0}};function Ma(n){return e=>{if(os(e)){let t;(t=gl.get(e))||gl.set(e,t=new Proxy(e,Ig)),n(t)}return e}}const[ei,ur]=fI({toasts:[],pausedAt:void 0}),pI=()=>{const{pausedAt:n,toasts:e}=ei;if(n)return;const t=Date.now();return e.map(i=>{if(i.duration===1/0)return;const s=(i.duration||0)+i.pauseDuration-(t-i.createdAt);if(s<=0){i.visible&&fn({type:je.DISMISS_TOAST,toastId:i.id});return}return setTimeout(()=>{fn({type:je.DISMISS_TOAST,toastId:i.id})},s)})},ao=new Map,Tf=(n,e)=>{if(ao.has(n))return;const t=setTimeout(()=>{ao.delete(n),fn({type:je.REMOVE_TOAST,toastId:n})},e);ao.set(n,t)},mI=n=>{const e=ao.get(n);ao.delete(n),e&&clearTimeout(e)},fn=n=>{switch(n.type){case je.ADD_TOAST:ur("toasts",i=>{const s=i;return[n.toast,...s]});break;case je.DISMISS_TOAST:const{toastId:e}=n,t=ei.toasts;if(e){const i=t.find(s=>s.id===e);i&&Tf(e,i.unmountDelay),ur("toasts",s=>s.id===e,Ma(s=>s.visible=!1))}else t.forEach(i=>{Tf(i.id,i.unmountDelay)}),ur("toasts",i=>i.id!==void 0,Ma(i=>i.visible=!1));break;case je.REMOVE_TOAST:if(!n.toastId){ur("toasts",[]);break}ur("toasts",i=>i.filter(o=>o.id!==n.toastId));break;case je.UPDATE_TOAST:n.toast.id&&mI(n.toast.id),ur("toasts",i=>i.id===n.toast.id,i=>({...i,...n.toast}));break;case je.UPSERT_TOAST:ei.toasts.find(i=>i.id===n.toast.id)?fn({type:je.UPDATE_TOAST,toast:n.toast}):fn({type:je.ADD_TOAST,toast:n.toast});break;case je.START_PAUSE:ur(Ma(i=>{i.pausedAt=Date.now(),i.toasts.forEach(s=>{s.paused=!0})}));break;case je.END_PAUSE:const r=n.time-(ei.pausedAt||0);ur(Ma(i=>{i.pausedAt=void 0,i.toasts.forEach(s=>{s.pauseDuration+=r,s.paused=!1})}));break}},gI={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Gi={id:"",icon:"",unmountDelay:500,duration:3e3,ariaProps:{role:"status","aria-live":"polite"},className:"",style:{},position:"top-right",iconTheme:{}},Ag={position:"top-right",toastOptions:Gi,gutter:8,containerStyle:{},containerClassName:""},Va="16px",_I={position:"fixed","z-index":9999,top:Va,bottom:Va,left:Va,right:Va,"pointer-events":"none"},yI=(()=>{let n=0;return()=>String(++n)})(),wI=n=>{CI(e=>({containerClassName:n.containerClassName??e.containerClassName,containerStyle:n.containerStyle??e.containerStyle,gutter:n.gutter??e.gutter,position:n.position??e.position,toastOptions:{...n.toastOptions}}))},vI=(n,e)=>{const r=n.includes("top")?{top:0,"margin-top":`${e}px`}:{bottom:0,"margin-bottom":`${e}px`},i=n.includes("center")?{"justify-content":"center"}:n.includes("right")?{"justify-content":"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:"all 230ms cubic-bezier(.21,1.02,.73,1)",...r,...i}},EI=(n,e)=>{const t=n.getBoundingClientRect();t.height!==e.height&&fn({type:je.UPDATE_TOAST,toast:{id:e.id,height:t.height}})},TI=(n,e)=>{const{toasts:t}=ei,r=qi().gutter||Ag.gutter||8,i=t.filter(u=>(u.position||e)===e&&u.height),s=i.findIndex(u=>u.id===n.id),o=i.filter((u,h)=>h<s&&u.visible).length;return i.slice(0,o).reduce((u,h)=>u+r+(h.height||0),0)},bI=(n,e)=>(n.position||e).includes("top")?1:-1,II={display:"flex","align-items":"center",color:"#363636",background:"white","box-shadow":"0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)","max-width":"350px","pointer-events":"auto",padding:"8px 10px","border-radius":"4px","line-height":"1.3","will-change":"transform"},AI={display:"flex","align-items":"center",flex:"1 1 auto",margin:"4px 10px","white-space":"pre-line"},Fa={"flex-shrink":0,"min-width":"20px","min-height":"20px",display:"flex","align-items":"center","justify-content":"center","text-align":"center"},_l=n=>({calcMode:"spline",keyTimes:"0; 1",keySplines:n}),[qi,CI]=Le(Ag),SI=(n,e="blank",t)=>({...Gi,...qi().toastOptions,...t,type:e,message:n,pauseDuration:0,createdAt:Date.now(),visible:!0,id:t.id||yI(),paused:!1,style:{...Gi.style,...qi().toastOptions?.style,...t.style},duration:t.duration||qi().toastOptions?.duration||gI[e],position:t.position||qi().toastOptions?.position||qi().position||Gi.position}),Fo=n=>(e,t={})=>Jr(()=>{const r=ei.toasts.find(s=>s.id===t.id),i=SI(e,n,{...r,duration:void 0,...t});return fn({type:je.UPSERT_TOAST,toast:i}),i.id}),Et=(n,e)=>Fo("blank")(n,e);Fe(()=>Et);Et.error=Fo("error");Et.success=Fo("success");Et.loading=Fo("loading");Et.custom=Fo("custom");Et.dismiss=n=>{fn({type:je.DISMISS_TOAST,toastId:n})};Et.promise=(n,e,t)=>{const r=Et.loading(e.loading,{...t});return n.then(i=>(Et.success(fl(e.success,i),{id:r,...t}),i)).catch(i=>{Et.error(fl(e.error,i),{id:r,...t})}),n};Et.remove=n=>{fn({type:je.REMOVE_TOAST,toastId:n})};var RI=pn("<div><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}");const PI=n=>(ti(()=>{wI(n)}),ti(()=>{const e=pI();hs(()=>{e&&e.forEach(t=>t&&clearTimeout(t))})}),(()=>{var e=RI();return e.firstChild,Pt(e,se(xw,{get each(){return ei.toasts},children:t=>se(OI,{toast:t})}),null),Ve(t=>{var r={..._I,...n.containerStyle},i=n.containerClassName;return t.e=jn(e,r,t.e),i!==t.t&&Ol(e,t.t=i),t},{e:void 0,t:void 0}),e})());var Ua=pn("<div>"),kI=pn("<div><div>");const NI=n=>{let e;return ti(()=>{if(!e)return;const t=bI(n.toast,n.position);n.toast.visible?e.animate([{transform:`translate3d(0,${t*-200}%,0) scale(.6)`,opacity:.5},{transform:"translate3d(0,0,0) scale(1)",opacity:1}],{duration:350,fill:"forwards",easing:"cubic-bezier(.21,1.02,.73,1)"}):e.animate([{transform:"translate3d(0,0,-1px) scale(1)",opacity:1},{transform:`translate3d(0,${t*-150}%,-1px) scale(.4)`,opacity:0}],{duration:400,fill:"forwards",easing:"cubic-bezier(.06,.71,.55,1)"})}),(()=>{var t=kI(),r=t.firstChild,i=e;return typeof i=="function"?Vu(i,t):e=t,Pt(t,se(Lw,{get children(){return[se(Na,{get when(){return n.toast.icon},get children(){var s=Ua();return Pt(s,()=>n.toast.icon),Ve(o=>jn(s,Fa,o)),s}}),se(Na,{get when(){return n.toast.type==="loading"},get children(){var s=Ua();return Pt(s,se(jI,Kr(()=>n.toast.iconTheme))),Ve(o=>jn(s,Fa,o)),s}}),se(Na,{get when(){return n.toast.type==="success"},get children(){var s=Ua();return Pt(s,se(VI,Kr(()=>n.toast.iconTheme))),Ve(o=>jn(s,Fa,o)),s}}),se(Na,{get when(){return n.toast.type==="error"},get children(){var s=Ua();return Pt(s,se(UI,Kr(()=>n.toast.iconTheme))),Ve(o=>jn(s,Fa,o)),s}})]}}),r),un(r,Kr(()=>n.toast.ariaProps),!1,!0),Pt(r,()=>fl(n.toast.message,n.toast)),Ve(s=>{var o=n.toast.className,l={...II,...n.toast.style},u=AI;return o!==s.e&&Ol(t,s.e=o),s.t=jn(t,l,s.t),s.a=jn(r,u,s.a),s},{e:void 0,t:void 0,a:void 0}),t})()};var DI=pn("<div>");const OI=n=>{const e=()=>{const i=n.toast.position||Gi.position,s=TI(n.toast,i);return vI(i,s)},t=ye(()=>e());let r;return vw(()=>{r&&EI(r,n.toast)}),(()=>{var i=DI();i.addEventListener("mouseleave",()=>fn({type:je.END_PAUSE,time:Date.now()})),i.addEventListener("mouseenter",()=>fn({type:je.START_PAUSE,time:Date.now()}));var s=r;return typeof s=="function"?Vu(s,i):r=i,Pt(i,(()=>{var o=ye(()=>n.toast.type==="custom");return()=>o()?fl(n.toast.message,n.toast):se(NI,{get toast(){return n.toast},get position(){return n.toast.position||Gi.position}})})()),Ve(o=>{var l=t(),u=n.toast.visible?"sldt-active":"";return o.e=jn(i,l,o.e),u!==o.t&&Ol(i,o.t=u),o},{e:void 0,t:void 0}),i})()};var xI=pn('<svg><circle cx=16 cy=16 r=0><animate attributeName=opacity values="0; 1; 1"></animate><animate attributeName=r values="0; 17.5; 16"></svg>',!1,!0),LI=pn('<svg><circle cx=16 cy=16 r=12 opacity=0><animate attributeName=opacity values="1; 0"></animate><animate attributeName=r values="12; 26"></svg>',!1,!0);const Cg=n=>{const e={dur:"0.35s",begin:"100ms",fill:"freeze",calcMode:"spline",keyTimes:"0; 0.6; 1",keySplines:"0.25 0.71 0.4 0.88; .59 .22 .87 .63"};return(()=>{var t=xI(),r=t.firstChild,i=r.nextSibling;return un(r,e,!0,!1),un(i,e,!0,!1),Ve(()=>In(t,"fill",n.fill)),t})()},Sg=n=>{const e={dur:"1s",begin:n.begin||"320ms",fill:"freeze",..._l("0.0 0.0 0.2 1")};return(()=>{var t=LI(),r=t.firstChild,i=r.nextSibling;return un(r,e,!0,!1),un(i,e,!0,!1),Ve(()=>In(t,"fill",n.fill)),t})()};var MI=pn('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-dasharray=22 stroke-dashoffset=22 stroke-linecap=round stroke-miterlimit=10 d=M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7><animate attributeName=stroke-dashoffset values=22;0 dur=0.25s begin=250ms fill=freeze>');const VI=n=>{const e=n.primary||"#34C759";return(()=>{var t=MI(),r=t.firstChild,i=r.firstChild;return t.style.setProperty("overflow","visible"),Pt(t,se(Cg,{fill:e}),r),Pt(t,se(Sg,{fill:e,begin:"350ms"}),r),un(i,Kr(()=>_l("0.0, 0.0, 0.58, 1.0")),!0,!1),Ve(()=>In(r,"stroke",n.secondary||"#FCFCFC")),t})()};var FI=pn('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-dasharray=9 stroke-dashoffset=9 stroke-linecap=round d=M16,7l0,9><animate attributeName=stroke-dashoffset values=9;0 dur=0.2s begin=250ms fill=freeze></animate></path><circle cx=16 cy=23 r=2.5 opacity=0><animate attributeName=opacity values=0;1 dur=0.25s begin=350ms fill=freeze>');const UI=n=>{const e=n.primary||"#FF3B30";return(()=>{var t=FI(),r=t.firstChild,i=r.firstChild,s=r.nextSibling,o=s.firstChild;return t.style.setProperty("overflow","visible"),Pt(t,se(Cg,{fill:e}),r),Pt(t,se(Sg,{fill:e}),r),un(i,Kr(()=>_l("0.0, 0.0, 0.58, 1.0")),!0,!1),un(o,Kr(()=>_l("0.0, 0.0, 0.58, 1.0")),!0,!1),Ve(l=>{var u=n.secondary||"#FFFFFF",h=n.secondary||"#FFFFFF";return u!==l.e&&In(r,"stroke",l.e=u),h!==l.t&&In(s,"fill",l.t=h),l},{e:void 0,t:void 0}),t})()};var BI=pn('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z></path><path fill=none stroke-width=4 stroke-linecap=round stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2><animateTransform attributeName=transform type=rotate from="0 16 16"to="360 16 16"dur=0.75s repeatCount=indefinite>');const jI=n=>(()=>{var e=BI(),t=e.firstChild,r=t.nextSibling;return e.style.setProperty("overflow","visible"),Ve(i=>{var s=n.primary||"#E5E7EB",o=n.secondary||"#4b5563";return s!==i.e&&In(t,"stroke",i.e=s),o!==i.t&&In(r,"stroke",i.t=o),i},{e:void 0,t:void 0}),e})(),qI=(n,e,t=Wr.OTHER)=>{const r=`[${n}] ${e}`;switch(t){case Wr.ERROR:Et.error(r);break;case Wr.WARN:Et.error(r);break;case Wr.SUCCESS:Et.success(r);break;case Wr.OTHER:Et(r);break;default:Et(r);break}};function $I(n,e=localStorage){const t=e.getItem(n);return t?JSON.parse(t):null}function HI(n,e,t=localStorage){t.getItem(n)||t.setItem(n,JSON.stringify(e))}function bf(n,e=localStorage){e.removeItem(n)}function zI(n,e,t=localStorage){const r=t.getItem(n),i=r?JSON.parse(r):e;return i==e&&HI(n,e),i}async function Rg(n,e,t=localStorage){t.getItem(n)&&t.removeItem(n),t.setItem(n,JSON.stringify(e))}function Pg(){let n=new Set;function e(i){return n.add(i),()=>n.delete(i)}let t=!1;function r(i,s){if(t)return!(t=!1);const o={to:i,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of n)l.listener({...o,from:l.location,retry:u=>{u&&(t=!0),l.navigate(i,{...s,resolve:!1})}});return!o.defaultPrevented}return{subscribe:e,confirm:r}}let yu;function bh(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),yu=window.history.state._depth}bh();function WI(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function GI(n,e){let t=!1;return()=>{const r=yu;bh();const i=r==null?null:yu-r;if(t){t=!1;return}i&&e(i)?(t=!0,window.history.go(-i)):n()}}const KI=/^(?:[a-z0-9]+:)?\/\//i,QI=/^\/+|(\/)\/+$/g,kg="http://sr";function lo(n,e=!1){const t=n.replace(QI,"$1");return t?e||/^[?#]/.test(t)?t:"/"+t:""}function Qa(n,e,t){if(KI.test(e))return;const r=lo(n),i=t&&lo(t);let s="";return!i||e.startsWith("/")?s=r:i.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+i:s=i,(s||"/")+lo(e,!s)}function YI(n,e){if(n==null)throw new Error(e);return n}function XI(n,e){return lo(n).replace(/\/*(\*.*)?$/g,"")+lo(e)}function Ng(n){const e={};return n.searchParams.forEach((t,r)=>{e[r]=t}),e}function JI(n,e,t){const[r,i]=n.split("/*",2),s=r.split("/").filter(Boolean),o=s.length;return l=>{const u=l.split("/").filter(Boolean),h=u.length-o;if(h<0||h>0&&i===void 0&&!e)return null;const p={path:o?"":"/",params:{}},y=v=>t===void 0?void 0:t[v];for(let v=0;v<o;v++){const C=s[v],N=u[v],x=C[0]===":",D=x?C.slice(1):C;if(x&&Dc(N,y(D)))p.params[D]=N;else if(x||!Dc(N,C))return null;p.path+=`/${N}`}if(i){const v=h?u.slice(-h).join("/"):"";if(Dc(v,y(i)))p.params[i]=v;else return null}return p}}function Dc(n,e){const t=r=>r.localeCompare(n,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?t(e):typeof e=="function"?e(n):Array.isArray(e)?e.some(t):e instanceof RegExp?e.test(n):!1}function ZI(n){const[e,t]=n.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((i,s)=>i+(s.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function Dg(n){const e=new Map,t=xu();return new Proxy({},{get(r,i){return e.has(i)||Cp(t,()=>e.set(i,ye(()=>n()[i]))),e.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function Og(n){let e=/(\/?\:[^\/]+)\?/.exec(n);if(!e)return[n];let t=n.slice(0,e.index),r=n.slice(e.index+e[0].length);const i=[t,t+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)i.push(t+=e[1]),r=r.slice(e[0].length);return Og(r).reduce((s,o)=>[...s,...i.map(l=>l+o)],[])}const eA=100,xg=Yn(),Ih=Yn(),Uo=()=>YI(Sn(xg),"<A> and 'use' router primitives can be only used inside a Route."),tA=()=>Sn(Ih)||Uo().base,XP=n=>{const e=tA();return ye(()=>e.resolvePath(n()))},JP=n=>{const e=Uo();return ye(()=>{const t=n();return t!==void 0?e.renderPath(t):t})},nA=()=>Uo().navigatorFactory(),ZP=()=>Uo().location,ek=()=>Uo().params;function rA(n,e=""){const{component:t,preload:r,load:i,children:s,info:o}=n,l=!s||Array.isArray(s)&&!s.length,u={key:n,component:t,preload:r||i,info:o};return Lg(n.path).reduce((h,p)=>{for(const y of Og(p)){const v=XI(e,y);let C=l?v:v.split("/*",1)[0];C=C.split("/").map(N=>N.startsWith(":")||N.startsWith("*")?N:encodeURIComponent(N)).join("/"),h.push({...u,originalPath:p,pattern:C,matcher:JI(C,!l,n.matchFilters)})}return h},[])}function iA(n,e=0){return{routes:n,score:ZI(n[n.length-1])*1e4-e,matcher(t){const r=[];for(let i=n.length-1;i>=0;i--){const s=n[i],o=s.matcher(t);if(!o)return null;r.unshift({...o,route:s})}return r}}}function Lg(n){return Array.isArray(n)?n:[n]}function Mg(n,e="",t=[],r=[]){const i=Lg(n);for(let s=0,o=i.length;s<o;s++){const l=i[s];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const u=rA(l,e);for(const h of u){t.push(h);const p=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!p)Mg(l.children,h.pattern,t,r);else{const y=iA([...t],r.length);r.push(y)}t.pop()}}}return t.length?r:r.sort((s,o)=>o.score-s.score)}function Oc(n,e){for(let t=0,r=n.length;t<r;t++){const i=n[t].matcher(e);if(i)return i}return[]}function sA(n,e){const t=new URL(kg),r=ye(u=>{const h=n();try{return new URL(h,t)}catch{return console.error(`Invalid path ${h}`),u}},t,{equals:(u,h)=>u.href===h.href}),i=ye(()=>r().pathname),s=ye(()=>r().search,!0),o=ye(()=>r().hash),l=()=>"";return{get pathname(){return i()},get search(){return s()},get hash(){return o()},get state(){return e()},get key(){return l()},query:Dg(Ou(s,()=>Ng(r())))}}let Gr;function oA(){return Gr}function aA(n,e,t,r={}){const{signal:[i,s],utils:o={}}=n,l=o.parsePath||(E=>E),u=o.renderPath||(E=>E),h=o.beforeLeave||Pg(),p=Qa("",r.base||"");if(p===void 0)throw new Error(`${p} is not a valid base path`);p&&!i().value&&s({value:p,replace:!0,scroll:!1});const[y,v]=Le(!1);let C;const N=(E,ue)=>{ue.value===x()&&ue.state===j()||(C===void 0&&v(!0),Gr=E,C=ue,Ew(()=>{C===ue&&(D(C.value),U(C.state),ae[1]([]))}).finally(()=>{C===ue&&Ap(()=>{Gr=void 0,E==="navigate"&&S(C),v(!1),C=void 0})}))},[x,D]=Le(i().value),[j,U]=Le(i().state),z=sA(x,j),G=[],ae=Le([]),re=ye(()=>typeof r.transformUrl=="function"?Oc(e(),r.transformUrl(z.pathname)):Oc(e(),z.pathname)),R=Dg(()=>{const E=re(),ue={};for(let ze=0;ze<E.length;ze++)Object.assign(ue,E[ze].params);return ue}),b={pattern:p,path:()=>p,outlet:()=>null,resolvePath(E){return Qa(p,E)}};return Ve(Ou(i,E=>N("native",E),{defer:!0})),{base:b,location:z,params:R,isRouting:y,renderPath:u,parsePath:l,navigatorFactory:A,matches:re,beforeLeave:h,preloadRoute:P,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:ae};function I(E,ue,ze){Fe(()=>{if(typeof ue=="number"){ue&&(o.go?o.go(ue):console.warn("Router integration does not support relative routing"));return}const{replace:Oe,resolve:xt,scroll:St,state:J}={replace:!1,resolve:!0,scroll:!0,...ze},jt=xt?E.resolvePath(ue):Qa("",ue);if(jt===void 0)throw new Error(`Path '${ue}' is not a routable path`);if(G.length>=eA)throw new Error("Too many redirects");const mi=x();(jt!==mi||J!==j())&&(rv||h.confirm(jt,ze)&&(G.push({value:mi,replace:Oe,scroll:St,state:j()}),N("navigate",{value:jt,state:J})))})}function A(E){return E=E||Sn(Ih)||b,(ue,ze)=>I(E,ue,ze)}function S(E){const ue=G[0];ue&&(s({...E,replace:ue.replace,scroll:ue.scroll}),G.length=0)}function P(E,ue={}){const ze=Oc(e(),E.pathname),Oe=Gr;Gr="preload";for(let xt in ze){const{route:St,params:J}=ze[xt];St.component&&St.component.preload&&St.component.preload();const{preload:jt}=St;ue.preloadData&&jt&&Cp(t(),()=>jt({params:J,location:{pathname:E.pathname,search:E.search,hash:E.hash,query:Ng(E),state:null,key:""},intent:"preload"}))}Gr=Oe}}function lA(n,e,t,r){const{base:i,location:s,params:o}=n,{pattern:l,component:u,preload:h}=r().route,p=ye(()=>r().path);u&&u.preload&&u.preload();const y=h?h({params:o,location:s,intent:Gr||"initial"}):void 0;return{parent:e,pattern:l,path:p,outlet:()=>u?se(u,{params:o,location:s,data:y,get children(){return t()}}):t(),resolvePath(C){return Qa(i.path(),C,p())}}}const cA=n=>e=>{const{base:t}=e,r=Lu(()=>e.children),i=ye(()=>Mg(r(),e.base||""));let s;const o=aA(n,i,()=>s,{base:t,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return n.create&&n.create(o),se(xg.Provider,{value:o,get children(){return se(uA,{routerState:o,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[ye(()=>(s=xu())&&null),se(hA,{routerState:o,get branches(){return i()}})]}})}})};function uA(n){const e=n.routerState.location,t=n.routerState.params,r=ye(()=>n.preload&&Fe(()=>{n.preload({params:t,location:e,intent:oA()||"initial"})}));return se(Op,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:i=>se(i,{params:t,location:e,get data(){return r()},get children(){return n.children}})})}function hA(n){const e=[];let t;const r=ye(Ou(n.routerState.matches,(i,s,o)=>{let l=s&&i.length===s.length;const u=[];for(let h=0,p=i.length;h<p;h++){const y=s&&s[h],v=i[h];o&&y&&v.route.key===y.route.key?u[h]=o[h]:(l=!1,e[h]&&e[h](),Jr(C=>{e[h]=C,u[h]=lA(n.routerState,u[h-1]||n.routerState.base,If(()=>r()[h+1]),()=>n.routerState.matches()[h])}))}return e.splice(i.length).forEach(h=>h()),o&&l?o:(t=u[0],u)}));return If(()=>r()&&t)()}const If=n=>()=>se(Op,{get when(){return n()},keyed:!0,children:e=>se(Ih.Provider,{value:e,get children(){return e.outlet()}})});function dA([n,e],t,r){return[n,r?i=>e(r(i)):e]}function fA(n){if(n==="#")return null;try{return document.querySelector(n)}catch{return null}}function pA(n){let e=!1;const t=i=>typeof i=="string"?{value:i}:i,r=dA(Le(t(n.get()),{equals:(i,s)=>i.value===s.value&&i.state===s.state}),void 0,i=>(!e&&n.set(i),i));return n.init&&hs(n.init((i=n.get())=>{e=!0,r[1](t(i)),e=!1})),cA({signal:r,create:n.create,utils:n.utils})}function mA(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}function gA(n,e){const t=fA(`#${n}`);t?t.scrollIntoView():e&&window.scrollTo(0,0)}const _A=new Map;function yA(n=!0,e=!1,t="/_server",r){return i=>{const s=i.base.path(),o=i.navigatorFactory(i.base);let l={};function u(x){return x.namespaceURI==="http://www.w3.org/2000/svg"}function h(x){if(x.defaultPrevented||x.button!==0||x.metaKey||x.altKey||x.ctrlKey||x.shiftKey)return;const D=x.composedPath().find(re=>re instanceof Node&&re.nodeName.toUpperCase()==="A");if(!D||e&&!D.hasAttribute("link"))return;const j=u(D),U=j?D.href.baseVal:D.href;if((j?D.target.baseVal:D.target)||!U&&!D.hasAttribute("state"))return;const G=(D.getAttribute("rel")||"").split(/\s+/);if(D.hasAttribute("download")||G&&G.includes("external"))return;const ae=j?new URL(U,document.baseURI):new URL(U);if(!(ae.origin!==window.location.origin||s&&ae.pathname&&!ae.pathname.toLowerCase().startsWith(s.toLowerCase())))return[D,ae]}function p(x){const D=h(x);if(!D)return;const[j,U]=D,z=i.parsePath(U.pathname+U.search+U.hash),G=j.getAttribute("state");x.preventDefault(),o(z,{resolve:!1,replace:j.hasAttribute("replace"),scroll:!j.hasAttribute("noscroll"),state:G&&JSON.parse(G)})}function y(x){const D=h(x);if(!D)return;const[j,U]=D;l[U.pathname]||i.preloadRoute(U,{preloadData:j.getAttribute("preload")!=="false"})}function v(x){const D=h(x);if(!D)return;const[j,U]=D;l[U.pathname]||(l[U.pathname]=setTimeout(()=>{i.preloadRoute(U,{preloadData:j.getAttribute("preload")!=="false"}),delete l[U.pathname]},200))}function C(x){const D=h(x);if(!D)return;const[,j]=D;l[j.pathname]&&(clearTimeout(l[j.pathname]),delete l[j.pathname])}function N(x){if(x.defaultPrevented)return;let D=x.submitter&&x.submitter.hasAttribute("formaction")?x.submitter.getAttribute("formaction"):x.target.getAttribute("action");if(!D)return;if(!D.startsWith("https://action/")){const U=new URL(D,kg);if(D=i.parsePath(U.pathname+U.search),!D.startsWith(t))return}if(x.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const j=_A.get(D);if(j){x.preventDefault();const U=new FormData(x.target,x.submitter);j.call({r:i,f:x.target},x.target.enctype==="multipart/form-data"?U:new URLSearchParams(U))}}xp(["click","submit"]),document.addEventListener("click",p),n&&(document.addEventListener("mouseover",v),document.addEventListener("mouseout",C),document.addEventListener("focusin",y),document.addEventListener("touchstart",y)),document.addEventListener("submit",N),hs(()=>{document.removeEventListener("click",p),n&&(document.removeEventListener("mouseover",v),document.removeEventListener("mouseout",C),document.removeEventListener("focusin",y),document.removeEventListener("touchstart",y)),document.removeEventListener("submit",N)})}}function wA(n){const e=n.replace(/^.*?#/,"");if(!e.startsWith("/")){const[,t="/"]=window.location.hash.split("#",2);return`${t}#${e}`}return e}function vA(n){const e=()=>window.location.hash.slice(1),t=Pg();return pA({get:e,set({value:r,replace:i,scroll:s,state:o}){i?window.history.replaceState(WI(o),"","#"+r):window.history.pushState(o,"","#"+r);const l=r.indexOf("#"),u=l>=0?r.slice(l+1):"";gA(u,s),bh()},init:r=>mA(window,"hashchange",GI(r,i=>!t.confirm(i&&i<0?i:e()))),create:yA(n.preload,n.explicitLinks,n.actionBase),utils:{go:r=>window.history.go(r),renderPath:r=>`#${r}`,parsePath:wA,beforeLeave:t}})(n)}const Vg=Yn(),EA=["title","meta"],Af=[],Cf=["name","http-equiv","content","charset","media"].concat(["property"]),Sf=(n,e)=>{const t=Object.fromEntries(Object.entries(n.props).filter(([r])=>e.includes(r)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),n.tag+JSON.stringify(t)};function TA(){if(!Y.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,r=>r.parentNode.removeChild(r))}const n=new Map;function e(t){if(t.ref)return t.ref;let r=document.querySelector(`[data-sm="${t.id}"]`);return r?(r.tagName.toLowerCase()!==t.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(t.tag)),r.removeAttribute("data-sm")):r=document.createElement(t.tag),r}return{addTag(t){if(EA.indexOf(t.tag)!==-1){const s=t.tag==="title"?Af:Cf,o=Sf(t,s);n.has(o)||n.set(o,[]);let l=n.get(o),u=l.length;l=[...l,t],n.set(o,l);let h=e(t);t.ref=h,un(h,t.props);let p=null;for(var r=u-1;r>=0;r--)if(l[r]!=null){p=l[r];break}return h.parentNode!=document.head&&document.head.appendChild(h),p&&p.ref&&p.ref.parentNode&&document.head.removeChild(p.ref),u}let i=e(t);return t.ref=i,un(i,t.props),i.parentNode!=document.head&&document.head.appendChild(i),-1},removeTag(t,r){const i=t.tag==="title"?Af:Cf,s=Sf(t,i);if(t.ref){const o=n.get(s);if(o){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let l=r-1;l>=0;l--)o[l]!=null&&document.head.appendChild(o[l].ref)}o[r]=null,n.set(s,o)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const bA=n=>{const e=TA();return se(Vg.Provider,{value:e,get children(){return n.children}})},Fg=(n,e,t)=>(IA({tag:n,props:e,setting:t,id:Ow(),get name(){return e.name||e.property}}),null);function IA(n){const e=Sn(Vg);if(!e)throw new Error("<MetaProvider /> should be in the tree");Ve(()=>{const t=e.addTag(n);hs(()=>e.removeTag(n,t))})}const AA=n=>Fg("title",n,{escape:!0,close:!0}),CA=n=>Fg("link",n),Ug=Yn(),SA=()=>{const n=Sn(Ug);if(!n)throw new Error("Something went wrong when use theme context");return n},RA=n=>{const e=nA(),[t,r]=Le(""),[i,s]=Le(!1),[o,l]=Le(!1),[u,h]=Le(null),p=(C,N)=>{switch(C){case Hr.USER:h({id:N.id,name:N.name,username:N.username,password:""}),u()!==null&&Rg("NGL-USR",{id:N.id,name:N.name,username:N.username});break;case Hr.ROLE:r(N);break;case Hr.STATUS:l(N);break;default:qI("System","Something went wrong when updating data",Wr.ERROR);break}},y=()=>{["NGL-USR"].forEach(C=>bf(C)),e("/",{replace:!0}),l(!1),h(null),r("")},v=async()=>{if(o()||i())return;const C=$I("NGL-USR");if(!C||!C?.name||!C?.username){s(!0),["NGL-USR"].forEach(N=>bf(N));return}p(Hr.USER,C),p(Hr.STATUS,!0),p(Hr.ROLE,"user")};return ti(async()=>{await v()}),se(Ug.Provider,{value:{user:u,role:t,isLogged:o,updateData:p,logoutUser:y},get children(){return n.children}})},PA={useAuth:SA,AuthProvider:RA},Bg=Yn(),kA=()=>{const n=Sn(Bg);if(!n)throw new Error("Something went wrong when use meta context");return n},NA=n=>{const[e,t]=Le(Sc),r=i=>{!i||i==""?t(Sc):t(i+" | "+Sc)};return se(Bg.Provider,{value:{changeTitle:r},get children(){return[se(AA,{get children(){return e()}}),se(CA,{rel:"icon",href:"https://docs.solidjs.com/favicon.ico"}),ye(()=>n.children)]}})},DA={useMeta:kA,MetaProvider:NA},jg=Yn(),OA=()=>{const n=Sn(jg);if(!n)throw new Error("Something went wrong when use theme context");return n},xA=n=>{const[e,t]=Le(Bn.DARK),r=()=>{e()==Bn.LIGHT?t(Bn.DARK):t(Bn.LIGHT),Rg("data-theme",e().valueOf())};return ti(()=>{document.querySelector("html")?.setAttribute("data-theme",e().valueOf())}),ti(()=>{const i=zI("data-theme",Bn.LIGHT.valueOf());t(i==Bn.DARK.valueOf()?Bn.DARK:Bn.LIGHT)}),se(jg.Provider,{value:{theme:e,themeFunc:r},get children(){return n.children}})},LA={ThemeProvider:xA,useTheme:OA};function qg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function $g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MA=$g,Hg=new Po("auth","Firebase",$g());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Ml("@firebase/auth");function VA(n,...e){yl.logLevel<=le.WARN&&yl.warn(`Auth (${ps}): ${n}`,...e)}function Ya(n,...e){yl.logLevel<=le.ERROR&&yl.error(`Auth (${ps}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n,...e){throw Ah(n,...e)}function zg(n,...e){return Ah(n,...e)}function Wg(n,e,t){const r=Object.assign(Object.assign({},MA()),{[e]:t});return new Po("auth","Firebase",r).create(e,{appName:n.name})}function Xa(n){return Wg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ah(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Hg.create(n,...e)}function Te(n,e,...t){if(!n)throw Ah(e,...t)}function co(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ya(e),new Error(e)}function wl(n,e){n||co(e)}function FA(){return Pf()==="http:"||Pf()==="https:"}function Pf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FA()||Tv()||"connection"in navigator)?navigator.onLine:!0}function BA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){this.shortDelay=e,this.longDelay=t,wl(t>e,"Short delay should be less than long delay!"),this.isMobile=Bu()||Bp()}get(){return UA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(n,e){wl(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;co("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;co("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;co("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new Bo(3e4,6e4);function Kg(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xl(n,e,t,r,i={}){return Qg(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ju(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Gg.fetch()(Yg(n,n.config.apiHost,t,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Qg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},qA),e);try{const i=new HA(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ba(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(n,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wg(n,p,h);Rf(n,p)}}catch(i){if(i instanceof Xn)throw i;Rf(n,"network-request-failed",{message:String(i)})}}function Yg(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?jA(n.config,i):`${n.config.apiScheme}://${i}`}class HA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(zg(this.auth,"network-request-failed")),$A.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ba(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=zg(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(n,e){return Xl(n,"POST","/v1/accounts:delete",e)}async function Xg(n,e){return Xl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WA(n,e=!1){const t=Ot(n),r=await t.getIdToken(e),i=Jg(r);Te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:uo(xc(i.auth_time)),issuedAtTime:uo(xc(i.iat)),expirationTime:uo(xc(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function xc(n){return Number(n)*1e3}function Jg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const i=nl(t);return i?JSON.parse(i):(Ya("Failed to decode base64 JWT payload"),null)}catch(i){return Ya("Caught error parsing JWT payload as JSON",i?.toString()),null}}function kf(n){const e=Jg(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xn&&GA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function GA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await wu(n,Xg(t,{idToken:r}));Te(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Zg(s.providerUserInfo):[],l=YA(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!l?.length,p=u?h:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vu(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function QA(n){const e=Ot(n);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Zg(n){return n.map(e=>{var{providerId:t}=e,r=qg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(n,e){const t=await Qg(n,{},async()=>{const r=ju({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Yg(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Gg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JA(n,e){return Xl(n,"POST","/v2/accounts:revokeToken",Kg(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=kf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await XA(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ki;return r&&(Te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return co("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WA(this,e)}reload(){return QA(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ys(this.auth.app))return Promise.reject(Xa(this.auth));const e=await this.getIdToken();return await wu(this,zA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,u,h,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,C=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:z,emailVerified:G,isAnonymous:ae,providerData:re,stsTokenManager:R}=t;Te(z&&R,e,"internal-error");const b=Ki.fromJSON(this.name,R);Te(typeof z=="string",e,"internal-error"),hr(y,e.name),hr(v,e.name),Te(typeof G=="boolean",e,"internal-error"),Te(typeof ae=="boolean",e,"internal-error"),hr(C,e.name),hr(N,e.name),hr(x,e.name),hr(D,e.name),hr(j,e.name),hr(U,e.name);const I=new fr({uid:z,auth:e,email:v,emailVerified:G,displayName:y,isAnonymous:ae,photoURL:N,phoneNumber:C,tenantId:x,stsTokenManager:b,createdAt:j,lastLoginAt:U});return re&&Array.isArray(re)&&(I.providerData=re.map(A=>Object.assign({},A))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ki;i.updateFromServerResponse(t);const s=new fr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Zg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,l=new Ki;l.updateFromIdToken(r);const u=new fr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Map;function Yr(n){wl(n instanceof Function,"Expected a class definition");let e=Nf.get(n);return e?(wl(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}e_.type="NONE";const Df=e_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n,e,t){return`firebase:${n}:${e}:${t}`}class Qi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Lc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Lc("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qi(Yr(Df),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Yr(Df);const o=Lc(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(o);if(p){const y=fr._fromJSON(e,p);h!==s&&(l=y),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Qi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iC(e))return"Blackberry";if(sC(e))return"Webos";if(eC(e))return"Safari";if((e.includes("chrome/")||tC(e))&&!e.includes("edge/"))return"Chrome";if(rC(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ZA(n=hn()){return/firefox\//i.test(n)}function eC(n=hn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tC(n=hn()){return/crios\//i.test(n)}function nC(n=hn()){return/iemobile/i.test(n)}function rC(n=hn()){return/android/i.test(n)}function iC(n=hn()){return/blackberry/i.test(n)}function sC(n=hn()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n,e=[]){let t;switch(n){case"Browser":t=Of(hn());break;case"Worker":t=`${Of(hn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(n,e={}){return Xl(n,"GET","/v2/passwordPolicy",Kg(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=6;class cC{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:lC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xf(this),this.idTokenSubscription=new xf(this),this.beforeStateQueue=new oC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yr(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xg(this,{idToken:e}),r=await fr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ys(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ys(this.app))return Promise.reject(Xa(this));const t=e?Ot(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ys(this.app)?Promise.reject(Xa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ys(this.app)?Promise.reject(Xa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aC(this),t=new cC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await JA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[Yr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&VA(`Error while retrieving App Check token: ${t.error}`),t?.token}}function hC(n){return Ot(n)}class xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dv(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dC(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Yr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}new Bo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Bo(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Bo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Bo(5e3,15e3);var Lf="@firebase/auth",Mf="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mC(n){vr(new Wn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(n)},h=new uC(r,i,s,u);return dC(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vr(new Wn("auth-internal",e=>{const t=hC(e.getProvider("auth").getImmediate());return(r=>new fC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Lf,Mf,pC(n)),Qt(Lf,Mf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=5*60;wv("authIdTokenMaxAge");mC("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebasestorage.googleapis.com",_C="storageBucket",yC=2*60*1e3,wC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Xn{constructor(e,t,r=0){super(Mc(e),`Firebase Storage: ${t} (${Mc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Cn;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Cn||(Cn={}));function Mc(n){return"storage/"+n}function vC(){const n="An unknown error occurred, please check the error payload for server response.";return new Rn(Cn.UNKNOWN,n)}function EC(){return new Rn(Cn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TC(){return new Rn(Cn.CANCELED,"User canceled the upload/download.")}function bC(n){return new Rn(Cn.INVALID_URL,"Invalid URL '"+n+"'.")}function IC(n){return new Rn(Cn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Vf(n){return new Rn(Cn.INVALID_ARGUMENT,n)}function r_(){return new Rn(Cn.APP_DELETED,"The Firebase app was deleted.")}function AC(n){return new Rn(Cn.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=rn.makeFromUrl(e,t)}catch{return new rn(e,"")}if(r.path==="")return r;throw IC(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(G){G.path_=decodeURIComponent(G.path)}const p="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",C=new RegExp(`^https?://${y}/${p}/b/${i}/o${v}`,"i"),N={bucket:1,path:3},x=t===n_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",j=new RegExp(`^https?://${x}/${i}/${D}`,"i"),z=[{regex:l,indices:u,postModify:s},{regex:C,indices:N,postModify:h},{regex:j,indices:{bucket:1,path:2},postModify:h}];for(let G=0;G<z.length;G++){const ae=z[G],re=ae.regex.exec(e);if(re){const R=re[ae.indices.bucket];let b=re[ae.indices.path];b||(b=""),r=new rn(R,b),ae.postModify(r);break}}if(r==null)throw bC(e);return r}}class CC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(n,e,t){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function p(...D){h||(h=!0,e.apply(null,D))}function y(D){i=setTimeout(()=>{i=null,n(C,u())},D)}function v(){s&&clearTimeout(s)}function C(D,...j){if(h){v();return}if(D){v(),p.call(null,D,...j);return}if(u()||o){v(),p.call(null,D,...j);return}r<64&&(r*=2);let z;l===1?(l=2,z=0):z=(r+Math.random())*1e3,y(z)}let N=!1;function x(D){N||(N=!0,v(),!h&&(i!==null?(D||(l=2),clearTimeout(i),y(0)):D||(l=1)))}return y(0),s=setTimeout(()=>{o=!0,x(!0)},t),x}function RC(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(n){return n!==void 0}function Ff(n,e,t,r){if(r<e)throw Vf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Vf(`Invalid value for '${n}'. Expected ${t} or less.`)}function kC(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var El;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(El||(El={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,t,r,i,s,o,l,u,h,p,y,v=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=y,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ja(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===El.NO_ERROR,u=s.getStatus();if(!l||NC(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===El.ABORT;r(!1,new ja(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new ja(h,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());PC(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=vC();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?r_():TC();o(u)}else{const u=EC();o(u)}};this.canceled_?t(!1,new ja(!1,null,!0)):this.backoffId_=SC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&RC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ja{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function OC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function MC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function VC(n,e,t,r,i,s,o=!0){const l=kC(n.urlParams),u=n.url+l,h=Object.assign({},n.headers);return LC(h,e),OC(h,t),xC(h,s),MC(h,r),new DC(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function UC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this._service=e,t instanceof rn?this._location=t:this._location=rn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Tl(e,t)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UC(this._location.path)}get storage(){return this._service}get parent(){const e=FC(this._location.path);if(e===null)return null;const t=new rn(this._location.bucket,e);return new Tl(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw AC(e)}}function Uf(n,e){const t=e?.[_C];return t==null?null:rn.makeFromBucketSpec(t,n)}class BC{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=n_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yC,this._maxUploadRetryTime=wC,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=Uf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=Uf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ff("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ff("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tl(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new CC(r_());{const o=VC(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Bf="@firebase/storage",jf="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="storage";function qC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new BC(t,r,i,e,ps)}function $C(){vr(new Wn(jC,qC,"PUBLIC").setMultipleInstances(!0)),Qt(Bf,jf,""),Qt(Bf,jf,"esm2017")}$C();var qf={};const $f="@firebase/database",Hf="1.0.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_="";function HC(n){i_=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zC(e)}}catch{}return new WC},Xr=s_("localStorage"),GC=s_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Ml("@firebase/database"),KC=function(){let n=1;return function(){return n++}}(),o_=function(n){const e=Mv(n),t=new Nv;t.update(e);const r=t.digest();return Fu.encodeByteArray(r)},jo=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=jo.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let ho=null,zf=!0;const QC=function(n,e){q(!e,"Can't turn on custom loggers persistently."),Yi.logLevel=le.VERBOSE,ho=Yi.log.bind(Yi)},wt=function(...n){if(zf===!0&&(zf=!1,ho===null&&GC.get("logging_enabled")===!0&&QC()),ho){const e=jo.apply(null,n);ho(e)}},qo=function(n){return function(...e){wt(n,...e)}},Eu=function(...n){const e="FIREBASE INTERNAL ERROR: "+jo(...n);Yi.error(e)},ai=function(...n){const e=`FIREBASE FATAL ERROR: ${jo(...n)}`;throw Yi.error(e),new Error(e)},Bt=function(...n){const e="FIREBASE WARNING: "+jo(...n);Yi.warn(e)},YC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},a_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},XC=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},cs="[MIN_NAME]",li="[MAX_NAME]",vs=function(n,e){if(n===e)return 0;if(n===cs||e===li)return-1;if(e===cs||n===li)return 1;{const t=Wf(n),r=Wf(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},JC=function(n,e){return n===e?0:n<e?-1:1},Ws=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ct(e))},Ch=function(n){if(typeof n!="object"||n===null)return ct(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=ct(e[r]),t+=":",t+=Ch(n[e[r]]);return t+="}",t},l_=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Yt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const c_=function(n){q(!a_(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,l,u;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=l+r,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const h=[];for(u=t;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const p=h.join("");let y="";for(u=0;u<64;u+=8){let v=parseInt(p.substr(u,8),2).toString(16);v.length===1&&(v="0"+v),y=y+v}return y.toLowerCase()},ZC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tS=new RegExp("^-?(0*)\\d{1,10}$"),nS=-2147483648,rS=2147483647,Wf=function(n){if(tS.test(n)){const e=Number(n);if(e>=nS&&e<=rS)return e}return null},$o=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Bt("Exception was thrown by user callback.",t),e},Math.floor(0))}},iS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="5",u_="v",h_="s",d_="r",f_="f",p_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,m_="ls",g_="p",Tu="ac",__="websocket",y_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,r,i,s=!1,o="",l=!1,u=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function lS(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function w_(n,e,t){q(typeof e=="string","typeof type must == string"),q(typeof t=="object","typeof params must == object");let r;if(e===__)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===y_)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lS(n)&&(t.ns=n.namespace);const i=[];return Yt(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.counters_={}}incrementCounter(e,t=1){Jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return hv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc={},Fc={};function Rh(n){const e=n.toString();return Vc[e]||(Vc[e]=new cS),Vc[e]}function uS(n,e){const t=n.toString();return Fc[t]||(Fc[t]=e()),Fc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$o(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="start",dS="close",fS="pLPCommand",pS="pRTLPCB",v_="id",E_="pw",T_="ser",mS="cb",gS="seg",_S="ts",yS="d",wS="dframe",b_=1870,I_=30,vS=b_-I_,ES=25e3,TS=3e4;class $i{constructor(e,t,r,i,s,o,l){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qo(e),this.stats_=Rh(t),this.urlFn=u=>(this.appCheckToken&&(u[Tu]=this.appCheckToken),w_(t,y_,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TS)),XC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ph((...s)=>{const[o,l,u,h,p]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gf)this.id=l,this.password=u;else if(o===dS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Gf]="t",r[T_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[u_]=Sh,this.transportSessionId&&(r[h_]=this.transportSessionId),this.lastSessionId&&(r[m_]=this.lastSessionId),this.applicationId&&(r[g_]=this.applicationId),this.appCheckToken&&(r[Tu]=this.appCheckToken),typeof location<"u"&&location.hostname&&p_.test(location.hostname)&&(r[d_]=f_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$i.forceAllow_=!0}static forceDisallow(){$i.forceDisallow_=!0}static isAvailable(){return $i.forceAllow_?!0:!$i.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZC()&&!eS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Vp(t),i=l_(r,vS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[wS]="t",r[v_]=e,r[E_]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ph{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KC(),window[fS+this.uniqueCallbackIdentifier]=e,window[pS+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ph.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){wt("frame writing exception"),l.stack&&wt(l.stack),wt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[v_]=this.myID,e[E_]=this.myPW,e[T_]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I_+r.length<=b_;){const o=this.pendingSegs.shift();r=r+"&"+gS+i+"="+o.seg+"&"+_S+i+"="+o.ts+"&"+yS+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(ES)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=16384,IS=45e3;let bl=null;typeof MozWebSocket<"u"?bl=MozWebSocket:typeof WebSocket<"u"&&(bl=WebSocket);class tn{constructor(e,t,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qo(this.connId),this.stats_=Rh(t),this.connURL=tn.connectionURL_(t,o,l,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[u_]=Sh,typeof location<"u"&&location.hostname&&p_.test(location.hostname)&&(o[d_]=f_),t&&(o[h_]=t),r&&(o[m_]=r),i&&(o[Tu]=i),s&&(o[g_]=s),w_(e,__,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xr.set("previous_websocket_failure",!0);try{let r;jp(),this.mySock=new bl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bl!==null&&!tn.forceDisallow_}static previouslyFailed(){return Xr.isInMemoryStorage||Xr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=yo(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(q(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=l_(t,bS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IS))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$i,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=tn&&tn.isAvailable();let r=t&&!tn.previouslyFailed();if(e.webSocketOnly&&(t||Bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of So.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);So.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}So.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=6e4,CS=5e3,SS=10*1024,RS=100*1024,Uc="t",Kf="d",PS="s",Qf="r",kS="e",Yf="o",Xf="a",Jf="n",Zf="p",NS="h";class DS{constructor(e,t,r,i,s,o,l,u,h,p){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qo("c:"+this.id+":"),this.transportManager_=new So(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uc in e){const t=e[Uc];t===Xf?this.upgradeIfSecondaryHealthy_():t===Qf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Yf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ws("t",e),r=Ws("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ws("t",e),r=Ws("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ws(Uc,e);if(Kf in e){const r=e[Kf];if(t===NS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Jf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===PS?this.onConnectionShutdown_(r):t===Qf?this.onReset_(r):t===kS?Eu("Server Error: "+r):t===Yf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Eu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Sh!==r&&Bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.allowedEvents_=e,this.listeners_={},q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){q(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends C_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Il}getInitialEvent(e){return q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=32,tp=768;class De{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ae(){return new De("")}function pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ir(n){return n.pieces_.length-n.pieceNum_}function ke(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new De(n.pieces_,e)}function S_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function OS(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function R_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function P_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new De(e,0)}function it(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof De)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new De(t,0)}function he(n){return n.pieceNum_>=n.pieces_.length}function Kt(n,e){const t=pe(n),r=pe(e);if(t===null)return e;if(t===r)return Kt(ke(n),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function k_(n,e){if(Ir(n)!==Ir(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function sn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Ir(n)>Ir(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class xS{constructor(e,t){this.errorPrefix_=t,this.parts_=R_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ll(this.parts_[r]);N_(this)}}function LS(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ll(e),N_(n)}function MS(n){const e=n.parts_.pop();n.byteLength_-=Ll(e),n.parts_.length>0&&(n.byteLength_-=1)}function N_(n){if(n.byteLength_>tp)throw new Error(n.errorPrefix_+"has a key path longer than "+tp+" bytes ("+n.byteLength_+").");if(n.parts_.length>ep)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ep+") or object contains a cycle "+zr(n))}function zr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends C_{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new kh}getInitialEvent(e){return q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=1e3,VS=60*5*1e3,np=30*1e3,FS=1.3,US=3e4,BS="server_kill",rp=3;class zn extends A_{constructor(e,t,r,i,s,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=zn.nextPersistentConnectionId_++,this.log_=qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gs,this.maxReconnectDelay_=VS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!jp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(ct(s)),q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Uu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),q(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const u=l.d,h=l.s;zn.warnOnListenWarnings_(u,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Jn(e,"w")){const r=Ji(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=np)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Pv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Eu("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>US&&(this.reconnectDelay_=Gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},h=function(y){q(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(y)};this.realtime_={close:u,sendRequest:h};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,v]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=v&&v.token,l=new DS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,C=>{Bt(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(BS)},s))}catch(y){this.log_("Failed to get token: "+y),o||(this.repoInfo_.nodeAdmin&&Bt(y),u())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sd(this.interruptReasons_)&&(this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Ch(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new De(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){wt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rp&&(this.reconnectDelay_=np,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){wt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+i_.replace(/\./g,"-")]=1,Bu()?e["framework.cordova"]=1:Bp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Il.getInstance().currentlyOnline();return Sd(this.interruptReasons_)&&e}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new me(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new me(cs,e),i=new me(cs,t);return this.compare(r,i)!==0}minPost(){return me.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class D_ extends Jl{static get __EMPTY_NODE(){return qa}static set __EMPTY_NODE(e){qa=e}compare(e,t){return vs(e.name,t.name)}isDefinedOn(e){throw fs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return me.MIN}maxPost(){return new me(li,qa)}makePost(e,t){return q(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,qa)}toString(){return".key"}}const Xi=new D_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??rt.RED,this.left=i??Nt.EMPTY_NODE,this.right=s??Nt.EMPTY_NODE}copy(e,t,r,i,s){return new rt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Nt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class jS{copy(e,t,r,i,s){return this}insert(e,t,r){return new rt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,t=Nt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Nt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $a(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $a(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $a(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $a(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new jS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(n,e){return vs(n.name,e.name)}function Nh(n,e){return vs(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;function $S(n){bu=n}const O_=function(n){return typeof n=="number"?"number:"+c_(n):"string:"+n},x_=function(n){if(n.isLeafNode()){const e=n.val();q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jn(e,".sv"),"Priority must be a string or number.")}else q(n===bu||n.isEmpty(),"priority of unexpected type.");q(n===bu||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip;class tt{constructor(e,t=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),x_(this.priorityNode_)}static set __childrenNodeConstructor(e){ip=e}static get __childrenNodeConstructor(){return ip}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:pe(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=pe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(q(r!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+O_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=c_(this.value_):e+=this.value_,this.lazyHash_=o_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(t),s=tt.VALUE_TYPE_ORDER.indexOf(r);return q(i>=0,"Unknown leaf type: "+t),q(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L_,M_;function HS(n){L_=n}function zS(n){M_=n}class WS extends Jl{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?vs(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return me.MIN}maxPost(){return new me(li,new tt("[PRIORITY-POST]",M_))}makePost(e,t){const r=L_(e);return new me(t,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Tt=new WS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=Math.log(2);class KS{constructor(e){const t=s=>parseInt(Math.log(s)/GS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Al=function(n,e,t,r){n.sort(e);const i=function(u,h){const p=h-u;let y,v;if(p===0)return null;if(p===1)return y=n[u],v=t?t(y):y,new rt(v,y.node,rt.BLACK,null,null);{const C=parseInt(p/2,10)+u,N=i(u,C),x=i(C+1,h);return y=n[C],v=t?t(y):y,new rt(v,y.node,rt.BLACK,N,x)}},s=function(u){let h=null,p=null,y=n.length;const v=function(N,x){const D=y-N,j=y;y-=N;const U=i(D+1,j),z=n[D],G=t?t(z):z;C(new rt(G,z.node,x,null,U))},C=function(N){h?(h.left=N,h=N):(p=N,h=N)};for(let N=0;N<u.count;++N){const x=u.nextBitIsOne(),D=Math.pow(2,u.count-(N+1));x?v(D,rt.BLACK):(v(D,rt.BLACK),v(D,rt.RED))}return p},o=new KS(n.length),l=s(o);return new Nt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;const Fi={};class $n{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return q(Fi&&Tt,"ChildrenNode.ts has not been loaded"),Bc=Bc||new $n({".priority":Fi},{".priority":Tt}),Bc}get(e){const t=Ji(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Nt?t:null}hasIndex(e){return Jn(this.indexSet_,e.toString())}addIndex(e,t){q(e!==Xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(me.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Al(r,e.getCompare()):l=Fi;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const p=Object.assign({},this.indexes_);return p[u]=l,new $n(p,h)}addToIndexes(e,t){const r=rl(this.indexes_,(i,s)=>{const o=Ji(this.indexSet_,s);if(q(o,"Missing index implementation for "+s),i===Fi)if(o.isDefinedOn(e.node)){const l=[],u=t.getIterator(me.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&l.push(h),h=u.getNext();return l.push(e),Al(l,o.getCompare())}else return Fi;else{const l=t.get(e.name);let u=i;return l&&(u=u.remove(new me(e.name,l))),u.insert(e,e.node)}});return new $n(r,this.indexSet_)}removeFromIndexes(e,t){const r=rl(this.indexes_,i=>{if(i===Fi)return i;{const s=t.get(e.name);return s?i.remove(new me(e.name,s)):i}});return new $n(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;class be{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&x_(this.priorityNode_),this.children_.isEmpty()&&q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ks||(Ks=new be(new Nt(Nh),null,$n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ks}updatePriority(e){return this.children_.isEmpty()?this:new be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ks:t}}getChild(e){const t=pe(e);return t===null?this:this.getImmediateChild(t).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(q(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new me(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ks:this.priorityNode_;return new be(i,o,s)}}updateChild(e,t){const r=pe(e);if(r===null)return t;{q(pe(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ke(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(Tt,(o,l)=>{t[o]=l.val(e),r++,s&&be.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+O_(this.getPriority().val())+":"),this.forEachChild(Tt,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":o_(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new me(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new me(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,me.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ho?-1:0}withIndex(e){if(e===Xi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new be(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Tt),i=t.getIterator(Tt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xi?null:this.indexMap_.get(e.toString())}}be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QS extends be{constructor(){super(new Nt(Nh),be.EMPTY_NODE,$n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return be.EMPTY_NODE}isEmpty(){return!1}}const Ho=new QS;Object.defineProperties(me,{MIN:{value:new me(cs,be.EMPTY_NODE)},MAX:{value:new me(li,Ho)}});D_.__EMPTY_NODE=be.EMPTY_NODE;tt.__childrenNodeConstructor=be;$S(Ho);zS(Ho);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=!0;function vt(n,e=null){if(n===null)return be.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new tt(t,vt(e))}if(!(n instanceof Array)&&YS){const t=[];let r=!1;if(Yt(n,(o,l)=>{if(o.substring(0,1)!=="."){const u=vt(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),t.push(new me(o,u)))}}),t.length===0)return be.EMPTY_NODE;const s=Al(t,qS,o=>o.name,Nh);if(r){const o=Al(t,Tt.getCompare());return new be(s,vt(e),new $n({".priority":o},{".priority":Tt}))}else return new be(s,vt(e),$n.Default)}else{let t=be.EMPTY_NODE;return Yt(n,(r,i)=>{if(Jn(n,r)&&r.substring(0,1)!=="."){const s=vt(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(vt(e))}}HS(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS extends Jl{constructor(e){super(),this.indexPath_=e,q(!he(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?vs(e.name,t.name):s}makePost(e,t){const r=vt(e),i=be.EMPTY_NODE.updateChild(this.indexPath_,r);return new me(t,i)}maxPost(){const e=be.EMPTY_NODE.updateChild(this.indexPath_,Ho);return new me(li,e)}toString(){return R_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS extends Jl{compare(e,t){const r=e.node.compareTo(t.node);return r===0?vs(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,t){const r=vt(e);return new me(t,r)}toString(){return".value"}}const ZS=new JS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(n){return{type:"value",snapshotNode:n}}function tR(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function nR(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sp(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rR(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cs}hasEnd(){return this.endSet_}getIndexEndValue(){return q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:li}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new Dh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function op(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Tt?t="$priority":n.index_===ZS?t="$value":n.index_===Xi?t="$key":(q(n.index_ instanceof XS,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ct(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=ct(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+ct(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=ct(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+ct(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ap(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Tt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends A_{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Cl.getListenId_(e,r),l={};this.listens_[o]=l;const u=op(e._queryParams);this.restRequest_(s+".json",u,(h,p)=>{let y=p;if(h===404&&(y=null,h=null),h===null&&this.onDataUpdate_(s,y,!1,r),Ji(this.listens_,o)===l){let v;h?h===401?v="permission_denied":v="rest_error:"+h:v="ok",i(v,null)}})}unlisten(e,t){const r=Cl.getListenId_(e,t);delete this.listens_[r]}get(e){const t=op(e._queryParams),r=e._path.toString(),i=new Uu;return this.restRequest_(r+".json",t,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ju(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=yo(l.responseText)}catch{Bt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Bt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.rootNode_=be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return{value:null,children:new Map}}function V_(n,e,t){if(he(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=pe(e);n.children.has(r)||n.children.set(r,Sl());const i=n.children.get(r);e=ke(e),V_(i,e,t)}}function Iu(n,e,t){n.value!==null?t(e,n.value):sR(n,(r,i)=>{const s=new De(e.toString()+"/"+r);Iu(i,s,t)})}function sR(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Yt(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=10*1e3,aR=30*1e3,lR=5*60*1e3;class cR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new oR(e);const r=lp+(aR-lp)*Math.random();fo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Yt(e,(i,s)=>{s>0&&Jn(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*lR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function F_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function U_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function B_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=En.ACK_USER_WRITE,this.source=F_()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new De(e));return new Rl(Ae(),t,this.revert)}}else return q(pe(this.path)===e,"operationForChild called for unrelated child."),new Rl(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=En.OVERWRITE}operationForChild(e){return he(this.path)?new ci(this.source,Ae(),this.snap.getImmediateChild(e)):new ci(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=En.MERGE}operationForChild(e){if(he(this.path)){const t=this.children.subtree(new De(e));return t.isEmpty()?null:t.value?new ci(this.source,Ae(),t.value):new Ro(this.source,Ae(),t)}else return q(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ro(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const t=pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function uR(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(rR(o.childName,o.snapshotNode))}),Qs(n,i,"child_removed",e,r,t),Qs(n,i,"child_added",e,r,t),Qs(n,i,"child_moved",s,r,t),Qs(n,i,"child_changed",e,r,t),Qs(n,i,"value",e,r,t),i}function Qs(n,e,t,r,i,s){const o=r.filter(l=>l.type===t);o.sort((l,u)=>dR(n,l,u)),o.forEach(l=>{const u=hR(n,l,s);i.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(u,n.query_))})})}function hR(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function dR(n,e,t){if(e.childName==null||t.childName==null)throw fs("Should only compare child_ events.");const r=new me(e.childName,e.snapshotNode),i=new me(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n,e){return{eventCache:n,serverCache:e}}function po(n,e,t,r){return j_(new Oh(e,t,r),n.serverCache)}function q_(n,e,t,r){return j_(n.eventCache,new Oh(e,t,r))}function Au(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ui(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;const fR=()=>(jc||(jc=new Nt(JC)),jc);class Pe{constructor(e,t=fR()){this.value=e,this.children=t}static fromObject(e){let t=new Pe(null);return Yt(e,(r,i)=>{t=t.set(new De(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ae(),value:this.value};if(he(e))return null;{const r=pe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ke(e),t);return s!=null?{path:it(new De(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const t=pe(e),r=this.children.get(t);return r!==null?r.subtree(ke(e)):new Pe(null)}}set(e,t){if(he(e))return new Pe(t,this.children);{const r=pe(e),s=(this.children.get(r)||new Pe(null)).set(ke(e),t),o=this.children.insert(r,s);return new Pe(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const t=pe(e),r=this.children.get(t);if(r){const i=r.remove(ke(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new Pe(null):new Pe(this.value,s)}else return this}}get(e){if(he(e))return this.value;{const t=pe(e),r=this.children.get(t);return r?r.get(ke(e)):null}}setTree(e,t){if(he(e))return t;{const r=pe(e),s=(this.children.get(r)||new Pe(null)).setTree(ke(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Pe(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(it(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ae(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(he(e))return null;{const s=pe(e),o=this.children.get(s);return o?o.findOnPath_(ke(e),it(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ae(),t)}foreachOnPath_(e,t,r){if(he(e))return this;{this.value&&r(t,this.value);const i=pe(e),s=this.children.get(i);return s?s.foreachOnPath_(ke(e),it(t,i),r):new Pe(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(it(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Pe(null))}}function mo(n,e,t){if(he(e))return new an(new Pe(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Kt(i,e);return s=s.updateChild(o,t),new an(n.writeTree_.set(i,s))}else{const i=new Pe(t),s=n.writeTree_.setTree(e,i);return new an(s)}}}function cp(n,e,t){let r=n;return Yt(t,(i,s)=>{r=mo(r,it(e,i),s)}),r}function up(n,e){if(he(e))return an.empty();{const t=n.writeTree_.setTree(e,new Pe(null));return new an(t)}}function Cu(n,e){return fi(n,e)!=null}function fi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Kt(t.path,e)):null}function hp(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Tt,(r,i)=>{e.push(new me(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new me(r,i.value))}),e}function yr(n,e){if(he(e))return n;{const t=fi(n,e);return t!=null?new an(new Pe(t)):new an(n.writeTree_.subtree(e))}}function Su(n){return n.writeTree_.isEmpty()}function us(n,e){return $_(Ae(),n.writeTree_,e)}function $_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(q(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=$_(it(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(it(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n,e){return Q_(e,n)}function pR(n,e,t,r,i){q(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=mo(n.visibleWrites,e,t)),n.lastWriteId=r}function mR(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function gR(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);q(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&_R(l,r.path)?i=!1:sn(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return yR(n),!0;if(r.snap)n.visibleWrites=up(n.visibleWrites,r.path);else{const l=r.children;Yt(l,u=>{n.visibleWrites=up(n.visibleWrites,it(r.path,u))})}return!0}else return!1}function _R(n,e){if(n.snap)return sn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&sn(it(n.path,t),e))return!0;return!1}function yR(n){n.visibleWrites=z_(n.allWrites,wR,Ae()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function wR(n){return n.visible}function z_(n,e,t){let r=an.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let l;if(s.snap)sn(t,o)?(l=Kt(t,o),r=mo(r,l,s.snap)):sn(o,t)&&(l=Kt(o,t),r=mo(r,Ae(),s.snap.getChild(l)));else if(s.children){if(sn(t,o))l=Kt(t,o),r=cp(r,l,s.children);else if(sn(o,t))if(l=Kt(o,t),he(l))r=cp(r,Ae(),s.children);else{const u=Ji(s.children,pe(l));if(u){const h=u.getChild(ke(l));r=mo(r,Ae(),h)}}}else throw fs("WriteRecord should have .snap or .children")}}return r}function W_(n,e,t,r,i){if(!r&&!i){const s=fi(n.visibleWrites,e);if(s!=null)return s;{const o=yr(n.visibleWrites,e);if(Su(o))return t;if(t==null&&!Cu(o,Ae()))return null;{const l=t||be.EMPTY_NODE;return us(o,l)}}}else{const s=yr(n.visibleWrites,e);if(!i&&Su(s))return t;if(!i&&t==null&&!Cu(s,Ae()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(sn(h.path,e)||sn(e,h.path))},l=z_(n.allWrites,o,e),u=t||be.EMPTY_NODE;return us(l,u)}}}function vR(n,e,t){let r=be.EMPTY_NODE;const i=fi(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Tt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=yr(n.visibleWrites,e);return t.forEachChild(Tt,(o,l)=>{const u=us(yr(s,new De(o)),l);r=r.updateImmediateChild(o,u)}),hp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yr(n.visibleWrites,e);return hp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ER(n,e,t,r,i){q(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=it(e,t);if(Cu(n.visibleWrites,s))return null;{const o=yr(n.visibleWrites,s);return Su(o)?i.getChild(t):us(o,i.getChild(t))}}function TR(n,e,t,r){const i=it(e,t),s=fi(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=yr(n.visibleWrites,i);return us(o,r.getNode().getImmediateChild(t))}else return null}function bR(n,e){return fi(n.visibleWrites,e)}function IR(n,e,t,r,i,s,o){let l;const u=yr(n.visibleWrites,e),h=fi(u,Ae());if(h!=null)l=h;else if(t!=null)l=us(u,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const p=[],y=o.getCompare(),v=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let C=v.getNext();for(;C&&p.length<i;)y(C,r)!==0&&p.push(C),C=v.getNext();return p}else return[]}function AR(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Ru(n,e,t,r){return W_(n.writeTree,n.treePath,e,t,r)}function G_(n,e){return vR(n.writeTree,n.treePath,e)}function dp(n,e,t,r){return ER(n.writeTree,n.treePath,e,t,r)}function Pl(n,e){return bR(n.writeTree,it(n.treePath,e))}function CR(n,e,t,r,i,s){return IR(n.writeTree,n.treePath,e,t,r,i,s)}function xh(n,e,t){return TR(n.writeTree,n.treePath,e,t)}function K_(n,e){return Q_(it(n.treePath,e),n.writeTree)}function Q_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;q(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),q(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,sp(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,nR(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,tR(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,sp(r,e.snapshotNode,i.oldSnap));else throw fs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Y_=new RR;class Lh{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Oh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xh(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ui(this.viewCache_),s=CR(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}function PR(n,e){q(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),q(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function kR(n,e,t,r,i){const s=new SR;let o,l;if(t.type===En.OVERWRITE){const h=t;h.source.fromUser?o=Pu(n,e,h.path,h.snap,r,i,s):(q(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!he(h.path),o=kl(n,e,h.path,h.snap,r,i,l,s))}else if(t.type===En.MERGE){const h=t;h.source.fromUser?o=DR(n,e,h.path,h.children,r,i,s):(q(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),o=ku(n,e,h.path,h.children,r,i,l,s))}else if(t.type===En.ACK_USER_WRITE){const h=t;h.revert?o=LR(n,e,h.path,r,i,s):o=OR(n,e,h.path,h.affectedTree,r,i,s)}else if(t.type===En.LISTEN_COMPLETE)o=xR(n,e,t.path,r,s);else throw fs("Unknown operation type: "+t.type);const u=s.getChanges();return NR(e,o,u),{viewCache:o,changes:u}}function NR(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Au(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(eR(Au(e)))}}function X_(n,e,t,r,i,s){const o=e.eventCache;if(Pl(r,t)!=null)return e;{let l,u;if(he(t))if(q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=ui(e),p=h instanceof be?h:be.EMPTY_NODE,y=G_(r,p);l=n.filter.updateFullNode(e.eventCache.getNode(),y,s)}else{const h=Ru(r,ui(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=pe(t);if(h===".priority"){q(Ir(t)===1,"Can't have a priority with additional path components");const p=o.getNode();u=e.serverCache.getNode();const y=dp(r,t,p,u);y!=null?l=n.filter.updatePriority(p,y):l=o.getNode()}else{const p=ke(t);let y;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const v=dp(r,t,o.getNode(),u);v!=null?y=o.getNode().getImmediateChild(h).updateChild(p,v):y=o.getNode().getImmediateChild(h)}else y=xh(r,h,e.serverCache);y!=null?l=n.filter.updateChild(o.getNode(),h,y,p,i,s):l=o.getNode()}}return po(e,l,o.isFullyInitialized()||he(t),n.filter.filtersNodes())}}function kl(n,e,t,r,i,s,o,l){const u=e.serverCache;let h;const p=o?n.filter:n.filter.getIndexedFilter();if(he(t))h=p.updateFullNode(u.getNode(),r,null);else if(p.filtersNodes()&&!u.isFiltered()){const C=u.getNode().updateChild(t,r);h=p.updateFullNode(u.getNode(),C,null)}else{const C=pe(t);if(!u.isCompleteForPath(t)&&Ir(t)>1)return e;const N=ke(t),D=u.getNode().getImmediateChild(C).updateChild(N,r);C===".priority"?h=p.updatePriority(u.getNode(),D):h=p.updateChild(u.getNode(),C,D,N,Y_,null)}const y=q_(e,h,u.isFullyInitialized()||he(t),p.filtersNodes()),v=new Lh(i,y,s);return X_(n,y,t,i,v,l)}function Pu(n,e,t,r,i,s,o){const l=e.eventCache;let u,h;const p=new Lh(i,e,s);if(he(t))h=n.filter.updateFullNode(e.eventCache.getNode(),r,o),u=po(e,h,!0,n.filter.filtersNodes());else{const y=pe(t);if(y===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),r),u=po(e,h,l.isFullyInitialized(),l.isFiltered());else{const v=ke(t),C=l.getNode().getImmediateChild(y);let N;if(he(v))N=r;else{const x=p.getCompleteChild(y);x!=null?S_(v)===".priority"&&x.getChild(P_(v)).isEmpty()?N=x:N=x.updateChild(v,r):N=be.EMPTY_NODE}if(C.equals(N))u=e;else{const x=n.filter.updateChild(l.getNode(),y,N,v,p,o);u=po(e,x,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function fp(n,e){return n.eventCache.isCompleteForChild(e)}function DR(n,e,t,r,i,s,o){let l=e;return r.foreach((u,h)=>{const p=it(t,u);fp(e,pe(p))&&(l=Pu(n,l,p,h,i,s,o))}),r.foreach((u,h)=>{const p=it(t,u);fp(e,pe(p))||(l=Pu(n,l,p,h,i,s,o))}),l}function pp(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ku(n,e,t,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;he(t)?h=r:h=new Pe(null).setTree(t,r);const p=e.serverCache.getNode();return h.children.inorderTraversal((y,v)=>{if(p.hasChild(y)){const C=e.serverCache.getNode().getImmediateChild(y),N=pp(n,C,v);u=kl(n,u,new De(y),N,i,s,o,l)}}),h.children.inorderTraversal((y,v)=>{const C=!e.serverCache.isCompleteForChild(y)&&v.value===null;if(!p.hasChild(y)&&!C){const N=e.serverCache.getNode().getImmediateChild(y),x=pp(n,N,v);u=kl(n,u,new De(y),x,i,s,o,l)}}),u}function OR(n,e,t,r,i,s,o){if(Pl(i,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(he(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return kl(n,e,t,u.getNode().getChild(t),i,s,l,o);if(he(t)){let h=new Pe(null);return u.getNode().forEachChild(Xi,(p,y)=>{h=h.set(new De(p),y)}),ku(n,e,t,h,i,s,l,o)}else return e}else{let h=new Pe(null);return r.foreach((p,y)=>{const v=it(t,p);u.isCompleteForPath(v)&&(h=h.set(p,u.getNode().getChild(v)))}),ku(n,e,t,h,i,s,l,o)}}function xR(n,e,t,r,i){const s=e.serverCache,o=q_(e,s.getNode(),s.isFullyInitialized()||he(t),s.isFiltered());return X_(n,o,t,r,Y_,i)}function LR(n,e,t,r,i,s){let o;if(Pl(r,t)!=null)return e;{const l=new Lh(r,e,i),u=e.eventCache.getNode();let h;if(he(t)||pe(t)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=Ru(r,ui(e));else{const y=e.serverCache.getNode();q(y instanceof be,"serverChildren would be complete if leaf node"),p=G_(r,y)}p=p,h=n.filter.updateFullNode(u,p,s)}else{const p=pe(t);let y=xh(r,p,e.serverCache);y==null&&e.serverCache.isCompleteForChild(p)&&(y=u.getImmediateChild(p)),y!=null?h=n.filter.updateChild(u,p,y,ke(t),l,s):e.eventCache.getNode().hasChild(p)?h=n.filter.updateChild(u,p,be.EMPTY_NODE,ke(t),l,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ru(r,ui(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Pl(r,Ae())!=null,po(e,h,o,n.filter.filtersNodes())}}function MR(n,e){const t=ui(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!he(e)&&!t.getImmediateChild(pe(e)).isEmpty())?t.getChild(e):null}function mp(n,e,t,r){e.type===En.MERGE&&e.source.queryId!==null&&(q(ui(n.viewCache_),"We should always have a full cache before handling merges"),q(Au(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=kR(n.processor_,i,e,t,r);return PR(n.processor_,s.viewCache),q(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,VR(n,s.changes,s.viewCache.eventCache.getNode())}function VR(n,e,t,r){const i=n.eventRegistrations_;return uR(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gp;function FR(n){q(!gp,"__referenceConstructor has already been defined"),gp=n}function Mh(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return q(s!=null,"SyncTree gave us an op for an invalid query."),mp(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(mp(o,e,t,r));return s}}function Vh(n,e){let t=null;for(const r of n.views.values())t=t||MR(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p;function UR(n){q(!_p,"__referenceConstructor has already been defined"),_p=n}class yp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=AR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function BR(n,e,t,r,i){return pR(n.pendingWriteTree_,e,t,r,i),i?ec(n,new ci(F_(),e,t)):[]}function Hi(n,e,t=!1){const r=mR(n.pendingWriteTree_,e);if(gR(n.pendingWriteTree_,e)){let s=new Pe(null);return r.snap!=null?s=s.set(Ae(),!0):Yt(r.children,o=>{s=s.set(new De(o),!0)}),ec(n,new Rl(r.path,s,t))}else return[]}function Zl(n,e,t){return ec(n,new ci(U_(),e,t))}function jR(n,e,t){const r=Pe.fromObject(t);return ec(n,new Ro(U_(),e,r))}function qR(n,e,t,r){const i=ty(n,r);if(i!=null){const s=ny(i),o=s.path,l=s.queryId,u=Kt(o,e),h=new ci(B_(l),u,t);return ry(n,o,h)}else return[]}function $R(n,e,t,r){const i=ty(n,r);if(i){const s=ny(i),o=s.path,l=s.queryId,u=Kt(o,e),h=Pe.fromObject(t),p=new Ro(B_(l),u,h);return ry(n,o,p)}else return[]}function J_(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,l)=>{const u=Kt(o,e),h=Vh(l,u);if(h)return h});return W_(i,e,s,t,!0)}function ec(n,e){return Z_(e,n.syncPointTree_,null,H_(n.pendingWriteTree_,Ae()))}function Z_(n,e,t,r){if(he(n.path))return ey(n,e,t,r);{const i=e.get(Ae());t==null&&i!=null&&(t=Vh(i,Ae()));let s=[];const o=pe(n.path),l=n.operationForChild(o),u=e.children.get(o);if(u&&l){const h=t?t.getImmediateChild(o):null,p=K_(r,o);s=s.concat(Z_(l,u,h,p))}return i&&(s=s.concat(Mh(i,n,r,t))),s}}function ey(n,e,t,r){const i=e.get(Ae());t==null&&i!=null&&(t=Vh(i,Ae()));let s=[];return e.children.inorderTraversal((o,l)=>{const u=t?t.getImmediateChild(o):null,h=K_(r,o),p=n.operationForChild(o);p&&(s=s.concat(ey(p,l,u,h)))}),i&&(s=s.concat(Mh(i,n,r,t))),s}function ty(n,e){return n.tagToQueryMap.get(e)}function ny(n){const e=n.indexOf("$");return q(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new De(n.substr(0,e))}}function ry(n,e,t){const r=n.syncPointTree_.get(e);q(r,"Missing sync point for query tag that we're tracking");const i=H_(n.pendingWriteTree_,e);return Mh(r,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Fh(t)}node(){return this.node_}}class Uh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=it(this.path_,e);return new Uh(this.syncTree_,t)}node(){return J_(this.syncTree_,this.path_)}}const HR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},wp=function(n,e,t){if(!n||typeof n!="object")return n;if(q(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return zR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return WR(n[".sv"],e);q(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},zR=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:q(!1,"Unexpected server value: "+n)}},WR=function(n,e,t){n.hasOwnProperty("increment")||q(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&q(!1,"Unexpected increment value: "+r);const i=e.node();if(q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},GR=function(n,e,t,r){return Bh(e,new Uh(t,n),r)},KR=function(n,e,t){return Bh(n,new Fh(e),t)};function Bh(n,e,t){const r=n.getPriority().val(),i=wp(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,l=wp(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new tt(l,vt(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild(Tt,(l,u)=>{const h=Bh(u,e.getImmediateChild(l),t);h!==u&&(s=s.updateImmediateChild(l,h))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function qh(n,e){let t=e instanceof De?e:new De(e),r=n,i=pe(t);for(;i!==null;){const s=Ji(r.node.children,i)||{children:{},childCount:0};r=new jh(i,r,s),t=ke(t),i=pe(t)}return r}function Es(n){return n.node.value}function iy(n,e){n.node.value=e,Nu(n)}function sy(n){return n.node.childCount>0}function QR(n){return Es(n)===void 0&&!sy(n)}function tc(n,e){Yt(n.node.children,(t,r)=>{e(new jh(t,n,r))})}function oy(n,e,t,r){t&&!r&&e(n),tc(n,i=>{oy(i,e,!0,r)}),t&&r&&e(n)}function YR(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function zo(n){return new De(n.parent===null?n.name:zo(n.parent)+"/"+n.name)}function Nu(n){n.parent!==null&&XR(n.parent,n.name,n)}function XR(n,e,t){const r=QR(t),i=Jn(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,Nu(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Nu(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=/[\[\].#$\/\u0000-\u001F\u007F]/,ZR=/[\[\].#$\u0000-\u001F\u007F]/,qc=10*1024*1024,ay=function(n){return typeof n=="string"&&n.length!==0&&!JR.test(n)},eP=function(n){return typeof n=="string"&&n.length!==0&&!ZR.test(n)},tP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eP(n)},ly=function(n,e,t){const r=t instanceof De?new xS(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+zr(r));if(typeof e=="function")throw new Error(n+"contains a function "+zr(r)+" with contents = "+e.toString());if(a_(e))throw new Error(n+"contains "+e.toString()+" "+zr(r));if(typeof e=="string"&&e.length>qc/3&&Ll(e)>qc)throw new Error(n+"contains a string greater than "+qc+" utf8 bytes "+zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Yt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ay(o)))throw new Error(n+" contains an invalid key ("+o+") "+zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LS(r,o),ly(n,l,r),MS(r)}),i&&s)throw new Error(n+' contains ".value" child '+zr(r)+" in addition to actual children.")}},nP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ay(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tP(t))throw new Error(Lv(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iP(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!k_(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function pi(n,e,t){iP(n,t),sP(n,r=>sn(r,e)||sn(e,r))}function sP(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(oP(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function oP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();ho&&wt("event: "+t.toString()),$o(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="repo_interrupt",lP=25;class cP{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sl(),this.transactionQueueTree_=new jh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uP(n,e,t){if(n.stats_=Rh(n.repoInfo_),n.forceRestClient_||iS())n.server_=new Cl(n.repoInfo_,(r,i,s,o)=>{vp(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ep(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new zn(n.repoInfo_,e,(r,i,s,o)=>{vp(n,r,i,s,o)},r=>{Ep(n,r)},r=>{dP(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=uS(n.repoInfo_,()=>new cR(n.stats_,n.server_)),n.infoData_=new iR,n.infoSyncTree_=new yp({startListening:(r,i,s,o)=>{let l=[];const u=n.infoData_.getNode(r._path);return u.isEmpty()||(l=Zl(n.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$h(n,"connected",!1),n.serverSyncTree_=new yp({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(l,u)=>{const h=o(l,u);pi(n.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function hP(n){const t=n.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function cy(n){return HR({timestamp:hP(n)})}function vp(n,e,t,r,i){n.dataUpdateCount++;const s=new De(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const u=rl(t,h=>vt(h));o=$R(n.serverSyncTree_,s,u,i)}else{const u=vt(t);o=qR(n.serverSyncTree_,s,u,i)}else if(r){const u=rl(t,h=>vt(h));o=jR(n.serverSyncTree_,s,u)}else{const u=vt(t);o=Zl(n.serverSyncTree_,s,u)}let l=s;o.length>0&&(l=zh(n,s)),pi(n.eventQueue_,l,o)}function Ep(n,e){$h(n,"connected",e),e===!1&&pP(n)}function dP(n,e){Yt(e,(t,r)=>{$h(n,t,r)})}function $h(n,e,t){const r=new De("/.info/"+e),i=vt(t);n.infoData_.updateSnapshot(r,i);const s=Zl(n.infoSyncTree_,r,i);pi(n.eventQueue_,r,s)}function fP(n){return n.nextWriteId_++}function pP(n){uy(n,"onDisconnectEvents");const e=cy(n),t=Sl();Iu(n.onDisconnect_,Ae(),(i,s)=>{const o=GR(i,s,n.serverSyncTree_,e);V_(t,i,o)});let r=[];Iu(t,Ae(),(i,s)=>{r=r.concat(Zl(n.serverSyncTree_,i,s));const o=yP(n,i);zh(n,o)}),n.onDisconnect_=Sl(),pi(n.eventQueue_,Ae(),r)}function mP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(aP)}function uy(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),wt(t,...e)}function hy(n,e,t){return J_(n.serverSyncTree_,e,t)||be.EMPTY_NODE}function Hh(n,e=n.transactionQueueTree_){if(e||nc(n,e),Es(e)){const t=fy(n,e);q(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&gP(n,zo(e),t)}else sy(e)&&tc(e,t=>{Hh(n,t)})}function gP(n,e,t){const r=t.map(h=>h.currentWriteId),i=hy(n,e,r);let s=i;const o=i.hash();for(let h=0;h<t.length;h++){const p=t[h];q(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const y=Kt(e,p.path);s=s.updateChild(y,p.currentOutputSnapshotRaw)}const l=s.val(!0),u=e;n.server_.put(u.toString(),l,h=>{uy(n,"transaction put response",{path:u.toString(),status:h});let p=[];if(h==="ok"){const y=[];for(let v=0;v<t.length;v++)t[v].status=2,p=p.concat(Hi(n.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&y.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();nc(n,qh(n.transactionQueueTree_,e)),Hh(n,n.transactionQueueTree_),pi(n.eventQueue_,e,p);for(let v=0;v<y.length;v++)$o(y[v])}else{if(h==="datastale")for(let y=0;y<t.length;y++)t[y].status===3?t[y].status=4:t[y].status=0;else{Bt("transaction at "+u.toString()+" failed: "+h);for(let y=0;y<t.length;y++)t[y].status=4,t[y].abortReason=h}zh(n,e)}},o)}function zh(n,e){const t=dy(n,e),r=zo(t),i=fy(n,t);return _P(n,i,r),r}function _P(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],h=Kt(t,u.path);let p=!1,y;if(q(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)p=!0,y=u.abortReason,i=i.concat(Hi(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=lP)p=!0,y="maxretry",i=i.concat(Hi(n.serverSyncTree_,u.currentWriteId,!0));else{const v=hy(n,u.path,o);u.currentInputSnapshot=v;const C=e[l].update(v.val());if(C!==void 0){ly("transaction failed: Data returned ",C,u.path);let N=vt(C);typeof C=="object"&&C!=null&&Jn(C,".priority")||(N=N.updatePriority(v.getPriority()));const D=u.currentWriteId,j=cy(n),U=KR(N,v,j);u.currentOutputSnapshotRaw=N,u.currentOutputSnapshotResolved=U,u.currentWriteId=fP(n),o.splice(o.indexOf(D),1),i=i.concat(BR(n.serverSyncTree_,u.path,U,u.currentWriteId,u.applyLocally)),i=i.concat(Hi(n.serverSyncTree_,D,!0))}else p=!0,y="nodata",i=i.concat(Hi(n.serverSyncTree_,u.currentWriteId,!0))}pi(n.eventQueue_,t,i),i=[],p&&(e[l].status=2,function(v){setTimeout(v,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(y==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(y),!1,null))))}nc(n,n.transactionQueueTree_);for(let l=0;l<r.length;l++)$o(r[l]);Hh(n,n.transactionQueueTree_)}function dy(n,e){let t,r=n.transactionQueueTree_;for(t=pe(e);t!==null&&Es(r)===void 0;)r=qh(r,t),e=ke(e),t=pe(e);return r}function fy(n,e){const t=[];return py(n,e,t),t.sort((r,i)=>r.order-i.order),t}function py(n,e,t){const r=Es(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);tc(e,i=>{py(n,i,t)})}function nc(n,e){const t=Es(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,iy(e,t.length>0?t:void 0)}tc(e,r=>{nc(n,r)})}function yP(n,e){const t=zo(dy(n,e)),r=qh(n.transactionQueueTree_,e);return YR(r,i=>{$c(n,i)}),$c(n,r),oy(r,i=>{$c(n,i)}),t}function $c(n,e){const t=Es(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(q(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(q(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Hi(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?iy(e,void 0):t.length=s+1,pi(n.eventQueue_,zo(e),i);for(let o=0;o<r.length;o++)$o(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vP(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Bt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Tp=function(n,e){const t=EP(n),r=t.namespace;t.domain==="firebase.com"&&ai(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ai("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||YC();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new aS(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new De(t.pathString)}},EP=function(n){let e="",t="",r="",i="",s="",o=!0,l="https",u=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let p=n.indexOf("/");p===-1&&(p=n.length);let y=n.indexOf("?");y===-1&&(y=n.length),e=n.substring(0,Math.min(p,y)),p<y&&(i=wP(n.substring(p,y)));const v=vP(n.substring(Math.min(n.length,y)));h=e.indexOf(":"),h>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const C=e.slice(0,h);if(C.toLowerCase()==="localhost")t="localhost";else if(C.split(".").length<=2)t=C;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),t=e.substring(N+1),s=r}"ns"in v&&(s=v.ns)}return{host:e,port:u,domain:t,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return he(this._path)?null:S_(this._path)}get ref(){return new Ts(this._repo,this._path)}get _queryIdentifier(){const e=ap(this._queryParams),t=Ch(e);return t==="{}"?"default":t}get _queryObject(){return ap(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof Wh))return!1;const t=this._repo===e._repo,r=k_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OS(this._path)}}class Ts extends Wh{constructor(e,t){super(e,t,new Dh,!1)}get parent(){const e=P_(this._path);return e===null?null:new Ts(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}FR(Ts);UR(Ts);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="FIREBASE_DATABASE_EMULATOR_HOST",Du={};let bP=!1;function IP(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||ai("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Tp(s,i),l=o.repoInfo,u;typeof process<"u"&&qf&&(u=qf[TP]),u?(s=`http://${u}?ns=${l.namespace}`,o=Tp(s,i),l=o.repoInfo):o.repoInfo.secure;const h=new oS(n.name,n.options,e);nP("Invalid Firebase Database URL",o),he(o.path)||ai("Database URL must point to the root of a Firebase Database (not including a child path).");const p=CP(l,n,h,new sS(n.name,t));return new SP(p,n)}function AP(n,e){const t=Du[e];(!t||t[n.key]!==n)&&ai(`Database ${e}(${n.repoInfo_}) has already been deleted.`),mP(n),delete t[n.key]}function CP(n,e,t,r){let i=Du[e.name];i||(i={},Du[e.name]=i);let s=i[n.toURLString()];return s&&ai("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new cP(n,bP,t,r),i[n.toURLString()]=s,s}class SP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ts(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ai("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(n){HC(ps),vr(new Wn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return IP(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Qt($f,Hf,n),Qt($f,Hf,"esm2017")}zn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};zn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};RP();var PP=Yn(),kP=n=>se(PP.Provider,{get value(){return n.app},get children(){return n.children}}),NP=pn("<main class=min-h-screen>"),DP=pn('<div class="flex justify-center items-center h-screen"><span class="loading loading-ring loading-lg h-32 w-32 border-t-2 border-b-2">');const OP=()=>se(kP,{app:Kp,get children(){return se(bA,{get children(){var n=NP();return Pt(n,se(vA,{root:e=>se(Vw,{get fallback(){return DP()},get children(){return se(PA.AuthProvider,{get children(){return se(DA.MetaProvider,{get children(){return se(LA.ThemeProvider,{get children(){return[se(PI,{}),ye(()=>e.children)]}})}})}})}}),children:lv})),n}})}});let no=document.getElementById("root");no instanceof HTMLElement||(no=document.createElement("div"),no.id="root",document.body.appendChild(no));Kw(()=>se(OP,{}),no);export{Lw as $,Sc as A,qP as B,MP as C,LP as D,Wr as E,xw as F,$P as G,jP as H,KP as I,HP as J,QP as K,ek as L,DA as M,B0 as N,WP as O,GP as P,$I as Q,Rg as R,Op as S,LA as T,bf as U,hs as V,XP as W,JP as X,lo as Y,Yw as Z,Na as _,Le as a,sI as a0,fI as a1,Ma as a2,Ap as a3,_d as a4,Ou as a5,rv as a6,In as a7,AA as a8,ti as b,se as c,Ve as d,xp as e,ww as f,Vw as g,PA as h,Pt as i,ye as j,YP as k,ZP as l,Kr as m,Sn as n,vw as o,qI as p,un as q,Fe as r,Nw as s,pn as t,nA as u,Yn as v,Bn as w,Ol as x,Hr as y,zP as z};
