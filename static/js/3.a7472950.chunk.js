(this["webpackJsonpreact-http"]=this["webpackJsonpreact-http"]||[]).push([[3],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var l=a(9),n=a(10),r=a(12),s=a(11),c=a(0),o=a.n(c),m=a(22),i=a(16),u=a(21),d=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:2,title:"abc",author:"fill this",userId:1,body:"lorem",submitted:!1},e.postDataHandler=function(){console.log(".....NewPost postDataHandler");var t={title:e.state.title,body:e.state.body,id:e.state.id,userId:1};u.a.put("/posts/2.json",t).then((function(t){console.log(t),e.props.history.push("/posts")}))},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=null;return this.state.submitted&&(t=o.a.createElement(i.a,{to:"posts"})),o.a.createElement(m.a,{className:"p-3 mt-5"},t,o.a.createElement("div",{className:"card p-4 "},o.a.createElement("div",{className:"card-body"},o.a.createElement("h3",{className:"text-center"},"New Post"),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{value:this.state.author,className:"form-control",onChange:function(t){return e.setState({author:t.target.value})}},o.a.createElement("option",{value:"Max"},"Max"),o.a.createElement("option",{value:"Anna"},"Anna"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{value:this.state.body,className:"form-control",placeholder:"Blog Post",onChange:function(t){return e.setState({body:t.target.value})}}))),o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{onClick:this.postDataHandler,type:"submit",value:"Submit",className:"btn btn-danger btn-block"})))))))}}]),a}(c.Component)}}]);
//# sourceMappingURL=3.a7472950.chunk.js.map