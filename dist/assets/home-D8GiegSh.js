import{j as W,k as z,a as v,g as G,o as H,b as O,c as n,i as h,h as U,S as $,l as p,F as A,t as g,f as V,e as f}from"./index-pv8TXPai.js";import{S as X,E as Z}from"./auth.layout-CbgWAGRh.js";import{t as tt}from"./parse-SBFIIZDd.js";import{M as et}from"./main.layout-CBbFEHOj.js";import{g as lt,d as st}from"./answer.model-DZBHEoEt.js";import{d as nt,g as it}from"./question.model-B3gn031e.js";var at=g('<tr><td class="table-cell text-center"></td><td class="table-cell text-center"></td><td class="table-cell text-center"><button type=button class="btn btn-ghost">Copy Link</button><button type=button class="btn btn-ghost">Jawaban</button><button type=button class="btn btn-ghost">Edit</button><button type=button class="btn btn-ghost">Delete'),rt=g('<tr><td class="table-cell text-center"></td><td class="table-cell text-center"><div class="flex justify-center items-center w-full h-[35vh]"><p class=text-2xl>Belum ada pertanyaan</p></div></td><td class="table-cell text-center">'),ct=g('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="flex items-center justify-between"><div class="flex items-center"><span class="lg:text-lg text-xs font-bold">Total Pertanyaan: </span></div><h2 class="lg:text-2xl text-sm font-bold">Pertanyaan</h2><div class="flex items-center"><button type=button class="btn btn-primary lg:w-[7vw] w-[18vw] lg:h-[5vh] h-[4vh] lg:text-lg text-xs">Tambah</button></div></div><div class="divider divider-lg"></div><div class="card shadow-2xl"><div class=card-body><div class="flex items center justify-between"><div class="flex items-center gap-2"><button type=button class="btn btn-primary">Refresh</button></div></div><div class="lg:absolute lg:top-5 lg:right-5 mt-[2vh]"><div class="flex items center justify-between"><input type=input placeholder=Search class="input input-bordered lg:h-[4vh] h-[2.5rem] lg:w-[15vw] w-[50vw]"></div></div><div class=overflow-x-auto><table class="table table-auto w-full mt-[5vh] mb-[5vh]"><thead><tr><th class="table-cell text-center">ID</th><th class="table-cell text-center">Pertanyaan</th><th class="table-cell text-center">Aksi</th></tr></thead><tbody>'),dt=g('<tr><td class="table-cell text-center"></td><td class="table-cell text-center"><div class="flex justify-center items-center w-full h-[35vh]"><div class="loading loading-lg"></div></div></td><td class="table-cell text-center">');function mt(){const c=W(),{user:y,isLogged:E}=z.useAuth(),[D,b]=v(0),[w,T]=v(""),[x,_]=v([]),[s,{mutate:ot,refetch:C}]=G(async()=>{const e=(await it())?.filter(l=>l.uid===y()?.id);return b(e?.length||0),e==null||e==null?[]:e});H(()=>{E()||c("/404",{replace:!0})}),O(()=>{const t=w().length<=0;if(t)_([]),b(s()?.length||0);else if(!t&&Array.isArray(s())&&s()?.length!==0){const e=s()?.filter(l=>l.question.toLowerCase().includes(w().toLowerCase()));e?.length!==0&&(_(e||[]),b(e?.length||0))}});const L=t=>T(t.target.value),j=async t=>{f.fire({title:"Konfirmasi",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya, hapus",cancelButtonText:"Tidak, simpan dulu",html:X(Z.DELETE)}).then(async e=>{if(e.isConfirmed){const l=await lt();l.length>0&&l?.forEach(async i=>{i.questId===t&&await st(i.id?.toString()||"")}),(await nt(t)).id!="NaN"?(f.fire("Deleted!","Your data has been deleted.","success"),C()):f.fire("Failed!","Failed to delete data.","error")}})},F=t=>{let e=location.href.split("#")[0];e=e.endsWith("/")?e.slice(0,-1):e;const l=document.createElement("input");l.value=`${e}/#/${y()?.id}/${t}`,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l),f.fire("Copied!","Link copied to clipboard.","success")},S=t=>(()=>{var e=at(),l=e.firstChild,a=l.nextSibling,i=a.nextSibling,d=i.firstChild,o=d.nextSibling,u=o.nextSibling,m=u.nextSibling;return h(l,()=>t.question.id||"###"),h(a,()=>tt(t.question.question,75)),d.$$click=()=>F(t.question.id?.toString()||""),o.$$click=()=>c("/answer",{state:{questId:t.question.id?.toString(),question:t.question.question}}),u.$$click=()=>c("/question/edit",{state:t.question}),m.$$click=()=>j(t.question.id?.toString()||""),e})();return n(et,{title:"Pertanyaan",get children(){var t=ct(),e=t.firstChild,l=e.firstChild,a=l.firstChild,i=a.firstChild;i.firstChild;var d=a.nextSibling,o=d.nextSibling,u=o.firstChild,m=l.nextSibling,B=m.nextSibling,M=B.firstChild,q=M.firstChild,P=q.firstChild,I=P.firstChild,k=q.nextSibling,N=k.firstChild,Q=N.firstChild,R=k.nextSibling,Y=R.firstChild,J=Y.firstChild,K=J.nextSibling;return h(i,D,null),u.$$click=()=>c("/question/add"),I.$$click=()=>C(),Q.$$keyup=r=>L(r),h(K,n(U,{get fallback(){return dt()},get children(){return[n($,{get when(){return p(()=>!!Array.isArray(s()))()&&s()?.length===0},get children(){return rt()}}),n($,{get when(){return p(()=>!!(Array.isArray(s())&&s()?.length!==0))()&&x().length===0},get children(){return n(A,{get each(){return s()},children:r=>n(S,{question:r})})}}),n($,{get when(){return p(()=>!!(Array.isArray(s())&&s()?.length!==0))()&&x().length!==0},get children(){return n(A,{get each(){return x()},children:r=>n(S,{question:r})})}})]}})),t}})}V(["click","keyup"]);export{mt as default};