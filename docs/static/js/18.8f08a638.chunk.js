(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{323:function(e,t,n){var r=n(23);e.exports=function(e){return r[e+"Prototype"]}},324:function(e,t,n){e.exports=n(326)},325:function(e,t,n){"use strict";var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),u=n.n(c),l=n(50),f=n.n(l),s=n(58),p=n.n(s),h=n(37),y=n.n(h),d=n(0),m=n.n(d),v=n(113),E=(0,n(38).createHashHistory)();function b(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var o=y()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var x=function(e){f()(n,e);var t=b(n);function n(){return i()(this,n),t.apply(this,arguments)}return u()(n,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(v.f,{mode:"light",icon:"#/Home"===window.location.hash?"":m.a.createElement(v.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?function(){}:function(){E.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}]),n}(d.Component);t.a=x},326:function(e,t,n){var r=n(327);e.exports=r},327:function(e,t,n){var r=n(328),a=Array.prototype;e.exports=function(e){var t=e.map;return e===a||e instanceof Array&&t===a.map?r:t}},328:function(e,t,n){n(329);var r=n(323);e.exports=r("Array").map},329:function(e,t,n){"use strict";var r=n(24),a=n(156).map;r({target:"Array",proto:!0,forced:!n(155)("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},330:function(e,t,n){"use strict";n.d(t,"a",function(){return $}),n.d(t,"g",function(){return q}),n.d(t,"c",function(){return B}),n.d(t,"e",function(){return S}),n.d(t,"b",function(){return _}),n.d(t,"d",function(){return K}),n.d(t,"f",function(){return L});var r=n(19),a=n.n(r),o=n(331),i=n.n(o),c=n(335),u=n.n(c),l=n(338),f=n.n(l),s=n(343),p=n.n(s),h=n(347),y=n.n(h),d=n(352),m=n.n(d),v=n(48),E=n.n(v),b=n(49),x=n.n(b),g=n(50),O=n.n(g),w=n(58),k=n.n(w),C=n(37),j=n.n(C),P=n(324),R=n.n(P),T=n(0),D=n.n(T),A=n(354);n(353);function H(e,t){var n=i()(e);if(u.a){var r=u()(e);t&&(r=f()(r).call(r,function(t){return p()(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(t){m()(e,t,n[t])}):y.a?Object.defineProperties(e,y()(n)):H(Object(n)).forEach(function(t){Object.defineProperty(e,t,p()(n,t))})}return e}function N(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var o=j()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return k()(this,n)}}var $=function(e){O()(n,e);var t=N(n);function n(){return E()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return D.a.createElement("div",{className:"blockComponent",style:r},D.a.createElement(A.a,{to:t},D.a.createElement("p",{style:a},n)))}}]),n}(D.a.Component),q=function(e){O()(n,e);var t=N(n);function n(){return E()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return D.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}]),n}(D.a.Component),B=function(e){O()(n,e);var t=N(n);function n(){return E()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return D.a.createElement("div",{className:"label"},D.a.createElement("p",null,D.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}]),n}(D.a.Component),S=function(e){O()(n,e);var t=N(n);function n(){return E()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return D.a.createElement("section",{className:"paragraph",style:M({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}]),n}(D.a.Component),_=function(e){O()(n,e);var t=N(n);function n(){return E()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return D.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},D.a.createElement("pre",null,this.props.content))}}]),n}(D.a.Component),K=function(e){O()(n,e);var t=N(n);function n(){return E()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){var e;return D.a.createElement("div",{className:"listItem"},D.a.createElement("ul",null,R()(e=this.props.list).call(e,function(e,t){return D.a.createElement("li",{key:t},e)})))}}]),n}(D.a.Component),L=function(e){O()(n,e);var t=N(n);function n(){return E()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.data;return D.a.createElement("div",{className:"renderTable"},D.a.createElement("table",null,D.a.createElement("thead",null,D.a.createElement("tr",null,R()(t).call(t,function(e,t){return D.a.createElement("th",{key:t},e)}))),D.a.createElement("tbody",null,R()(n).call(n,function(e,t){return D.a.createElement("tr",{key:t},R()(e).call(e,function(e,t){return D.a.createElement("td",{key:t},e)}))}))))}}]),n}(D.a.Component)},331:function(e,t,n){e.exports=n(332)},332:function(e,t,n){var r=n(333);e.exports=r},333:function(e,t,n){n(334);var r=n(23);e.exports=r.Object.keys},334:function(e,t,n){var r=n(24),a=n(40),o=n(114);r({target:"Object",stat:!0,forced:n(13)(function(){o(1)})},{keys:function(e){return o(a(e))}})},335:function(e,t,n){e.exports=n(336)},336:function(e,t,n){var r=n(337);e.exports=r},337:function(e,t,n){n(160);var r=n(23);e.exports=r.Object.getOwnPropertySymbols},338:function(e,t,n){e.exports=n(339)},339:function(e,t,n){var r=n(340);e.exports=r},340:function(e,t,n){var r=n(341),a=Array.prototype;e.exports=function(e){var t=e.filter;return e===a||e instanceof Array&&t===a.filter?r:t}},341:function(e,t,n){n(342);var r=n(323);e.exports=r("Array").filter},342:function(e,t,n){"use strict";var r=n(24),a=n(156).filter;r({target:"Array",proto:!0,forced:!n(155)("filter")},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},343:function(e,t,n){e.exports=n(344)},344:function(e,t,n){var r=n(345);e.exports=r},345:function(e,t,n){n(346);var r=n(23).Object,a=e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)};r.getOwnPropertyDescriptor.sham&&(a.sham=!0)},346:function(e,t,n){var r=n(24),a=n(13),o=n(39),i=n(112).f,c=n(25),u=a(function(){i(1)});r({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},347:function(e,t,n){e.exports=n(348)},348:function(e,t,n){var r=n(349);e.exports=r},349:function(e,t,n){n(350);var r=n(23);e.exports=r.Object.getOwnPropertyDescriptors},350:function(e,t,n){var r=n(24),a=n(25),o=n(351),i=n(39),c=n(112),u=n(159);r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),a=c.f,l=o(r),f={},s=0;l.length>s;)void 0!==(n=a(r,t=l[s++]))&&u(f,t,n);return f}})},351:function(e,t,n){var r=n(51),a=n(115),o=n(161),i=n(41);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},352:function(e,t,n){var r=n(158);e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},353:function(e,t,n){},354:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(26),u=n.n(c),l=n(38),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=s(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(l.createLocation)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",f({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);h.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=h},432:function(e,t,n){e.exports=n.p+"static/media/lifecycle.b3251a15.png"},512:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),u=n.n(c),l=n(50),f=n.n(l),s=n(58),p=n.n(s),h=n(37),y=n.n(h),d=n(0),m=n.n(d),v=n(325),E=n(330);function b(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var o=y()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var x=function(e){f()(r,e);var t=b(r);function r(){return i()(this,r),t.apply(this,arguments)}return u()(r,[{key:"render",value:function(){return m.a.createElement(v.a,null,m.a.createElement("div",{style:{padding:"0 10px"}},m.a.createElement(E.g,{title:"\u751f\u547d\u5468\u671f\u94a9\u5b50"}),m.a.createElement("img",{style:{width:"100%"},src:n(432),alt:"lifecycle"}),m.a.createElement(E.e,{style:{background:"#eee",fontSize:"13px"},title:"\u6240\u6709\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u81ea\u52a8\u7ed1\u5b9a this \u4e0a\u4e0b\u6587\u5230\u5b9e\u4f8b\u4e2d\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u8bbf\u95ee\u6570\u636e\uff0c\u5bf9\u5c5e\u6027\u548c\u65b9\u6cd5\u8fdb\u884c\u8fd0\u7b97\u3002\u8fd9\u610f\u5473\u7740\u4f60\u4e0d\u80fd\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u6765\u5b9a\u4e49\u4e00\u4e2a\u751f\u547d\u5468\u671f\u65b9\u6cd5 (\u4f8b\u5982 created: () => this.fetchTodos())\u3002\u8fd9\u662f\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a\u4e86\u7236\u4e0a\u4e0b\u6587\uff0c\u56e0\u6b64 this \u4e0e\u4f60\u671f\u5f85\u7684 Vue \u5b9e\u4f8b\u4e0d\u540c\uff0cthis.fetchTodos \u7684\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"}),m.a.createElement(E.c,{title:"beforeCreate"}),m.a.createElement(E.e,{title:"\u5728\u5b9e\u4f8b\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u6570\u636e\u89c2\u6d4b (data observer) \u548c event/watcher \u4e8b\u4ef6\u914d\u7f6e\u4e4b\u524d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.c,{title:"created"}),m.a.createElement(E.e,{title:"\u5728\u5b9e\u4f8b\u521b\u5efa\u5b8c\u6210\u540e\u88ab\u7acb\u5373\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u5df2\u5b8c\u6210\u4ee5\u4e0b\u7684\u914d\u7f6e\uff1a\u6570\u636e\u89c2\u6d4b (data observer)\uff0c\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u8fd0\u7b97\uff0cwatch/event \u4e8b\u4ef6\u56de\u8c03\u3002\u7136\u800c\uff0c\u6302\u8f7d\u9636\u6bb5\u8fd8\u6ca1\u5f00\u59cb\uff0c$el \u5c5e\u6027\u76ee\u524d\u4e0d\u53ef\u89c1\u3002"}),m.a.createElement(E.c,{title:"beforeMount"}),m.a.createElement(E.e,{title:"\u5728\u6302\u8f7d\u5f00\u59cb\u4e4b\u524d\u88ab\u8c03\u7528\uff1a\u76f8\u5173\u7684 render \u51fd\u6570\u9996\u6b21\u88ab\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.c,{title:"mounted"}),m.a.createElement(E.e,{title:"el \u88ab\u65b0\u521b\u5efa\u7684 vm.$el \u66ff\u6362\uff0c\u5e76\u6302\u8f7d\u5230\u5b9e\u4f8b\u4e0a\u53bb\u4e4b\u540e\u8c03\u7528\u8be5\u94a9\u5b50\u3002\u5982\u679c root \u5b9e\u4f8b\u6302\u8f7d\u4e86\u4e00\u4e2a\u6587\u6863\u5185\u5143\u7d20\uff0c\u5f53 mounted \u88ab\u8c03\u7528\u65f6 vm.$el \u4e5f\u5728\u6587\u6863\u5185\u3002"}),m.a.createElement(E.e,{title:"\u6ce8\u610f mounted \u4e0d\u4f1a\u627f\u8bfa\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u4e5f\u90fd\u4e00\u8d77\u88ab\u6302\u8f7d\u3002\u5982\u679c\u4f60\u5e0c\u671b\u7b49\u5230\u6574\u4e2a\u89c6\u56fe\u90fd\u6e32\u67d3\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u7528 vm.$nextTick \u66ff\u6362\u6389\uff0c\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.b,{content:"mounted: function () {\n    this.$nextTick(function () {\n        // Code that will run only after the\n        // entire view has been rendered\n    })\n}"}),m.a.createElement(E.c,{title:"beforeUpdate"}),m.a.createElement(E.e,{title:"\u6570\u636e\u66f4\u65b0\u65f6\u8c03\u7528\uff0c\u53d1\u751f\u5728\u865a\u62df DOM \u6253\u8865\u4e01\u4e4b\u524d\u3002\u8fd9\u91cc\u9002\u5408\u5728\u66f4\u65b0\u4e4b\u524d\u8bbf\u95ee\u73b0\u6709\u7684 DOM\uff0c\u6bd4\u5982\u624b\u52a8\u79fb\u9664\u5df2\u6dfb\u52a0\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\uff0c\u56e0\u4e3a\u53ea\u6709\u521d\u6b21\u6e32\u67d3\u4f1a\u5728\u670d\u52a1\u7aef\u8fdb\u884c\u3002"}),m.a.createElement(E.c,{title:"updated"}),m.a.createElement(E.e,{title:"\u7531\u4e8e\u6570\u636e\u66f4\u6539\u5bfc\u81f4\u7684\u865a\u62df DOM \u91cd\u65b0\u6e32\u67d3\u548c\u6253\u8865\u4e01\uff0c\u5728\u8fd9\u4e4b\u540e\u4f1a\u8c03\u7528\u8be5\u94a9\u5b50\u3002"}),m.a.createElement(E.e,{title:"\u5f53\u8fd9\u4e2a\u94a9\u5b50\u88ab\u8c03\u7528\u65f6\uff0c\u7ec4\u4ef6 DOM \u5df2\u7ecf\u66f4\u65b0\uff0c\u6240\u4ee5\u4f60\u73b0\u5728\u53ef\u4ee5\u6267\u884c\u4f9d\u8d56\u4e8e DOM \u7684\u64cd\u4f5c\u3002\u7136\u800c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u907f\u514d\u5728\u6b64\u671f\u95f4\u66f4\u6539\u72b6\u6001\u3002\u5982\u679c\u8981\u76f8\u5e94\u72b6\u6001\u6539\u53d8\uff0c\u901a\u5e38\u6700\u597d\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u6216 watcher \u53d6\u800c\u4ee3\u4e4b\u3002"}),m.a.createElement(E.e,{title:"\u6ce8\u610f updated \u4e0d\u4f1a\u627f\u8bfa\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u4e5f\u90fd\u4e00\u8d77\u88ab\u91cd\u7ed8\u3002\u5982\u679c\u4f60\u5e0c\u671b\u7b49\u5230\u6574\u4e2a\u89c6\u56fe\u90fd\u91cd\u7ed8\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u7528 vm.$nextTick \u66ff\u6362\u6389\uff0c\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.b,{content:"updated: function () {\n    this.$nextTick(function () {\n        // Code that will run only after the\n        // entire view has been re-rendered\n    })\n}"}),m.a.createElement(E.c,{title:"activated"}),m.a.createElement(E.e,{title:"keep-alive \u7ec4\u4ef6\u6fc0\u6d3b\u65f6\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.c,{title:"deactivated"}),m.a.createElement(E.e,{title:"keep-alive \u7ec4\u4ef6\u505c\u7528\u65f6\u8c03\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.c,{title:"beforeDestroy"}),m.a.createElement(E.e,{title:"\u5b9e\u4f8b\u9500\u6bc1\u4e4b\u524d\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u4ecd\u7136\u5b8c\u5168\u53ef\u7528\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.c,{title:"destroyed"}),m.a.createElement(E.e,{title:"Vue \u5b9e\u4f8b\u9500\u6bc1\u540e\u8c03\u7528\u3002\u8c03\u7528\u540e\uff0cVue \u5b9e\u4f8b\u6307\u793a\u7684\u6240\u6709\u4e1c\u897f\u90fd\u4f1a\u89e3\u7ed1\u5b9a\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u4f1a\u88ab\u79fb\u9664\uff0c\u6240\u6709\u7684\u5b50\u5b9e\u4f8b\u4e5f\u4f1a\u88ab\u9500\u6bc1\u3002\u8be5\u94a9\u5b50\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528\u3002"}),m.a.createElement(E.c,{title:"errorCaptured"}),m.a.createElement(E.e,{title:"\u5f53\u6355\u83b7\u4e00\u4e2a\u6765\u81ea\u5b50\u5b59\u7ec4\u4ef6\u7684\u9519\u8bef\u65f6\u88ab\u8c03\u7528\u3002\u6b64\u94a9\u5b50\u4f1a\u6536\u5230\u4e09\u4e2a\u53c2\u6570\uff1a\u9519\u8bef\u5bf9\u8c61\u3001\u53d1\u751f\u9519\u8bef\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u4ee5\u53ca\u4e00\u4e2a\u5305\u542b\u9519\u8bef\u6765\u6e90\u4fe1\u606f\u7684\u5b57\u7b26\u4e32\u3002\u6b64\u94a9\u5b50\u53ef\u4ee5\u8fd4\u56de false \u4ee5\u963b\u6b62\u8be5\u9519\u8bef\u7ee7\u7eed\u5411\u4e0a\u4f20\u64ad\u3002"})))}}]),r}(m.a.Component);t.default=x}}]);