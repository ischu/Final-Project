(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(39)},29:function(e,a,t){},32:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(15),r=t.n(l),c=(t(29),t(5)),i=t(6),o=t(9),m=t(7),u=t(10),d=t(16),p=t(11),h=t(8),E=t(14),b=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onChange=function(a){e.setState(Object(E.a)({},a.target.id,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t={email:e.state.email,password:e.state.password};console.log(t)},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.errors;return s.a.createElement("div",null,s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Email"),s.a.createElement("div",{className:"control has-icons-right"},s.a.createElement("input",{className:"input is-primary",onChange:this.onChange,value:this.state.email,error:e.email,type:"email",placeholder:"Email"}),s.a.createElement("span",{className:"icon is-small is-right"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Password"),s.a.createElement("div",{className:"control has-icons-right"},s.a.createElement("input",{className:"input is-primary",onChange:this.onChange,value:this.state.password,error:e.password,type:"password",placeholder:"Password"}),s.a.createElement("span",{className:"icon is-small is-right"},s.a.createElement("i",{className:"fas fa-check"})))),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-link"},"Submit")),s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-text"},"Cancel"))))}}]),a}(n.Component),v=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onChange=function(a){e.setState(Object(E.a)({},a.target.id,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};console.log(t)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.errors;return s.a.createElement("div",null,s.a.createElement("div",{id:"register-form",onSubmit:this.onSubmit},s.a.createElement("div",{clasName:"field"},s.a.createElement("label",{className:"label"},"Name"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input is-primary",onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text"}))),s.a.createElement("div",{clasName:"field"},s.a.createElement("label",{className:"label"},"Email"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input is-primary",onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email"}))),s.a.createElement("div",{clasName:"field"},s.a.createElement("label",{className:"label"},"Password"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input is-primary",onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password"}))),s.a.createElement("div",{clasName:"field"},s.a.createElement("label",{className:"label"},"Confirm Password"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input is-primary",onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password"}))),s.a.createElement("div",{clasName:"field"},s.a.createElement("div",{class:"field is-grouped"},s.a.createElement("div",{class:"control"},s.a.createElement("button",{type:"submit",class:"button is-link"},"Submit")),s.a.createElement("div",{class:"control"},s.a.createElement("button",{class:"button is-text"},"Cancel"))))))}}]),a}(n.Component);var N=function(){return s.a.createElement(h.Container,{className:"has-background-white-ter"},s.a.createElement("div",{className:"has-text-primary"},"Hello"),s.a.createElement(b,null),s.a.createElement(v,null))},f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"has-text-danger"},"VISIT")}}]),a}(n.Component);var w=function(){return s.a.createElement(h.Container,{className:"has-background-white-ter"},s.a.createElement(f,null))};var g=function(){return s.a.createElement(h.Container,{className:"has-background-white-ter"},"Client")},C=(t(32),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(h.Container,{className:"has-background-white-ter"},s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",component:N}),s.a.createElement(p.a,{exact:!0,path:"/client-list",component:g}),s.a.createElement(p.a,{exact:!0,path:"/schedule",component:w}))))}}]),a}(n.Component));r.a.render(s.a.createElement(C,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.92772992.chunk.js.map