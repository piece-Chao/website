import React from 'react';
import Container from '@/screen/Container';
import { Title, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sprogram_art7 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'微信小程序开发07-列表页面怎么做'} />
                    <Paragraph title={'我们首页功能基本完成，我对比了下实际工作中的需求，完成度有70%以上，如果再花一两天时间，便能跟之前工作做的差不多了，今天我们继续实现一个页面列表，便结束这次的学习，后面几天要出差，所以总结性的文章本周未必能出来，静待下周吧。'} />
<CodeBlock content={
`<view class="page-wrapper ">
<view class="bus-list js_bus_list ">
  <view data-supplierid="100020" data-key="" class="bus-list-item  ">
    <view class="bus-time"> 08:25</view>
    <view class="tobooking"> 预订 </view>
    <view class="detail">
      <view class="detail1">
        <view class="start">
          <text class="icon-circle s-icon1"></text>东莞市南城汽车客运站</view>
        <view class="end">
          <text class="icon-circle s-icon2"></text>连州</view>
      </view>
      <view class="tags">
        <view>
          <text class="price">￥135</text>
        </view>
        <view>
          <text class="countleft">10张</text>
        </view>
        <view>
          <text class="b-tags js_tags"></text>
        </view>
      </view>
    </view>
  </view>
</view>

<view class="bus-list js_bus_list ">
  <view data-supplierid="100020" data-key="" class="bus-list-item  ">
    <view class="bus-time"> 08:25</view>
    <view class="tobooking"> 预订 </view>
    <view class="detail">
      <view class="detail1">
        <view class="start">
          <text class="icon-circle s-icon1"></text>东莞市南城汽车客运站</view>
        <view class="end">
          <text class="icon-circle s-icon2"></text>连州</view>
      </view>
      <view class="tags">
        <view>
          <text class="price">￥135</text>
        </view>
        <view>
          <text class="countleft">10张</text>
        </view>
        <view>
          <text class="b-tags js_tags"></text>
        </view>
      </view>
    </view>
  </view>
</view>
<view class="bus-list js_bus_list ">
  <view data-supplierid="100020" data-key="" class="bus-list-item  ">
    <view class="bus-time"> 08:25</view>
    <view class="tobooking"> 预订 </view>
    <view class="detail">
      <view class="detail1">
        <view class="start">
          <text class="icon-circle s-icon1"></text>东莞市南城汽车客运站</view>
        <view class="end">
          <text class="icon-circle s-icon2"></text>连州</view>
      </view>
      <view class="tags">
        <view>
          <text class="price">￥135</text>
        </view>
        <view>
          <text class="countleft">10张</text>
        </view>
        <view>
          <text class="b-tags js_tags"></text>
        </view>
      </view>
    </view>
  </view>
</view>

<include src="../mod/calendar.wxml" />
<include src="../../utils/abstract-page.wxml" />

</view>
`} />
<CodeBlock content={
`.page-wrapper {
    margin: 0;
    font-size: 28rpx;
    line-height: 1.5;
    color: #333;
    background-color: #efefef;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    min-height:2000rpx;
}

.bus-list .bus-list-item {
 position: relative;
 height: 160rpx;
 background-color: #fff; 
 margin: 16rpx 0;
 border: 2rpx solid #e5e5e5;
 border-width: 2rpx 0;
}

.bus-list .bus-list-item::before,.bus-list .bus-list-item::after {
 position: absolute;
 left: 122rpx;
 content: '';
 width: 24rpx;
 height: 12rpx;
 background-color: #efefef;
 border: 2rpx solid #e5e5e5;
}

.bus-list .bus-list-item::before {
  border-radius: 0 0 60rpx 60rpx;
    border-top: none;
  top: -2rpx;
}

.bus-list .bus-list-item::after {
  border-radius: 60rpx 60rpx 0 0;
    border-bottom: none;
  bottom: -2rpx;
}

.bus-list .bus-list-item .bus-time {
 position: absolute;
 left: 0;
 width: 134rpx;
 height: 100rpx;
 line-height: 100rpx;
 margin: 30rpx 0;
 color: #00b358;
 text-align: center;
 font-size: 40rpx;
 font-family: Arial;
 border-right: 2rpx dashed #e5e5e5;
}

.bus-list .bus-list-item .tobooking {
 background-color: #00B358;
 position: absolute;
 right: 0;
 width: 120rpx;
 height: 160rpx;
 line-height: 160rpx;
 text-align: center;
 color: #fff;
 font-size: 30rpx;
}

.bus-list .bus-list-item.disabled .tobooking {
  background-color: #c5c5c5;
}

.bus-list .bus-list-item .detail {
 height: 80rpx;
 padding: 36rpx 0;
 margin: 0 140rpx 0 144rpx;
}

.bus-list .bus-list-item .detail  .sub-list{
    height: 52rpx;
}


.bus-list .bus-list-item .start, .bus-list .bus-list-item .end {
 color: #333333;
 font-size: 26rpx;
 
}

.bus-list .bus-list-item .price {
 font-family: Arial;
 color: #fd8f01;
 font-size: 32rpx;
 font-weight: 600;
}

.bus-list .bus-list-item.disabled .ticket {
 display: none;
}

.bus-list .bus-list-item .ticket {
  color: #fd8f01;
  font-size: 24rpx;
  border: 2rpx solid #fd8f01;
  padding: 2rpx 8rpx;
  border-radius: 10rpx;
  font-family: Arial;
}

.bus-list .bus-list-item.disabled .ticket {
  color: #c5c5c5;
}

.bus-list .bus-list-item .s-icon1 {
  margin: 0 10rpx;
  border-color: #00B358;
}

.bus-list .bus-list-item .s-icon2 {
  margin: 0 10rpx;
  border-color: #f06463;
}

.bus-list .bus-list-item .tags {
    width: 160rpx;
    text-align: right;
    position: absolute;
    right: 0;
    margin-right: 138rpx;
    margin-top: 34rpx;
    top: 0;
}
`} />
                    <Paragraph title={'这里考虑demo复杂度，列表页功能完成度也仅仅完成主功能模块，与真实工作完成度对比60%左右吧，于是我们开始愉快的代码，首先是将我们的页面样式实现：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art60.png')} alt="png"/>
                    <Paragraph title={'然后这里需求请求数据，所以我们去设置一个请求实体：'} />
<CodeBlock content={
`class ListModel extends DemoModel {
    constructor() {
      super();
      this.url = '/schedule/list';
    }
  }
  
  module.exports = {
    cityModel: new CityModel,
    city2Model: new City2Model,
    listModel: new ListModel
  
  }
`} />
<Paragraph title={'开始请求参数：'} />
<CodeBlock content={
`onLoad: function (data) {
    let scope = this;

    if(!data || !data.sid || !data.aid || !data.date) {
      this.showToast('参数错误');
      return
    }

    this.index = 0;
    let listModel = models.listModel;

    listModel.setParam({
      startcityid: data.sid,
      arrivalcityid: data.aid,
      startdatetime: data.date / 1000,
      page: this.index + 1
    });

    this.showLoading();
    listModel.execute(function(data) {
      scope.hideLoading();
      scope._appendList(data.schedules);

    });

  }
`} />
                    <Paragraph title={'接下来的工作便是渲染页面即可，如果不考虑细节，只是做demo，真的很轻易呢：）'} />
<CodeBlock content={
`//获取公共ui操作类实例
const _page = require('../../utils/abstract-page.js');
let modCalendar = require('../mod/calendar.js');
const models = require('../../data/demo-model.js')
const util = require('../../utils/util.js')

//获取应用实例
const app = getApp()

Page(_page.initPage({
  data: {
    listData: []
  },
  // methods: uiUtil.getPageMethods(),
  methods: {
  },

  goIndex: function () {

    wx.navigateTo({
      url: '../index/index'
    })
  },
  onShow: function () {
    global.sss = this;
    let scope = this;
  },

  _appendList: function (data) {

    for(let i = 0, len = data.length; i < len; i++) {
      data[i].dateStr = util.dateUtil.format(new Date(data[i].datetime * 1000), 'H:F' )
    }

    this.setData({
      listData: this.data.listData.concat(data)
    });
  },

  onLoad: function (data) {
    let scope = this;

    if(!data || !data.sid || !data.aid || !data.date) {
      this.showToast('参数错误');
      return
    }

    this.index = 0;
    let listModel = models.listModel;

    listModel.setParam({
      startcityid: data.sid,
      arrivalcityid: data.aid,
      startdatetime: data.date / 1000,
      page: this.index + 1
    });

    this.showLoading();
    listModel.execute(function(data) {
      scope.hideLoading();
      scope._appendList(data.schedules);

    });

  }
}, {
  modCalendar: modCalendar
}))
`} />
<CodeBlock content={
`<view class="page-wrapper ">
<view class="calendar-bar-wrapper js_calendar_wrapper">
  <view class="bus-tabs calendar-bar">
    <view class="tabs-item js_pre_day">前一天</view>
    <view class="tabs-item js_show_calendar" style="-webkit-flex: 2; flex: 2;">2018-8-6 周一(明天)</view>
    <view class="tabs-item js_next_day">后一天</view>
  </view>
</view>
<view class="bus-list js_bus_list ">

  <block wx:for="{{listData}}" wx:key="k">
    <view class="bus-list-item  ">
      <view class="bus-time">{{item.dateStr}}</view>
      <view class="tobooking"> 预订 </view>
      <view class="detail">
        <view class="detail1">
          <view class="start">
            <text class="icon-circle s-icon1"></text>{{item.startstationname}}</view>
          <view class="end">
            <text class="icon-circle s-icon2"></text>{{item.arrivalstationname}}</view>
        </view>
        <view class="tags">
          <view>
            <text class="price">￥{{item.price / 100}}</text>
          </view>
          <view>
            <text class="countleft">{{item.cansellcountamount}}张</text>
          </view>
          <view>
            <text class="b-tags js_tags"></text>
          </view>
        </view>
      </view>
    </view>

  </block>

</view>

<include src="../mod/calendar.wxml" />
<include src="../../utils/abstract-page.wxml" />


<view class="bus-list js_bus_list " ontap="goIndex">
  去首页
</view>
</view>
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art61.png')} alt="png"/>
                    <Paragraph title={'最后，我们完善一下这里日期相关操作，便暂时结束这次学习：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art62.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art63.png')} alt="png"/>
                    <Paragraph title={'列表页的一些总结'} />
                    <Paragraph title={'我们做小程序相关学习有快两周了，完成了一个简单的demo，项目还是有一定复杂度，感觉上还是比较适合做小程序了解的，但是也有一些问题，比如写到后面事实上更多是业务的东西了，业务会涉及很多细节体验，需要耗时费力，比如今天的列表业务，显然就偷懒了，代码质量也没怎么关注，事实上大家可以思考一些问题，这里还差很多功能：'} />
                    <Paragraph title={'① 滚动加载'} />
                    <Paragraph title={'② 列表各种状态'} />
                    <Paragraph title={'③ ......'} />
                    <Paragraph title={'事实上，列表页是常用的一种业务页面，虽然各种列表页的筛选条件不一样，但是主体功能无非都是：'} />
                    <Paragraph title={'① 列表渲染'} />
                    <Paragraph title={'② 滚动加载'} />
                    <Paragraph title={'③ 条件筛选、重新渲染'} />
                    <Paragraph title={'所以说我们其实可以将其做成一个页面基类，跟abstract-page一个意思，这里留待我们下次来处理吧，借此我们微信小程序的学习教程就此结束，我后面几天总结下前面所学整理一个博客出来，帮助各位更好的了解 '} />
                </div>
            </Container>
        )
    }
}

export default Sprogram_art7;