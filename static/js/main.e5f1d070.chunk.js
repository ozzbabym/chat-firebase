(this["webpackJsonpchat-firebase"]=this["webpackJsonpchat-firebase"]||[]).push([[0],{23:function(e,t,a){e.exports={chatWrapper:"Chat_chatWrapper__18Tlj",windowChat:"Chat_windowChat__4mmu_",input:"Chat_input__2Z-VH",message:"Chat_message__3ojs3"}},26:function(e,t,a){e.exports={header:"Header_header__3DrlF",button:"Header_button__24u0d"}},29:function(e,t,a){e.exports={registrationWrapper:"Registration_registrationWrapper__3ipXT",button:"Registration_button__1CsBt"}},44:function(e,t,a){},45:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",(function(){return A}));var r=a(2),c=a(37),n=a.n(c),i=(a(44),a(45),a(16)),s=a(26),o=a.n(s),u=a(19),j=a(5);var d=function(){var e=Object(r.useContext)(A).auth,t=Object(u.a)(e),a=Object(i.a)(t,1)[0];return Object(j.jsxs)("div",{className:o.a.header,children:[Object(j.jsx)("div",{children:"\u0427\u0430\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0445"}),Object(j.jsx)("div",{children:a?Object(j.jsx)("div",{onClick:function(){return e.signOut()},className:o.a.button,children:"\u0412\u044b\u0439\u0442\u0438"}):Object(j.jsx)("div",{className:o.a.button,children:"\u0412\u043e\u0439\u0442\u0438"})})]})},b=a(20),l=a.n(b),h=a(25),p=a(29),x=a.n(p),O=a(15),f=a(9);var v=function(){var e=Object(r.useContext)(A).auth,t=function(){var t=Object(h.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new O.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(a);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=Object(u.a)(e);return Object(i.a)(a,1)[0]?Object(j.jsx)(f.a,{to:"/chat"}):Object(j.jsx)("div",{className:{},children:Object(j.jsx)("div",{className:x.a.registrationWrapper,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google Account"}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{onClick:t,className:x.a.button,children:"\u0412\u043e\u0439\u0442\u0438"})})]})})})},m=a(23),g=a.n(m),_=a(39);a(56);var C=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"lds-dual-ring"})})};var N=function(){var e=Object(r.useContext)(A),t=e.auth,a=e.firestore,c=Object(u.a)(t),n=Object(i.a)(c,1)[0],s=Object(r.useState)(""),o=Object(i.a)(s,2),d=o[0],b=o[1],p=Object(_.a)(a.collection("messages").orderBy("createdAt")),x=Object(i.a)(p,2),v=x[0],m=x[1],N=function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.collection("messages").add({uid:n.uid,displayName:n.displayName,photoURL:n.photoURL,text:d,createdAt:O.a.firestore.FieldValue.serverTimestamp()}),b("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=Object(r.useRef)(null);return Object(r.useEffect)((function(){w.current&&w.current.scrollTo(0,9999)}),[v]),m?Object(j.jsx)(C,{}):n?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:g.a.chatWrapper,children:Object(j.jsx)("div",{ref:w,className:g.a.windowChat,children:v.map((function(e,t){return Object(j.jsxs)("div",{className:g.a.message,style:{border:e.uid===n.uid?"4px solid green":"4px solid blue",marginLeft:e.uid===n.uid?"auto":"10px"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.photoURL,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(j.jsxs)("div",{style:{marginLeft:10},children:[Object(j.jsx)("div",{style:{fontSize:30},children:e.displayName}),Object(j.jsx)("div",{style:{fontSize:20},children:e.text})]})]},t)}))})}),Object(j.jsxs)("div",{className:g.a.input,children:[Object(j.jsx)("input",{onChange:function(e){return b(e.currentTarget.value)},type:"text",value:d}),Object(j.jsx)("span",{onClick:N,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]}):Object(j.jsx)(f.a,{to:"/"})};var w=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(f.b,{path:"/",render:function(){return Object(j.jsx)(v,{})},exact:!0}),Object(j.jsx)(f.b,{path:"/chat",render:function(){return Object(j.jsx)(N,{})},exact:!0})]})},y=(a(57),a(58),a(21));O.a.initializeApp({apiKey:"AIzaSyCmciKAlqKvGbzLtiQc68rSgpWfhf43MFA",authDomain:"chat-firebase-42eec.firebaseapp.com",projectId:"chat-firebase-42eec",storageBucket:"chat-firebase-42eec.appspot.com",messagingSenderId:"482906442540",appId:"1:482906442540:web:4a5144eab850b76bd8ba89",measurementId:"G-PCYG3KQVHP"});var A=Object(r.createContext)(null),k=O.a.auth(),W=O.a.firestore();n.a.render(Object(j.jsx)(A.Provider,{value:{firebase:O.a,auth:k,firestore:W},children:Object(j.jsx)(y.a,{children:Object(j.jsx)(w,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.e5f1d070.chunk.js.map