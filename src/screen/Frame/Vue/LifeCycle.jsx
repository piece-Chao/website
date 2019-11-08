import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class LifeCycle extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'生命周期钩子'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/lifecycle.png')} alt="lifecycle"/>
                    <Paragraph style={{background: '#eee', fontSize: '13px'}} title={'所有的生命周期钩子自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着你不能使用箭头函数来定义一个生命周期方法 (例如 created: () => this.fetchTodos())。这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同，this.fetchTodos 的行为未定义。'} />
                    <Label title={'beforeCreate'} />
                    <Paragraph title={'在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。'} />
                    <Label title={'created'} />
                    <Paragraph title={'在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。'} />
                    <Label title={'beforeMount'} />
                    <Paragraph title={'在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。'} />
                    <Label title={'mounted'} />
                    <Paragraph title={'el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。'} />
                    <Paragraph title={'注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉，该钩子在服务器端渲染期间不被调用。'} />
<CodeBlock content={
`mounted: function () {
    this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
    })
}`
}/>
                    <Label title={'beforeUpdate'} />
                    <Paragraph title={'数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。'} />
                    <Label title={'updated'} />
                    <Paragraph title={'由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。'} />
                    <Paragraph title={'当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。'} />
                    <Paragraph title={'注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉，该钩子在服务器端渲染期间不被调用。'} />
<CodeBlock content={
`updated: function () {
    this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been re-rendered
    })
}`
}/>
                    <Label title={'activated'} />
                    <Paragraph title={'keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。'} />
                    <Label title={'deactivated'} />
                    <Paragraph title={'keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。'} />
                    <Label title={'beforeDestroy'} />
                    <Paragraph title={'实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。'} />
                    <Label title={'destroyed'} />
                    <Paragraph title={'Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。'} />
                    <Label title={'errorCaptured'} />
                    <Paragraph title={'当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。'} />
                </div>
            </Container>
        )
    }
}

export default LifeCycle;
