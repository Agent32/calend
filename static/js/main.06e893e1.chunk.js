(this.webpackJsonpcalend=this.webpackJsonpcalend||[]).push([[0],{31:function(t,e,r){t.exports={main:"groupListStyle_main__2DL7u",groupAva:"groupListStyle_groupAva__1hXbG"}},75:function(t,e,r){},76:function(t,e,r){},84:function(t,e,r){"use strict";r.r(e);var n=r(12),a=r.n(n),c=r(29),s=r(21),i=r(25),o=r(42),j=r(30),u=r.n(j),d=r(43),l=r(47),b=r(18),h=r(44),p=r.n(h).a.create({baseURL:"https://60d5f509943aa60017768d23.mockapi.io"}),O=function(){return p.get("/groups").then((function(t){return t.data}))},g={groups:[{id:"load",name:"bor",avatar:"link",startDate:"load",endDate:"load",groupProfile:"load",calendar:[{id:"1",groupId:"1",title:"Lection1",date:"2021-06-07",start:"2021-06-07T16:10:00"},{id:"2",groupId:"1",title:"Lection2",date:"2021-06-01",start:"2021-06-01T15:20:00"}],mentor:"load",userList:[{id:"load",classification:"intern",firstName:"string",lastName:"string",email:"string",phone:"string",room:"string",img:"pick"}]}],groupsSettings:{test:"load"}};var x=Object(i.b)({groupsPart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-GROUPS-LIST/group-list-type":return Object(b.a)(Object(b.a)({},t),{},{groups:Object(l.a)(e.data)});default:return t}}}),f=Object(i.c)(x,Object(i.a)(o.a)),m=(r(75),r(76),r(4)),v=(r(77),r(87)),L=r(88),S=r(3);function k(t){return Object(S.jsxs)(v.a,{bg:"dark",variant:"dark",children:[Object(S.jsx)(v.a.Brand,{href:"#",children:" Intern management System "}),Object(S.jsxs)(L.a,{className:"mr-auto",children:[Object(S.jsx)(L.a.Link,{href:"#groups",children:"Groups"}),Object(S.jsx)(L.a.Link,{href:"#bib",children:"Functional"}),Object(S.jsx)(L.a.Link,{href:"#did",children:"Functional"})]})]})}var y=r(0),T=r(24),D=r(86),P=r(31),G=r.n(P),I=function(t){var e=Object(y.useState)(!0),r=Object(T.a)(e,2),n=(r[0],r[1],Object(y.useState)(t.groupList[0].calendar)),a=Object(T.a)(n,2),c=(a[0],a[1],Object(y.useState)(t.groupList[0].userList)),s=Object(T.a)(c,2),i=(s[0],s[1],t.groupList.map((function(t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{className:G.a.groupAva,children:Object(S.jsx)("img",{src:t.avatar,alt:"ava"})}),Object(S.jsx)("td",{children:t.name}),Object(S.jsx)("td",{children:t.mentor}),Object(S.jsxs)("td",{children:[" ",t.startDate.slice(0,10)," "]}),Object(S.jsxs)("td",{children:[" ",t.endDate.slice(0,10)]}),Object(S.jsx)("td",{children:t.groupProfile})]},t.id)})));return Object(S.jsx)("div",{className:G.a.main,children:Object(S.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Avatar"}),Object(S.jsx)("th",{children:"Group name"}),Object(S.jsx)("th",{children:"Mentor"}),Object(S.jsx)("th",{children:"Start Date"}),Object(S.jsx)("th",{children:"End Date"}),Object(S.jsx)("th",{children:"\u0421ourse"})]})}),Object(S.jsx)("tbody",{children:i})]})})};var F=Object(s.b)((function(t){return{groupList:t.groupsPart.groups}}),{getGroupsListTC:function(){return function(){var t=Object(d.a)(u.a.mark((function t(e){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:r=t.sent,e({type:"SET-GROUPS-LIST/group-list-type",data:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){return Object(y.useEffect)((function(){t.getGroupsListTC()}),[]),Object(S.jsx)(I,Object(b.a)({},t))}));var N=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(k,{}),Object(S.jsxs)(m.d,{children:[Object(S.jsx)(m.a,{exact:!0,from:"/",to:"/groups"}),Object(S.jsx)(m.b,{path:"/groups",component:F})]})]})},_=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,89)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;r(t),n(t),a(t),c(t),s(t)}))};a.a.render(Object(S.jsx)(c.a,{children:Object(S.jsx)(s.a,{store:f,children:Object(S.jsx)(N,{})})}),document.getElementById("root")),_()}},[[84,1,2]]]);
//# sourceMappingURL=main.06e893e1.chunk.js.map