(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{171:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(65),i=(0,n(25).createHashHistory)();e.a=class extends r.Component{render(){return o.a.createElement("div",null,o.a.createElement(a.f,{mode:"light",icon:"#/Home"===window.location.hash?"":o.a.createElement(a.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?()=>{}:()=>{i.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}},174:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},175:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(86))},176:function(t,e,n){t.exports=n(221)},177:function(t,e,n){var r=n(174);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},178:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},188:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},189:function(t,e){t.exports={}},190:function(t,e,n){var r=n(175),o=n(209),a=n(178),i=n(210),c=n(195),u=n(219),l=o("wks"),f=r.Symbol,s=u?f:f&&f.withoutSetter||i;t.exports=function(t){return a(l,t)||(c&&a(f,t)?l[t]=f[t]:l[t]=s("Symbol."+t)),l[t]}},191:function(t,e,n){var r=n(177),o=n(202),a=n(192);t.exports=r?function(t,e,n){return o.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},192:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},193:function(t,e,n){var r=n(188);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},194:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},195:function(t,e,n){var r=n(174);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},196:function(t,e,n){var r=n(174),o=n(194),a="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},197:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},198:function(t,e,n){var r=n(177),o=n(174),a=n(214);t.exports=!r&&!o(function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a})},199:function(t,e,n){var r=n(226);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},200:function(t,e,n){"use strict";var r=n(175),o=n(204).f,a=n(225),i=n(189),c=n(199),u=n(191),l=n(178),f=function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var n,s,p,m,v,y,d,h,E=t.target,x=t.global,b=t.stat,g=t.proto,w=x?r:b?r[E]:(r[E]||{}).prototype,S=x?i:i[E]||(i[E]={}),j=S.prototype;for(p in e)n=!a(x?p:E+(b?".":"#")+p,t.forced)&&w&&l(w,p),v=S[p],n&&(y=t.noTargetGet?(h=o(w,p))&&h.value:w[p]),m=n&&y?y:e[p],n&&typeof v===typeof m||(d=t.bind&&n?c(m,r):t.wrap&&n?f(m):g&&"function"==typeof m?c(Function.call,m):m,(t.sham||m&&m.sham||v&&v.sham)&&u(d,"sham",!0),S[p]=d,g&&(l(i,s=E+"Prototype")||u(i,s,{}),i[s][p]=m,t.real&&j&&!j[p]&&u(j,p,m)))}},201:function(t,e,n){var r=n(196),o=n(197);t.exports=function(t){return r(o(t))}},202:function(t,e,n){var r=n(177),o=n(198),a=n(203),i=n(193),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(a(t),e=i(e,!0),a(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},203:function(t,e,n){var r=n(188);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},204:function(t,e,n){var r=n(177),o=n(213),a=n(192),i=n(201),c=n(193),u=n(178),l=n(198),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=i(t),e=c(e,!0),l)try{return f(t,e)}catch(n){}if(u(t,e))return a(!o.f.call(t,e),t[e])}},205:function(t,e,n){var r=n(199),o=n(196),a=n(206),i=n(215),c=n(227),u=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,f=4==t,s=6==t,p=5==t||s;return function(m,v,y,d){for(var h,E,x=a(m),b=o(x),g=r(v,y,3),w=i(b.length),S=0,j=d||c,A=e?j(m,w):n?j(m,0):void 0;w>S;S++)if((p||S in b)&&(E=g(h=b[S],S,x),t))if(e)A[S]=E;else if(E)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:u.call(A,h)}else if(f)return!1;return s?-1:l||f?f:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},206:function(t,e,n){var r=n(197);t.exports=function(t){return Object(r(t))}},207:function(t,e){t.exports=!0},208:function(t,e,n){var r=n(189),o=n(175),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(r[t])||a(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},209:function(t,e,n){var r=n(207),o=n(218);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},210:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},211:function(t,e,n){var r=n(177),o=n(174),a=n(178),i=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var n=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:u,s=a(e,1)?e[1]:void 0;return c[t]=!!n&&!o(function(){if(l&&!r)return!0;var t={length:-1};l?i(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,f,s)})}},212:function(t,e,n){var r=n(189);t.exports=function(t){return r[t+"Prototype"]}},213:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);e.f=a?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},214:function(t,e,n){var r=n(175),o=n(188),a=r.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},215:function(t,e,n){var r=n(216),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},216:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},217:function(t,e,n){var r=n(194);t.exports=Array.isArray||function(t){return"Array"==r(t)}},218:function(t,e,n){var r=n(175),o=n(228),a=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=a},219:function(t,e,n){var r=n(195);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},220:function(t,e,n){var r=n(174),o=n(190),a=n(229),i=o("species");t.exports=function(t){return a>=51||!r(function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},221:function(t,e,n){var r=n(222);t.exports=r},222:function(t,e,n){var r=n(223),o=Array.prototype;t.exports=function(t){var e=t.map;return t===o||t instanceof Array&&e===o.map?r:e}},223:function(t,e,n){n(224);var r=n(212);t.exports=r("Array").map},224:function(t,e,n){"use strict";var r=n(200),o=n(205).map,a=n(220),i=n(211),c=a("map"),u=i("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},225:function(t,e,n){var r=n(174),o=/#|\.prototype\./,a=function(t,e){var n=c[i(t)];return n==l||n!=u&&("function"==typeof e?r(e):!!e)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},226:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},227:function(t,e,n){var r=n(188),o=n(217),a=n(190)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},228:function(t,e,n){var r=n(175),o=n(191);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},229:function(t,e,n){var r,o,a=n(175),i=n(230),c=a.process,u=c&&c.versions,l=u&&u.v8;l?o=(r=l.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},230:function(t,e,n){var r=n(208);t.exports=r("navigator","userAgent")||""},231:function(t,e,n){},447:function(t,e,n){"use strict";n.r(e);var r=n(176),o=n.n(r),a=n(0),i=n.n(a),c=n(171),u=(n(231),n(65));e.default=class extends i.a.Component{constructor(){super(),this.state={foundationtypeData:[{title:"\u5e03\u5c14\u503c"},{title:"\u6570\u5b57"},{title:"\u5b57\u7b26\u4e32"},{title:"\u6570\u7ec4"},{title:"\u5143\u7ec4"},{title:"\u679a\u4e3e"},{title:"Any"},{title:"Void"},{title:"Null \u548c Undefined"},{title:"Never"},{title:"Object"}],interfaceData:[{title:"\u57fa\u672c"},{title:"\u53ef\u9009\u5c5e\u6027"},{title:"\u4efb\u610f\u5c5e\u6027"},{title:"\u53ea\u8bfb\u5c5e\u6027"}],classData:[{title:"public private \u548c protected"},{title:"\u62bd\u8c61\u7c7b"},{title:"\u7c7b\u7684\u7c7b\u578b"}],functionData:[{title:"\u51fd\u6570\u58f0\u660e"},{title:"\u51fd\u6570\u8868\u8fbe\u5f0f"},{title:"\u7528\u63a5\u53e3\u5b9a\u4e49\u51fd\u6570\u7684\u5f62\u72b6"},{title:"\u53ef\u9009\u53c2\u6570"},{title:"\u53c2\u6570\u9ed8\u8ba4\u503c"},{title:"\u5269\u4f59\u53c2\u6570"},{title:"\u91cd\u8f7d"}],genericsData:[{title:"\u57fa\u672c"},{title:"\u591a\u4e2a\u7c7b\u578b\u53c2\u6570"},{title:"\u6cdb\u578b\u7ea6\u675f"},{title:"\u6cdb\u578b\u63a5\u53e3"},{title:"\u6cdb\u578b\u7c7b"},{title:"\u6cdb\u578b\u53c2\u6570\u7684\u9ed8\u8ba4\u7c7b\u578b"}],otherData:[{title:"\u7c7b\u578b\u65ad\u8a00"},{title:"\u58f0\u660e\u6587\u4ef6"},{title:"\u679a\u4e3e"},{title:"\u58f0\u660e\u5408\u5e76"},{title:"\u88c5\u9970\u5668"}]}}render(){var t,e,n,r,a;return i.a.createElement(c.a,null,i.a.createElement("div",{className:"level2"},i.a.createElement("div",{className:"_desc"},i.a.createElement("h2",null,"TypeScript"),i.a.createElement("p",null,"TypeScript \u662f JavaScript \u7684\u7c7b\u578b\u7684\u8d85\u96c6\uff0c\u5b83\u53ef\u4ee5\u7f16\u8bd1\u6210\u7eaf JavaScript\u3002\u7f16\u8bd1\u51fa\u6765\u7684 JavaScript \u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u4f55\u6d4f\u89c8\u5668\u4e0a\u3002TypeScript \u7f16\u8bd1\u5de5\u5177\u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u4f55\u670d\u52a1\u5668\u548c\u4efb\u4f55\u7cfb\u7edf\u4e0a\u3002TypeScript \u662f\u5f00\u6e90\u7684\u3002")),i.a.createElement("main",null,i.a.createElement("div",null,i.a.createElement(u.a,{defaultActiveKey:"0",className:"my-accordion"},i.a.createElement(u.a.Panel,{header:"\u6570\u636e\u7c7b\u578b"},i.a.createElement(u.e,{className:"my-list"},o()(t=this.state.foundationtypeData).call(t,(t,e)=>i.a.createElement(u.e.Item,{key:e},t.title)))))),i.a.createElement("div",null,i.a.createElement(u.a,{defaultActiveKey:"0",className:"my-accordion"},i.a.createElement(u.a.Panel,{header:"\u63a5\u53e3"},i.a.createElement(u.e,{className:"my-list"},o()(e=this.state.interfaceData).call(e,(t,e)=>i.a.createElement(u.e.Item,{key:e},t.title)))))),i.a.createElement("div",null,i.a.createElement(u.a,{defaultActiveKey:"0",className:"my-accordion"},i.a.createElement(u.a.Panel,{header:"\u51fd\u6570"},i.a.createElement(u.e,{className:"my-list"},o()(n=this.state.functionData).call(n,(t,e)=>i.a.createElement(u.e.Item,{key:e},t.title)))))),i.a.createElement("div",null,i.a.createElement(u.a,{defaultActiveKey:"0",className:"my-accordion"},i.a.createElement(u.a.Panel,{header:"\u6cdb\u578b"},i.a.createElement(u.e,{className:"my-list"},o()(r=this.state.genericsData).call(r,(t,e)=>i.a.createElement(u.e.Item,{key:e},t.title)))))),i.a.createElement("div",null,i.a.createElement(u.a,{defaultActiveKey:"0",className:"my-accordion"},i.a.createElement(u.a.Panel,{header:"\u5176\u4ed6"},i.a.createElement(u.e,{className:"my-list"},o()(a=this.state.otherData).call(a,(t,e)=>i.a.createElement(u.e.Item,{key:e},t.title)))))))))}}}}]);