(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{323:function(e,t,n){var r=n(23);e.exports=function(e){return r[e+"Prototype"]}},324:function(e,t,n){e.exports=n(326)},325:function(e,t,n){"use strict";var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),l=n.n(c),s=n(50),u=n.n(s),f=n(58),p=n.n(f),d=n(37),m=n.n(d),g=n(0),y=n.n(g),E=n(113),h=(0,n(38).createHashHistory)();function v(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var x=function(e){u()(n,e);var t=v(n);function n(){return i()(this,n),t.apply(this,arguments)}return l()(n,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement(E.f,{mode:"light",icon:"#/Home"===window.location.hash?"":y.a.createElement(E.d,{type:"left"}),onLeftClick:"#/Home"===window.location.hash?function(){}:function(){h.go(-1)}},"\u524d\u7aef\u7b14\u8bb0"),this.props.children)}}]),n}(g.Component);t.a=x},326:function(e,t,n){var r=n(327);e.exports=r},327:function(e,t,n){var r=n(328),a=Array.prototype;e.exports=function(e){var t=e.map;return e===a||e instanceof Array&&t===a.map?r:t}},328:function(e,t,n){n(329);var r=n(323);e.exports=r("Array").map},329:function(e,t,n){"use strict";var r=n(24),a=n(156).map;r({target:"Array",proto:!0,forced:!n(155)("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},330:function(e,t,n){"use strict";n.d(t,"a",function(){return _}),n.d(t,"g",function(){return P}),n.d(t,"c",function(){return N}),n.d(t,"e",function(){return H}),n.d(t,"b",function(){return K}),n.d(t,"d",function(){return D}),n.d(t,"f",function(){return q});var r=n(19),a=n.n(r),o=n(331),i=n.n(o),c=n(335),l=n.n(c),s=n(338),u=n.n(s),f=n(343),p=n.n(f),d=n(347),m=n.n(d),g=n(352),y=n.n(g),E=n(48),h=n.n(E),v=n(49),x=n.n(v),k=n(50),b=n.n(k),w=n(58),T=n.n(w),A=n(37),j=n.n(A),S=n(324),C=n.n(S),O=n(0),G=n.n(O),R=n(354);n(353);function I(e,t){var n=i()(e);if(l.a){var r=l()(e);t&&(r=u()(r).call(r,function(t){return p()(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(t){y()(e,t,n[t])}):m.a?Object.defineProperties(e,m()(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,p()(n,t))})}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var o=j()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return T()(this,n)}}var _=function(e){b()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.title,r=e.containerStyle,a=e.titleStyle;return G.a.createElement("div",{className:"blockComponent",style:r},G.a.createElement(R.a,{to:t},G.a.createElement("p",{style:a},n)))}}]),n}(G.a.Component),P=function(e){b()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return G.a.createElement("h3",{style:{fontSize:"24px",textAlign:"center",lineHeight:"36px",marginTop:"10px"}},this.props.title)}}]),n}(G.a.Component),N=function(e){b()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return G.a.createElement("div",{className:"label"},G.a.createElement("p",null,G.a.createElement("i",{className:"Lborder"})," ",this.props.title))}}]),n}(G.a.Component),H=function(e){b()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return G.a.createElement("section",{className:"paragraph",style:W({textIndent:"2em",margin:"10px 0",lineHeight:"26px"},this.props.style)},this.props.title)}}]),n}(G.a.Component),K=function(e){b()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){return G.a.createElement("div",{className:"highlight",style:{color:"#ddd"}},G.a.createElement("pre",null,this.props.content))}}]),n}(G.a.Component),D=function(e){b()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){var e;return G.a.createElement("div",{className:"listItem"},G.a.createElement("ul",null,C()(e=this.props.list).call(e,function(e,t){return G.a.createElement("li",{key:t},e)})))}}]),n}(G.a.Component),q=function(e){b()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return x()(n,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.data;return G.a.createElement("div",{className:"renderTable"},G.a.createElement("table",null,G.a.createElement("thead",null,G.a.createElement("tr",null,C()(t).call(t,function(e,t){return G.a.createElement("th",{key:t},e)}))),G.a.createElement("tbody",null,C()(n).call(n,function(e,t){return G.a.createElement("tr",{key:t},C()(e).call(e,function(e,t){return G.a.createElement("td",{key:t},e)}))}))))}}]),n}(G.a.Component)},331:function(e,t,n){e.exports=n(332)},332:function(e,t,n){var r=n(333);e.exports=r},333:function(e,t,n){n(334);var r=n(23);e.exports=r.Object.keys},334:function(e,t,n){var r=n(24),a=n(40),o=n(114);r({target:"Object",stat:!0,forced:n(13)(function(){o(1)})},{keys:function(e){return o(a(e))}})},335:function(e,t,n){e.exports=n(336)},336:function(e,t,n){var r=n(337);e.exports=r},337:function(e,t,n){n(160);var r=n(23);e.exports=r.Object.getOwnPropertySymbols},338:function(e,t,n){e.exports=n(339)},339:function(e,t,n){var r=n(340);e.exports=r},340:function(e,t,n){var r=n(341),a=Array.prototype;e.exports=function(e){var t=e.filter;return e===a||e instanceof Array&&t===a.filter?r:t}},341:function(e,t,n){n(342);var r=n(323);e.exports=r("Array").filter},342:function(e,t,n){"use strict";var r=n(24),a=n(156).filter;r({target:"Array",proto:!0,forced:!n(155)("filter")},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},343:function(e,t,n){e.exports=n(344)},344:function(e,t,n){var r=n(345);e.exports=r},345:function(e,t,n){n(346);var r=n(23).Object,a=e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)};r.getOwnPropertyDescriptor.sham&&(a.sham=!0)},346:function(e,t,n){var r=n(24),a=n(13),o=n(39),i=n(112).f,c=n(25),l=a(function(){i(1)});r({target:"Object",stat:!0,forced:!c||l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},347:function(e,t,n){e.exports=n(348)},348:function(e,t,n){var r=n(349);e.exports=r},349:function(e,t,n){n(350);var r=n(23);e.exports=r.Object.getOwnPropertyDescriptors},350:function(e,t,n){var r=n(24),a=n(25),o=n(351),i=n(39),c=n(112),l=n(159);r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),a=c.f,s=o(r),u={},f=0;s.length>f;)void 0!==(n=a(r,t=s[f++]))&&l(u,t,n);return u}})},351:function(e,t,n){var r=n(51),a=n(115),o=n(161),i=n(41);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},352:function(e,t,n){var r=n(158);e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},353:function(e,t,n){},354:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(26),l=n.n(c),s=n(38),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=f(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(s.createLocation)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",u({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);d.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=d},511:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n.n(r),o=n(48),i=n.n(o),c=n(49),l=n.n(c),s=n(50),u=n.n(s),f=n(58),p=n.n(f),d=n(37),m=n.n(d),g=n(0),y=n.n(g),E=n(325),h=n(330);function v(e){var t=function(){if("undefined"===typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(a()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=a()(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var x=function(e){u()(n,e);var t=v(n);function n(){return i()(this,n),t.apply(this,arguments)}return l()(n,[{key:"render",value:function(){return y.a.createElement(E.a,null,y.a.createElement("div",{style:{padding:"0 10px"}},y.a.createElement(h.g,{title:"redux-saga\u7b80\u660e\u5b66\u4e60"}),y.a.createElement(h.c,{title:"\u6982\u5ff5"}),y.a.createElement(h.e,{title:"redux-saga \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f Side Effect\uff08\u526f\u4f5c\u7528\uff0c\u4f8b\u5982\u5f02\u6b65\u83b7\u53d6\u6570\u636e\uff0c\u8bbf\u95ee\u6d4f\u89c8\u5668\u7f13\u5b58\u7b49\uff09\u7684 library\uff0c\u5b83\u7684\u76ee\u6807\u662f\u8ba9\u526f\u4f5c\u7528\u7ba1\u7406\u66f4\u5bb9\u6613\uff0c\u6267\u884c\u66f4\u9ad8\u6548\uff0c\u6d4b\u8bd5\u66f4\u7b80\u5355\uff0c\u5728\u5904\u7406\u6545\u969c\u65f6\u66f4\u5bb9\u6613\u3002"}),y.a.createElement(h.e,{title:"redux-saga\u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406redux\u5e94\u7528\u5f02\u6b65\u64cd\u4f5c\u7684\u4e2d\u95f4\u4ef6\uff0credux-saga\u901a\u8fc7\u521b\u5efasagas\u5c06\u6240\u6709\u5f02\u6b65\u64cd\u4f5c\u903b\u8f91\u6536\u96c6\u5728\u4e00\u4e2a\u5730\u65b9\u96c6\u4e2d\u5904\u7406\uff0c\u53ef\u4ee5\u7528\u6765\u4ee3\u66ffredux-thunk\u4e2d\u95f4\u4ef6\u3002"}),y.a.createElement(h.e,{title:"\u8fd9\u610f\u5473\u7740\u5e94\u7528\u7684\u903b\u8f91\u4f1a\u5b58\u5728\u4e24\u4e2a\u5730\u65b9"}),y.a.createElement(h.e,{title:"(1) reducer\u8d1f\u8d23\u5904\u7406action\u7684stage\u66f4\u65b0"}),y.a.createElement(h.e,{title:"(2) sagas\u8d1f\u8d23\u534f\u8c03\u90a3\u4e9b\u590d\u6742\u6216\u8005\u5f02\u6b65\u7684\u64cd\u4f5c"}),y.a.createElement(h.e,{title:"sagas\u662f\u901a\u8fc7generator\u51fd\u6570\u6765\u521b\u5efa\u7684"}),y.a.createElement(h.e,{title:"sagas\u53ef\u4ee5\u88ab\u770b\u4f5c\u662f\u5728\u540e\u53f0\u8fd0\u884c\u7684\u8fdb\u7a0b\u3002sagas\u76d1\u542c\u53d1\u8d77\u7684action\uff0c\u7136\u540e\u51b3\u5b9a\u57fa\u4e8e\u8fd9\u4e2aaction\u6765\u505a\u4ec0\u4e48 (\u6bd4\u5982\uff1a\u662f\u53d1\u8d77\u4e00\u4e2a\u5f02\u6b65\u8bf7\u6c42\uff0c\u8fd8\u662f\u53d1\u8d77\u5176\u4ed6\u7684action\u5230store\uff0c\u8fd8\u662f\u8c03\u7528\u5176\u4ed6\u7684sagas \u7b49 )"}),y.a.createElement(h.e,{title:"\u5728redux-saga\u7684\u4e16\u754c\u91cc\uff0c\u6240\u6709\u7684\u4efb\u52a1\u90fd\u901a\u8fc7\u7528 yield Effects \u6765\u5b8c\u6210 ( effect\u53ef\u4ee5\u770b\u4f5c\u662fredux-saga\u7684\u4efb\u52a1\u5355\u5143 )"}),y.a.createElement(h.e,{title:"Effects \u90fd\u662f\u7b80\u5355\u7684 javascript\u5bf9\u8c61\uff0c\u5305\u542b\u4e86\u8981\u88ab saga middleware \u6267\u884c\u7684\u4fe1\u606f"}),y.a.createElement(h.e,{title:"redux-saga \u4e3a\u5404\u9879\u4efb\u52a1\u63d0\u4f9b\u4e86\u5404\u79cd \uff08 Effects\u521b\u5efa\u5668 )"}),y.a.createElement(h.e,{title:"redux-saga \u4e3a\u5404\u9879\u4efb\u52a1\u63d0\u4f9b\u4e86\u5404\u79cd \uff08 Effects\u521b\u5efa\u5668 )"}),y.a.createElement(h.e,{title:"\u56e0\u4e3a\u4f7f\u7528\u4e86generator\u51fd\u6570\uff0credux-saga\u8ba9\u4f60\u53ef\u4ee5\u7528 \u540c\u6b65\u7684\u65b9\u5f0f\u6765\u5199\u5f02\u6b65\u4ee3\u7801"}),y.a.createElement(h.e,{title:"redux-saga\u542f\u52a8\u7684\u4efb\u52a1\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u901a\u8fc7\u624b\u52a8\u6765\u53d6\u6d88\uff0c\u4e5f\u53ef\u4ee5\u628a\u4efb\u52a1\u548c\u5176\u4ed6\u7684Effects\u653e\u5230 race \u65b9\u6cd5\u91cc\u4ee5\u81ea\u52a8\u53d6\u6d88"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"\u5b89\u88c5"}),y.a.createElement(h.b,{content:"yarn add redux-saga \n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"\u914d\u7f6e"}),y.a.createElement(h.b,{content:"store.js\n\nimport {createStore,combineReducers, applyMiddleware} from 'redux';\nimport userNameReducer from '../username/reducer.js';\nimport createSagaMiddleware from 'redux-saga';       // \u5f15\u5165redux-saga\u4e2d\u7684createSagaMiddleware\u51fd\u6570\nimport rootSaga from './saga.js';                    // \u5f15\u5165saga.js\n\nconst sagaMiddleware = createSagaMiddleware()        // \u6267\u884c\n\nconst reducerAll = {\n    userNameReducer: userNameReducer\n}\n\n\nexport const store = createStore(\n    combineReducers({...reducerAll}),               // \u5408\u5e76reducer\n    window.devToolsExtension ? window.devToolsExtension() : undefined,    // dev-tools\n    applyMiddleware(sagaMiddleware)                 // \u4e2d\u95f4\u4ef6\uff0c\u52a0\u8f7dsagaMiddleware\n)\n\nsagaMiddleware.run(rootSaga)                        // \u6267\u884crootSaga\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"ui\u7ec4\u4ef6\u89e6\u53d1action\u521b\u5efa\u51fd\u6570"}),y.a.createElement(h.b,{content:"username.js\n\nimport React from 'react';\n\nexport default class User extends React.Component {\n    componentDidMount() {\n        console.log(this.props)\n    }\n    go = () => {\n        this.props.getAges(3)           // \u53d1\u8d77action\uff0c\u4f20\u5165\u53c2\u6570\n    }\n    render() {\n        return (\n            <div>\n                \u8fd9\u662fusername\u7ec4\u4ef6\n                <div>\n                    {\n                        this.props.username.userNameReducer.username\n                    }\n                </div>\n                <br/>\n                <div onClick={this.go}>\n                    \u70b9\u51fb\u83b7\u53d6\u63d0\u4ea4age\n                </div>\n            </div>\n        )\n    }\n}\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"action\u521b\u5efa\u51fd\u6570\uff0c\u8fd4\u56deaction ----\x3e \u4f20\u5165saga ( \u5982\u679c\u6ca1\u6709saga,\u5c31\u8be5\u4f20\u5165reducer )"}),y.a.createElement(h.b,{content:"action.js\n\nimport { actionTypes } from './constant.js';\n\nexport function getAges(age) {\n    console.log(age,'age') // 3\n    return {\n        type: actionTypes.GET_AGE,\n        payload: age\n    }\n}\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"saga.js ------\x3e \u6355\u83b7action\u521b\u5efa\u51fd\u6570\u8fd4\u56de\u7684action"}),y.a.createElement(h.b,{content:"saga.js\n\nimport { actionTypes } from '../username/constant.js';\nimport {call, put, takeEvery} from 'redux-saga/effects';     // \u5f15\u5165\u76f8\u5173\u51fd\u6570\n\nfunction* goAge(action){    // \u53c2\u6570\u662faction\u521b\u5efa\u51fd\u6570\u8fd4\u56de\u7684action\n    console.log(action)\n    const p = function() {\n        return fetch(`http://image.baidu.com/channel/listjson?rn=${action.payload}...`,{\n            method: 'GET'\n        })\n        .then(res => res.json())\n        .then(res => {\n            console.log(res)\n            return res\n        })\n    }\n    const res = yield call(p)    // \u6267\u884cp\u51fd\u6570\uff0c\u8fd4\u56de\u503c\u8d4b\u503c\u7ed9res\n\n    yield put({      // dispatch\u4e00\u4e2aaction\u5230reducer\uff0c payload\u662f\u8bf7\u6c42\u8fd4\u56de\u7684\u6570\u636e\n        type: actionTypes.GET_AGE_SUCCESS,\n        payload: res   \n    })\n}\n\nfunction* rootSaga() {     // \u5728store.js\u4e2d\uff0c\u6267\u884c\u4e86 sagaMiddleware.run(rootSaga)\n    yield takeEvery(actionTypes.GET_AGE, goAge)   // \u5982\u679c\u6709\u5bf9\u5e94type\u7684action\u89e6\u53d1\uff0c\u5c31\u6267\u884cgoAge()\u51fd\u6570\n}\n\nexport default rootSaga;      // \u5bfc\u51farootSaga\uff0c\u88abstore.js\u6587\u4ef6import\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"\u7136\u540e\u7531ui\u7ec4\u4ef6\u4ecereducer\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u5e76\u663e\u793a\u3002\u3002\u3002"}),y.a.createElement(h.c,{title:"\u6982\u5ff5\u89e3\u91ca"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"Effect"}),y.a.createElement(h.e,{title:"\u4e00\u4e2aeffect\u5c31\u662f\u4e00\u4e2a\u7eaf\u6587\u672cjavascript\u5bf9\u8c61\uff0c\u5305\u542b\u4e00\u4e9b\u5c06\u88absaga middleware\u6267\u884c\u7684\u6307\u4ee4\u3002"}),y.a.createElement(h.e,{title:"\u5982\u4f55\u521b\u5efa effect ?"}),y.a.createElement(h.e,{title:"\u4f7f\u7528redux-saga\u63d0\u4f9b\u7684 \u5de5\u5382\u51fd\u6570 \u6765\u521b\u5efaeffect"}),y.a.createElement(h.b,{content:"\u6bd4\u5982\uff1a\n\n\u4f60\u53ef\u4ee5\u4f7f\u7528  call(myfunc,  'arg1', 'arg2')  \u6307\u793amiddleware\u8c03\u7528  myfunc('arg1', 'arg2')\n\n\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9 yield \u4e86 effect  \u7684\u90a3\u4e2a  generator\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"Task"}),y.a.createElement(h.e,{title:"\u4e00\u4e2a task \u5c31\u50cf\u662f\u4e00\u4e2a\u5728\u540e\u53f0\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u5728\u57fa\u4e8eredux-saga\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u591a\u4e2atask"}),y.a.createElement(h.e,{title:"\u901a\u8fc7 fork \u51fd\u6570\u6765\u521b\u5efa task"}),y.a.createElement(h.b,{content:"function* saga() {\n    ...\n    const task = yield fork(otherSaga, ...args)\n    ...\n}\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"\u963b\u585e\u8c03\u7528 \u548c \u975e\u7ec4\u585e\u8c03\u7528"}),y.a.createElement(h.e,{title:"\u963b\u585e\u8c03\u7528"}),y.a.createElement(h.e,{title:"\u963b\u585e\u8c03\u7528\u7684\u610f\u601d\u662f\uff1a saga \u4f1a\u5728 yield \u4e86 effect \u540e\u4f1a\u7b49\u5f85\u5176\u6267\u884c\u7ed3\u679c\u8fd4\u56de\uff0c\u7ed3\u679c\u8fd4\u56de\u540e\u624d\u6062\u590d\u6267\u884c generator \u4e2d\u7684\u4e0b\u4e00\u4e2a\u6307\u4ee4"}),y.a.createElement(h.e,{title:"\u975e\u963b\u585e\u8c03\u7528"}),y.a.createElement(h.e,{title:"\u975e\u963b\u585e\u8c03\u7528\u7684\u610f\u601d\u662f\uff1a saga \u4f1a\u5728 yield effect \u4e4b\u540e\u7acb\u5373\u6062\u590d\u6267\u884c"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"watcher \u548c worker"}),y.a.createElement(h.e,{title:"\u6307\u7684\u662f\u4e00\u79cd\u4f7f\u7528\u4e24\u4e2a\u5355\u72ec\u7684saga\u6765\u7ec4\u7ec7\u63a7\u5236\u6d41\u7684\u65b9\u5f0f"}),y.a.createElement(h.e,{title:"watcher\uff1a\u76d1\u542c\u53d1\u8d77\u7684action \u5e76\u5728\u6bcf\u6b21\u63a5\u6536\u5230action\u65f6 fork \u4e00\u4e2a work"}),y.a.createElement(h.e,{title:"worker\uff1a \u5904\u7406action\uff0c\u5e76\u7ed3\u675f\u5b83"}),y.a.createElement(h.c,{title:"api"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"createSagaMiddleware(...sagas)"}),y.a.createElement(h.e,{title:"createSagaMiddleware\u7684\u4f5c\u7528\u662f\u521b\u5efa\u4e00\u4e2aredux\u4e2d\u95f4\u4ef6\uff0c\u5e76\u5c06sagas\u4e0eRedux store\u5efa\u7acb\u94fe\u63a5"}),y.a.createElement(h.e,{title:"\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u91cc\u9762\u662fgenerator\u51fd\u6570\u5217\u8868"}),y.a.createElement(h.e,{title:"sagas: Array ---- ( generator\u51fd\u6570\u5217\u8868 )"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"middleware.run(saga, ...args)"}),y.a.createElement(h.e,{title:"\u52a8\u6001\u6267\u884c saga\u3002\u7528\u4e8e applyMiddleware \u9636\u6bb5\u4e4b\u540e\u6267\u884c Sagas\u3002\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2aTask \u63cf\u8ff0\u5bf9\u8c61\u3002"}),y.a.createElement(h.e,{title:"saga: Function: \u4e00\u4e2a Generator \u51fd\u6570"}),y.a.createElement(h.e,{title:"args: Array: \u63d0\u4f9b\u7ed9 saga \u7684\u53c2\u6570 (\u9664\u4e86 Store \u7684 getState \u65b9\u6cd5)"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"take(pattern)"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"----- \u6682\u505cGenerator\uff0c\u5339\u914d\u7684action\u88ab\u53d1\u8d77\u65f6\uff0c\u6062\u590d\u6267\u884c"}),y.a.createElement(h.e,{title:"\u521b\u5efa\u4e00\u6761 Effect \u63cf\u8ff0\u4fe1\u606f\uff0c\u6307\u793a middleware \u7b49\u5f85 Store \u4e0a\u6307\u5b9a\u7684 action\u3002 Generator \u4f1a\u6682\u505c\uff0c\u76f4\u5230\u4e00\u4e2a\u4e0e pattern \u5339\u914d\u7684 action \u88ab\u53d1\u8d77\u3002"}),y.a.createElement(h.e,{title:"pattern\u7684\u89c4\u5219"}),y.a.createElement(h.e,{title:"(1) pattern\u4e3a\u7a7a \u6216\u8005 * \uff0c\u5c06\u4f1a\u5339\u914d\u6240\u6709\u53d1\u8d77\u7684action"}),y.a.createElement(h.e,{title:"(2) pattern\u662f\u4e00\u4e2a\u51fd\u6570\uff0caction \u4f1a\u5728 pattern(action) \u8fd4\u56de\u4e3a true \u65f6\u88ab\u5339\u914d\u4f8b\u5982\uff0ctake(action => action.entities) \u4f1a\u5339\u914d\u90a3\u4e9b entities \u5b57\u6bb5\u4e3a\u771f\u7684 action\uff09\u3002"}),y.a.createElement(h.e,{title:"(3) pattern\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0caction \u4f1a\u5728 action.type === pattern \u65f6\u88ab\u5339\u914d"}),y.a.createElement(h.e,{title:"(4) pattern\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u4f1a\u9488\u5bf9\u6570\u7ec4\u6240\u6709\u9879\uff0c\u5339\u914d\u4e0e action.type \u76f8\u7b49\u7684 action\u4f8b\u5982\uff0ctake([INCREMENT, DECREMENT]) \u4f1a\u5339\u914d INCREMENT \u6216 DECREMENT \u7c7b\u578b\u7684 action\uff09"}),y.a.createElement(h.e,{title:"take\u5b9e\u4f8b\uff1a"}),y.a.createElement(h.b,{content:"username.js\n\nimport React from 'react';\n\nexport default class User extends React.Component {\n    go = () => {\n        new Promise((resolve,reject) => {\n            resolve(3)\n        }).then(res => this.props.getAges(res))    // \u6267\u884caction.js\u4e2d\u7684getAges\u51fd\u6570\n            .then(res => {\n                setTimeout(()=> {\n                    console.log('5s\u949f\u540e\u624d\u4f1a\u6267\u884csettimeout')\n                    this.props.settimeout()\n                },5000)           // \u5728getAges\u51fd\u6570\u6267\u884c\u5b8c\u540e\uff0c\u518d\u8fc75s\u6267\u884c\uff0csettimeout()\u51fd\u6570\n            }) \n        \n        \n    }\n    render() {\n        console.log(this.props, 'this.props')\n        return (\n            <div>\n                \u8fd9\u662fusername\u7ec4\u4ef6\n                <br/>\n                <div onClick={this.go}>\n                    \u70b9\u51fb\u83b7\u53d6\u63d0\u4ea4age\n                </div>\n                <div>\n                    {\n                        this.props.username && \n                        this.props.username.userNameReducer.image.data && \n                        this.props.username.userNameReducer.image.data.map(\n                            (item,key) => <div key={key}>{item.abs }</div>\n                        )\n                    }\n                </div>\n            </div>\n        )\n    }\n}\n"}),y.a.createElement(h.b,{content:"action.js\n\nimport { actionTypes } from './constant.js';\n\n\nexport function getAges(age) {\n    console.log(age,'age')\n    return {\n        type: actionTypes.GET_AGE,   // \u5728saga\u4e2d\u6709\u5bf9\u5e94\u7684actionTypes.GET_AGE\n        payload: age\n    }\n}\n\nexport function settimeout() {\n    return {\n        type: actionTypes.MATCH_TAKE,  // \u5728saga\u4e2d\u6709\u5bf9\u5e94\u7684actionTypes.MATCH_TAKE,\n    }\n}\n"}),y.a.createElement(h.b,{content:"saga.js\n\nimport { actionTypes } from '../username/constant.js';\nimport {call, put, takeEvery, take} from 'redux-saga/effects';\n\nfunction* goAge(action){\n    console.log(action)\n    const p = function() {\n        return fetch(\n            `http://image.baidu.com/channel/listjson?pn=0&rn=${action.payload}`,{\n            method: 'GET'\n        })\n        .then(res => res.json())\n        .then(res => {\n            console.log(res)\n            return res\n        })\n    }\n    const res = yield call(p)\n    yield take(actionTypes.MATCH_TAKE)   \n\n    // generator\u6267\u884c\u5230take\u65f6\uff0c\u4f1a\u6682\u505c\u6267\u884c\uff0c\u76f4\u5230\u6709type\u4e3aMATCH_TAKE\u7684action\u53d1\u8d77\u65f6\uff0c\u624d\u6062\u590d\u6267\u884c\n\n    // \u8fd9\u91cc\u7684\u6548\u679c\u5c31\u662f\u70b9\u51fb\u6309\u94ae 5s\u949f\u540e \u624d\u663e\u793a\u8bf7\u6c42\u5230\u7684\u5185\u5bb9\uff0c( 5s\u949f\u540e\u624d\u6267\u884c\u4e0b\u9762\u7684put\u8bed\u53e5 )\n    yield put({\n        type: actionTypes.GET_AGE_SUCCESS,\n        payload: res\n    })\n}\n\nfunction* rootSaga() {\n    yield takeEvery(actionTypes.GET_AGE, goAge)  \n          \n    // \u6709\u5bf9\u5e94\u7684type\u662fGET_AGE\u7684action\u53d1\u8d77\u65f6\uff0c\u6267\u884cgoAge() Generator\u51fd\u6570\n}\n\nexport default rootSaga;\n\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"fork(fn, ...args)"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"----- \u65e0\u963b\u585e\u7684\u6267\u884cfn\uff0c\u6267\u884cfn\u65f6\uff0c\u4e0d\u4f1a\u6682\u505cGenerator"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"----- yield fork(fn ...args)\u7684\u7ed3\u679c\u662f\u4e00\u4e2a Task \u5bf9\u8c61"}),y.a.createElement(h.e,{title:"task\u5bf9\u8c61 ---------- \u4e00\u4e2a\u5177\u5907\u67d0\u4e9b\u6709\u7528\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u7684\u5bf9\u8c61"}),y.a.createElement(h.e,{title:"\u521b\u5efa\u4e00\u6761 Effect \u63cf\u8ff0\u4fe1\u606f\uff0c\u6307\u793a middleware \u4ee5 \u65e0\u963b\u585e\u8c03\u7528 \u65b9\u5f0f\u6267\u884c fn\u3002"}),y.a.createElement(h.e,{title:"fn: Function - \u4e00\u4e2a Generator \u51fd\u6570, \u6216\u8005\u8fd4\u56de Promise \u7684\u666e\u901a\u51fd\u6570"}),y.a.createElement(h.e,{title:"args: Array - \u4e00\u4e2a\u6570\u7ec4\uff0c\u4f5c\u4e3a fn \u7684\u53c2\u6570"}),y.a.createElement(h.e,{title:"fork \u7c7b\u4f3c\u4e8e call\uff0c\u53ef\u4ee5\u7528\u6765\u8c03\u7528\u666e\u901a\u51fd\u6570\u548c Generator \u51fd\u6570\u3002\u4f46 fork \u7684\u8c03\u7528\u662f\u65e0\u963b\u585e\u7684\uff0c\u5728\u7b49\u5f85 fn \u8fd4\u56de\u7ed3\u679c\u65f6\uff0cmiddleware \u4e0d\u4f1a\u6682\u505c Generator\u3002 \u76f8\u53cd\uff0c\u4e00\u65e6 fn \u88ab\u8c03\u7528\uff0cGenerator \u7acb\u5373\u6062\u590d\u6267\u884c\u3002"}),y.a.createElement(h.e,{title:"fork \u4e0e race \u7c7b\u4f3c\uff0c\u662f\u4e00\u4e2a\u4e2d\u5fc3\u5316\u7684 Effect\uff0c\u7ba1\u7406 Sagas \u95f4\u7684\u5e76\u53d1\u3002yield fork(fn ...args) \u7684\u7ed3\u679c\u662f\u4e00\u4e2a Task \u5bf9\u8c61 \u2014\u2014 \u4e00\u4e2a\u5177\u5907\u67d0\u4e9b\u6709\u7528\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u7684\u5bf9\u8c61\u3002"}),y.a.createElement(h.e,{title:"fork: \u662f\u5206\u53c9\uff0c\u5c94\u8def\u7684\u610f\u601d ( \u5e76\u53d1 )"}),y.a.createElement(h.e,{title:"\u5b9e\u4f8b\uff1a"}),y.a.createElement(h.b,{content:"import { actionTypes } from '../username/constant.js';\nimport {call, put, takeEvery, take, fork} from 'redux-saga/effects';\n\nfunction* goAge(action){\n\n    function* x() {\n        yield setTimeout(() => {\n           console.log('\u8be5\u663e\u793a\u4f1a\u5728\u83b7\u5f97\u56fe\u7247\u540e\uff0c2s\u4e2d\u540e\u663e\u793a') \n        }, 2000);\n    }\n\n    const p = function() {\n        return fetch(`http://image.baidu.com/channel/listjson?pn=0&rn=${action.payload}`,{\n            method: 'GET'\n        })\n        .then(res => res.json())\n        .then(res => {\n            console.log(res)\n            return res\n        })\n    }\n    const res = yield call(p)\n\n    yield take(actionTypes.MATCH_TAKE)   // \u963b\u585e\uff0c\u76f4\u5230\u5339\u914d\u7684action\u89e6\u53d1\uff0c\u624d\u4f1a\u6062\u590d\u6267\u884c\n\n    yield fork(x)  // \u65e0\u963b\u585e\u6267\u884c\uff0c\u5373x()generator\u89e6\u53d1\u540e\uff0c\u5c31\u4f1a\u6267\u884c\u4e0b\u9762\u7684put\u8bed\u53e5\n\n    yield put({\n        type: actionTypes.GET_AGE_SUCCESS,\n        payload: res\n    })\n\n}\n\nfunction* rootSaga() {\n    yield takeEvery(actionTypes.GET_AGE, goAge)\n}\n\nexport default rootSaga;\n"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"select(selector, ...args)"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"----- \u5f97\u5230 Store \u4e2d\u7684 state \u4e2d\u7684\u6570\u636e"}),y.a.createElement(h.e,{title:"\u521b\u5efa\u4e00\u6761 Effect \u63cf\u8ff0\u4fe1\u606f\uff0c\u6307\u793a middleware \u8c03\u7528\u63d0\u4f9b\u7684\u9009\u62e9\u5668\u83b7\u53d6 Store state \u4e0a\u7684\u6570\u636e\uff08\u4f8b\u5982\uff0c\u8fd4\u56de selector(getState(), ...args) \u7684\u7ed3\u679c\uff09\u3002"}),y.a.createElement(h.e,{title:"selector: Function - \u4e00\u4e2a (state, ...args) => args \u51fd\u6570. \u901a\u8fc7\u5f53\u524d state \u548c\u4e00\u4e9b\u53ef\u9009\u53c2\u6570\uff0c\u8fd4\u56de\u5f53\u524d Store state \u4e0a\u7684\u90e8\u5206\u6570\u636e\u3002"}),y.a.createElement(h.e,{title:"args: Array - \u53ef\u9009\u53c2\u6570\uff0c\u4f20\u9012\u7ed9\u9009\u62e9\u5668\uff08\u9644\u52a0\u5728 getState \u540e\uff09"}),y.a.createElement(h.e,{title:"\u5982\u679c select \u8c03\u7528\u65f6\u53c2\u6570\u4e3a\u7a7a( --- \u5373 yield select() --- )\uff0c\u90a3 effect \u4f1a\u53d6\u5f97\u6574\u4e2a\u7684 state"}),y.a.createElement(h.e,{style:{fontWeight:700},title:"\u91cd\u8981\u63d0\u9192\uff1a\u5728\u53d1\u8d77 action \u5230 store \u65f6\uff0cmiddleware \u9996\u5148\u4f1a\u8f6c\u53d1 action \u5230 reducers \u7136\u540e\u901a\u77e5 Sagas\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5f53\u4f60\u67e5\u8be2 Store \u7684 state\uff0c \u4f60\u83b7\u53d6\u7684\u662f action \u88ab\u5904\u7406\u4e4b\u540e\u7684 state\u3002"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"put(action)"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"----- \u53d1\u8d77\u4e00\u4e2a action \u5230 store"}),y.a.createElement(h.e,{title:"\u521b\u5efa\u4e00\u6761 Effect \u63cf\u8ff0\u4fe1\u606f\uff0c\u6307\u793a middleware \u53d1\u8d77\u4e00\u4e2a action \u5230 Store\u3002"}),y.a.createElement(h.e,{title:"action: Object - \u5b8c\u6574\u4fe1\u606f\u53ef\u67e5\u770b Redux \u7684 dispatch \u6587\u6863"}),y.a.createElement(h.e,{title:"put \u662f\u5f02\u6b65\u7684\uff0c\u4e0d\u4f1a\u7acb\u5373\u53d1\u751f"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"call(fn, ...args) \u963b\u585e\u6267\u884c\uff0ccall()\u6267\u884c\u5b8c\uff0c\u624d\u4f1a\u5f80\u4e0b\u6267\u884c"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"----- \u6267\u884c fn(...args)"}),y.a.createElement(h.e,{style:{fontWeight:700,textIndent:0},title:"----- \u5bf9\u6bd4 fork(fn, ...args) \u65e0\u963b\u585e\u6267\u884c"}),y.a.createElement(h.e,{title:"\u521b\u5efa\u4e00\u6761 Effect \u63cf\u8ff0\u4fe1\u606f\uff0c\u6307\u793a middleware \u8c03\u7528 fn \u51fd\u6570\u5e76\u4ee5 args \u4e3a\u53c2\u6570\u3002"}),y.a.createElement(h.e,{title:"fn: Function - \u4e00\u4e2a Generator \u51fd\u6570, \u6216\u8005\u8fd4\u56de Promise \u7684\u666e\u901a\u51fd\u6570"}),y.a.createElement(h.e,{title:"args: Array - \u4e00\u4e2a\u6570\u7ec4\uff0c\u4f5c\u4e3a fn \u7684\u53c2\u6570"}),y.a.createElement(h.e,{title:"fn \u65e2\u53ef\u4ee5\u662f\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a Generator \u51fd\u6570"})))}}]),n}(y.a.Component);t.default=x}}]);