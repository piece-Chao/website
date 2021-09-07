import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';
import { Link } from 'react-router-dom';

class Range_art2 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'深入理解javascript作用域系列第二篇——词法作用域和动态作用域'} />
                    <Paragraph title={'大多数时候，我们对作用域产生混乱的主要原因是分不清楚应该按照函数位置的嵌套顺序，还是按照函数的调用顺序进行变量查找。再加上this机制的干扰，使得变量查找极易出错。这实际上是由两种作用域工作模型导致的，作用域分为词法作用域和动态作用域，分清这两种作用域模型就能够对变量查找过程有清晰的认识。本文是深入理解javascript作用域系列第二篇——词法作用域和动态作用域'} />
                    <Label title={'词法作用域'} />
                    <Paragraph title={<p><Link to={'Range_art1'}>第一篇</Link>介绍过，编译器的第一个工作阶段叫作分词，就是把由字符组成的字符串分解成词法单元。这个概念是理解词法作用域的基础</p>} />
                    <Paragraph title={'简单地说，词法作用域就是定义在词法阶段的作用域，是由写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变'} />
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'关系'} />
                    <Paragraph title={'无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定'} />
                    <CodeBlock content={
`function foo(a) {
    var b = a * 2;
    function bar(c) {
        console.log( a, b, c );
    }
    bar(b * 3);
}
foo( 2 ); // 2 4 12
`}/>
                    <Paragraph title={'在这个例子中有三个逐级嵌套的作用域。为了帮助理解，可以将它们想象成几个逐级包含的气泡'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_ECMA_grammer_nestedscope.png')} alt="png"/>
                    <Paragraph title={'作用域气泡由其对应的作用域块代码写在哪里决定，它们是逐级包含的'} />
                    <Paragraph title={'气泡1包含着整个全局作用域，其中只有一个标识符：foo'} />
                    <Paragraph title={'气泡2包含着foo所创建的作用域，其中有三个标识符：a、bar和b'} />
                    <Paragraph title={'气泡3包含着bar所创建的作用域，其中只有一个标识符：c'} />
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'查找'} />
                    <Paragraph title={'作用域气泡的结构和互相之间的位置关系给引擎提供了足够的位置信息，引擎用这些信息来查找标识符的位置'} />
                    <Paragraph title={'在代码片段中，引擎执行console.log(...)声明，并查找a、b和c三个变量的引用。它首先从最内部的作用域，也就是bar(...)函数的作用域开始查找。引擎无法在这里找到a，因此会去上一级到所嵌套的foo(...)的作用域中继续查找。在这里找到了a，因此引擎使用了这个引用。对b来讲也一样。而对c来说，引擎在bar(...)中找到了它'} />
                    <Paragraph title={'注意：词法作用域查找只会查找一级标识符，如果代码引用了foo.bar.baz，词法作用域查找只会试图查找foo标识符，找到这个变量后，对象属性访问规则分别接管对bar和baz属性的访问'} />
<CodeBlock content={
`foo = {
    bar:{
        baz: 1
    }
};
console.log(foo.bar.baz);//1
`}/>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'遮蔽'} />
                    <Paragraph title={'作用域查找从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止'} />
                    <Paragraph title={'在多层的嵌套作用域中可以定义同名的标识符，这叫作“遮蔽效应”，内部的标识符“遮蔽”了外部的标识符'} />
<CodeBlock content={
`var a = 0;
function test(){
    var a = 1;
    console.log(a);//1
}
test();
`}/>
                    <Paragraph title={'全局变量会自动为全局对象的属性，因此可以不直接通过全局对象的词法名称，而是间接地通过对全局对象属性的引用来对其进行访问'} />
<CodeBlock content={
`var a = 0;
function test(){
    var a = 1;
    console.log(window.a);//0
}
test();
`}/>
                    <Paragraph title={'通过这种技术可以访问那些被同名变量所遮蔽的全局变量。但非全局的变量如果被遮蔽了，无论如何都无法被访问到'} />
                    <Label title={'动态作用域'} />
                    <Paragraph title={'javascript使用的是词法作用域，它最重要的特征是它的定义过程发生在代码的书写阶段'} />
                    <Paragraph title={'那为什么要介绍动态作用域呢？实际上动态作用域是javascript另一个重要机制this的表亲。作用域混乱多数是因为词法作用域和this机制相混淆，傻傻分不清楚'} />
                    <Paragraph title={'动态作用域并不关心函数和作用域是如何声明以及在任何处声明的，只关心它们从何处调用。换句话说，作用域链是基于调用栈的，而不是代码中的作用域嵌套'} />
<CodeBlock content={
`var a = 2;
function foo() {
    console.log( a );
}
function bar() {
    var a = 3;
    foo();
}
bar();
`}/>
                    <Paragraph title={'【1】如果处于词法作用域，也就是现在的javascript环境。变量a首先在foo()函数中查找，没有找到。于是顺着作用域链到全局作用域中查找，找到并赋值为2。所以控制台输出2'} />
                    <Paragraph title={'【2】如果处于动态作用域，同样地，变量a首先在foo()中查找，没有找到。这里会顺着调用栈在调用foo()函数的地方，也就是bar()函数中查找，找到并赋值为3。所以控制台输出3'} />
                    <Paragraph title={'两种作用域的区别，简而言之，词法作用域是在定义时确定的，而动态作用域是在运行时确定的'} />
                </div>
            </Container>
        )
    }
}

export default Range_art2;