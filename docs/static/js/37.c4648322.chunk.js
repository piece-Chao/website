(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{30:function(e,t,n){"use strict";n(33);var r=n(34),o=n.n(r),a=(n(35),n(36)),l=n.n(a),c=n(0),i=n.n(c),u=(0,n(4).createHashHistory)();function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,c["Component"]),n=t,(r=[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,{mode:"light",icon:"#/Home"===window.location.hash?"":i.a.createElement(l.a,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?function(){}:function(){u.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}])&&s(n.prototype,r),a&&s(n,a),t}();t.a=m},31:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"e",function(){return g}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return v}),n.d(t,"b",function(){return C});var r=n(0),o=n.n(r),a=n(37);n(32);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function y(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return f(this,t),y(this,d(t).apply(this,arguments))}return m(t,o.a.Component),p(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,l=e.titleStyle;return o.a.createElement("div",{className:"blockComponent",style:r},o.a.createElement(a.a,{to:t},o.a.createElement("p",{style:l},n)))}}]),t}(),g=function(e){function t(){return f(this,t),y(this,d(t).apply(this,arguments))}return m(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}]),t}(),E=function(e){function t(){return f(this,t),y(this,d(t).apply(this,arguments))}return m(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"label"},o.a.createElement("p",null,this.props.title," ",o.a.createElement("i",{className:"Lborder"})))}}]),t}(),v=function(e){function t(){return f(this,t),y(this,d(t).apply(this,arguments))}return m(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"paragraph",style:i({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}]),t}(),C=function(e){function t(){return f(this,t),y(this,d(t).apply(this,arguments))}return m(t,o.a.Component),p(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"highlight"},o.a.createElement("pre",null,this.props.content))}}]),t}()},32:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(30),l=n(31);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(a.a,null,o.a.createElement(l.e,{title:"\u51fd\u6570\u5f0f\u7f16\u7a0b"}),o.a.createElement(l.d,{title:"\u5e94\u8be5\u5f88\u591a\u7ae5\u978b\u90fd\u542c\u8fc7\u51fd\u6570\u5f0f\u7f16\u7a0b\uff08Functional programming\uff09\u7684\u6982\u5ff5\u5427\uff0c\u53ef\u80fd\u6709\u7684\u7ae5\u978b\u6709\u542c\u8bf4\u8fc7\u51fd\u6570\u5f0f\u7f16\u7a0b\u4f46\u5e76\u4e0d\u662f\u7279\u522b\u4e86\u89e3\uff0c\u4f46\u5176\u5b9e\u5728\u6211\u4eec\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6216\u591a\u6216\u5c11\u90fd\u5df2\u7ecf\u5e94\u7528\u4e86\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u601d\u60f3\u3002"}),o.a.createElement(l.d,{title:"\u76f8\u5bf9\u4e8e\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff08Object-oriented programming\uff09\u5173\u6ce8\u7684\u662f\u6570\u636e\u800c\u8a00\uff0c\u51fd\u6570\u5f0f\u7f16\u7a0b\u5173\u6ce8\u7684\u5219\u662f\u52a8\u4f5c\uff0c\u5176\u662f\u4e00\u79cd\u8fc7\u7a0b\u62bd\u8c61\u7684\u601d\u7ef4\uff0c\u5c31\u662f\u5bf9\u5f53\u524d\u7684\u52a8\u4f5c\u53bb\u8fdb\u884c\u62bd\u8c61\u3002"}),o.a.createElement(l.d,{title:"\u6bd4\u5982\u8bf4\u6211\u8981\u8ba1\u7b97\u4e00\u4e2a\u6570 \u52a0\u4e0a 4 \u518d\u4e58\u4ee5 4 \u7684\u503c\uff0c\u6309\u7167\u6b63\u5e38\u5199\u4ee3\u7801\u7684\u903b\u8f91\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u8fd9\u4e48\u53bb\u5b9e\u73b0"}),o.a.createElement(l.b,{content:"function calculate(x){\n    return (x + 4) * 4;\n}\n\nconsole.log(calculate(1))  // 20"}),o.a.createElement(l.d,{title:"\u8fd9\u662f\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\u7684\uff0c\u6211\u4eec\u5728\u5e73\u65f6\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u7ecf\u5e38\u5c06\u9700\u8981\u91cd\u590d\u7684\u64cd\u4f5c\u5c01\u88c5\u6210\u51fd\u6570\u4ee5\u4fbf\u5728\u4e0d\u540c\u7684\u5730\u65b9\u80fd\u591f\u8c03\u7528\u3002\u4f46\u4ece\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u601d\u7ef4\u6765\u770b\u7684\u8bdd\uff0c\u6211\u4eec\u5173\u6ce8\u7684\u5219\u662f\u8fd9\u4e00\u7cfb\u5217\u64cd\u4f5c\u7684\u52a8\u4f5c\uff0c\u5148\u300c\u52a0\u4e0a 4\u300d\u518d\u300c\u4e58\u4ee5 4\u300d\u3002"}),o.a.createElement(l.d,{title:"\u5982\u4f55\u5c01\u88c5\u51fd\u6570\u624d\u662f\u6700\u4f73\u5b9e\u8df5\u5462\uff1f\u5982\u4f55\u5c01\u88c5\u624d\u80fd\u4f7f\u51fd\u6570\u66f4\u52a0\u901a\u7528\uff0c\u4f7f\u7528\u8d77\u6765\u8ba9\u4eba\u611f\u89c9\u66f4\u52a0\u8212\u670d\u5462\uff1f\u51fd\u6570\u5f0f\u7f16\u7a0b\u6216\u8bb8\u80fd\u7ed9\u6211\u4eec\u4e00\u4e9b\u542f\u53d1\u3002"}),o.a.createElement(l.d,{title:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u5177\u6709\u4e24\u4e2a\u57fa\u672c\u7279\u5f81"}),o.a.createElement(l.d,{style:{fontWeight:700},title:"\u51fd\u6570\u662f\u7b2c\u4e00\u7b49\u516c\u6c11"}),o.a.createElement(l.d,{style:{fontWeight:700},title:"\u51fd\u6570\u662f\u7eaf\u51fd\u6570"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"\u51fd\u6570\u662f\u7b2c\u4e00\u7b49\u516c\u6c11"}),o.a.createElement(l.d,{title:"\u7b2c\u4e00\u7b49\u516c\u6c11\u662f\u6307\u51fd\u6570\u8ddf\u5176\u5b83\u7684\u6570\u636e\u7c7b\u578b\u4e00\u6837\u5904\u4e8e\u5e73\u7b49\u5730\u4f4d\uff0c\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u53e6\u4e00\u4e2a\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u522b\u7684\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"}),o.a.createElement(l.b,{content:"// \u8d4b\u503c\nvar a = function fn1() {  }\n// \u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\nfunction fn2(fn) {\n    fn()\n}   \n// \u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c\nfunction fn3() {\n    return function() {}\n}"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"\u51fd\u6570\u662f\u7eaf\u51fd\u6570"}),o.a.createElement(l.d,{title:"\u7eaf\u51fd\u6570\u662f\u6307\u76f8\u540c\u7684\u8f93\u5165\u603b\u4f1a\u5f97\u5230\u76f8\u540c\u7684\u8f93\u51fa\uff0c\u5e76\u4e14\u4e0d\u4f1a\u4ea7\u751f\u526f\u4f5c\u7528\u7684\u51fd\u6570\u3002"}),o.a.createElement(l.d,{title:"\u4ece\u7eaf\u51fd\u6570\u7684\u6982\u5ff5\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u7eaf\u51fd\u6570\u5177\u6709\u4e24\u4e2a\u7279\u70b9\uff1a"}),o.a.createElement(l.d,{style:{fontWeight:700},title:"\u540c\u8f93\u5165\u540c\u8f93\u51fa"}),o.a.createElement(l.d,{style:{fontWeight:700},title:"\u65e0\u526f\u4f5c\u7528"}),o.a.createElement(l.d,{title:"\u65e0\u526f\u4f5c\u7528\u6307\u7684\u662f\u51fd\u6570\u5185\u90e8\u7684\u64cd\u4f5c\u4e0d\u4f1a\u5bf9\u5916\u90e8\u4ea7\u751f\u5f71\u54cd\uff08\u5982\u4fee\u6539\u5168\u5c40\u53d8\u91cf\u7684\u503c\u3001\u4fee\u6539 dom \u8282\u70b9\u7b49\uff09\u3002"}),o.a.createElement(l.b,{content:"// \u662f\u7eaf\u51fd\u6570\nfunction add(x,y){\n    return x + y\n}\n// \u8f93\u51fa\u4e0d\u786e\u5b9a\uff0c\u4e0d\u662f\u7eaf\u51fd\u6570\nfunction random(x){\n    return Math.random() * x\n}\n// \u6709\u526f\u4f5c\u7528\uff0c\u4e0d\u662f\u7eaf\u51fd\u6570\nfunction setColor(el,color){\n    el.style.color = color ;\n}\n// \u8f93\u51fa\u4e0d\u786e\u5b9a\u3001\u6709\u526f\u4f5c\u7528\uff0c\u4e0d\u662f\u7eaf\u51fd\u6570\nvar count = 0;\nfunction addCount(x){\n    count+=x;\n    return count;\n}"}),o.a.createElement(l.d,{title:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u5177\u6709\u4e24\u4e2a\u6700\u57fa\u672c\u7684\u8fd0\u7b97\uff1a\u5408\u6210\uff08compose\uff09\u548c\u67ef\u91cc\u5316\uff08Currying\uff09\u3002"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"\u51fd\u6570\u5408\u6210\uff08compose\uff09"}),o.a.createElement(l.d,{title:"\u51fd\u6570\u5408\u6210\u6307\u7684\u662f\u5c06\u4ee3\u8868\u5404\u4e2a\u52a8\u4f5c\u7684\u591a\u4e2a\u51fd\u6570\u5408\u5e76\u6210\u4e00\u4e2a\u51fd\u6570\u3002"}),o.a.createElement(l.d,{title:"\u4e0a\u9762\u8bb2\u5230\uff0c\u51fd\u6570\u5f0f\u7f16\u7a0b\u662f\u5bf9\u8fc7\u7a0b\u7684\u62bd\u8c61\uff0c\u5173\u6ce8\u7684\u662f\u52a8\u4f5c\u3002\u4ee5\u4e0a\u9762\u8ba1\u7b97\u7684\u4f8b\u5b50\u4e3a\u4f8b\uff0c\u6211\u4eec\u5173\u6ce8\u7684\u662f\u5b83\u7684\u52a8\u4f5c\uff0c\u5148\u300c\u52a0\u4e0a 4\u300d\u518d\u300c\u4e58\u4ee5 4\u300d\u3002\u90a3\u4e48\u6211\u4eec\u7684\u4ee3\u7801\u5b9e\u73b0\u5982\u4e0b"}),o.a.createElement(l.b,{content:"function add4(x) {\n    return x + 4\n}\nfunction multiply4(x) {\n    return x * 4\n}\n\nconsole.log(multiply4(add4(1)))  // 20\n"}),o.a.createElement(l.d,{title:"\u6839\u636e\u51fd\u6570\u5408\u6210\u7684\u5b9a\u4e49\uff0c\u6211\u4eec\u80fd\u591f\u5c06\u4e0a\u8ff0\u4ee3\u8868\u4e24\u4e2a\u52a8\u4f5c\u7684\u4e24\u4e2a\u51fd\u6570\u7684\u5408\u6210\u4e00\u4e2a\u51fd\u6570\u3002\u6211\u4eec\u5c06\u5408\u6210\u7684\u52a8\u4f5c\u62bd\u8c61\u4e3a\u4e00\u4e2a\u51fd\u6570 compose\uff0c\u8fd9\u91cc\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u5730\u77e5\u9053\uff0c\u51fd\u6570 compose \u7684\u4ee3\u7801\u5982\u4e0b"}),o.a.createElement(l.b,{content:"function compose(f,g) {\n    return function(x) {\n        return f(g(x));\n    };\n}\n"}),o.a.createElement(l.d,{title:"\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u65b9\u5f0f\u5f97\u5230\u5408\u6210\u51fd\u6570"}),o.a.createElement(l.b,{content:"var calculate=compose(multiply4,add4);  //\u6267\u884c\u52a8\u4f5c\u7684\u987a\u5e8f\u662f\u4ece\u53f3\u5f80\u5de6\n\nconsole.log(calculate(1))  // 20\n"}),o.a.createElement(l.d,{title:"\u53ef\u4ee5\u770b\u5230\uff0c\u53ea\u8981\u5f80 compose \u51fd\u6570\u4e2d\u4f20\u5165\u4ee3\u8868\u5404\u4e2a\u52a8\u4f5c\u7684\u51fd\u6570\uff0c\u6211\u4eec\u4fbf\u80fd\u5f97\u5230\u6700\u7ec8\u7684\u5408\u6210\u51fd\u6570\u3002\u4f46\u4e0a\u8ff0 compose \u51fd\u6570\u7684\u5c40\u9650\u6027\u662f\u53ea\u80fd\u591f\u5408\u6210\u4e24\u4e2a\u51fd\u6570\uff0c\u5982\u679c\u9700\u8981\u5408\u6210\u7684\u51fd\u6570\u4e0d\u6b62\u4e24\u4e2a\u5462\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u901a\u7528\u7684 compose \u51fd\u6570\u3002"}),o.a.createElement(l.d,{title:"\u8fd9\u91cc\u6211\u76f4\u63a5\u7ed9\u51fa\u901a\u7528 compose \u51fd\u6570\u7684\u4ee3\u7801"}),o.a.createElement(l.b,{content:"function compose() {\n    var args = arguments;\n    var start = args.length - 1;\n    return function () {\n        var i = start - 1;\n        var result = args[start].apply(this, arguments);\n        while (i >= 0){\n            result = args[i].call(this, result);\n            i--;\n        }\n        return result;\n    };\n}\n"}),o.a.createElement(l.d,{title:"\u8ba9\u6211\u4eec\u6765\u5b9e\u8df5\u4e0b\u4e0a\u8ff0\u901a\u7528\u7684 compose \u51fd\u6570\uff5e"}),o.a.createElement(l.b,{content:"function addHello(str){\n    return 'hello '+str;\n}\nfunction toUpperCase(str) {\n    return str.toUpperCase();\n}\nfunction reverse(str){\n    return str.split('').reverse().join('');\n}\n\nvar composeFn=compose(reverse,toUpperCase,addHello);\n\nconsole.log(composeFn('ttsy'));  // YSTT OLLEH\n"}),o.a.createElement(l.d,{title:"\u4e0a\u8ff0\u8fc7\u7a0b\u6709\u4e09\u4e2a\u52a8\u4f5c\uff0c\u300chello\u300d\u3001\u300c\u8f6c\u6362\u5927\u5199\u300d\u3001\u300c\u53cd\u8f6c\u300d\uff0c\u53ef\u4ee5\u770b\u5230\u901a\u8fc7 compose \u5c06\u4e0a\u8ff0\u4e09\u4e2a\u52a8\u4f5c\u4ee3\u8868\u7684\u51fd\u6570\u5408\u5e76\u6210\u4e86\u4e00\u4e2a\uff0c\u6700\u7ec8\u8f93\u51fa\u4e86\u6b63\u786e\u7684\u7ed3\u679c\u3002"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"\u51fd\u6570\u67ef\u91cc\u5316\uff08Currying\uff09"}),o.a.createElement(l.d,{title:"\u5728\u7ef4\u57fa\u767e\u79d1\u4e2d\u5bf9\u67ef\u91cc\u5316\u7684\u5b9a\u4e49\u662f\uff1a\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u67ef\u91cc\u5316\uff0c\u53c8\u8bd1\u4e3a\u5361\u745e\u5316\u6216\u52a0\u91cc\u5316\uff0c\u662f\u628a\u63a5\u53d7\u591a\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u53d8\u6362\u6210\u63a5\u53d7\u4e00\u4e2a\u5355\u4e00\u53c2\u6570\uff08\u6700\u521d\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\u7684\u51fd\u6570\uff0c\u5e76\u4e14\u8fd4\u56de\u63a5\u53d7\u4f59\u4e0b\u7684\u53c2\u6570\u800c\u4e14\u8fd4\u56de\u7ed3\u679c\u7684\u65b0\u51fd\u6570\u7684\u6280\u672f\u3002"}),o.a.createElement(l.d,{title:"\u67ef\u91cc\u5316\u51fd\u6570\u5219\u662f\u5c06\u51fd\u6570\u67ef\u91cc\u5316\u4e4b\u540e\u5f97\u5230\u7684\u4e00\u4e2a\u65b0\u51fd\u6570\u3002\u7531\u4e0a\u8ff0\u5b9a\u4e49\u53ef\u77e5\uff0c\u67ef\u91cc\u5316\u51fd\u6570\u6709\u5982\u4e0b\u4e24\u4e2a\u7279\u6027\uff1a"}),o.a.createElement(l.d,{style:{fontWeight:700},title:"\u63a5\u53d7\u4e00\u4e2a\u5355\u4e00\u53c2\u6570\uff1b"}),o.a.createElement(l.d,{style:{fontWeight:700},title:"\u8fd4\u56de\u63a5\u53d7\u4f59\u4e0b\u7684\u53c2\u6570\u800c\u4e14\u8fd4\u56de\u7ed3\u679c\u7684\u65b0\u51fd\u6570\uff1b"}),o.a.createElement(l.d,{title:"\u4e3e\u4e2a\u4f8b\u5b50\uff5e"}),o.a.createElement(l.b,{content:"function add(a, b) {\n    return a + b;\n}\n\nconsole.log(add(1, 2)) // 3\n"}),o.a.createElement(l.d,{title:"\u5047\u8bbe\u51fd\u6570 add \u7684\u67ef\u91cc\u5316\u51fd\u6570\u662f addCurry\uff0c\u90a3\u4e48\u4ece\u4e0a\u8ff0\u5b9a\u4e49\u53ef\u77e5\uff0caddCurry(1)(2) \u5e94\u8be5\u5b9e\u73b0\u4e0e\u4e0a\u8ff0\u4ee3\u7801\u76f8\u540c\u7684\u6548\u679c\uff0c\u8f93\u51fa 3 \u3002\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u7684\u77e5\u9053\uff0caddCurry \u7684\u4ee3\u7801\u5982\u4e0b"}),o.a.createElement(l.b,{content:"// addCurry \u662f add \u7684\u67ef\u91cc\u5316\u51fd\u6570\nfunction addCurry(a) {\n    return function(b) {\n        return a + b;\n    }\n}\n\nconsole.log(addCurry(1)(2));  // 3\n"}),o.a.createElement(l.d,{title:"\u4f46\u5047\u8bbe\u5982\u679c\u6709\u4e00\u4e2a\u51fd\u6570 createCurry \u80fd\u591f\u5b9e\u73b0\u67ef\u91cc\u5316\uff0c\u90a3\u4e48\u6211\u4eec\u4fbf\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u7684\u65b9\u5f0f\u6765\u5f97\u51fa\u76f8\u540c\u7684\u7ed3\u679c"}),o.a.createElement(l.b,{content:"// createCurry \u8fd4\u56de\u4e00\u4e2a\u67ef\u91cc\u5316\u51fd\u6570\nvar addCurry=createCurry(add);\n\nconsole.log(addCurry(1)(2));  // 3\n"}),o.a.createElement(l.d,{title:"\u53ef\u4ee5\u770b\u5230\uff0c\u51fd\u6570 createCurry \u4f20\u5165\u4e00\u4e2a\u51fd\u6570 add \u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u67ef\u91cc\u5316\u51fd\u6570 addCurry\uff0c\u51fd\u6570 addCurry \u80fd\u591f\u5904\u7406 add \u4e2d\u7684\u5269\u4f59\u53c2\u6570\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u79f0\u4e3a\u51fd\u6570\u67ef\u91cc\u5316\uff0c\u6211\u4eec\u79f0 addCurry \u662f add \u7684\u67ef\u91cc\u5316\u51fd\u6570\u3002"}),o.a.createElement(l.d,{title:"\u90a3\u4e48\uff0c\u600e\u4e48\u5f97\u5230\u5b9e\u73b0\u67ef\u91cc\u5316\u7684\u51fd\u6570 createCurry \u5462\uff1f\u8fd9\u91cc\u6211\u76f4\u63a5\u7ed9\u51fa createCurry \u7684\u4ee3\u7801"}),o.a.createElement(l.b,{content:"// \u53c2\u6570\u53ea\u80fd\u4ece\u5de6\u5230\u53f3\u4f20\u9012\nfunction createCurry(func, arrArgs) {\n    var args=arguments;\n    var funcLength = func.length;\n    var arrArgs = arrArgs || [];\n\n    return function(param) {\n        var allArrArgs=arrArgs.concat([param])\n\n        // \u5982\u679c\u53c2\u6570\u4e2a\u6570\u5c0f\u4e8e\u6700\u521d\u7684func.length\uff0c\u5219\u9012\u5f52\u8c03\u7528\uff0c\u7ee7\u7eed\u6536\u96c6\u53c2\u6570\n        if (allArrArgs.length < funcLength) {\n            return args.callee.call(this, func, allArrArgs);\n        }\n\n        // \u53c2\u6570\u6536\u96c6\u5b8c\u6bd5\uff0c\u5219\u6267\u884cfunc\n        return func.apply(this, allArrArgs);\n    }\n}\n"}),o.a.createElement(l.d,{title:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u53bb\u8c03\u7528"}),o.a.createElement(l.b,{content:"// createCurry \u8fd4\u56de\u4e00\u4e2a\u67ef\u91cc\u5316\u51fd\u6570\nvar addCurry=createCurry(function(a, b, c) {\n    return a + b + c;\n});\n\nconsole.log(addCurry(1)(2)(3));  // 6\n"}),o.a.createElement(l.d,{title:"\u4e0a\u8ff0 createCurry \u51fd\u6570\u5df2\u7ecf\u80fd\u591f\u5b9e\u73b0\u67ef\u91cc\u5316\u7684\u8fc7\u7a0b\uff0c\u4f46\u662f\u5176\u5e76\u6ca1\u6709\u90a3\u4e48\u5b8c\u7f8e\uff0c\u5982\u679c\u6211\u5e0c\u671b\u4ee5 addCurry(1, 2)(3) \u7684\u65b9\u5f0f\u6765\u8c03\u7528\u5462\uff1f\u5219\u4e0a\u8ff0\u4ee3\u7801\u5e76\u4e0d\u80fd\u7ed9\u51fa\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u5bf9 createCurry \u505a\u4e00\u4e2a\u4f18\u5316\uff0c\u4f18\u5316\u540e\u7684 createCurry \u4ee3\u7801\u5982\u4e0b"}),o.a.createElement(l.b,{content:"// \u53c2\u6570\u53ea\u80fd\u4ece\u5de6\u5230\u53f3\u4f20\u9012\nfunction createCurry(func, arrArgs) {\n    var args=arguments;\n    var funcLength = func.length;\n    var arrArgs = arrArgs || [];\n\n    return function() {\n        var _arrArgs = Array.prototype.slice.call(arguments);\n        var allArrArgs=arrArgs.concat(_arrArgs)\n\n        // \u5982\u679c\u53c2\u6570\u4e2a\u6570\u5c0f\u4e8e\u6700\u521d\u7684func.length\uff0c\u5219\u9012\u5f52\u8c03\u7528\uff0c\u7ee7\u7eed\u6536\u96c6\u53c2\u6570\n        if (allArrArgs.length < funcLength) {\n            return args.callee.call(this, func, allArrArgs);\n        }\n\n        // \u53c2\u6570\u6536\u96c6\u5b8c\u6bd5\uff0c\u5219\u6267\u884cfunc\n        return func.apply(this, allArrArgs);\n    }\n}\n"}),o.a.createElement(l.d,{title:"\u4f18\u5316\u4e4b\u540e\u7684 createCurry \u51fd\u6570\u5219\u663e\u5f97\u66f4\u52a0\u5f3a\u5927"}),o.a.createElement(l.b,{content:"// createCurry \u8fd4\u56de\u4e00\u4e2a\u67ef\u91cc\u5316\u51fd\u6570\nvar addCurry=createCurry(function(a, b, c) {\n    return a + b + c;\n});\n\nconsole.log(addCurry(1)(2)(3));  // 6\nconsole.log(addCurry(1, 2, 3));  // 6\nconsole.log(addCurry(1, 2)(3));  // 6\nconsole.log(addCurry(1)(2, 3));  // 6\n"}),o.a.createElement(l.d,{title:"\u67ef\u91cc\u5316\u5b9e\u9645\u4e0a\u662f\u628a\u7b80\u7b54\u7684\u95ee\u9898\u590d\u6742\u5316\u4e86\uff0c\u4f46\u662f\u590d\u6742\u5316\u7684\u540c\u65f6\uff0c\u6211\u4eec\u5728\u4f7f\u7528\u51fd\u6570\u65f6\u62e5\u6709\u4e86\u66f4\u52a0\u591a\u7684\u81ea\u7531\u5ea6\u3002"}),o.a.createElement(l.d,{title:"\u90a3\u4e48\uff0c\u67ef\u91cc\u5316\u6709\u4ec0\u4e48\u7528\u9014\u5462\uff1f\u4e3e\u4e2a\u4f8b\u5b50\uff5e"}),o.a.createElement(l.d,{title:"\u73b0\u5728\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd\uff0c\u5c06\u4e00\u4e2a\u5168\u662f\u6570\u5b57\u7684\u6570\u7ec4\u4e2d\u7684\u6570\u5b57\u8f6c\u6362\u6210\u767e\u5206\u6570\u7684\u5f62\u5f0f\u3002\u6309\u7167\u6b63\u5e38\u7684\u903b\u8f91\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u5982\u4e0b\u4ee3\u7801\u5b9e\u73b0"}),o.a.createElement(l.b,{content:"function getNewArray(array) {\n    return array.map(function(item) {\n        return item * 100 + '%'\n    })\n}\n\nconsole.log(getNewArray([1, 0.2, 3, 0.4]));   // ['100%', '20%', '300%', '40%']\n"}),o.a.createElement(l.d,{title:"\u800c\u5982\u679c\u901a\u8fc7\u67ef\u91cc\u5316\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0"}),o.a.createElement(l.b,{content:"function map(func, array) {\n    return array.map(func);\n}\nvar mapCurry = createCurry(map);\nvar getNewArray = mapCurry(function(item) {\n    return item * 100 + '%'\n})\n\nconsole.log(getNewArray([1, 0.2, 3, 0.4]));   // ['100%', '20%', '300%', '40%']\n"}),o.a.createElement(l.d,{title:"\u4e0a\u8ff0\u4f8b\u5b50\u53ef\u80fd\u592a\u7b80\u5355\u4ee5\u81f4\u4e0d\u80fd\u8868\u73b0\u51fa\u67ef\u91cc\u5316\u7684\u5f3a\u5927\uff0c\u5177\u4f53\u67ef\u91cc\u5316\u7684\u4f7f\u7528\u8fd8\u9700\u8981\u7ed3\u5408\u5177\u4f53\u7684\u573a\u666f\uff0c\u4e2a\u4eba\u89c9\u5f97\u6ca1\u6709\u5fc5\u8981\u4e3a\u4e86\u67ef\u91cc\u5316\u800c\u67ef\u91cc\u5316\uff0c\u6211\u4eec\u6700\u7ec8\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u66f4\u597d\u5730\u89e3\u51b3\u95ee\u9898\uff0c\u4e0d\u662f\u4e48\uff1f"}),o.a.createElement(l.d,{title:"\u5728\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e2d\uff0c\u8fd8\u6709\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6982\u5ff5\u662f\u51fd\u5b50\u3002"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"\u51fd\u5b50"}),o.a.createElement(l.d,{title:"\u5728\u524d\u9762\u51fd\u6570\u5408\u6210\u7684\u4f8b\u5b50\u4e2d\uff0c\u6267\u884c\u4e86\u5148\u300c\u52a0\u4e0a 4\u300d\u518d\u300c\u4e58\u4ee5 4\u300d\u7684\u52a8\u4f5c\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4ee3\u7801\u4e2d\u662f\u901a\u8fc7 multiply4(add4(1)) \u8fd9\u79cd\u5f62\u5f0f\u6765\u5b9e\u73b0\u7684\uff0c\u5982\u679c\u901a\u8fc7 compose \u51fd\u6570\uff0c\u5219\u662f\u7c7b\u4f3c\u4e8e compose(multiply4,add4)(1) \u8fd9\u79cd\u5f62\u5f0f\u6765\u5b9e\u73b0\u4ee3\u7801\u3002"}),o.a.createElement(l.d,{title:"\u800c\u5728\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u601d\u7ef4\u4e2d\uff0c\u9664\u4e86\u5c06\u52a8\u4f5c\u62bd\u8c61\u51fa\u6765\u5916\uff0c\u8fd8\u5e0c\u671b\u52a8\u4f5c\u6267\u884c\u7684\u987a\u5e8f\u66f4\u52a0\u6e05\u6670\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4e0a\u9762\u7684\u4f8b\u5b50\u6765\u8bf4\uff0c\u66f4\u5e0c\u671b\u662f\u901a\u8fc7\u5982\u4e0b\u7684\u5f62\u5f0f\u6765\u6267\u884c\u6211\u4eec\u7684\u52a8\u4f5c"}),o.a.createElement(l.b,{content:"fn(1).add4().multiply4()\n"}),o.a.createElement(l.d,{title:"\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u7528\u5230\u51fd\u5b50\u7684\u6982\u5ff5\u3002"}),o.a.createElement(l.b,{content:"function Functor(val){\n    this.val = val;\n}\nFunctor.prototype.map=function(f){\n    return new Functor(f(this.val));\n}\n"}),o.a.createElement(l.d,{title:"\u51fd\u5b50\u53ef\u4ee5\u7b80\u5355\u5730\u7406\u89e3\u4e3a\u6709\u7528\u5230 map \u65b9\u6cd5\u7684\u6570\u636e\u7ed3\u6784\u3002\u5982\u4e0a Functor \u7684\u5b9e\u4f8b\u5c31\u662f\u4e00\u4e2a\u51fd\u5b50\u3002"}),o.a.createElement(l.d,{title:"\u5728\u51fd\u5b50\u7684 map \u65b9\u6cd5\u4e2d\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u53c2\u6570\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u5b50\uff0c\u65b0\u7684\u51fd\u5b50\u4e2d\u5305\u542b\u7684\u503c\u662f\u88ab\u51fd\u6570\u53c2\u6570\u5904\u7406\u8fc7\u540e\u8fd4\u56de\u7684\u503c\u3002\u8be5\u65b9\u6cd5\u5c06\u51fd\u5b50\u91cc\u9762\u7684\u6bcf\u4e00\u4e2a\u503c\uff0c\u6620\u5c04\u5230\u53e6\u4e00\u4e2a\u51fd\u5b50\u3002"}),o.a.createElement(l.d,{title:"\u901a\u8fc7 Functor \u51fd\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7684\u65b9\u5f0f\u8c03\u7528"}),o.a.createElement(l.b,{content:"console.log(Functor.of(1).map(add4).map(multiply4))  // Functor { val: 20 }\n"}),o.a.createElement(l.d,{title:"\u63a5\u4e0b\u6765\u4ecb\u7ecd\u5404\u79cd\u5e38\u89c1\u7684\u51fd\u5b50\u3002"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"Maybe \u51fd\u5b50"}),o.a.createElement(l.d,{title:"Maybe \u51fd\u5b50\u662f\u6307\u5728 map \u65b9\u6cd5\u4e2d\u589e\u52a0\u4e86\u5bf9\u7a7a\u503c\u7684\u5224\u65ad\u7684\u51fd\u5b50\u3002"}),o.a.createElement(l.d,{title:"\u7531\u4e8e\u51fd\u5b50\u4e2d\u7684 map \u65b9\u6cd5\u4e2d\u7684\u51fd\u6570\u53c2\u6570\u4f1a\u5bf9\u51fd\u5b50\u5185\u90e8\u7684\u503c\u8fdb\u884c\u5904\u7406\uff0c\u6240\u4ee5\u5f53\u4f20\u5165\u51fd\u5b50\u4e2d\u7684\u503c\u4e3a\u7a7a\uff08\u5982 null\uff09\u65f6\uff0c\u5219\u53ef\u80fd\u4f1a\u4ea7\u751f\u9519\u8bef\u3002"}),o.a.createElement(l.b,{content:"function toUpperCase(str) {\n    return str.toUpperCase();\n}\n\nconsole.log(Functor.of(null).map(toUpperCase));  // TypeError\n"}),o.a.createElement(l.d,{title:"Maybe \u51fd\u5b50\u5219\u5728 map \u65b9\u6cd5\u4e2d\u589e\u52a0\u4e86\u5bf9\u7a7a\u503c\u7684\u5224\u65ad\uff0c\u82e5\u662f\u51fd\u5b50\u5185\u90e8\u7684\u503c\u4e3a\u7a7a\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u5185\u90e8\u503c\u4e3a\u7a7a\u7684\u51fd\u5b50\u3002"}),o.a.createElement(l.b,{content:"function Maybe(val){\n    this.val = val;\n}\nMaybe.prototype.map=function(f){\n    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);\n}\nMaybe.of = function(val) {\n    return new Maybe(val);\n}\n"}),o.a.createElement(l.d,{title:"\u5f53\u4f7f\u7528 Maybe \u51fd\u5b50\u65f6\u4f20\u5165\u7a7a\u503c\u5219\u4e0d\u4f1a\u62a5\u9519"}),o.a.createElement(l.b,{content:"console.log(Maybe.of(null).map(toUpperCase));  // Maybe { val: null }\n"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"Either \u51fd\u5b50"}),o.a.createElement(l.d,{title:"Either \u51fd\u5b50\u662f\u6307\u5185\u90e8\u6709\u5206\u522b\u6709\u5de6\u503c\uff08left\uff09\u548c\u53f3\u503c\uff08right\uff09\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528\u53f3\u503c\uff0c\u800c\u5f53\u53f3\u503c\u4e0d\u5b58\u5728\u7684\u65f6\u5019\u4f1a\u4f7f\u7528\u5de6\u503c\u7684\u51fd\u5b50\u3002"}),o.a.createElement(l.b,{content:"function Either(left,right){\n    this.left = left;\n    this.right = right;\n}\nEither.prototype.map=function(f){\n    return this.right ? Either.of(this.left, f(this.right)) : Either.of(f(this.left), this.right);\n}\nEither.of = function(left,right) {\n    return new Either(left,right);\n}\n"}),o.a.createElement(l.d,{title:"\u5982\u4e0b\u5f53\u5de6\u53f3\u503c\u90fd\u5b58\u5728\u7684\u65f6\u5019\u5219\u4ee5\u53f3\u503c\u4e3a\u51fd\u5b50\u7684\u9ed8\u8ba4\u503c\uff0c\u5f53\u53f3\u503c\u4e0d\u5b58\u5728\u662f\u5219\u4ee5\u5de6\u503c\u4e3a\u51fd\u5b50\u7684\u9ed8\u8ba4\u503c\u3002"}),o.a.createElement(l.b,{content:"function addOne(x) {\n    return x+1;\n}\n\nconsole.log(Either.of(1,2).map(addOne));  // Either { left: 1, right: 3 }\nconsole.log(Either.of(3,null).map(addOne));  // Either { left: 4, right: null }\n"}),o.a.createElement(l.d,{style:{fontWeight:700,textIndent:0,fontSize:16},title:"Monad \u51fd\u5b50"}),o.a.createElement(l.d,{title:"Monad \u51fd\u5b50\u662f\u6307\u80fd\u591f\u5c06\u51fd\u5b50\u591a\u5c42\u5d4c\u5957\u89e3\u9664\u7684\u51fd\u5b50\u3002"}),o.a.createElement(l.d,{title:"\u6211\u4eec\u5f80\u51fd\u5b50\u4f20\u5165\u7684\u503c\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u662f\u666e\u901a\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u662f\u5176\u5b83\u51fd\u5b50\uff0c\u5f53\u5f80\u51fd\u5b50\u5185\u90e8\u4f20\u5176\u5b83\u51fd\u5b50\u7684\u65f6\u5019\uff0c\u5219\u4f1a\u51fa\u73b0\u51fd\u5b50\u7684\u591a\u5c42\u5d4c\u5957\u3002\u5982\u4e0b"}),o.a.createElement(l.b,{content:"var functor = Functor.of(Functor.of(Functor.of('ttsy')))\n\nconsole.log(functor);  // Functor { val: Functor { val: Functor { val: 'ttsy' } } }\nconsole.log(functor.val);  // Functor { val: Functor { val: 'ttsy' } }\nconsole.log(functor.val.val);  // Functor { val: 'ttsy' }\n"}),o.a.createElement(l.d,{title:"Monad \u51fd\u5b50\u4e2d\u65b0\u589e\u4e86 join \u548c flatMap \u65b9\u6cd5\uff0c\u901a\u8fc7 flatMap \u6211\u4eec\u80fd\u591f\u5728\u6bcf\u4e00\u6b21\u4f20\u5165\u51fd\u5b50\u7684\u65f6\u5019\u90fd\u5c06\u5d4c\u5957\u89e3\u9664\u3002"}),o.a.createElement(l.b,{content:"Monad.prototype.map=function(f){\n    return Monad.of(f(this.val))\n}\nMonad.prototype.join=function(){\n    return this.val;\n}\nMonad.prototype.flatMap=function(f){\n    return this.map(f).join();\n}\nMonad.of = function(val) {\n    return new Monad(val);\n}\n"}),o.a.createElement(l.d,{title:"\u901a\u8fc7 Monad \u51fd\u5b50\uff0c\u6211\u4eec\u6700\u7ec8\u5f97\u5230\u7684\u90fd\u662f\u53ea\u6709\u4e00\u5c42\u7684\u51fd\u5b50\u3002"}),o.a.createElement(l.b,{content:"console.log(Monad.of('ttsy').flatMap(Monad.of).flatMap(Monad.of));  // Monad { val: 'TTSY' }\n"}),o.a.createElement(l.d,{title:"\u5728\u6211\u4eec\u5e73\u65f6\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u8981\u6839\u636e\u4e0d\u540c\u7684\u573a\u666f\u53bb\u5b9e\u73b0\u4e0d\u540c\u529f\u80fd\u7684\u51fd\u6570\uff0c\u800c\u51fd\u6570\u5f0f\u7f16\u7a0b\u5219\u8ba9\u6211\u4eec\u4ece\u4e0d\u540c\u7684\u89d2\u5ea6\u53bb\u8ba9\u6211\u4eec\u80fd\u591f\u4ee5\u6700\u4f73\u7684\u65b9\u5f0f\u53bb\u5b9e\u73b0\u51fd\u6570\u529f\u80fd\uff0c\u4f46\u51fd\u6570\u5f0f\u7f16\u7a0b\u4e0d\u662f\u975e\u6b64\u5373\u5f7c\u7684\uff0c\u800c\u662f\u8981\u6839\u636e\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u53bb\u9009\u62e9\u4e0d\u540c\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"}))}}])&&i(n.prototype,r),c&&i(n,c),t}();t.default=p},37:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),l=n.n(a),c=n(3),i=n.n(c),u=n(4),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,l="string"===typeof t?Object(u.createLocation)(t,null,null,a.location):t,c=a.createHref(l);return o.a.createElement("a",f({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);y.propTypes={onClick:l.a.func,target:l.a.string,replace:l.a.bool,to:l.a.oneOfType([l.a.string,l.a.object]).isRequired,innerRef:l.a.oneOfType([l.a.string,l.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:l.a.shape({history:l.a.shape({push:l.a.func.isRequired,replace:l.a.func.isRequired,createHref:l.a.func.isRequired}).isRequired}).isRequired},t.a=y}}]);