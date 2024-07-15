const e=r=>{let s=[];return r.split(`
`).map(t=>{const n=t.indexOf(":"),o=t.substring(n+2);s.push(o)}),s},i=(r,s)=>r.length>s?`${r.substring(0,s)}...`:r;export{e as c,i as t};
