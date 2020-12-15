(this["webpackJsonpletschat-ui"]=this["webpackJsonpletschat-ui"]||[]).push([[1],{220:function(e,t){},340:function(e,t,n){"use strict";n.r(t);var s=n(24),c=n(4),i=n(1),a=n.n(i),r=n(13);function l(){return Object(r.c)((function(e){return e.message.selectedUser}))}function d(){return Object(r.c)((function(e){return e.message.friends}))}var o=n(31),u=n(3);var j=function(e){var t=e.imageLink,n=e.name,r=Object(i.useState)(""),l=Object(s.a)(r,2),d=l[0],o=l[1],j=Object(i.useState)({}),f=Object(s.a)(j,2),b=f[0],m=f[1];return Object(i.useEffect)((function(){n&&o(Object(u.j)(n))}),[n]),Object(i.useEffect)((function(){d&&m({backgroundColor:d})}),[d]),t||n?Object(c.jsx)(a.a.Fragment,{children:Object(c.jsxs)("div",{className:"user-logo-container",style:b,children:[t?Object(c.jsx)("img",{src:t,alt:"User"}):null,n&&!t?Object(c.jsx)("span",{children:function(){if(!n||!n.length)return"NA";var e=n.toUpperCase().split(" ");return e&&e.length>=2?e.map((function(e){return e.charAt(0)})).filter((function(e){return e})).slice(0,2).join(""):e&&1==e.length?e[0].slice(0,2):"NA"}()}):null]})}):null},f=n(153),b=n.n(f),m=n(154),h=n.n(m),O=n(197),v=n(56),p=n(58);function x(){var e=Object(p.a)();return{callDoSend:function(t,n,s){e(u.d.MESSAGE.SEND,t,n,s)},callGetList:function(t,n,s){e(u.d.MESSAGE.LIST,t,n,s)},callGetFriendList:function(t,n){e(u.d.MESSAGE.FRIENDS,null,t,n)}}}function S(){var e=Object(r.b)();return{appendNewMessage:function(t){e({type:u.a.MESSAGE.APPEND_NEW,payload:t})},resetList:function(){e({type:u.a.MESSAGE.RESET_LIST,payload:null})},setLimit:function(t){e({type:u.a.MESSAGE.SET_LIMIT,payload:t})},setOffset:function(t){e({type:u.a.MESSAGE.SET_OFFSET,payload:t})},setTotal:function(t){e({type:u.a.MESSAGE.SET_TOTAL,payload:t})},setSelectedUser:function(t){e({type:u.a.MESSAGE.SET_SELECTED_USER,payload:t})},resetUserFriendList:function(){e({type:u.a.MESSAGE.RESET_FRIENDS,payload:null})},setUserFriendList:function(t){e({type:u.a.MESSAGE.SET_FRIENDS,payload:t})}}}var E=n(338),g=n(48),N=n(51),y=n(46);var I=function(e){var t=e.shouldHide,n=e.onSelectUser,a=Object(N.a)(),r=Object(y.a)(),o=d(),u=Object(i.useState)(""),f=Object(s.a)(u,2),m=f[0],O=f[1],v=Object(i.useState)([]),p=Object(s.a)(v,2),E=p[0],I=p[1],_=function(e,t){var n=Object(i.useState)(e),c=Object(s.a)(n,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){var n=setTimeout((function(){r(e)}),t);return function(){clearTimeout(n)}}),[e]),a}(m,500),M=Object(i.useState)(!1),A=Object(s.a)(M,2),L=A[0],k=A[1],F=Object(i.useState)([]),C=Object(s.a)(F,2),T=C[0],D=C[1],w=l(),G=S(),U=x();Object(i.useEffect)((function(){U.callGetFriendList((function(){}),(function(e){r.error(e)}))}),[]),Object(i.useEffect)((function(){if(m){var e=o.filter((function(e){var t;return null===(t=e.friend_details)||void 0===t?void 0:t.name.toLowerCase().includes(m.toLowerCase())}));I(e)}else I(o)}),[m,o]),Object(i.useEffect)((function(){_?(k(!0),a.callSearchUser({text:_},(function(e,t){k(!1),D(t)}),(function(e){r.error(e)}))):D([])}),[_]),Object(i.useEffect)((function(){!o||!o.length||w&&w.id||G.setSelectedUser(o[0])}),[o]);var Y=function(e){G.setSelectedUser(e),n&&n(e)};return t?null:Object(c.jsxs)("div",{className:"friend-list-container",children:[Object(c.jsxs)("div",{className:"friend-list-filter-input-container",children:[Object(c.jsx)("input",{placeholder:"Find friends",className:"form-control friend-list-filter-input",value:m,onChange:function(e){return O(e.target.value)}}),m?Object(c.jsx)("a",{href:"#",className:"friend-list-filter-clear",onClick:function(e){e&&e.preventDefault(),O("")},children:Object(c.jsx)(g.a,{})}):null]}),Object(c.jsx)(b.a,{options:{suppressScrollX:!0},children:Object(c.jsxs)("div",{className:"friend-list-inner",children:[T&&T.length?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"search-result-list",children:[Object(c.jsx)("p",{children:"Search Result"}),T.slice(0,10).map((function(e,t){return Object(c.jsxs)("div",{className:"search-result-single",onClick:function(){return Y(e)},children:[Object(c.jsx)(j,{name:e.name}),Object(c.jsx)("span",{children:e.name})]},t)}))]})}):null,o&&o.length?Object(c.jsx)(c.Fragment,{children:E&&E.length?E.map((function(e,t){var n,s,i;return Object(c.jsxs)("div",{className:"single-friend-container",onClick:function(){return Y(e)},children:[Object(c.jsx)(j,{name:null===(n=e.friend_details)||void 0===n?void 0:n.name,imageLink:null===(s=e.friend_details)||void 0===s?void 0:s.imageFullPath}),Object(c.jsxs)("div",{className:"friend-list-details",children:[Object(c.jsx)("span",{className:"friend-list-name",children:null===(i=e.friend_details)||void 0===i?void 0:i.name}),Object(c.jsx)("span",{className:"friend-list-date",children:e.last_message_time?h()(e.last_message_time).format("ddd, D/M YY, hh:mm A"):"N/A"})]})]},t)})):L||T&&T.length?null:Object(c.jsx)("div",{className:"friend-list-empty mt-3",children:Object(c.jsx)("p",{children:"Try change search filter!"})})}):Object(c.jsx)("div",{className:"friend-list-empty mt-3",children:Object(c.jsx)("p",{children:"No friends yet!"})})]})})]})};var _=function(e){var t=e.shouldShow,n=e.onClose;return Object(c.jsx)(a.a.Fragment,{children:Object(c.jsx)(E.a,{show:t,backdrop:"static",keyboard:!1,size:"sm",className:"friend-list-modal-wrapper",children:Object(c.jsxs)(E.a.Body,{className:"friend-list-modal-body",children:[Object(c.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),n()},children:Object(c.jsx)(g.b,{})}),Object(c.jsx)(I,{onSelectUser:function(e){n()}})]})})})},M=n(18),A=n.n(M);var L=function(e){var t,n=e.sendMessage,a=l(),u=Object(o.b)(),f=Object(i.useState)(""),m=Object(s.a)(f,2),p=m[0],E=m[1],g=Object(i.useState)(!1),N=Object(s.a)(g,2),y=N[0],I=N[1],M=Object(v.a)(),L=Object(r.c)((function(e){return e.message.list})),k=x(),F=Object(r.c)((function(e){return e.message.limit})),C=Object(r.c)((function(e){return e.message.offset})),T=S(),D=d(),w=Object(i.useState)(0),G=Object(s.a)(w,2),U=G[0],Y=G[1];Object(i.useEffect)((function(){T.setLimit(500),T.setOffset(0)}),[]),Object(i.useEffect)((function(){if(a){var e=a.friendId?a.friendId:a.id;k.callGetList({user:e,limit:F||100,offset:C||0},(function(){}),(function(){})),Y(e)}}),[a]),Object(i.useLayoutEffect)((function(){var e=document.querySelector(".message-single:last-child");e&&e.scrollIntoView()}),[L]);var R=function(){var e;return a?a.friend_details?null===(e=a.friend_details)||void 0===e?void 0:e.name:a.name?a.name:"N/A":""},P=function(){if(p&&a){var e=null;e=a.friendId?a.friendId:a.id,n(p,e),E("")}},q=function(){I(!0)},H=function(e){var t=h()(e);return t.format("YYYY-MM-DD")==h()().format("YYYY-MM-DD")?t.format("hh:mm A"):t.format("D/M YY, hh:mm A")};return Object(c.jsxs)("div",{className:"chat-main-area",children:[a?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"chat-main-header",children:[Object(c.jsxs)("div",{className:"chat-main-user-info",children:[Object(c.jsx)(j,{name:R(),imageLink:null===(t=a.friend_details)||void 0===t?void 0:t.imageFullPath}),Object(c.jsx)("div",{className:"chat-main-user-name-wrapper",children:Object(c.jsx)("span",{className:"chat-main-user-name",children:R()})})]}),Object(c.jsx)("div",{className:"chat-main-user-list-wrap",children:M?Object(c.jsx)("button",{onClick:q,className:"btn btn-dark",children:"Friend List"}):null})]}),Object(c.jsxs)("div",{className:"chat-main-display",children:[Object(c.jsx)("div",{className:"chat-main-messages",children:Object(c.jsx)(b.a,{options:{suppressScrollX:!0},children:Object(c.jsx)("div",{className:"chat-main-messages-list",children:L.filter((function(e){return(e.receiverId==U||e.senderId==U)&&(e.senderId==(null===u||void 0===u?void 0:u.id)||e.receiverId==(null===u||void 0===u?void 0:u.id))})).map((function(e,t){var n=A()({"message-single":!0,send:e.senderId==(null===u||void 0===u?void 0:u.id),received:e.receiverId==(null===u||void 0===u?void 0:u.id)}),s=A()({"message-inner-single":!0,send:e.senderId==(null===u||void 0===u?void 0:u.id),received:e.receiverId==(null===u||void 0===u?void 0:u.id)});return Object(c.jsx)("div",{className:n,children:Object(c.jsxs)("div",{className:s,children:[Object(c.jsx)("p",{children:null===e||void 0===e?void 0:e.text}),Object(c.jsx)("span",{children:H(e.createdAt)})]})},t)}))})})}),Object(c.jsx)("div",{className:"chat-main-input-container",children:Object(c.jsxs)("div",{className:"chat-main-input-container-inner",children:[Object(c.jsx)("input",{onKeyDown:function(e){"Enter"==e.key&&p&&P()},value:p,onChange:function(e){return E(e.target.value)},placeholder:"Type your message",className:"form-control chat-main-input"}),Object(c.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),P()},className:p?"chat-main-input-send":"chat-main-input-send disabled",children:Object(c.jsx)(O.a,{})})]})})]})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"chat-no-user",children:[Object(c.jsx)("p",{children:D&&D.length?"Select user to chat with!":"Lets search some friends!"}),M?Object(c.jsx)("button",{onClick:q,className:"btn btn-dark",children:"Search Friends"}):null]})}),M?Object(c.jsx)(_,{onClose:function(){I(!1)},shouldShow:y}):null]})},k=n(198);function F(e){var t,n=e.message,s=e.onClick;return n?Object(c.jsxs)("div",{className:"custom-toast-body",onClick:function(){return s(n)},children:[Object(c.jsxs)("span",{children:["Message from ",null===(t=n.sender_details)||void 0===t?void 0:t.name]}),Object(c.jsx)("span",{children:n.text})]}):null}t.default=function(){var e=Object(v.a)(),t=Object(o.b)(),n=l(),a=S(),r=Object(y.a)(),d=Object(k.a)(u.e,{autoConnect:!0,query:{userId:null===t||void 0===t?void 0:t.id}}),j=Object(s.a)(d,1)[0];Object(i.useEffect)((function(){t&&t.id&&(j.connect(),j.on(u.f.MESSAGE,(function(e){a.appendNewMessage(e);var t=b();t&&t!=e.senderId&&r.showCustom(Object(c.jsx)(F,{onClick:f,message:e}))})),j.on(u.f.FRIENDS,(function(e){a.setUserFriendList(e)})))}),[t]);var f=function(e){e&&e.sender_details&&t&&a.setSelectedUser({userId:t.id,friendId:e.senderId,last_message_time:e.createdAt,user_details:t,friend_details:e.sender_details})},b=function(){return n?n.friendId?n.friendId:n.id:null};return Object(c.jsx)("div",{className:"chat-container",children:Object(c.jsxs)("div",{className:"chat-desktop",children:[Object(c.jsx)(I,{shouldHide:e}),Object(c.jsx)(L,{sendMessage:function(e,n){var s={text:e,senderId:null===t||void 0===t?void 0:t.id,receiverId:n};j.emit(u.f.MESSAGE,s),a.appendNewMessage(s)}})]})})}}}]);
//# sourceMappingURL=Home.692a4218.chunk.js.map