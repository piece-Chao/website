(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{171:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(65),c=(0,n(25).createHashHistory)();t.a=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement(r.f,{mode:"light",icon:"#/Home"===window.location.hash?"":l.a.createElement(r.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{c.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return I}),n.d(t,"f",function(){return W}),n.d(t,"c",function(){return H}),n.d(t,"e",function(){return N}),n.d(t,"b",function(){return J}),n.d(t,"d",function(){return M});var a=n(179),l=n.n(a),r=n(180),c=n.n(r),i=n(181),o=n.n(i),s=n(182),m=n.n(s),d=n(183),E=n.n(d),b=n(184),p=n.n(b),u=n(185),f=n.n(u),x=n(186),h=n.n(x),g=n(176),v=n.n(g),$=n(187),S=n.n($),y=n(0),k=n.n(y),w=n(232);n(173);function z(e,t){var n=h()(e);if(f.a){var a=f()(e);t&&(a=p()(a).call(a,function(t){return E()(e,t).enumerable})),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)m()(n=z(Object(a),!0)).call(n,function(t){S()(e,t,a[t])});else if(o.a)c()(e,o()(a));else{var r;m()(r=z(Object(a))).call(r,function(t){l()(e,t,E()(a,t))})}}return e}class I extends k.a.Component{render(){var e=this.props,t=e.route,n=e.title,a=e.containerStyle,l=e.titleStyle;return k.a.createElement("div",{className:"blockComponent",style:a},k.a.createElement(w.a,{to:t},k.a.createElement("p",{style:l},n)))}}class W extends k.a.Component{render(){return k.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}class H extends k.a.Component{render(){return k.a.createElement("div",{className:"label"},k.a.createElement("p",null,k.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}class N extends k.a.Component{render(){return k.a.createElement("section",{className:"paragraph",style:C({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}class J extends k.a.Component{render(){return k.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},k.a.createElement("pre",null,this.props.content))}}class M extends k.a.Component{render(){var e;return k.a.createElement("div",{className:"listItem"},k.a.createElement("ul",null,v()(e=this.props.list).call(e,(e,t)=>k.a.createElement("li",{key:t},e))))}}},173:function(e,t,n){},438:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(171),c=n(172);t.default=class extends l.a.Component{render(){return l.a.createElement(r.a,null,l.a.createElement("div",{style:{padding:"0 10px"}},l.a.createElement(c.f,{title:"Sass \u5feb\u901f\u5165\u95e8"}),l.a.createElement(c.c,{title:"Sass\u662f\u4ec0\u4e48\uff1f"}),l.a.createElement(c.e,{title:"Sass \u662f\u4e00\u6b3e\u5f3a\u5316 CSS \u7684\u8f85\u52a9\u5de5\u5177\uff0c\u5b83\u5728 CSS \u8bed\u6cd5\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u53d8\u91cf (variables)\u3001\u5d4c\u5957 (nested rules)\u3001\u6df7\u5408 (mixins)\u3001\u5bfc\u5165 (inline imports) \u7b49\u9ad8\u7ea7\u529f\u80fd\uff0c\u8fd9\u4e9b\u62d3\u5c55\u4ee4 CSS \u66f4\u52a0\u5f3a\u5927\u4e0e\u4f18\u96c5\u3002"}),l.a.createElement(c.c,{title:"\u7b80\u6613\u5b89\u88c5"}),l.a.createElement(c.e,{title:"Sass\u662fRuby\u8bed\u8a00\u5199\u7684\uff0c\u8981\u5b89\u88c5Sass\uff0c\u5fc5\u987b\u5148\u5b89\u88c5Ruby\uff0c\u5f53\u7136,\u5e76\u4e0d\u8981\u6c42\u4f60\u4f1aRuby\u3002 \u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86Ruby\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u5b89\u88c5Sass\uff1a"}),l.a.createElement(c.b,{content:"gem install sass\n"}),l.a.createElement(c.e,{title:"\u6ce8\uff1asass\u6587\u4ef6\u7684\u540e\u7f00\u540d\u662f.scss\u6216.sass\uff0c\u535a\u4e3b\u4f7f\u7528.scss\u3002\u5f53\u7136\uff0c\u9664\u4e86Sass\u7684\u8bed\u6cd5\uff0c\u4ee3\u7801\u91cc\u9762\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528CSS\u8bed\u6cd5\u3002 \u786e\u8ba4\u662f\u5426\u5b89\u88c5\uff1a"}),l.a.createElement(c.b,{content:"sass -v\n"}),l.a.createElement(c.e,{title:"\u5982\u679c\u5b89\u88c5\u6210\u529f\uff0c\u4f1a\u6253\u5370\u51fa\u7248\u672c\u4fe1\u606f\uff1a"}),l.a.createElement(c.b,{content:"Sass 3.4.23\n"}),l.a.createElement(c.e,{title:"\u7f16\u8bd1 \u5bf9\u4e8escss\u6587\u4ef6\uff0c\u6211\u4eec\u6700\u7ec8\u8fd8\u662f\u8981\u7f16\u8bd1\u6210css\u6587\u4ef6\u624d\u80fd\u4f7f\u7528\u3002 \u7f16\u8bd1\u4e5f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u8f93\u5165\u4e0b\u5217\u547d\u4ee4\uff1a"}),l.a.createElement(c.b,{content:"sass input.scss output.css\n"}),l.a.createElement(c.e,{title:"input.scss\u662f\u4f60\u7684Sass\u6587\u4ef6\uff0coutput.css\u662f\u4f60\u9700\u8981\u8f93\u51fa\u7684\u6587\u4ef6\u3002 \u6211\u4eec\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u5b9e\u65f6\u81ea\u52a8\u7f16\u8bd1:"}),l.a.createElement(c.b,{content:"sass --watch input.scss:output.css\n"}),l.a.createElement(c.e,{title:"\u8fd9\u6837\uff0c\u6bcf\u6b21\u4fee\u6539\u5e76\u4fdd\u5b58\u65f6\u90fd\u4f1a\u81ea\u52a8\u7f16\u8bd1\u8f93\u51fa\u3002 \u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76d1\u89c6\u6574\u4e2a\u6587\u4ef6\u5939\u7684\u53d8\u5316:"}),l.a.createElement(c.b,{content:"sass --watch app/sass:public/stylesheets\n"}),l.a.createElement(c.c,{title:"\u8f93\u51fa\u98ce\u683c"}),l.a.createElement(c.e,{style:{textIndent:0},title:"sass\u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86\u56db\u79cd\u8f93\u51fa\u98ce\u683c\uff1a"}),l.a.createElement(c.d,{list:["nested: \u5d4c\u5957\u7f29\u8fdb\u7684css\u4ee3\u7801\uff0c\u5b83\u662f\u9ed8\u8ba4\u503c\u3002","expanded: \u6807\u51c6\u683c\u5f0f\u7684\u4ee3\u7801","compact: \u884c\u683c\u5f0f\u7684\u4ee3\u7801","compressed: \u538b\u7f29\u540e\u7684\u4ee3\u7801\uff0c\u4e00\u822c\u7528\u4e8e\u751f\u4ea7\u73af\u5883"]}),l.a.createElement(c.e,{title:"\u4f7f\u7528\u65b9\u6cd5:"}),l.a.createElement(c.b,{content:"sass --style compressed input.scss output.css\n"}),l.a.createElement(c.e,{title:"\u56db\u79cd\u8f93\u51fa\u98ce\u683c\u5bf9\u6bd4:"}),l.a.createElement(c.b,{content:"div {  \n\n    background: red;  \n  \n    p { color: blue; }  \n  \n}   \n  \n  \n/* nested */  \n\ndiv {   \n\n    background: red; }   \n\ndiv p {   \n\n    color: blue; }   \n\n  \n  \n/* expanded */  \n\ndiv {   \n\n    background: red;  \n\n}  \n\ndiv p {   \n\n    color: blue;  \n\n}   \n  \n  \n  \n/* compact */  \n\ndiv { background: red; }  \n\ndiv p { color: blue; }   \n\n\n\n/* compressed */  \n\ndiv{background:red}div p{color:blue}\n"}),l.a.createElement(c.e,{title:"\u66f4\u591a\u5e2e\u52a9\u547d\u4ee4\uff1a"}),l.a.createElement(c.b,{content:"sass --help\n"}),l.a.createElement(c.c,{title:"\u57fa\u7840\u8bed\u6cd5"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"1\u3001\u53d8\u91cf"}),l.a.createElement(c.e,{title:"Sass\u4f7f\u7528$\u7f8e\u5143\u7b26\u53f7\u6765\u58f0\u660e\u53d8\u91cf\uff1a"}),l.a.createElement(c.b,{content:"$blue: blue;\n"}),l.a.createElement(c.e,{title:"\u76f4\u63a5\u4f7f\u7528\uff1a"}),l.a.createElement(c.b,{content:"div { color: $blue; }\n"}),l.a.createElement(c.e,{title:"\u5728Sass\u4e2d\uff0c\u53d8\u91cf\u662f\u6709\u4f5c\u7528\u57df\u7684\uff0c\u7c7b\u4f3cES6\u4e2d\u7684let\uff0csass\u53d8\u91cf\u652f\u6301\u5757\u7ea7\u4f5c\u7528\u57df(\u82b1\u62ec\u53f7{}\u5305\u88f9\u533a\u57df)\uff0c\u4e5f\u5c31\u662f\u6709\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\u4e4b\u5206\uff1a"}),l.a.createElement(c.b,{content:"$blue: blue; // \u5168\u5c40\u53d8\u91cf  \n\ndiv {   \n\n    $blue: red;  // \u5c40\u90e8\u53d8\u91cf  \n\n    color: $blue;  // red  \n\n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div {   \n\n    color: red; }\n"}),l.a.createElement(c.e,{title:"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528!global\u5c06\u5c40\u90e8\u53d8\u91cf\u8f6c\u6362\u4e3a\u5168\u5c40\u53d8\u91cf\uff1a"}),l.a.createElement(c.b,{content:"div {   \n\n    $red: red !global;  \n  \n    color: red;  \n  \n}  \n  \na {  \n  \n    color: $red;  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div {   \n\n    color: red; }  \n  \na {   \n  \n    color: red; }\n"}),l.a.createElement(c.e,{title:"\u6ce8\u610f\uff1a\u5982\u679c\u4e0a\u9762\u7684red\u540e\u9762\u4e0d\u52a0\u4e0a!global\uff0cSass\u4f1a\u62a5\u9519\uff0c\u4f60\u53ef\u4ee5\u5728\u7ec8\u7aef\u6216\u8f93\u51fa\u6587\u4ef6\u6bd4\u5982output.css\u91cc\u770b\u5230\u9519\u8bef\u3002 \u6b64\u5916,\u53d8\u91cf\u4e5f\u53ef\u4ee5\u62fc\u63a5\u5728CSS\u5c5e\u6027\u91cc,\u4e0d\u8fc7\u8981\u501f\u52a9\u63d2\u503c\u8bed\u53e5(#{}):"}),l.a.createElement(c.b,{content:'$theme: ".dark";   \n\n\n#{$theme} div {  \n\n  color: black  \n\n}\n'}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".dark div { color: black; }\n"}),l.a.createElement(c.e,{title:"\u4e5f\u53ef\u4ee5\u8fd9\u6837:"}),l.a.createElement(c.b,{content:"$side: top;   \n\ndiv {\n\n  border-#{$side}-color: red;\n\n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div {border-top-color: red; }\n"}),l.a.createElement(c.e,{title:"\u6ce8\uff1a\u5982\u679c\u4f20\u5165\u7684\u662f\u5b57\u7b26\u4e32\uff0c\u63d2\u503c\u8bed\u53e5\u8f93\u51fa\u7684\u6700\u7ec8\u90fd\u662f\u4e0d\u5e26\u5f15\u53f7\u7684\u5b57\u7b26\u4e32"}),l.a.createElement(c.e,{style:{textIndent:0,fontWeight:700},title:"2\u3001\u5d4c\u5957\u8bed\u6cd5"}),l.a.createElement(c.e,{title:"Sass\u5141\u8bb8CSS\u6837\u5f0f\u5d4c\u5957:"}),l.a.createElement(c.b,{content:"div {  \n\n    color: black;  \n  \n    a { color: red;}  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { color: black; }  \n\ndiv a { color: red; }\n"}),l.a.createElement(c.e,{title:"\u591a\u5c42\u5d4c\u5957:"}),l.a.createElement(c.b,{content:"div {  \n\n    p, span{  \n  \n        color:red;  \n    \n        a {font-size: 15px;}  \n  \n    }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div p, div span { color: red; }  \n\ndiv p a, div span a { font-size: 15px; }\n"}),l.a.createElement(c.e,{title:"CSS\u4e2d,\u6709\u4e9b\u5c5e\u6027\u62e5\u6709\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4,\u6bd4\u5982font-size,font-weight\u7b49,\u5bf9\u4e8e\u8fd9\u4e9b\u5c5e\u6027,\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5c5e\u6027\u5d4c\u5957:"}),l.a.createElement(c.b,{content:"div {  \n\n    font: {  \n  \n        size: 10px;\n    \n        weight: bold;\n  \n    }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { font-size: 10px; font-weight: bold; }\n"}),l.a.createElement(c.e,{title:"\u6ce8\u610ffont\u540e\u9762\u7684\u5192\u53f7(:)\u3002 \u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u8fd9\u6837:"}),l.a.createElement(c.b,{content:"div {  \n\n    font: 15px {  \n  \n        size: 10px;  \n    \n        weight: bold;  \n  \n    }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { font: 15px; font-size: 10px; font-weight: bold; }\n"}),l.a.createElement(c.e,{style:{textIndent:0,fontWeight:700},title:"\u7236\u5143\u7d20&"}),l.a.createElement(c.e,{title:"\u5728Sass\u4e2d\uff0c&\u8868\u793a\u7236\u5143\u7d20\u3002"}),l.a.createElement(c.b,{content:"a {  \n\n    &:hover { color: red; }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"a:hover { color: red; }\n"}),l.a.createElement(c.e,{title:"\u5f53\u6709\u591a\u5c42\u5d4c\u5957\u6837\u5f0f\u65f6\uff0c&\u8868\u793a\u5b83\u6240\u6709\u7956\u5148\u5143\u7d20\u7684\u62fc\u63a5:"}),l.a.createElement(c.b,{content:"div {  \n\n    a {  \n  \n        &:hover { color: red; }  \n  \n    }\n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div a:hover { color: red; }\n"}),l.a.createElement(c.e,{title:"\u6b64\u5916\uff0c&\u8fd8\u53ef\u4ee5\u4f5c\u4e3a\u9009\u62e9\u5668\u7684\u4e00\u90e8\u5206:"}),l.a.createElement(c.b,{content:".main {   \n\n    &-content { color: red; }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".main-content { color: red; }\n"}),l.a.createElement(c.e,{style:{textIndent:0,fontWeight:700},title:"\u6ce8\u91ca"}),l.a.createElement(c.e,{title:"Sass\u63d0\u4f9b\u4e86\u4e09\u79cd\u6ce8\u91ca\u65b9\u5f0f:"}),l.a.createElement(c.d,{list:["\u591a\u884c\u6ce8\u91ca: /* */","\u5355\u884c\u6ce8\u91ca //","!\u591a\u884c\u6ce8\u91ca: /*! */,\u901a\u5e38\u7528\u4e8e\u6dfb\u52a0\u7248\u6743\u4fe1\u606f"]}),l.a.createElement(c.e,{title:"\u4e09\u8005\u7684\u533a\u522b:"}),l.a.createElement(c.d,{list:["\u5355\u884c\u6ce8\u91ca\u4e0d\u4f1a\u8f93\u51fa\u5230CSS\u6587\u4ef6,\u591a\u884c\u6ce8\u91ca\u4f1a","\u5355\u884c\u6ce8\u91ca\u548c\u591a\u884c\u6ce8\u91ca\u4e0d\u4f1a\u8f93\u51fa\u5230\u538b\u7f29CSS\u6587\u4ef6\u4e2d,\u800c!\u591a\u884c\u6ce8\u91ca\u4f1a"]}),l.a.createElement(c.e,{title:"\u6b64\u5916,\u524d\u9762\u63d0\u5230\u7684\u63d2\u503c\u8bed\u53e5(#{})\u4e5f\u53ef\u4ee5\u7528\u5230\u591a\u884c\u6ce8\u91ca\u4e2d"}),l.a.createElement(c.b,{content:'$version: "1.0.0";  \n\n/* \u5f53\u524d\u7248\u672c: #{$version} */\n'}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"/* \u5f53\u524d\u7248\u672c: 1.0.0 */\n"}),l.a.createElement(c.e,{style:{textIndent:0,fontWeight:700},title:"\u8fd0\u7b97"}),l.a.createElement(c.e,{title:"Sass\u652f\u6301\u6570\u5b57\u7684\u52a0\u51cf\u4e58\u9664\u3001\u53d6\u6574\u7b49\u8fd0\u7b97 (+, -, *, /, %) \u5173\u7cfb\u8fd0\u7b97 <, >, <=, >=\u4e5f\u53ef\u7528\u4e8e\u6570\u5b57\u8fd0\u7b97\uff0c\u76f8\u7b49\u8fd0\u7b97 ==, != \u53ef\u7528\u4e8e\u6240\u6709\u6570\u636e\u7c7b\u578b"}),l.a.createElement(c.b,{content:"div {   \n\n    font-size: 10px + 10px;   \n  \n    height: 40px - 5px;   \n  \n    width: 100 % 3px;\n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { font-size: 20px; height: 35px; width: 1px; }\n"}),l.a.createElement(c.e,{title:"\u6ce8\u610f\uff1a\u5728\u8fdb\u884c\u52a0\u51cf\u4e58\u9664\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528\u7edf\u4e00\u5355\u4f4d\uff0c\u5426\u5219\u5c31\u9700\u8bb0\u4f4f\u54ea\u4e9b\u5355\u4f4d\u662f\u53ef\u4ee5\u8f6c\u6362\uff0c\u54ea\u4e9b\u662f\u4e0d\u53ef\u4ee5\u8f6c\u6362\u7684\uff0c\u7a0d\u4e0d\u6ce8\u610f\uff0cSass\u5c31\u4f1a\u62a5\u9519\u3002"}),l.a.createElement(c.e,{style:{textIndent:0,fontWeight:700},title:"\u7279\u6b8a\u7684\u9664\u6cd5"}),l.a.createElement(c.e,{title:"\u7531\u4e8e\u539f\u751fCSS\u4e2d\u7684\u659c\u6760(/)\u662f\u6709\u7528\u9014\u7684\uff08\u6bd4\u5982\u5b9a\u4e49\u5706\u89d2\u7684\u4e0d\u540c\u534a\u5f84\u65f6\uff0cborder-radius: 10px/20px\uff0c\u8868\u793a\u6c34\u5e73\u534a\u5f84\u4e3a10px\uff0c\u5782\u76f4\u534a\u5f84\u4e3a20px\uff09\uff0c\u6240\u4ee5\u5728Sass\u4e2d\u4f7f\u7528\u65f6\u8981\u6ce8\u610f,\u53ea\u6709\u4e0b\u9762\u4e09\u79cd\u60c5\u51b5\u624d\u4f1a\u88ab\u89c6\u4e3a\u9664\u6cd5\u8fd0\u7b97\uff1a"}),l.a.createElement(c.d,{list:["\u5982\u679c\u503c\u88ab\u5706\u62ec\u53f7\u5305\u88f9\uff1a (20px / 10px)","\u5982\u679c\u503c\u662f\u7b97\u6570\u8868\u8fbe\u5f0f\u7684\u4e00\u90e8\u5206\uff1a (10px + 20px / 10px)","\u5982\u679c\u503c\u7684\u4e00\u90e8\u5206\u662f\u53d8\u91cf\u6216\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff1a$width / 10"]}),l.a.createElement(c.e,{title:"\u5982\u679c\u4f60\u60f3\u663e\u5f0f\u7684\u8ba9\u659c\u6760(/)\u4e0d\u505a\u9664\u6cd5\u8fd0\u7b97,\u53ea\u9700\u4f7f\u7528\u63d2\u503c\u8bed\u53e5(#{}):"}),l.a.createElement(c.b,{content:"div { #{$font-size}/#{$line-height}; }\n"}),l.a.createElement(c.e,{title:"\u5982JavaScript\u4e2d\u7684+\u53f7\u4e00\u6837\uff0cSass\u4e2d\u7684+\u53f7\u4e5f\u53ef\u4ee5\u8fde\u63a5\u5b57\u7b26\u4e32\uff1a"}),l.a.createElement(c.b,{content:"div { cursor: e + -resize; }\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { cursor: e-resize; }\n"}),l.a.createElement(c.c,{title:"\u63a7\u5236\u8bed\u53e5"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"1\u3001@if"}),l.a.createElement(c.e,{title:"@if\u8bed\u53e5\u7c7b\u4f3cJavaScript\u4e2d\u7684if\u8bed\u53e5,\u5f53 @if \u7684\u8868\u8fbe\u5f0f\u8fd4\u56de\u503c\u4e0d\u662f false \u6216\u8005 null \u65f6\uff0c\u6761\u4ef6\u6210\u7acb\uff0c\u8f93\u51fa {} \u5185\u7684\u4ee3\u7801\uff1a"}),l.a.createElement(c.b,{content:"div {  \n\n    @if 3 > 2 { color: red; }  \n  \n    @if null { color: black; }\n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { color: red; }\n"}),l.a.createElement(c.e,{title:"@if \u58f0\u660e\u540e\u9762\u53ef\u4ee5\u8ddf\u591a\u4e2a @else if \u58f0\u660e\uff0c\u6216\u8005\u4e00\u4e2a @else \u58f0\u660e\u3002\u5982\u679c @if \u58f0\u660e\u5931\u8d25\uff0cSass \u5c06\u9010\u6761\u6267\u884c @else if \u58f0\u660e\uff0c\u5982\u679c\u5168\u90e8\u5931\u8d25\uff0c\u6700\u540e\u6267\u884c @else \u58f0\u660e\uff1a"}),l.a.createElement(c.b,{content:"div {  \n\n    @if 1 > 2 {   \n    \n        color: red;  \n    \n    } @else if 3 > 2 {   \n    \n        color: blue;  \n    \n    } @else {   \n    \n        color: black;  \n    \n    }  \n    \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { color: blue; }\n"}),l.a.createElement(c.e,{title:"\u6ce8: \u63a7\u5236\u8bed\u53e5\u4e5f\u53ef\u4ee5\u5728\u6700\u5916\u5c42\u4f7f\u7528."}),l.a.createElement(c.c,{title:"\u5faa\u73af\u8bed\u53e5"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"1.@for"}),l.a.createElement(c.e,{title:"Sass\u7684for\u8bed\u53e5\u4e0eJavaScript\u7684for\u8bed\u53e5\u7684\u4f5c\u7528\u7c7b\u4f3c\uff0c\u4f46\u8bed\u6cd5\u6709\u6240\u4e0d\u540c\u3002"}),l.a.createElement(c.e,{title:"from...through.."}),l.a.createElement(c.b,{content:"@for $var from start through end {}\n"}),l.a.createElement(c.e,{title:"\u4f8b\u5b50\uff1a"}),l.a.createElement(c.b,{content:"@for $i from 1 through 3 {   \n\n    .large-#{$i} { font-size: 10px * $i; }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".large-1 { font-size: 10px; }   \n\n.large-2 { font-size: 20px; }\n\n.large-3 { font-size: 30px; }\n"}),l.a.createElement(c.e,{title:"from...to..."}),l.a.createElement(c.b,{content:"@for $var from start to end {}\n"}),l.a.createElement(c.e,{title:"\u4f8b\u5b50\uff1a"}),l.a.createElement(c.b,{content:"@for $i from 1 to 3 {   \n\n    .large-#{$i} { font-size: 10px * $i; }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".large-1 { font-size: 10px; }   \n\n.large-2 { font-size: 20px; }\n"}),l.a.createElement(c.e,{title:"\u5982\u679c\u4f60\u7559\u610f\u4e86\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5e94\u8be5\u53ef\u4ee5\u53d1\u73b0through\u548cto\u7684\u533a\u522b: \u5f53\u4f7f\u7528 through \u65f6\uff0c\u6761\u4ef6\u8303\u56f4\u5305\u542b <start> \u4e0e <end> \u7684\u503c\uff0c\u800c\u4f7f\u7528 to \u65f6\u6761\u4ef6\u8303\u56f4\u53ea\u5305\u542b <start> \u7684\u503c\u4e0d\u5305\u542b <end> \u7684\u503c\u3002 \u6ce8\u610f:start\u548cend\u5fc5\u987b\u662f\u6574\u6570"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"2.@each"}),l.a.createElement(c.e,{title:"Sass\u4e2d\u7684\u6570\u7ec4 \u5728Sass\u4e2d,\u6570\u7ec4\u4fbf\u662f\u901a\u8fc7\u7a7a\u683c\u6216\u8005\u9017\u53f7\u5206\u9694\u7684\u4e00\u7cfb\u5217\u7684\u503c,\u6bd4\u59821 2 3 4\u62161,2,3,4.\u8fd8\u53ef\u4ee5\u7531\u591a\u7ef4\u6570\u7ec4,\u6bd4\u59821 2, 3 4\u8868\u793a\u5305\u542b1 2\u4e0e3 4\u4e24\u4e2a\u6570\u7ec4\u7684\u6570\u7ec4,\u8fd8\u53ef\u4ee5\u8fd9\u6837(1 2) (3 4)"}),l.a.createElement(c.e,{title:"@each\u8bed\u53e5\u7684\u4f5c\u7528\u4e0e@for\u7c7b\u4f3c,\u4f46\u4f7f\u7528\u8bed\u6cd5\u4e0d\u540c:"}),l.a.createElement(c.b,{content:"@each $var in <list>\n"}),l.a.createElement(c.e,{title:"<list>\u662f\u4e00\u7cfb\u5217\u4ee5\u9017\u53f7\u5206\u9694\u7684\u503c\u5217\u8868(\u6570\u7ec4):"}),l.a.createElement(c.b,{content:"@each $icon in user, nav, person {   \n\n    .#{$icon}-icon {   \n  \n      background-image: url('/images/#{$icon}.png');   \n  \n    }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:'.user-icon { background-image: url("/images/user.png"); }   \n\n.nav-icon { background-image: url("/images/nav.png"); }   \n\n.person-icon { background-image: url("/images/person.png"); }\n'}),l.a.createElement(c.e,{title:"\u5bf9\u4e8e\u591a\u7ef4\u6570\u7ec4:"}),l.a.createElement(c.b,{content:"@each $var1, $var2 in ($value,$value), ($value,$value)\n"}),l.a.createElement(c.e,{title:"\u4f8b\u5b50\uff1a"}),l.a.createElement(c.b,{content:"@each $font, $size in (large-1, 10px), (large-2, 20px) {   \n\n    .#{$font} {   \n  \n        font-size: $size;   \n  \n    }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".large-1 { font-size: 10px; }   \n\n.large-2 { font-size: 20px; }\n"}),l.a.createElement(c.e,{title:"\u5bf9\u4e8e\u5143\u7d20\u662f\u952e\u503c\u5bf9\u5f62\u5f0f\u7684\u6570\u7ec4:"}),l.a.createElement(c.b,{content:"@each $key, $value in (key: value, key: value)\n"}),l.a.createElement(c.e,{title:"\u4f8b\u5b50\uff1a"}),l.a.createElement(c.b,{content:"@each $selector, $size in (div: 10px, p: 20px) {   \n\n    #{$selector} {   \n  \n        font-size: $size;   \n  \n    }  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { font-size: 10px; }   \n\np { font-size: 20px; }\n"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"3.@while"}),l.a.createElement(c.e,{title:"@while \u6307\u4ee4\u91cd\u590d\u8f93\u51fa\u683c\u5f0f\u76f4\u5230\u8868\u8fbe\u5f0f\u8fd4\u56de\u7ed3\u679c\u4e3a false:"}),l.a.createElement(c.b,{content:"$i: 6;  \n\n@while $i > 0 {   \n\n    .item-#{$i} { width: 2em * $i; }   \n\n    $i: $i - 2;  \n\n}\n"}),l.a.createElement(c.c,{title:"\u4ee3\u7801\u91cd\u7528(Mixin\u548cextend)"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"1.Mixin"}),l.a.createElement(c.e,{title:"Mixin\u4f7f\u7528@mixin\u8bed\u53e5\u6765\u5b9a\u4e49\u9700\u8981\u91cd\u590d\u4f7f\u7528\u7684\u4ee3\u7801\uff0c\u6bd4\u5982\u8bf4\u6e05\u9664\u6d6e\u52a8\uff1a"}),l.a.createElement(c.b,{content:'@mixin clearfix {   \n\n    &:after {  \n  \n        content: "";  \n    \n        display: block;  \n    \n        height: 0;  \n    \n        clear: both;  \n    \n        visibility: hidden;  \n  \n    }  \n  \n}\n'}),l.a.createElement(c.e,{title:"\u4f7f\u7528@include\u8bed\u53e5\u6765\u4f7f\u7528Mixin\u5b9a\u4e49\u7684\u4ee3\u7801:"}),l.a.createElement(c.b,{content:"div { @include clearfix; }\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:'div:after { content: ""; display: block; height: 0; clear: both; visibility: hidden; }\n'}),l.a.createElement(c.e,{title:"@mixin\u8bed\u53e5\u8fd8\u53ef\u4ee5\u5e26\u53c2\u6570\u548c\u53c2\u6570\u9ed8\u8ba4\u503c\uff1a"}),l.a.createElement(c.b,{content:"@mixin text-font($size, $weight, $color: black) {   \n\n    font: {  \n  \n        size: $size;  \n    \n        weight: $weight;  \n  \n    }  \n  \n    color: $color;  \n  \n}   \n\np { @include text-font(10px, bold); }\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"p { font-size: 10px; font-weight: bold; color: black; }\n"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"\u591a\u4f59\u53c2\u6570"}),l.a.createElement(c.e,{title:"\u591a\u4f59\u53c2\u6570\u4e5f\u53ef\u4ee5\u79f0\u4e3a\u4e0d\u786e\u5b9a\u53c2\u6570\u3002\u6709\u4e9bCSS\u6837\u5f0f(\u6bd4\u5982box-shadow\uff0ctext-shadow\u7b49)\u53ef\u4ee5\u6709\u591a\u4e2a\u4ee5\u9017\u53f7\u5206\u9694\u7684\u503c\u5217\u8868\uff0c\u8fd9\u6837\u5728\u5b9a\u4e49Mixin\u65f6\u6211\u4eec\u5c31\u65e0\u6cd5\u786e\u5b9a\u4f20\u5165\u51e0\u4e2a\u53c2\u6570\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u501f\u52a9\u591a\u4f59\u53c2\u6570\u7684\u5199\u6cd5($name...):"}),l.a.createElement(c.b,{content:"@mixin box-shadow($shadows...) {   \n\n    box-shadow: $shadows;  \n  \n}   \n  \ndiv {  \n\n    @include box-shadow(0 0 3px black, 0 0 5px red);  \n\n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { box-shadow: 0 0 3px black, 0 0 5px red; }\n"}),l.a.createElement(c.e,{title:"\u6b64\u5916\uff0c\u591a\u4f59\u53c2\u6570\u4e5f\u53ef\u4ee5\u7528\u5728\u4f20\u53c2\u65f6:"}),l.a.createElement(c.b,{content:"@mixin colors($text, $background, $border) {   \n\n    color: $text;   \n  \n    background-color: $background;   \n  \n    border-color: $border;  \n  \n}  \n  \n$values: #ff0000, #00ff00, #0000ff;  \n  \n  .primary {   \n  \n        @include colors($values...);  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".primary { color: #ff0000; background-color: #00ff00; border-color: #0000ff; }\n"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"\u4e0d\u5b9a\u5e8f\u4f20\u53c2"}),l.a.createElement(c.e,{title:"\u4e0d\u5b9a\u5e8f\u4f20\u53c2\u53ef\u4ee5\u8ba9\u4f60\u5ffd\u7565\u5f62\u53c2\u7684\u987a\u5e8f\uff0c\u4e0d\u5fc5\u8bb0\u4f4f\u5b83\u4eec\uff1a"}),l.a.createElement(c.b,{content:"@mixin blue-theme($background, $color) {   \n\n    background: $background;   \n  \n    color: $color;  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u4e00\u822c\u6211\u4eec\u662f\u5982\u4e0b\u8c03\u7528:"}),l.a.createElement(c.b,{content:"div { @include blue-theme(red, white); }\n"}),l.a.createElement(c.e,{title:"\u4f46\u6211\u4eec\u4e5f\u53ef\u4ee5\u5ffd\u7565\u4f20\u53c2\u7684\u987a\u5e8f\uff0c\u4f20\u53c2\u65f6\u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u4f20\u53c2\uff1a"}),l.a.createElement(c.b,{content:"div { @include blue-theme($color: white, $background: red); }\n"}),l.a.createElement(c.e,{title:"\u4e24\u79cd\u65b9\u5f0f\u90fd\u4f1a\u8f93\u51fa:"}),l.a.createElement(c.b,{content:"div { background: red; color: white; }\n"}),l.a.createElement(c.e,{title:"\u6ce8\u610f\u70b9:"}),l.a.createElement(c.d,{list:["@mixin \u53ef\u4ee5\u7528 = \u8868\u793a\uff0c\u800c @include \u53ef\u4ee5\u7528 + \u8868\u793a","@include\u4e0d\u4ec5\u53ef\u4ee5\u7528\u5728\u5757\u5185\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528\u5728\u6700\u5916\u5c42"]}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"2.extend"}),l.a.createElement(c.e,{title:"@extend\u8bed\u53e5\u7528\u6765\u5b9e\u73b0\u7ee7\u627f:"}),l.a.createElement(c.b,{content:".large {   \n\n    font-size: 20px;  \n  \n    font-weight: bold;  \n  \n}   \n  \n.main {  \n  \n    @extend .large;  \n  \n    background: red;  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".large, .main { font-size: 20px; font-weight: bold; }   \n\n.main { background: red; }\n"}),l.a.createElement(c.e,{title:"@extend\u5b9e\u73b0\u7684\u7ee7\u627f\u662f\u7ee7\u627f\u6240\u6709\uff1a"}),l.a.createElement(c.b,{content:".large {   \n\n    font-size: 20px;  \n  \n    font-weight: bold;  \n  \n}   \n  \n.large.blue {   \n  \n    color: blue;  \n  \n}   \n  \n.main {  \n  \n    @extend .large;  \n  \n    background: red;  \n  \n}\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:".large, .main { font-size: 20px; font-weight: bold; }   \n\n.large.blue, .blue.main { color: blue; }   \n\n.main { background: red; }\n"}),l.a.createElement(c.c,{title:"\u51fd\u6570"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"1.\u5185\u7f6e\u51fd\u6570"}),l.a.createElement(c.e,{style:{textIndent:"0",fontWeight:"700"},title:"2.\u81ea\u5b9a\u4e49\u51fd\u6570"}),l.a.createElement(c.e,{title:"Sass\u652f\u6301\u81ea\u5b9a\u4e49\u51fd\u6570,\u4f7f\u7528@function\u8bed\u53e5\u6765\u58f0\u660e\u51fd\u6570:"}),l.a.createElement(c.b,{content:"@function large($n) {   \n\n    @return $n * 2;  \n  \n}   \n  \ndiv { font-size: large(10px); }\n"}),l.a.createElement(c.e,{title:"\u8f93\u51fa\u4e3a\uff1a"}),l.a.createElement(c.b,{content:"div { font-size: 20px; }\n"}),l.a.createElement(c.e,{title:"\u6ce8\uff1a\u81ea\u5b9a\u4e49\u51fd\u6570\u4e5f\u652f\u6301\u4e0d\u5b9a\u5e8f\u4f20\u53c2\u548c\u591a\u4f59\u53c2\u6570."}),l.a.createElement(c.c,{title:"\u5bfc\u5165\u5916\u90e8\u6587\u4ef6"}),l.a.createElement(c.e,{title:"\u7c7b\u4f3cCSS\u7684import\uff0cSass\u4e5f\u652f\u6301import\uff1a"}),l.a.createElement(c.b,{content:'@import "color.scss";\n'})))}}}}]);