(this["webpackJsonpcalendar-react-mern"]=this["webpackJsonpcalendar-react-mern"]||[]).push([[0],{100:function(e,t,n){},103:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(7),s=n.n(c),r=n(12),o=(n(67),n(21)),l=n(54),i=n(59),j=n(8),b=n(16),d=n.n(b),u="[ui] Open modal",m="[ui] Close modal",O="[event] Set active",f="[event] Add new",p="[event] Clean active",v="[event] Event updated",h="[event] Event deleted",x={events:[{id:(new Date).getTime(),title:"Birthday",start:d()().toDate(),end:d()().add(2,"hours").toDate(),notes:"Buy something",user:{_id:"123",name:"anthony"}}],activeEvent:null},g={modalOpen:!1},N=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case u:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!0});case m:return Object(j.a)(Object(j.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case O:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:a});case f:return Object(j.a)(Object(j.a)({},e),{},{events:[].concat(Object(i.a)(e.events),[a])});case p:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:null});case v:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.map((function(e){return e.id===a.id?a:e}))});case h:return Object(j.a)(Object(j.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});default:return e}}}),y="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,w=Object(o.d)(N,y(Object(o.a)(l.a))),E=n(58),S=n(9),C=(n(69),n(3)),D=function(){return Object(C.jsx)("div",{className:"container login-container",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(C.jsx)("h3",{children:"Ingreso"}),Object(C.jsxs)("form",{children:[Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"text",className:"form-control mb-1",placeholder:"Email"})}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"password",className:"form-control mb-1",placeholder:"Password"})}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(C.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(C.jsx)("h3",{children:"Register"}),Object(C.jsxs)("form",{children:[Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"text",className:"form-control mb-1",placeholder:"Name",autoComplete:"off"})}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"email",className:"form-control mb-1",placeholder:"Email"})}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"password",className:"form-control mb-1",placeholder:"Password",autoComplete:"off"})}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"password",className:"form-control mb-1",placeholder:"Password"})}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})},k=n(20),_=n(46),A={previous:"<",next:">",noEventsInRange:"No events in that range",showMore:function(e){return"+ See more (".concat(e,")")}},I=function(){return Object(C.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(C.jsx)("span",{className:"navbar-brand ms-1",children:"Sergio"}),Object(C.jsxs)("button",{className:"btn btn-outline-danger me-1",children:[Object(C.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(C.jsx)("span",{children:" Exit"})]})]})},R=function(e){var t=e.event,n=t.title,a=t.user;return Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:n}),Object(C.jsxs)("span",{children:["- ",a.name," "]})]})},T=n(31),P=n(41),V=n.n(P),B=n(42),M=n.n(B),H=n(57),J=n.n(H),L={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},X=function(){return{type:u}},q=function(){return{type:p}};n(99);V.a.setAppElement("#root");var z=d()().minutes(0).seconds(0).add(1,"hours"),G=z.clone().add(1,"hours"),U={title:"",notes:"",start:z.toDate(),end:G.toDate()},F=function(){var e=Object(a.useState)(z.toDate()),t=Object(k.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(G.toDate()),o=Object(k.a)(s,2),l=o[0],i=o[1],b=Object(a.useState)({initialState:U}),u=Object(k.a)(b,2),O=u[0],p=u[1],h=O.notes,x=O.title,g=O.start,N=O.end,y=Object(a.useState)(!0),w=Object(k.a)(y,2),E=w[0],S=w[1],D=Object(r.c)((function(e){return e.ui})).modalOpen,_=Object(r.c)((function(e){return e.calendar})).activeEvent,A=Object(r.b)();Object(a.useEffect)((function(){p(_||U)}),[_]);var I=function(e){var t=e.target;p(Object(j.a)(Object(j.a)({},O),{},Object(T.a)({},t.name,t.value)))},R=function(){A(q()),A({type:m}),p(U)};return Object(C.jsxs)(V.a,{isOpen:D,onRequestClose:R,closeTimeoutMS:200,style:L,className:"modal",overlayClassName:"modal-fondo",children:[Object(C.jsxs)("h1",{className:"text-center text-primary",children:[" ",_?"Edit event":"New event"," "]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t=d()(g),n=d()(N);return t.isSameOrAfter(n)?(console.log(t,"start"),console.log(n,"end"),J.a.fire("Error","Date end must be greater than date start","error")):x.trim().length<3?S(!1):(A(_?{type:v,payload:O}:function(e){return{type:f,payload:e}}(Object(j.a)(Object(j.a)({},O),{},{id:(new Date).getTime(),user:{_id:"123",name:"andre"}}))),S(!0),void R())},children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Start date and time *"}),Object(C.jsx)(M.a,{onChange:function(e){c(e),p(Object(j.a)(Object(j.a)({},O),{},{start:e}))},value:n,className:"form-control"})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"End date and time *"}),Object(C.jsx)(M.a,{onChange:function(e){i(e),p(Object(j.a)(Object(j.a)({},O),{},{end:e}))},value:l,minDate:n,className:"form-control"})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{children:"Title and notes *"}),Object(C.jsx)("input",{type:"text",className:"form-control ".concat(!E&&"is-invalid"),placeholder:"Event title",name:"title",autoComplete:"off",value:x,onChange:I})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Short description"}),Object(C.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:h,onChange:I}),Object(C.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Aditional information"})]}),Object(C.jsxs)("button",{style:{width:"100%"},type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(C.jsx)("i",{className:"far fa-save"}),Object(C.jsx)("span",{children:" Save"})]})]})]})},K=(n(100),function(){var e=Object(r.b)();return Object(C.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(X())},children:Object(C.jsx)("i",{className:"fas fa-plus"})})}),Q=function(){var e=Object(r.b)();return Object(C.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e({type:h})},children:Object(C.jsx)("i",{className:"fas fa-trash"})})},W=(n(101),Object(_.b)(d.a)),Y=function(){var e=Object(a.useState)(localStorage.getItem("lastView")||"month"),t=Object(k.a)(e,2),n=t[0],c=t[1],s=Object(r.b)(),o=Object(r.c)((function(e){return e.calendar})),l=o.events,i=o.activeEvent;return Object(C.jsxs)("div",{className:"calendar-screen",children:[Object(C.jsx)(I,{}),Object(C.jsx)(_.a,{className:"container-fluid",localizer:W,events:l,startAccessor:"start",endAccessor:"end",messages:A,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:"#007acc",borderRadius:"0px",opacity:"block",color:"white"}}},onDoubleClickEvent:function(){s(X())},onSelectEvent:function(e){s({type:O,payload:e})},onView:function(e){c(e),localStorage.setItem("lastView",e)},view:n,onSelectSlot:function(e){s(q())},selectable:!0,components:{event:R}}),Object(C.jsx)(F,{}),i&&Object(C.jsx)(Q,{}),Object(C.jsx)(K,{})]})},Z=function(){return Object(C.jsx)(E.a,{children:Object(C.jsx)("div",{children:Object(C.jsxs)(S.d,{children:[Object(C.jsx)(S.b,{exact:!0,path:"/login",component:D}),Object(C.jsx)(S.b,{exact:!0,path:"/",component:Y}),Object(C.jsx)(S.a,{to:"/"})]})})})},$=function(){return Object(C.jsx)(r.a,{store:w,children:Object(C.jsx)(Z,{})})};n(103);s.a.render(Object(C.jsx)($,{}),document.getElementById("root"))},69:function(e,t,n){},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.0f9b6a94.chunk.js.map