(this.webpackJsonptestuf=this.webpackJsonptestuf||[]).push([[0],{142:function(A,e,t){},143:function(A,e,t){},144:function(A,e,t){"use strict";t.r(e);t(65),t(92),t(94),t(95),t(97),t(98),t(99),t(100),t(101),t(102),t(103),t(104),t(106),t(107),t(108),t(109),t(110),t(111),t(112),t(113),t(114),t(115),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(132),t(133),t(134);var c=t(5),n=t.n(c),u=t(62),a=t.n(u),r=t(36),f=(t(142),t(143),t(63)),d=t.n(f),v=function(A){var e=A.name,t=A.quantity;return n.a.createElement("div",{className:"product"},n.a.createElement("p",null,e),n.a.createElement("p",null,t))},b=function(A){return A.products.map((function(A){return n.a.createElement(v,{name:A.name,quantity:A.quantity})}))},w=function(){var A=Object(c.useState)([]),e=Object(r.a)(A,2),t=e[0],u=e[1],a=Object(c.useState)(""),f=Object(r.a)(a,2),v=f[0],w=f[1];return Object(c.useEffect)((function(){}),[]),n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"header"},n.a.createElement("p",null,"Eation")),n.a.createElement("div",{className:"qrblock"},n.a.createElement("input",{type:"text",value:v,placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c QR \u0441 \u0447\u0435\u043a\u0430!",onChange:function(A){return w(A.currentTarget.value)}}),n.a.createElement("button",{onClick:function(A){var e=v.slice(v.indexOf("fn")+3,v.indexOf("&i")),t=v.slice(v.indexOf("i")+2,v.indexOf("&fp")),c=v.slice(v.indexOf("fp")+3,v.indexOf("&n"));fetch("http://192.168.43.76:8080/test?fn=".concat(e,"&fd=").concat(t,"&fpd=").concat(c),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(A){return A.json()})).then((function(A){return u(A.document.receipt.items)})),A.preventDefault()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0438"),n.a.createElement("button",null,n.a.createElement("img",{src:d.a,alt:"refresh",className:"refreshbutton"}))),n.a.createElement("div",{className:"list"},n.a.createElement(b,{products:t})))};a.a.render(n.a.createElement(w,null),document.getElementById("root"))},63:function(A,e){A.exports="data:image/png;base64,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"},64:function(A,e,t){A.exports=t(144)}},[[64,1,2]]]);
//# sourceMappingURL=main.7c954841.chunk.js.map