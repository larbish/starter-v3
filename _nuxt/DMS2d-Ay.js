const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DNVmyOWg.js","./oKRw6SwV.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./oKRw6SwV.js";import{c as d,a as w,t as l}from"./3IIwwCwu.js";async function p(t,e){return await $fetch(`/api/content/${e}/database.sql`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(e)],t:void 0}})}async function g(t,e="gzip"){var i;const n=Uint8Array.from(atob(t),a=>a.charCodeAt(0)),o=(i=new Response(new Blob([n])).body)==null?void 0:i.pipeThrough(new DecompressionStream(e));return(await new Response(o).text()).split(`
`)}function f(t,e){const n=h(t),r={...e};for(const o in r)n[o]==="json"&&r[o]&&r[o]!=="undefined"&&(r[o]=JSON.parse(r[o])),n[o]==="boolean"&&r[o]!=="undefined"&&(r[o]=!!r[o]);for(const o in r)r[o]==="NULL"&&(r[o]=void 0);return r}function h(t){const e=t.match(/FROM\s+(\w+)/);if(!e)return{};const n=w[b(e[1])];return(n==null?void 0:n.fields)||{}}function b(t){return t.replace(/^_content_/,"")}let s;function _(t){return{all:async(e,n)=>(await u(t),s.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).map(r=>f(e,r))),first:async(e,n)=>(await u(t),f(e,s.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async(e,n)=>{await u(t),await s.exec({sql:e,bind:n})}}}async function u(t){if(!s){const c=await m(()=>import("./DNVmyOWg.js"),__vite__mapDeps([0,1]),import.meta.url).then(a=>a.default);globalThis.sqlite3ApiConfig={silent:!0,debug:(...a)=>console.debug(...a),warn:(...a)=>{String(a[0]).includes("OPFS sqlite3_vfs")||console.warn(...a)},error:(...a)=>console.error(...a),log:(...a)=>console.log(...a)};const i=await c();s=new i.oo1.DB}if(window.sessionStorage.getItem("previewToken"))return s;let e=null;const n=`checksum_${t}`,r=`collection_${t}`;let o="matched";try{const c=s.exec({sql:`SELECT * FROM ${l.info} where id = '${n}'`,rowMode:"object",returnValue:"resultRows"}).shift();(c==null?void 0:c.version)!==d[String(t)]&&(o="mismatch")}catch{o="missing"}if(o!=="matched"){if(window.localStorage.getItem(`content_${n}`)===d[String(t)]&&(e=window.localStorage.getItem(`content_${r}`)),!e){e=await p(void 0,String(t));try{window.localStorage.setItem(`content_${n}`,d[String(t)]),window.localStorage.setItem(`content_${r}`,e)}catch(i){console.error("Database integrity check failed, rebuilding database",i)}}const c=await g(e);await s.exec({sql:`DROP TABLE IF EXISTS ${l[String(t)]}`}),o==="mismatch"&&await s.exec({sql:`DELETE FROM ${l.info} WHERE id = '${n}'`});for(const i of c)try{await s.exec(i)}catch(a){console.error("Error executing command",a)}}return s}export{_ as loadDatabaseAdapter};
