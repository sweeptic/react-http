(this["webpackJsonpreact-http"]=this["webpackJsonpreact-http"]||[]).push([[0],{21:function(t,e,a){"use strict";var n=a(43),r=a.n(n).a.create({baseURL:"https://react-http-cec91.firebaseio.com/"});r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),e.a=r},45:function(t,e,a){t.exports=a(76)},50:function(t,e,a){},76:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),s=(a(50),a(9)),l=a(10),i=a(12),u=a(11),m=a(30),p=a(16),d=Object(p.g)((function(t){return r.a.createElement("div",{className:"card text-center border-0",onClick:t.clicked},r.a.createElement("img",{className:"card-img-top",src:t.imgPath,alt:t.imgAlt}),r.a.createElement("div",{className:"card-body p-0"},r.a.createElement("h5",{className:"card-title border-bottom p-3 "},t.title),r.a.createElement("p",{className:"card-text bg-secondary mt-1 text-white rounded d-inline-flex px-2 mb-3"},t.author)))})),h=a(22),f=a(21),b=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r)))._isMounted=!1,t.state={loadedPost:null},t.deletePostHandler=function(){},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadData(),this._isMounted=!0,console.log(this)}},{key:"componentDidUpdate",value:function(){this.loadData()}},{key:"loadData",value:function(){var t=this;this.props.match.params.id&&(!this.state.loadedPost||this.state.loadedPost&&this.state.loadedPost.id!==+this.props.match.params.id)&&f.a.get("/posts/"+this.props.match.params.id+".json").then((function(e){e&&!e.data&&t.props.history.replace("/posts"),t.setState({loadedPost:e.data})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=r.a.createElement("p",{style:{textAlign:"center"}},"Please select a Post!");return this.props.match.params.id&&(t=r.a.createElement("p",{style:{textAlign:"center"}},"Loading...!")),this.state.loadedPost&&(t=r.a.createElement("div",{className:"container p-3 mt-5"},r.a.createElement("div",{className:"card mb-3 text-center"},r.a.createElement("img",{className:"card-img-top",src:"/react-http/photos/unsplash-"+this.props.match.params.id+".jpg",alt:"photo_"+this.props.match.params.id}),r.a.createElement("div",{className:"card-body p-0"},r.a.createElement("h4",{className:"card-title border-bottom p-3"},this.state.loadedPost.title),r.a.createElement("p",{className:"card-text text-muted border-bottom p-3"},this.state.loadedPost.body),r.a.createElement("button",{className:"mb-3 btn btn-warning",type:"button",onClick:this.deletePostHandler},"Delete Post"))))),t}}]),a}(n.Component),v=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={posts:[],selectedPostId:null,error:!1},t.postSelectedHandler=function(e){t.props.history.push("/posts/"+e)},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;f.a.get("/posts.json").then((function(e){var a=e.data.slice(0,3).map((function(t){return Object(m.a)(Object(m.a)({},t),{},{author:"Max"})}));t.setState({posts:a})})).catch((function(e){t.setState({error:!0})}))}},{key:"render",value:function(){var t=this,e=r.a.createElement("p",null,"something went wrong");return this.state.error||(e=this.state.posts.map((function(e){return r.a.createElement(d,{imgPath:"/react-http/photos/unsplash-"+e.id+".jpg",imgAlt:"photo_"+e.id,key:e.id,title:e.title,author:e.author,clicked:function(){return t.postSelectedHandler(e.id)}})}))),r.a.createElement("div",null,r.a.createElement(h.a,{className:"p-3 mt-5 card-columns"},e),r.a.createElement(p.b,{path:this.props.match.url+"/:id",exact:!0,component:b}))}}]),a}(n.Component),E=a(20),y=a(25),g=a(14),j=function(){var t={color:"white",borderBottom:"1px solid white",transition:"all 0.2s"};return r.a.createElement("header",null,r.a.createElement(E.a,{style:{width:"100vw",overflowX:"hidden"},fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(h.a,null,r.a.createElement(E.a.Brand,{href:"#home"},"React-Bootstrap"),r.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{as:g.b,to:"/posts/",activeStyle:t},"Home"),r.a.createElement(y.a.Link,{as:g.b,activeStyle:t,to:{pathname:"/new-post",hash:"#submit",search:"?quick-submit=true"}},"New Post"))))))},k=function(t){return function(e){Object(i.a)(n,e);var a=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=a.call.apply(a,[this].concat(r))).state={component:null},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;t().then((function(t){e.setState({component:t.default})}))}},{key:"render",value:function(){var t=this.state.component;return t?r.a.createElement(t,this.props):null}}]),n}(r.a.Component)}((function(){return a.e(3).then(a.bind(null,78))})),w=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={auth:!0},t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"#f0f2f5"}},r.a.createElement(j,null),r.a.createElement(p.a,{from:"/",to:"/posts",exact:!0}),r.a.createElement(p.d,null,this.state.auth?r.a.createElement(p.b,{path:"/new-post",component:k}):null,r.a.createElement(p.b,{path:"/posts",component:v}),r.a.createElement(p.b,{render:function(){return r.a.createElement("h1",{style:{margin:"100px"}},"Not found")}})))}}]),a}(n.Component),O=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.94899962.chunk.js.map