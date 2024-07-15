import{j as Z,k as K,a as L,o as P,u as F,c as r,i as l,S as R,d as O,t as h,p as c,E as m,e as U,f as j}from"./index-pv8TXPai.js";import{S as D,f as a,C as H}from"./safe.form-C_zh8uXY.js";import{g as N,e as G,c as I}from"./user.model-D25jJnHt.js";import{c as Y,a as u,A as z,T as v,b,S as J}from"./auth.layout-CbgWAGRh.js";var Q=h('<span class="xl:text-xl font-semibold">Hai, 👋 Siap bergabung dengan kami?'),W=h("<span>Daftar"),X=h('<span class="loading loading-dots loading-lg">'),ee=h('<div class="w-full flex flex-col items-stretch gap-3"><label class="input input-bordered flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path></svg></label><label class="input input-bordered flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path></svg></label><label class="input input-bordered flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path fill-rule=evenodd d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"clip-rule=evenodd></path></svg></label><label class="input input-bordered flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path fill-rule=evenodd d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"clip-rule=evenodd></path></svg></label><div class="flex items-center justify-between"></div><button type=submit class="btn btn-block btn-primary"></button><div class="divider text-sm">OR</div><div class="w-full flex justify-center items-center gap-4"><button type=button class="btn btn-block dark:btn-neutral">Masuk</button></div><div class="w-full flex justify-center items-center gap-4 mt-2"><button type=button class="btn btn-block dark:btn-neutral">Home');function le(){const p=Z(),{isLogged:A}=K.useAuth(),[E,q]=L(!1),[n,w]=L(!1),e=Y({safe_form:u(!1),role:u("user"),name:u("",{required:!0,validators:[a.required,a.minLength,a.maxLength]}),username:u("",{required:!0,validators:[a.required,a.minLength,a.maxLength]}),password:u("",{required:!0,validators:[a.required,a.minLength,a.maxLength]}),password_confirmation:u("",{required:!0,validators:[a.required,a.minLength,a.maxLength]})});P(()=>{A()&&p("/",{replace:!0})});const M=()=>{if(e.isSubmitted){c("System","Formulir sudah dikirimkan",m.ERROR);return}if(!e.isValid){c("System","Silahkan isi semua formulir",m.ERROR);return}if(H.validateToken())e.controls.safe_form.setErrors(null);else{e.controls.safe_form.setErrors({invalid:"csrf token tidak valid"});return}if(e.value.password!==e.value.password_confirmation){c("System","Password tidak sama",m.ERROR);return}e.markSubmitted(!0),w(!0),T()},T=async()=>{const t=N(e.value.username||"",e.value.password||""),s=await G(e.value.password||"",t),i=await I({name:e.value.name||"",username:e.value.username||"",password:s||"",role:e.value.role||"",key:t});if(e.markSubmitted(!1),!i){c("System","Username sudah digunakan, silahkan coba yang lain",m.ERROR),w(!1);return}q(!0),w(!1),c("System",`Selamat bergabung ${e.value.name}`,m.SUCCESS),p("/login",{replace:!0})};return F(t=>{e.isDirty&&!t.defaultPrevented&&!e.controls.safe_form.errors&&!E()&&(t.preventDefault(),setTimeout(()=>{U.fire({title:"Konfirmasi",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:J()}).then(s=>{s.isConfirmed&&t.retry(!0)})},100))}),r(D,{get regenerate(){return!!e.controls.safe_form.errors},get children(){return r(z,{get disabled(){return n()},title:"Masuk",get children(){return[Q(),(()=>{var t=ee(),s=t.firstChild;s.firstChild;var i=s.nextSibling;i.firstChild;var g=i.nextSibling;g.firstChild;var f=g.nextSibling;f.firstChild;var x=f.nextSibling,d=x.nextSibling,V=d.nextSibling,y=V.nextSibling,S=y.firstChild,B=y.nextSibling,k=B.firstChild;return l(s,r(v,{type:"text",name:"name",get disabled(){return n()},placeholder:"Nama Kamu",get control(){return e.controls.name},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),l(t,r(b,{name:"Name",get control(){return e.controls.name}}),i),l(i,r(v,{type:"text",name:"username",get disabled(){return n()},placeholder:"Username Kamu",get control(){return e.controls.username},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),l(t,r(b,{name:"Username",get control(){return e.controls.username}}),g),l(g,r(v,{type:"password",name:"password",get disabled(){return n()},placeholder:"Password",get control(){return e.controls.password},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),l(t,r(b,{name:"Password",get control(){return e.controls.password}}),f),l(f,r(v,{type:"password",name:"password_confirmation",get disabled(){return n()},placeholder:"Password Konfirmasi",get control(){return e.controls.password_confirmation},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),l(t,r(b,{name:"Password Konfirmasi",get control(){return e.controls.password_confirmation}}),x),d.$$click=M,l(d,r(R,{get when(){return!n()},get children(){return W()}}),null),l(d,r(R,{get when(){return n()},get children(){return X()}}),null),S.$$click=()=>p("/login"),k.$$click=()=>p("/"),O(o=>{var _=n(),C=n(),$=n();return _!==o.e&&(d.disabled=o.e=_),C!==o.t&&(S.disabled=o.t=C),$!==o.a&&(k.disabled=o.a=$),o},{e:void 0,t:void 0,a:void 0}),t})()]}})}})}j(["click"]);export{le as default};
