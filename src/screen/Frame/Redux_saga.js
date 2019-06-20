import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Redux_saga extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'redux-saga简明学习'} />
                    <Label title={'概念'} />
                    <Paragraph title={'redux-saga 是一个用于管理应用程序 Side Effect（副作用，例如异步获取数据，访问浏览器缓存等）的 library，它的目标是让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易。'} />
                    <Paragraph title={'redux-saga是一个用于管理redux应用异步操作的中间件，redux-saga通过创建sagas将所有异步操作逻辑收集在一个地方集中处理，可以用来代替redux-thunk中间件。'} />
                    <Paragraph title={'这意味着应用的逻辑会存在两个地方'} />
                    <Paragraph title={'(1) reducer负责处理action的stage更新'} />
                    <Paragraph title={'(2) sagas负责协调那些复杂或者异步的操作'} />
                    <Paragraph title={'sagas是通过generator函数来创建的'} />
                    <Paragraph title={'sagas可以被看作是在后台运行的进程。sagas监听发起的action，然后决定基于这个action来做什么 (比如：是发起一个异步请求，还是发起其他的action到store，还是调用其他的sagas 等 )'} />
                    <Paragraph title={'在redux-saga的世界里，所有的任务都通过用 yield Effects 来完成 ( effect可以看作是redux-saga的任务单元 )'} />
                    <Paragraph title={'Effects 都是简单的 javascript对象，包含了要被 saga middleware 执行的信息'} />
                    <Paragraph title={'redux-saga 为各项任务提供了各种 （ Effects创建器 )'} />
                    <Paragraph title={'redux-saga 为各项任务提供了各种 （ Effects创建器 )'} />
                    <Paragraph title={'因为使用了generator函数，redux-saga让你可以用 同步的方式来写异步代码'} />
                    <Paragraph title={'redux-saga启动的任务可以在任何时候通过手动来取消，也可以把任务和其他的Effects放到 race 方法里以自动取消'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'安装'} />
<CodeBlock content={
`yarn add redux-saga 
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'配置'} />
<CodeBlock content={
`store.js

import {createStore,combineReducers, applyMiddleware} from 'redux';
import userNameReducer from '../username/reducer.js';
import createSagaMiddleware from 'redux-saga';       // 引入redux-saga中的createSagaMiddleware函数
import rootSaga from './saga.js';                    // 引入saga.js

const sagaMiddleware = createSagaMiddleware()        // 执行

const reducerAll = {
    userNameReducer: userNameReducer
}


export const store = createStore(
    combineReducers({...reducerAll}),               // 合并reducer
    window.devToolsExtension ? window.devToolsExtension() : undefined,    // dev-tools
    applyMiddleware(sagaMiddleware)                 // 中间件，加载sagaMiddleware
)

sagaMiddleware.run(rootSaga)                        // 执行rootSaga
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'ui组件触发action创建函数'} />
<CodeBlock content={
`username.js

import React from 'react';

export default class User extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    go = () => {
        this.props.getAges(3)           // 发起action，传入参数
    }
    render() {
        return (
            <div>
                这是username组件
                <div>
                    {
                        this.props.username.userNameReducer.username
                    }
                </div>
                <br/>
                <div onClick={this.go}>
                    点击获取提交age
                </div>
            </div>
        )
    }
}
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'action创建函数，返回action ----> 传入saga ( 如果没有saga,就该传入reducer )'} />
<CodeBlock content={
`action.js

import { actionTypes } from './constant.js';

export function getAges(age) {
    console.log(age,'age') // 3
    return {
        type: actionTypes.GET_AGE,
        payload: age
    }
}
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'saga.js ------> 捕获action创建函数返回的action'} />
<CodeBlock content={
`saga.js

import { actionTypes } from '../username/constant.js';
import {call, put, takeEvery} from 'redux-saga/effects';     // 引入相关函数

function* goAge(action){    // 参数是action创建函数返回的action
    console.log(action)
    const p = function() {
        return fetch(\`http://image.baidu.com/channel/listjson?rn=\${action.payload}...\`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
    }
    const res = yield call(p)    // 执行p函数，返回值赋值给res

    yield put({      // dispatch一个action到reducer， payload是请求返回的数据
        type: actionTypes.GET_AGE_SUCCESS,
        payload: res   
    })
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    yield takeEvery(actionTypes.GET_AGE, goAge)   // 如果有对应type的action触发，就执行goAge()函数
}

export default rootSaga;      // 导出rootSaga，被store.js文件import
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'然后由ui组件从reducer中获取数据，并显示。。。'} />
                    <Label title={'概念解释'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'Effect'} />
                    <Paragraph title={'一个effect就是一个纯文本javascript对象，包含一些将被saga middleware执行的指令。'} />
                    <Paragraph title={'如何创建 effect ?'} />
                    <Paragraph title={'使用redux-saga提供的 工厂函数 来创建effect'} />
<CodeBlock content={
`比如：

你可以使用  call(myfunc,  'arg1', 'arg2')  指示middleware调用  myfunc('arg1', 'arg2')

并将结果返回给 yield 了 effect  的那个  generator
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'Task'} />
                    <Paragraph title={'一个 task 就像是一个在后台运行的进程，在基于redux-saga的应用程序中，可以同时运行多个task'} />
                    <Paragraph title={'通过 fork 函数来创建 task'} />
<CodeBlock content={
`function* saga() {
    ...
    const task = yield fork(otherSaga, ...args)
    ...
}
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'阻塞调用 和 非组塞调用'} />
                    <Paragraph title={'阻塞调用'} />
                    <Paragraph title={'阻塞调用的意思是： saga 会在 yield 了 effect 后会等待其执行结果返回，结果返回后才恢复执行 generator 中的下一个指令'} />
                    <Paragraph title={'非阻塞调用'} />
                    <Paragraph title={'非阻塞调用的意思是： saga 会在 yield effect 之后立即恢复执行'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'watcher 和 worker'} />
                    <Paragraph title={'指的是一种使用两个单独的saga来组织控制流的方式'} />
                    <Paragraph title={'watcher：监听发起的action 并在每次接收到action时 fork 一个 work'} />
                    <Paragraph title={'worker： 处理action，并结束它'} />
                    <Label title={'api'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'createSagaMiddleware(...sagas)'} />
                    <Paragraph title={'createSagaMiddleware的作用是创建一个redux中间件，并将sagas与Redux store建立链接'} />
                    <Paragraph title={'参数是一个数组，里面是generator函数列表'} />
                    <Paragraph title={'sagas: Array ---- ( generator函数列表 )'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'middleware.run(saga, ...args)'} />
                    <Paragraph title={'动态执行 saga。用于 applyMiddleware 阶段之后执行 Sagas。这个方法返回一个Task 描述对象。'} />
                    <Paragraph title={'saga: Function: 一个 Generator 函数'} />
                    <Paragraph title={'args: Array: 提供给 saga 的参数 (除了 Store 的 getState 方法)'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'take(pattern)'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'----- 暂停Generator，匹配的action被发起时，恢复执行'} />
                    <Paragraph title={'创建一条 Effect 描述信息，指示 middleware 等待 Store 上指定的 action。 Generator 会暂停，直到一个与 pattern 匹配的 action 被发起。'} />
                    <Paragraph title={'pattern的规则'} />
                    <Paragraph title={'(1) pattern为空 或者 * ，将会匹配所有发起的action'} />
                    <Paragraph title={'(2) pattern是一个函数，action 会在 pattern(action) 返回为 true 时被匹配例如，take(action => action.entities) 会匹配那些 entities 字段为真的 action）。'} />
                    <Paragraph title={'(3) pattern是一个字符串，action 会在 action.type === pattern 时被匹配'} />
                    <Paragraph title={'(4) pattern是一个数组，会针对数组所有项，匹配与 action.type 相等的 action例如，take([INCREMENT, DECREMENT]) 会匹配 INCREMENT 或 DECREMENT 类型的 action）'} />
                    <Paragraph title={'take实例：'} />
<CodeBlock content={
`username.js

import React from 'react';

export default class User extends React.Component {
    go = () => {
        new Promise((resolve,reject) => {
            resolve(3)
        }).then(res => this.props.getAges(res))    // 执行action.js中的getAges函数
            .then(res => {
                setTimeout(()=> {
                    console.log('5s钟后才会执行settimeout')
                    this.props.settimeout()
                },5000)           // 在getAges函数执行完后，再过5s执行，settimeout()函数
            }) 
        
        
    }
    render() {
        console.log(this.props, 'this.props')
        return (
            <div>
                这是username组件
                <br/>
                <div onClick={this.go}>
                    点击获取提交age
                </div>
                <div>
                    {
                        this.props.username && 
                        this.props.username.userNameReducer.image.data && 
                        this.props.username.userNameReducer.image.data.map(
                            (item,key) => <div key={key}>{item.abs }</div>
                        )
                    }
                </div>
            </div>
        )
    }
}
`} />
<CodeBlock content={
`action.js

import { actionTypes } from './constant.js';


export function getAges(age) {
    console.log(age,'age')
    return {
        type: actionTypes.GET_AGE,   // 在saga中有对应的actionTypes.GET_AGE
        payload: age
    }
}

export function settimeout() {
    return {
        type: actionTypes.MATCH_TAKE,  // 在saga中有对应的actionTypes.MATCH_TAKE,
    }
}
`} />
<CodeBlock content={
`saga.js

import { actionTypes } from '../username/constant.js';
import {call, put, takeEvery, take} from 'redux-saga/effects';

function* goAge(action){
    console.log(action)
    const p = function() {
        return fetch(
            \`http://image.baidu.com/channel/listjson?pn=0&rn=\${action.payload}\`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
    }
    const res = yield call(p)
    yield take(actionTypes.MATCH_TAKE)   

    // generator执行到take时，会暂停执行，直到有type为MATCH_TAKE的action发起时，才恢复执行

    // 这里的效果就是点击按钮 5s钟后 才显示请求到的内容，( 5s钟后才执行下面的put语句 )
    yield put({
        type: actionTypes.GET_AGE_SUCCESS,
        payload: res
    })
}

function* rootSaga() {
    yield takeEvery(actionTypes.GET_AGE, goAge)  
          
    // 有对应的type是GET_AGE的action发起时，执行goAge() Generator函数
}

export default rootSaga;

`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'fork(fn, ...args)'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'----- 无阻塞的执行fn，执行fn时，不会暂停Generator'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'----- yield fork(fn ...args)的结果是一个 Task 对象'} />
                    <Paragraph title={'task对象 ---------- 一个具备某些有用的方法和属性的对象'} />
                    <Paragraph title={'创建一条 Effect 描述信息，指示 middleware 以 无阻塞调用 方式执行 fn。'} />
                    <Paragraph title={'fn: Function - 一个 Generator 函数, 或者返回 Promise 的普通函数'} />
                    <Paragraph title={'args: Array - 一个数组，作为 fn 的参数'} />
                    <Paragraph title={'fork 类似于 call，可以用来调用普通函数和 Generator 函数。但 fork 的调用是无阻塞的，在等待 fn 返回结果时，middleware 不会暂停 Generator。 相反，一旦 fn 被调用，Generator 立即恢复执行。'} />
                    <Paragraph title={'fork 与 race 类似，是一个中心化的 Effect，管理 Sagas 间的并发。yield fork(fn ...args) 的结果是一个 Task 对象 —— 一个具备某些有用的方法和属性的对象。'} />
                    <Paragraph title={'fork: 是分叉，岔路的意思 ( 并发 )'} />
                    <Paragraph title={'实例：'} />
<CodeBlock content={
`import { actionTypes } from '../username/constant.js';
import {call, put, takeEvery, take, fork} from 'redux-saga/effects';

function* goAge(action){

    function* x() {
        yield setTimeout(() => {
           console.log('该显示会在获得图片后，2s中后显示') 
        }, 2000);
    }

    const p = function() {
        return fetch(\`http://image.baidu.com/channel/listjson?pn=0&rn=\${action.payload}\`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
    }
    const res = yield call(p)

    yield take(actionTypes.MATCH_TAKE)   // 阻塞，直到匹配的action触发，才会恢复执行

    yield fork(x)  // 无阻塞执行，即x()generator触发后，就会执行下面的put语句

    yield put({
        type: actionTypes.GET_AGE_SUCCESS,
        payload: res
    })

}

function* rootSaga() {
    yield takeEvery(actionTypes.GET_AGE, goAge)
}

export default rootSaga;
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'select(selector, ...args)'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'----- 得到 Store 中的 state 中的数据'} />
                    <Paragraph title={'创建一条 Effect 描述信息，指示 middleware 调用提供的选择器获取 Store state 上的数据（例如，返回 selector(getState(), ...args) 的结果）。'} />
                    <Paragraph title={'selector: Function - 一个 (state, ...args) => args 函数. 通过当前 state 和一些可选参数，返回当前 Store state 上的部分数据。'} />
                    <Paragraph title={'args: Array - 可选参数，传递给选择器（附加在 getState 后）'} />
                    <Paragraph title={'如果 select 调用时参数为空( --- 即 yield select() --- )，那 effect 会取得整个的 state'} />
                    <Paragraph style={{fontWeight: 700}} title={'重要提醒：在发起 action 到 store 时，middleware 首先会转发 action 到 reducers 然后通知 Sagas。这意味着，当你查询 Store 的 state， 你获取的是 action 被处理之后的 state。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'put(action)'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'----- 发起一个 action 到 store'} />
                    <Paragraph title={'创建一条 Effect 描述信息，指示 middleware 发起一个 action 到 Store。'} />
                    <Paragraph title={'action: Object - 完整信息可查看 Redux 的 dispatch 文档'} />
                    <Paragraph title={'put 是异步的，不会立即发生'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'call(fn, ...args) 阻塞执行，call()执行完，才会往下执行'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'----- 执行 fn(...args)'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'----- 对比 fork(fn, ...args) 无阻塞执行'} />
                    <Paragraph title={'创建一条 Effect 描述信息，指示 middleware 调用 fn 函数并以 args 为参数。'} />
                    <Paragraph title={'fn: Function - 一个 Generator 函数, 或者返回 Promise 的普通函数'} />
                    <Paragraph title={'args: Array - 一个数组，作为 fn 的参数'} />
                    <Paragraph title={'fn 既可以是一个普通函数，也可以是一个 Generator 函数'} />
                </div>
            </Container>
        );
    }
}

export default Redux_saga;