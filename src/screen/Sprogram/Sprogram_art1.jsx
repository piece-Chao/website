import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sprogram_art1 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'微信小程序开发01-小程序的执行流程是怎么样的？'} />
                    <Label title={'前言'} />
                    <Paragraph title={'我们这边最近一直在做基础服务，这一切都是为了完善技术体系，这里对于前端来说便是我们需要做一个Hybrid体系，如果做App，React Native也是不错的选择，但是一定要有完善的分层：'} />
                    <Paragraph title={'① 底层框架解决开发效率，将复杂的部分做成一个黑匣子，给页面开发展示的只是固定的三板斧，固定的模式下开发即可'} />
                    <Paragraph title={'② 工程部门为业务开发者封装最小化开发环境，最优为浏览器，确实不行便为其提供一个类似浏览器的调试环境'} />
                    <Paragraph title={'如此一来，业务便能快速迭代，因为业务开发者写的代码大同小异，所以底层框架配合工程团队（一般是同一个团队），便可以在底层做掉很多效率性能问题。'} />
                    <Paragraph title={'稍微大点的公司，稍微宽裕的团队，还会同步做很多后续的性能监控、错误日志工作，如此形成一套文档->开发->调试->构建->发布->监控、分析 为一套完善的技术体系'} />
                    <Paragraph title={'如果形成了这么一套体系，那么后续就算是内部框架更改、技术革新，也是在这个体系上改造，但很可惜，很多团队只会在这个路径上做一部分，后面由于种种原因不在深入，有可能是感觉没价值，而最恐怖的行为是，自己的体系没形成就贸然的换基础框架，戒之慎之啊！'} />
                    <Paragraph title={'从第三方应用接入来说，微信应该是做的最好的，百度这边有直达号等类似的产品，但是其体系化感觉还是有待提高的，阿里应该也有类似的技术产品诞生，从我们这层来说，都没有太多知晓，所以要么是运营的不好要么是做的不好。'} />
                    <Paragraph title={'而从小程序诞生以来，我这边便一直在关注，至今整个小程序体系已经十分完备了，腾讯小程序和腾讯云深度整合了，如果使用内测的开发者工具，全免费，纯js就搞定小程序前后端，不用服务器、存储、cdn、服务代码，都是免费，开发完后端不用自己运维，大杀器的节奏，我有时候在想，腾讯的技术实力真的是强啊！'} />
                    <Label title={'小程序的结构追溯'} />
                    <Paragraph title={'小程序的开发文档还是比较完善的，依旧是 账号申请->demo 流程，等熟悉后便可以走代码上架等流程了，前端代码用工具构建后上传，后台服务自己维护，配置地址映射，我们这里仅关注开发流程，所有使用其测试账号即可。'} />
<CodeBlock content={
`1 appid wx0c387cc8c19bdf78
2 appsecret acd6c02e2fdca183416df1269d2e3fb9
`} />
                    <Paragraph title={'经过一年多的发展，小程序形成的文档已经比较完善了，我们可以从文档和demo对小程序做出大概的判断：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art1.png')} alt="png"/>
                    <Paragraph title={'这里就是小程序给业务人员可以看到的代码了，我们从这个代码以及运行，基本可以将小程序的梗概猜测一番，这里首先看看其全局控制器APP：'} />
<CodeBlock content={
`//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
`} />
                    <Paragraph title={'一个应用只会有一个APP实例，而小程序为这个单例提供了几个基本的事件定义，我们用的最多的应该是onLaunch、onShow、onHide（我还没写小程序，所以猜测）：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art2.png')} alt="png"/>
                    <Paragraph title={'我们这里来追溯一下小程序架构层的执行逻辑，从APP到一个view实例化是怎么做的，这里首先明确几个点：'} />
                    <Paragraph title={'① 微信小程序事实上依旧是提供的webview执行环境，所以我们依旧可以在js环境中访问window、location等属性'} />
                    <Paragraph title={'② 微信小程序提供的展示的全部是Native定制化的UI，所以不要去想DOM操作的事'} />
                    <Paragraph title={'这里各位可以想象为，小程序界面中有一块webview在执行真正的代码逻辑，只不过这个webview除了装载js程序什么都没做，而所有的页面渲染全部是js通过URL Schema或者JSCore进行的Native通信，叫Native根据设置的规则完成的页面渲染。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'全局控制器App'} />
                    <Paragraph title={'这里我们重点关注全局控制器App这个类做了什么，因为拿不到源码，我们这里也只能猜测加单步调试了，首先微信容器会准备一个webview容器为我们的js代码提供宿主环境，容器与构建工具会配合产出以下页面：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art3.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art4.png')} alt="png"/>
                    <Paragraph title={'他在这里应该执行了实例化App的方法：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art5.png')} alt="png"/>
                    <Paragraph title={'这一坨代码，在这个环境下便相当晦涩了：'} />
<CodeBlock content={
`y = function() {
    function e(t) {
        var n = this;
        o(this, e),
        s.forEach(function(e) {
            var o = function() {
                var n = (t[e] || i.noop).bind(this);
                Reporter.__route__ = "App",
                Reporter.__method__ = e,
                (0,
                i.info)("App: " + e + " have been invoked");
                try {
                    n.apply(this, arguments)
                } catch (t) {
                    Reporter.thirdErrorReport({
                        error: t,
                        extend: "at App lifeCycleMethod " + e + " function"
                    })
                }
            };
            n[e] = o.bind(n)
        });
        for (var r in t)
            !function(e) {
                g(e) ? (0,
                i.warn)("关键字保护", "App's " + e + " is write-protected") : v(e) || ("[object Function]" === Object.prototype.toString.call(t[e]) ? n[e] = function() {
                    var n;
                    Reporter.__route__ = "App",
                    Reporter.__method__ = e;
                    try {
                        n = t[e].apply(this, arguments)
                    } catch (t) {
                        Reporter.thirdErrorReport({
                            error: t,
                            extend: "at App " + e + " function"
                        })
                    }
                    return n
                }
                .bind(n) : n[e] = t[e])
            }(r);
        this.onError && Reporter.registerErrorListener(this.onError);
        var l = function() {
            "hang" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mode && (f = !0);
            var e = (0,
            a.getCurrentPages)();
            e.length && (e[e.length - 1].onHide(),
            (0,
            u.triggerAnalytics)("leavePage", e[e.length - 1], !0)),
            this.onHide(),
            (0,
            u.triggerAnalytics)("background")
        }
          , h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (0 === e.scene || "0" === e.scene ? e.scene = c : c = e.scene,
            e.query = e.query || {},
            (0,
            i.hasExitCondition)(e) && (p = !0),
            this.onShow(e),
            (0,
            u.triggerAnalytics)("foreground"),
            d || e.reLaunch)
                d = !1;
            else {
                var t = (0,
                a.getCurrentPages)();
                t.length && (t[t.length - 1].onShow(),
                (0,
                u.triggerAnalytics)("enterPage", t[t.length - 1], !0))
            }
        };
        if ("undefined" != typeof __wxConfig && __wxConfig) {
            var y = __wxConfig.appLaunchInfo || {};
            y.query = y.query || {},
            c = y.scene,
            (0,
            i.hasExitCondition)(y) && (p = !0),
            this.onLaunch(y),
            (0,
            u.triggerAnalytics)("launch"),
            h.call(this, y)
        } else
            (0,
            i.error)("App Launch Error", "Can not find __wxConfig");
        wx.onAppEnterBackground(l.bind(this)),
        wx.onAppEnterForeground(h.bind(this)),
        _.call(this, "function" == typeof t.onPageNotFound)
    }
    return r(e, [{
        key: "getCurrentPage",
        value: function() {
            (0,
            i.warn)("将被废弃", "App.getCurrentPage is deprecated, please use getCurrentPages.");
            var e = (0,
            a.getCurrentPage)();
            if (e)
                return e.page
        }
    }]),
    e
}();
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art6.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art7.png')} alt="png"/>
                    <Paragraph title={'这里会往App中注册一个事件，我们这里注册的是onLaunch事件，这里对应的是当小程序初始化时候会执行这个回调，所以原则上应该是Native装在成功后会执行这个函数，这里再详细点说明下H5与Native的交互流程（这里是我之前做Hybrid框架时候跟Native同事的交互约定，小程序应该大同小异）：'} />
<CodeBlock content={`
我们一般是在全局上会有一个对象，保存所有需要Native执行函数的对象，比如这里的onLaunch，Native在执行到一个状态时候会调用js全局环境该对象上的一个函数
因为我们js注册native执行是以字符串key作为标志，所以Native执行的时候可能是window.app['onLauch...']('参数')
而我们在window对象上会使用bind的方式将对应的作用域环境保留下来，这个时候执行的逻辑便是正确的
`}/>
                    <Paragraph title={'这里在小程序全局没有找到对应的标识，这里猜测是直接在app对象上，Native会直接执行APP对象上面的方法，但是我这里有个疑问是View级别如果想注册个全局事件该怎么做，这个留到后面来看看吧，这里是Native载入webview时，会执行对象定义的onLaunch事件，在下面的代码看得到：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art8.png')} alt="png"/>
                    <Paragraph title={'这里会结合app.json获取首先加载页面的信息，默认取pages数组第一个，但是具体哪里获取和设置的代码没有找到，也跟主流程无关，我们这里忽略......然后我们看到代码执行了onShow逻辑：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art9.png')} alt="png"/>
                    <Paragraph title={'然后流转到注册微信容器层面的事件，我觉得，无论如何，这里应该是像微信容器注册事件了吧，但是我找不到全局的key😔'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art10.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art11.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art12.png')} alt="png"/>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'Page流程'} />
                    <Paragraph title={'如果有微信小程序的同学，麻烦这里指点一下，是不是猜测正确，顺便可以帮忙说明下这里，这里也是我觉得全局key，被Native调用的点，然后，逻辑上会获取默认view的类开始做实例化，我们这里来到view级别代码：'} />
<CodeBlock content={
`//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello Wor11ld',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
`} />
                    <Paragraph title={'他首先一来便获取了当前app实例：'} />
<CodeBlock content={`
const app = getApp()
`}/>
                    <Paragraph title={'其次开始了view实例化流程，这个是Page的类入口，大家要注意view.js只是定义的类，但是其实例化应该在全局的控制器，其实例化在这里完成的：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art13.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art14.png')} alt="png"/>
                    <Paragraph title={'Page实例化后会自己执行onLoad以及onShow，但是这里的onLoad以及onShow就看不出来分别了'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art15.png')} alt="png"/>
                    <Label title={'总结'} />
                    <Paragraph title={'我们这里一起瞎子摸象一般对微信小程序架构做了简单的摸索，这里发现事实上小程序流程与自己所想有一些出入，这里初步认为流程是这样的：'} />
                    <Paragraph title={'① 我们写好小程序代码后，提交代码'} />
                    <Paragraph title={'② 在发布流程中我们的代码经过构建流程，app.json以及入口的index.html（伪造页面），重新组装为一个只有js代码的空页面'} />
                    <Paragraph title={'③ 这里开始载入流程，用户点击一个微信按钮，进入小程序'} />
                    <Paragraph title={'④ 微信容器开启Hybrid容器，webview载入入口页面（我感觉应该有个规则可以通过url去打开固定一个小程序页面，这里后续碰到开发案例再说）'} />
                    <Paragraph title={'⑤ webview执行环境实例化App，其后自动装载默认Page（这里默认是index）'} />
                    <Paragraph title={'PS：这里我有个很疑惑的点，微信Native容器的各个事件点什么时候执行，由谁执行？'} />
                    <Paragraph title={'⑥ 进入页面渲染逻辑'} />
                    <Paragraph title={'⑦ ......'} />
                    <Paragraph title={'这里我还比较在意，执行事件后，对应Native页面是如何进行更新的，所以我们这里关注下这段代码：'} />
<CodeBlock content={`
debugger;
this.setData({
  userInfo: app.globalData.userInfo,
  hasUserInfo: true
})
`}/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art16.png')} alt="png"/>
                    <Paragraph title={'这里出现了一段非常关键的代码：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art17.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art18.png')} alt="png"/>
                    <Paragraph title={'可以看到，我们这里往微信容器注册了一个appDataChange的异步事件，而这个时候就将所有的逻辑交给了Native本身，Native执行结束后会根据webviewIds找到后续要执行的回调继续执行。'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art19.png')} alt="png"/>
                    <Paragraph title={'至于，容器如何使用webviewId找到对应函数的代码，我没有找到。至此，我们对小程序结构的初步探索便结束了'} />
                </div>
            </Container>
        )
    }
}

export default Sprogram_art1;