import{u as L,a as B,l as F,f as R,o as T,c as s,i as r,g as E,S as v,j as b,F as J,t as c,e as N}from"./index-D-UhkxB9.js";import{M as Q}from"./main.layout-Bf07d-3g.js";import"./auth.layout-BXNnW5Rk.js";import{g as z}from"./answer.model-DcXM2-aC.js";var G=c('<tr><td class="table-cell text-center"></td><td class="table-cell text-center">'),H=c('<tr><td class="table-cell text-center"></td><td class="table-cell text-center"><div class="flex justify-center items-center w-full h-[35vh]"><p class=text-2xl>Belum ada pertanyaan</p></div></td><td class="table-cell text-center">'),K=c('<div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip"><div class="flex flex-col gap-4"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="lg:text-lg text-sm font-bold">Total Data: </span></div><h2 class="lg:text-2xl text-sm font-bold">List Jawaban (<!>)</h2><div class="flex items-center gap-2"></div></div><div class="divider divider-lg"></div><div class="card shadow-2xl"><div class=card-body><div><div><div class="flex items center justify-between"><div class="flex items-center gap-2"><button type=button class="btn btn-primary">Back</button><button type=button class="btn btn-primary">Refresh</button></div></div></div><table class="table w-[100%] mt-[5vh] mb-[5vh]"><thead><tr><th class="table-cell text-center">ID</th><th class="table-cell text-center">Answer</th></tr></thead><tbody>'),O=c('<tr><td class="table-cell text-center"><div class="flex justify-center items-center w-full h-[35vh]"><div class="loading loading-lg">');function Y(){const d=L(),[g,$]=B(0),{state:a}=F(),[i,{mutate:P,refetch:m}]=R(async()=>{const t=(await z())?.filter(e=>e.questId===a?.questId);return $(t?.length||0),t==null||t==null?[]:t});T(()=>{(!a||a==null||a==null)&&d("/questions",{replace:!0})});const p=l=>(()=>{var t=G(),e=t.firstChild,n=e.nextSibling;return r(e,()=>l.answer.id||"###"),r(n,()=>l.answer.answer),t})();return s(Q,{title:"Answer",get children(){var l=K(),t=l.firstChild,e=t.firstChild,n=e.firstChild,o=n.firstChild;o.firstChild;var u=n.nextSibling,_=u.firstChild,f=_.nextSibling;f.nextSibling;var w=e.nextSibling,y=w.nextSibling,C=y.firstChild,S=C.firstChild,h=S.firstChild,A=h.firstChild,j=A.firstChild,x=j.firstChild,k=x.nextSibling,q=h.nextSibling,D=q.firstChild,M=D.nextSibling;return r(o,g,null),r(u,()=>a?.question,f),x.$$click=()=>d("/questions"),k.$$click=()=>m(),r(M,s(E,{get fallback(){return O()},get children(){return[s(v,{get when(){return b(()=>!!Array.isArray(i()))()&&i()?.length===0},get children(){return H()}}),s(v,{get when(){return b(()=>!!Array.isArray(i()))()&&i()?.length!==0},get children(){return s(J,{get each(){return i()},children:I=>s(p,{answer:I})})}})]}})),l}})}N(["click"]);export{Y as default};