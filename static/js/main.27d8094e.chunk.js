(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c,s=n(5),o=n.n(s),i=n(4),r=n(1),a=n(2),u=n.n(a),l=(n(10),n(11),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="NONE",t.ALPHABET="APLHABET",t.LENGTH="LENGTH"}(c||(c={}));var h=function(){var t=Object(r.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(r.useState)(c.NONE),a=Object(i.a)(o,2),h=a[0],j=a[1],N=function(){var t=[].concat(b);return t.sort((function(t,e){switch(h){case c.ALPHABET:return t.localeCompare(e);case c.LENGTH:return t.length-e.length;default:return 0}})),n?t.reverse():t}();return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":h!==c.ALPHABET}),onClick:function(){return j(c.ALPHABET)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":h!==c.LENGTH}),onClick:function(){return j(c.LENGTH)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!n}),onClick:function(){s((function(t){return!t}))},children:"Reverse"}),(n||h!==c.NONE)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(c.NONE),s(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{className:"GoodsList",children:N.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.27d8094e.chunk.js.map