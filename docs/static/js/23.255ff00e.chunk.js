(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{159:function(e,t,n){e.exports=n.p+"static/media/lifecycle.b3251a15.png"},30:function(e,t,n){"use strict";n(33);var r=n(34),o=n.n(r),i=(n(35),n(36)),a=n.n(i),c=n(0),u=n.n(c),l=(0,n(4).createHashHistory)();function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,y(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,c["Component"]),n=t,(r=[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(o.a,{mode:"light",icon:"#/Home"===window.location.hash?"":u.a.createElement(a.a,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?function(){}:function(){l.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}])&&p(n.prototype,r),i&&p(n,i),t}();t.a=m},31:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"f",function(){return v}),n.d(t,"c",function(){return O}),n.d(t,"e",function(){return E}),n.d(t,"b",function(){return w}),n.d(t,"d",function(){return g});var r=n(0),o=n.n(r),i=n(37);n(32);function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function y(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return f(this,t),y(this,h(t).apply(this,arguments))}return m(t,o.a.Component),s(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return o.a.createElement("div",{className:"blockComponent",style:r},o.a.createElement(i.a,{to:t},o.a.createElement("p",{style:a},n)))}}]),t}(),v=function(e){function t(){return f(this,t),y(this,h(t).apply(this,arguments))}return m(t,o.a.Component),s(t,[{key:"render",value:function(){return o.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}]),t}(),O=function(e){function t(){return f(this,t),y(this,h(t).apply(this,arguments))}return m(t,o.a.Component),s(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"label"},o.a.createElement("p",null,o.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}]),t}(),E=function(e){function t(){return f(this,t),y(this,h(t).apply(this,arguments))}return m(t,o.a.Component),s(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"paragraph",style:u({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}]),t}(),w=function(e){function t(){return f(this,t),y(this,h(t).apply(this,arguments))}return m(t,o.a.Component),s(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"highlight"},o.a.createElement("pre",null,this.props.content))}}]),t}(),g=function(e){function t(){return f(this,t),y(this,h(t).apply(this,arguments))}return m(t,o.a.Component),s(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"listItem"},o.a.createElement("ul",null,this.props.list.map(function(e,t){return o.a.createElement("li",{key:t},e)})))}}]),t}()},32:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(30),a=n(31);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,f(t).apply(this,arguments))}var r,c,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),r=t,(c=[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement("div",{style:{padding:"0 10px"}},o.a.createElement(a.f,{title:"\u751f\u547d\u5468\u671f\u94a9\u5b50"}),o.a.createElement("img",{style:{width:"100%"},src:n(159),alt:"lifecycle"}),o.a.createElement(a.e,{style:{background:"#eee",fontSize:"13px"},title:"\u6240\u6709\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u81ea\u52a8\u7ed1\u5b9a this \u4e0a\u4e0b\u6587\u5230\u5b9e\u4f8b\u4e2d\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u8bbf\u95ee\u6570\u636e\uff0c\u5bf9\u5c5e\u6027\u548c\u65b9\u6cd5\u8fdb\u884c\u8fd0\u7b97\u3002\u8fd9\u610f\u5473\u7740\u4f60\u4e0d\u80fd\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u6765\u5b9a\u4e49\u4e00\u4e2a\u751f\u547d\u5468\u671f\u65b9\u6cd5 (\u4f8b\u5982 created: () => this.fetchTodos())\u3002\u8fd9\u662f\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a\u4e86\u7236\u4e0a\u4e0b\u6587\uff0c\u56e0\u6b64 this \u4e0e\u4f60\u671f\u5f85\u7684 Vue \u5b9e\u4f8b\u4e0d\u540c\uff0cthis.fetchTodos \u7684\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"}),o.a.createElement(a.c,{title:"beforeCreate"}),o.a.createElement(a.e,{title:"\u5728\u5b9e\u4f8b\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u6570\u636e\u89c2\u6d4b (data observer) \u548c event/watcher \u4e8b\u4ef6\u914d\u7f6e\u4e4b\u524d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.c,{title:"created"}),o.a.createElement(a.e,{title:"\u5728\u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u88ab\u7acb\u5373\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u5df2\u5b8c\u6210\u4ee5\u4e0b\u7684\u914d\u7f6e\uff1a\u6570\u636e\u89c2\u6d4b (data observer)\uff0c\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u8fd0\u7b97\uff0cwatch/event \u4e8b\u4ef6\u56de\u8c03\u3002\u7136\u800c\uff0c\u6302\u8f7d\u9636\u6bb5\u8fd8\u6ca1\u5f00\u59cb\uff0c$el \u5c5e\u6027\u76ee\u524d\u4e0d\u53ef\u89c1\u3002"}),o.a.createElement(a.c,{title:"beforeMount"}),o.a.createElement(a.e,{title:"\u5728\u6302\u8f7d\u5f00\u59cb\u4e4b\u524d\u88ab\u8c03\u7528\uff1a\u76f8\u5173\u7684 render \u51fd\u6570\u9996\u6b21\u88ab\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.c,{title:"mounted"}),o.a.createElement(a.e,{title:"el \u88ab\u65b0\u521b\u5efa\u7684 vm.$el \u66ff\u6362\uff0c\u5e76\u6302\u8f7d\u5230\u5b9e\u4f8b\u4e0a\u53bb\u4e4b\u540e\u8c03\u7528\u8be5\u94a9\u5b50\u3002\u5982\u679c root \u5b9e\u4f8b\u6302\u8f7d\u4e86\u4e00\u4e2a\u6587\u6863\u5185\u5143\u7d20\uff0c\u5f53 mounted \u88ab\u8c03\u7528\u65f6 vm.$el \u4e5f\u5728\u6587\u6863\u5185\u3002"}),o.a.createElement(a.e,{title:"\u6ce8\u610f mounted \u4e0d\u4f1a\u627f\u8bfa\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u4e5f\u90fd\u4e00\u8d77\u88ab\u6302\u8f7d\u3002\u5982\u679c\u4f60\u5e0c\u671b\u7b49\u5230\u6574\u4e2a\u89c6\u56fe\u90fd\u6e32\u67d3\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u7528 vm.$nextTick \u66ff\u6362\u6389\uff0c\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.b,{content:"mounted: function () {\n    this.$nextTick(function () {\n        // Code that will run only after the\n        // entire view has been rendered\n    })\n}"}),o.a.createElement(a.c,{title:"beforeUpdate"}),o.a.createElement(a.e,{title:"\u6570\u636e\u66f4\u65b0\u65f6\u8c03\u7528\uff0c\u53d1\u751f\u5728\u865a\u62df DOM \u6253\u8865\u4e01\u4e4b\u524d\u3002\u8fd9\u91cc\u9002\u5408\u5728\u66f4\u65b0\u4e4b\u524d\u8bbf\u95ee\u73b0\u6709\u7684 DOM\uff0c\u6bd4\u5982\u624b\u52a8\u79fb\u9664\u5df2\u6dfb\u52a0\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\uff0c\u56e0\u4e3a\u53ea\u6709\u521d\u6b21\u6e32\u67d3\u4f1a\u5728\u670d\u52a1\u7aef\u8fdb\u884c\u3002"}),o.a.createElement(a.c,{title:"updated"}),o.a.createElement(a.e,{title:"\u7531\u4e8e\u6570\u636e\u66f4\u6539\u5bfc\u81f4\u7684\u865a\u62df DOM \u91cd\u65b0\u6e32\u67d3\u548c\u6253\u8865\u4e01\uff0c\u5728\u8fd9\u4e4b\u540e\u4f1a\u8c03\u7528\u8be5\u94a9\u5b50\u3002"}),o.a.createElement(a.e,{title:"\u5f53\u8fd9\u4e2a\u94a9\u5b50\u88ab\u8c03\u7528\u65f6\uff0c\u7ec4\u4ef6 DOM \u5df2\u7ecf\u66f4\u65b0\uff0c\u6240\u4ee5\u4f60\u73b0\u5728\u53ef\u4ee5\u6267\u884c\u4f9d\u8d56\u4e8e DOM \u7684\u64cd\u4f5c\u3002\u7136\u800c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u907f\u514d\u5728\u6b64\u671f\u95f4\u66f4\u6539\u72b6\u6001\u3002\u5982\u679c\u8981\u76f8\u5e94\u72b6\u6001\u6539\u53d8\uff0c\u901a\u5e38\u6700\u597d\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u6216 watcher \u53d6\u800c\u4ee3\u4e4b\u3002"}),o.a.createElement(a.e,{title:"\u6ce8\u610f updated \u4e0d\u4f1a\u627f\u8bfa\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u4e5f\u90fd\u4e00\u8d77\u88ab\u91cd\u7ed8\u3002\u5982\u679c\u4f60\u5e0c\u671b\u7b49\u5230\u6574\u4e2a\u89c6\u56fe\u90fd\u91cd\u7ed8\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u7528 vm.$nextTick \u66ff\u6362\u6389\uff0c\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.b,{content:"updated: function () {\n    this.$nextTick(function () {\n        // Code that will run only after the\n        // entire view has been re-rendered\n    })\n}"}),o.a.createElement(a.c,{title:"activated"}),o.a.createElement(a.e,{title:"keep-alive \u7ec4\u4ef6\u6fc0\u6d3b\u65f6\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.c,{title:"deactivated"}),o.a.createElement(a.e,{title:"keep-alive \u7ec4\u4ef6\u505c\u7528\u65f6\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.c,{title:"beforeDestroy"}),o.a.createElement(a.e,{title:"\u5b9e\u4f8b\u9500\u6bc1\u4e4b\u524d\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u4ecd\u7136\u5b8c\u5168\u53ef\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.c,{title:"destroyed"}),o.a.createElement(a.e,{title:"Vue \u5b9e\u4f8b\u9500\u6bc1\u540e\u8c03\u7528\u3002\u8c03\u7528\u540e\uff0cVue \u5b9e\u4f8b\u6307\u793a\u7684\u6240\u6709\u4e1c\u897f\u90fd\u4f1a\u89e3\u7ed1\u5b9a\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u4f1a\u88ab\u79fb\u9664\uff0c\u6240\u6709\u7684\u5b50\u5b9e\u4f8b\u4e5f\u4f1a\u88ab\u9500\u6bc1\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),o.a.createElement(a.c,{title:"errorCaptured"}),o.a.createElement(a.e,{title:"\u5f53\u6355\u83b7\u4e00\u4e2a\u6765\u81ea\u5b50\u5b59\u7ec4\u4ef6\u7684\u9519\u8bef\u65f6\u88ab\u8c03\u7528\u3002\u6b64\u94a9\u5b50\u4f1a\u6536\u5230\u4e09\u4e2a\u53c2\u6570\uff1a\u9519\u8bef\u5bf9\u8c61\u3001\u53d1\u751f\u9519\u8bef\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u4ee5\u53ca\u4e00\u4e2a\u5305\u542b\u9519\u8bef\u6765\u6e90\u4fe1\u606f\u7684\u5b57\u7b26\u4e32\u3002\u6b64\u94a9\u5b50\u53ef\u4ee5\u8fd4\u56de false \u4ee5\u963b\u6b62\u8be5\u9519\u8bef\u7ee7\u7eed\u5411\u4e0a\u4f20\u64ad\u3002"})))}}])&&u(r.prototype,c),s&&u(r,s),t}();t.default=s},37:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=n(3),u=n.n(c),l=n(4),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=p(this,e.call.apply(e,[this].concat(i))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!s(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,i=n.to;o?t.replace(i):t.push(i)}},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,a="string"===typeof t?Object(l.createLocation)(t,null,null,i.location):t,c=i.createHref(a);return o.a.createElement("a",f({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(o.a.Component);y.propTypes={onClick:a.a.func,target:a.a.string,replace:a.a.bool,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired,innerRef:a.a.oneOfType([a.a.string,a.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired,createHref:a.a.func.isRequired}).isRequired}).isRequired},t.a=y}}]);