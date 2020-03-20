import React from 'react';
import Container from '@/screen/Container';
import { Title, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sprogram_art5 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'微信小程序开发05-日历组件的实现'} />
                    <Paragraph title={'我们这里继续实现我们的日历组件，这个日历组件稍微有点特殊，算是相对复杂的组件了，然后一般的日历组件又会有很多的变化，所以我们这里实现最基本的标签即可：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art41.png')} alt="png"/>
<CodeBlock content={
`let View = require('behavior-view');
const util = require('../utils/util.js');

// const dateUtil = util.dateUtil;

Component({
  behaviors: [
    View
  ],
  properties: {
    
  },
  data: {
    weekDayArr: ['日', '一', '二', '三', '四', '五', '六'],
    displayMonthNum: 1,

    //当前显示的时间
    displayTime: null,
    //可以选择的最早时间
    startTime: null,
    //最晚时间
    endTime: null,

    //当前时间，有时候是读取服务器端
    curTime: new Date()
    
  },

  attached: function () { 
    //console.log(this)
  },
  methods: {
   
  }
})
`} />
<CodeBlock content={
`<wxs module="dateUtil">
var isDate = function(date) {
  return date && date.getMonth;
};

var isLeapYear = function(year) {
  //传入为时间格式需要处理
  if (isDate(year)) year = year.getFullYear()
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) return true;
  return false;
};

var getDaysOfMonth = function(date) {
  var month = date.getMonth(); //注意此处月份要加1，所以我们要减一
  var year = date.getFullYear();
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

var getBeginDayOfMouth = function(date) {
  var month = date.getMonth();
  var year = date.getFullYear();
  var d = getDate(year, month, 1);
  return d.getDay();
}

var getDisplayInfo = function(date) {
  if (!isDate(date)) {
    date = getDate(date)
  }
  var year = date.getFullYear();

  var month = date.getMonth();
  var d = getDate(year, month);

  //这个月一共多少天
  var days = getDaysOfMonth(d);

  //这个月是星期几开始的
  var beginWeek = getBeginDayOfMouth(d);

  /*
      console.log('info',JSON.stringify( {
        year: year,
        month: month,
        days: days,
        beginWeek: beginWeek
      }));
  */

  return {
    year: year,
    month: month,
    days: days,
    beginWeek: beginWeek
  }
}

module.exports = {
  getDipalyInfo: getDisplayInfo
}
</wxs>


<view class="cm-calendar">
<view class="cm-calendar-hd ">
  <block wx:for="{{weekDayArr}}">
    <view class="item">{{item}}</view>
  </block>
</view>
<view class="cm-calendar-bd ">
  <view class="cm-month ">
  </view>
  <view class="cm-day-list">

    <block wx:for="{{dateUtil.getDipalyInfo(curTime).days + dateUtil.getDipalyInfo(curTime).beginWeek}}" wx:for-index="index">

      <view wx:if="{{index < dateUtil.getDipalyInfo(curTime).beginWeek }}" class="item active"></view>
      <view wx:else class="item">{{index + 1 - dateUtil.getDipalyInfo(curTime).beginWeek}}</view>

    </block>

    <view class=" active  cm-item--disabled " data-cndate="" data-date="">

    </view>
  </view>
</view>
</view>
`} />
                    <Paragraph title={'这个是非常简陋的日历雏形，在代码过程中有以下几点比较痛苦：'} />
                    <Paragraph title={'① WXML与js间应该只有数据传递，根本不能传递方法，应该是两个webview的通信，而日历组件这里在WXML层由不得不写一点逻辑'} />
                    <Paragraph title={'② 本来在WXML中写逻辑已经不太对了，而我们引入的WXS，使用与HTML中的js片段也有很大的不同'} />
                    <Paragraph title={'这些问题，一度让代码变得复杂，而可以看到一个简单的组件，还没有复杂功能，涉及到的文件都太多了，这里是调用层：'} />
<CodeBlock content={
`<ui-calendar  is-show="" ></ui-calendar>
`} />
                    <Paragraph title={'事实上，我们以上数据根本不应该写到data里面，应该属性传递，我们这里先为了简单实现功能，接下来我们继续完善这个组件，具体代码请看git：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art42.png')} alt="png"/>
                    <Paragraph title={'这个日历组件应该是在小程序中写的最复杂的组件了，尤其是很多逻辑判断的代码都放在了WXML里面，根据之前的了解，小程序渲染在一个webview中，js逻辑在一个webview中，他这样做的目的可能是想让性能更好，但是我这里代码写起来事实上是有点痛苦的，我们这里开始组装组件，将数据配置放到属性上，开始组装abstract-page，事实上我认为日历这种非全局组件本来不应该放到基类中：'} />
                    <Paragraph title={'① 因为Component提供的是一个标签，而且涉及的文件很多，加上继承关系很不好管理'} />
                    <Paragraph title={'② 因为日历组件事实上是一个标签，所以我们会有一个引入的基础WXML，一个使用的js，完全独立一个文件更加复杂'} />
                    <Paragraph title={'③ 本来小程序或者复杂的页面都应该组件化开发，所以我们简历一个页面级别的组件，分散到对应的页面中'} />
                    <Paragraph title={'小程序像是给灵活的HTML&JS戴上了枷锁，只允许在其允许的范围灵活，我们这里尝试对页面进行再拆分：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art43.png')} alt="png"/>
<CodeBlock content={
`<import src="./mod.searchbox.wxml" />
<view>
  <template is="searchbox" />
</view>
<include src="./mod/calendar.wxml"/>
<include src="../../utils/abstract-page.wxml"/>
`} />
<CodeBlock content={
`<ui-calendar displayTime="{{CalendarDisplayTime}}"
selectedDate="{{CalendarSelectedDate}}"
displayMonthNum="{{CalendarDisplayMonthNum}}"
is-show="{{isCalendarShow}}" ></ui-calendar>
`} />
<CodeBlock content={
`/*
事实上一个mod就只是一个对象,只不过为了方便拆分,将对象分拆成一个个的mod
一个mod对应一个wxml,但是共享外部的css,暂时如此设计
所有日历模块的需求全部再此实现
*/
module.exports = {
  q: 1,
  ddd: function(){},

  data: {
    isCalendarShow: '',
    CalendarDisplayMonthNum: 2,
    CalendarDisplayTime: new Date(),
    CalendarSelectedDate: null
  }
}
`} />
                    <Paragraph title={'核心代码还是在abstract-page里面：'} />
<CodeBlock content={
`//pageData为页面级别数据,mod为模块数据,要求一定不能重复
initPage(pageData, mod) {
  //debugger;
  let _pageData = {};
  let key, value, k, v;

  //为页面动态添加操作组件的方法
  Object.assign(_pageData, this.getPageFuncs(), pageData);

  //生成真实的页面数据
  _pageData.data = {};
  Object.assign(_pageData.data, this.getPageData(), pageData.data || {});

  for( key in mod) {
    value = mod[key];
    for(k in value) {
      v = value[k];
      if(k === 'data') {
        Object.assign(_pageData.data, v);
      } else {
        _pageData[k] = v;
      }
    }
  }

  console.log(_pageData);
  return _pageData;
}
`} />
                    <Paragraph title={'这里再改造一下，我们基本的日历组件便完成了80%了：'} />
<CodeBlock content={
`/*
事实上一个mod就只是一个对象,只不过为了方便拆分,将对象分拆成一个个的mod
一个mod对应一个wxml,但是共享外部的css,暂时如此设计
所有日历模块的需求全部再此实现
*/
module.exports = {
  q: 1,
  ddd: function(){},
  onCalendarDayTap: function (e) {
    let data = e.detail;
    var date = new Date(data.year, data.month, data.day);
    console.log(date)
    this.setData({
      calendarSelectedDate: date
    });
  },
  data: {
    isCalendarShow: '',
    calendarDisplayMonthNum: 2,
    calendarDisplayTime: new Date(),
    calendarSelectedDate: null
  }
}
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art44.png')} alt="png"/>
                    <Paragraph title={'至此，我们组件相关课题基本结束，接下来，我们开始我们的业务代码'} />
                </div>
            </Container>
        )
    }
}

export default Sprogram_art5;