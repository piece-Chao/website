import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Extend_art5 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'javascript面向对象系列第四篇——面向对象的6个概念'} />
                    <Paragraph title={'面向对象描述了一种代码的组织结构形式——一种在软件中对真实世界中问题领域的建模方法。本文将从理论层面，介绍javascript面向对象程序程序(OOP)中一些常见的概念'} />
                    <Label title={'对象'} />
                    <Paragraph title={'所谓对象，本质上就是指事物（包括人和物）在程序设计语言中的表现形式。这里的事物可以是任何东西（如某个客观存在的对象，或者某些较为抽象的概念）。例如，对于猫这种常见对象来说，具有某些明确的特征（如颜色、名字、体型等），能执行某些动作（如喵喵叫、睡觉、躲起来、逃跑等）。在OOP语义中，这些对象特征都叫做属性，而那些动作则被称为方法'} />
                    <Paragraph title={'此外，还有一个口语方面的类比：对象往往是用名词表示的（如book、person），方法一般都是些动词（如read、run），属性值则往往是一些形容词'} />
<CodeBlock content={
`“The black cat sleeps on my head”
`}/>
                    <Paragraph title={'cat是一个对象，black是一个颜色属性值，sleep代表一个动作，也就是OOP语义中的方法。on my head是动作sleep的限定条件。因此它可以当做传递给sleep方法的一个参数'} />
                    <Label title={'类'} />
                    <Paragraph title={'在现实生活中，相似对象之间往往都有一些共同的组成特征。例如蜂鸟和老鹰都具有鸟类的特征，因此它们可以被统称为鸟类。在OOP中，类实际上就是对象的设计蓝图或制作配方。对象这个词，有时候也叫做实例。所以，老鹰是鸟类的一个实例。可以基于同一个类创建出许多不同的对象，因为类更多的是一种模板。而对象则是在这些模板的基础上被创建出来的实体'} />
                    <Paragraph title={'javascript实际上压根没有类。该语言的一切都是基于对象的，其依靠的是一套原型(prototype)系统。而原型本身实际上也是一种对象'} />
                    <Paragraph title={'在传统的面向对象语言中，基于Person类创建了一个Match的新对象，而在javascript中，则是将现有的Person对象扩展成一个Match的新对象'} />
                    <Label title={'封装'} />
                    <Paragraph title={'封装主要用于阐述对象中所包含的内容。封装概念通常由两部分组成：相关的数据（用于存储属性）、基于这些数据所能做的事（所能调用的方法）'} />
                    <Paragraph title={'封装的目的是将信息隐藏，即方法与属性的可见性。一般而言，封装包括封装数据和封装实现'} />
                    <Paragraph title={'在许多语言的对象系统中，封装数据是由语法解析来实现的，这些语言提供了public、private、protected这些关键字来限定方法和属性的可见性，这种限定分类定义了对象用户所能访问的层次'} />
                    <Paragraph title={'但javascript并没有提供对这些关键字的支持，只能依赖变量的作用域来实现封装特性， 而且只能模拟出 public 和 private 这两种封装性。除了ECMAScript6中提供的let之外，一般通过函数来创建作用域：'} />
<CodeBlock content={`
var myObject = (function(){
    var  name = 'match';    // 私有（private）变量
    return {
      getName: function(){    // 公开（public）方法
        return  name;
      }
    }
  })();
console.log( myObject.getName() );// 输出：match
console.log( myObject.name )    // 输出：undefined
`}/>
                    <Paragraph title={'面向对象编程强调的是数据和操作数据的行为本质上是互相关联的，因此好的设计就是把数据以及和它相关的行为封装起来。举例来说，用来表示一个单词或者短语的一串字符通常被称为字符串。字符就是数据。但是关心的往往不是数据是什么，而是可以对数据做什么，所以可以应用在这种数据上的行为（计算长度、添加数据、搜索等等）都被设计成 String 类的方法。所有字符串都是 String 类的一个实例，也就是说它是一个包裹，包含字符数据和可以应用在数据上的函数'} />
                    <Paragraph title={'封装不仅仅是隐藏数据，还包括隐藏实现细节、设计细节以及隐藏对象的类型等'} />
                    <Paragraph title={'从封装实现细节来讲，封装使得对象内部的变化对其他对象而言是透明的，也就是不可见的。 对象对它自己的行为负责。其他对象或者用户都不关心它的内部实现。封装使得对象之间的耦合变松散，对象之间只通过暴露的 API 接口来通信。当修改一个对象时，可以随意地修改它的内部实现，只要对外的接口没有变化，就不会影响到程序的其他功能'} />
                    <Label title={'聚合'} />
                    <Paragraph title={'所谓聚合，有时候也叫做组合，实际上是指将几个现有对象合并成一个新对象的过程。总之，这个概念强调的是将多个对象合而为一的能力。通过聚合这种强有力的方法，可以将一个问题分解成多个更小的问题。这样一来，问题就会显得更易于管理(便于各个击破)。当一个问题域的太过复杂时，就可以考虑将它分解成若干个子问题区，并且必要的话，这些问题区还可以再继续分解成更小的分区。这样做有利于从几个不同的抽象层次来考虑这个问题'} />
                    <Paragraph title={'类似的情况如Book是由一个或多个author对象，publisher对象、若干chapter对象以及一组table对象等组合而成的对象'} />
                    <Label title={'聚合'} />
                    <Paragraph title={'通过继承这种方法，可以非常优雅地实现对现有代码的重用。在传统的OOP环境中，继承通常指的是类与类之间的关系，但由于javascript中不存在类，因此它的继承只能发生在对象之间'} />
                    <Paragraph title={'比如，有一个Person的一般性对象，其中包含一些姓名、性别之类的属性，以及一些功能性函数，如步行、谈话、睡觉、吃饭等。然后，需要一个Programmer对象时，可以让Programmer继承自Person，Programmer对象只需要实现属于它自己的那部分特殊功能（如编写代码），而其余部分重用Person的实现即可'} />
                    <Paragraph title={'当一个对象继承自另一个对象时，通常会往其中加入新的方法，以扩展被继承的老对象。通常将这一过程称之为“B继承自A”或“B扩展自A”。另外对于新对象来说，它可以根据自己的需要，从继承的那组方法中选择几个来重新定义。这样做并不会改变对象的接口，因为其方法名是相同的，只不过当调用新对象时，该方法的行为与之前不同了。这种重定义继承方法的过程叫做覆写'} />
                    <Label title={'多态'} />
                    <Paragraph title={'多态一词源于希腊文polymorphism，拆开来看是poly(复数)+morph(形态)+ism，从字面意思可以理解为复数形态'} />
                    <Paragraph title={'多态的实际含义是：同一个操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个信息分别给出不同的反馈'} />
                    <Paragraph title={'Programmer对象继承了上一级对象Person的所有方法。这意味着这两个对象都实现了"talk"等方法。现在，代码中有一个叫做“Match”的变量，即使是在不知道它是一个Person对象还是一个Programmer对象的情况下，也依然可以直接调用该对象的"talk"方法，而不必担心这会影响代码的正常工作。类似这种不同对象通过相同的方法调用来实现各自行为的能力，称之为多态'} />
                    <Paragraph title={'多态背后的思想是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事物”与“可能改变的事物”分离开来。把不变的部分隔离出来，把可变的部分封装起来，这给予了我们扩展程序的能力，程序看起来是可生长的，也符合开放——封闭原则，相对于修改代码来说，仅仅增加代码就能完成同样的功能，这显然优雅和安全得多'} />
                    <Paragraph title={'多态最根本的作用是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句'} />
                    <Label title={'总结'} />
                    <Paragraph title={'下面来对上面提到的概念进行总结'} />
                    <Paragraph title={'对象：Match是一个男人(后者是一个对象)'} />
                    <Paragraph title={'属性：Match是男性，黄皮肤，黑头发'} />
                    <Paragraph title={'方法：Match能吃饭、睡觉、喝水、做梦'} />
                    <Paragraph title={'类：Match是Programmer类的一个实例'} />
                    <Paragraph title={'原型对象：Match是一个由Programmer对象扩展而来的新对象'} />
                    <Paragraph title={'封装：Match对象包含了数据和基于这些数据的方法'} />
                    <Paragraph title={'聚合：Match只是整个Web开发团队对象的一部分，该团队还包括一个Designer对象Wang，以及一个ProjectManager对象Li'} />
                    <Paragraph title={'继承：Designer、ProjectManager、Programmer都是分别扩展自Person对象的新对象'} />
                    <Paragraph title={'多态：可以随时调用Match、Wang、Li这三个对象各自的talk方法，它们都可以正常工作，尽管这些方法会产生不同的结果。如Match可能谈得更多的是代码的性能，Wang更倾向于谈代码的优雅性，而Li强调的是最后期限。总之，每个对象都可以重新自定义它们的继承方法talk'} />
                </div>
            </Container>
        )
    }
}

export default Extend_art5;