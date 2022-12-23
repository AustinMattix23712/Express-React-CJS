"use strict";(self.webpackChunkget_started=self.webpackChunkget_started||[]).push([[263],{8340:function(e,s,a){a.d(s,{C:function(){return i},e:function(){return l}});var t=a(9439),n=a(2791),r=a(184),i=function(e){var s=e.data,a=(0,n.useState)(!0),i=(0,t.Z)(a,2),l=i[0],o=i[1];return l?(0,r.jsxs)("div",{className:"danger",onLoad:function(){return o(!1)},style:{width:380,marginLeft:56},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("svg",{className:"bi flex-shrink-0 me-2",role:"img","aria-label":"Danger:",viewBox:"0 0 16 16",height:22,width:22,children:(0,r.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),s.error&&(0,r.jsxs)("span",{children:[s.status," ",s.statusCode," ERROR!"]})]}),(0,r.jsx)("p",{className:"error-message",children:(0,r.jsx)("span",{children:s.error})})]}):(0,r.jsx)("button",{onClick:function(){return o(!0)},className:"w-50 btn btn-outline-danger rounded-3",style:{marginLeft:133},children:"Show Error"})},l=function(e){var s=e.data,a=(0,n.useState)(!0),i=(0,t.Z)(a,2),l=i[0],o=i[1];return l?(0,r.jsxs)("div",{className:"success",onLoad:function(){return o(!1)},style:{width:380,marginLeft:56},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("svg",{className:"bi flex-shrink-0 me-2",role:"img","aria-label":"Danger:",viewBox:"0 0 16 16",height:22,width:22,children:(0,r.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})}),s.status," SUCCESS!"]}),(0,r.jsxs)("p",{className:"success-message",children:[(0,r.jsx)("span",{children:s.message}),(0,r.jsx)("br",{}),(s.data.username||s.data.email)&&(0,r.jsx)("span",{children:"Profiles: "}),s.data.username&&(0,r.jsxs)("span",{children:[(0,r.jsx)("br",{}),"Username: ".concat(s.data.username)]}),s.data.email&&(0,r.jsxs)("span",{children:[(0,r.jsx)("br",{}),"Email: ".concat(s.data.email)]})]})]}):(0,r.jsx)("button",{onClick:function(){return o(!0)},className:"w-50 btn btn-outline-success rounded-3",style:{marginLeft:133},children:"Show Success"})}},3263:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var t=a(4165),n=a(5861),r=a(9439),i=a(2791),l=a(1044),o=a(7689),c=a(1087),d=a(8340),u=a(184),m=function(){var e,s=(0,o.s0)(),a=(0,o.TH)(),m=localStorage.getItem("Email")||"",h=(0,i.useState)(m),f=(0,r.Z)(h,2),x=f[0],b=(f[1],(0,i.useState)("")),p=(0,r.Z)(b,2),j=p[0],v=p[1],g=(0,i.useState)([{success:!1,status:"INITIALLED",error:"",data:{}}]),N=(0,r.Z)(g,2),k=N[0],y=N[1],w=(0,i.useState)(0),L=(0,r.Z)(w,2),S=L[0],C=L[1],I=(0,i.useState)([{success:!1,status:"INITIALLED",error:"",data:{}}]),_=(0,r.Z)(I,2),E=_[0],T=_[1];(0,i.useEffect)((function(){var e;localStorage.getItem("authToken")&&(null!==(e=a.state)&&void 0!==e&&e.from?s(a.state.from):s("/"))}),[s,null===(e=a.state)||void 0===e?void 0:e.from]);var Z=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(n){var r,i,o,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,l.ZP.post("/api/auth/verifyemail",{email:x,token:j},r);case 5:i=e.sent,o=i.data,y([o]),o&&(null!==(c=a.state)&&void 0!==c&&c.from?s(a.state.from):s("/")),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(2),T([e.t0.response.data]),C(e.t0.response.status),y([{success:!1,status:"INITIALLED",error:"",data:{}}]),setTimeout((function(){T([{status:"",success:!1,error:"",data:{}}]),C(0)}),5e3);case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(s){return e.apply(this,arguments)}}();return(0,u.jsx)("div",{className:"verifyemail-screen",children:(0,u.jsx)("div",{className:"modal position-static d-block pb-3 text-light",tabIndex:-1,role:"dialog",children:(0,u.jsx)("div",{className:"modal-dialog pt-5",role:"document",children:(0,u.jsxs)("div",{className:"modal-content bg-black bg-opacity-25 rounded-5 shadow border",children:[(0,u.jsxs)("div",{className:"modal-header p-5 pb-4 border-bottom-0",children:[(0,u.jsx)("h2",{className:"fw-bold mb-0",children:"Verify Email Token"}),(0,u.jsx)("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:function(){s("/login")}})]}),x,k[0].success&&(0,u.jsx)(d.e,{data:k[0]}),E[0].error&&(0,u.jsx)(d.C,{data:E[0],statusCode:S}),(0,u.jsx)("div",{className:"modal-body p-5 pt-0",children:(0,u.jsxs)("form",{className:"verifyemail-screen__form",onSubmit:Z,children:[(0,u.jsx)("small",{className:"verifyemail-screen__title text-light",children:"Verify tokens which used for email confirmation."}),(0,u.jsxs)("div",{className:"form-floating mt-2 mb-2",children:[(0,u.jsx)("input",{type:"number",required:!0,id:"token",className:"form-control rounded-4 bg-black text-light",autoComplete:"true",placeholder:"123456",value:j,onChange:function(e){return v(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"token",children:"Token"})]}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{className:"w-100 btn btn-lg btn-outline-info",type:"submit",children:"Verify Token"})}),(0,u.jsx)("hr",{className:"my-4"}),(0,u.jsxs)("span",{className:"verifyemail-screen__subtext",children:["Token has not sent? Send here...",(0,u.jsx)(c.rU,{to:"/emailconfirm",className:"verifyemail-screen__subtext__link",children:"Confirm Email"})]})]})})]})})})})}}}]);
//# sourceMappingURL=263.c6f13248.chunk.js.map