import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

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
`function calculate(x){
    return (x + 4) * 4;
}

console.log(calculate(1))  // 20`} />
            </Container>
        )
    }
}

export default Functional_Coding;