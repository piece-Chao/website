(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{323:function(e,t,n){var r=n(23);e.exports=function(e){return r[e+"Prototype"]}},324:function(e,t,n){e.exports=n(326)},325:function(e,t,n){"use strict";var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),l=n.n(c),u=n(50),f=n.n(u),s=n(58),p=n.n(s),m=n(37),h=n.n(m),y=n(0),v=n.n(y),d=n(113),b=(0,n(38).createHashHistory)();function E(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var g=function(e){f()(n,e);var t=E(n);function n(){return i()(this,n),t.apply(this,arguments)}return l()(n,[{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(d.f,{mode:"light",icon:"#/Home"===window.location.hash?"":v.a.createElement(d.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?function(){}:function(){b.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}]),n}(y.Component);t.a=g},326:function(e,t,n){var r=n(327);e.exports=r},327:function(e,t,n){var r=n(328),a=Array.prototype;e.exports=function(e){var t=e.map;return e===a||e instanceof Array&&t===a.map?r:t}},328:function(e,t,n){n(329);var r=n(323);e.exports=r("Array").map},329:function(e,t,n){"use strict";var r=n(24),a=n(156).map;r({target:"Array",proto:!0,forced:!n(155)("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},330:function(e,t,n){"use strict";n.d(t,"a",function(){return B}),n.d(t,"g",function(){return D}),n.d(t,"c",function(){return S}),n.d(t,"e",function(){return z}),n.d(t,"b",function(){return I}),n.d(t,"d",function(){return K}),n.d(t,"f",function(){return L});var r=n(19),a=n.n(r),o=n(331),i=n.n(o),c=n(335),l=n.n(c),u=n(338),f=n.n(u),s=n(343),p=n.n(s),m=n(347),h=n.n(m),y=n(352),v=n.n(y),d=n(48),b=n.n(d),E=n(49),g=n.n(E),x=n(50),O=n.n(x),w=n(58),k=n.n(w),j=n(37),C=n.n(j),P=n(324),R=n.n(P),A=n(0),_=n.n(A),H=n(354);n(353);function T(e,t){var n=i()(e);if(l.a){var r=l()(e);t&&(r=f()(r).call(r,function(t){return p()(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(t){v()(e,t,n[t])}):h.a?Object.defineProperties(e,h()(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,p()(n,t))})}return e}function q(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=C()(e);if(t){var o=C()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return k()(this,n)}}var B=function(e){O()(n,e);var t=q(n);function n(){return b()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return _.a.createElement("div",{className:"blockComponent",style:r},_.a.createElement(H.a,{to:t},_.a.createElement("p",{style:a},n)))}}]),n}(_.a.Component),D=function(e){O()(n,e);var t=q(n);function n(){return b()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){return _.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}]),n}(_.a.Component),S=function(e){O()(n,e);var t=q(n);function n(){return b()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){return _.a.createElement("div",{className:"label"},_.a.createElement("p",null,_.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}]),n}(_.a.Component),z=function(e){O()(n,e);var t=q(n);function n(){return b()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){return _.a.createElement("section",{className:"paragraph",style:N({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}]),n}(_.a.Component),I=function(e){O()(n,e);var t=q(n);function n(){return b()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){return _.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},_.a.createElement("pre",null,this.props.content))}}]),n}(_.a.Component),K=function(e){O()(n,e);var t=q(n);function n(){return b()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){var e;return _.a.createElement("div",{className:"listItem"},_.a.createElement("ul",null,R()(e=this.props.list).call(e,function(e,t){return _.a.createElement("li",{key:t},e)})))}}]),n}(_.a.Component),L=function(e){O()(n,e);var t=q(n);function n(){return b()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.data;return _.a.createElement("div",{className:"renderTable"},_.a.createElement("table",null,_.a.createElement("thead",null,_.a.createElement("tr",null,R()(t).call(t,function(e,t){return _.a.createElement("th",{key:t},e)}))),_.a.createElement("tbody",null,R()(n).call(n,function(e,t){return _.a.createElement("tr",{key:t},R()(e).call(e,function(e,t){return _.a.createElement("td",{key:t},e)}))}))))}}]),n}(_.a.Component)},331:function(e,t,n){e.exports=n(332)},332:function(e,t,n){var r=n(333);e.exports=r},333:function(e,t,n){n(334);var r=n(23);e.exports=r.Object.keys},334:function(e,t,n){var r=n(24),a=n(40),o=n(114);r({target:"Object",stat:!0,forced:n(13)(function(){o(1)})},{keys:function(e){return o(a(e))}})},335:function(e,t,n){e.exports=n(336)},336:function(e,t,n){var r=n(337);e.exports=r},337:function(e,t,n){n(160);var r=n(23);e.exports=r.Object.getOwnPropertySymbols},338:function(e,t,n){e.exports=n(339)},339:function(e,t,n){var r=n(340);e.exports=r},340:function(e,t,n){var r=n(341),a=Array.prototype;e.exports=function(e){var t=e.filter;return e===a||e instanceof Array&&t===a.filter?r:t}},341:function(e,t,n){n(342);var r=n(323);e.exports=r("Array").filter},342:function(e,t,n){"use strict";var r=n(24),a=n(156).filter;r({target:"Array",proto:!0,forced:!n(155)("filter")},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},343:function(e,t,n){e.exports=n(344)},344:function(e,t,n){var r=n(345);e.exports=r},345:function(e,t,n){n(346);var r=n(23).Object,a=e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)};r.getOwnPropertyDescriptor.sham&&(a.sham=!0)},346:function(e,t,n){var r=n(24),a=n(13),o=n(39),i=n(112).f,c=n(25),l=a(function(){i(1)});r({target:"Object",stat:!0,forced:!c||l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},347:function(e,t,n){e.exports=n(348)},348:function(e,t,n){var r=n(349);e.exports=r},349:function(e,t,n){n(350);var r=n(23);e.exports=r.Object.getOwnPropertyDescriptors},350:function(e,t,n){var r=n(24),a=n(25),o=n(351),i=n(39),c=n(112),l=n(159);r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),a=c.f,u=o(r),f={},s=0;u.length>s;)void 0!==(n=a(r,t=u[s++]))&&l(f,t,n);return f}})},351:function(e,t,n){var r=n(51),a=n(115),o=n(161),i=n(41);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},352:function(e,t,n){var r=n(158);e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},353:function(e,t,n){},354:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(26),l=n.n(c),u=n(38),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=s(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(u.createLocation)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",f({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},358:function(e,t,n){e.exports=n.p+"static/media/JS_ECMA_grammer_nestedscope.977a364e.png"},547:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),l=n.n(c),u=n(50),f=n.n(u),s=n(58),p=n.n(s),m=n(37),h=n.n(m),y=n(0),v=n.n(y),d=n(325),b=n(330),E=n(354);function g(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var x=function(e){f()(r,e);var t=g(r);function r(){return i()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){return v.a.createElement(d.a,null,v.a.createElement("div",{style:{padding:"0 10px"}},v.a.createElement(b.g,{title:"\u6df1\u5165\u7406\u89e3javascript\u4f5c\u7528\u57df\u7cfb\u5217\u7b2c\u4e8c\u7bc7\u2014\u2014\u8bcd\u6cd5\u4f5c\u7528\u57df\u548c\u52a8\u6001\u4f5c\u7528\u57df"}),v.a.createElement(b.e,{title:"\u5927\u591a\u6570\u65f6\u5019\uff0c\u6211\u4eec\u5bf9\u4f5c\u7528\u57df\u4ea7\u751f\u6df7\u4e71\u7684\u4e3b\u8981\u539f\u56e0\u662f\u5206\u4e0d\u6e05\u695a\u5e94\u8be5\u6309\u7167\u51fd\u6570\u4f4d\u7f6e\u7684\u5d4c\u5957\u987a\u5e8f\uff0c\u8fd8\u662f\u6309\u7167\u51fd\u6570\u7684\u8c03\u7528\u987a\u5e8f\u8fdb\u884c\u53d8\u91cf\u67e5\u627e\u3002\u518d\u52a0\u4e0athis\u673a\u5236\u7684\u5e72\u6270\uff0c\u4f7f\u5f97\u53d8\u91cf\u67e5\u627e\u6781\u6613\u51fa\u9519\u3002\u8fd9\u5b9e\u9645\u4e0a\u662f\u7531\u4e24\u79cd\u4f5c\u7528\u57df\u5de5\u4f5c\u6a21\u578b\u5bfc\u81f4\u7684\uff0c\u4f5c\u7528\u57df\u5206\u4e3a\u8bcd\u6cd5\u4f5c\u7528\u57df\u548c\u52a8\u6001\u4f5c\u7528\u57df\uff0c\u5206\u6e05\u8fd9\u4e24\u79cd\u4f5c\u7528\u57df\u6a21\u578b\u5c31\u80fd\u591f\u5bf9\u53d8\u91cf\u67e5\u627e\u8fc7\u7a0b\u6709\u6e05\u6670\u7684\u8ba4\u8bc6\u3002\u672c\u6587\u662f\u6df1\u5165\u7406\u89e3javascript\u4f5c\u7528\u57df\u7cfb\u5217\u7b2c\u4e8c\u7bc7\u2014\u2014\u8bcd\u6cd5\u4f5c\u7528\u57df\u548c\u52a8\u6001\u4f5c\u7528\u57df"}),v.a.createElement(b.c,{title:"\u8bcd\u6cd5\u4f5c\u7528\u57df"}),v.a.createElement(b.e,{title:v.a.createElement("p",null,v.a.createElement(E.a,{to:"Range_art1"},"\u7b2c\u4e00\u7bc7"),"\u4ecb\u7ecd\u8fc7\uff0c\u7f16\u8bd1\u5668\u7684\u7b2c\u4e00\u4e2a\u5de5\u4f5c\u9636\u6bb5\u53eb\u4f5c\u5206\u8bcd\uff0c\u5c31\u662f\u628a\u7531\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u5206\u89e3\u6210\u8bcd\u6cd5\u5355\u5143\u3002\u8fd9\u4e2a\u6982\u5ff5\u662f\u7406\u89e3\u8bcd\u6cd5\u4f5c\u7528\u57df\u7684\u57fa\u7840")}),v.a.createElement(b.e,{title:"\u7b80\u5355\u5730\u8bf4\uff0c\u8bcd\u6cd5\u4f5c\u7528\u57df\u5c31\u662f\u5b9a\u4e49\u5728\u8bcd\u6cd5\u9636\u6bb5\u7684\u4f5c\u7528\u57df\uff0c\u662f\u7531\u5199\u4ee3\u7801\u65f6\u5c06\u53d8\u91cf\u548c\u5757\u4f5c\u7528\u57df\u5199\u5728\u54ea\u91cc\u6765\u51b3\u5b9a\u7684\uff0c\u56e0\u6b64\u5f53\u8bcd\u6cd5\u5206\u6790\u5668\u5904\u7406\u4ee3\u7801\u65f6\u4f1a\u4fdd\u6301\u4f5c\u7528\u57df\u4e0d\u53d8"}),v.a.createElement(b.e,{style:{textIndent:"0",fontWeight:"700"},title:"\u5173\u7cfb"}),v.a.createElement(b.e,{title:"\u65e0\u8bba\u51fd\u6570\u5728\u54ea\u91cc\u88ab\u8c03\u7528\uff0c\u4e5f\u65e0\u8bba\u5b83\u5982\u4f55\u88ab\u8c03\u7528\uff0c\u5b83\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\u90fd\u53ea\u7531\u51fd\u6570\u88ab\u58f0\u660e\u65f6\u6240\u5904\u7684\u4f4d\u7f6e\u51b3\u5b9a"}),v.a.createElement(b.b,{content:"function foo(a) {\n    var b = a * 2;\n    function bar(c) {\n        console.log( a, b, c );\n    }\n    bar(b * 3);\n}\nfoo( 2 ); // 2 4 12\n"}),v.a.createElement(b.e,{title:"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u6709\u4e09\u4e2a\u9010\u7ea7\u5d4c\u5957\u7684\u4f5c\u7528\u57df\u3002\u4e3a\u4e86\u5e2e\u52a9\u7406\u89e3\uff0c\u53ef\u4ee5\u5c06\u5b83\u4eec\u60f3\u8c61\u6210\u51e0\u4e2a\u9010\u7ea7\u5305\u542b\u7684\u6c14\u6ce1"}),v.a.createElement("img",{style:{width:"100%"},src:n(358),alt:"png"}),v.a.createElement(b.e,{title:"\u4f5c\u7528\u57df\u6c14\u6ce1\u7531\u5176\u5bf9\u5e94\u7684\u4f5c\u7528\u57df\u5757\u4ee3\u7801\u5199\u5728\u54ea\u91cc\u51b3\u5b9a\uff0c\u5b83\u4eec\u662f\u9010\u7ea7\u5305\u542b\u7684"}),v.a.createElement(b.e,{title:"\u6c14\u6ce11\u5305\u542b\u7740\u6574\u4e2a\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a\u6807\u8bc6\u7b26\uff1afoo"}),v.a.createElement(b.e,{title:"\u6c14\u6ce12\u5305\u542b\u7740foo\u6240\u521b\u5efa\u7684\u4f5c\u7528\u57df\uff0c\u5176\u4e2d\u6709\u4e09\u4e2a\u6807\u8bc6\u7b26\uff1aa\u3001bar\u548cb"}),v.a.createElement(b.e,{title:"\u6c14\u6ce13\u5305\u542b\u7740bar\u6240\u521b\u5efa\u7684\u4f5c\u7528\u57df\uff0c\u5176\u4e2d\u53ea\u6709\u4e00\u4e2a\u6807\u8bc6\u7b26\uff1ac"}),v.a.createElement(b.e,{style:{textIndent:"0",fontWeight:"700"},title:"\u67e5\u627e"}),v.a.createElement(b.e,{title:"\u4f5c\u7528\u57df\u6c14\u6ce1\u7684\u7ed3\u6784\u548c\u4e92\u76f8\u4e4b\u95f4\u7684\u4f4d\u7f6e\u5173\u7cfb\u7ed9\u5f15\u64ce\u63d0\u4f9b\u4e86\u8db3\u591f\u7684\u4f4d\u7f6e\u4fe1\u606f\uff0c\u5f15\u64ce\u7528\u8fd9\u4e9b\u4fe1\u606f\u6765\u67e5\u627e\u6807\u8bc6\u7b26\u7684\u4f4d\u7f6e"}),v.a.createElement(b.e,{title:"\u5728\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c\u5f15\u64ce\u6267\u884cconsole.log(...)\u58f0\u660e\uff0c\u5e76\u67e5\u627ea\u3001b\u548cc\u4e09\u4e2a\u53d8\u91cf\u7684\u5f15\u7528\u3002\u5b83\u9996\u5148\u4ece\u6700\u5185\u90e8\u7684\u4f5c\u7528\u57df\uff0c\u4e5f\u5c31\u662fbar(...)\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5f00\u59cb\u67e5\u627e\u3002\u5f15\u64ce\u65e0\u6cd5\u5728\u8fd9\u91cc\u627e\u5230a\uff0c\u56e0\u6b64\u4f1a\u53bb\u4e0a\u4e00\u7ea7\u5230\u6240\u5d4c\u5957\u7684foo(...)\u7684\u4f5c\u7528\u57df\u4e2d\u7ee7\u7eed\u67e5\u627e\u3002\u5728\u8fd9\u91cc\u627e\u5230\u4e86a\uff0c\u56e0\u6b64\u5f15\u64ce\u4f7f\u7528\u4e86\u8fd9\u4e2a\u5f15\u7528\u3002\u5bf9b\u6765\u8bb2\u4e5f\u4e00\u6837\u3002\u800c\u5bf9c\u6765\u8bf4\uff0c\u5f15\u64ce\u5728bar(...)\u4e2d\u627e\u5230\u4e86\u5b83"}),v.a.createElement(b.e,{title:"\u6ce8\u610f\uff1a\u8bcd\u6cd5\u4f5c\u7528\u57df\u67e5\u627e\u53ea\u4f1a\u67e5\u627e\u4e00\u7ea7\u6807\u8bc6\u7b26\uff0c\u5982\u679c\u4ee3\u7801\u5f15\u7528\u4e86foo.bar.baz\uff0c\u8bcd\u6cd5\u4f5c\u7528\u57df\u67e5\u627e\u53ea\u4f1a\u8bd5\u56fe\u67e5\u627efoo\u6807\u8bc6\u7b26\uff0c\u627e\u5230\u8fd9\u4e2a\u53d8\u91cf\u540e\uff0c\u5bf9\u8c61\u5c5e\u6027\u8bbf\u95ee\u89c4\u5219\u5206\u522b\u63a5\u7ba1\u5bf9bar\u548cbaz\u5c5e\u6027\u7684\u8bbf\u95ee"}),v.a.createElement(b.b,{content:"foo = {\n    bar:{\n        baz: 1\n    }\n};\nconsole.log(foo.bar.baz);//1\n"}),v.a.createElement(b.e,{style:{textIndent:"0",fontWeight:"700"},title:"\u906e\u853d"}),v.a.createElement(b.e,{title:"\u4f5c\u7528\u57df\u67e5\u627e\u4ece\u8fd0\u884c\u65f6\u6240\u5904\u7684\u6700\u5185\u90e8\u4f5c\u7528\u57df\u5f00\u59cb\uff0c\u9010\u7ea7\u5411\u5916\u6216\u8005\u8bf4\u5411\u4e0a\u8fdb\u884c\uff0c\u76f4\u5230\u9047\u89c1\u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u6807\u8bc6\u7b26\u4e3a\u6b62"}),v.a.createElement(b.e,{title:"\u5728\u591a\u5c42\u7684\u5d4c\u5957\u4f5c\u7528\u57df\u4e2d\u53ef\u4ee5\u5b9a\u4e49\u540c\u540d\u7684\u6807\u8bc6\u7b26\uff0c\u8fd9\u53eb\u4f5c\u201c\u906e\u853d\u6548\u5e94\u201d\uff0c\u5185\u90e8\u7684\u6807\u8bc6\u7b26\u201c\u906e\u853d\u201d\u4e86\u5916\u90e8\u7684\u6807\u8bc6\u7b26"}),v.a.createElement(b.b,{content:"var a = 0;\nfunction test(){\n    var a = 1;\n    console.log(a);//1\n}\ntest();\n"}),v.a.createElement(b.e,{title:"\u5168\u5c40\u53d8\u91cf\u4f1a\u81ea\u52a8\u4e3a\u5168\u5c40\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u56e0\u6b64\u53ef\u4ee5\u4e0d\u76f4\u63a5\u901a\u8fc7\u5168\u5c40\u5bf9\u8c61\u7684\u8bcd\u6cd5\u540d\u79f0\uff0c\u800c\u662f\u95f4\u63a5\u5730\u901a\u8fc7\u5bf9\u5168\u5c40\u5bf9\u8c61\u5c5e\u6027\u7684\u5f15\u7528\u6765\u5bf9\u5176\u8fdb\u884c\u8bbf\u95ee"}),v.a.createElement(b.b,{content:"var a = 0;\nfunction test(){\n    var a = 1;\n    console.log(window.a);//0\n}\ntest();\n"}),v.a.createElement(b.e,{title:"\u901a\u8fc7\u8fd9\u79cd\u6280\u672f\u53ef\u4ee5\u8bbf\u95ee\u90a3\u4e9b\u88ab\u540c\u540d\u53d8\u91cf\u6240\u906e\u853d\u7684\u5168\u5c40\u53d8\u91cf\u3002\u4f46\u975e\u5168\u5c40\u7684\u53d8\u91cf\u5982\u679c\u88ab\u906e\u853d\u4e86\uff0c\u65e0\u8bba\u5982\u4f55\u90fd\u65e0\u6cd5\u88ab\u8bbf\u95ee\u5230"}),v.a.createElement(b.c,{title:"\u52a8\u6001\u4f5c\u7528\u57df"}),v.a.createElement(b.e,{title:"javascript\u4f7f\u7528\u7684\u662f\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u5b83\u6700\u91cd\u8981\u7684\u7279\u5f81\u662f\u5b83\u7684\u5b9a\u4e49\u8fc7\u7a0b\u53d1\u751f\u5728\u4ee3\u7801\u7684\u4e66\u5199\u9636\u6bb5"}),v.a.createElement(b.e,{title:"\u90a3\u4e3a\u4ec0\u4e48\u8981\u4ecb\u7ecd\u52a8\u6001\u4f5c\u7528\u57df\u5462\uff1f\u5b9e\u9645\u4e0a\u52a8\u6001\u4f5c\u7528\u57df\u662fjavascript\u53e6\u4e00\u4e2a\u91cd\u8981\u673a\u5236this\u7684\u8868\u4eb2\u3002\u4f5c\u7528\u57df\u6df7\u4e71\u591a\u6570\u662f\u56e0\u4e3a\u8bcd\u6cd5\u4f5c\u7528\u57df\u548cthis\u673a\u5236\u76f8\u6df7\u6dc6\uff0c\u50bb\u50bb\u5206\u4e0d\u6e05\u695a"}),v.a.createElement(b.e,{title:"\u52a8\u6001\u4f5c\u7528\u57df\u5e76\u4e0d\u5173\u5fc3\u51fd\u6570\u548c\u4f5c\u7528\u57df\u662f\u5982\u4f55\u58f0\u660e\u4ee5\u53ca\u5728\u4efb\u4f55\u5904\u58f0\u660e\u7684\uff0c\u53ea\u5173\u5fc3\u5b83\u4eec\u4ece\u4f55\u5904\u8c03\u7528\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f5c\u7528\u57df\u94fe\u662f\u57fa\u4e8e\u8c03\u7528\u6808\u7684\uff0c\u800c\u4e0d\u662f\u4ee3\u7801\u4e2d\u7684\u4f5c\u7528\u57df\u5d4c\u5957"}),v.a.createElement(b.b,{content:"var a = 2;\nfunction foo() {\n    console.log( a );\n}\nfunction bar() {\n    var a = 3;\n    foo();\n}\nbar();\n"}),v.a.createElement(b.e,{title:"\u30101\u3011\u5982\u679c\u5904\u4e8e\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u4e5f\u5c31\u662f\u73b0\u5728\u7684javascript\u73af\u5883\u3002\u53d8\u91cfa\u9996\u5148\u5728foo()\u51fd\u6570\u4e2d\u67e5\u627e\uff0c\u6ca1\u6709\u627e\u5230\u3002\u4e8e\u662f\u987a\u7740\u4f5c\u7528\u57df\u94fe\u5230\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u67e5\u627e\uff0c\u627e\u5230\u5e76\u8d4b\u503c\u4e3a2\u3002\u6240\u4ee5\u63a7\u5236\u53f0\u8f93\u51fa2"}),v.a.createElement(b.e,{title:"\u30102\u3011\u5982\u679c\u5904\u4e8e\u52a8\u6001\u4f5c\u7528\u57df\uff0c\u540c\u6837\u5730\uff0c\u53d8\u91cfa\u9996\u5148\u5728foo()\u4e2d\u67e5\u627e\uff0c\u6ca1\u6709\u627e\u5230\u3002\u8fd9\u91cc\u4f1a\u987a\u7740\u8c03\u7528\u6808\u5728\u8c03\u7528foo()\u51fd\u6570\u7684\u5730\u65b9\uff0c\u4e5f\u5c31\u662fbar()\u51fd\u6570\u4e2d\u67e5\u627e\uff0c\u627e\u5230\u5e76\u8d4b\u503c\u4e3a3\u3002\u6240\u4ee5\u63a7\u5236\u53f0\u8f93\u51fa3"}),v.a.createElement(b.e,{title:"\u4e24\u79cd\u4f5c\u7528\u57df\u7684\u533a\u522b\uff0c\u7b80\u800c\u8a00\u4e4b\uff0c\u8bcd\u6cd5\u4f5c\u7528\u57df\u662f\u5728\u5b9a\u4e49\u65f6\u786e\u5b9a\u7684\uff0c\u800c\u52a8\u6001\u4f5c\u7528\u57df\u662f\u5728\u8fd0\u884c\u65f6\u786e\u5b9a\u7684"})))}}]),r}(v.a.Component);t.default=x}}]);