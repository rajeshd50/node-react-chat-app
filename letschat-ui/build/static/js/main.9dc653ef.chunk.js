(this["webpackJsonpletschat-ui"]=this["webpackJsonpletschat-ui"]||[]).push([[5],{107:function(t,e,a){},108:function(t,e,a){"use strict";a.r(e);var n=a(4),c=a(1),r=a.n(c),o=a(21),s=a.n(o),l=a(3),u=a(30),i=a(11),d=a(6);a(80);var E=function(){return Object(n.jsx)("div",{className:"loader-container",children:Object(n.jsxs)("div",{className:"lds-ripple",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})},b=r.a.lazy((function(){return Promise.all([a.e(8),a.e(1)]).then(a.bind(null,340))})),S=function(t){return Object(n.jsx)(r.a.Suspense,{fallback:Object(n.jsx)(E,{}),children:Object(n.jsx)(b,Object(d.a)({},t))})},O=r.a.lazy((function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,335))})),f=function(t){return Object(n.jsx)(r.a.Suspense,{fallback:Object(n.jsx)(E,{}),children:Object(n.jsx)(O,Object(d.a)({},t))})},j=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,336))})),p=function(t){return Object(n.jsx)(r.a.Suspense,{fallback:Object(n.jsx)(E,{}),children:Object(n.jsx)(j,Object(d.a)({},t))})},h=r.a.lazy((function(){return a.e(3).then(a.bind(null,337))})),v=function(t){return Object(n.jsx)(r.a.Suspense,{fallback:Object(n.jsx)(E,{}),children:Object(n.jsx)(h,Object(d.a)({},t))})},T=a(31),A=a(112),k=a(24),I=a(13);function g(){var t=Object(I.c)((function(t){return t.user})),e=function(){return t&&t.isAuthenticated&&t.token&&t.user},a=Object(c.useState)(e()),n=Object(k.a)(a,2),r=n[0],o=n[1];return Object(c.useEffect)((function(){o(e())}),[t]),r}var L=a(48),x=a(51),R=a(46);var m=function(){var t=g(),e=Object(x.a)(),a=Object(R.a)(),c=Object(T.b)();return t&&c?Object(n.jsx)("div",{children:Object(n.jsxs)(A.a,{bg:"dark",children:[Object(n.jsxs)(u.b,{to:l.h.HOME,className:"navbar-brand text-light d-flex align-items-center",children:[Object(n.jsx)("img",{src:"/images/icons/android-icon-144x144.png",className:"d-inline-block align-top mr-1 header-image",alt:"React Bootstrap logo"}),Object(n.jsx)("span",{className:"header-text-logo",children:"Lets Chat"})]}),Object(n.jsxs)("div",{className:"d-flex justify-content-end flex-grow-1 align-items-center",children:[Object(n.jsxs)("span",{className:"text-light mr-2 font-weight-bold header-username",children:["Hello ",c.name]}),Object(n.jsxs)("button",{onClick:function(){e.callDoLogout((function(){}),(function(t){a.error(t)}))},className:"btn btn-dark btn-logout",children:["Logout ",Object(n.jsx)(L.c,{})]})]})]})}):null},G=a(18),w=a.n(G);var N=function(t){var e=Object(T.a)(),a=w()({"app-container":!0,"user-auth":e});return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(m,{}),Object(n.jsx)("div",{className:a,children:t.children})]})};var y=function(t){return function(e){return Object(n.jsx)(N,{children:Object(n.jsx)(t,Object(d.a)({},e))})}};var U=function(t){return function(e){return g()?Object(n.jsx)(N,{children:Object(n.jsx)(t,Object(d.a)({},e))}):Object(n.jsx)(i.a,{to:l.h.LOGIN})}};var D=function(t){return function(e){return g()?Object(n.jsx)(i.a,{to:l.h.HOME}):Object(n.jsx)(N,{children:Object(n.jsx)(t,Object(d.a)({},e))})}},_=a(34);var C=function(){var t=Object(_.a)();Object(c.useEffect)((function(){return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]);var e=function(){var e=window.innerWidth>0?window.innerWidth:screen.width;e<576?t.setDeviceMobile():e<768?t.setDeviceTab():t.setDeviceDesktop()};return Object(n.jsx)(u.a,{children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{exact:!0,path:l.h.HOME,component:U(S)}),Object(n.jsx)(i.b,{path:l.h.LOGIN,component:D(f)}),Object(n.jsx)(i.b,{path:l.h.SIGNUP,component:D(p)}),Object(n.jsx)(i.b,{path:"*",component:y(v)})]})})},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var M=a(71),B=a(73),W=a(15),H=a(43),z=a(72),V=a.n(z),J={user:null,token:null,isAuthenticated:!1},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l.a.USER.LOGIN:return Object(d.a)(Object(d.a)({},t),{},{user:e.payload.user,token:e.payload.token,isAuthenticated:!0});case l.a.USER.LOGOUT:return Object(d.a)(Object(d.a)({},t),J);case l.a.USER.DETAILS:return Object(d.a)(Object(d.a)({},t),{},{user:e.payload});default:return t}},K={loaderShown:!1,device:null},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l.a.GLOBAL.SET_LOADER:return Object(d.a)(Object(d.a)({},t),{},{loaderShown:e.payload});case l.a.GLOBAL.SET_DEVICE:return Object(d.a)(Object(d.a)({},t),{},{device:e.payload});default:return t}},Q={list:[],friends:[],total:0,limit:0,offset:0,selectedUser:null},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l.a.USER.LOGOUT:return Object(d.a)(Object(d.a)({},t),Q);case l.a.MESSAGE.LIST:return Object(d.a)(Object(d.a)({},t),{},{list:e.payload.messages.reverse(),total:e.payload.total,limit:e.payload.limit,offset:e.payload.offset});case l.a.MESSAGE.RESET_LIST:return Object(d.a)(Object(d.a)({},t),{},{list:[],total:0,limit:0,offset:0});case l.a.MESSAGE.APPEND_NEW:var a=t.list;if(e.payload.id){var n=t.list.findIndex((function(t){return t.id==e.payload.id}));n<0&&a.push(e.payload)}else a.push(e.payload);return Object(d.a)(Object(d.a)({},t),{},{list:JSON.parse(JSON.stringify(a)),total:t.total+1});case l.a.MESSAGE.SET_LIMIT:return Object(d.a)(Object(d.a)({},t),{},{limit:e.payload});case l.a.MESSAGE.SET_OFFSET:return Object(d.a)(Object(d.a)({},t),{},{offset:e.payload});case l.a.MESSAGE.SET_TOTAL:return Object(d.a)(Object(d.a)({},t),{},{total:e.payload});case l.a.MESSAGE.SET_SELECTED_USER:return Object(d.a)(Object(d.a)({},t),{},{selectedUser:e.payload});case l.a.MESSAGE.FRIENDS:return Object(d.a)(Object(d.a)({},t),{},{friends:e.payload});case l.a.MESSAGE.RESET_FRIENDS:return Object(d.a)(Object(d.a)({},t),{},{friends:[]});case l.a.MESSAGE.SET_FRIENDS:return Object(d.a)(Object(d.a)({},t),{},{friends:e.payload});default:return t}},Y=Object(W.c)({user:q,global:$,message:X}),Z=a(12),tt=a.n(Z),et=a(9),at=a(44),nt=a(45),ct=a(29),rt=a.n(ct),ot=function(){function t(){Object(at.a)(this,t)}return Object(nt.a)(t,null,[{key:"GET",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(c,r){var o={};if(a||n){var s=localStorage.getItem(l.g);s&&(o={Authorization:"Bearer ".concat(s)})}return rt()({method:"GET",url:t,headers:o,params:e}).then((function(t){return c(t)})).catch((function(t){return t.response&&401===t.response.status&&window.location.pathname!=l.h.LOGIN&&(localStorage.removeItem(l.g),window.location.href=l.h.LOGIN),r(t.response)}))}))}},{key:"POST",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(c,r){var o={};if(a||n){var s=localStorage.getItem(l.g);s&&(o={Authorization:"Bearer ".concat(s)})}return rt()({method:"POST",url:t,headers:o,data:e}).then((function(t){return c(t)})).catch((function(t){return t.response&&401===t.response.status&&window.location.pathname!=l.h.LOGIN&&(localStorage.removeItem(l.g),window.location.href=l.h.LOGIN),r(t.response)}))}))}},{key:"PUT",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(c,r){var o={};if(a||n){var s=localStorage.getItem(l.g);s&&(o={Authorization:"Bearer ".concat(s)})}return rt()({method:"PUT",url:t,headers:o,data:e}).then((function(t){return c(t)})).catch((function(t){return t.response&&401===t.response.status&&window.location.pathname!=l.h.LOGIN&&(localStorage.removeItem(l.g),window.location.href=l.h.LOGIN),r(t.response)}))}))}},{key:"DELETE",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(c,r){var o={};if(a||n){var s=localStorage.getItem(l.g);s&&(o={Authorization:"Bearer ".concat(s)})}return rt()({method:"DELETE",url:t,headers:o,data:e}).then((function(t){return c(t)})).catch((function(t){return t.response&&401===t.response.status&&window.location.pathname!=l.h.LOGIN&&(localStorage.removeItem(l.g),window.location.href=l.h.LOGIN),r(t.response)}))}))}}]),t}(),st=tt.a.mark(bt),lt=tt.a.mark(St),ut=tt.a.mark(Ot),it=tt.a.mark(ft),dt=tt.a.mark(jt),Et=tt.a.mark(pt);function bt(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.POST,l.b.USER.LOGIN,e);case 4:if(!((a=n.sent).status>=200&&a.status<300&&a.data&&a.data.data&&a.data.success)){n.next=14;break}return localStorage.setItem(l.g,a.data.data.token),n.next=9,Object(et.c)({type:l.a.USER.LOGIN,payload:{user:a.data.data.user_details,token:a.data.data.token}});case 9:return n.next=11,Object(et.c)({type:l.d.USER.DETAILS,payload:null,callbackSuccess:function(){},callbackError:function(){}});case 11:t&&t.callbackSuccess&&t.callbackSuccess(a.data),n.next=15;break;case 14:t&&t.callbackError&&t.callbackError(a.data);case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 20:case"end":return n.stop()}}),st,null,[[0,17]])}function St(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.POST,l.b.USER.REGISTER,e);case 4:if(!((a=n.sent).status>=200&&a.status<300&&a.data&&a.data.data&&a.data.success)){n.next=14;break}return localStorage.setItem(l.g,a.data.data.token),n.next=9,Object(et.c)({type:l.a.USER.LOGIN,payload:{user:a.data.data.user_details,token:a.data.data.token}});case 9:return n.next=11,Object(et.c)({type:l.d.USER.DETAILS,payload:null,callbackSuccess:function(){},callbackError:function(){}});case 11:t&&t.callbackSuccess&&t.callbackSuccess(a.data),n.next=15;break;case 14:t&&t.callbackError&&t.callbackError(a.data);case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 20:case"end":return n.stop()}}),lt,null,[[0,17]])}function Ot(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.GET,l.b.USER.DETAILS,e,!0);case 4:if(!((a=n.sent).status>=200&&a.status<300&&a.data&&a.data.data&&a.data.success)){n.next=11;break}return n.next=8,Object(et.c)({type:l.a.USER.DETAILS,payload:a.data.data});case 8:t&&t.callbackSuccess&&t.callbackSuccess(a.data),n.next=12;break;case 11:t&&t.callbackError&&t.callbackError(a.data);case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 17:case"end":return n.stop()}}),ut,null,[[0,14]])}function ft(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.POST,l.b.USER.LOGOUT,e,!0);case 4:if(!((a=n.sent).status>=200&&a.status<300&&a.data&&a.data.success)){n.next=11;break}return n.next=8,Object(et.c)({type:l.a.USER.LOGOUT,payload:null});case 8:t&&t.callbackSuccess&&t.callbackSuccess(a.data),n.next=12;break;case 11:t&&t.callbackError&&t.callbackError(a.data);case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 17:case"end":return n.stop()}}),it,null,[[0,14]])}function jt(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.GET,l.b.USER.SEARCH,e,!0);case 4:(a=n.sent).status>=200&&a.status<300&&a.data&&a.data.success?t&&t.callbackSuccess&&t.callbackSuccess(a.data):t&&t.callbackError&&t.callbackError(a.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 11:case"end":return n.stop()}}),dt,null,[[0,8]])}function pt(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.POST,l.b.USER.UPLOAD_PROFILE_PICTURE,e,!0);case 4:if(!((a=n.sent).status>=200&&a.status<300&&a.data&&a.data.success)){n.next=10;break}return n.next=8,Object(et.c)({type:l.d.USER.DETAILS,payload:null,callbackSuccess:function(){t&&t.callbackSuccess&&t.callbackSuccess(a.data)},callbackError:function(){t&&t.callbackSuccess&&t.callbackSuccess(a.data)}});case 8:n.next=11;break;case 10:t&&t.callbackError&&t.callbackError(a.data);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 16:case"end":return n.stop()}}),Et,null,[[0,13]])}var ht=tt.a.mark(At),vt=tt.a.mark(kt),Tt=tt.a.mark(It);function At(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.GET,l.b.MESSAGE.LIST,e,!0);case 4:if(!((a=n.sent).status>=200&&a.status<300&&a.data&&a.data.success)){n.next=11;break}return n.next=8,Object(et.c)({type:l.a.MESSAGE.LIST,payload:a.data.data});case 8:t&&t.callbackSuccess&&t.callbackSuccess(a.data),n.next=12;break;case 11:t&&t.callbackError&&t.callbackError(a.data);case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 17:case"end":return n.stop()}}),ht,null,[[0,14]])}function kt(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.POST,l.b.MESSAGE.SEND,e,!0);case 4:(a=n.sent).status>=200&&a.status<300&&a.data&&a.data.success?t&&t.callbackSuccess&&t.callbackSuccess(a.data):t&&t.callbackError&&t.callbackError(a.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 11:case"end":return n.stop()}}),vt,null,[[0,8]])}function It(t){var e,a;return tt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=t.payload,n.next=4,Object(et.b)(ot.GET,l.b.MESSAGE.FRIENDS,e,!0);case 4:if(!((a=n.sent).status>=200&&a.status<300&&a.data&&a.data.success)){n.next=11;break}return n.next=8,Object(et.c)({type:l.a.MESSAGE.FRIENDS,payload:a.data.data});case 8:t&&t.callbackSuccess&&t.callbackSuccess(a.data),n.next=12;break;case 11:t&&t.callbackError&&t.callbackError(a.data);case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),t&&t.callbackError&&t.callbackError(n.t0&&n.t0.data?n.t0.data:n.t0);case 17:case"end":return n.stop()}}),Tt,null,[[0,14]])}var gt=tt.a.mark(Lt);function Lt(){return tt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(et.a)([Object(et.d)(l.d.USER.LOGIN,bt),Object(et.d)(l.d.USER.LOGOUT,ft),Object(et.d)(l.d.USER.REGISTER,St),Object(et.d)(l.d.USER.DETAILS,Ot),Object(et.d)(l.d.USER.SEARCH,jt),Object(et.d)(l.d.USER.UPLOAD_PROFILE_PICTURE,pt),Object(et.d)(l.d.MESSAGE.SEND,kt),Object(et.d)(l.d.MESSAGE.LIST,At),Object(et.d)(l.d.MESSAGE.FRIENDS,It)]);case 2:case"end":return t.stop()}}),gt)}var xt=[],Rt=Object(B.a)();xt.push(Rt);var mt=W.a.apply(void 0,xt);["prod","stage"].indexOf("prod")<0&&window.devToolsExtension&&(mt=Object(W.d)(mt,window.devToolsExtension()));var Gt={key:"root",storage:V.a,blacklist:["global"]},wt=Object(H.a)(Gt,Y),Nt=Object(W.e)(wt,mt),yt=Object(H.b)(Nt);Rt.run(Lt);a(105),a(106),a(107);var Ut=a(23),Dt=a(56);var _t=function(){return Object(Dt.b)()?Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)(E,{})}):null};s.a.render(Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)(I.a,{store:Nt,children:Object(n.jsx)(M.a,{loading:null,persistor:yt,children:Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(_t,{}),Object(n.jsx)(C,{}),Object(n.jsx)(Ut.a,{position:"top-right",autoClose:5e5,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,limit:3})]})})})}),document.getElementById("root")),localStorage.getItem(l.g)&&Nt.dispatch({type:l.d.USER.DETAILS}),"prod"===l.c?function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/sw.js");F?(function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):P(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(e,t)}))}}():"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},3:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"g",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"h",(function(){return d})),a.d(e,"b",(function(){return E})),a.d(e,"a",(function(){return b})),a.d(e,"d",(function(){return S})),a.d(e,"f",(function(){return O})),a.d(e,"i",(function(){return n})),a.d(e,"j",(function(){return r}));var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Please try again";return"string"===typeof t?t:t&&t.data&&t.data.length?t.data[0].message:t&&t.data&&t.data.message?t.data.message:t&&t.message?t.message:e},c=["#6200EA","#304FFE","#9C27B0","#AA00FF","#2196F3","#0D47A1","#1B5E20","#00C853","#689F38","#C51162","#673AB7","#311B92","#33691E","#AFB42B","#F57F17","#FF6F00","#0288D1","#00B8D4","#004D40","#00BFA5","#E65100","#BF360C","#3E2723","#212121","#263238","#D50000"],r=function(t){var e=Math.floor(Math.random()*c.length);if(!t||!t.trim().length)return c[e];var a=t.toLowerCase().charCodeAt(0)-97;return c[a>=0&&a<26?a:e]},o="prod",s="node-react-chat-token",l="http://localhost:4000/api/",u="ws://localhost:4000/";"prod"==o&&(l="https://letschatapi.appswithfun.com/api/",u="wss://letschatapi.appswithfun.com/");var i=u,d={LOGIN:"/login",HOME:"/",SIGNUP:"/signup"},E={USER:{LOGIN:"".concat(l,"auth/login"),REGISTER:"".concat(l,"user/register"),LOGOUT:"".concat(l,"auth/logout"),DETAILS:"".concat(l,"user/profile"),UPLOAD_PROFILE_PICTURE:"".concat(l,"user/upload-profile-picture"),SEARCH:"".concat(l,"user/search")},MESSAGE:{SEND:"".concat(l,"message/send"),LIST:"".concat(l,"message/list"),FRIENDS:"".concat(l,"message/friends")}},b={GLOBAL:{SET_LOADER:"ACTIONS/GLOBAL/SET_LOADER",SET_DEVICE:"ACTIONS/GLOBAL/SET_DEVICE"},USER:{LOGIN:"ACTIONS/USER/LOGIN",LOGOUT:"ACTIONS/USER/LOGOUT",DETAILS:"ACTIONS/USER/DETAILS"},MESSAGE:{LIST:"ACTIONS/MESSAGE/LIST",APPEND_NEW:"ACTIONS/MESSAGE/APPEND_NEW",RESET_LIST:"ACTIONS/MESSAGE/RESET_LIST",SET_TOTAL:"ACTIONS/MESSAGE/SET_TOTAL",SET_LIMIT:"ACTIONS/MESSAGE/SET_LIMIT",SET_OFFSET:"ACTIONS/MESSAGE/SET_OFFSET",SET_SELECTED_USER:"ACTIONS/MESSAGE/SET_SELECTED_USER",FRIENDS:"ACTIONS/MESSAGE/FRIENDS",RESET_FRIENDS:"ACTIONS/MESSAGE/RESET_FRIENDS",SET_FRIENDS:"ACTIONS/MESSAGE/SET_FRIENDS"}},S={USER:{LOGIN:"SAGA_ACTIONS/USER/LOGIN",LOGOUT:"SAGA_ACTIONS/USER/LOGOUT",DETAILS:"SAGA_ACTIONS/USER/DETAILS",REGISTER:"SAGA_ACTIONS/USER/REGISTER",SEARCH:"SAGA_ACTIONS/USER/SEARCH",UPLOAD_PROFILE_PICTURE:"SAGA_ACTIONS/USER/UPLOAD_PROFILE_PICTURE"},MESSAGE:{SEND:"SAGA_ACTIONS/MESSAGE/SEND",LIST:"SAGA_ACTIONS/MESSAGE/LIST",FRIENDS:"SAGA_ACTIONS/MESSAGE/FRIENDS"}},O={MESSAGE:"SOCKET_MESSAGE",FRIENDS:"SOCKET_FRIENDS"}},31:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return r}));var n=a(13);function c(){return Object(n.c)((function(t){return t.user.user}))}function r(){return Object(n.c)((function(t){return t.user.isAuthenticated}))}},34:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(13),c=a(3);function r(){var t=Object(n.b)();return{setLoaderStatus:function(e){t({type:c.a.GLOBAL.SET_LOADER,payload:e})},setDeviceMobile:function(){t({type:c.a.GLOBAL.SET_DEVICE,payload:"mobile"})},setDeviceTab:function(){t({type:c.a.GLOBAL.SET_DEVICE,payload:"tab"})},setDeviceDesktop:function(){t({type:c.a.GLOBAL.SET_DEVICE,payload:"desktop"})}}}},46:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a(23);function c(){return{error:function(t){n.b.error(t)},show:function(t){Object(n.b)(t)},success:function(t){n.b.success(t)},warning:function(t){n.b.warning(t)},showCustom:function(t){Object(n.b)(t)}}}},51:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(3),c=a(58);function r(){var t=Object(c.a)();return{callDoLogin:function(e,a,c){t(n.d.USER.LOGIN,e,a,c)},callDoRegister:function(e,a,c){t(n.d.USER.REGISTER,e,a,c)},callDoLogout:function(e,a){t(n.d.USER.LOGOUT,null,e,a)},callGetDetails:function(e,a){t(n.d.USER.DETAILS,null,e,a)},callSearchUser:function(e,a,c){t(n.d.USER.SEARCH,e,a,c)},callUploadProfilePic:function(e,a,c){t(n.d.USER.UPLOAD_PROFILE_PICTURE,e,a,c)}}}},56:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return s}));var n=a(24),c=a(1),r=a(13);function o(){return Object(r.c)((function(t){return t.global.loaderShown}))}function s(){var t=Object(r.c)((function(t){return t.global.device})),e=Object(c.useState)(!1),a=Object(n.a)(e,2),o=a[0],s=a[1];return Object(c.useEffect)((function(){s("mobile"==t)}),[t]),o}},58:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(13),c=a(3),r=a(34);function o(){var t=Object(n.b)(),e=Object(r.a)();return function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;e.setLoaderStatus(!0),t({type:a,payload:n,callbackSuccess:function(t){var a=t&&t.msg?t.msg:"Request processed successfully",n=t&&t.data?t.data:null;e.setLoaderStatus(!1),r&&r(a,n)},callbackError:function(t){var a=Object(c.i)(t,"Unable to process request, please try again"),n=t&&t.data?t.data:null;e.setLoaderStatus(!1),o&&o(a,n)}})}}},80:function(t,e,a){}},[[108,6,7]]]);
//# sourceMappingURL=main.9dc653ef.chunk.js.map