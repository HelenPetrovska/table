(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{81:function(e,a,t){},86:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(24),r=t.n(l),s=(t(81),t(11)),i=t(146),o=t(148),d=t(142),j=t(144),b=t(147),u=t(143),O=t(145),g=[{id:1,num:4,date:"20.02.2022",user:"Petro",comment:"any"},{id:2,num:5,date:"21.02.2022",user:"Roman",comment:"any"}],x=[{Kyivska:{G:{2017:{XX:{value:15e4,dateRelease:"2017-12-31"},YY:{value:1e5,dateRelease:"2017-12-31"},ZZ:{value:77,dateRelease:"2017-12-31"}},2018:{XX:{value:16e4,dateRelease:"2018-12-31"},YY:{value:11e4,dateRelease:"2018-12-31"},ZZ:{value:72,dateRelease:"2018-12-31"}},2019:{XX:{value:13e4,dateRelease:"2019-12-31"},YY:{value:85e3,dateRelease:"2019-12-31"},ZZ:{value:72,dateRelease:"2019-12-31"}}}},Odeska:{G:{2017:{XX:{value:1e4,dateRelease:"2017-12-31"},YY:{value:5e3,dateRelease:"2017-12-31"},ZZ:{value:45,dateRelease:"2017-12-31"}},2019:{XX:{value:15e3,dateRelease:"2019-12-01"},YY:{value:0,dateRelease:"2022-02-18"},ZZ:{value:0,dateRelease:"2022-02-18"}}}},Lvivska:{G:{2017:{XX:{value:64e4,dateRelease:"2017-12-31"},YY:{value:51e4,dateRelease:"2017-08-01"},ZZ:{value:67,dateRelease:"2017-08-01"}},2018:{XX:{value:74e4,dateRelease:"2018-12-31"},YY:{value:53e4,dateRelease:"2018-08-01"},ZZ:{value:61,dateRelease:"2018-08-01"}}}}}],h=t(1),p=function(e){var a=e.year,t=e.toggleIsVisibleModal;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{component:"th",scope:"row",align:"center",onClick:t,children:a&&a.XX.value||"-"}),Object(h.jsx)(d.a,{component:"th",scope:"row",align:"center",onClick:t,children:a&&a.YY.value||"-"}),Object(h.jsx)(d.a,{component:"th",scope:"row",align:"center",onClick:t,children:a&&a.ZZ.value||"-"})]})},v=function(e){var a=e.region,t=e.regionName,n=e.toggleIsVisibleModal;return Object(h.jsxs)(u.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(h.jsx)(d.a,{component:"th",scope:"row",align:"center",children:t}),Object(h.jsx)(p,{year:a.G[2017],toggleIsVisibleModal:n}),Object(h.jsx)(p,{year:a.G[2018],toggleIsVisibleModal:n}),Object(h.jsx)(p,{year:a.G[2019],toggleIsVisibleModal:n})]})},m=function(e){var a=e.toggleIsVisibleModal;return Object(h.jsx)(j.a,{component:O.a,children:Object(h.jsxs)(i.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(h.jsxs)(b.a,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{rowSpan:3,children:"regions"}),Object(h.jsx)(d.a,{align:"center",colSpan:3,children:"2017"}),Object(h.jsx)(d.a,{align:"center",colSpan:3,children:"2018"}),Object(h.jsx)(d.a,{align:"center",colSpan:3,children:"2019"})]}),Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{align:"center",children:"xx"}),Object(h.jsx)(d.a,{align:"center",children:"yy"}),Object(h.jsx)(d.a,{align:"center",children:"zz"}),Object(h.jsx)(d.a,{align:"center",children:"xx"}),Object(h.jsx)(d.a,{align:"center",children:"yy"}),Object(h.jsx)(d.a,{align:"center",children:"zz"}),Object(h.jsx)(d.a,{align:"center",children:"xx"}),Object(h.jsx)(d.a,{align:"center",children:"yy"}),Object(h.jsx)(d.a,{align:"center",children:"zz"})]})]}),Object(h.jsx)(o.a,{children:x.map((function(e,t){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(v,{region:e.Kyivska,regionName:Object.keys(e)[0],toggleIsVisibleModal:a}),Object(h.jsx)(v,{region:e.Odeska,regionName:Object.keys(e)[1],toggleIsVisibleModal:a}),Object(h.jsx)(v,{region:e.Lvivska,regionName:Object.keys(e)[2],toggleIsVisibleModal:a})]},t)}))})]})})},y=t(141),R=t(139),f=t(15),k=t(137),M=t(138);t(86);var Y=function(e){var a=e.toggleIsVisibleModal,t=e.supportArr,c=e.setSupportArr,l=Object(n.useState)(""),r=Object(s.a)(l,2),g=r[0],x=r[1],p=Object(n.useState)("Roman"),v=Object(s.a)(p,2),m=v[0],y=v[1],R=Object(n.useState)("any"),Y=Object(s.a)(R,2),S=Y[0],V=Y[1],X=function(e){var a=e.getDate();a<10&&(a="0".concat(a));var t=e.getMonth()+1;t<10&&(t="0".concat(t));var n=e.getFullYear();return"".concat(n,"-").concat(t,"-").concat(a)}(new Date),Z=Object(n.useState)(X),I=Object(s.a)(Z,2),w=I[0],C=I[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"supportTable",children:[Object(h.jsx)("div",{className:"supportTable__wrapper",children:Object(h.jsx)(j.a,{component:O.a,children:Object(h.jsxs)(i.a,{sx:{minWidth:300},"aria-label":"simple table",children:[Object(h.jsx)(b.a,{children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{align:"center",children:"value"}),Object(h.jsx)(d.a,{align:"center",children:"date"}),Object(h.jsx)(d.a,{align:"center",children:"user"}),Object(h.jsx)(d.a,{align:"center",children:"comment"})]})}),Object(h.jsxs)(o.a,{children:[t.map((function(e){return Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{align:"center",children:e.num}),Object(h.jsx)(d.a,{align:"center",children:e.date}),Object(h.jsx)(d.a,{align:"center",children:e.user}),Object(h.jsx)(d.a,{align:"center",children:e.comment})]},e.id)})),Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{align:"center",children:Object(h.jsx)(k.a,{id:"standard-number",className:"textField",label:"",type:"number",variant:"standard",placeholder:"enter number",value:g,onChange:function(e){x(+e.target.value)}})}),Object(h.jsx)(d.a,{align:"center",children:Object(h.jsx)(k.a,{id:"date",label:"",type:"date",value:w,onChange:function(e){C(e.target.value)}})}),Object(h.jsx)(d.a,{align:"center",children:Object(h.jsx)(k.a,{label:"",id:"standard-size-normal",variant:"standard",placeholder:"enter user",value:m,onChange:function(e){y(e.target.value)}})}),Object(h.jsx)(d.a,{align:"center",children:Object(h.jsx)(k.a,{label:"",id:"standard-size-normal",placeholder:"enter comment",variant:"standard",value:S,onChange:function(e){V(e.target.value)}})})]})]})]})})}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)(M.a,{variant:"contained",onClick:function(){var e=function(e){var a=e.split("-");return"".concat(a[2],".").concat(a[1],".").concat(a[0])}(w),a={id:t[t.length-1].id+1,num:g||"-",date:e||X,user:m,comment:S};c((function(e){return[].concat(Object(f.a)(e),[a])})),x(""),C(X),y("Roman"),V("any")},children:"Add"}),Object(h.jsx)(M.a,{variant:"contained",onClick:a,children:"Close"})]})]})})},S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},V=function(e){var a=e.toggleIsVisibleModal,t=e.isVisibleModal,n=e.supportArr,c=e.setSupportArr;return Object(h.jsx)("div",{children:Object(h.jsx)(R.a,{open:t,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(h.jsx)(y.a,{sx:S,children:Object(h.jsx)(Y,{toggleIsVisibleModal:a,supportArr:n,setSupportArr:c})})})})},X=(t(91),function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(g),r=Object(s.a)(l,2),i=r[0],o=r[1],d=function(){c(!t)};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m,{toggleIsVisibleModal:d}),t&&Object(h.jsx)(V,{toggleIsVisibleModal:d,isVisibleModal:t,supportArr:i,setSupportArr:o})]})});r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.5c36bcce.chunk.js.map