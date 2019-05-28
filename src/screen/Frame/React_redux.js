import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class React_redux extends React.Component {
    render() {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'redux简明学习'} />
                    <Paragraph title={'这几天被redux折腾的够呛，看了很多视频，也看了很多资料。很多时候，感觉好像顿悟了，但实际上只是理解了其中的一个小概念而已。真正去做项目的时候，还是会卡壳。可能是学CSS和Javascript时花的时间太久了，学redux的时候有点浮躁。还有就是redux内容实在是不少，全部都看都理解，好像没什么必要。不看吧，用的时候总是有点力不从心。于是，决定把这些资料按自己的理解写成博客，方便自己回忆思路，也希望能帮助到需要的人'} />
                    <Label title={'核心概念'} />
                    <Paragraph title={'redux专注于状态管理，把所有的状态都存在一个对象中。核心概念包括：store、state、action、reducer'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'【store】'} />
                    <Paragraph title={'store是保存数据的地方，redux提供createStore函数来生成 Store。函数参数是后面要介绍的reducer'} />
<CodeBlock content={
`import { createStore } from 'redux'
const store = createStore(reducer)
`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'【state】'} />
                    <Paragraph title={'state是store的某个时刻的快照，可以通过store.getState()取得当前时刻的state'} />
<CodeBlock content={
`const state = store.getState()
`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'【action】'} />
                    <Paragraph title={'action用来改变state。action是一个对象，其中的type属性是必须的，其他的属性一般用来设置改变state需要的数据'} />
<CodeBlock content={
`const action = {
    type: 'ADD_ONE',
    num: 1
}
`} />
                    <Paragraph title={'store.dispatch()是发出action的唯一方法'} />
<CodeBlock content={
`const action = {
    type: 'ADD_ONE',
    num: 1
}
store.dispatch(action)
`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'【reducer】'} />
                    <Paragraph title={'reducer 是一个函数，它接受action和当前state作为参数，返回一个新的state'} />
<CodeBlock content={
`import { createStore } from 'redux'
const store = createStore(reducer)
`} />
<CodeBlock content={
`const reducer = (state = 10, action) => {
    switch (action.type) {
      case 'ADD_ONE':
        return state + action.num;
      default: 
        return state;
    }
};
`} />
                    <Paragraph title={'当store.dispatch发送过来一个新的action，store就会自动调用reducer，得到新的state'} />
                    <Label title={'简单实例'} />
                    <Paragraph title={'多余的概念不再介绍，下面用上面介绍的这四个核心概念实现一个简单的实例，将create-react-app中index.js文件内容更改如下，即可运行'} />
<CodeBlock content={
`//第一步，创建action
const addOne = {
  type: 'ADD',
  num: 1
}
const addTwo = {
  type: 'ADD',
  num: 2
}
const square = {
  type: 'SQUARE'
}

//第二步，创建reducer
let math = (state = 10, action) => {
  switch (action.type) {
    case ADD:
      return state + action.num
    case SQUARE:
      return state * state
    default:
      return state
  }
}
//第三步，创建store
import { createStore } from 'redux'
const store = createStore(math)

//第四步，测试，通过dispatch发出action，并通过getState()取得当前state值
console.log(store.getState()) //默认值为10

store.dispatch(addOne) //发起'+1'的action
console.log(store.getState()) //当前值为10+1=11

store.dispatch(square) //发起'乘方'的action
console.log(store.getState()) //当前值为11*11=121

store.dispatch(addTwo) //发起'+2'的action
console.log(store.getState()) //当前值为121+2=123
`} />
                    <Paragraph title={'结果如下'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/redux1_1.png')} alt="redux"/>
                    <Label title={'目录结构'} />
                    <Paragraph title={'下面对目录结构进行划分'} />
                    <Paragraph title={'1、一般地，将action.type设置为常量，这样在书写错误时，会得到报错提示'} />
                </div>
            </Container>
        )
    }
}

export default React_redux;