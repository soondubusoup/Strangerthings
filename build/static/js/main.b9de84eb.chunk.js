(this.webpackJsonpStrangerthings=this.webpackJsonpStrangerthings||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var c,s=n(1),r=n(18),a=n.n(r),o=n(7),i=n(4),j=n.n(i),u=n(6),l=n(0),h=function(e){var t=e.children,n=e.post,c=e.user,s=e.token;e.fetchPosts;return console.log("user",c),console.log("post",n),console.log("token",s),n?Object(l.jsxs)("div",{className:"some",children:[Object(l.jsxs)("h3",{children:["Title: ",n.title]}),Object(l.jsxs)("h5",{children:["Description: ",n.description]}),Object(l.jsxs)("h5",{children:["Price: ",n.price]}),Object(l.jsxs)("h5",{children:["Location: ",n.location]}),Object(l.jsxs)("h5",{children:["Author: ",n.author.username]}),Object(l.jsx)("div",{children:n.description}),Object(l.jsx)("span",{children:t})]}):"loading..."},b=n(3),p=function(e){var t=e.fetchPosts,n=e.posts,c=e.setPosts,r=Object(s.useState)(""),a=Object(b.a)(r,2),o=a[0],i=a[1],h=Object(s.useState)(!0),p=Object(b.a)(h,2),d=p[0],O=(p[1],function(){var e=Object(u.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=d?n.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())})):n.filter((function(e){return e.description.toLowerCase().includes(o.toLowerCase())})),c(s),e.t0=""===o,!e.t0){e.next=6;break}return e.next=6,t();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(l.jsxs)("form",{className:"search-form",onChange:O,children:[Object(l.jsx)("input",{name:"search",type:"text",placeholder:"FILTER POSTS",className:"search-input",value:o,onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("button",{type:"submit",className:"search-button",children:"reset"}),Object(l.jsx)("div",{})]})},d=function(e){var t=e.user,n=e.token,c=e.posts,s=e.fetchPosts,r=e.setPosts,a=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT","/posts/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 2:return e.sent,e.next=5,s();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{posts:c,setPosts:r,fetchPosts:s}),c.map((function(e){return Object(l.jsxs)(h,{post:e,user:t,token:n,fetchPosts:s,children:[t._id===e.author._id?Object(l.jsx)("button",{onClick:function(){return a(e._id)},children:"Delete"}):"",e&&Object(l.jsx)(o.b,{to:"/posts/".concat(e._id),children:" View Post "}),t._id===e.author._id?e&&Object(l.jsx)(o.b,{to:"/edit/".concat(e._id),children:" Edit Post "}):""]},e._id)}))]})},O=n(2),x="https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT",f=function(e){var t=e.setToken,n=e.setUser,c=Object(s.useState)(""),r=Object(b.a)(c,2),a=r[0],i=r[1],h=Object(s.useState)(""),p=Object(b.a)(h,2),d=p[0],f=p[1],g=Object(O.e)(),v=Object(O.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:["This is the ",v.method," method"]}),Object(l.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(j.a.mark((function e(c){var s,r,o,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("".concat(x,"/users/").concat(v.method),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:a,password:d}})});case 3:return s=e.sent,e.next=6,s.json();case 6:if(r=e.sent,e.prev=7,t(r.data.token),!r.data){e.next=19;break}return e.next=12,fetch("".concat(x,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.data.token)}});case 12:return o=e.sent,e.next=15,o.json();case 15:i=e.sent,(u=i).data&&n(u.data),g.push("/");case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),console.log("= CLEAN UP THIS ERROR MESSAGE ");case 24:case"end":return e.stop()}}),e,null,[[7,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(l.jsx)("input",{type:"text",placeholder:"username",value:a,onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("input",{type:"password",placeholder:"password",value:d,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),Object(l.jsx)(o.b,{to:"/account/register",children:"Click here to Register"})]})},g=n(22),v=n(23).a.h1(c||(c=Object(g.a)(["\n  font-size: 2em;\n  text-align: center;\n  color: gray;\n"]))),m=function(e){var t=e.user,n=e.token;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(v,{children:["Stranger's Things",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),n?Object(l.jsxs)("span",{children:["You are logged in as ",t.username]}):"Hi friend (:"]})})},S=function(e){var t=e.token,n=e.fetchPosts,c=Object(s.useState)(""),r=Object(b.a)(c,2),a=r[0],o=r[1],i=Object(s.useState)(""),h=Object(b.a)(i,2),p=h[0],d=h[1],x=Object(s.useState)(""),f=Object(b.a)(x,2),g=f[0],v=f[1],m=Object(s.useState)(""),S=Object(b.a)(m,2),y=S[0],k=S[1],P=Object(s.useState)(!1),w=Object(b.a)(P,2),C=w[0],T=w[1],E=Object(O.e)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Create Post"}),Object(l.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT","/posts"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({post:{title:a,description:p,price:g,location:y,willDeliver:C}})}).then((function(e){return e.json()})).then((function(e){})).catch(console.error);case 3:return e.next=5,n();case 5:E.push("./posts");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",placeholder:"title",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"description"}),Object(l.jsx)("input",{type:"text",placeholder:"description",value:p,onChange:function(e){return d(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"price"}),Object(l.jsx)("input",{type:"text",placeholder:"price",value:g,onChange:function(e){return v(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"location"}),Object(l.jsx)("input",{type:"text",placeholder:"location",value:y,onChange:function(e){return k(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"willDeliver"}),Object(l.jsxs)("select",{type:"text",placeholder:"no/yes",value:C,onChange:function(e){return T(e.target.value)},children:[Object(l.jsx)("option",{value:"false",children:"no"}),Object(l.jsx)("option",{value:"true",children:"yes"})]})]}),Object(l.jsx)("button",{type:"submit",children:"Post"})]})]})},y=function(e){var t=e.user,n=(e.token,t.messages);return console.log(n),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h1",{children:"Genshin"}),null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsxs)("div",{className:"some",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("h3",{children:["Message:",e.fromUser.username]}),Object(l.jsx)("h3",{children:e.content}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:e.post.title})]})}))]})},k=n(11),P=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),a=Object(b.a)(r,2),i=a[0],h=a[1],p=Object(s.useState)({}),x=Object(b.a)(p,2),g=x[0],v=x[1],P=Object(s.useState)([]),w=Object(b.a)(P,2),E=w[0],_=w[1],B=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT","/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,_(n.data.posts);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:case"end":return e.stop()}}),e)}))),[n]);var D={token:n,setToken:c,login:i,setLogin:h,user:g,setUser:v,posts:E,setPosts:_,fetchPosts:B};return Object(l.jsx)("div",{id:"content",children:Object(l.jsxs)("center",{children:[Object(l.jsx)(o.b,{to:"/",children:"Home"})," | ",Object(l.jsx)(o.b,{to:"/newpost",children:"New Post"})," |"," ",Object(l.jsx)(o.b,{to:"/posts",children:"Posts"})," |"," ",n?null:Object(l.jsx)(o.b,{to:"/account/register",children:"Register"})," "," "," ",n?Object(l.jsx)(o.b,{to:"/profile",children:"Profile"}):null,n?Object(l.jsx)("button",{onClick:function(){c(""),h(!1)},children:"Log out"}):Object(l.jsx)(o.b,{to:"/account/login",children:"Login"}),Object(l.jsx)(O.a,{exact:!0,path:"/",children:Object(l.jsx)(m,Object(k.a)({},D))}),Object(l.jsx)(O.a,{exact:!0,path:"/posts",children:Object(l.jsx)(d,Object(k.a)({},D))}),Object(l.jsx)(O.a,{exact:!0,path:"/account/:method",children:Object(l.jsx)(f,Object(k.a)({},D))}),Object(l.jsx)(O.a,{path:"/newpost",children:Object(l.jsx)(S,Object(k.a)({},D))}),Object(l.jsx)(O.a,{path:"/profile",children:Object(l.jsx)(y,Object(k.a)({},D))}),Object(l.jsx)(O.a,{exact:!0,path:"/posts/:postId",children:Object(l.jsx)(C,Object(k.a)({},D))}),Object(l.jsx)(O.a,{exact:!0,path:"/edit/:postId",children:Object(l.jsx)(T,Object(k.a)({},D))})]})})},w=function(e){e.posts;var t=e.token,n=(e.fetchPosts,e.post),c=Object(s.useState)(""),r=Object(b.a)(c,2),a=r[0],o=r[1],i=Object(O.e)(),h=function(){var e=Object(u.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT","/posts/").concat(n._id,"/messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({message:{content:a}})}).then((function(e){return e.json()})).then((function(e){})).catch(console.error);case 3:i.push("./");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:h,children:[Object(l.jsx)("input",{value:a,placeholder:"write a message",onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("button",{type:"submit",disabled:!a,children:"Send"})]})})},C=function(e){var t=e.posts,n=e.user,c=e.token,s=Object(O.f)().postId;console.log(t);var r=t.find((function(e){return e._id===s}));return console.log(r),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{post:r,children:n._id!==r.author._id?Object(l.jsx)(w,{post:r,token:c,user:n}):null})})},T=function(e){var t=e.token,n=(e.setPosts,e.posts),c=e.fetchPosts,r=Object(s.useState)(""),a=Object(b.a)(r,2),o=a[0],i=a[1],p=Object(s.useState)(""),d=Object(b.a)(p,2),x=d[0],f=d[1],g=Object(s.useState)(""),v=Object(b.a)(g,2),m=v[0],S=v[1],y=Object(s.useState)(""),k=Object(b.a)(y,2),P=k[0],w=k[1],C=Object(s.useState)(!1),T=Object(b.a)(C,2),E=T[0],_=T[1],B=Object(O.e)(),D=Object(O.f)().postId,J=n.find((function(e){return e._id===D}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Edit Post"}),Object(l.jsx)(h,{post:J}),Object(l.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT","/posts/").concat(D),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({post:{title:o,description:x,price:m,location:P,willDeliver:E}})}).then((function(e){return e.json()})).then((function(e){})).catch(console.error);case 3:return e.next=5,c();case 5:B.push("/posts");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",placeholder:"".concat(J.title),value:o,onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"description"}),Object(l.jsx)("input",{type:"text",placeholder:"".concat(J.description),value:x,onChange:function(e){return f(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"price"}),Object(l.jsx)("input",{type:"text",placeholder:"".concat(J.price),value:m,onChange:function(e){return S(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"location"}),Object(l.jsx)("input",{type:"text",placeholder:"".concat(J.location),value:P,onChange:function(e){return w(e.target.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{children:"willDeliver"}),Object(l.jsxs)("select",{type:"text",placeholder:"".concat(J.willDeliver),value:E,onChange:function(e){return _(e.target.value)},children:[Object(l.jsx)("option",{value:"false",children:"no"}),Object(l.jsx)("option",{value:"true",children:"yes"})]})]}),Object(l.jsx)("button",{type:"submit",children:"Post"})]})]})};a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(P,{})}),document.getElementById("app"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b9de84eb.chunk.js.map