(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{171:function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(65),r=(0,n(25).createHashHistory)();t.a=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement(c.f,{mode:"light",icon:"#/Home"===window.location.hash?"":l.a.createElement(c.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{r.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return S}),n.d(t,"g",function(){return z}),n.d(t,"c",function(){return j}),n.d(t,"e",function(){return I}),n.d(t,"b",function(){return J}),n.d(t,"d",function(){return L}),n.d(t,"f",function(){return O});var a=n(178),l=n.n(a),c=n(179),r=n.n(c),i=n(180),o=n.n(i),s=n(181),m=n.n(s),d=n(182),p=n.n(d),h=n(183),u=n.n(h),v=n(184),E=n.n(v),w=n(185),x=n.n(w),f=n(174),b=n.n(f),g=n(186),y=n.n(g),C=n(0),k=n.n(C),N=n(232);n(173);function H(e,t){var n=x()(e);if(E.a){var a=E()(e);t&&(a=u()(a).call(a,function(t){return p()(e,t).enumerable})),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)m()(n=H(Object(a),!0)).call(n,function(t){y()(e,t,a[t])});else if(o.a)r()(e,o()(a));else{var c;m()(c=H(Object(a))).call(c,function(t){l()(e,t,p()(a,t))})}}return e}class S extends k.a.Component{render(){var e=this.props,t=e.route,n=e.title,a=e.containerStyle,l=e.titleStyle;return k.a.createElement("div",{className:"blockComponent",style:a},k.a.createElement(N.a,{to:t},k.a.createElement("p",{style:l},n)))}}class z extends k.a.Component{render(){return k.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class j extends k.a.Component{render(){return k.a.createElement("div",{className:"label"},k.a.createElement("p",null,k.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class I extends k.a.Component{render(){return k.a.createElement("section",{className:"paragraph",style:V({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class J extends k.a.Component{render(){return k.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},k.a.createElement("pre",null,this.props.content))}}class L extends k.a.Component{render(){var e;return k.a.createElement("div",{className:"listItem"},k.a.createElement("ul",null,b()(e=this.props.list).call(e,(e,t)=>k.a.createElement("li",{key:t},e))))}}class O extends k.a.Component{render(){var e=this.props,t=e.header,n=e.data;return k.a.createElement("div",{className:"renderTable"},k.a.createElement("table",null,k.a.createElement("thead",null,k.a.createElement("tr",null,b()(t).call(t,(e,t)=>k.a.createElement("th",{key:t},e)))),k.a.createElement("tbody",null,b()(n).call(n,(e,t)=>k.a.createElement("tr",{key:t},b()(e).call(e,(e,t)=>k.a.createElement("td",{key:t},e)))))))}}},173:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(171),r=n(172);t.default=class extends l.a.Component{render(){return l.a.createElement(c.a,null,l.a.createElement("div",{style:{padding:"0 10px"}},l.a.createElement(r.g,{title:"\u4f7f\u7528calc()\u8ba1\u7b97\u5bbd\u9ad8\uff08vw/vh\uff09"}),l.a.createElement(r.c,{title:"calc()\u662f\u4ec0\u4e48\uff1f"}),l.a.createElement(r.e,{title:"\u7b80\u5355\u6765\u8bf4\u5c31\u662fCSS3\u4e2d\u65b0\u589e\u7684\u4e00\u4e2a\u51fd\u6570\uff0ccalculate\uff08\u8ba1\u7b97\uff09\u7684\u7f29\u5199\u3002\u7528\u4e8e\u52a8\u6001\u8ba1\u7b97\u5bbd/\u9ad8\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528calc()\u7ed9\u5143\u7d20\u7684\u5404\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u503c\u3010margin\u3001border\u3001padding\u3001font-size\u3011\u7b49"}),l.a.createElement(r.c,{title:"calc()\u8bed\u6cd5"}),l.a.createElement(r.e,{title:"calc\u7684\u8bed\u6cd5\u5c31\u662f\u7b80\u5355\u7684\u56db\u5219\u8fd0\u7b97"}),l.a.createElement(r.d,{list:["\u4f7f\u7528\u201c+\u201d\u3001\u201c-\u201d\u3001\u201c*\u201d \u548c \u201c/\u201d\u56db\u5219\u8fd0\u7b97\uff1b","\u53ef\u4ee5\u4f7f\u7528\u767e\u5206\u6bd4\u3001px\u3001em\u3001rem\u7b49\u5355\u4f4d\uff1b","\u53ef\u4ee5\u6df7\u5408\u4f7f\u7528\u5404\u79cd\u5355\u4f4d\u8fdb\u884c\u8ba1\u7b97\uff1b",'\u8868\u8fbe\u5f0f\u4e2d\u6709\u201c+\u201d\u548c\u201c-\u201d\u65f6\uff0c\u5176\u524d\u540e\u5fc5\u987b\u8981\u6709\u7a7a\u683c\uff0c\u5982"width: calc(12%+5em)"\u8fd9\u79cd\u6ca1\u6709\u7a7a\u683c\u7684\u5199\u6cd5\u662f\u9519\u8bef\u7684\uff1b',"\u8868\u8fbe\u5f0f\u4e2d\u6709\u201c*\u201d\u548c\u201c/\u201d\u65f6\uff0c\u5176\u524d\u540e\u53ef\u4ee5\u6ca1\u6709\u7a7a\u683c\uff0c\u4f46\u5efa\u8bae\u7559\u6709\u7a7a\u683c\u3002"]}),l.a.createElement(r.c,{title:"calc()\u7684\u7528\u9014"}),l.a.createElement(r.e,{title:"\u4e3b\u8981\u7528\u4e8e\u8ba1\u7b97\u4e0d\u786e\u5b9a\u503c\uff0c\u4f8b\u5982\u4e00\u4e2a\u5916\u8fb9\u8ddd\u4e3a10px,\u5bbd\u5ea6\u4e3a100%\u7684\u5143\u7d20\uff0c\u8fd9\u79cd\u60c5\u51b5\u6211\u4eec\u600e\u4e48\u8bbe\u7f6e\u5462\uff1f\u5982\u679c\u8bbe\u7f6e\u4e86"}),l.a.createElement(r.b,{content:"width: 100%;\nmargin: 10px;\n"}),l.a.createElement(r.e,{title:"\u4f60\u53ef\u4ee5\u770b\u51fa\u8fd9\u4e2abox\u5df2\u7ecf\u6ea2\u51fa\u4e86\uff0c\u90a3\u4e48\u600e\u4e48\u89e3\u51b3\u5462\uff1f\u5c31\u53ef\u4ee5\u7528calc\u51fd\u6570\u4e86\u3002"}),l.a.createElement(r.b,{content:"width: 800px;\nwidth: calc(100% - (10 *2)px);\nmargin: 10px;\n"}),l.a.createElement(r.c,{title:"vw\u548cvh\u662f\u4ec0\u4e48\uff1f"}),l.a.createElement(r.e,{title:"vw\u3001vh\u3001vmin\u3001vmax\u662f\u4e00\u79cd\u89c6\u7a97\u5355\u4f4d\uff0c\u4e5f\u662f\u76f8\u5bf9\u5355\u4f4d\u3002\u5b83\u76f8\u5bf9\u7684\u4e0d\u662f\u7236\u8282\u70b9\u6216\u8005\u9875\u9762\u7684\u6839\u8282\u70b9\u3002\u800c\u662f\u7531\u89c6\u7a97\uff08Viewport\uff09\u5927\u5c0f\u6765\u51b3\u5b9a\u7684\uff0c\u5355\u4f4d 1\uff0c\u4ee3\u8868\u7c7b\u4f3c\u4e8e 1%\u3002\u89c6\u7a97(Viewport)\u662f\u4f60\u7684\u6d4f\u89c8\u5668\u5b9e\u9645\u663e\u793a\u5185\u5bb9\u7684\u533a\u57df\u2014\uff0c\u6362\u53e5\u8bdd\u8bf4\u662f\u4f60\u7684\u4e0d\u5305\u62ec\u5de5\u5177\u680f\u548c\u6309\u94ae\u7684\u7f51\u9875\u6d4f\u89c8\u5668\u3002"}),l.a.createElement(r.e,{title:"\u5177\u4f53\u63cf\u8ff0\u5982\u4e0b\uff1a"}),l.a.createElement(r.d,{list:["vw\uff1a\u89c6\u7a97\u5bbd\u5ea6\u7684\u767e\u5206\u6bd4\uff081vw \u4ee3\u8868\u89c6\u7a97\u7684\u5bbd\u5ea6\u4e3a 1%\uff09","vh\uff1a\u89c6\u7a97\u9ad8\u5ea6\u7684\u767e\u5206\u6bd4","vmin\uff1a\u53d6\u5f53\u524dVw\u548cVh\u4e2d\u8f83\u5c0f\u7684\u90a3\u4e00\u4e2a\u503c","vmax\uff1a\u53d6\u5f53\u524dVw\u548cVh\u4e2d\u8f83\u5927\u7684\u90a3\u4e00\u4e2a\u503c"]}),l.a.createElement(r.c,{title:"vw\u3001vh \u4e0e % \u767e\u5206\u6bd4\u7684\u533a\u522b"}),l.a.createElement(r.e,{title:"\uff081\uff09% \u662f\u76f8\u5bf9\u4e8e\u7236\u5143\u7d20\u7684\u5927\u5c0f\u8bbe\u5b9a\u7684\u6bd4\u7387\uff0cvw\u3001vh \u662f\u89c6\u7a97\u5927\u5c0f\u51b3\u5b9a\u7684\u3002 \uff082\uff09vw\u3001vh \u4f18\u52bf\u5728\u4e8e\u80fd\u591f\u76f4\u63a5\u83b7\u53d6\u9ad8\u5ea6\uff0c\u800c\u7528 % \u5728\u6ca1\u6709\u8bbe\u7f6e body \u9ad8\u5ea6\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u65e0\u6cd5\u6b63\u786e\u83b7\u5f97\u53ef\u89c6\u533a\u57df\u7684\u9ad8\u5ea6\u7684\uff0c\u6240\u4ee5\u8fd9\u662f\u633a\u4e0d\u9519\u7684\u4f18\u52bf\u3002"}),l.a.createElement(r.c,{title:"calc\u548cvh/vw\u7ed3\u5408\u4f7f\u7528"}),l.a.createElement(r.e,{title:"\u4e0a\u9762\u6211\u4eec\u4f7f\u7528%\u7ed3\u5408calc\u4f7f\u7528\u53ef\u4ee5\u5b9e\u73b0\u60f3\u8981\u7684\u6548\u679c\uff0c\u4e3a\u4ec0\u4e48\u8981\u5f15\u5165vw\u548cvh\u5462\uff1f\u4e0a\u9762\u8bf4%\u548cvw,vh\u7684\u533a\u522b\u4e2d\uff0c% \u5728\u6ca1\u6709\u8bbe\u7f6e body \u9ad8\u5ea6\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u65e0\u6cd5\u6b63\u786e\u83b7\u5f97\u53ef\u89c6\u533a\u57df\u7684\u9ad8\u5ea6\u7684\u3002"}),l.a.createElement(r.c,{title:"calc + vw \u8ba1\u7b97\u5bbd\u5ea6"}),l.a.createElement(r.b,{content:"width: 800px; /* fallback for b*/\nwidth: -moz-calc(100vw - (2 * 10)px);\nwidth: -webkit-calc(100vw -(2 * 10)px);\nwidth: calc(100vw - (2 * 10)px);\n"}),l.a.createElement(r.c,{title:"calc + vh \u8ba1\u7b97\u9ad8\u5ea6"}),l.a.createElement(r.b,{content:"height: 800px;\nheight: -moz-calc(100vh - (2 * 10)px);\nheight: -webkit-calc(100vh - (2 * 10)px);\nheight: calc(100vh - (2 * 10)px);\n"})))}}}}]);