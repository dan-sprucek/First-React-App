(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),l=a(3),s=a(4),i=a(6),u=a(5),m=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleClick=function(){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){var a=Math.floor(Math.random()*(t.length-1));e.setState({message:t[a].text,author:t[a].author})}))},e.copyToClipboard=function(){var t=e.state.message+" - "+e.state.author,a=document.createElement("textarea");a.value=t,a.style.top="0",a.style.left="0",a.style.position="fixed",document.getElementById("quote-box").appendChild(a),a.focus(),a.select(),document.execCommand("copy"),a.remove()},e.state={message:"",author:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){var a=Math.floor(Math.random()*(t.length-1));e.setState({message:t[a].text,author:t[a].author})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container-fluid p-2 bg-primary text-white border rounded-top"},o.a.createElement("h1",{className:"text-center"},"Random Quote Machine")),o.a.createElement("div",{id:"quote-box",className:"container mt-5 col-lg-7 mt-3"},o.a.createElement("blockquote",{className:"blockquote text-right"},o.a.createElement("h2",{id:"text",className:"quote-text"},o.a.createElement("q",null,this.state.message)),o.a.createElement("h3",{id:"author",className:"blockquote-footer"},this.state.author)),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(this.state.message).concat(this.state.author),target:"_blank",rel:"noopener noreferrer",id:"tweet-quote",className:"btn btn-primary ml-1",role:"button"},o.a.createElement("i",{className:"fab fa-twitter-square"})),o.a.createElement("button",{type:"button",className:"btn btn-primary ml-1",onClick:this.copyToClipboard},"Copy this quote")),o.a.createElement("div",null,o.a.createElement("button",{type:"button",id:"new-quote",className:"btn btn-success",onClick:this.handleClick},"New quote")))),o.a.createElement("div",{style:{height:45,backgroundColor:"white"}}),o.a.createElement("div",{style:{height:45,backgroundColor:"white"},className:"fixed-bottom d-flex justify-content-center align-items-end"},o.a.createElement("p",{className:"text-center font-italic small"},"Made by Dan Sprucek as a part of freeCodeCamp certification")))}}]),a}(o.a.Component);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.6758bdc9.chunk.js.map