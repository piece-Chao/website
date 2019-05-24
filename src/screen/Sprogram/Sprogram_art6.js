import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sprogram_art6 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'微信小程序开发06-一个业务页面的完成'} />
                    <Label title={'前言'} />
                    <Paragraph title={'这里来说一说我们的理念，我们也学习小程序开发有一周多了，从近期的使用上来说，小程序可以作为底层，但是缺少一个框架层，这个框架层需要提供：'} />
                    <Paragraph title={'① 组件库'} />
                    <Paragraph title={'② 更好的代码组织方式，也就是让我们可以做到轻松的组件化开发'} />
                    <Paragraph title={'我们从最开始到现在，都在沿着这个方向去分解小程序学习，其实小程序本身的东西差不多了，但是我们代码过程中有时候却越高越复杂，多了很多封装，其实这所有的复杂都是为了设置一个基本的架构，一个标准的开发模式，让后面写业务代码的同学能更高效的写代码，经过一年多的发展，事实上这种较为成熟的框架已经有了，比如我们正在使用的：'} />
                    <Paragraph title={<p><a href="https://tencent.github.io/wepy/">https://tencent.github.io/wepy/</a></p>} />
                    <Paragraph title={'但是，可以看到小程序基本还是原生JS，这其实是个非常好的学习整理机会，所以我这边一步步和大家对小程序进行了拆分，期望能形成一套还能用的雏形，帮助大家理解，所以我们继续今天的学习吧，为了降低单页面难度，我们将首页进行下改造。'} />
                    <Label title={'首页'} />
                    <Paragraph title={'首页做了一点改造，变成了这个样式了：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art45.png')} alt="png"/>
                    <Paragraph title={'这里需要三个点击时间点，因为日历组件，我们昨天就做好了，而他这个出发日期事实上就是我们日历组件的selecedDate，处理这块逻辑：'} />
<CodeBlock content={
`<template name="searchbox">
<view class="c-row search-line" data-flag="start">
  <view class="c-span3">
    出发</view>
  <view class="c-span9 js-start search-line-txt">
    请选择出发地</view>
</view>
<view class="c-row search-line" data-flag="arrive">
  <view class="c-span3">
    到达</view>
  <view class="c-span9 js-arrive search-line-txt">
    请选择到达地</view>
</view>
<view class="c-row search-line" data-flag="arrive">
  <view class="c-span3">
    出发日期</view>
  <view class="c-span9 js-arrive search-line-txt">
    {{calendarSelectedDate || '请选择出发日期'}} </view>
</view>
<view class="c-row " data-flag="arrive">
  <span class="btn-primary full-width js_search_list">查询</span>
</view>
</template>
`} />
<CodeBlock content={
`<view class="c-row search-line" data-flag="arrive">
<view class="c-span3">
  出发日期</view>
<view class="c-span9 js-arrive search-line-txt">
  {{calendarSelectedDate || '请选择出发日期'}} </view>
</view>
`} />
                    <Paragraph title={'点击时候我们弹出我们的日历，这个时候我们日历模块释放一个事件显示日历：'} />
                    <Paragraph title={'PS:template不与页面级别WXML共享一个作用域，所以我暂时都采用的include引入'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art46.png')} alt="png"/>
<CodeBlock content={
`<view class="c-row search-line" data-flag="start">
<view class="c-span3">
  出发</view>
<view class="c-span9 js-start search-line-txt">
  请选择出发地</view>
</view>
<view class="c-row search-line" data-flag="arrive">
<view class="c-span3">
  到达</view>
<view class="c-span9 js-arrive search-line-txt">
  请选择到达地</view>
</view>
<view class="c-row search-line" data-flag="arrive" ontap="showCalendar">
<view class="c-span3">
  出发日期</view>
<view class="c-span9 js-arrive search-line-txt">
  {{calendarSelectedDateStr}}</view>
</view>
<view class="c-row " data-flag="arrive">
<span class="btn-primary full-width js_search_list">查询</span>
</view>
<include src="./mod/calendar.wxml" />
<include src="../../utils/abstract-page.wxml" />
`} />
<CodeBlock content={
`<view class="c-row search-line" data-flag="arrive" ontap="showCalendar">
<view class="c-span3">
  出发日期</view>
<view class="c-span9 js-arrive search-line-txt">
  {{calendarSelectedDateStr}}</view>
</view>
`} />
<CodeBlock content={
`/*
事实上一个mod就只是一个对象,只不过为了方便拆分,将对象分拆成一个个的mod
一个mod对应一个wxml,但是共享外部的css,暂时如此设计
所有日历模块的需求全部再此实现
*/
const util = require('../../../utils/util.js')

let selectedDate = new Date();

module.exports = {
  showCalendar: function () {
    this.setData({
      isCalendarShow: ''
    });
  },
  onCalendarDayTap: function (e) {
    let data = e.detail;
    var date = new Date(data.year, data.month, data.day);
    console.log(date)
    this.setData({
      calendarSelectedDate: date,
      calendarSelectedDateStr: util.dateUtil.format(date, 'Y年M月D日')
    });
  },
  data: {
    isCalendarShow: 'none',
    calendarDisplayMonthNum: 2,
    calendarDisplayTime: new Date(),
    calendarSelectedDate: selectedDate,
    calendarSelectedDateStr: util.dateUtil.format(selectedDate, 'Y年M月D日')
  }
}
`} />
                    <Paragraph title={'显然，这里的日历这样摆设有点丑，我们这里将其封装成一个弹出层，所以我们这里再做一个容器类组件，专门用于装载页面样式用：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art47.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art48.png')} alt="png"/>
<CodeBlock content={
`<view class="cm-modal " style="z-index: {{uiIndex}}; position: fixed; display: {{isShow}}; ">
   <slot ></slot>
</view>
<view class="cm-overlay" bindtap="onMaskEvent" style="z-index: {{maskzIndex}}; display: {{isShow}}" >
</view>
`} />
<CodeBlock content={
`<ui-container bindonContainerHide="onContainerHide" is-show="{{isCalendarShow}}" >
<view class="calendar-wrapper-box">
  <view class="box-hd">
    <text class="fl icon-back js_back "></text>
    <text class="fr icon-next js_next"></text>
  </view>
  <ui-calendar bindonDayTap="onCalendarDayTap" displayTime="{{calendarDisplayTime}}" 
selectedDate="{{calendarSelectedDate}}" displayMonthNum="{{calendarDisplayMonthNum}}" 
is-show="{{isCalendarShow}}"></ui-calendar>
</view>
</ui-container>
`} />
                    <Paragraph title={'但是这里也引起了其他问题，因为引入了shadow-dom概念，我的样式不能重用，组件内部样式与外部是不能通信的，但是这里是页面级别容器，内容的样式肯定是来源页面的，这里没什么问题，所以我们这里显示的是正确的，但是我这里想做一个出格一点的操作，我想用样式将这里日历月标题换个位置：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art49.png')} alt="png"/>
                    <Paragraph title={'而日历组件和外部是不能通信的，我们这里该如何处理呢，我这里想了两个方案：'} />
                    <Paragraph title={'① 设置一个全局使用的组件库样式，让所有组件继承，但是不知道这里对性能是否有影响，因为这样的话体积不会太小'} />
                    <Paragraph title={'② 小程序设计了可以传入组件的方法，比如我们这里的日历组件我们可以这样改变其样式'} />
<CodeBlock content={
`.calendar-cm-month {
    position: absolute;
    top: 0;
    height: 90rpx;
    line-height: 90rpx;
    width: 100%;
    color: #00b358;
    text-align: center;
}
`} />
<CodeBlock content={
`Component({
    externalClasses: ['ex-class'],
    behaviors: [
      View
    ],
    properties: {
      displayMonthNum: {
        type: Number
      },
      displayTime: {
        type: Date
      },
      selectedDate: {
        type: Date
      }
    },
    data: {
      weekDayArr: ['日', '一', '二', '三', '四', '五', '六'],
    },
  
    attached: function () { 
      //console.log(this)
      // debugger
    },
    methods: {
      onDayTap: function (e) {
        this.triggerEvent('onDayTap', e.currentTarget.dataset)
      }
    }
  })
`} />
<CodeBlock content={
`<ui-container bindonContainerHide="onContainerHide" is-show="{{isCalendarShow}}" >
<view class="calendar-wrapper-box">
  <view class="box-hd">
    <text class="fl icon-back js_back "></text>
    <text class="fr icon-next js_next"></text>
  </view>
  <ui-calendar ex-class="calendar-cm-month" bindonDayTap="onCalendarDayTap" 
displayTime="{{calendarDisplayTime}}" selectedDate="{{calendarSelectedDate}}" 
displayMonthNum="{{calendarDisplayMonthNum}}" is-show="{{isCalendarShow}}"></ui-calendar>
</view>
</ui-container>
`} />
                    <Paragraph title={'具体各位去github上查看，总而言之，我们的页面变成了这个样子了：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art50.png')} alt="png"/>
                    <Paragraph title={'PS：这里发现一个不知道是不是坑点的点，我们这里属性传递的是一个date对象，但是到了组件层之间变成了对象，不知微信底层做了什么：'} />
<CodeBlock content={
`calendarDisplayTime: new Date()
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art51.png')} alt="png"/>
                    <Paragraph title={'好像变成了一个空对象，这里可能发生的情况是，经过传递的日期对象会被某种特殊处理，但是具体发生了什么事情就不知道了，这个却引起了我们不小的麻烦，这里大概去翻开了一下源码：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art52.png')} alt="png"/>
                    <Paragraph title={'极有可能，小程序本身就不支持date属性的传递，我们的日历组件能跑起来的原因是什么，我这里都有点疑惑了......'} />
                    <Paragraph title={'而且就算以对象方式传递到组件的date类型都会变成莫名其妙的东西：'} />
<CodeBlock content={
`ttt: {
    key: 'date',
    value: selectedDate
},
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art53.png')} alt="png"/>
                    <Paragraph title={'这个特性有点令人抓不住头脑了，这里根据探查，很有可能Component将date对象传入WXML解释时候，自动转为了日期字符串了，所以我们这里看上去是对象的东西其实是字符串，这里的建议是：跟组件的date传递，暂时全部使用字符串代替，以免自我麻烦，然后我们先将之前的日历操作全部变成字符串，再为我们的前后按钮加上事件：'} />
<CodeBlock content={
`module.exports = {
    showCalendar: function () {
      this.setData({
        isCalendarShow: ''
      });
    },
    hideCalendar: function () {
      this.setData({
        isCalendarShow: 'none'
      });
    },
    preMonth: function () {
  
      this.setData({
        calendarDisplayTime: util.dateUtil.preMonth(this.data.calendarDisplayTime).toString()
      });
    },
    nextMonth: function () {
      this.setData({
        calendarDisplayTime: util.dateUtil.nextMonth(this.data.calendarDisplayTime).toString()
      });
    },
    onCalendarDayTap: function (e) {
      let data = e.detail;
      var date = new Date(data.year, data.month, data.day);
      console.log(date)
      this.setData({
        isCalendarShow: 'none',
        calendarSelectedDate: date.toString(),
        calendarSelectedDateStr: util.dateUtil.format(date, 'Y年M月D日')
      });
    },
    onContainerHide: function () {
      this.hideCalendar();
    },
  
    data: {
      ttt: {
        key: 'date',
        value: selectedDate
      },
      isCalendarShow: '',
      calendarDisplayMonthNum: 1,
      calendarDisplayTime: new Date(2018, 9).toString(),
      calendarSelectedDate: selectedDate,
      calendarSelectedDateStr: util.dateUtil.format(new Date(selectedDate), 'Y年M月D日')
    }
  }
`} />
                    <Paragraph title={'虽然看上去恶心了一点，但是总是不会出什么明显的问题，忍一忍吧......日期部分基本结束了，还有些小的限制没有做上，比如哪些时段能选，哪些不能，这块就有待各位发现吧，我们这里毕竟是学习，做细了很花功夫，我们接下来做出发目的地选择部分。'} />
                    <Label title={'数据请求'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'城市列表'} />
                    <Paragraph title={'城市列表这里看起来需要新开一个页面，但是我这里想做在一个页面中，考虑篇幅，我们使用弹出层容器组件看并且尽量削弱一些特性，几天下来别说写的还有些累......'} />
                    <Paragraph title={'这个又作为首页的一个模块而存在：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art54.png')} alt="png"/>
<CodeBlock content={
`<view style="display: {{isCityShow}}; " class="city-wrapper"  >
    <view class="city-list">
        <view class="list-name">A</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
    </view>
    <view class="city-list">
        <view class="list-name">A</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
        <view class="list-item">成都</view>
    </view>
</view>
`} />
<CodeBlock content={
`/*
事实上一个mod就只是一个对象,只不过为了方便拆分,将对象分拆成一个个的mod
一个mod对应一个wxml,但是共享外部的css,暂时如此设计
所有日历模块的需求全部再此实现
*/
const util = require('../../../utils/util.js')

let selectedDate = new Date().toString();

module.exports = {
  showCitylist: function (e) {
    let flag = e.currentTarget.dataset.flag;

    if(flag === 'start') {

    } else {

    }
  },
  //用于设置城市数据
  setCityData: function (data) {

  },
  showCity: function () {
      this.setData({
        isCityShow: ''
      });
  },
  shideCity: function () {
    this.setData({
      isCityShow: 'none'
    });
  },
  data: {
    isCityShow: ''
  }
}
`} />
                    <Paragraph title={'首页调用代码：'} />
<CodeBlock content={
`//获取公共ui操作类实例
const _page = require('../../utils/abstract-page.js');
let modCalendar = require('./mod/calendar.js');
let modCity = require('./mod/city.js');

//获取应用实例
const app = getApp()

Page(_page.initPage({
  data: {
  },
  // methods: uiUtil.getPageMethods(),
  methods: {
  },
  onShow: function () {
    global.sss = this;
    let scope = this;
  },
  onLoad: function () {
    // this.setPageMethods();
  }
}, {
  modCalendar: modCalendar,
  modCity: modCity
}))
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art55.png')} alt="png"/>
                    <Paragraph title={'这里我们开始有数据请求模块了，小程序使用这个接口请求数据，这里比较尴尬的是他要设置域名白名单：'} />
<CodeBlock content={
`wx.request(OBJECT)
`} />
                    <Paragraph title={'而我们使用的是测试账号没有可以设置的地方，所以我们还是去申请个小程序账号吧...配置成功，我们继续代码：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art56.png')} alt="png"/>
                    <Paragraph title={'可以看到数据请求已经回来了，但是我们一般来说一个接口不止会用于一个地方，每次重新写好像有些费事，加之我这里想将重复的请求缓存起来，所以我们这里封装一套数据访问层出来'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'数据缓存（持久层）'} />
                    <Paragraph title={'之前在浏览器中，我们一般使用localstorage存储一些不太更改的数据，微信里面提供了接口处理这一切：'} />
<CodeBlock content={
`wx.setStorage(OBJECT)
`} />
                    <Paragraph title={'我们这里需要对其进行简单封装，便与后面更好的使用，一般来说有缓存就一定要有过期，所以我们动态给每个缓存对象增加一个过期时间：'} />
<CodeBlock content={
`class Store {
    constructor(opts) {
      if(typeof opts === 'string') this.key = opts;
      else Object.assign(this, opts);
  
      //如果没有传过期时间,则默认30分钟
      if(!this.lifeTime) this.lifeTime = 1;
  
      //本地缓存用以存放所有localstorage键值与过期日期的映射
      this._keyCache = 'SYSTEM_KEY_TIMEOUT_MAP';
  
    }
    //获取过期时间,单位为毫秒
    _getDeadline() {
      return this.lifeTime * 60 * 1000;
    }
  
    //获取一个数据缓存对象,存可以异步,获取我同步即可
    get(sign){
      let key = this.key;
      let now = new Date().getTime();
      var data = wx.getStorageSync(key);
      if(!data) return null;
      data = JSON.parse(data);
      //数据过期
      if (data.deadLine < now) {
        this.removeOverdueCache();
        return null;
      }
  
      if(data.sign) {
        if(sign === data.sign) return data.data;
        else return null;
      }
      return null;
    }
  
    /*产出页面组件需要的参数
    sign 为格式化后的请求参数，用于同一请求不同参数时候返回新数据，比如列表为北京的城市，后切换为上海，会判断tag不同而更新缓存数据，tag相当于签名
    每一键值只会缓存一条信息
    */
    set(data, sign) {
      let timeout = new Date();
      let time = timeout.setTime(timeout.getTime() + this._getDeadline());
      this._saveData(data, time, sign);
    }
    _saveData(data, time, sign) {
      let key = this.key;
      let entity = {
        deadLine: time,
        data: data,
        sign: sign
      };
      let scope = this;
  
      wx.setStorage({
        key: key,
        data: JSON.stringify(entity),
        success: function () {
          //每次真实存入前,需要往系统中存储一个清单
          scope._saveSysList(key, entity.deadLine);
        }
      });
    }
    _saveSysList(key, timeout) {
      if (!key || !timeout || timeout < new Date().getTime()) return;
      let keyCache = this._keyCache;
      wx.getStorage({
        key: keyCache,
        complete: function (data) {
          let oldData = {};
          if(data.data) oldData = JSON.parse(data.data);
          oldData[key] = timeout;
          wx.setStorage({
            key: keyCache,
            data: JSON.stringify(oldData)
          });
        }
      });
    }
    //删除过期缓存
    removeOverdueCache() {
      let now = new Date().getTime();
      let keyCache = this._keyCache;
      wx.getStorage({
        key: keyCache,
        success: function (data) {
          if(data && data.data) data = JSON.parse(data.data);
          for(let k in data) {
            if(data[k] < now) {
              delete data[k];
              wx.removeStorage({key: k, success: function(){}});
            }
          }
          wx.setStorage({
            key: keyCache,
            data: JSON.stringify(data)
          });
        }
      });
    }
  
  }
  
  module.exports = Store
`} />
                    <Paragraph title={'这个类的使用也非常简单，这里举个例子：'} />
<CodeBlock content={
`sss = new global.Store({key: 'qqq', lifeTime: 1})
sss.set({a: 1}, 2)
sss.get()//因为没有秘钥会是null
sss.get(2)//sss.get(2)
`} />
                    <Paragraph title={'这个时候我们开始写我们数据请求的类：'} />
                    <Paragraph title={'首先还是实现了一个抽象类和一个业务基类，然后开始在业务层请求数据：'} />
<CodeBlock content={
`class Model {
    constructor() {
      this.url = '';
      this.param = {};
      this.validates = [];
    }
    pushValidates(handler) {
      if (typeof handler === 'function') {
        this.validates.push(handler);
      }
    }
    setParam(key, val) {
      if (typeof key === 'object') {
        Object.assign(this.param, key);
      } else {
        this.param[key] = val;
      }
    }
    //@override
    buildurl() {
      return this.url;
    }
    onDataSuccess() {
    }
    //执行数据请求逻辑
    execute(onComplete) {
      let scope = this;
      let _success = function(data) {
        let _data = data;
        if (typeof data == 'string') _data = JSON.parse(data);
  
        // @description 开发者可以传入一组验证方法进行验证
        for (let i = 0, len = scope.validates.length; i < len; i++) {
          if (!scope.validates[i](data)) {
            // @description 如果一个验证不通过就返回
            if (typeof onError === 'function') {
              return onError.call(scope || this, _data, data);
            } else {
              return false;
            }
          }
        }
  
        // @description 对获取的数据做字段映射
        let datamodel = typeof scope.dataformat === 'function' ? scope.dataformat(_data) : _data;
  
        if (scope.onDataSuccess) scope.onDataSuccess.call(scope, datamodel, data);
        if (typeof onComplete === 'function') {
          onComplete.call(scope, datamodel, data);
        }
      };
      this._sendRequest(_success);
    }
  
    //删除过期缓存
    _sendRequest(callback) {
      let url = this.buildurl();
      wx.request({
        url: this.buildurl(),
        data: this.param,
        success: function success(data) {
          callback && callback(data);
        }
      });
    }
  }
  module.exports = Model
`} />
<CodeBlock content={
`let Model = require('./abstract-model.js');

class DemoModel extends Model {
  constructor() {
    super();
    let scope = this;
    this.domain = 'https://apikuai.baidu.com';
    this.param = {
      head: {
        version: '1.0.1',
        ct: 'ios'
      }
    };

    //如果需要缓存,可以在此设置缓存对象
    this.cacheData = null;

    this.pushValidates(function(data) {
      return scope._baseDataValidate(data);
    });
  }

  //首轮处理返回数据，检查错误码做统一验证处理
  _baseDataValidate(data) {
    if (typeof data === 'string') data = JSON.parse(data);
    if (data.data) data = data.data;
    if (data.errno === 0) return true;
    return false;
  }

  dataformat(data) {
    if (typeof data === 'string') data = JSON.parse(data);
    if (data.data) data = data.data;
    if (data.data) data = data.data;
    return data;
  }

  buildurl() {
    return this.domain + this.url;
  }

  getSign() {
    let param = this.getParam() || {};
    return JSON.stringify(param);
  }
  onDataSuccess(fdata, data) {
    if (this.cacheData && this.cacheData.set)
      this.cacheData.set(fdata, this.getSign());
  }

  //如果有缓存直接读取缓存,没有才请求
  execute(onComplete, ajaxOnly) {
    let data = null;
    if (!ajaxOnly && this.cacheData && this.cacheData.get) {
      data = this.cacheData.get(this.getSign());
      if (data) {
        onComplete(data);
        return;
      }
    }
    super.execute(onComplete);
  }

}

class CityModel extends DemoModel {
  constructor() {
    super();
    this.url = '/city/getstartcitys';
  }
}

module.exports = {
  cityModel: new CityModel

}

业务基类
`} />
<CodeBlock content={
`let model = models.cityModel;
model.setParam({
  type: 1
});
model.execute(function(data) {
  console.log(data);
  debugger;
});
`} />
                    <Paragraph title={'数据便请求结束了，有了这个类我们可以做非常多的工作，比如：'} />
                    <Paragraph title={'① 前端设置统一的错误码处理逻辑'} />
                    <Paragraph title={'② 前端打点，统计所有的接口响应状态'} />
                    <Paragraph title={'③ 每次请求相同参数做数据缓存'} />
                    <Paragraph title={'④ 这个对于错误处理很关键，一般来说前端出错很大可能都是后端数据接口字段有变化，而这种错误是比较难寻找的，如果我这里做一个统一的收口，每次数据返回记录所有的返回字段的标志上报呢，就以这个城市数据为例，我们可以这样做：'} />
<CodeBlock content={
`class CityModel extends DemoModel {
    constructor() {
      super();
      this.url = '/city/getstartcitys';
    }
    //每次数据访问成功，错误码为0时皆会执行这个回调
    onDataSuccess(fdata, data) {
      super.onDataSuccess(fdata, data);
      //开始执行自我逻辑
      let o = {
        _indate: new Date().getTime()
      };
      for(let k in fdata) {
        o[k] = typeof fdata[k];
      }
      //执行数据上报逻辑
      console.log(JSON.stringify(o));
    }
  }
`} />
                    <Paragraph title={'这里就会输出以下信息：'} />
<CodeBlock content={
`{"_indate":1533436847778,"cities":"object","hots":"object","total":"number","page":"string"}
`} />
                    <Paragraph title={'如果对数据要求非常严苛，对某些接口做到字段层面的验证，那么加一个Validates验证即可，这样对接口的控制会最大化，就算哪次出问题，也能很好从数据分析系统之中可以查看到问题所在，如果我现在想要一个更为具体的功能呢？我想要首次请求一个接口时便将其数据记录下来，第二次便不再请求呢，这个时候我们之前设计的数据持久层便派上了用处：'} />
<CodeBlock content={
`let Store = require('./abstract-store.js');

class CityStore extends Store {
  constructor() {
    super();
    this.key = 'DEMO_CITYLIST';
    //30分钟过期时间
    this.lifeTime = 30;
  }
}

module.exports = {
  cityStore: new CityStore
}
`} />
<CodeBlock content={
`class CityModel extends DemoModel {
    constructor() {
      super();
      this.url = '/city/getstartcitys';
      this.cacheData = Stores.cityStore;
    }
    //每次数据访问成功，错误码为0时皆会执行这个回调
    onDataSuccess(fdata, data) {
      super.onDataSuccess(fdata, data);
      //开始执行自我逻辑
      let o = {
        _indate: new Date().getTime()
      };
      for(let k in fdata) {
        o[k] = typeof fdata[k];
      }
      //执行数据上报逻辑
      console.log(JSON.stringify(o));
    }
}
`} />
                    <Paragraph title={'这个时候第二次请求时候便会直接读取缓存了'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art57.png')} alt="png"/>
                    <Paragraph title={'接下来便可以回到我们的页面渲染逻辑了，这个时候就变得非常简单了：'} />
<CodeBlock content={
`<view style="display: {{isCityShow}}; " class="city-wrapper">
<block wx:for="{{cityData}}" wx:key="k">
  <view class="city-list">
    <block wx:for="{{item}}" wx:key="kk" wx:for-index="key" wx:for-item="value">
      <view class="list-name">{{key}}</view>
      <block wx:for="{{value}}" wx:key="kkk" wx:for-index="i" wx:for-item="v">
        <view class="list-item" data-cnname="{{v.name}}" data-id="{{v.regionid}}">{{v.cnname}}</view>
      </block>
    </block>
  </view>
</block>
</view>
`} />
<CodeBlock content={
`//用于设置城市数据
setCityData: function(data) {
  data = data.cities;
  let citys = {}, sortCitys = [];
  let k, gname, name, i, tmp = {}, index;

  //首先处理每个name生成唯一K
  for (k in data) {
    name = data[k].name;
    if (!name) {
      continue;
    }
    gname = name[0].toUpperCase();
    if (!citys[gname]) citys[gname] = [];
    citys[gname].push(data[k]);
  }

  for (i = 65; i < 91; i++) {
    tmp = {};
    tmp[String.fromCharCode(i)] = [];
    sortCitys.push(tmp);
  }

  for (k in citys) {
    index = k.charCodeAt() - 65;
    tmp = {};
    tmp[k] = citys[k];
    sortCitys[index] = tmp;
  }

  this.setData({
    cityData: sortCitys,
    isCityShow: ''
  });
},
`} />
<img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art58.png')} alt="png"/>
                    <Paragraph title={'然后我们这里为组件绑定事件等就比较简单了，大家可以自己看github，于是我们首页的功能便完成了：'} />
<img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art59.png')} alt="png"/>
                    <Paragraph title={'经过一个多星期的学习，我们慢慢的完成了我们的首页，好像也就几个元素，但是后面的一切却不简单啊，我们明天继续完成list页面逻辑，便开始总结小程序开发'} />
                </div>
            </Container>
        )
    }
}

export default Sprogram_art6;