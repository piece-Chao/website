(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{322:function(e,t,n){var r=n(23);e.exports=function(e){return r[e+"Prototype"]}},323:function(e,t,n){e.exports=n(325)},324:function(e,t,n){"use strict";var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),s=n.n(c),l=n(50),u=n.n(l),p=n(58),f=n.n(p),m=n(37),g=n.n(m),d=n(0),h=n.n(d),y=n(113),v=(0,n(38).createHashHistory)();function E(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var o=g()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var w=function(e){u()(n,e);var t=E(n);function n(){return i()(this,n),t.apply(this,arguments)}return s()(n,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement(y.f,{mode:"light",icon:"#/Home"===window.location.hash?"":h.a.createElement(y.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?function(){}:function(){v.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}]),n}(d.Component);t.a=w},325:function(e,t,n){var r=n(326);e.exports=r},326:function(e,t,n){var r=n(327),a=Array.prototype;e.exports=function(e){var t=e.map;return e===a||e instanceof Array&&t===a.map?r:t}},327:function(e,t,n){n(328);var r=n(322);e.exports=r("Array").map},328:function(e,t,n){"use strict";var r=n(24),a=n(155).map;r({target:"Array",proto:!0,forced:!n(154)("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},329:function(e,t,n){"use strict";n.d(t,"a",function(){return D}),n.d(t,"g",function(){return L}),n.d(t,"c",function(){return U}),n.d(t,"e",function(){return H}),n.d(t,"b",function(){return q}),n.d(t,"d",function(){return T}),n.d(t,"f",function(){return B});var r=n(19),a=n.n(r),o=n(330),i=n.n(o),c=n(334),s=n.n(c),l=n(337),u=n.n(l),p=n(342),f=n.n(p),m=n(346),g=n.n(m),d=n(351),h=n.n(d),y=n(48),v=n.n(y),E=n(49),w=n.n(E),b=n(50),x=n.n(b),_=n(58),I=n.n(_),P=n(37),S=n.n(P),k=n(323),A=n.n(k),C=n(0),O=n.n(C),j=n(353);n(352);function R(e,t){var n=i()(e);if(s.a){var r=s()(e);t&&(r=u()(r).call(r,function(t){return f()(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){h()(e,t,n[t])}):g.a?Object.defineProperties(e,g()(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,f()(n,t))})}return e}function J(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var o=S()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return I()(this,n)}}var D=function(e){x()(n,e);var t=J(n);function n(){return v()(this,n),t.apply(this,arguments)}return w()(n,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return O.a.createElement("div",{className:"blockComponent",style:r},O.a.createElement(j.a,{to:t},O.a.createElement("p",{style:a},n)))}}]),n}(O.a.Component),L=function(e){x()(n,e);var t=J(n);function n(){return v()(this,n),t.apply(this,arguments)}return w()(n,[{key:"render",value:function(){return O.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}]),n}(O.a.Component),U=function(e){x()(n,e);var t=J(n);function n(){return v()(this,n),t.apply(this,arguments)}return w()(n,[{key:"render",value:function(){return O.a.createElement("div",{className:"label"},O.a.createElement("p",null,O.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}]),n}(O.a.Component),H=function(e){x()(n,e);var t=J(n);function n(){return v()(this,n),t.apply(this,arguments)}return w()(n,[{key:"render",value:function(){return O.a.createElement("section",{className:"paragraph",style:N({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}]),n}(O.a.Component),q=function(e){x()(n,e);var t=J(n);function n(){return v()(this,n),t.apply(this,arguments)}return w()(n,[{key:"render",value:function(){return O.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},O.a.createElement("pre",null,this.props.content))}}]),n}(O.a.Component),T=function(e){x()(n,e);var t=J(n);function n(){return v()(this,n),t.apply(this,arguments)}return w()(n,[{key:"render",value:function(){var e;return O.a.createElement("div",{className:"listItem"},O.a.createElement("ul",null,A()(e=this.props.list).call(e,function(e,t){return O.a.createElement("li",{key:t},e)})))}}]),n}(O.a.Component),B=function(e){x()(n,e);var t=J(n);function n(){return v()(this,n),t.apply(this,arguments)}return w()(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.data;return O.a.createElement("div",{className:"renderTable"},O.a.createElement("table",null,O.a.createElement("thead",null,O.a.createElement("tr",null,A()(t).call(t,function(e,t){return O.a.createElement("th",{key:t},e)}))),O.a.createElement("tbody",null,A()(n).call(n,function(e,t){return O.a.createElement("tr",{key:t},A()(e).call(e,function(e,t){return O.a.createElement("td",{key:t},e)}))}))))}}]),n}(O.a.Component)},330:function(e,t,n){e.exports=n(331)},331:function(e,t,n){var r=n(332);e.exports=r},332:function(e,t,n){n(333);var r=n(23);e.exports=r.Object.keys},333:function(e,t,n){var r=n(24),a=n(40),o=n(114);r({target:"Object",stat:!0,forced:n(13)(function(){o(1)})},{keys:function(e){return o(a(e))}})},334:function(e,t,n){e.exports=n(335)},335:function(e,t,n){var r=n(336);e.exports=r},336:function(e,t,n){n(159);var r=n(23);e.exports=r.Object.getOwnPropertySymbols},337:function(e,t,n){e.exports=n(338)},338:function(e,t,n){var r=n(339);e.exports=r},339:function(e,t,n){var r=n(340),a=Array.prototype;e.exports=function(e){var t=e.filter;return e===a||e instanceof Array&&t===a.filter?r:t}},340:function(e,t,n){n(341);var r=n(322);e.exports=r("Array").filter},341:function(e,t,n){"use strict";var r=n(24),a=n(155).filter;r({target:"Array",proto:!0,forced:!n(154)("filter")},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},342:function(e,t,n){e.exports=n(343)},343:function(e,t,n){var r=n(344);e.exports=r},344:function(e,t,n){n(345);var r=n(23).Object,a=e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)};r.getOwnPropertyDescriptor.sham&&(a.sham=!0)},345:function(e,t,n){var r=n(24),a=n(13),o=n(39),i=n(112).f,c=n(25),s=a(function(){i(1)});r({target:"Object",stat:!0,forced:!c||s,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},346:function(e,t,n){e.exports=n(347)},347:function(e,t,n){var r=n(348);e.exports=r},348:function(e,t,n){n(349);var r=n(23);e.exports=r.Object.getOwnPropertyDescriptors},349:function(e,t,n){var r=n(24),a=n(25),o=n(350),i=n(39),c=n(112),s=n(158);r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),a=c.f,l=o(r),u={},p=0;l.length>p;)void 0!==(n=a(r,t=l[p++]))&&s(u,t,n);return u}})},350:function(e,t,n){var r=n(51),a=n(115),o=n(160),i=n(41);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},351:function(e,t,n){var r=n(157);e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},352:function(e,t,n){},353:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(26),s=n.n(c),l=n(38),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=p(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(l.createLocation)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",u({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},361:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art1.96675038.png"},362:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art10.ec9abd36.png"},363:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art11.9bd05a5f.png"},364:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art12.6f2c4304.png"},365:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art13.4e8ffc14.png"},366:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art14.078a5f88.png"},367:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art15.023e6f91.png"},368:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art16.46417ca4.png"},369:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art17.04f064bc.png"},370:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art18.de0d77b0.png"},371:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art19.f1577561.png"},372:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art2.40ec5488.png"},383:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art3.85cb981d.png"},394:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art4.1875087b.png"},405:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art5.716ac630.png"},416:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art6.a628def2.png"},421:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art7.0ca7ba31.png"},422:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art8.ae0271da.png"},423:function(e,t,n){e.exports=n.p+"static/media/JS_sprogram_art9.60ba8a3e.png"},526:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),s=n.n(c),l=n(50),u=n.n(l),p=n(58),f=n.n(p),m=n(37),g=n.n(m),d=n(0),h=n.n(d),y=n(324),v=n(329);function E(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var o=g()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var w=function(e){u()(r,e);var t=E(r);function r(){return i()(this,r),t.apply(this,arguments)}return s()(r,[{key:"render",value:function(){return h.a.createElement(y.a,null,h.a.createElement("div",{style:{padding:"0 10px"}},h.a.createElement(v.g,{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d101-\u5c0f\u7a0b\u5e8f\u7684\u6267\u884c\u6d41\u7a0b\u662f\u600e\u4e48\u6837\u7684\uff1f"}),h.a.createElement(v.c,{title:"\u524d\u8a00"}),h.a.createElement(v.e,{title:"\u6211\u4eec\u8fd9\u8fb9\u6700\u8fd1\u4e00\u76f4\u5728\u505a\u57fa\u7840\u670d\u52a1\uff0c\u8fd9\u4e00\u5207\u90fd\u662f\u4e3a\u4e86\u5b8c\u5584\u6280\u672f\u4f53\u7cfb\uff0c\u8fd9\u91cc\u5bf9\u4e8e\u524d\u7aef\u6765\u8bf4\u4fbf\u662f\u6211\u4eec\u9700\u8981\u505a\u4e00\u4e2aHybrid\u4f53\u7cfb\uff0c\u5982\u679c\u505aApp\uff0cReact Native\u4e5f\u662f\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u4f46\u662f\u4e00\u5b9a\u8981\u6709\u5b8c\u5584\u7684\u5206\u5c42\uff1a"}),h.a.createElement(v.e,{title:"\u2460 \u5e95\u5c42\u6846\u67b6\u89e3\u51b3\u5f00\u53d1\u6548\u7387\uff0c\u5c06\u590d\u6742\u7684\u90e8\u5206\u505a\u6210\u4e00\u4e2a\u9ed1\u5323\u5b50\uff0c\u7ed9\u9875\u9762\u5f00\u53d1\u5c55\u793a\u7684\u53ea\u662f\u56fa\u5b9a\u7684\u4e09\u677f\u65a7\uff0c\u56fa\u5b9a\u7684\u6a21\u5f0f\u4e0b\u5f00\u53d1\u5373\u53ef"}),h.a.createElement(v.e,{title:"\u2461 \u5de5\u7a0b\u90e8\u95e8\u4e3a\u4e1a\u52a1\u5f00\u53d1\u8005\u5c01\u88c5\u6700\u5c0f\u5316\u5f00\u53d1\u73af\u5883\uff0c\u6700\u4f18\u4e3a\u6d4f\u89c8\u5668\uff0c\u786e\u5b9e\u4e0d\u884c\u4fbf\u4e3a\u5176\u63d0\u4f9b\u4e00\u4e2a\u7c7b\u4f3c\u6d4f\u89c8\u5668\u7684\u8c03\u8bd5\u73af\u5883"}),h.a.createElement(v.e,{title:"\u5982\u6b64\u4e00\u6765\uff0c\u4e1a\u52a1\u4fbf\u80fd\u5feb\u901f\u8fed\u4ee3\uff0c\u56e0\u4e3a\u4e1a\u52a1\u5f00\u53d1\u8005\u5199\u7684\u4ee3\u7801\u5927\u540c\u5c0f\u5f02\uff0c\u6240\u4ee5\u5e95\u5c42\u6846\u67b6\u914d\u5408\u5de5\u7a0b\u56e2\u961f\uff08\u4e00\u822c\u662f\u540c\u4e00\u4e2a\u56e2\u961f\uff09\uff0c\u4fbf\u53ef\u4ee5\u5728\u5e95\u5c42\u505a\u6389\u5f88\u591a\u6548\u7387\u6027\u80fd\u95ee\u9898\u3002"}),h.a.createElement(v.e,{title:"\u7a0d\u5fae\u5927\u70b9\u7684\u516c\u53f8\uff0c\u7a0d\u5fae\u5bbd\u88d5\u7684\u56e2\u961f\uff0c\u8fd8\u4f1a\u540c\u6b65\u505a\u5f88\u591a\u540e\u7eed\u7684\u6027\u80fd\u76d1\u63a7\u3001\u9519\u8bef\u65e5\u5fd7\u5de5\u4f5c\uff0c\u5982\u6b64\u5f62\u6210\u4e00\u5957\u6587\u6863->\u5f00\u53d1->\u8c03\u8bd5->\u6784\u5efa->\u53d1\u5e03->\u76d1\u63a7\u3001\u5206\u6790 \u4e3a\u4e00\u5957\u5b8c\u5584\u7684\u6280\u672f\u4f53\u7cfb"}),h.a.createElement(v.e,{title:"\u5982\u679c\u5f62\u6210\u4e86\u8fd9\u4e48\u4e00\u5957\u4f53\u7cfb\uff0c\u90a3\u4e48\u540e\u7eed\u5c31\u7b97\u662f\u5185\u90e8\u6846\u67b6\u66f4\u6539\u3001\u6280\u672f\u9769\u65b0\uff0c\u4e5f\u662f\u5728\u8fd9\u4e2a\u4f53\u7cfb\u4e0a\u6539\u9020\uff0c\u4f46\u5f88\u53ef\u60dc\uff0c\u5f88\u591a\u56e2\u961f\u53ea\u4f1a\u5728\u8fd9\u4e2a\u8def\u5f84\u4e0a\u505a\u4e00\u90e8\u5206\uff0c\u540e\u9762\u7531\u4e8e\u79cd\u79cd\u539f\u56e0\u4e0d\u5728\u6df1\u5165\uff0c\u6709\u53ef\u80fd\u662f\u611f\u89c9\u6ca1\u4ef7\u503c\uff0c\u800c\u6700\u6050\u6016\u7684\u884c\u4e3a\u662f\uff0c\u81ea\u5df1\u7684\u4f53\u7cfb\u6ca1\u5f62\u6210\u5c31\u8d38\u7136\u7684\u6362\u57fa\u7840\u6846\u67b6\uff0c\u6212\u4e4b\u614e\u4e4b\u554a\uff01"}),h.a.createElement(v.e,{title:"\u4ece\u7b2c\u4e09\u65b9\u5e94\u7528\u63a5\u5165\u6765\u8bf4\uff0c\u5fae\u4fe1\u5e94\u8be5\u662f\u505a\u7684\u6700\u597d\u7684\uff0c\u767e\u5ea6\u8fd9\u8fb9\u6709\u76f4\u8fbe\u53f7\u7b49\u7c7b\u4f3c\u7684\u4ea7\u54c1\uff0c\u4f46\u662f\u5176\u4f53\u7cfb\u5316\u611f\u89c9\u8fd8\u662f\u6709\u5f85\u63d0\u9ad8\u7684\uff0c\u963f\u91cc\u5e94\u8be5\u4e5f\u6709\u7c7b\u4f3c\u7684\u6280\u672f\u4ea7\u54c1\u8bde\u751f\uff0c\u4ece\u6211\u4eec\u8fd9\u5c42\u6765\u8bf4\uff0c\u90fd\u6ca1\u6709\u592a\u591a\u77e5\u6653\uff0c\u6240\u4ee5\u8981\u4e48\u662f\u8fd0\u8425\u7684\u4e0d\u597d\u8981\u4e48\u662f\u505a\u7684\u4e0d\u597d\u3002"}),h.a.createElement(v.e,{title:"\u800c\u4ece\u5c0f\u7a0b\u5e8f\u8bde\u751f\u4ee5\u6765\uff0c\u6211\u8fd9\u8fb9\u4fbf\u4e00\u76f4\u5728\u5173\u6ce8\uff0c\u81f3\u4eca\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u4f53\u7cfb\u5df2\u7ecf\u5341\u5206\u5b8c\u5907\u4e86\uff0c\u817e\u8baf\u5c0f\u7a0b\u5e8f\u548c\u817e\u8baf\u4e91\u6df1\u5ea6\u6574\u5408\u4e86\uff0c\u5982\u679c\u4f7f\u7528\u5185\u6d4b\u7684\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u5168\u514d\u8d39\uff0c\u7eafjs\u5c31\u641e\u5b9a\u5c0f\u7a0b\u5e8f\u524d\u540e\u7aef\uff0c\u4e0d\u7528\u670d\u52a1\u5668\u3001\u5b58\u50a8\u3001cdn\u3001\u670d\u52a1\u4ee3\u7801\uff0c\u90fd\u662f\u514d\u8d39\uff0c\u5f00\u53d1\u5b8c\u540e\u7aef\u4e0d\u7528\u81ea\u5df1\u8fd0\u7ef4\uff0c\u5927\u6740\u5668\u7684\u8282\u594f\uff0c\u6211\u6709\u65f6\u5019\u5728\u60f3\uff0c\u817e\u8baf\u7684\u6280\u672f\u5b9e\u529b\u771f\u7684\u662f\u5f3a\u554a\uff01"}),h.a.createElement(v.c,{title:"\u5c0f\u7a0b\u5e8f\u7684\u7ed3\u6784\u8ffd\u6eaf"}),h.a.createElement(v.e,{title:"\u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1\u6587\u6863\u8fd8\u662f\u6bd4\u8f83\u5b8c\u5584\u7684\uff0c\u4f9d\u65e7\u662f \u8d26\u53f7\u7533\u8bf7->demo \u6d41\u7a0b\uff0c\u7b49\u719f\u6089\u540e\u4fbf\u53ef\u4ee5\u8d70\u4ee3\u7801\u4e0a\u67b6\u7b49\u6d41\u7a0b\u4e86\uff0c\u524d\u7aef\u4ee3\u7801\u7528\u5de5\u5177\u6784\u5efa\u540e\u4e0a\u4f20\uff0c\u540e\u53f0\u670d\u52a1\u81ea\u5df1\u7ef4\u62a4\uff0c\u914d\u7f6e\u5730\u5740\u6620\u5c04\uff0c\u6211\u4eec\u8fd9\u91cc\u4ec5\u5173\u6ce8\u5f00\u53d1\u6d41\u7a0b\uff0c\u6240\u6709\u4f7f\u7528\u5176\u6d4b\u8bd5\u8d26\u53f7\u5373\u53ef\u3002"}),h.a.createElement(v.b,{content:"1 appid wx0c387cc8c19bdf78\n2 appsecret acd6c02e2fdca183416df1269d2e3fb9\n"}),h.a.createElement(v.e,{title:"\u7ecf\u8fc7\u4e00\u5e74\u591a\u7684\u53d1\u5c55\uff0c\u5c0f\u7a0b\u5e8f\u5f62\u6210\u7684\u6587\u6863\u5df2\u7ecf\u6bd4\u8f83\u5b8c\u5584\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece\u6587\u6863\u548cdemo\u5bf9\u5c0f\u7a0b\u5e8f\u505a\u51fa\u5927\u6982\u7684\u5224\u65ad\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(361),alt:"png"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u5c31\u662f\u5c0f\u7a0b\u5e8f\u7ed9\u4e1a\u52a1\u4eba\u5458\u53ef\u4ee5\u770b\u5230\u7684\u4ee3\u7801\u4e86\uff0c\u6211\u4eec\u4ece\u8fd9\u4e2a\u4ee3\u7801\u4ee5\u53ca\u8fd0\u884c\uff0c\u57fa\u672c\u53ef\u4ee5\u5c06\u5c0f\u7a0b\u5e8f\u7684\u6897\u6982\u731c\u6d4b\u4e00\u756a\uff0c\u8fd9\u91cc\u9996\u5148\u770b\u770b\u5176\u5168\u5c40\u63a7\u5236\u5668APP\uff1a"}),h.a.createElement(v.b,{content:"//app.js\nApp({\n  onLaunch: function () {\n    // \u5c55\u793a\u672c\u5730\u5b58\u50a8\u80fd\u529b\n    var logs = wx.getStorageSync('logs') || []\n    logs.unshift(Date.now())\n    wx.setStorageSync('logs', logs)\n\n    // \u767b\u5f55\n    wx.login({\n      success: res => {\n        // \u53d1\u9001 res.code \u5230\u540e\u53f0\u6362\u53d6 openId, sessionKey, unionId\n      }\n    })\n    // \u83b7\u53d6\u7528\u6237\u4fe1\u606f\n    wx.getSetting({\n      success: res => {\n        if (res.authSetting['scope.userInfo']) {\n          // \u5df2\u7ecf\u6388\u6743\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 getUserInfo \u83b7\u53d6\u5934\u50cf\u6635\u79f0\uff0c\u4e0d\u4f1a\u5f39\u6846\n          wx.getUserInfo({\n            success: res => {\n              // \u53ef\u4ee5\u5c06 res \u53d1\u9001\u7ed9\u540e\u53f0\u89e3\u7801\u51fa unionId\n              this.globalData.userInfo = res.userInfo\n\n              // \u7531\u4e8e getUserInfo \u662f\u7f51\u7edc\u8bf7\u6c42\uff0c\u53ef\u80fd\u4f1a\u5728 Page.onLoad \u4e4b\u540e\u624d\u8fd4\u56de\n              // \u6240\u4ee5\u6b64\u5904\u52a0\u5165 callback \u4ee5\u9632\u6b62\u8fd9\u79cd\u60c5\u51b5\n              if (this.userInfoReadyCallback) {\n                this.userInfoReadyCallback(res)\n              }\n            }\n          })\n        }\n      }\n    })\n  },\n  globalData: {\n    userInfo: null\n  }\n})\n"}),h.a.createElement(v.e,{title:"\u4e00\u4e2a\u5e94\u7528\u53ea\u4f1a\u6709\u4e00\u4e2aAPP\u5b9e\u4f8b\uff0c\u800c\u5c0f\u7a0b\u5e8f\u4e3a\u8fd9\u4e2a\u5355\u4f8b\u63d0\u4f9b\u4e86\u51e0\u4e2a\u57fa\u672c\u7684\u4e8b\u4ef6\u5b9a\u4e49\uff0c\u6211\u4eec\u7528\u7684\u6700\u591a\u7684\u5e94\u8be5\u662fonLaunch\u3001onShow\u3001onHide\uff08\u6211\u8fd8\u6ca1\u5199\u5c0f\u7a0b\u5e8f\uff0c\u6240\u4ee5\u731c\u6d4b\uff09\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(372),alt:"png"}),h.a.createElement(v.e,{title:"\u6211\u4eec\u8fd9\u91cc\u6765\u8ffd\u6eaf\u4e00\u4e0b\u5c0f\u7a0b\u5e8f\u67b6\u6784\u5c42\u7684\u6267\u884c\u903b\u8f91\uff0c\u4eceAPP\u5230\u4e00\u4e2aview\u5b9e\u4f8b\u5316\u662f\u600e\u4e48\u505a\u7684\uff0c\u8fd9\u91cc\u9996\u5148\u660e\u786e\u51e0\u4e2a\u70b9\uff1a"}),h.a.createElement(v.e,{title:"\u2460 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e8b\u5b9e\u4e0a\u4f9d\u65e7\u662f\u63d0\u4f9b\u7684webview\u6267\u884c\u73af\u5883\uff0c\u6240\u4ee5\u6211\u4eec\u4f9d\u65e7\u53ef\u4ee5\u5728js\u73af\u5883\u4e2d\u8bbf\u95eewindow\u3001location\u7b49\u5c5e\u6027"}),h.a.createElement(v.e,{title:"\u2461 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d0\u4f9b\u7684\u5c55\u793a\u7684\u5168\u90e8\u662fNative\u5b9a\u5236\u5316\u7684UI\uff0c\u6240\u4ee5\u4e0d\u8981\u53bb\u60f3DOM\u64cd\u4f5c\u7684\u4e8b"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u5404\u4f4d\u53ef\u4ee5\u60f3\u8c61\u4e3a\uff0c\u5c0f\u7a0b\u5e8f\u754c\u9762\u4e2d\u6709\u4e00\u5757webview\u5728\u6267\u884c\u771f\u6b63\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u53ea\u4e0d\u8fc7\u8fd9\u4e2awebview\u9664\u4e86\u88c5\u8f7djs\u7a0b\u5e8f\u4ec0\u4e48\u90fd\u6ca1\u505a\uff0c\u800c\u6240\u6709\u7684\u9875\u9762\u6e32\u67d3\u5168\u90e8\u662fjs\u901a\u8fc7URL Schema\u6216\u8005JSCore\u8fdb\u884c\u7684Native\u901a\u4fe1\uff0c\u53ebNative\u6839\u636e\u8bbe\u7f6e\u7684\u89c4\u5219\u5b8c\u6210\u7684\u9875\u9762\u6e32\u67d3\u3002"}),h.a.createElement(v.e,{style:{textIndent:0,fontWeight:700},title:"\u5168\u5c40\u63a7\u5236\u5668App"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u6211\u4eec\u91cd\u70b9\u5173\u6ce8\u5168\u5c40\u63a7\u5236\u5668App\u8fd9\u4e2a\u7c7b\u505a\u4e86\u4ec0\u4e48\uff0c\u56e0\u4e3a\u62ff\u4e0d\u5230\u6e90\u7801\uff0c\u6211\u4eec\u8fd9\u91cc\u4e5f\u53ea\u80fd\u731c\u6d4b\u52a0\u5355\u6b65\u8c03\u8bd5\u4e86\uff0c\u9996\u5148\u5fae\u4fe1\u5bb9\u5668\u4f1a\u51c6\u5907\u4e00\u4e2awebview\u5bb9\u5668\u4e3a\u6211\u4eec\u7684js\u4ee3\u7801\u63d0\u4f9b\u5bbf\u4e3b\u73af\u5883\uff0c\u5bb9\u5668\u4e0e\u6784\u5efa\u5de5\u5177\u4f1a\u914d\u5408\u4ea7\u51fa\u4ee5\u4e0b\u9875\u9762\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(383),alt:"png"}),h.a.createElement("img",{style:{width:"100%"},src:n(394),alt:"png"}),h.a.createElement(v.e,{title:"\u4ed6\u5728\u8fd9\u91cc\u5e94\u8be5\u6267\u884c\u4e86\u5b9e\u4f8b\u5316App\u7684\u65b9\u6cd5\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(405),alt:"png"}),h.a.createElement(v.e,{title:"\u8fd9\u4e00\u5768\u4ee3\u7801\uff0c\u5728\u8fd9\u4e2a\u73af\u5883\u4e0b\u4fbf\u76f8\u5f53\u6666\u6da9\u4e86\uff1a"}),h.a.createElement(v.b,{content:'y = function() {\n    function e(t) {\n        var n = this;\n        o(this, e),\n        s.forEach(function(e) {\n            var o = function() {\n                var n = (t[e] || i.noop).bind(this);\n                Reporter.__route__ = "App",\n                Reporter.__method__ = e,\n                (0,\n                i.info)("App: " + e + " have been invoked");\n                try {\n                    n.apply(this, arguments)\n                } catch (t) {\n                    Reporter.thirdErrorReport({\n                        error: t,\n                        extend: "at App lifeCycleMethod " + e + " function"\n                    })\n                }\n            };\n            n[e] = o.bind(n)\n        });\n        for (var r in t)\n            !function(e) {\n                g(e) ? (0,\n                i.warn)("\u5173\u952e\u5b57\u4fdd\u62a4", "App\'s " + e + " is write-protected") : v(e) || ("[object Function]" === Object.prototype.toString.call(t[e]) ? n[e] = function() {\n                    var n;\n                    Reporter.__route__ = "App",\n                    Reporter.__method__ = e;\n                    try {\n                        n = t[e].apply(this, arguments)\n                    } catch (t) {\n                        Reporter.thirdErrorReport({\n                            error: t,\n                            extend: "at App " + e + " function"\n                        })\n                    }\n                    return n\n                }\n                .bind(n) : n[e] = t[e])\n            }(r);\n        this.onError && Reporter.registerErrorListener(this.onError);\n        var l = function() {\n            "hang" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mode && (f = !0);\n            var e = (0,\n            a.getCurrentPages)();\n            e.length && (e[e.length - 1].onHide(),\n            (0,\n            u.triggerAnalytics)("leavePage", e[e.length - 1], !0)),\n            this.onHide(),\n            (0,\n            u.triggerAnalytics)("background")\n        }\n          , h = function() {\n            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};\n            if (0 === e.scene || "0" === e.scene ? e.scene = c : c = e.scene,\n            e.query = e.query || {},\n            (0,\n            i.hasExitCondition)(e) && (p = !0),\n            this.onShow(e),\n            (0,\n            u.triggerAnalytics)("foreground"),\n            d || e.reLaunch)\n                d = !1;\n            else {\n                var t = (0,\n                a.getCurrentPages)();\n                t.length && (t[t.length - 1].onShow(),\n                (0,\n                u.triggerAnalytics)("enterPage", t[t.length - 1], !0))\n            }\n        };\n        if ("undefined" != typeof __wxConfig && __wxConfig) {\n            var y = __wxConfig.appLaunchInfo || {};\n            y.query = y.query || {},\n            c = y.scene,\n            (0,\n            i.hasExitCondition)(y) && (p = !0),\n            this.onLaunch(y),\n            (0,\n            u.triggerAnalytics)("launch"),\n            h.call(this, y)\n        } else\n            (0,\n            i.error)("App Launch Error", "Can not find __wxConfig");\n        wx.onAppEnterBackground(l.bind(this)),\n        wx.onAppEnterForeground(h.bind(this)),\n        _.call(this, "function" == typeof t.onPageNotFound)\n    }\n    return r(e, [{\n        key: "getCurrentPage",\n        value: function() {\n            (0,\n            i.warn)("\u5c06\u88ab\u5e9f\u5f03", "App.getCurrentPage is deprecated, please use getCurrentPages.");\n            var e = (0,\n            a.getCurrentPage)();\n            if (e)\n                return e.page\n        }\n    }]),\n    e\n}();\n'}),h.a.createElement("img",{style:{width:"100%"},src:n(416),alt:"png"}),h.a.createElement("img",{style:{width:"100%"},src:n(421),alt:"png"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u4f1a\u5f80App\u4e2d\u6ce8\u518c\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u6211\u4eec\u8fd9\u91cc\u6ce8\u518c\u7684\u662fonLaunch\u4e8b\u4ef6\uff0c\u8fd9\u91cc\u5bf9\u5e94\u7684\u662f\u5f53\u5c0f\u7a0b\u5e8f\u521d\u59cb\u5316\u65f6\u5019\u4f1a\u6267\u884c\u8fd9\u4e2a\u56de\u8c03\uff0c\u6240\u4ee5\u539f\u5219\u4e0a\u5e94\u8be5\u662fNative\u88c5\u5728\u6210\u529f\u540e\u4f1a\u6267\u884c\u8fd9\u4e2a\u51fd\u6570\uff0c\u8fd9\u91cc\u518d\u8be6\u7ec6\u70b9\u8bf4\u660e\u4e0bH5\u4e0eNative\u7684\u4ea4\u4e92\u6d41\u7a0b\uff08\u8fd9\u91cc\u662f\u6211\u4e4b\u524d\u505aHybrid\u6846\u67b6\u65f6\u5019\u8ddfNative\u540c\u4e8b\u7684\u4ea4\u4e92\u7ea6\u5b9a\uff0c\u5c0f\u7a0b\u5e8f\u5e94\u8be5\u5927\u540c\u5c0f\u5f02\uff09\uff1a"}),h.a.createElement(v.b,{content:"\n\u6211\u4eec\u4e00\u822c\u662f\u5728\u5168\u5c40\u4e0a\u4f1a\u6709\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4fdd\u5b58\u6240\u6709\u9700\u8981Native\u6267\u884c\u51fd\u6570\u7684\u5bf9\u8c61\uff0c\u6bd4\u5982\u8fd9\u91cc\u7684onLaunch\uff0cNative\u5728\u6267\u884c\u5230\u4e00\u4e2a\u72b6\u6001\u65f6\u5019\u4f1a\u8c03\u7528js\u5168\u5c40\u73af\u5883\u8be5\u5bf9\u8c61\u4e0a\u7684\u4e00\u4e2a\u51fd\u6570\n\u56e0\u4e3a\u6211\u4eecjs\u6ce8\u518cnative\u6267\u884c\u662f\u4ee5\u5b57\u7b26\u4e32key\u4f5c\u4e3a\u6807\u5fd7\uff0c\u6240\u4ee5Native\u6267\u884c\u7684\u65f6\u5019\u53ef\u80fd\u662fwindow.app['onLauch...']('\u53c2\u6570')\n\u800c\u6211\u4eec\u5728window\u5bf9\u8c61\u4e0a\u4f1a\u4f7f\u7528bind\u7684\u65b9\u5f0f\u5c06\u5bf9\u5e94\u7684\u4f5c\u7528\u57df\u73af\u5883\u4fdd\u7559\u4e0b\u6765\uff0c\u8fd9\u4e2a\u65f6\u5019\u6267\u884c\u7684\u903b\u8f91\u4fbf\u662f\u6b63\u786e\u7684\n"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u5728\u5c0f\u7a0b\u5e8f\u5168\u5c40\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684\u6807\u8bc6\uff0c\u8fd9\u91cc\u731c\u6d4b\u662f\u76f4\u63a5\u5728app\u5bf9\u8c61\u4e0a\uff0cNative\u4f1a\u76f4\u63a5\u6267\u884cAPP\u5bf9\u8c61\u4e0a\u9762\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u6211\u8fd9\u91cc\u6709\u4e2a\u7591\u95ee\u662fView\u7ea7\u522b\u5982\u679c\u60f3\u6ce8\u518c\u4e2a\u5168\u5c40\u4e8b\u4ef6\u8be5\u600e\u4e48\u505a\uff0c\u8fd9\u4e2a\u7559\u5230\u540e\u9762\u6765\u770b\u770b\u5427\uff0c\u8fd9\u91cc\u662fNative\u8f7d\u5165webview\u65f6\uff0c\u4f1a\u6267\u884c\u5bf9\u8c61\u5b9a\u4e49\u7684onLaunch\u4e8b\u4ef6\uff0c\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u770b\u5f97\u5230\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(422),alt:"png"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u4f1a\u7ed3\u5408app.json\u83b7\u53d6\u9996\u5148\u52a0\u8f7d\u9875\u9762\u7684\u4fe1\u606f\uff0c\u9ed8\u8ba4\u53d6pages\u6570\u7ec4\u7b2c\u4e00\u4e2a\uff0c\u4f46\u662f\u5177\u4f53\u54ea\u91cc\u83b7\u53d6\u548c\u8bbe\u7f6e\u7684\u4ee3\u7801\u6ca1\u6709\u627e\u5230\uff0c\u4e5f\u8ddf\u4e3b\u6d41\u7a0b\u65e0\u5173\uff0c\u6211\u4eec\u8fd9\u91cc\u5ffd\u7565......\u7136\u540e\u6211\u4eec\u770b\u5230\u4ee3\u7801\u6267\u884c\u4e86onShow\u903b\u8f91\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(423),alt:"png"}),h.a.createElement(v.e,{title:"\u7136\u540e\u6d41\u8f6c\u5230\u6ce8\u518c\u5fae\u4fe1\u5bb9\u5668\u5c42\u9762\u7684\u4e8b\u4ef6\uff0c\u6211\u89c9\u5f97\uff0c\u65e0\u8bba\u5982\u4f55\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f\u50cf\u5fae\u4fe1\u5bb9\u5668\u6ce8\u518c\u4e8b\u4ef6\u4e86\u5427\uff0c\u4f46\u662f\u6211\u627e\u4e0d\u5230\u5168\u5c40\u7684key\ud83d\ude14"}),h.a.createElement("img",{style:{width:"100%"},src:n(362),alt:"png"}),h.a.createElement("img",{style:{width:"100%"},src:n(363),alt:"png"}),h.a.createElement("img",{style:{width:"100%"},src:n(364),alt:"png"}),h.a.createElement(v.e,{style:{textIndent:0,fontWeight:700},title:"Page\u6d41\u7a0b"}),h.a.createElement(v.e,{title:"\u5982\u679c\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u540c\u5b66\uff0c\u9ebb\u70e6\u8fd9\u91cc\u6307\u70b9\u4e00\u4e0b\uff0c\u662f\u4e0d\u662f\u731c\u6d4b\u6b63\u786e\uff0c\u987a\u4fbf\u53ef\u4ee5\u5e2e\u5fd9\u8bf4\u660e\u4e0b\u8fd9\u91cc\uff0c\u8fd9\u91cc\u4e5f\u662f\u6211\u89c9\u5f97\u5168\u5c40key\uff0c\u88abNative\u8c03\u7528\u7684\u70b9\uff0c\u7136\u540e\uff0c\u903b\u8f91\u4e0a\u4f1a\u83b7\u53d6\u9ed8\u8ba4view\u7684\u7c7b\u5f00\u59cb\u505a\u5b9e\u4f8b\u5316\uff0c\u6211\u4eec\u8fd9\u91cc\u6765\u5230view\u7ea7\u522b\u4ee3\u7801\uff1a"}),h.a.createElement(v.b,{content:"//index.js\n//\u83b7\u53d6\u5e94\u7528\u5b9e\u4f8b\nconst app = getApp()\n\nPage({\n  data: {\n    motto: 'Hello Wor11ld',\n    userInfo: {},\n    hasUserInfo: false,\n    canIUse: wx.canIUse('button.open-type.getUserInfo')\n  },\n  //\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\n  bindViewTap: function() {\n    wx.navigateTo({\n      url: '../logs/logs'\n    })\n  },\n  onLoad: function () {\n    if (app.globalData.userInfo) {\n      this.setData({\n        userInfo: app.globalData.userInfo,\n        hasUserInfo: true\n      })\n    } else if (this.data.canIUse){\n      // \u7531\u4e8e getUserInfo \u662f\u7f51\u7edc\u8bf7\u6c42\uff0c\u53ef\u80fd\u4f1a\u5728 Page.onLoad \u4e4b\u540e\u624d\u8fd4\u56de\n      // \u6240\u4ee5\u6b64\u5904\u52a0\u5165 callback \u4ee5\u9632\u6b62\u8fd9\u79cd\u60c5\u51b5\n      app.userInfoReadyCallback = res => {\n        this.setData({\n          userInfo: res.userInfo,\n          hasUserInfo: true\n        })\n      }\n    } else {\n      // \u5728\u6ca1\u6709 open-type=getUserInfo \u7248\u672c\u7684\u517c\u5bb9\u5904\u7406\n      wx.getUserInfo({\n        success: res => {\n          app.globalData.userInfo = res.userInfo\n          this.setData({\n            userInfo: res.userInfo,\n            hasUserInfo: true\n          })\n        }\n      })\n    }\n  },\n  getUserInfo: function(e) {\n    console.log(e)\n    app.globalData.userInfo = e.detail.userInfo\n    this.setData({\n      userInfo: e.detail.userInfo,\n      hasUserInfo: true\n    })\n  }\n})\n"}),h.a.createElement(v.e,{title:"\u4ed6\u9996\u5148\u4e00\u6765\u4fbf\u83b7\u53d6\u4e86\u5f53\u524dapp\u5b9e\u4f8b\uff1a"}),h.a.createElement(v.b,{content:"\nconst app = getApp()\n"}),h.a.createElement(v.e,{title:"\u5176\u6b21\u5f00\u59cb\u4e86view\u5b9e\u4f8b\u5316\u6d41\u7a0b\uff0c\u8fd9\u4e2a\u662fPage\u7684\u7c7b\u5165\u53e3\uff0c\u5927\u5bb6\u8981\u6ce8\u610fview.js\u53ea\u662f\u5b9a\u4e49\u7684\u7c7b\uff0c\u4f46\u662f\u5176\u5b9e\u4f8b\u5316\u5e94\u8be5\u5728\u5168\u5c40\u7684\u63a7\u5236\u5668\uff0c\u5176\u5b9e\u4f8b\u5316\u5728\u8fd9\u91cc\u5b8c\u6210\u7684\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(365),alt:"png"}),h.a.createElement("img",{style:{width:"100%"},src:n(366),alt:"png"}),h.a.createElement(v.e,{title:"Page\u5b9e\u4f8b\u5316\u540e\u4f1a\u81ea\u5df1\u6267\u884conLoad\u4ee5\u53caonShow\uff0c\u4f46\u662f\u8fd9\u91cc\u7684onLoad\u4ee5\u53caonShow\u5c31\u770b\u4e0d\u51fa\u6765\u5206\u522b\u4e86"}),h.a.createElement("img",{style:{width:"100%"},src:n(367),alt:"png"}),h.a.createElement(v.c,{title:"\u603b\u7ed3"}),h.a.createElement(v.e,{title:"\u6211\u4eec\u8fd9\u91cc\u4e00\u8d77\u778e\u5b50\u6478\u8c61\u4e00\u822c\u5bf9\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u67b6\u6784\u505a\u4e86\u7b80\u5355\u7684\u6478\u7d22\uff0c\u8fd9\u91cc\u53d1\u73b0\u4e8b\u5b9e\u4e0a\u5c0f\u7a0b\u5e8f\u6d41\u7a0b\u4e0e\u81ea\u5df1\u6240\u60f3\u6709\u4e00\u4e9b\u51fa\u5165\uff0c\u8fd9\u91cc\u521d\u6b65\u8ba4\u4e3a\u6d41\u7a0b\u662f\u8fd9\u6837\u7684\uff1a"}),h.a.createElement(v.e,{title:"\u2460 \u6211\u4eec\u5199\u597d\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u540e\uff0c\u63d0\u4ea4\u4ee3\u7801"}),h.a.createElement(v.e,{title:"\u2461 \u5728\u53d1\u5e03\u6d41\u7a0b\u4e2d\u6211\u4eec\u7684\u4ee3\u7801\u7ecf\u8fc7\u6784\u5efa\u6d41\u7a0b\uff0capp.json\u4ee5\u53ca\u5165\u53e3\u7684index.html\uff08\u4f2a\u9020\u9875\u9762\uff09\uff0c\u91cd\u65b0\u7ec4\u88c5\u4e3a\u4e00\u4e2a\u53ea\u6709js\u4ee3\u7801\u7684\u7a7a\u9875\u9762"}),h.a.createElement(v.e,{title:"\u2462 \u8fd9\u91cc\u5f00\u59cb\u8f7d\u5165\u6d41\u7a0b\uff0c\u7528\u6237\u70b9\u51fb\u4e00\u4e2a\u5fae\u4fe1\u6309\u94ae\uff0c\u8fdb\u5165\u5c0f\u7a0b\u5e8f"}),h.a.createElement(v.e,{title:"\u2463 \u5fae\u4fe1\u5bb9\u5668\u5f00\u542fHybrid\u5bb9\u5668\uff0cwebview\u8f7d\u5165\u5165\u53e3\u9875\u9762\uff08\u6211\u611f\u89c9\u5e94\u8be5\u6709\u4e2a\u89c4\u5219\u53ef\u4ee5\u901a\u8fc7url\u53bb\u6253\u5f00\u56fa\u5b9a\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\uff0c\u8fd9\u91cc\u540e\u7eed\u78b0\u5230\u5f00\u53d1\u6848\u4f8b\u518d\u8bf4\uff09"}),h.a.createElement(v.e,{title:"\u2464 webview\u6267\u884c\u73af\u5883\u5b9e\u4f8b\u5316App\uff0c\u5176\u540e\u81ea\u52a8\u88c5\u8f7d\u9ed8\u8ba4Page\uff08\u8fd9\u91cc\u9ed8\u8ba4\u662findex\uff09"}),h.a.createElement(v.e,{title:"PS\uff1a\u8fd9\u91cc\u6211\u6709\u4e2a\u5f88\u7591\u60d1\u7684\u70b9\uff0c\u5fae\u4fe1Native\u5bb9\u5668\u7684\u5404\u4e2a\u4e8b\u4ef6\u70b9\u4ec0\u4e48\u65f6\u5019\u6267\u884c\uff0c\u7531\u8c01\u6267\u884c\uff1f"}),h.a.createElement(v.e,{title:"\u2465 \u8fdb\u5165\u9875\u9762\u6e32\u67d3\u903b\u8f91"}),h.a.createElement(v.e,{title:"\u2466 ......"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u6211\u8fd8\u6bd4\u8f83\u5728\u610f\uff0c\u6267\u884c\u4e8b\u4ef6\u540e\uff0c\u5bf9\u5e94Native\u9875\u9762\u662f\u5982\u4f55\u8fdb\u884c\u66f4\u65b0\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u8fd9\u91cc\u5173\u6ce8\u4e0b\u8fd9\u6bb5\u4ee3\u7801\uff1a"}),h.a.createElement(v.b,{content:"\ndebugger;\nthis.setData({\n  userInfo: app.globalData.userInfo,\n  hasUserInfo: true\n})\n"}),h.a.createElement("img",{style:{width:"100%"},src:n(368),alt:"png"}),h.a.createElement(v.e,{title:"\u8fd9\u91cc\u51fa\u73b0\u4e86\u4e00\u6bb5\u975e\u5e38\u5173\u952e\u7684\u4ee3\u7801\uff1a"}),h.a.createElement("img",{style:{width:"100%"},src:n(369),alt:"png"}),h.a.createElement("img",{style:{width:"100%"},src:n(370),alt:"png"}),h.a.createElement(v.e,{title:"\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u8fd9\u91cc\u5f80\u5fae\u4fe1\u5bb9\u5668\u6ce8\u518c\u4e86\u4e00\u4e2aappDataChange\u7684\u5f02\u6b65\u4e8b\u4ef6\uff0c\u800c\u8fd9\u4e2a\u65f6\u5019\u5c31\u5c06\u6240\u6709\u7684\u903b\u8f91\u4ea4\u7ed9\u4e86Native\u672c\u8eab\uff0cNative\u6267\u884c\u7ed3\u675f\u540e\u4f1a\u6839\u636ewebviewIds\u627e\u5230\u540e\u7eed\u8981\u6267\u884c\u7684\u56de\u8c03\u7ee7\u7eed\u6267\u884c\u3002"}),h.a.createElement("img",{style:{width:"100%"},src:n(371),alt:"png"}),h.a.createElement(v.e,{title:"\u81f3\u4e8e\uff0c\u5bb9\u5668\u5982\u4f55\u4f7f\u7528webviewId\u627e\u5230\u5bf9\u5e94\u51fd\u6570\u7684\u4ee3\u7801\uff0c\u6211\u6ca1\u6709\u627e\u5230\u3002\u81f3\u6b64\uff0c\u6211\u4eec\u5bf9\u5c0f\u7a0b\u5e8f\u7ed3\u6784\u7684\u521d\u6b65\u63a2\u7d22\u4fbf\u7ed3\u675f\u4e86"})))}}]),r}(h.a.Component);t.default=w}}]);