import{j as T,k as P,n as U,a as j,o as M,c as a,i as o,S,d as N,t as f,p as u,E as d,f as O}from"./index-DgcURnP2.js";import{S as V,f as m,C as A}from"./safe.form-BNsMeyH2.js";import{M as G}from"./main.layout-BSrvuSIL.js";import{c as K,a as y,T as Q,b as B}from"./auth.layout-DP1_hDvN.js";import{u as D}from"./question.model-DBYGvQI8.js";var I=f("<span>Ubah"),z=f('<span class="loading loading-dots loading-lg">'),H=f('<div class="w-full h-screen xl:h-auto xl:w-[30%] 2xl:w-[25%] 3xl:w-[20%] px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body><h2 class=card-title>Ubah Pertanyaan</h2><div class="divider divider-lg"></div><form class="form-control flex flex-col items-stretch gap-3"><label class="input input-bordered min-w-full flex items-center gap-2"></label><div class="flex items-center justify-between"></div><div class="divider text-sm"></div><div class="flex justify-center gap-5"><button type=button class="btn btn-block dark:btn-neutral w-[25%]">Kembali</button><button type=submit class="btn btn-block btn-primary w-[25%]">');function ee(){const l=T(),{user:_}=P.useAuth(),{state:t}=U(),[r,b]=j(!1),e=K({safe_form:y(!1),question:y(t?.question||"",{required:!0,validators:[m.required,m.minLength,m.maxLength]})});M(()=>{_()||l("/404",{replace:!0}),(!t||t==null||t==null)&&l("/questions",{replace:!0})});const $=()=>{if(e.isSubmitted){u("System","Formulir sudah dikirimkan",d.ERROR);return}if(!e.isValid){u("System","Silahkan isi semua formulir",d.ERROR);return}if(A.validateToken())e.controls.safe_form.setErrors(null);else{e.controls.safe_form.setErrors({invalid:"csrf token tidak valid"});return}e.markSubmitted(!0),b(!0),k()},k=async()=>{const i=await D(t?.id||"",{uid:t?.uid||"0",question:e.value.question||""});e.markSubmitted(!1),b(!1),i.id!="NaN"?(u("System","Berhasil mengubah pertanyaan",d.SUCCESS),l("/questions",{replace:!0})):u("System","Gagal mengubah pertanyaan",d.ERROR)};return a(V,{get regenerate(){return!!e.controls.safe_form.errors},get children(){return a(G,{title:"Ubah Pertanyaan",get children(){var i=H(),w=i.firstChild,q=w.firstChild,C=q.firstChild,E=C.firstChild,R=E.nextSibling,p=R.nextSibling,g=p.firstChild,h=g.nextSibling,F=h.nextSibling,L=F.nextSibling,c=L.firstChild,s=c.nextSibling;return o(g,a(Q,{type:"text",name:"question",get disabled(){return r()},placeholder:"Pertanyaan Kamu",get control(){return e.controls.question},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"})),o(p,a(B,{name:"Pertanyaan kamu",get control(){return e.controls.question}}),h),c.$$click=()=>l("/questions"),s.$$click=$,o(s,a(S,{get when(){return!r()},get children(){return I()}}),null),o(s,a(S,{get when(){return r()},get children(){return z()}}),null),N(n=>{var v=r(),x=r();return v!==n.e&&(c.disabled=n.e=v),x!==n.t&&(s.disabled=n.t=x),n},{e:void 0,t:void 0}),i}})}})}O(["click"]);export{ee as default};
