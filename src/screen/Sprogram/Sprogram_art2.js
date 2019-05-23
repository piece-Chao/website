import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sprogram_art2 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'微信小程序开发02-小程序基本介绍'} />
                    <Label title={'前言'} />
                    <Paragraph title={'前面我们研究了下微信小程序的执行流程，因为拿不到源码，只能算我们的猜想，我们需要更加了解小程序还需要做具体的项目'} />
                    <Paragraph title={'我们用小程序实现这里的代码，看看是个什么样的体验，另外我这里想保证代码最大程度重用，为后续一端代码四端运行做前驱探索。'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art20.png')} alt="png"/>
                    <Paragraph title={'页面复杂度还是比较高的，包括了：'} />
                    <Paragraph title={'① 弹出层'} />
                    <Paragraph title={'② 页面跳转'} />
                    <Paragraph title={'③ 缓存'} />
                    <Paragraph title={'④ 数据请求'} />
                    <Paragraph title={'⑤ 列表页、滚动分页'} />
                    <Paragraph title={'⑥ ......'} />
                    <Paragraph title={'我相信完成了这个例子，我们对小程序业务代码怎么写会有比较好的了解，于是让我们开始今天的代码吧。'} />
                    <Label title={'小程序的布局'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'为什么不使用HTML&CSS'} />
                    <Paragraph title={'微信小程序这种平台型的超越Hybrid系统诞生还是有一些客观条件的，其中一个就是移动端的应用相对来说简单的多，想想PC负责的布局，如果要使用小程序实现，那么复杂度会提高很多。'} />
                    <Paragraph title={'小程序代码编写逻辑层依旧使用JS完成，但是结构层以及样式层推出了：'} />
                    <Paragraph title={'① WXML，Weixin Markup Language，是微信设计的一套标签语言，与HTML类似，做过React&Vue的同学会非常熟悉'} />
                    <Paragraph title={'② WXSS，WeiXin Style Sheets，是一套样式语言，用于定义样式，与CSS类似，一般认为是CSS的子集'} />
                    <Paragraph title={'因为小程序中UI组件都是Native实现，所以小程序直接手起刀落压根放弃让我们使用HTML容器，这样做我觉得有个好处是：'} />
                    <Paragraph title={'为了更好的限制，我之前也在做Hybrid乃至前端框架，一般来说我会限制到View级别的实习，要求必须按照我的规则做，但是因为入口为index.html文件，我甚至将全局控制器App的实例化放到了main.js里面，只提供了建议的做法，事实上HTML还是太过灵活，有些同事逐渐根本不按照我们的规则玩，他觉得他的做法更好，但是这样一来便会破坏了项目的总体性，后续的工程性的优化或者监控可能就不能帮助他了，从某个角度来说，我是认可小程序的做法的。'} />
<CodeBlock content={
`<article class="cm-page page-list" id="main">
    <div class="js_sort_wrapper sort-bar-wrapper">
        <mySortBar :entity="sortEntity"></mySortBar>
    </div>
    <myList :entity="listEntity" :sort="sort"></myList>
</article>
`} />
                    <Paragraph title={'从这个文章以及小程序的实现可以看出基本的概念：'} />
                    <Paragraph title={'① 标签的出现根本不是做标签用，而是为了让JS捕捉执行相关逻辑，最后生成真正的标签'} />
                    <Paragraph title={'② 为了做更好的限制，小程序根本不提供入口index.html文件了，所以这里的标签是用作JS做模板解析后生成Native能识别的代码，更具体点说是，Native实现了一个组件，组件有很多规则，可以使用JS去调用，正如我们这里的header组件调用逻辑（JS会设置Native的Header组件展示）'} />
                    <Paragraph title={'当然，小程序底层具体是不是这么做，我们不得而知，如果有小程序的同事，可以指导下：），至此，我觉得可以从技术层面说明为什么不直接使用HTML&CSS了：更好的业务限制 + 方便JS解析模板被Native执行。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'小程序组件'} />
                    <Paragraph title={'我们之前做Hybrid应用的时候，事实上只提供了一个真正具有结构的组件Header，其他loading类的提示组件都比较简单，而我们看看小程序提供了哪些组件呢：'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'容器类组件'} />
                    <Paragraph title={'view&scroll-view&swiper等作为容器组件存在，这里官方有基本介绍，我们这里看看其中一个即可：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art21.png')} alt="png"/>
                    <Paragraph title={'这里官方给了一个demo进行说明：'} />
<CodeBlock content={
`<view class="section">
    <view class="section__title">flex-direction: row</view>
    <view class="flex-wrp" style="flex-direction:row;">
        <view class="flex-item bc_green">1</view>
        <view class="flex-item bc_red">2</view>
        <view class="flex-item bc_blue">3</view>
    </view>
    </view>
    <view class="section">
    <view class="section__title">flex-direction: column</view>
    <view class="flex-wrp" style="height: 300px;flex-direction:column;">
        <view class="flex-item bc_green">1</view>
        <view class="flex-item bc_red">2</view>
        <view class="flex-item bc_blue">3</view>
    </view>
</view>
`} />
<CodeBlock content={
`@import "../lib/weui.wxss";

.page-section{
    margin-bottom: 20rpx;
}
.flex-wrp {display: flex;}
.bc_green {background: green;width:100px; height: 100px;}
.bc_red {background: red;width:100px; height: 100px;}
.bc_blue {background: blue;width:100px; height: 100px;}
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art22.png')} alt="png"/>
                    <Paragraph title={'可以将这个标签理解为div类组件。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'swipe'} />
                    <Paragraph title={'一般来说，Native提供的轮播图体验要好得多，所以这里也提供了一个Native的组件：'} />
<CodeBlock content={
`<view class="container">
    <view class="page-body">
        <view class="page-section page-section-spacing swiper">
            <swiper
            indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" circular="{{circular}}" vertical="{{vertical}}"
            interval="{{interval}}" duration="{{duration}}" previous-margin="{{previousMargin}}px" next-margin="{{nextMargin}}px">
                <block wx:for="{{background}}" wx:key="*this">
                    <swiper-item>
                        <view class="swiper-item {{item}}"></view>
                    </swiper-item>
                </block>
            </swiper>
        </view>
        <view class="page-section" style="margin-top: 40rpx;margin-bottom: 0;">
            <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell weui-cell_switch">
                <view class="weui-cell__bd">指示点</view>
                <view class="weui-cell__ft">
                    <switch checked="{{indicatorDots}}" bindchange="changeProperty" data-property-name="indicatorDots" />
                </view>
            </view>
            <view class="weui-cell weui-cell_switch">
                <view class="weui-cell__bd">自动播放</view>
                <view class="weui-cell__ft">
                    <switch checked="{{autoplay}}" bindchange="changeProperty" data-property-name="autoplay" />
                </view>
            </view>
            <view class="weui-cell weui-cell_switch">
                <view class="weui-cell__bd">衔接滑动</view>
                <view class="weui-cell__ft">
                    <switch checked="{{circular}}" bindchange="changeProperty" data-property-name="circular" />
                </view>
            </view>
            <view class="weui-cell weui-cell_switch">
                <view class="weui-cell__bd">竖向</view>
                <view class="weui-cell__ft">
                    <switch checked="{{vertical}}" bindchange="changeProperty" data-property-name="vertical" />
                </view>
            </view>
            </view>
        </view>

        <view class="page-section page-section-spacing">
            <view class="page-section-title">
                <text>幻灯片切换时长(ms)</text>
                <text class="info">{{duration}}</text>
            </view>
            <slider value="{{duration}}" min="500" max="2000" bindchange="changeProperty" data-property-name="duration" />
            <view class="page-section-title">
                <text>自动播放间隔时长(ms)</text>
                <text class="info">{{interval}}</text>
            </view>
            <slider value="{{interval}}" min="2000" max="10000" bindchange="changeProperty" data-property-name="interval" />
            <view class="page-section-title">
                <text>前边距(px)</text>
                <text class="info">{{previousMargin}}</text>
            </view>
            <slider value="{{previousMargin}}" min="0" max="50" bindchange="changeProperty" data-property-name="previousMargin" />
            <view class="page-section-title">
                <text>后边距(px)</text>
                <text class="info">{{nextMargin}}</text>
            </view>
            <slider value="{{nextMargin}}" min="0" max="50" bindchange="changeProperty" data-property-name="nextMargin" />
        </view>
    </view>
</view>
`} />
<CodeBlock content={
`Page({
    data: {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0
    },
    changeProperty: function (e) {
      var propertyName = e.currentTarget.dataset.propertyName
      var newData = {}
      newData[propertyName] = e.detail.value
      this.setData(newData)
    },
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    }
  })
`} />
                    <Paragraph title={'有demo有代码，还是比较清晰。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'movable-area'} />
                    <Paragraph title={'提供一个可以移动的区域，暂时没想到应用场景......'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'icon'} />
                    <Paragraph title={'图标，小程序这边还扩展了一下，给了很多默认的图标样式，能满足基本需求'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'text'} />
                    <Paragraph title={'文本'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'rich-text'} />
                    <Paragraph title={'富文本，用于展示文章，支持HTML，这里的nodes属性建议使用数组，类型，还不如系统自己解析js算了，因为不会有人像这样写代码（nodes看上去很蠢）：'} />
<CodeBlock content={
`Page({
    data: {
      html: '<div class="div_class" style="line-height: 60px; color: red;">Hello&nbsp;World!</div><script>console.log(1)</script>',
      nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: 'Hello&nbsp;World!'
        }]
      }]
    },
    tap() {
      console.log('tap')
    }
  })
`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'progress'} />
                    <Paragraph title={'进度条'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'button'} />
                    <Paragraph title={'按钮'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'checkbox'} />
                    <Paragraph title={'选择框'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'form'} />
                    <Paragraph title={'表单相关'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'input'} />
                    <Paragraph title={'输入框，小程序的数据流动是单向的，每次数据更新，动态调用setData改变数据便会触发view更新，底层实现便不知道了；文本框值改变js需要自己去获取'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'label'} />
                    <Paragraph title={'与html一致，用以点击文字操作控件，主要用于文本框'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'picker&picker-view'} />
                    <Paragraph title={'用于级联操作'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'navigator&function-page-navigator'} />
                    <Paragraph title={'页面链接，这个组件感觉不利于跳转收口，建议少用'} />
                    <Paragraph title={'其他组件请大家直接到这里来看demo，非常清晰：'} />
                    <Paragraph title={<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/map.html#map">https://developers.weixin.qq.com/miniprogram/dev/component/map.html#map</a></p>} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'总结'} />
                    <Paragraph title={'可以看出，小程序Native层是将常用的HTML标签分别都实现了一次，使用这些组件可以拼接处任何复杂的组件。至于样式方面，WXSS与CSS大同小异，其中主要区别是小程序没有使用px而是使用的rpx，这个类似于rem的实现，为了解决移动端的适配问题而存在，总而言之，你在iPhone6设计搞上是多少px就写成多少rpx就行，其余系统会帮你完成适配工作，这块透明做的很好，后续样式我们直接上实例即可。'} />
                    <Label title={'小程序的生命周期'} />
                    <Paragraph title={'我们这里上一张图：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art23.png')} alt="png"/>
                    <Paragraph title={'这张图不但真实反映了Page的生命周期，也将我们之前的猜想做了一个证明，解读这张图大概是这个意思（未必正确，如有错误请指出）：'} />
                    <Paragraph title={'Native层在载入小程序时候，起了两个线程一个的view Thread一个是AppService Thread，我这边理解下来应该就是程序逻辑执行与页面渲染分离，也许是想优化性能，这里更具体一点的解释是（带有猜测了）：微信会开一个webview来执行我们的JS逻辑，然后会开一个Native View UI执行页面渲染；两个部分是彼此独立的，页面点击时候触发事件，View线程会获取APPService服务线程（其实就是获取webview），执行其中的js逻辑；APPService执行js逻辑改变数据通过setData调用，触发一个JSCore通信，通知view线程执行UI更新，这里结合这张图做下理解：'} />
                    <Paragraph title={'① 微信打开一个小程序时，主UI线程继续运行，开启一个webview（我认为这里的主线程就是view Thread，webview就是APPService线程，这里可能有误）'} />
                    <Paragraph title={'② 主View等待构建页面命令，逻辑层开始载入js逻辑（编译过），微信底层应该会将WXML以及WXSS翻译为JS代码，逻辑层执行JS代码做一些初始化工作APP结束后，开始Page逻辑，而他这个图只有Page的逻辑，没有将app囊括进去，这里也引发了我一个疑惑：我在onLoad的时候打了个断点，而页面这个时候事实上已经进行了结构层的渲染，也就是说页面的WXML逻辑已经执行了：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art24.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art25.png')} alt="png"/>
                    <Paragraph title={'如果要按照我现有的逻辑下做解释的话，我认为实例化Page的时候，执行了一个create事件，但是小程序并没有释放onCreate事件让我们做注册，所以我这里知识体系的基础依旧是：'} />
<CodeBlock content={
`JS逻辑先于Native UI 执行，页面渲染是由实例化Page时候发出
`} />
                    <Paragraph title={'所以我觉得，这里的图好像少了一部分（或者说我理解是有问题的）：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art26.png')} alt="png"/>
                    <Paragraph title={'③ 业务线程执行实例化Page逻辑，引发onLoad、onShow事件，onShow的时候页面初步渲染已经结束，如果系统有异步数据或者其他再次数据渲染会执行setData，引发Native UI更新，逻辑结束'} />
                    <Paragraph title={'但是微信给出的图不可能是错的，而从图上看，首次异步通知是由View Thread发起的，我这里就很是困惑了😪，因为我认为逻辑发起者一定是逻辑层的js发出通知'} />
                    <Label title={'总结'} />
                    <Paragraph title={'今天我们对小程序进行了基本的了解学习，明天我们持续完成我们的demo吧'} />
                </div>
            </Container>
        )
    }
}

export default Sprogram_art2;