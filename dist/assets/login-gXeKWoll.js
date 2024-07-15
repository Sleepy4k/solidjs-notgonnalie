import{j as T,k as O,a as V,o as F,c as a,i as n,S as R,d as j,t as f,p as i,E as u,z as b,f as q}from"./index-DgcURnP2.js";import{S as D,f as l,C as Z}from"./safe.form-BNsMeyH2.js";import{f as H,v as P}from"./user.model-D0AkaM6m.js";import{c as B,a as v,A as K,T as E,b as _}from"./auth.layout-DP1_hDvN.js";var z=f('<span class="xl:text-xl font-semibold">Halo, 👋 Selamat Datang Kembali!'),G=f("<span>Masuk"),I=f('<span class="loading loading-dots loading-lg">'),N=f('<div class="w-full flex flex-col items-stretch gap-3"><label class="input input-bordered flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path></svg></label><label class="input input-bordered flex items-center gap-2"><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 16 16"fill=currentColor class="w-4 h-4 opacity-70"><path fill-rule=evenodd d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"clip-rule=evenodd></path></svg></label><div class="flex items-center justify-between"></div><button type=submit class="btn btn-block btn-primary"></button><div class="divider text-sm">OR</div><div class="w-full flex justify-center items-center gap-4"><button type=button class="btn btn-block dark:btn-neutral">Daftar</button></div><div class="w-full flex justify-center items-center gap-4 mt-2"><button type=button class="btn btn-block dark:btn-neutral">Home');function Y(){const d=T(),{user:C,updateData:g}=O.useAuth(),[r,c]=V(!1),e=B({safe_form:v(!1),username:v("",{required:!0,validators:[l.required,l.minLength,l.maxLength]}),password:v("",{required:!0,validators:[l.required,l.minLength,l.maxLength]})});F(()=>{C()&&d("/",{replace:!0})});const A=()=>{if(e.isSubmitted){i("System","Formulir sudah dikirimkan",u.ERROR);return}if(!e.isValid){i("System","Silahkan isi semua formulir",u.ERROR);return}if(Z.validateToken())e.controls.safe_form.setErrors(null);else{e.controls.safe_form.setErrors({invalid:"csrf token tidak valid"});return}e.markSubmitted(!0),c(!0),L()},L=async()=>{const t=await H(e.value.username||"");if(e.markSubmitted(!1),!t){i("System","User tidak ditemukan",u.ERROR),c(!1);return}if(!await P(e.value.password||"",t.password,t.key)){i("System","Password salah",u.ERROR),c(!1);return}g(b.USER,t),g(b.STATUS,!0),g(b.ROLE,t.role),c(!1),i("System",`Selamat datang ${t.name}`,u.SUCCESS),d("/",{replace:!0})};return a(D,{get regenerate(){return!!e.controls.safe_form.errors},get children(){return a(K,{get disabled(){return r()},title:"Masuk",get children(){return[z(),(()=>{var t=N(),m=t.firstChild;m.firstChild;var p=m.nextSibling;p.firstChild;var h=p.nextSibling,o=h.nextSibling,M=o.nextSibling,w=M.nextSibling,S=w.firstChild,U=w.nextSibling,x=U.firstChild;return n(m,a(E,{type:"text",name:"username",get disabled(){return r()},placeholder:"Username Kamu",get control(){return e.controls.username},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),n(t,a(_,{name:"Username",get control(){return e.controls.username}}),p),n(p,a(E,{type:"password",name:"password",get disabled(){return r()},placeholder:"Password",get control(){return e.controls.password},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"}),null),n(t,a(_,{name:"Password",get control(){return e.controls.password}}),h),o.$$click=A,n(o,a(R,{get when(){return!r()},get children(){return G()}}),null),n(o,a(R,{get when(){return r()},get children(){return I()}}),null),S.$$click=()=>d("/register"),x.$$click=()=>d("/"),j(s=>{var k=r(),y=r(),$=r();return k!==s.e&&(o.disabled=s.e=k),y!==s.t&&(S.disabled=s.t=y),$!==s.a&&(x.disabled=s.a=$),s},{e:void 0,t:void 0,a:void 0}),t})()]}})}})}q(["click"]);export{Y as default};
