import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Promise extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'我们来聊聊 Promise'}></Title>
                    <Label title={'回调'}></Label>
                    <Paragraph title={'说起 Promise，我们一般都会从回调或者回调地狱说起，那么使用回调到底会导致哪些不好的地方呢？'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'1. 回调嵌套'}></Paragraph>
                    <Paragraph title={'使用回调，我们很有可能会将业务代码写成如下这种形式：'}></Paragraph>
<CodeBlock content={
`doA( function(){
    doB();

    doC( function(){
        doD();
    } )

    doE();
} );

doF();
`}></CodeBlock>
                    <Paragraph title={'当然这是一种简化的形式，经过一番简单的思考，我们可以判断出执行的顺序为：'}></Paragraph>
<CodeBlock content={
`doA()
doF()
doB()
doC()
doE()
doD()
`}></CodeBlock>
                    <Paragraph title={'然而在实际的项目中，代码会更加杂乱，为了排查问题，我们需要绕过很多碍眼的内容，不断的在函数间进行跳转，使得排查问题的难度也在成倍增加。'}></Paragraph>
                    <Paragraph title={'当然之所以导致这个问题，其实是因为这种嵌套的书写方式跟人线性的思考方式相违和，以至于我们要多花一些精力去思考真正的执行顺序，嵌套和缩进只是这个思考过程中转移注意力的细枝末节而已。'}></Paragraph>
                    <Paragraph title={'当然了，与人线性的思考方式相违和，还不是最糟糕的，实际上，我们还会在代码中加入各种各样的逻辑判断，就比如在上面这个例子中，doD() 必须在 doC() 完成后才能完成，万一 doC() 执行失败了呢？我们是要重试 doC() 吗？还是直接转到其他错误处理函数中？当我们将这些判断都加入到这个流程中，很快代码就会变得非常复杂，以至于无法维护和更新。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'2. 控制反转'}></Paragraph>
                    <Paragraph title={'正常书写代码的时候，我们理所当然可以控制自己的代码，然而当我们使用回调的时候，这个回调函数是否能接着执行，其实取决于使用回调的那个 API，就比如：'}></Paragraph>
<CodeBlock content={
`// 回调函数是否被执行取决于 buy 模块
import {buy} from './buy.js';

buy(itemData, function(res) {
    console.log(res)
});
`}></CodeBlock>
                    <Paragraph title={'对于我们经常会使用的 fetch 这种 API，一般是没有什么问题的，但是如果我们使用的是第三方的 API 呢？'}></Paragraph>
                    <Paragraph title={'当你调用了第三方的 API，对方是否会因为某个错误导致你传入的回调函数执行了多次呢？'}></Paragraph>
                    <Paragraph title={'为了避免出现这样的问题，你可以在自己的回调函数中加入判断，可是万一又因为某个错误这个回调函数没有执行呢？ 万一这个回调函数有时同步执行有时异步执行呢？'}></Paragraph>
                    <Paragraph title={'我们总结一下这些情况：'}></Paragraph>
                    <ListItem list={['回调函数执行多次', '回调函数没有执行', '回调函数有时同步执行有时异步执行']}></ListItem>
                    <Paragraph title={'对于这些情况，你可能都要在回调函数中做些处理，并且每次执行回调函数的时候都要做些处理，这就带来了很多重复的代码。'}></Paragraph>
                    <Label title={'回调地狱'}></Label>
                    <Paragraph title={'我们先看一个简单的回调地狱的示例。'}></Paragraph>
                    <Paragraph title={'现在要找出一个目录中最大的文件，处理步骤应该是：'}></Paragraph>
                    <ListItem list={
                        [
                            '用 fs.readdir 获取目录中的文件列表；',
                            '循环遍历文件，使用 fs.stat 获取文件信息',
                            '比较找出最大文件；',
                            '以最大文件的文件名为参数调用回调。'
                        ]
                    }></ListItem>
                    <Paragraph title={'代码为：'}></Paragraph>
<CodeBlock content={
`var fs = require('fs');
var path = require('path');

function findLargest(dir, cb) {
    // 读取目录下的所有文件
    fs.readdir(dir, function(er, files) {
        if (er) return cb(er);

        var counter = files.length;
        var errored = false;
        var stats = [];

        files.forEach(function(file, index) {
            // 读取文件信息
            fs.stat(path.join(dir, file), function(er, stat) {

                if (errored) return;

                if (er) {
                    errored = true;
                    return cb(er);
                }

                stats[index] = stat;

                // 事先算好有多少个文件，读完 1 个文件信息，计数减 1，当为 0 时，说明读取完毕，此时执行最终的比较操作
                if (--counter == 0) {

                    var largest = stats
                        .filter(function(stat) { return stat.isFile() })
                        .reduce(function(prev, next) {
                            if (prev.size > next.size) return prev
                            return next
                        })

                    cb(null, files[stats.indexOf(largest)])
                }
            })
        })
    })
}
`}></CodeBlock>
                    <Paragraph title={'使用方式为：'}></Paragraph>
<CodeBlock content={
`// 查找当前目录最大的文件
findLargest('./', function(er, filename) {
    if (er) return console.error(er)
    console.log('largest file was:', filename)
});
`}></CodeBlock>
                    <Paragraph title={'你可以将以上代码复制到一个比如 index.js 文件，然后执行 node index.js 就可以打印出最大的文件的名称。'}></Paragraph>
                    <Paragraph title={'看完这个例子，我们再来聊聊回调地狱的其他问题：'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'1.难以复用'}></Paragraph>
                    <Paragraph title={'回调的顺序确定下来之后，想对其中的某些环节进行复用也很困难，牵一发而动全身。'}></Paragraph>
                    <Paragraph title={'举个例子，如果你想对 fs.stat 读取文件信息这段代码复用，因为回调中引用了外层的变量，提取出来后还需要对外层的代码进行修改。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'2.堆栈信息被断开'}></Paragraph>
                    <Paragraph title={'我们知道，JavaScript 引擎维护了一个执行上下文栈，当函数执行的时候，会创建该函数的执行上下文压入栈中，当函数执行完毕后，会将该执行上下文出栈。'}></Paragraph>
                    <Paragraph title={'如果 A 函数中调用了 B 函数，JavaScript 会先将 A 函数的执行上下文压入栈中，再将 B 函数的执行上下文压入栈中，当 B 函数执行完毕，将 B 函数执行上下文出栈，当 A 函数执行完毕后，将 A 函数执行上下文出栈。'}></Paragraph>
                    <Paragraph title={'这样的好处在于，我们如果中断代码执行，可以检索完整的堆栈信息，从中获取任何我们想获取的信息。'}></Paragraph>
                    <Paragraph title={'可是异步回调函数并非如此，比如执行 fs.readdir 的时候，其实是将回调函数加入任务队列中，代码继续执行，直至主线程完成后，才会从任务队列中选择已经完成的任务，并将其加入栈中，此时栈中只有这一个执行上下文，如果回调报错，也无法获取调用该异步操作时的栈中的信息，不容易判定哪里出现了错误。'}></Paragraph>
                    <Paragraph title={'此外，因为是异步的缘故，使用 try catch 语句也无法直接捕获错误。'}></Paragraph>
                    <Paragraph title={'(不过 Promise 并没有解决这个问题)'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'3.借助外层变量'}></Paragraph>
                    <Paragraph title={'当多个异步计算同时进行，比如这里遍历读取文件信息，由于无法预期完成顺序，必须借助外层作用域的变量，比如这里的 count、errored、stats 等，不仅写起来麻烦，而且如果你忽略了文件读取错误时的情况，不记录错误状态，就会接着读取其他文件，造成无谓的浪费。此外外层的变量，也可能被其它同一作用域的函数访问并且修改，容易造成误操作。'}></Paragraph>
                    <Paragraph title={'之所以单独讲讲回调地狱，其实是想说嵌套和缩进只是回调地狱的一个梗而已，它导致的问题远非嵌套导致的可读性降低而已。'}></Paragraph>
                    <Label title={'回调地狱'}></Label>
                    <Paragraph title={'Promise 使得以上绝大部分的问题都得到了解决。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'1. 嵌套问题'}></Paragraph>
                    <Paragraph title={'举个例子：'}></Paragraph>
<CodeBlock content={
`request(url, function(err, res, body) {
    if (err) handleError(err);
    fs.writeFile('1.txt', body, function(err) {
        request(url2, function(err, res, body) {
            if (err) handleError(err)
        })
    })
});
`}></CodeBlock>
                    <Paragraph title={'使用 Promise 后：'}></Paragraph>
<CodeBlock content={
`request(url)
.then(function(result) {
    return writeFileAsynv('1.txt', result)
})
.then(function(result) {
    return request(url2)
})
.catch(function(e){
    handleError(e)
});
`}></CodeBlock>
                    <Paragraph title={'而对于读取最大文件的那个例子，我们使用 promise 可以简化为：'}></Paragraph>
<CodeBlock content={
`var fs = require('fs');
var path = require('path');

var readDir = function(dir) {
    return new Promise(function(resolve, reject) {
        fs.readdir(dir, function(err, files) {
            if (err) reject(err);
            resolve(files)
        })
    })
}

var stat = function(path) {
    return new Promise(function(resolve, reject) {
        fs.stat(path, function(err, stat) {
            if (err) reject(err)
            resolve(stat)
        })
    })
}

function findLargest(dir) {
    return readDir(dir)
        .then(function(files) {
            let promises = files.map(file => stat(path.join(dir, file)))
            return Promise.all(promises).then(function(stats) {
                return { stats, files }
            })
        })
        .then(data => {

            let largest = data.stats
                .filter(function(stat) { return stat.isFile() })
                .reduce((prev, next) => {
                    if (prev.size > next.size) return prev
                    return next
                })

            return data.files[data.stats.indexOf(largest)]
        })

}
`}></CodeBlock>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'2. 控制反转再反转'}></Paragraph>
                    <Paragraph title={'前面我们讲到使用第三方回调 API 的时候，可能会遇到如下问题：'}></Paragraph>
                    <ListItem list={
                        [
                            '回调函数执行多次',
                            '回调函数没有执行',
                            '回调函数有时同步执行有时异步执行'
                        ]
                    }></ListItem>
                    <Paragraph title={'对于第一个问题，Promise 只能 resolve 一次，剩下的调用都会被忽略。'}></Paragraph>
                    <Paragraph title={'对于第二个问题，我们可以使用 Promise.race 函数来解决：'}></Paragraph>
<CodeBlock content={
`function timeoutPromise(delay) {
    return new Promise( function(resolve,reject){
        setTimeout( function(){
            reject( "Timeout!" );
        }, delay );
    } );
}

Promise.race( [
    foo(),
    timeoutPromise( 3000 )
] )
.then(function(){}, function(err){});
`}></CodeBlock>
                    <Paragraph title={'对于第三个问题，为什么有的时候会同步执行有的时候回异步执行呢？'}></Paragraph>
                    <Paragraph title={'我们来看个例子：'}></Paragraph>
<CodeBlock content={
`var cache = {...};
function downloadFile(url) {
      if(cache.has(url)) {
            // 如果存在cache，这里为同步调用
           return Promise.resolve(cache.get(url));
      }
     return fetch(url).then(file => cache.set(url, file)); // 这里为异步调用
}
console.log('1');
getValue.then(() => console.log('2'));
console.log('3');
`}></CodeBlock>
                    <Paragraph title={'在这个例子中，有 cahce 的情况下，打印结果为 1 2 3，在没有 cache 的时候，打印结果为 1 3 2。'}></Paragraph>
                    <Paragraph title={'然而如果将这种同步和异步混用的代码作为内部实现，只暴露接口给外部调用，调用方由于无法判断是到底是异步还是同步状态，影响程序的可维护性和可测试性。'}></Paragraph>
                    <Paragraph title={'简单来说就是同步和异步共存的情况无法保证程序逻辑的一致性。'}></Paragraph>
                    <Paragraph title={'然而 Promise 解决了这个问题，我们来看个例子：'}></Paragraph>
<CodeBlock content={
`var promise = new Promise(function (resolve){
    resolve();
    console.log(1);
});
promise.then(function(){
    console.log(2);
});
console.log(3);

// 1 3 2
`}></CodeBlock>
                    <Paragraph title={'即使 promise 对象立刻进入 resolved 状态，即同步调用 resolve 函数，then 函数中指定的方法依然是异步进行的。'}></Paragraph>
                    <Paragraph title={'PromiseA+ 规范也有明确的规定：'}></Paragraph>
                    <Paragraph style={{background: '#eee'}} title={'实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。'}></Paragraph>
                    <Label title={'Promise 反模式'}></Label>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'1.Promise 嵌套'}></Paragraph>
<CodeBlock content={
`// bad
loadSomething().then(function(something) {
    loadAnotherthing().then(function(another) {
        DoSomethingOnThem(something, another);
    });
});
`}></CodeBlock>
<CodeBlock content={
`// good
Promise.all([loadSomething(), loadAnotherthing()])
.then(function ([something, another]) {
    DoSomethingOnThem(...[something, another]);
});
`}></CodeBlock>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'2.断开的 Promise 链'}></Paragraph>
<CodeBlock content={
`// bad
function anAsyncCall() {
    var promise = doSomethingAsync();
    promise.then(function() {
        somethingComplicated();
    });

    return promise;
}
`}></CodeBlock>
<CodeBlock content={
`// good
function anAsyncCall() {
    var promise = doSomethingAsync();
    return promise.then(function() {
        somethingComplicated()
    });
}
`}></CodeBlock>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'3.混乱的集合'}></Paragraph>
<CodeBlock content={
`// bad
function workMyCollection(arr) {
    var resultArr = [];
    function _recursive(idx) {
        if (idx >= resultArr.length) return resultArr;

        return doSomethingAsync(arr[idx]).then(function(res) {
            resultArr.push(res);
            return _recursive(idx + 1);
        });
    }

    return _recursive(0);
}
`}></CodeBlock>
                    <Paragraph title={'你可以写成：'}></Paragraph>
<CodeBlock content={
`function workMyCollection(arr) {
    return Promise.all(arr.map(function(item) {
        return doSomethingAsync(item);
    }));
}
`}></CodeBlock>
                    <Paragraph title={'如果你非要以队列的形式执行，你可以写成：'}></Paragraph>
<CodeBlock content={
`function workMyCollection(arr) {
    return arr.reduce(function(promise, item) {
        return promise.then(function(result) {
            return doSomethingAsyncWithResult(item, result);
        });
    }, Promise.resolve());
}
`}></CodeBlock>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'4.catch'}></Paragraph>
<CodeBlock content={
`// bad
somethingAync.then(function() {
    return somethingElseAsync();
}, function(err) {
    handleMyError(err);
});
`}></CodeBlock>
                    <Paragraph title={'如果 somethingElseAsync 抛出错误，是无法被捕获的。你可以写成：'}></Paragraph>
<CodeBlock content={
`// good
somethingAsync
.then(function() {
    return somethingElseAsync()
})
.then(null, function(err) {
    handleMyError(err);
});
`}></CodeBlock>
<CodeBlock content={
`// good
somethingAsync()
.then(function() {
    return somethingElseAsync();
})
.catch(function(err) {
    handleMyError(err);
});
`}></CodeBlock>
                    <Label title={'红绿灯问题'}></Label>
                    <Paragraph title={'题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promse 实现）'}></Paragraph>
                    <Paragraph title={'三个亮灯函数已经存在：'}></Paragraph>
<CodeBlock content={
`function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}
`}></CodeBlock>
                    <Paragraph title={'利用 then 和递归实现：'}></Paragraph>
<CodeBlock content={
`function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

var light = function(timmer, cb){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};

var step = function() {
    Promise.resolve().then(function(){
        return light(3000, red);
    }).then(function(){
        return light(2000, green);
    }).then(function(){
        return light(1000, yellow);
    }).then(function(){
        step();
    });
}

step();
`}></CodeBlock>
                    <Label title={'promisify'}></Label>
                    <Paragraph title={'有的时候，我们需要将 callback 语法的 API 改造成 Promise 语法，为此我们需要一个 promisify 的方法。'}></Paragraph>
                    <Paragraph title={'因为 callback 语法传参比较明确，最后一个参数传入回调函数，回调函数的第一个参数是一个错误信息，如果没有错误，就是 null，所以我们可以直接写出一个简单的 promisify 方法：'}></Paragraph>
<CodeBlock content={
`function promisify(original) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            args.push(function callback(err, ...values) {
                if (err) {
                    return reject(err);
                }
                return resolve(...values)
            });
            original.call(this, ...args);
        });
    };
}
`}></CodeBlock>
                    <Label title={'promisify'}></Label>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'1. 错误被吃掉'}></Paragraph>
                    <Paragraph title={'首先我们要理解，什么是错误被吃掉，是指错误信息不被打印吗？'}></Paragraph>
                    <Paragraph title={'并不是，举个例子：'}></Paragraph>
<CodeBlock content={
`throw new Error('error');
console.log(233333);
`}></CodeBlock>
                    <Paragraph title={'在这种情况下，因为 throw error 的缘故，代码被阻断执行，并不会打印 233333，再举个例子：'}></Paragraph>
<CodeBlock content={
`const promise = new Promise(null);
console.log(233333);
`}></CodeBlock>
                    <Paragraph title={'以上代码依然会被阻断执行，这是因为如果通过无效的方式使用 Promise，并且出现了一个错误阻碍了正常 Promise 的构造，结果会得到一个立刻跑出的异常，而不是一个被拒绝的 Promise。'}></Paragraph>
                    <Paragraph title={'然而再举个例子：'}></Paragraph>
<CodeBlock content={
`let promise = new Promise(() => {
    throw new Error('error')
});
console.log(2333333);
`}></CodeBlock>
                    <Paragraph title={'这次会正常的打印 233333，说明 Promise 内部的错误不会影响到 Promise 外部的代码，而这种情况我们就通常称为 “吃掉错误”。'}></Paragraph>
                    <Paragraph title={'其实这并不是 Promise 独有的局限性，try..catch 也是这样，同样会捕获一个异常并简单的吃掉错误。'}></Paragraph>
                    <Paragraph title={'而正是因为错误被吃掉，Promise 链中的错误很容易被忽略掉，这也是为什么会一般推荐在 Promise 链的最后添加一个 catch 函数，因为对于一个没有错误处理函数的 Promise 链，任何错误都会在链中被传播下去，直到你注册了错误处理函数。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'2. 单一值'}></Paragraph>
                    <Paragraph title={'Promise 只能有一个完成值或一个拒绝原因，然而在真实使用的时候，往往需要传递多个值，一般做法都是构造一个对象或数组，然后再传递，then 中获得这个值后，又会进行取值赋值的操作，每次封装和解封都无疑让代码变得笨重。'}></Paragraph>
                    <Paragraph title={'说真的，并没有什么好的方法，建议是使用 ES6 的解构赋值：'}></Paragraph>
<CodeBlock content={
`Promise.all([Promise.resolve(1), Promise.resolve(2)])
.then(([x, y]) => {
    console.log(x, y);
});
`}></CodeBlock>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'3. 无法取消'}></Paragraph>
                    <Paragraph title={'Promise 一旦新建它就会立即执行，无法中途取消。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'4. 无法得知 pending 状态'}></Paragraph>
                    <Paragraph title={'当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。'}></Paragraph>
                </div>
            </Container>
        );
    }
}

export default Promise;
