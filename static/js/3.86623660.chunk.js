(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[3],{319:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1kzJ4",dialogsItems:"Dialogs_dialogsItems__19G-e",messages:"Dialogs_messages__3ZUL7"}},320:function(e,a,s){e.exports={dialog:"DialogItem_dialog__242SW",activeLink:"DialogItem_activeLink__1NtOZ"}},321:function(e,a,s){e.exports={messages:"Message_messages__3AvFR"}},322:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(114),m=s(319),l=s.n(m),c=s(320),o=s.n(c),r=s(17),g=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:"".concat(o.a.dialog," ").concat(o.a.active)},n.a.createElement(r.b,{activeClassName:o.a.activeLink,to:a},e.name))},d=s(321),u=s.n(d),v=function(e){return n.a.createElement("div",{className:u.a.message},e.message)},_=s(138),b=s(139),E=s(56),f=s(42),p=Object(f.a)(25),N=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(_.a,{name:"newMessageBody",component:E.b,placeholder:"Enter your message...",validate:[f.b,p]})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),k=function(e){var a=e.messagePage.dialogs.map((function(e){return n.a.createElement(g,{name:e.name,id:e.id})})),s=e.messagePage.messages.map((function(e){return n.a.createElement(v,{message:e.message})}));return n.a.createElement("div",{className:l.a.dialogs},n.a.createElement("div",{className:l.a.dialogsItems},a),n.a.createElement("div",{className:l.a.messages},n.a.createElement("div",null,s),n.a.createElement("div",null,n.a.createElement(N,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))))},w=s(12),M=s(137),h=s(9);a.default=Object(h.d)(Object(w.b)((function(e){return{messagePage:e.messagePage}}),{sendMessage:i.b}),M.a)(k)}}]);
//# sourceMappingURL=3.86623660.chunk.js.map