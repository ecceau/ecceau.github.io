import{_ as t,a as e,i as n,s as r,b as s,S as a,e as c,t as l,f as i,g as o,k as f,h as u,l as h,D as v,m as d,n as g,p,u as m,o as E,v as y,x as L,y as x,c as w,d as A,j as k,G as $,I as D,q as S,J as C,K as I,L as M,M as R,N as V,w as b,z as j}from"./client.f82f65a0.js";import{g as F}from"./_helper.bb50a30b.js";import{F as T}from"./fuse.esm.915aa11f.js";function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function z(t,e,n){var r=t.slice();return r[4]=e[n],r}function B(t){var e,n,r,s,a,m=t[4]+"";function E(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t)[3].apply(e,[t[4]].concat(r))}return{c:function(){e=c("li"),n=c("button"),r=l(m),this.h()},l:function(t){e=i(t,"LI",{class:!0});var s=o(e);n=i(s,"BUTTON",{id:!0,class:!0});var a=o(n);r=f(a,m),a.forEach(u),s.forEach(u),this.h()},h:function(){h(n,"id",t[4]),h(n,"class",s=v(t[4]==t[0]?"sel":"nsel")+" svelte-129cc2k"),h(e,"class","svelte-129cc2k")},m:function(t,s,c){d(t,e,s),g(e,n),g(n,r),c&&a(),a=p(n,"click",E)},p:function(e,r){t=e,1&r&&s!==(s=v(t[4]==t[0]?"sel":"nsel")+" svelte-129cc2k")&&h(n,"class",s)},d:function(t){t&&u(e),a()}}}function N(t){for(var e,n,r=t[2],s=[],a=0;a<r.length;a+=1)s[a]=B(z(t,r,a));return{c:function(){e=c("div"),n=c("ul");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){e=i(t,"DIV",{id:!0,class:!0});var r=o(e);n=i(r,"UL",{class:!0});for(var a=o(n),c=0;c<s.length;c+=1)s[c].l(a);a.forEach(u),r.forEach(u),this.h()},h:function(){h(n,"class","svelte-129cc2k"),h(e,"id","select"),h(e,"class","svelte-129cc2k")},m:function(t,r){d(t,e,r),g(e,n);for(var a=0;a<s.length;a+=1)s[a].m(n,null)},p:function(t,e){var a=m(e,1)[0];if(7&a){var c;for(r=t[2],c=0;c<r.length;c+=1){var l=z(t,r,c);s[c]?s[c].p(l,a):(s[c]=B(l),s[c].c(),s[c].m(n,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},i:E,o:E,d:function(t){t&&u(e),y(s,t)}}}function P(t,e,n){var r=e.sel,s=void 0===r?"Alles":r,a=e.handleClick;return t.$set=function(t){"sel"in t&&n(0,s=t.sel),"handleClick"in t&&n(1,a=t.handleClick)},[s,a,["Alles","Allgemein","Eltern","Tageskinder"],function(t){return a(t)}]}var U=function(c){t(o,a);var l,i=(l=o,function(){var t,e=L(l);if(H()){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return x(this,t)});function o(t){var a;return e(this,o),a=i.call(this),n(s(a),t,P,N,r,{sel:0,handleClick:1}),a}return o}();function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var _=j.document;function G(t,e,n){var r=t.slice();return r[9]=e[n],r}function J(t){var e,n,r,s,a,v,p,m,E,y,L,x,D=t[9].item.title+"",S=F(t[9].item.group)+"";return{c:function(){e=c("li"),n=c("a"),r=c("div"),s=c("div"),a=w(),v=c("div"),p=l(S),m=w(),E=A("svg"),y=A("path"),L=w(),this.h()},l:function(t){e=i(t,"LI",{class:!0});var c=o(e);n=i(c,"A",{rel:!0,href:!0,class:!0});var l=o(n);r=i(l,"DIV",{class:!0});var h=o(r);s=i(h,"DIV",{class:!0}),o(s).forEach(u),a=k(h),v=i(h,"DIV",{class:!0});var d=o(v);p=f(d,S),d.forEach(u),h.forEach(u),m=k(l),E=i(l,"svg",{width:!0,height:!0,fill:!0,class:!0},1);var g=o(E);y=i(g,"path",{"fill-rule":!0,"clip-rule":!0,fill:!0,d:!0},1),o(y).forEach(u),g.forEach(u),L=k(l),l.forEach(u),c.forEach(u),this.h()},h:function(){h(s,"class","entry-title svelte-1mx06gf"),h(v,"class","entry-descr svelte-1mx06gf"),h(r,"class","flex-grow svelte-1mx06gf"),h(y,"fill-rule","evenodd"),h(y,"clip-rule","evenodd"),h(y,"fill","currentColor"),h(y,"d","M9.11458 11.5121L11.6146 8.51215L12.0414 8L11.6146 7.48785L9.11458 4.48785L7.88542 5.51215L9.29197 7.2L4 7.2V8.8L9.29197 8.8L7.88542 10.4879L9.11458 11.5121Z"),h(E,"width","16"),h(E,"height","16"),h(E,"fill","none"),h(E,"class","svelte-1mx06gf"),h(n,"rel","prefetch"),h(n,"href",x="./"+t[9].item.slug),h(n,"class","svelte-1mx06gf"),h(e,"class","svelte-1mx06gf")},m:function(t,c){d(t,e,c),g(e,n),g(n,r),g(r,s),s.innerHTML=D,g(r,a),g(r,v),g(v,p),g(n,m),g(n,E),g(E,y),g(n,L)},p:function(t,e){2&e&&D!==(D=t[9].item.title+"")&&(s.innerHTML=D),2&e&&S!==(S=F(t[9].item.group)+"")&&$(p,S),2&e&&x!==(x="./"+t[9].item.slug)&&h(n,"href",x)},d:function(t){t&&u(e)}}}function K(t){for(var e,n,r,s,a,v,p,E,L,x,A,$,b,j,F,T,H=new U({props:{sel:t[0],handleClick:t[2]}}),z=t[1],B=[],N=0;N<z.length;N+=1)B[N]=J(G(t,z,N));return{c:function(){e=w(),n=c("div"),r=c("div"),s=c("h1"),a=c("span"),v=l("Beantwortete"),p=l(" Fragen."),E=w(),L=c("h2"),x=l("Alle Antworten zu bisherigen Fragen."),A=w(),$=c("div"),b=c("div"),D(H.$$.fragment),j=w(),F=c("ul");for(var t=0;t<B.length;t+=1)B[t].c();this.h()},l:function(t){S('[data-svelte="svelte-16a68js"]',_.head).forEach(u),e=k(t),n=i(t,"DIV",{id:!0,class:!0});var c=o(n);r=i(c,"DIV",{class:!0});var l=o(r);s=i(l,"H1",{});var h=o(s);a=i(h,"SPAN",{class:!0});var d=o(a);v=f(d,"Beantwortete"),d.forEach(u),p=f(h," Fragen."),h.forEach(u),E=k(l),L=i(l,"H2",{});var g=o(L);x=f(g,"Alle Antworten zu bisherigen Fragen."),g.forEach(u),l.forEach(u),c.forEach(u),A=k(t),$=i(t,"DIV",{id:!0,class:!0});var m=o($);b=i(m,"DIV",{class:!0});var y=o(b);C(H.$$.fragment,y),j=k(y),F=i(y,"UL",{class:!0});for(var w=o(F),D=0;D<B.length;D+=1)B[D].l(w);w.forEach(u),y.forEach(u),m.forEach(u),this.h()},h:function(){_.title="Archiv",h(a,"class","emph"),h(r,"class","wrapper-inner"),h(n,"id","headline"),h(n,"class","svelte-1mx06gf"),h(F,"class","svelte-1mx06gf"),h(b,"class","wrapper-inner"),h($,"id","content"),h($,"class","svelte-1mx06gf")},m:function(t,c){d(t,e,c),d(t,n,c),g(n,r),g(r,s),g(s,a),g(a,v),g(s,p),g(r,E),g(r,L),g(L,x),d(t,A,c),d(t,$,c),g($,b),I(H,b,null),g(b,j),g(b,F);for(var l=0;l<B.length;l+=1)B[l].m(F,null);T=!0},p:function(t,e){var n=m(e,1)[0],r={};if(1&n&&(r.sel=t[0]),H.$set(r),2&n){var s;for(z=t[1],s=0;s<z.length;s+=1){var a=G(t,z,s);B[s]?B[s].p(a,n):(B[s]=J(a),B[s].c(),B[s].m(F,null))}for(;s<B.length;s+=1)B[s].d(1);B.length=z.length}},i:function(t){T||(M(H.$$.fragment,t),T=!0)},o:function(t){R(H.$$.fragment,t),T=!1},d:function(t){t&&u(e),t&&u(n),t&&u(A),t&&u($),V(H),y(B,t)}}}function O(t){t.params,t.query;return this.fetch("archiv.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function Z(t,e,n){var r=e.posts;b((function(){document.documentElement.setAttribute("data-theme","yellow")}));var s,a=new T(r,{isCaseSensitive:!1,findAllMatches:!0,includeMatches:!1,includeScore:!1,useExtendedSearch:!1,minMatchCharLength:1,shouldSort:!0,threshold:0,location:0,distance:100,keys:["group"]}),c=new T(r,{isCaseSensitive:!1,findAllMatches:!0,includeMatches:!1,includeScore:!1,useExtendedSearch:!1,minMatchCharLength:1,shouldSort:!0,threshold:0,location:4,distance:100,keys:["date"]}),l="Alles";return t.$set=function(t){"posts"in t&&n(3,r=t.posts)},t.$$.update=function(){1&t.$$.dirty&&n(1,s="Alles"==l?c.search("-"):a.search(l.toLowerCase()))},c.search("-"),[l,s,function(t){n(0,l=t)},r]}var Q=function(c){t(o,a);var l,i=(l=o,function(){var t,e=L(l);if(q()){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return x(this,t)});function o(t){var a;return e(this,o),a=i.call(this),n(s(a),t,Z,K,r,{posts:3}),a}return o}();export default Q;export{O as preload};
