(this["webpackJsonpletschat-ui"]=this["webpackJsonpletschat-ui"]||[]).push([[4],{139:function(e,n,a){"use strict";var r=a(4),o=a(1),c=a.n(o),l=a(222),s=a(338);n.a=function(e){var n=e.name,a=e.type,o=e.id,t=e.onChange,i=e.onBlur,u=e.onFocus,d=e.value,m=e.maxLength,j=e.minLength,b=e.pattern,h=e.placeholder,p=e.inputRef,x=e.onPaste,g=e.error,O=e.icon,v=e.inputClass;return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsxs)("div",{className:"input-container",children:[Object(r.jsx)(l.a,{type:a,name:n,id:o,value:d,onChange:function(e){return t&&t(e.target.value)},onBlur:i,onFocus:u,maxLength:m,minLength:j,pattern:b,placeholder:h,ref:p,autoComplete:"no-auto-complete",onPaste:x,className:v}),O&&Object(r.jsx)("span",{className:"input-icon",children:O}),g&&g.message?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s.a.Control.Feedback,{type:"invalid",children:g.message})}):null]})})}},335:function(e,n,a){"use strict";a.r(n);var r=a(4),o=(a(1),a(30)),c=a(139),l=a(3),s=a(151),t=a(188),i=a(191),u=a(47),d=a(190),m=a(50),j=a(51),b=i.a().shape({name:i.b().required("Name is required"),email:i.b().email("Please provide valid email").required("Email is required"),password:i.b().required("Password is required").min(5,"Password should have minimum 5 characters").max(20,"Max 20 characters are allowed")});n.default=function(){var e=Object(s.useForm)({resolver:Object(t.yupResolver)(b),defaultValues:{email:"",password:"",name:""}}),n=(e.register,e.control),a=(e.setValue,e.handleSubmit),i=e.errors,h=Object(j.a)(),p=Object(m.a)();return Object(r.jsx)("div",{className:"login-box-container",children:Object(r.jsxs)("div",{className:"login-box",children:[Object(r.jsx)("div",{className:"login-logo-container",children:Object(r.jsx)("img",{src:"/images/icons/android-icon-512x512.png"})}),Object(r.jsx)("h2",{className:"login-text",children:"Signup"}),Object(r.jsx)("div",{className:"login-form-container",children:Object(r.jsx)("form",{onSubmit:a((function(e){p.callDoRegister(e,(function(){}),(function(e){h.error(e)}))})),noValidate:!0,children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row login-form-row",children:[Object(r.jsx)("div",{className:"col-12 login-form-col",children:Object(r.jsx)(s.Controller,{control:n,name:"email",render:function(e){var n=e.onChange,a=e.onBlur,o=e.value,l=e.name,s=e.ref;return Object(r.jsx)(c.a,{name:l,onChange:n,onBlur:a,value:o,inputRef:s,icon:Object(r.jsx)(u.d,{}),type:"email",error:i.email,placeholder:"Your email address..."})}})}),Object(r.jsx)("div",{className:"col-12 login-form-col",children:Object(r.jsx)(s.Controller,{control:n,name:"name",render:function(e){var n=e.onChange,a=e.onBlur,o=e.value,l=e.name,s=e.ref;return Object(r.jsx)(c.a,{name:l,onChange:n,onBlur:a,value:o,inputRef:s,icon:Object(r.jsx)(d.b,{}),type:"name",error:i.name,placeholder:"Your name..."})}})}),Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)(s.Controller,{control:n,name:"password",render:function(e){var n=e.onChange,a=e.onBlur,o=e.value,l=e.name,s=e.ref;return Object(r.jsx)(c.a,{name:l,onChange:n,onBlur:a,value:o,inputRef:s,icon:Object(r.jsx)(d.a,{}),type:"password",error:i.password,placeholder:"Your password..."})}})}),Object(r.jsx)("div",{className:"col-12 login-form-action-col",children:Object(r.jsxs)("button",{type:"submit",className:"btn btn-primary",children:["Signup",Object(r.jsx)(u.e,{})]})}),Object(r.jsxs)("div",{className:"col-12 login-form-col signup-link-col",children:["Already have an account? ",Object(r.jsx)(o.b,{to:l.h.LOGIN,children:"Login"})]})]})})})})]})})}}}]);
//# sourceMappingURL=Signup.d5124e0e.chunk.js.map