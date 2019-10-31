import React from 'react';
import Container from '@/screen/Container';
import { Title, Paragraph, CodeBlock } from '@/components/SubComponent';

class Functional_Coding extends React.Component {
    render() {
        return (
            <Container>
                <Title title="函数式编程" />
                <Paragraph title={'应该很多童鞋都听过函数式编程（Functional programming）的概念吧，可能有的童鞋有听说过函数式编程但并不是特别了解，但其实在我们的开发过程中，或多或少都已经应用了函数式编程的思想。'} />
                <Paragraph title={'相对于面向对象编程（Object-oriented programming）关注的是数据而言，函数式编程关注的则是动作，其是一种过程抽象的思维，就是对当前的动作去进行抽象。'} />
                <Paragraph title={'比如说我要计算一个数 加上 4 再乘以 4 的值，按照正常写代码的逻辑，我们可能会这么去实现'} />
<CodeBlock content={
`function calculate(x){
    return (x + 4) * 4;
}

console.log(calculate(1))  // 20`} />
                <Paragraph title={'这是没有任何问题的，我们在平时开发的过程中会经常将需要重复的操作封装成函数以便在不同的地方能够调用。但从函数式编程的思维来看的话，我们关注的则是这一系列操作的动作，先「加上 4」再「乘以 4」。'} />
                <Paragraph title={'如何封装函数才是最佳实践呢？如何封装才能使函数更加通用，使用起来让人感觉更加舒服呢？函数式编程或许能给我们一些启发。'} />
                <Paragraph title={'函数式编程具有两个基本特征'} />
                <Paragraph style={{fontWeight: 700}} title={'函数是第一等公民'} />
                <Paragraph style={{fontWeight: 700}} title={'函数是纯函数'} />
                <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'函数是第一等公民'} />
                <Paragraph title={'第一等公民是指函数跟其它的数据类型一样处于平等地位，可以赋值给其他变量，可以作为参数传入另一个函数，也可以作为别的函数的返回值。'} />
<CodeBlock content={
`// 赋值
var a = function fn1() {  }
// 函数作为参数
function fn2(fn) {
    fn()
}   
// 函数作为返回值
function fn3() {
    return function() {}
}`} />
                <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'函数是纯函数'} />
                <Paragraph title={'纯函数是指相同的输入总会得到相同的输出，并且不会产生副作用的函数。'} />
                <Paragraph title={'从纯函数的概念我们可以知道纯函数具有两个特点：'} />
                <Paragraph style={{fontWeight: 700}} title={'同输入同输出'} />
                <Paragraph style={{fontWeight: 700}} title={'无副作用'} />
                <Paragraph title={'无副作用指的是函数内部的操作不会对外部产生影响（如修改全局变量的值、修改 dom 节点等）。'} />
<CodeBlock content={
`// 是纯函数
function add(x,y){
    return x + y
}
// 输出不确定，不是纯函数
function random(x){
    return Math.random() * x
}
// 有副作用，不是纯函数
function setColor(el,color){
    el.style.color = color ;
}
// 输出不确定、有副作用，不是纯函数
var count = 0;
function addCount(x){
    count+=x;
    return count;
}`} />
                <Paragraph title={'函数式编程具有两个最基本的运算：合成（compose）和柯里化（Currying）。'} />
                <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'函数合成（compose）'} />
                <Paragraph title={'函数合成指的是将代表各个动作的多个函数合并成一个函数。'} />
                <Paragraph title={'上面讲到，函数式编程是对过程的抽象，关注的是动作。以上面计算的例子为例，我们关注的是它的动作，先「加上 4」再「乘以 4」。那么我们的代码实现如下'} />
<CodeBlock content={
`function add4(x) {
    return x + 4
}
function multiply4(x) {
    return x * 4
}

console.log(multiply4(add4(1)))  // 20
`} />
                <Paragraph title={'根据函数合成的定义，我们能够将上述代表两个动作的两个函数的合成一个函数。我们将合成的动作抽象为一个函数 compose，这里可以比较容易地知道，函数 compose 的代码如下'} />
<CodeBlock content={
`function compose(f,g) {
    return function(x) {
        return f(g(x));
    };
}
`} />
                <Paragraph title={'所以我们可以通过如下的方式得到合成函数'} />
<CodeBlock content={
`var calculate=compose(multiply4,add4);  //执行动作的顺序是从右往左

console.log(calculate(1))  // 20
`} />
                <Paragraph title={'可以看到，只要往 compose 函数中传入代表各个动作的函数，我们便能得到最终的合成函数。但上述 compose 函数的局限性是只能够合成两个函数，如果需要合成的函数不止两个呢，所以我们需要一个通用的 compose 函数。'} />
                <Paragraph title={'这里我直接给出通用 compose 函数的代码'} />
<CodeBlock content={
`function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start - 1;
        var result = args[start].apply(this, arguments);
        while (i >= 0){
            result = args[i].call(this, result);
            i--;
        }
        return result;
    };
}
`} />
                <Paragraph title={'让我们来实践下上述通用的 compose 函数～'} />
<CodeBlock content={
`function addHello(str){
    return 'hello '+str;
}
function toUpperCase(str) {
    return str.toUpperCase();
}
function reverse(str){
    return str.split('').reverse().join('');
}

var composeFn=compose(reverse,toUpperCase,addHello);

console.log(composeFn('ttsy'));  // YSTT OLLEH
`} />
                <Paragraph title={'上述过程有三个动作，「hello」、「转换大写」、「反转」，可以看到通过 compose 将上述三个动作代表的函数合并成了一个，最终输出了正确的结果。'} />
                <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'函数柯里化（Currying）'} />
                <Paragraph title={'在维基百科中对柯里化的定义是：在计算机科学中，柯里化，又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。'} />
                <Paragraph title={'柯里化函数则是将函数柯里化之后得到的一个新函数。由上述定义可知，柯里化函数有如下两个特性：'} />
                <Paragraph style={{fontWeight: 700}} title={'接受一个单一参数；'} />
                <Paragraph style={{fontWeight: 700}} title={'返回接受余下的参数而且返回结果的新函数；'} />
                <Paragraph title={'举个例子～'} />
<CodeBlock content={
`function add(a, b) {
    return a + b;
}

console.log(add(1, 2)) // 3
`} />
                <Paragraph title={'假设函数 add 的柯里化函数是 addCurry，那么从上述定义可知，addCurry(1)(2) 应该实现与上述代码相同的效果，输出 3 。这里我们可以比较容易的知道，addCurry 的代码如下'} />
<CodeBlock content={
`// addCurry 是 add 的柯里化函数
function addCurry(a) {
    return function(b) {
        return a + b;
    }
}

console.log(addCurry(1)(2));  // 3
`} />
                <Paragraph title={'但假设如果有一个函数 createCurry 能够实现柯里化，那么我们便可以通过下述的方式来得出相同的结果'} />
<CodeBlock content={
`// createCurry 返回一个柯里化函数
var addCurry=createCurry(add);

console.log(addCurry(1)(2));  // 3
`} />
                <Paragraph title={'可以看到，函数 createCurry 传入一个函数 add 作为参数，返回一个柯里化函数 addCurry，函数 addCurry 能够处理 add 中的剩余参数。这个过程称为函数柯里化，我们称 addCurry 是 add 的柯里化函数。'} />
                <Paragraph title={'那么，怎么得到实现柯里化的函数 createCurry 呢？这里我直接给出 createCurry 的代码'} />
<CodeBlock content={
`// 参数只能从左到右传递
function createCurry(func, arrArgs) {
    var args=arguments;
    var funcLength = func.length;
    var arrArgs = arrArgs || [];

    return function(param) {
        var allArrArgs=arrArgs.concat([param])

        // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
        if (allArrArgs.length < funcLength) {
            return args.callee.call(this, func, allArrArgs);
        }

        // 参数收集完毕，则执行func
        return func.apply(this, allArrArgs);
    }
}
`} />
                <Paragraph title={'我们可以通过如下方式去调用'} />
<CodeBlock content={
`// createCurry 返回一个柯里化函数
var addCurry=createCurry(function(a, b, c) {
    return a + b + c;
});

console.log(addCurry(1)(2)(3));  // 6
`} />
                <Paragraph title={'上述 createCurry 函数已经能够实现柯里化的过程，但是其并没有那么完美，如果我希望以 addCurry(1, 2)(3) 的方式来调用呢？则上述代码并不能给出我们想要的结果，所以我们要对 createCurry 做一个优化，优化后的 createCurry 代码如下'} />
<CodeBlock content={
`// 参数只能从左到右传递
function createCurry(func, arrArgs) {
    var args=arguments;
    var funcLength = func.length;
    var arrArgs = arrArgs || [];

    return function() {
        var _arrArgs = Array.prototype.slice.call(arguments);
        var allArrArgs=arrArgs.concat(_arrArgs)

        // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
        if (allArrArgs.length < funcLength) {
            return args.callee.call(this, func, allArrArgs);
        }

        // 参数收集完毕，则执行func
        return func.apply(this, allArrArgs);
    }
}
`} />
                <Paragraph title={'优化之后的 createCurry 函数则显得更加强大'} />
<CodeBlock content={
`// createCurry 返回一个柯里化函数
var addCurry=createCurry(function(a, b, c) {
    return a + b + c;
});

console.log(addCurry(1)(2)(3));  // 6
console.log(addCurry(1, 2, 3));  // 6
console.log(addCurry(1, 2)(3));  // 6
console.log(addCurry(1)(2, 3));  // 6
`} />
                <Paragraph title={'柯里化实际上是把简答的问题复杂化了，但是复杂化的同时，我们在使用函数时拥有了更加多的自由度。'} />
                <Paragraph title={'那么，柯里化有什么用途呢？举个例子～'} />
                <Paragraph title={'现在我们需要实现一个功能，将一个全是数字的数组中的数字转换成百分数的形式。按照正常的逻辑，我们可以按如下代码实现'} />
<CodeBlock content={
`function getNewArray(array) {
    return array.map(function(item) {
        return item * 100 + '%'
    })
}

console.log(getNewArray([1, 0.2, 3, 0.4]));   // ['100%', '20%', '300%', '40%']
`} />
                <Paragraph title={'而如果通过柯里化的方式来实现'} />
<CodeBlock content={
`function map(func, array) {
    return array.map(func);
}
var mapCurry = createCurry(map);
var getNewArray = mapCurry(function(item) {
    return item * 100 + '%'
})

console.log(getNewArray([1, 0.2, 3, 0.4]));   // ['100%', '20%', '300%', '40%']
`} />
                <Paragraph title={'上述例子可能太简单以致不能表现出柯里化的强大，具体柯里化的使用还需要结合具体的场景，个人觉得没有必要为了柯里化而柯里化，我们最终的目的是为了更好地解决问题，不是么？'} />
                <Paragraph title={'在函数式编程中，还有一个很重要的概念是函子。'} />
                <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'函子'} />
                <Paragraph title={'在前面函数合成的例子中，执行了先「加上 4」再「乘以 4」的动作，我们可以看到代码中是通过 multiply4(add4(1)) 这种形式来实现的，如果通过 compose 函数，则是类似于 compose(multiply4,add4)(1) 这种形式来实现代码。'} />
                <Paragraph title={'而在函数式编程的思维中，除了将动作抽象出来外，还希望动作执行的顺序更加清晰，所以对于上面的例子来说，更希望是通过如下的形式来执行我们的动作'} />
<CodeBlock content={
`fn(1).add4().multiply4()
`} />
                <Paragraph title={'这时我们需要用到函子的概念。'} />
<CodeBlock content={
`function Functor(val){
    this.val = val;
}
Functor.prototype.map=function(f){
    return new Functor(f(this.val));
}
`} />
                <Paragraph title={'函子可以简单地理解为有用到 map 方法的数据结构。如上 Functor 的实例就是一个函子。'} />
                <Paragraph title={'在函子的 map 方法中接受一个函数参数，然后返回一个新的函子，新的函子中包含的值是被函数参数处理过后返回的值。该方法将函子里面的每一个值，映射到另一个函子。'} />
                <Paragraph title={'通过 Functor 函子，我们可以通过如下的方式调用'} />
<CodeBlock content={
`console.log(Functor.of(1).map(add4).map(multiply4))  // Functor { val: 20 }
`} />
                <Paragraph title={'接下来介绍各种常见的函子。'} />
                <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'Maybe 函子'} />
                <Paragraph title={'Maybe 函子是指在 map 方法中增加了对空值的判断的函子。'} />
                <Paragraph title={'由于函子中的 map 方法中的函数参数会对函子内部的值进行处理，所以当传入函子中的值为空（如 null）时，则可能会产生错误。'} />
<CodeBlock content={
`function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(Functor.of(null).map(toUpperCase));  // TypeError
`} />
                <Paragraph title={'Maybe 函子则在 map 方法中增加了对空值的判断，若是函子内部的值为空，则直接返回一个内部值为空的函子。'} />
<CodeBlock content={
`function Maybe(val){
    this.val = val;
}
Maybe.prototype.map=function(f){
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
}
Maybe.of = function(val) {
    return new Maybe(val);
}
`} />
                <Paragraph title={'当使用 Maybe 函子时传入空值则不会报错'} />
<CodeBlock content={
`console.log(Maybe.of(null).map(toUpperCase));  // Maybe { val: null }
`} />
                <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'Either 函子'} />
                <Paragraph title={'Either 函子是指内部有分别有左值（left）和右值（right），正常情况下会使用右值，而当右值不存在的时候会使用左值的函子。'} />
<CodeBlock content={
`function Either(left,right){
    this.left = left;
    this.right = right;
}
Either.prototype.map=function(f){
    return this.right ? Either.of(this.left, f(this.right)) : Either.of(f(this.left), this.right);
}
Either.of = function(left,right) {
    return new Either(left,right);
}
`} />
                <Paragraph title={'如下当左右值都存在的时候则以右值为函子的默认值，当右值不存在是则以左值为函子的默认值。'} />
<CodeBlock content={
`function addOne(x) {
    return x+1;
}

console.log(Either.of(1,2).map(addOne));  // Either { left: 1, right: 3 }
console.log(Either.of(3,null).map(addOne));  // Either { left: 4, right: null }
`} />
                 <Paragraph style={{fontWeight: 700, textIndent: 0, fontSize: 16}} title={'Monad 函子'} />
                 <Paragraph title={'Monad 函子是指能够将函子多层嵌套解除的函子。'} />
                 <Paragraph title={'我们往函子传入的值不仅仅可以是普通的数据类型，也可以是其它函子，当往函子内部传其它函子的时候，则会出现函子的多层嵌套。如下'} />
<CodeBlock content={
`var functor = Functor.of(Functor.of(Functor.of('ttsy')))

console.log(functor);  // Functor { val: Functor { val: Functor { val: 'ttsy' } } }
console.log(functor.val);  // Functor { val: Functor { val: 'ttsy' } }
console.log(functor.val.val);  // Functor { val: 'ttsy' }
`} />
                <Paragraph title={'Monad 函子中新增了 join 和 flatMap 方法，通过 flatMap 我们能够在每一次传入函子的时候都将嵌套解除。'} />
<CodeBlock content={
`Monad.prototype.map=function(f){
    return Monad.of(f(this.val))
}
Monad.prototype.join=function(){
    return this.val;
}
Monad.prototype.flatMap=function(f){
    return this.map(f).join();
}
Monad.of = function(val) {
    return new Monad(val);
}
`} />
                <Paragraph title={'通过 Monad 函子，我们最终得到的都是只有一层的函子。'} />
<CodeBlock content={
`console.log(Monad.of('ttsy').flatMap(Monad.of).flatMap(Monad.of));  // Monad { val: 'TTSY' }
`} />
                <Paragraph title={'在我们平时的开发过程中，要根据不同的场景去实现不同功能的函数，而函数式编程则让我们从不同的角度去让我们能够以最佳的方式去实现函数功能，但函数式编程不是非此即彼的，而是要根据不同的应用场景去选择不同的实现方式。'} />
            </Container>
        )
    }
}

export default Functional_Coding;