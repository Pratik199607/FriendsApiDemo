(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(0),c=n(3),o=n.n(c),i=n(4),a=n(2),u=n(11),d=n(12),h="CHANGE_SEARCH_FIELD",l="REQUESTS_ROBOTS_PENDING",b="REQUESTS_ROBOTS_SUCESS",j="REQUESTS_ROBOTS_FAILED",O={searchField:""},f={isPending:!1,robots:[],error:""},p=(n(29),n(13)),m=n(14),g=n(16),v=n(15),x=(n(30),function(e){var t=e.name,n=e.email,s=e.username;return Object(r.jsxs)("div",{className:"card__container",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?set=set5"),alt:"alt text"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsxs)("h4",{children:["nickname: ",s]}),Object(r.jsxs)("h4",{children:["mailID: ",n]})]})]})}),y=(n(31),function(e){var t=e.robots;return Object(r.jsx)("div",{className:"cardList__container",children:t.map((function(e,n){return Object(r.jsx)(x,{name:t[n].name,username:t[n].username,email:t[n].email},n)}))})}),R=(n(32),function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"custText",type:"search",placeholder:"Search friend",onChange:t})})}),S=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"600px"},children:e.children})},E=(n(33),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearch,s=e.robots,c=e.isPending,o=s.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)("div",{className:"container ",children:[Object(r.jsx)("h1",{className:"customtext",children:"FriendsAPI"}),Object(r.jsx)(R,{searchChange:n}),Object(r.jsx)(S,{children:Object(r.jsx)(y,{robots:o})})]})}}]),n}(s.Component)),_=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearch:function(t){return e((n=t.target.value,{type:h,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:l}),fetch("https://my-json-server.typicode.com/Pratik199607/FriendiApiJson/user").then((function(e){return e.json()})).then((function(t){return e({type:b,payload:t})})).catch((function(t){return e({type:j,payload:t})}))}))}}}))(E),P=(n(34),Object(u.createLogger)()),C=Object(a.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case l:return Object.assign({},e,{isPending:!0});case b:return Object.assign({},e,{robots:t.payload,isPending:!1});case j:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(a.d)(C,Object(a.a)(d.a,P));o.a.render(Object(r.jsx)(i.a,{store:F,children:Object(r.jsx)(_,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.33d56d38.chunk.js.map