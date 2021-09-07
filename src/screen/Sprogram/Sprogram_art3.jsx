import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sprogram_art3 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'微信小程序开发03-这是一个组件'} />
                    <Label title={'编写组件'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'基本结构'} />
                    <Paragraph title={'我们今天先来实现这个弹出层：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art27.png')} alt="png"/>
                    <Paragraph title={'之前这个组件是一个容器类组件，弹出层可设置载入的html结构，然后再设置各种事件即可，这种组件有一个特点：'} />
                    <Paragraph title={'① 只提供Header部分以及容器部分'} />
                    <Paragraph title={'② 容器部分的HTML结构由业务层提供'} /> 
                    <Paragraph title={'③ 容器部分对应样式由业务层提供'} /> 
                    <Paragraph title={'我们如果要在小程序中实现这类组件，意味着我们需要往小程序中动态插入WXML结构，我们这里先做个demo，试试往动态插入WXML是不是可行'} />
<CodeBlock content={
`this.setData({'wxml':\`
    <my-component>
        <view>动态插入的节点</view> 
    </my-component>
\`});
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art28.png')} alt="png"/>
                    <Paragraph title={'小程序对应设置的数据进行了转义，所以并不能动态解析，如果站在性能角度思考，不进行动态解析也不是错误的；另一方面，一旦小程序能动态解析wxml，那么可能会涌出各种花式用法，控制力会减低，那么我们这里如何解决这个问题呢？我想的是，直接将业务级wxml结构放到页面里面，隐藏起来，需要使用弹出层的时候，直接将之装载进去，我们来看看是否可行，我们将我们需要展示的结构放到一个模板当中：'} />
<CodeBlock content={
`<template name="searchbox">
  <my-component>
      <view>动态组件部分</view> 
  </my-component>
</template>
`} />
                    <Paragraph title={'然后，我们在我们主界面中载入模板：'} />
<CodeBlock content={
`<import src="mod.searchbox.wxml"/>
<view>
  <my-component>
    <!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
     <view>这里是插入到组件slot中的内容</view> 
  </my-component>
</view>
<view>
  <template is="searchbox" />
</view>
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art29.png')} alt="png"/>
                    <Paragraph title={'主体结构放到页面中，我们传入数据模型或者控制显示即可，看起来是可行的，于是我们先实现我们基本的样式，因为业务模块的样子应该由业务提供，所以对应样式写到index.wxss里面：'} />
<CodeBlock content={
`.btn-primary {
    background-color: #00b358;
    color: #fff;
    border: 0 none;
}
.btn, .btn-primary, .btn-secondary, .btn-sub {
    line-height: 88rpx;
    height: 88rpx;
    padding: 0 20rpx;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    border-radius: 8rpx;
    cursor: pointer;
    font-size: 32rpx;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.full-width {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}


.c-row {
    width: auto;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-pack: justify;
    -webkit-box-align: stretch;
    -webkit-box-lines: single;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -webkit-justify-content: space-between;
    -webkit-align-items: strecth;
    -webkit-align-content: flex-start;
    -webkit-flex-wrap: nowrap;
    padding: 20rpx 40rpx;
}

.c-span3 {
    width: 25%;
    -webkit-box-flex: 3;
    -webkit-flex: 3 3 auto;
}

.c-span9 {
    width: 75%;
    -webkit-box-flex: 9;
    -webkit-flex: 9 9 auto;
}

.search-line {
    position: relative;
    height: 96rpx;
    line-height: 96rpx;
    font-size: 30rpx;
    font-weight: 600;
    border-bottom: 1rpx solid #e6e6e6;
}

.search-line::after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 20rpx;
    height: 20rpx;
    border-top: 4rpx solid #00b358;
    border-right: 4rpx solid #00b358;
    position: absolute;
    right: 60rpx;
    top: 50%;
    margin-top: -4rpx;
    -webkit-transform: rotate(45deg) translateY(-50%);
    transform: rotate(45deg) translateY(-50%);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.search-line-txt {
    text-align: right;
    padding-right: 60rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`} />
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
<view class="c-row " data-flag="arrive">
    <span class="btn-primary full-width js_search_list">查询</span>
</view>
</template>
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art30.png')} alt="png"/>
                    <Paragraph title={'如此一来，我们基本的弹出层样式就七七八八了，这里可以看出一些特点：小程序与平时我们的样式差距不大，稍微改点就能用，甚至能直接通用；另一方面，我们也需要思考一个问题：公共部分的CSS该怎么处理？其实我这里需要解决的不只是公共的样式部分，还需要解决公共的组件部分。'} />
                    <Paragraph title={'我这里想的是将所有公共部分的CSS放到一个全局的文件global.wxss中，然后在每个业务级页面import即可，所以我们这里需要形成一个公共的WXSS库，这个与纯web映射起来即可，我们这里便不深入。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'公共组件库'} />
                    <Paragraph title={'要提高开发效率的第一个前提就是要有足够多的UI组件，小程序本身提供了一些定制化的组件，我们仍然会用到的组件有：'} />
                    <Paragraph title={'① alert类弹出层'} />
                    <Paragraph title={'② loading类弹出层'} />
                    <Paragraph title={'③ 日历组件'} />
                    <Paragraph title={'④ toast&message类提示弹出组件'} />
                    <Paragraph title={'⑤ 容器类组件'} />
                    <Paragraph title={'⑥ ......'} />
                    <Paragraph title={'之前的做法，是我们将html实体和组件实现直接放到一起，css放到全局global里面去，现在小程序并不支持动态展示wxml，所以动态插入的方式行不通了，我们需要将组件的wxml放到页面里面做预加载，这里我想的是提供一个通用global.ui.wxml文件用以装载所有的wxml实体，常用的组件我们默认全局引入，我们这里先挑点软柿子来捏，我们先实现一个alert类弹出层组件'} />
                    <Paragraph title={'我们将原来弹出层类会用到的CSS全部翻译为WXSS，放入global.wxss中：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art31.png')} alt="png"/>
                    <Paragraph title={'然后我们每个组件都会有一个固定的生命周期：创建->显示->隐藏，这个生命周期是每个组件都具有的特性，所以我们这里应该引入继承概念实现组件，但是小程序官方提供的Components并没有提供继承概念，而是提供了behaviors概念，用以将组件间的公共部分处理掉，所以我们这里也使用behaviors，因为不能操作dom，我们的组件抽象会变得相对简单，不用记录太多dom节点了，另外小程序的组件与我们之前的“组件”从定义到使用上有很大的不同，之前我们是以js作为控制器，现在是以标签wxml作为控制器，根本没有办法在js中获取实例，而小程序组件的生命周期并不包含显示隐藏生命周期，所以他的组件和我们以为的组件有很大的不同'} />
                    <Paragraph title={'我思考了下为什么小程序中，js不能获取组件的实例，这里得出的结论是：'} />
                    <Paragraph style={{color: '#ff5b05'}} title={'小程序中所有的WXML必须在页面中进行预加载逻辑，不能动态插入DOM的方式插入WXML，所以小程序没有提供组件实例给我们控制, 所以在小程序中想完成组件库，那么便只能把组件做标签使用（而且是js不能获取的标签），而不是js组件，这样会有效帮助我们理解'} />
                    <Paragraph title={'我们这里尝试实现一个遮盖层的标签（这里开始不用组件这个词，感觉很有歧义）:'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art32.png')} alt="png"/>
<CodeBlock content={
`<view class="cm-overlay"></view>
`} />
<CodeBlock content={
`.cm-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
`} />
<CodeBlock content={
`let LayerView = require('behavior-layer-view')

Component({
  behaviors: [LayerView],

  data: {
    myData: {}
  },
  attached: function () { },
  methods: {
  }
})
`} />
                    <Paragraph title={'可以看到，这个遮盖层mask没有什么意义，而且一般来说mask也不会单独存在，一般是一个组件（比如弹出层的loading）会包含一个遮盖层，所以我们这里要改造下Mask的结构，让他可以装载组件，我们从js组件逻辑来说是mask应该是loading的一个实例，但是我们站在标签角度来说，他们两个应该是独立的：'} />
<CodeBlock content={
`<view class="cm-overlay">
    <slot></slot>
</view>
`} />
                    <Paragraph title={'我们这里实现一个loading的组件（PS：CSS3动画稍微要做点兼容调试）：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art33.png')} alt="png"/>
<CodeBlock content={
`.spinner {
    width: 140rpx;
    height: 140rpx;
    position: fixed;
    align-items: center;
    display: flex;
    top: 50%;
    left: 50%;
    margin-left: -70rpx;
    margin-top: -70rpx;
}

.container1 > view, .container2 > view, .container3 > view {
    width: 24rpx;
    height: 24rpx;
    background-color: #00b358;
    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.spinner .spinner-container {
    position: absolute;
    width: 66%;
    height: 66%;
    top: 10%;
    left: 10%;
}

.container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
}

.container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
}

.circle1 { top: 0; left: 0; }
.circle2 { top: 0; right: 0; }
.circle3 { right: 0; bottom: 0; }
.circle4 { left: 0; bottom: 0; }

.container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}

.container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

.container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}

.container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}

.container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
}

.container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
}

.container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
}

.container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
}

.container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
}

.container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
}

.container3 .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
    0%, 80%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
`} />
<CodeBlock content={
`<ui-mask z-index="{{maskzIndex}}" ></ui-mask>
<view class="spinner" style="z-index: {{meIndex}}">
  <view class="spinner-container container1">
    <view class="circle1"></view>
    <view class="circle2"></view>
    <view class="circle3"></view>
    <view class="circle4"></view>
  </view>
  <view class="spinner-container container2">
    <view class="circle1"></view>
    <view class="circle2"></view>
    <view class="circle3"></view>
    <view class="circle4"></view>
  </view>
  <view class="spinner-container container3">
    <view class="circle1"></view>
    <view class="circle2"></view>
    <view class="circle3"></view>
    <view class="circle4"></view>
  </view>
</view>
`} />
<CodeBlock content={
`const util = require('../utils/util.js');
let LayerView = require('behavior-layer-view');

Component({
  behaviors: [LayerView],

  data: {
    maskzIndex: util.getBiggerzIndex(),
    meIndex: util.getBiggerzIndex()
  },
  attached: function () { 
    console.log('loading')
  },
  methods: {
  }
})
`} />
                    <Paragraph title={'index调用情况：'} />
<CodeBlock content={
`<import src="./mod.searchbox.wxml" />

<view>
  <template is="searchbox" />
  <ui-loading></ui-loading>
</view>
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art34.png')} alt="png"/>
                    <Paragraph title={'我们后续将完整的项目代码放到github上去，这里便继续代码了'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'添加事件'} />
                    <Paragraph title={'于是，我们开始添加事件了，这里添加一个点击遮盖层关闭整个组件的功能，这里有个问题是，我们点击遮盖层事实上关闭的是遮盖以及loading两个标签，而我们这里的isShow属性便派上了用处，我们现在page中设置下属性：'} />
<CodeBlock content={
`<ui-loading is-show="{{isLoadingShow}}"></ui-loading>
`} />
<CodeBlock content={
`onShow: function() {
   this.setData({
     isLoadingShow: ''
   });
 },
`} />
                    <Paragraph title={'然后我们改造mask以及loading添加事件：'} />
<CodeBlock content={
`<view class="cm-overlay" style="z-index: {{zIndex}}; display: {{isShow}}" bindtap="onTap">
</view>
`} />
<CodeBlock content={
`let LayerView = require('behavior-layer-view')

Component({
  behaviors: [LayerView],

  data: {
    myData: {}
  },
  attached: function () { 
    console.log('mask')
  },
  methods: {
    onTap: function() {
      this.triggerEvent('customevent', {}, {})
    }
  }
})
`} />
<CodeBlock content={
`<ui-mask z-index="{{maskzIndex}}" is-show="{{isShow}}" bindcustomevent="onMaskEvent"></ui-mask>
<view class="spinner" style="z-index: {{meIndex}}; display: {{isShow}}; ">
  <view class="spinner-container container1">
    <view class="circle1"></view>
    <view class="circle2"></view>
    <view class="circle3"></view>
    <view class="circle4"></view>
  </view>
  <view class="spinner-container container2">
    <view class="circle1"></view>
    <view class="circle2"></view>
    <view class="circle3"></view>
    <view class="circle4"></view>
  </view>
  <view class="spinner-container container3">
    <view class="circle1"></view>
    <view class="circle2"></view>
    <view class="circle3"></view>
    <view class="circle4"></view>
  </view>
</view>
`} />
<CodeBlock content={
`const util = require('../utils/util.js');
let LayerView = require('behavior-layer-view');

Component({
  behaviors: [LayerView],

  data: {
    maskzIndex: util.getBiggerzIndex(),
    meIndex: util.getBiggerzIndex()
  },
  attached: function () { 
    console.log('loading')
  },
  methods: {
    onMaskEvent: function (e) {
      console.log(e);
      this.setData({
        isShow: 'none'
      });
    }
  }
})
`} />
                    <Paragraph title={'这个时候，当我们点击遮盖层的时候，我们整个组件便关闭了。'} />
                    <Paragraph style={{textIntent: 0, fontWeight: 700}} title={'这个时候，当我们点击遮盖层的时候，我们整个组件便关闭了。'} />
                    <Paragraph title={'我们今天花了很多功夫写一个loading，发现小程序中的组件事实上是标签，我们没法使用js获取到我们“组件”的实例，所以使用上有很大的区别，但是什么都不能阻碍我们写通用组件的决心，于是我们明天来写一些通用的组件库，并且形成一个小程序的体系，这里想的是有：'} />
                    <Paragraph title={'① 消息框'} />
                    <Paragraph title={'② toast提示'} />
                    <Paragraph title={'③ 日历组件'} />
                    <Paragraph title={'④ 然后再做一个需要定位的气泡组件'} />
                </div>
            </Container>
        )
    }
}

export default Sprogram_art3;