import{S as e,i as s,s as t,e as l,a,t as c,b as r,c as n,d as o,f as i,g as h,h as u,j as f,k as v,l as d,z as p,q as m,x as g,m as y,n as k,o as b,p as E,u as L,G as I}from"./client.53d314a9.js";import{g as V}from"./_helper.a74fbffc.js";import{F as w}from"./fuse.esm.cd64790d.js";const{document:D}=L;function S(e,s,t){const l=e.slice();return l[8]=s[t],l}function j(e){let s,t,m,g,y,k,b,E,L,I,w,D,S=e[8].item.title+"",j=V(e[8].item.group)+"";return{c(){s=l("li"),t=l("a"),m=l("div"),g=l("div"),y=a(),k=l("div"),b=c(j),E=a(),L=r("svg"),I=r("path"),w=a(),this.h()},l(e){s=n(e,"LI",{class:!0});var l=o(s);t=n(l,"A",{rel:!0,href:!0,class:!0});var a=o(t);m=n(a,"DIV",{class:!0});var c=o(m);g=n(c,"DIV",{class:!0}),o(g).forEach(i),y=h(c),k=n(c,"DIV",{class:!0});var r=o(k);b=u(r,j),r.forEach(i),c.forEach(i),E=h(a),L=n(a,"svg",{class:!0,width:!0,height:!0,fill:!0},1);var f=o(L);I=n(f,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0,class:!0},1),o(I).forEach(i),f.forEach(i),w=h(a),a.forEach(i),l.forEach(i),this.h()},h(){f(g,"class","entry-title svelte-1k1ybnv"),f(k,"class","entry-descr svelte-1k1ybnv"),f(m,"class","flex-grow svelte-1k1ybnv"),f(I,"fill-rule","evenodd"),f(I,"clip-rule","evenodd"),f(I,"fill","currentColor"),f(I,"d","M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"),f(I,"class","svelte-1k1ybnv"),f(L,"class","arrow svelte-1k1ybnv"),f(L,"width","16"),f(L,"height","16"),f(L,"fill","none"),f(t,"rel","prefetch"),f(t,"href",D="./"+e[8].item.slug),f(t,"class","svelte-1k1ybnv"),f(s,"class","svelte-1k1ybnv")},m(e,l){v(e,s,l),d(s,t),d(t,m),d(m,g),g.innerHTML=S,d(m,y),d(m,k),d(k,b),d(t,E),d(t,L),d(L,I),d(t,w)},p(e,s){4&s&&S!==(S=e[8].item.title+"")&&(g.innerHTML=S),4&s&&j!==(j=V(e[8].item.group)+"")&&p(b,j),4&s&&D!==(D="./"+e[8].item.slug)&&f(t,"href",D)},d(e){e&&i(s)}}}function x(e){let s,t,c,r,u,p,E,L,I,V=e[2],w=[];for(let s=0;s<V.length;s+=1)w[s]=j(S(e,V,s));return{c(){s=a(),t=l("div"),c=l("div"),r=l("input"),u=a(),p=l("div"),E=l("div"),L=l("ul");for(let e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){m('[data-svelte="svelte-d3pou1"]',D.head).forEach(i),s=h(e),t=n(e,"DIV",{id:!0,class:!0});var l=o(t);c=n(l,"DIV",{class:!0});var a=o(c);r=n(a,"INPUT",{placeholder:!0,autocomplete:!0,autocorrect:!0,autocapitalize:!0,spellcheck:!0,class:!0}),a.forEach(i),l.forEach(i),u=h(e),p=n(e,"DIV",{id:!0,class:!0});var f=o(p);E=n(f,"DIV",{class:!0});var v=o(E);L=n(v,"UL",{class:!0});var d=o(L);for(let e=0;e<w.length;e+=1)w[e].l(d);d.forEach(i),v.forEach(i),f.forEach(i),this.h()},h(){D.title="Suchen",f(r,"placeholder","Suche..."),f(r,"autocomplete","off"),f(r,"autocorrect","off"),f(r,"autocapitalize","off"),f(r,"spellcheck","false"),f(r,"class","svelte-1k1ybnv"),f(c,"class","wrapper-inner svelte-1k1ybnv"),f(t,"id","headline"),f(t,"class","svelte-1k1ybnv"),f(L,"class","svelte-1k1ybnv"),f(E,"class","wrapper-inner svelte-1k1ybnv"),f(p,"id","content"),f(p,"class","svelte-1k1ybnv")},m(l,a,n){v(l,s,a),v(l,t,a),d(t,c),d(c,r),g(r,e[1]),e[7](r),v(l,u,a),v(l,p,a),d(p,E),d(E,L);for(let e=0;e<w.length;e+=1)w[e].m(L,null);n&&I(),I=y(r,"input",e[6])},p(e,[s]){if(2&s&&r.value!==e[1]&&g(r,e[1]),4&s){let t;for(V=e[2],t=0;t<V.length;t+=1){const l=S(e,V,t);w[t]?w[t].p(l,s):(w[t]=j(l),w[t].c(),w[t].m(L,null))}for(;t<w.length;t+=1)w[t].d(1);w.length=V.length}},i:k,o:k,d(l){l&&i(s),l&&i(t),e[7](null),l&&i(u),l&&i(p),b(w,l),I()}}}function M({params:e,query:s}){return this.fetch("suche.json").then(e=>e.json()).then(e=>({posts:e}))}function $(e,s,t){let l,{posts:a}=s;E(()=>{document.documentElement.setAttribute("data-theme","search"),setTimeout(()=>{l.focus()},100)});const c={isCaseSensitive:!1,findAllMatches:!1,includeMatches:!1,includeScore:!1,useExtendedSearch:!1,minMatchCharLength:1,shouldSort:!0,threshold:.6,location:0,distance:100,keys:["title","html","group"]},r=new w(a,c);let n,o="";return e.$set=e=>{"posts"in e&&t(3,a=e.posts)},e.$$.update=()=>{2&e.$$.dirty&&t(2,n=r.search(o))},[l,o,n,a,c,r,function(){o=this.value,t(1,o)},function(e){I[e?"unshift":"push"](()=>{t(0,l=e)})}]}export default class extends e{constructor(e){super(),s(this,e,$,x,t,{posts:3})}}export{M as preload};