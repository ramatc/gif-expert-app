(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(5),i=n.n(c),s=n(2),o=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>0&&(t([c]),i(""))},children:Object(o.jsxs)("div",{className:"div_form",children:[Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){i(e.target.value)},placeholder:"Enter your favourites GIFs..."}),Object(o.jsx)("button",{className:"btnSearch",children:Object(o.jsx)("i",{className:"fas fa-search"})})]})})},j=n(7),l=n(4),d=n.n(l),h=n(6),f=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,a,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"o2jFEQeA5I0nwBWGLDuFJf2uKY2Zi1m8",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=15&api_key=").concat("o2jFEQeA5I0nwBWGLDuFJf2uKY2Zi1m8"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r},m=function(e){var t=e.title,n=e.url;return Object(o.jsx)("div",{className:"card animate__animated animate__fadeIn",children:Object(o.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:"link-img",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsxs)("p",{children:[" ",t," "]})]})})},p=function(e){var t=e.category,n=b(t),a=n.data,r=n.loading;return Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsxs)("h3",{className:"animate__animated animate__fadeIn gif-title",children:[" ",0===a.length?"":"".concat(t,":")," "]}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash loading",children:"Loading..."}),0===a.length&&Object(o.jsxs)("div",{className:"container_not_found",children:[Object(o.jsx)("h3",{className:"not_found",children:"No GIFs found for your search"}),Object(o.jsx)("img",{src:"./crying-cowbow-emoji.gif",alt:"No GIFs found for your search",className:"img_results"})]}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(o.jsx)(m,Object(j.a)({},e),e.id)}))})]})},g=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{className:"footer",children:["Made by",Object(o.jsx)("a",{href:"https://www.linkedin.com/in/ramiro-tanquias/",target:"_blank",rel:"noreferrer noopener",className:"link",children:" Ramiro"}),Object(o.jsx)("a",{href:"https://github.com/ramatc/gif-expert-app",target:"_blank",rel:"noreferrer noopener",children:Object(o.jsx)("i",{className:"fab fa-github icon-github"})})]})})},x=function(){var e=Object(a.useState)(["Rick and Morty"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"https://ramatc.github.io/gif-expert-app/",children:"GifExpertApp"})}),Object(o.jsx)("h2",{children:"Search Your Favourites GIFs"}),Object(o.jsx)(u,{setCategories:r}),Object(o.jsx)("hr",{className:"main-hr"}),Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)(p,{category:e},e)}))}),Object(o.jsx)(g,{})]})},O=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.4cabfe2e.chunk.js.map