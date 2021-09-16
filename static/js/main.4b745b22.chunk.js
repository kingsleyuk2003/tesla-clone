(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{37:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,s,l,d,j,b,x,h,p,O,u,g=t(0),f=t.n(g),m=t(14),v=t.n(m),y=(t(37),t.p,t(5)),w=t(7),k=t(6),I=t(30),M=t.n(I),S=t(31),T=t.n(S),D=t(18),z=Object(D.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),C=function(n){return n.car.cars},E=z.reducer,X=t(17),A=t(1),J=function(){var n=Object(g.useState)(!1),e=Object(w.a)(n,2),t=e[0],i=e[1],c=Object(X.b)(C);return Object(A.jsxs)(Y,{children:[Object(A.jsx)("a",{children:Object(A.jsx)("img",{src:"../tesla-clone/images/logo.svg",alt:""})}),Object(A.jsx)(B,{children:c&&c.map((function(n,e){return Object(A.jsx)("a",{href:"#",children:n},e)}))}),Object(A.jsxs)(N,{children:[Object(A.jsx)("a",{href:"#",children:"Shop"}),Object(A.jsx)("a",{href:"#",children:"Tesla Account"}),Object(A.jsx)(R,{onClick:function(){return i(!0)}})]}),Object(A.jsxs)(U,{show:t,children:[Object(A.jsx)(F,{children:Object(A.jsx)(q,{onClick:function(n){return i(!1)}})}),c&&c.map((function(n,e){return Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:n},e)})})),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Existing Inventory"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Used Inventory"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Trade-in"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Cybertruck"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Roadster"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Existing Inventory"})})]})]})},Y=k.a.div(i||(i=Object(y.a)(["\n  min-height: 60px;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n"]))),B=k.a.div(c||(c=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: center;\n  a {\n    font-weight: 600;\n    text-transform: uppercase;\n    padding: 0 10px;\n    flex-wrap: nowrap;\n  }\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),N=k.a.div(r||(r=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  a {\n    font-weight: 600;\n    text-transform: uppercase;\n    margin-right: 10px;\n    flex-wrap: nowrap;\n  }\n"]))),R=Object(k.a)(M.a)(a||(a=Object(y.a)(["\n  cursor: pointer;\n"]))),U=k.a.div(o||(o=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background: white;\n  width: 300px;\n  z-index: 10;\n  list-style: none;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  transform: ",";\n  //   display: ","; //this does not work with transition\n  transition: transform 0.2s ease-in-out;\n  li {\n    padding: 15px 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    a {\n      font-weight: 600;\n    }\n  }\n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"}),(function(n){return n.show?"flex":"none"})),q=Object(k.a)(T.a)(s||(s=Object(y.a)(["\n  cursor: pointer;\n"]))),F=k.a.div(l||(l=Object(y.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),G=t(23),H=t.n(G),K=function(n){var e=n.description,t=n.title,i=n.backgroundImg;return Object(A.jsxs)(L,{backgroundImg:i,children:[Object(A.jsx)(H.a,{bottom:!0,children:Object(A.jsxs)(P,{children:[Object(A.jsx)("h1",{children:t}),Object(A.jsx)("p",{children:e})]})}),Object(A.jsx)($,{children:Object(A.jsxs)(H.a,{bottom:!0,children:[Object(A.jsxs)(Q,{children:[Object(A.jsx)(V,{children:"Custom Order"}),Object(A.jsx)(W,{children:"Existing Inventory"})]}),Object(A.jsx)(Z,{src:"../tesla-clone/images/down-arrow.svg"})]})})]})},L=k.a.div(d||(d=Object(y.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: orange;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  alight-items: center;\n"])),(function(n){return'url("../tesla-clone/images/'.concat(n.backgroundImg,'")')})),P=k.a.div(j||(j=Object(y.a)(["\n  padding-top: 15vh;\n  text-align: center;\n"]))),Q=k.a.div(b||(b=Object(y.a)(["\n  display: flex;\n  margin-bottom: 30px;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  } ;\n"]))),V=k.a.a(x||(x=Object(y.a)(["\n background-color: rgba(23, 26, 32, 0.8);\n height : 40px;\n width: 256px;\n color: white;\n display: flex;\n justify-content: center;\n align-items: center;\n border-radius: 100px;\n opacity : 0.85;\n text-transform: uppercase;\n font-size; 12px;\n cursor: pointer;\n margin: 8px;\n :hover{\n   opacity: 1;\n      \n }\n\n"]))),W=Object(k.a)(V)(h||(h=Object(y.a)(["\n  background-color: white;\n  opacity: 0.65;\n  color: black;\n"]))),Z=k.a.img(p||(p=Object(y.a)(["\n  height: 40px;\n  overflow-x: hidden;\n  animation: animateDown infinite 1.5s;\n"]))),$=k.a.div(O||(O=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),_=function(){return Object(A.jsxs)(nn,{children:[Object(A.jsx)(K,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg"}),Object(A.jsx)(K,{title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg"}),Object(A.jsx)(K,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg"}),Object(A.jsx)(K,{title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg"})]})},nn=k.a.div(u||(u=Object(y.a)(["\n\n  height: 100vh;\n"])));var en=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(J,{}),Object(A.jsx)(_,{})]})},tn=Object(D.a)({reducer:{car:E}});v.a.render(Object(A.jsx)(f.a.StrictMode,{children:Object(A.jsx)(X.a,{store:tn,children:Object(A.jsx)(en,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4b745b22.chunk.js.map