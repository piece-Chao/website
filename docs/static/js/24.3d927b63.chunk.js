(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{119:function(e,t,a){"use strict";a(123);var n=a(124),l=a.n(n),s=(a(125),a(126)),c=a.n(s),i=a(0),r=a.n(i);var o=(0,a(9).createHashHistory)();t.a=class extends i.Component{render(){return r.a.createElement("div",null,r.a.createElement(l.a,{mode:"light",icon:"#/Home"===window.location.hash?"":r.a.createElement(c.a,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{o.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},121:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);a(127);var n=a(128),l=a.n(n),s=(a(129),a(130)),c=a.n(s),i=a(0),r=a.n(i),o=a(119);a(121);t.default=class extends r.a.Component{constructor(){super(),this.state={accordionList:[{title:"\u79d1\u6280",basicsList:[{title:"babel\u57fa\u672c\u914d\u7f6e"}]},{title:"\u6570\u7801",basicsList:[{title:"babel\u57fa\u672c\u914d\u7f6e"}]},{title:"\u91d1\u878d",basicsList:[{title:"babel\u57fa\u672c\u914d\u7f6e"}]}]}}render(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"level2"},r.a.createElement("div",{className:"_desc"},r.a.createElement("h2",null,"\u6742\u8c08"),r.a.createElement("p",null,"\u8fd9\u91cc\u4f1a\u5199\u4e00\u4e9b\u968f\u60f3\uff0c\u8f6c\u8f7d\u4e00\u4e9b\u597d\u7684\u6587\u7ae0\uff0c\u975e\u524d\u7aef\u9886\u57df")),r.a.createElement("main",null,r.a.createElement("div",null,this.state.accordionList.map((e,t)=>r.a.createElement(l.a,{key:t,defaultActiveKey:"0",className:"my-accordion"},r.a.createElement(l.a.Panel,{header:e.title},r.a.createElement(c.a,{className:"my-list"},e.basicsList.map((e,t)=>r.a.createElement(c.a.Item,{key:t},e.title))))))))))}}}}]);