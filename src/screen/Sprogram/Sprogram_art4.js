import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sprogram_art4 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'微信小程序开发04-打造自己的UI库'} />
                    <Label title={'前言'} />
                    <Paragraph title={'接上文继续，我们前面学习了小程序的生命周期、小程序的标签、小程序的样式，后面我们写了一个简单的loading组件，显然他是个半成品，我们在做loading组件的时候意识到一个问题：'} />
                    <Paragraph style={{fontWeight: 700, color: '#ff5b05'}} title={`小程序的组件事实上是标签
                    我们没有办法获得标签的实例，至少我暂时没有办法
                    所以这些前提让我们对标签的认识有很大的不同，完成小程序特有的UI库，那么就需要从标签出发
                    这里面关注的点从js中的实例变成了wxml中的属性`} />
                    <Paragraph title={'我们今天尝试做几个组件，然后先做未完成的loading，然后做消息类弹出组件，然后做日历组件，我希望在这个过程中，我们形成一套可用的体系，这里涉及了组件体系，我们可能需要整理下流程：'} />
                    <Paragraph title={'① 首先我们这里做的组件其实是“标签”，这个时候就要考虑引入时候的怎么处理了'} />
                    <Paragraph title={'② 因为写业务页面的同事（写page的同事），需要在json配置中引入需要使用的标签：'} />
<CodeBlock content={
`"usingComponents": {
    "ui-loading": "/components/ui-loading"
}
`} />
                    <Paragraph title={'因为不能动态插入标签，所以需要一开始就把标签放入页面wxml中：'} />
<CodeBlock content={
`<ui-loading is-show="{{isLoadingShow}}"></ui-loading>
`} />
                    <Paragraph title={'③ json中的配置暂时只能拷贝，但是我们可以提供一个ui-set.wxml来动态引入一些组件，如全局使用的loading弹出类提示框'} />
                    <Paragraph title={'④ 像日历类组件或者平时用的比较少的弹出层组件便需要自己在页面中引入了，工作量貌似不大，后续看看情况，如何优化'} />
                    <Paragraph title={'⑤ 我们这里给每个组件设置一个behaviors，behaviors原则只设置一层（这里有点继承的关系），层级多了变比较复杂了，弹出层类是一个、一般类一个（用于日历类组件）'} />
                    <Paragraph title={'有了以上标准，我们这里先来改造我们的loading组件'} />
                    <Paragraph title={'⑥ 默认所有的组件初期WXSS直接设置为隐藏'} />
                    <Label title={'改造loading'} />
                    <Paragraph title={'这里首先改造弹出层都要继承的behaviors behavior-layer：'} />
<CodeBlock content={
`const util = require('../utils/util.js')
module.exports = Behavior({
  properties: {
    //重要属性，每个组件必带，定义组件是否显示
    isShow: {
      type: String
    }
  },
  //这里设置弹出层必须带有一个遮盖层，所以每个弹出层都一定具有有个z-index属性
  data: {
    maskzIndex: util.getBiggerzIndex(),
    uiIndex: util.getBiggerzIndex()
  },
  attached: function() {
    console.log('layer')
  },
  methods: {
  }
})
`} />
                    <Paragraph title={'其次我们改造下我们的mask组件：'} />
<CodeBlock content={
`let LayerView = require('behavior-layer')
Component({
  behaviors: [LayerView],
  properties: {
    //只有mask的z-index属性需要被调用的弹出层动态设置
    zIndex: {
      type: String
    }
  },
  data: {
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
                    <Paragraph title={'WXML不做变化，便完成了我们的代码，并且结构关系似乎更加清晰了，但是作为loading组件其实是有个问题的，比如点击遮盖层要不要关闭整个组件，像类似这种点击遮盖层要不要关闭整个组件，其实该是一个公共属性，所以我们对我们的layer、mask继续进行改造（这里具体请看github代码）：'} />
<CodeBlock content={
`const util = require('../utils/util.js')
module.exports = Behavior({
  properties: {
    //重要属性，每个组件必带，定义组件是否显示
    isShow: {
      type: String
    }
  },
  //这里设置弹出层必须带有一个遮盖层，所以每个弹出层都一定具有有个z-index属性
  data: {
    maskzIndex: util.getBiggerzIndex(),
    uiIndex: util.getBiggerzIndex(),
    //默认点击遮盖层不关闭组件
    clickToHide: false
  },
  attached: function() {
    console.log('layer')
  },
  methods: {
  }
})
`} />
<CodeBlock content={
`methods: {
    onMaskEvent: function (e) {
      console.log(e);
      //如果设置了点击遮盖层关闭组件则关闭
      if (this.data.clickToHide)
        this.setData({
          isShow: 'none'
        });
    }
  }
`} />
                    <Paragraph title={'这个时候，点击要不要关闭，基本就在组件里面设置一个属性即可，但是我们这个作为了内部属性，没有释放出去，这个时候我们也许发现了另外一个比较幽默的场景了：'} />
                    <Paragraph title={'我们因为没法获取一个标签的实例，所以我们需要在页面里面动态调用：'} />
<CodeBlock content={
`onShow: function() {
    let scope= this;
    this.setData({
      isLoadingShow: ''
    });
    //3秒后关闭loading
    setTimeout(function () {
      scope.setData({
        isLoadingShow: 'none'
      });
    }, 3000);
  },
`} />
                    <Paragraph title={'可以看到，标签接入到页面后，控制标签事实上是动态操作他的属性，也就是说操作页面的状态数据，页面的UI变化全部是数据触发，这样的逻辑会让界面变得更加清晰，但是作为全局类的loading这种参数，我并不想放到各个页面中，因为这样会导致很多重复代码，于是我在utils目录中新建了一个ui-util的工具类，作为一些全局类的ui公共库：'} />
<CodeBlock content={
`//因为小程序页面中每个页面应该是独立的作用域
class UIUtil {
  constructor(opts) {
    //用于存储各种默认ui属性
    this.isLoadingShow = 'none';
  }
  //产出页面loading需要的参数
  getPageData() {
    return {
      isLoadingShow: this.isLoadingShow
    }
  }
  //需要传入page实例
  showLoading(page) {
    this.isLoadingShow = '';
    page.setData({
      isLoadingShow: this.isLoadingShow
    });
  }
  //关闭loading
  hideLoading(page) {
    this.isLoadingShow = 'none';
    page.setData({
      isLoadingShow: this.isLoadingShow
    });
  }
}

//直接返回一个UI工具了类的实例
module.exports = new UIUtil
`} />
                    <Paragraph title={'index.js使用上产生一点变化：'} />
<CodeBlock content={
`//获取公共ui操作类实例
const uiUtil = require('../../utils/ui-util.js');
//获取应用实例
const app = getApp()
Page({
  data: uiUtil.getPageData(),
  onShow: function() {
    let scope= this;
    uiUtil.showLoading(this);
    //3秒后关闭loading
    setTimeout(function () {
      uiUtil.hideLoading(scope);
    }, 3000);
  },
  onLoad: function () {
  }
})
`} />
                    <Paragraph title={'这样，我们将页面里面要用于操作组件的数据全部放到了一个util类中，这样代码会变得清晰一些，组件管理也放到了一个地方，只是命名规范一定要安规则来，似乎到这里，我们的loading组件改造结束了，这里却有一个问题，我们在ui-util类中存储的事实上是页面级的数据，其中包含是组件的状态，但是真实情况我们点击遮盖层关闭组件，根本不会知会page层的数据，这个时候我们loading的显示状态搞不好是显示，而真实的组件已经关闭了，如何保证状态统一我们后面点再说，我暂时没有想到好的办法。'} />
                    <Label title={'toast组件'} />
                    <Paragraph title={'我们现在先继续作toast组件，toast组件一样包含一个遮盖层，但是点击的时候可以关闭遮盖层，显示3秒后关闭，显示多久关闭的属性应该是可以配置的（作为属性传递），所以我们新增组件：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art35.png')} alt="png"/>
<CodeBlock content={
`const util = require('../utils/util.js');
let LayerView = require('behavior-layer');

Component({
  behaviors: [
    LayerView
  ],
  properties: {
    message: {
      type: String
    }
  },
  data: {
  },
  attached: function () { 
    console.log(this)
  },
  methods: {
    onMaskEvent: function (e) {
      console.log(e);
      //如果设置了点击遮盖层关闭组件则关闭
      if (this.data.clickToHide)
        this.setData({
          isShow: 'none'
        });
    }
  }
})
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art36.png')} alt="png"/>
                    <Paragraph title={'整体代码请各位在git上面去看，这里也引起了一些问题：'} />
                    <Paragraph title={'① 我的组件如何居中？'} />
                    <Paragraph title={'② 一般来说toast消失的时候是可以定制化一个事件回调的，我们这里怎么实现？'} />
                    <Paragraph title={'这里我们先抛开居中问题，我们先来解决第二个问题，因为小程序中没有addEventListener这个方法，所以能够改变组件特性的方式只剩下数据操作，回顾我们这里可以引起组件隐藏的点只有：'} />
                    <Paragraph title={'① toast中的点击弹出层时改变显示属性'} />
<CodeBlock content={
`onMaskEvent: function (e) {
    console.log(e);
    //如果设置了点击遮盖层关闭组件则关闭
    if (this.data.clickToHide)
      this.setData({
        isShow: 'none'
      });
}
`} />
                    <Paragraph title={'② 然后就是页面中动态改变数据属性了：'} />
<CodeBlock content={
`onMaskEvent: function (e) {
    console.log(e);
    //如果设置了点击遮盖层关闭组件则关闭
    if (this.data.clickToHide)
        this.setData({
        isShow: 'none'
        });
}
`} />
                    <Paragraph title={'这里，我们不得不处理之前的数据同步问题了，我们应该给toast提供一个事件属性可定义的点，点击遮盖层的真正处理逻辑需要放到page层，其实认真思考下，标签就应该很纯粹，不应该与业务相关，只需要提供钩子，与业务相关的是page中的业务，这个时候大家可以看到我们代码之间的关联是多么的复杂了：'} />
                    <Paragraph title={'① 页面index.js依赖于index.wxml中组件的标签，并且依赖于uiUtil这个工具类'} />
                    <Paragraph title={'② 单单一个toast组件（标签）便依赖了mask标签，一个工具栏，还有基础的layer behavior'} />
                    <Paragraph title={'③ 因为不能获取实例，所以组件直接通信只能通过标签的bindevent的做法，让情况变得更加诡异'} />
                    <Paragraph title={'从这里看起来，调用方式也着实太复杂了，而这还仅仅是一个简单的组件，这个是不是我们写法有问题呢？答案是！我的思路还是以之前做js的组件的思路，但是小程序暂时不支持动态插入标签，所以我们不应该有过多的继承关系，其中的mask是没有必要的；另一方面，每个页面要动态引入ui-utils这个莫名其妙的组件库，似乎也很别扭，所以我们这里准备进行改造，降低没有必要的复杂度'} />
                    <Label title={'组件改造'} />
                    <Paragraph title={'经过思考，我们这里准备做以下优化（PS：我小程序也是上星期开始学习的，需要逐步摸索）：'} />
                    <Paragraph title={'① 保留mask组件，但是去除toast、loading类组件与其关联，将WXML以及样式直接内联，使用空间复杂度降低代码复杂度'} />
                    <Paragraph title={'② 取消ui-uitil攻击类，转而实现一个page基类'} />
                    <Paragraph title={'我们这里先重新实现toast组件：'} />
<CodeBlock content={
`//behavior-layer
const util = require('../utils/util.js')
module.exports = Behavior({
  properties: {
    //重要属性，每个组件必带，定义组件是否显示
    isShow: {
      type: String
    }
  },
  //这里设置弹出层必须带有一个遮盖层，所以每个弹出层都一定具有有个z-index属性
  data: {
    maskzIndex: util.getBiggerzIndex(),
    uiIndex: util.getBiggerzIndex(),
    //默认点击遮盖层不关闭组件
    clickToHide: true
  },
  attached: function() {
    console.log('layer')
  },
  methods: {
    onMaskEvent: function (e) {
      this.triggerEvent('maskevent', e, {})
    }
  }
})
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

.cm-modal {
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  border-radius: 8rpx;
}

.cm-modal--toast {
  width: auto;
  margin-top: -38rpx;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20rpx 30rpx;
  text-align: center;
  font-size: 24rpx;
  white-space: nowrap;
  position: fixed;
  top: 50%;
  left: 50%;

}
.cm-modal--toast .icon-right {
  display: inline-block;
  margin: 10rpx 0 24rpx 10rpx;
}
.cm-modal--toast .icon-right::before {
  content: "";
  display: block;
  width: 36rpx;
  height: 16rpx;
  border-bottom: 4rpx solid #fff;
  border-left: 4rpx solid #fff;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
`} />
<CodeBlock content={
`<section class="cm-modal cm-modal--toast" style="z-index: {{uiIndex}}; display: {{isShow}}; ">
   {{message}}
</section>
<view class="cm-overlay" bindtap="onMaskEvent" style="z-index: {{maskzIndex}}; display: {{isShow}}" >
</view>
`} />
<CodeBlock content={
`const util = require('../utils/util.js');
let LayerView = require('behavior-layer');
Component({
  behaviors: [
    LayerView
  ],
  properties: {
    message: {
      type: String
    }
  },
  data: {
  },
  attached: function () { 
    console.log(this)
  },
  methods: {
  }
})
`} />
                    <Paragraph title={'页面层的使用不必变化就已经焕然一新了，这个时候我们开始做ui-util与page关系的改造，看看能不能让我们的代码变得简单，我这里的思路是设计一个公共的abstract-view出来，做所有页面的基类：'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art37.png')} alt="png"/>
<CodeBlock content={
`class Page {
    constructor(opts) {
        //用于基础page存储各种默认ui属性
        this.isLoadingShow = 'none';
        this.isToastShow = 'none';
        this.toastMessage = 'toast提示';

        //通用方法列表配置，暂时约定用于点击
        this.methodSet = [
            'onToastHide', 'showToast', 'hideToast', 'showLoading', 'hideLoading'
        ];

        //当前page对象
        this.page = null;
    }
    initPage(pageData) {
        //debugger;

        let _pageData = {};

        //为页面动态添加操作组件的方法
        Object.assign(_pageData, this.getPageFuncs(), pageData);

        //生成真实的页面数据
        _pageData.data = {};
        Object.assign(_pageData.data, this.getPageData(), pageData.data || {});

        console.log(_pageData);
        return _pageData;
    }
    //当关闭toast时触发的事件
    onToastHide(e) {
        this.hideToast();
    }
    //设置页面可能使用的方法
    getPageFuncs() {
        let funcs = {};
        for (let i = 0, len = this.methodSet.length; i < len; i++ ) {
            funcs[this.methodSet[i]] = this[this.methodSet[i]];
        }
        return funcs;
    }
    //产出页面组件需要的参数
    getPageData() {
        return {
            isLoadingShow: this.isLoadingShow,
            isToastShow: this.isToastShow,
            toastMessage: this.toastMessage
        }
    }
    showToast(message) {
        this.setData({
            isToastShow: '',
            toastMessage: message
        });
    }
    hideToast() {
        this.setData({
            isToastShow: 'none'
        });
    }
    //需要传入page实例
    showLoading() {
        this.setData({
            isLoadingShow: ''
        });
    }
    //关闭loading
    hideLoading() {
        this.setData({
            isLoadingShow: 'none'
        });
    }
}
//直接返回一个UI工具了类的实例
module.exports = new Page

abstract-view
`} />
                    <Paragraph title={'这里还提供了一个公共模板用于被页面include，abstract-view.wxml：'} />
<CodeBlock content={
`const util = require('../utils/util.js');
let LayerView = require('behavior-layer');
Component({
    behaviors: [
    LayerView
    ],
    properties: {
    message: {
        type: String
    }
    },
    data: {
    },
    attached: function () { 
    console.log(this)
    },
    methods: {
    }
})
`} />
                    <Paragraph title={'页面调用时候的代码发生了很大的变化：'} />
<CodeBlock content={
`<import src="./mod.searchbox.wxml" />
<view>
  <template is="searchbox" />
</view>
<include src="../../utils/abstract-page.wxml"/>
`} />
<CodeBlock content={
`//获取公共ui操作类实例
const _page = require('../../utils/abstract-page.js');
//获取应用实例
const app = getApp()

Page(_page.initPage({
  data: {
    ttt: 'ttt'

  },
  // methods: uiUtil.getPageMethods(),
  methods: {
  },
  onShow: function () {
     let scope = this;
     this.showToast('我是美丽可爱的toast');
     // 3秒后关闭loading
    //  setTimeout(function () {
    //    scope.hideToast();
    //  }, 3000);
  },
  onLoad: function () {
    // this.setPageMethods();
  }
}))
`} />
                    <Paragraph title={<p>这样我们相当于变相给page赋能了，详情请各位看github上的代码：<a href='https://github.com/yexiaochai/wxdemo'>https://github.com/yexiaochai/wxdemo</a>，这个时候，我们要为toast组件添加关闭时候的事件回调，就变得相对简单了，事实上我们可以看到这个行为已经跟组件本身没有太多关系了：</p>} />
<CodeBlock content={
`this.showToast('我是美丽可爱的toast', function () { console.log('执行回调')} );
`} />
                    <Paragraph title={'当然这里可以做得更加人性化，比如显示时间是根据message长度动态设置的，我们这里先这样。'} />
                    <Label title={'alert类组件'} />
                    <Paragraph title={'本篇篇幅已经比较长了，我们最后完成一个alert组件便结束今天的学习，明天主要实现日历等组件，alert组件一般是一个带确定框的提示弹出层，有可能有两个按钮，那个情况要稍微复杂点，我们这里依旧为其新增组件结构wxml以及wxss：'} />
<CodeBlock content={
`//获取公共ui操作类实例
const _page = require('../../utils/abstract-page.js');
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
    this.showMessage({
      message: '我是一个确定框',
      ok: {
        name: '确定',
        callback: function () {
          scope.hideMessage();
          scope.showMessage('我选择了确定');
        }
      },
      cancel: {
        name: '取消',
        callback: function () {
          scope.hideMessage();
          scope.showToast('我选择了取消');
        }
      }
    });

  },
  onLoad: function () {
    // this.setPageMethods();
  }
}))
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art38.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art39.png')} alt="png"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sprogram_art40.png')} alt="png"/>
                    <Label title={'结语'} />
                    <Paragraph title={'今天我们似乎找到了一个适合小程序的组件编写方式，明天我们继续完成一些组件，组件完成后我们便开始写实际业务代码了'} />
                </div>
            </Container>
        )
    }
}

export default Sprogram_art4;