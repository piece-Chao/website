import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Responsive extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'vue响应式原理'} />
                    <Paragraph title={'Vue 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新'} />
                    <Label title={'如何追踪变化'} />
                    <Paragraph title={'当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。'} />
                    <Paragraph title={'这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在属性被访问和修改时通知变更。这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装 vue-devtools 来获取对检查数据更加友好的用户界面。'} />
                    <Paragraph title={'每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/responsiveData.png')} alt="responsiveData"/>
                    <Label title={'检测变化的注意事项'} />
                    <Paragraph title={'受现代 JavaScript 的限制 (而且 Object.observe 也已经被废弃)，Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。例如：'} />
<CodeBlock content={
`var vm = new Vue({
    data:{
        a:1
    }
})
  
// vm.a 是响应式的

vm.b = 2
// vm.b 是非响应式的`
}/>
                    <Paragraph title={'对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性。例如，对于：'} />
<CodeBlock content={
`Vue.set(vm.someObject, 'b', 2)`
}/>
                    <Paragraph title={'您还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：'} />
<CodeBlock content={
`this.$set(this.someObject,'b',2)`
}/>
                    <Paragraph title={'有时你可能需要为已有对象赋值多个新属性，比如使用 Object.assign() 或 _.extend()。但是，这样添加到对象上的新属性不会触发更新。在这种情况下，你应该用原对象与要混合进去的对象的属性一起创建一个新的对象。'} />
<CodeBlock content={
`// 代替 Object.assign(this.someObject, { a: 1, b: 2 })
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })`
}/>
                    <Label title={'声明响应式属性'} />
                    <Paragraph title={'由于 Vue 不允许动态添加根级响应式属性，所以你必须在初始化实例前声明所有根级响应式属性，哪怕只是一个空值：'} />
<CodeBlock content={
`var vm = new Vue({
    data: {
        // 声明 message 为一个空值字符串
        message: ''
    },
    template: '<div>{{ message }}</div>'
})
// 之后设置 message
vm.message = 'Hello!`
}/>
                    <Paragraph title={'如果你未在 data 选项中声明 message，Vue 将警告你渲染函数正在试图访问不存在的属性。'} />
                    <Paragraph title={'这样的限制在背后是有其技术原因的，它消除了在依赖项跟踪系统中的一类边界情况，也使 Vue 实例能更好地配合类型检查系统工作。但与此同时在代码可维护性方面也有一点重要的考虑：data 对象就像组件状态的结构 (schema)。提前声明所有的响应式属性，可以让组件代码在未来修改或给其他开发人员阅读时更易于理解。'} />
                    <Label title={'异步更新队列'} />
                    <Paragraph title={'可能你还没有注意到，Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。'} />
                    <Paragraph title={'例如，当你设置 vm.someData = new value，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。例如：'} />
<CodeBlock content={
`<div id="example">{{message}}</div>`
}/>
<CodeBlock content={
`var vm = new Vue({
    el: '#example',
    data: {
        message: '123'
    }
})
vm.message = 'new message' // 更改数据
vm.$el.textContent === 'new message' // false
Vue.nextTick(function () {
    vm.$el.textContent === 'new message' // true
})`
}/>
                    <Paragraph title={'在组件内使用 vm.$nextTick() 实例方法特别方便，因为它不需要全局 Vue，并且回调函数中的 this 将自动绑定到当前的 Vue 实例上：'} />
<CodeBlock content={
`Vue.component('example', {
    template: '<span>{{ message }}</span>',
    data: function () {
        return {
            message: '未更新'
        }
    },
    methods: {
        updateMessage: function () {
            this.message = '已更新'
            console.log(this.$el.textContent) // => '未更新'
            this.$nextTick(function () {
                console.log(this.$el.textContent) // => '已更新'
            })
        }
    }
})`
}/>
                    <Paragraph title={'因为 $nextTick() 返回一个 Promise 对象，所以你可以使用新的 ES2017 async/await 语法完成相同的事情：'} />
<CodeBlock content={
`methods: {
    updateMessage: async function () {
        this.message = '已更新'
        console.log(this.$el.textContent) // => '未更新'
        await this.$nextTick()
        console.log(this.$el.textContent) // => '已更新'
    }
}`
}/>
                </div>
            </Container>
        )
    }
}

export default Responsive;
