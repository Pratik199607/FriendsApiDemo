(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),c=n(1),r=n(3),i=n.n(r),s=(n(13),n(4)),m=n(5),o=n(7),l=n(6),u=(n(14),function(e){var a=e.name,n=e.email,c=e.username;return Object(t.jsxs)("div",{className:"card__container",children:[Object(t.jsx)("img",{src:"https://robohash.org/".concat(a,"?set=set5"),alt:"alt text"}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:a}),Object(t.jsxs)("h4",{children:["nickname: ",c]}),Object(t.jsxs)("h4",{children:["mailID: ",n]})]})]})}),h=(n(15),function(e){var a=e.robots;return Object(t.jsx)("div",{className:"cardList__container",children:a.map((function(e,n){return Object(t.jsx)(u,{name:a[n].name,username:a[n].username,email:a[n].email},n)}))})}),b=[{name:"Pratik Bapat",username:"Pratikbhau",email:"abc@gmail.com"},{name:"Kunal joggi",username:"Momo",email:"abc1@gmail.com"},{name:"Karthik Iyer",username:"Anna",email:"abc2@gmail.com"},{name:"Kailash panigrahi",username:"Bro",email:"abc3@gmail.com"},{name:"Praful Adate",username:"Beautiful",email:"abc4@gmail.com"},{name:"Manish Avasthi",username:"Kandi",email:"abc5@gmail.com"},{name:"Bhavesh Audichya",username:"Bhavu",email:"abc6@gmail.com"},{name:"Akhil Patro",username:"Taklu",email:"abc7@gmail.com"},{name:"Gaurav Bamugade",username:"Slowboy",email:"abc8@gmail.com"}],j=(n(16),function(e){e.searchfield;var a=e.searchChange;return Object(t.jsx)("div",{className:"pa2",children:Object(t.jsx)("input",{className:"custText",type:"search",placeholder:"Search friend",onChange:a})})}),d=function(e){return Object(t.jsx)("div",{style:{overflowY:"scroll",height:"600px"},children:e.children})},f=(n(17),function(e){Object(o.a)(n,e);var a=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=a.call(this)).onSearch=function(a){e.setState({searchfield:a.target.value})},e.state={robots:b,searchfield:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,c=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(t.jsxs)("div",{className:"container ",children:[Object(t.jsx)("h1",{className:"customtext",children:"FriendsAPI"}),Object(t.jsx)(j,{searchChange:this.onSearch}),Object(t.jsx)(d,{children:Object(t.jsx)(h,{robots:c})})]})}}]),n}(c.Component));n(18);i.a.render(Object(t.jsx)(f,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e24d991d.chunk.js.map