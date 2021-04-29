(this["webpackJsonpcalendar-react-mern"]=this["webpackJsonpcalendar-react-mern"]||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(7),s=a.n(c),r=a(16),o=(a(64),a(21)),l=a(52),i=a(10),j=a(14),d=a.n(j),b="[ui] Open modal",m="[ui] Close modal",u="[event] Set active",O={events:[{title:"Birthday",start:d()().toDate(),end:d()().add(2,"hours").toDate(),notes:"Buy something",user:{_id:"123",name:"anthony"}}],activeEvent:null},h={modalOpen:!1},p=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case b:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case u:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:n});default:return e}}}),x="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,f=Object(o.d)(p,x(Object(o.a)(l.a))),v=a(56),N=a(8),g=(a(66),a(4)),y=function(){return Object(g.jsx)("div",{className:"container login-container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(g.jsx)("h3",{children:"Ingreso"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control mb-1",placeholder:"Email"})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"password",className:"form-control mb-1",placeholder:"Password"})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(g.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(g.jsx)("h3",{children:"Register"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"text",className:"form-control mb-1",placeholder:"Name",autoComplete:"off"})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"email",className:"form-control mb-1",placeholder:"Email"})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"password",className:"form-control mb-1",placeholder:"Password",autoComplete:"off"})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"password",className:"form-control mb-1",placeholder:"Password"})}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})},w=a(20),S=a(44),E={previous:"<",next:">",noEventsInRange:"No events in that range",showMore:function(e){return"+ See more (".concat(e,")")}},C=function(){return Object(g.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(g.jsx)("span",{className:"navbar-brand ms-1",children:"Sergio"}),Object(g.jsxs)("button",{className:"btn btn-outline-danger me-1",children:[Object(g.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(g.jsx)("span",{children:" Exit"})]})]})},D=function(e){var t=e.event,a=t.title,n=t.user;return Object(g.jsxs)("div",{children:[Object(g.jsx)("strong",{children:a}),Object(g.jsxs)("span",{children:["- ",n.name," "]})]})},k=a(29),_=a(39),I=a.n(_),R=a(40),A=a.n(R),B=a(55),P=a.n(B),T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},V=function(){return{type:b}};a(96);I.a.setAppElement("#root");var M=d()().minutes(0).seconds(0).add(1,"hours"),H=M.clone().add(1,"hours"),J={title:"Event",notes:"",start:M.toDate(),end:H.toDate()},L=function(){var e=Object(n.useState)(M.toDate()),t=Object(w.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(H.toDate()),o=Object(w.a)(s,2),l=o[0],j=o[1],b=Object(n.useState)({initialState:J}),u=Object(w.a)(b,2),O=u[0],h=u[1],p=O.notes,x=O.title,f=O.start,v=O.end,N=Object(n.useState)(!0),y=Object(w.a)(N,2),S=y[0],E=y[1],C=Object(r.c)((function(e){return e.ui})).modalOpen,D=Object(r.b)(),_=function(e){var t=e.target;h(Object(i.a)(Object(i.a)({},O),{},Object(k.a)({},t.name,t.value)))},R=function(){D({type:m})};return Object(g.jsxs)(I.a,{isOpen:C,onRequestClose:R,closeTimeoutMS:200,style:T,className:"modal",overlayClassName:"modal-fondo",children:[Object(g.jsx)("h1",{className:"text-center text-primary",children:" New event "}),Object(g.jsx)("hr",{}),Object(g.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t=d()(f),a=d()(v);return t.isSameOrAfter(a)?P.a.fire("Error","Date end must be greater than date start","error"):x.trim().length<3?E(!1):(E(!0),void R())},children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Start date and time *"}),Object(g.jsx)(A.a,{onChange:function(e){c(e),h(Object(i.a)(Object(i.a)({},O),{},{start:e}))},value:a,className:"form-control"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"End date and time *"}),Object(g.jsx)(A.a,{onChange:function(e){j(e),h(Object(i.a)(Object(i.a)({},O),{},{start:e}))},value:l,minDate:a,className:"form-control"})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Title and notes *"}),Object(g.jsx)("input",{type:"text",className:"form-control ".concat(!S&&"is-invalid"),placeholder:"Event title",name:"title",autoComplete:"off",value:x,onChange:_})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Short description"}),Object(g.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:p,onChange:_}),Object(g.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Aditional information"})]}),Object(g.jsxs)("button",{style:{width:"100%"},type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(g.jsx)("i",{className:"far fa-save"}),Object(g.jsx)("span",{children:" Save"})]})]})]})},X=(a(97),function(){var e=Object(r.b)();return Object(g.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(V())},children:Object(g.jsx)("i",{className:"fas fa-plus"})})}),q=(a(98),Object(S.b)(d.a)),z=[{title:"Birthday",start:d()().toDate(),end:d()().add(2,"hours").toDate(),notes:"Buy something",user:{_id:"123",name:"anthony"}}],G=function(){var e=Object(n.useState)(localStorage.getItem("lastView")||"month"),t=Object(w.a)(e,2),a=t[0],c=t[1],s=Object(r.b)();return Object(g.jsxs)("div",{className:"calendar-screen",children:[Object(g.jsx)(C,{}),Object(g.jsx)(S.a,{className:"container-fluid",localizer:q,events:z,startAccessor:"start",endAccessor:"end",messages:E,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#007acc",borderRadius:"0px",opacity:"block",color:"white"}}},onDoubleClickEvent:function(e){s(V())},onSelectEvent:function(e){s({type:u,payload:e}),s(V())},onView:function(e){c(e),localStorage.setItem("lastView",e)},view:a,components:{event:D}}),Object(g.jsx)(L,{}),Object(g.jsx)(X,{})]})},U=function(){return Object(g.jsx)(v.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(N.d,{children:[Object(g.jsx)(N.b,{exact:!0,path:"/login",component:y}),Object(g.jsx)(N.b,{exact:!0,path:"/",component:G}),Object(g.jsx)(N.a,{to:"/"})]})})})},F=function(){return Object(g.jsx)(r.a,{store:f,children:Object(g.jsx)(U,{})})};a(100);s.a.render(Object(g.jsx)(F,{}),document.getElementById("root"))},66:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.813450c4.chunk.js.map