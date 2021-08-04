import{S as t,i as e,s as a,l as s,f as n,I as r,d as c,J as o,A as l,K as i,e as u,t as h,c as f,a as v,g as d,H as m,L as $,h as p,b as g,M as y,N as E,O as b,P as x,Q as w,R as I,T as M,k as T,j as k,n as D,m as N,U as V,o as q,V as A,x as B,u as O,v as S,W as P,X as R,Y as F}from"../chunks/vendor-087b847d.js";function L(t){let e,a,s,r;return{c(){e=u("div"),a=h(t[0])},l(s){e=f(s,"DIV",{});var n=v(e);a=d(n,t[0]),n.forEach(c)},m(c,o){n(c,e,o),m(e,a),s||(r=$(e,"click",t[3]),s=!0)},p(t,e){1&e&&p(a,t[0])},d(t){t&&c(e),s=!1,r()}}}function U(t){let e,a,s,r;return{c(){e=u("form"),a=u("input"),this.h()},l(t){e=f(t,"FORM",{});var s=v(e);a=f(s,"INPUT",{type:!0,class:!0}),s.forEach(c),this.h()},h(){g(a,"type","number"),a.required=t[1],g(a,"class","svelte-11fg3wv")},m(c,o){n(c,e,o),m(e,a),y(a,t[0]),s||(r=[$(a,"input",t[6]),$(a,"blur",t[4]),E(j.call(null,a)),$(e,"submit",b(t[4])),$(e,"keydown",t[5])],s=!0)},p(t,e){2&e&&(a.required=t[1]),1&e&&i(a.value)!==t[0]&&y(a,t[0])},d(t){t&&c(e),s=!1,x(r)}}}function C(t){let e;function a(t,e){return t[2]?U:L}let o=a(t),l=o(t);return{c(){l.c(),e=s()},l(t){l.l(t),e=s()},m(t,a){l.m(t,a),n(t,e,a)},p(t,[s]){o===(o=a(t))&&l?l.p(t,s):(l.d(1),l=o(t),l&&(l.c(),l.m(e.parentNode,e)))},i:r,o:r,d(t){l.d(t),t&&c(e)}}}function j(t){t.focus()}function G(t,e,a){let{value:s,required:n=!0}=e;const r=o();let c,u=!1;return l((()=>{c=s})),t.$$set=t=>{"value"in t&&a(0,s=t.value),"required"in t&&a(1,n=t.required)},[s,n,u,function(){a(2,u=!0)},function(){s!=c&&r("submit",s),a(2,u=!1)},function(t){"Escape"==t.key&&(t.preventDefault(),a(0,s=c),a(2,u=!1))},function(){s=i(this.value),a(0,s)}]}class H extends t{constructor(t){super(),e(this,t,G,C,a,{value:0,required:1})}}function J(t){let e,a,s,r,o,l,i,y,E,b,P,R,F,L,U,C,j,G,J,K,Q=Math.floor(t[1]+1)+"";function W(e){t[5](e)}let X={};return void 0!==t[0]&&(X.value=t[0]),R=new H({props:X}),w.push((()=>I(R,"value",W))),{c(){e=u("div"),a=u("button"),s=M("svg"),r=M("path"),o=T(),l=u("div"),i=u("div"),y=u("strong"),E=h(Q),b=T(),P=u("strong"),k(R.$$.fragment),L=T(),U=u("button"),C=M("svg"),j=M("path"),this.h()},l(t){e=f(t,"DIV",{class:!0});var n=v(e);a=f(n,"BUTTON",{"aria-label":!0,class:!0});var u=v(a);s=f(u,"svg",{"aria-hidden":!0,viewBox:!0,class:!0},1);var h=v(s);r=f(h,"path",{d:!0,class:!0},1),v(r).forEach(c),h.forEach(c),u.forEach(c),o=D(n),l=f(n,"DIV",{class:!0});var m=v(l);i=f(m,"DIV",{class:!0,style:!0});var $=v(i);y=f($,"STRONG",{style:!0,"aria-hidden":!0,class:!0});var p=v(y);E=d(p,Q),p.forEach(c),b=D($),P=f($,"STRONG",{class:!0});var g=v(P);N(R.$$.fragment,g),g.forEach(c),$.forEach(c),m.forEach(c),L=D(n),U=f(n,"BUTTON",{"aria-label":!0,class:!0});var x=v(U);C=f(x,"svg",{"aria-hidden":!0,viewBox:!0,class:!0},1);var w=v(C);j=f(w,"path",{d:!0,class:!0},1),v(j).forEach(c),w.forEach(c),x.forEach(c),n.forEach(c),this.h()},h(){g(r,"d","M0,0.5 L1,0.5"),g(r,"class","svelte-17yhy5h"),g(s,"aria-hidden","true"),g(s,"viewBox","0 0 1 1"),g(s,"class","svelte-17yhy5h"),g(a,"aria-label","Decrease the counter by one"),g(a,"class","svelte-17yhy5h"),V(y,"top","-100%"),g(y,"aria-hidden","true"),g(y,"class","svelte-17yhy5h"),g(P,"class","svelte-17yhy5h"),g(i,"class","counter-digits svelte-17yhy5h"),V(i,"transform","translate(0, "+100*t[2]+"%)"),g(l,"class","counter-viewport svelte-17yhy5h"),g(j,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),g(j,"class","svelte-17yhy5h"),g(C,"aria-hidden","true"),g(C,"viewBox","0 0 1 1"),g(C,"class","svelte-17yhy5h"),g(U,"aria-label","Increase the counter by one"),g(U,"class","svelte-17yhy5h"),g(e,"class","counter svelte-17yhy5h")},m(c,u){n(c,e,u),m(e,a),m(a,s),m(s,r),m(e,o),m(e,l),m(l,i),m(i,y),m(y,E),m(i,b),m(i,P),q(R,P,null),m(e,L),m(e,U),m(U,C),m(C,j),G=!0,J||(K=[$(a,"click",t[4]),$(U,"click",t[6])],J=!0)},p(t,[e]){(!G||2&e)&&Q!==(Q=Math.floor(t[1]+1)+"")&&p(E,Q);const a={};!F&&1&e&&(F=!0,a.value=t[0],A((()=>F=!1))),R.$set(a),(!G||4&e)&&V(i,"transform","translate(0, "+100*t[2]+"%)")},i(t){G||(B(R.$$.fragment,t),G=!0)},o(t){O(R.$$.fragment,t),G=!1},d(t){t&&c(e),S(R),J=!1,x(K)}}}function K(t,e,a){let s,n,{count:r=0}=e;const c=P();R(t,c,(t=>a(1,n=t)));return t.$$set=t=>{"count"in t&&a(0,r=t.count)},t.$$.update=()=>{var e;2&t.$$.dirty&&a(2,s=(n%(e=1)+e)%e)},[r,n,s,c,()=>{a(0,r-=1),c.set(r)},function(t){r=t,a(0,r)},()=>{a(0,r+=1),c.set(r)}]}class Q extends t{constructor(t){super(),e(this,t,K,J,a,{count:0})}}function W(t){let e;return{c(){e=u("canvas"),this.h()},l(t){e=f(t,"CANVAS",{width:!0,height:!0,class:!0}),v(e).forEach(c),this.h()},h(){g(e,"width",600),g(e,"height",600),g(e,"class","svelte-8xfg82")},m(a,s){n(a,e,s),t[3](e)},p:r,i:r,o:r,d(a){a&&c(e),t[3](null)}}}function X(t,e,a){let s,{n:n}=e,{m:r}=e;l((()=>{let t=requestAnimationFrame((function e(a){t=requestAnimationFrame(e),c(s,n,r)}));return()=>{cancelAnimationFrame(t)}}));const c=function(t,e,a){const s=t.getContext("2d");s.beginPath(),s.clearRect(0,0,800,800),s.imageSmoothingEnabled=!0;const n=250,r=300,c=300;if(s.arc(r,c,n,0,2*Math.PI),s.stroke(),s.font="37.5px arial",s.textBaseline="middle",s.textAlign="center",e<40){s.translate(r,c);for(let t=0;t<e;t++){const a=2*t*Math.PI/e;s.rotate(a),s.translate(0,-275),s.rotate(-a),s.fillText(t.toString(),0,0),s.rotate(a),s.translate(0,275),s.rotate(-a)}s.resetTransform()}for(let o=0;o<e;o++){const t=2*o*Math.PI/e,l=r+Math.sin(t)*n,i=c-Math.cos(t)*n,u=r+Math.sin(t*a)*n,h=c-Math.cos(t*a)*n;s.moveTo(l,i),s.lineTo(u,h),s.stroke()}};return t.$$set=t=>{"n"in t&&a(1,n=t.n),"m"in t&&a(2,r=t.m)},[s,n,r,function(t){w[t?"unshift":"push"]((()=>{s=t,a(0,s)}))}]}class Y extends t{constructor(t){super(),e(this,t,X,W,a,{n:1,m:2})}}function z(t){let e,a,s,r,o,l,i,h,d,$,p,y,E;function b(e){t[2](e)}let x={};function M(e){t[3](e)}void 0!==t[0]&&(x.count=t[0]),o=new Q({props:x}),w.push((()=>I(o,"count",b)));let V={};return void 0!==t[1]&&(V.count=t[1]),h=new Q({props:V}),w.push((()=>I(h,"count",M))),y=new Y({props:{n:t[0],m:t[1]}}),{c(){e=T(),a=u("section"),s=u("div"),r=u("div"),k(o.$$.fragment),i=T(),k(h.$$.fragment),$=T(),p=u("div"),k(y.$$.fragment),this.h()},l(t){F('[data-svelte="svelte-1anpopb"]',document.head).forEach(c),e=D(t),a=f(t,"SECTION",{});var n=v(a);s=f(n,"DIV",{class:!0});var l=v(s);r=f(l,"DIV",{class:!0});var u=v(r);N(o.$$.fragment,u),i=D(u),N(h.$$.fragment,u),u.forEach(c),$=D(l),p=f(l,"DIV",{class:!0});var d=v(p);N(y.$$.fragment,d),d.forEach(c),l.forEach(c),n.forEach(c),this.h()},h(){document.title="Home",g(r,"class","column svelte-10c1a2n"),g(p,"class","column svelte-10c1a2n"),g(s,"class","row svelte-10c1a2n")},m(t,c){n(t,e,c),n(t,a,c),m(a,s),m(s,r),q(o,r,null),m(r,i),q(h,r,null),m(s,$),m(s,p),q(y,p,null),E=!0},p(t,[e]){const a={};!l&&1&e&&(l=!0,a.count=t[0],A((()=>l=!1))),o.$set(a);const s={};!d&&2&e&&(d=!0,s.count=t[1],A((()=>d=!1))),h.$set(s);const n={};1&e&&(n.n=t[0]),2&e&&(n.m=t[1]),y.$set(n)},i(t){E||(B(o.$$.fragment,t),B(h.$$.fragment,t),B(y.$$.fragment,t),E=!0)},o(t){O(o.$$.fragment,t),O(h.$$.fragment,t),O(y.$$.fragment,t),E=!1},d(t){t&&c(e),t&&c(a),S(o),S(h),S(y)}}}const Z=!0;function _(t,e,a){let s=10,n=2;return[s,n,function(t){s=t,a(0,s)},function(t){n=t,a(1,n)}]}class tt extends t{constructor(t){super(),e(this,t,_,z,a,{})}}export{tt as default,Z as prerender};