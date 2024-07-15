import{a as T,b as q,u as L,c as r,i as l,S as x,d as j,t as g,p as v,E as w,e as B,f as F}from"./index-DgcURnP2.js";import{M as K}from"./main.layout-BSrvuSIL.js";import{c as Y,a as s,T as m,b as f,S as D}from"./auth.layout-DP1_hDvN.js";import{S as H,f as a,C as I}from"./safe.form-BNsMeyH2.js";var M=g("<span>Kirim"),V=g('<span class="loading loading-dots loading-lg">'),O=g('<div class="w-full h-screen xl:h-auto xl:w-[30%] 2xl:w-[25%] 3xl:w-[20%] px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="card shadow-2xl"><div class=card-body><h2 class=card-title>Hubungi Kami</h2><div class="divider divider-lg"></div><form class="form-control flex flex-col items-stretch gap-3"><label class="input input-bordered min-w-full flex items-center gap-2"></label><label class="input input-bordered min-w-full flex items-center gap-2"></label><label class=input-bordered></label><div class="flex items-center justify-between"></div><div class="divider text-sm"></div><div class="flex justify-center"><button type=submit class="btn btn-block btn-primary w-[75%]">');function U(){const[n,p]=T(!1),e=Y({safe_form:s(!1),name:s("",{required:!0,validators:[a.required,a.minLength,a.maxLength]}),email:s("",{required:!0,validators:[a.required,a.email,a.maxLength]}),message:s("",{required:!0,validators:[a.required,a.minLength]})}),$=()=>{if(e.isSubmitted){v("System","Formulir sudah dikirimkan",w.ERROR);return}if(!e.isValid){v("System","Silahkan isi semua formulir",w.ERROR);return}if(I.validateToken())e.controls.safe_form.setErrors(null);else{e.controls.safe_form.setErrors({invalid:"csrf token tidak valid"});return}e.markSubmitted(!0),p(!0),S()},S=async()=>{const t={to:"Apri Pandu Wicaksono (sarahpalastrin@gmail.com)",subject:"Contact Us",body:`Hi, I'm ${e.controls.name.value} (${e.controls.email.value}),
        I want to say ${e.controls.message.value}.
        Best Regards, ${e.controls.name.value}
      `};window.location.href=`mailto:${t.to}?subject=${t.subject}&body=${t.body}`,p(!1)};return q(()=>{window.location.search&&window.history.replaceState({},document.title,window.location.pathname)}),L(t=>{e.isDirty&&!t.defaultPrevented&&!e.controls.safe_form.errors&&(t.preventDefault(),setTimeout(()=>{B.fire({title:"Konfirmasi",icon:"question",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak",html:D()}).then(d=>{d.isConfirmed&&t.retry(!0)})},100))}),r(H,{get regenerate(){return!!e.controls.safe_form.errors},get children(){return r(K,{title:"Hubungi Kami",get disabled(){return n()},get children(){var t=O(),d=t.firstChild,_=d.firstChild,y=_.firstChild,C=y.firstChild,k=C.nextSibling,i=k.nextSibling,b=i.firstChild,c=b.nextSibling,u=c.nextSibling,h=u.nextSibling,E=h.nextSibling,R=E.nextSibling,o=R.firstChild;return l(b,r(m,{type:"text",name:"name",get disabled(){return n()},placeholder:"Your Name",get control(){return e.controls.name},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"})),l(i,r(f,{name:"name",get control(){return e.controls.name}}),c),l(c,r(m,{type:"email",name:"email",get disabled(){return n()},placeholder:"Your Email",get control(){return e.controls.email},class:"grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0"})),l(i,r(f,{name:"email",get control(){return e.controls.email}}),u),l(u,r(m,{type:"textarea",name:"message",get disabled(){return n()},placeholder:"Your Message",get control(){return e.controls.message},class:"grow input input-bordered h-auto pl-1 pr-0"})),l(i,r(f,{name:"message",get control(){return e.controls.message}}),h),o.$$click=$,l(o,r(x,{get when(){return!n()},get children(){return M()}}),null),l(o,r(x,{get when(){return n()},get children(){return V()}}),null),j(()=>o.disabled=n()),t}})}})}F(["click"]);export{U as default};
