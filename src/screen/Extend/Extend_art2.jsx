import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';
import { Link } from 'react-router-dom';

class Extend_art2 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'javascript面向对象系列第一篇——构造函数和原型对象'} />
                    <Paragraph title={'一般地，javascript使用构造函数和原型对象来进行面向对象编程，它们的表现与其他面向对象编程语言中的类相似又不同。本文将详细介绍如何用构造函数和原型对象来创建对象'} />
                    <Label title={'构造函数'} />
                    <Paragraph title={'构造函数是用new创建对象时调用的函数，与普通唯一的区别是构造函数名应该首字母大写'} />
<CodeBlock content={
`function Person(){
    this.age = 30;
}
var person1 = new Person();
console.log(person1.age);//30
`} />
                    <Paragraph title={'根据需要，构造函数可以接受参数'} />
<CodeBlock content={
`function Person(age){
    this.age = age;
}
var person1 = new Person(30);
console.log(person1.age);//30
`} />
                    <Paragraph title={'如果没有参数，可以省略括号'} />
<CodeBlock content={
`function Person(){
    this.age = 30;
}
//等价于var person1 = new Person()
var person1 = new Person;
console.log(person1.age);//30    
`} />
                    <Paragraph title={'如果忘记使用new操作符，则this将代表全局对象window'} />
<CodeBlock content={
`function Person(){
    this.age = 30;
}
var person1 = Person();
//Uncaught TypeError: Cannot read property 'age' of undefined
console.log(person1.age);
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'instanceof'} />
                    <Paragraph title={'instanceof操作符可以用来鉴别对象的类型'} />
<CodeBlock content={
`function Person(){
//
}
var person1 = new Person;
console.log(person1 instanceof Person);//true
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'constructor'} />
                    <Paragraph title={'每个对象在创建时都自动拥有一个构造函数属性constructor，其中包含了一个指向其构造函数的引用。而这个constructor属性实际上继承自原型对象，而constructor也是原型对象唯一的自有属性'} />
<CodeBlock content={
`function Person(){
    //
}
var person1 = new Person;
console.log(person1.constructor === Person);//true    
console.log(person1.__proto__.constructor === Person);//true
`} />
                    <Paragraph title={'以下是person1的内部属性，发现constructor是继承属性'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_ECMA_grammer_constructor.jpg')} alt="jpg"/>
                    <Paragraph title={'虽然对象实例及其构造函数之间存在这样的关系，但是还是建议使用instanceof来检查对象类型。这是因为构造函数属性可以被覆盖，并不一定完全准确'} />
<CodeBlock content={
`function Person(){
    //
}
var person1 = new Person;
Person.prototype.constructor = 123;
console.log(person1.constructor);//123
console.log(person1.__proto__.constructor);//123
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'返回值'} />
                    <Paragraph title={'函数中的return语句用来返回函数调用后的返回值，而new构造函数的返回值有点特殊'} />
                    <Paragraph title={'如果构造函数使用return语句但没有指定返回值，或者返回一个原始值，那么这时将忽略返回值，同时使用这个新对象作为调用结果'} />
<CodeBlock content={
`function fn(){
    this.a = 2;
    return;
}
var test = new fn();
console.log(test);//{a:2}
`} />
                    <Paragraph title={'如果构造函数显式地使用return语句返回一个对象，那么调用表达式的值就是这个对象'} />
<CodeBlock content={
`var obj = {a:1};
function fn(){
    this.a = 2;
    return obj;
}
var test = new fn();
console.log(test);//{a:1}
`} />
                    <Paragraph title={'所以，针对丢失new的构造函数的解决办法是在构造函数内部使用instanceof判断是否使用new命令，如果发现没有使用，则直接使用return语句返回一个实例对象'} />
<CodeBlock content={
`function Person(){
    if(!(this instanceof Person)){
        return new Person();
    }
    this.age = 30;
}
var person1 = Person();
console.log(person1.age);//30
var person2 = new Person();
console.log(person2.age);//30
`} />
                    <Paragraph title={'使用构造函数的好处在于所有用同一个构造函数创建的对象都具有同样的属性和方法'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }
}
var person1 = new Person('bai');
var person2 = new Person('hu');
person1.sayName();//'bai'
`} />
                    <Paragraph title={'构造函数允许给对象配置同样的属性，但是构造函数并没有消除代码冗余。使用构造函数的主要问题是每个方法都要在每个实例上重新创建一遍。在上面的例子中，每一个对象都有自己的sayName()方法。这意味着如果有100个对象实例，就有100个函数做相同的事情，只是使用的数据不同'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }
}
var person1 = new Person('bai');
var person2 = new Person('hu');
console.log(person1.sayName === person2.sayName);//false
`} />
                    <Paragraph title={'可以通过把函数定义转换到构造函数外部来解决问题()方法。这意味着如果有100个对象实例，就有100个函数做相同的事情，只是使用的数据不同'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
    this.sayName = sayName;
}
function sayName(){
    console.log(this.name);
}
var person1 = new Person('bai');
var person2 = new Person('hu');
console.log(person1.sayName === person2.sayName);//true
`} />
                    <Paragraph title={'但是，在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域有点名不副实。而且，如果对象需要定义很多方法，就要定义很多全局函数，严重污染全局空间，这个自定义的引用类型没有封装性可言了()方法。这意味着如果有100个对象实例，就有100个函数做相同的事情，只是使用的数据不同'} />
                    <Paragraph title={'如果所有的对象实例共享同一个方法会更有效率，这就需要用到下面所说的原型对象'} />
                    <Label title={'原型对象'} />
                    <Paragraph title={'说起原型对象，就要说到原型对象、实例对象和构造函数的三角关系'} />
                    <Paragraph title={'接下来以下面两行代码，来详细说明它们的关系'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'构造函数'} />
                    <Paragraph title={'用来初始化新创建的对象的函数是构造函数。在例子中，Foo()函数是构造函数'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'实例对象'} />
                    <Paragraph title={'通过构造函数的new操作创建的对象是实例对象，又常常被称为对象实例。可以用一个构造函数，构造多个实例对象。下面的f1和f2就是实例对象'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
var f2 = new Foo;
console.log(f1 === f2);//false
`} />

                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'原型对象及prototype'} />
                    <Paragraph title={'通过构造函数的new操作创建实例对象后，会自动为构造函数创建prototype属性，该属性指向实例对象的原型对象。通过同一个构造函数实例化的多个对象具有相同的原型对象。下面的例子中，Foo.prototype是原型对象'} />
<CodeBlock content={
`function Foo(){};
Foo.prototype.a = 1;
var f1 = new Foo;
var f2 = new Foo;

console.log(Foo.prototype.a);//1
console.log(f1.a);//1
console.log(f2.a);//1
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'constructor'} />
                    <Paragraph title={'原型对象默认只会取得一个constructor属性，指向该原型对象对应的构造函数。至于其他方法，则是从Object继承来的'} />
<CodeBlock content={
`function Foo(){};
console.log(Foo.prototype.constructor === Foo);//true
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_ECMA_grammer_constructor2.jpg')} alt="jpg"/>
                    <Paragraph title={'由于实例对象可以继承原型对象的属性，所以实例对象也拥有constructor属性，同样指向原型对象对应的构造函数'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
console.log(f1.constructor === Foo);//true
`} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_ECMA_grammer_proto2.jpg')} alt="jpg"/>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'proto'} />
                    <Paragraph title={'实例对象内部包含一个proto属性(IE10-浏览器不支持该属性)，指向该实例对象对应的原型对象'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
console.log(f1.__proto__ === Foo.prototype);//true
`} />
                    <Paragraph title={<p>注意：关于proto、constructor和prototype这三者的详细图例关系<Link to={'Extend_art1'}>移步至此</Link></p>} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'isPrototypeOf()'} />
                    <Paragraph title={'一般地，可以通过isPrototypeOf()方法来确定对象之间是否是实例对象和原型对象的关系'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
console.log(f1.__proto__ === Foo.prototype);//true
console.log(Foo.prototype.isPrototypeOf(f1));//true
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'Object.getPrototypeOf()'} />
                    <Paragraph title={'ES5新增了Object.getPrototypeOf()方法，该方法返回实例对象对应的原型对象'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
console.log(Object.getPrototypeOf(f1) === Foo.prototype);//true
`} />
                    <Paragraph title={'实际上，Object.getPrototypeOf()方法和proto属性是一回事，都指向原型对象'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
console.log(Object.getPrototypeOf(f1) === f1.__proto__ );//true
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'属性查找'} />
                    <Paragraph title={'当读取一个对象的属性时，javascript引擎首先在该对象的自有属性中查找属性名字。如果找到则返回。如果自有属性不包含该名字，则javascript会搜索proto中的对象。如果找到则返回。如果找不到，则返回undefined'} />
<CodeBlock content={
`var o = {};
console.log(o.toString());//'[object Object]'
o.toString = function(){
    return 'o';
}
console.log(o.toString());//'o'
delete o.toString;
console.log(o.toString());//'[objet Object]'
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'in'} />
                    <Paragraph title={'in操作符可以判断属性在不在该对象上，但无法区别自有还是继承属性'} />
<CodeBlock content={
`var o = {a:1};
var obj = Object.create(o);
obj.b = 2;
console.log('a' in obj);//true
console.log('b' in obj);//true
console.log('b' in o);//false
`} />
<CodeBlock content={
`//Object.create()是创建对象的一种方法，等价于
function Test(){};
var obj = new Test;
Test.prototype.a = 1;
obj.b = 2;
console.log('a' in obj);//true
console.log('b' in obj);//true
console.log('b' in Test.prototype);//false
`} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'hasOwnProperty()'} />
                    <Paragraph title={'通过hasOwnProperty()方法可以确定该属性是自有属性还是继承属性'} />
<CodeBlock content={
`var o = {a:1};
var obj = Object.create(o);
obj.b = 2;
console.log(obj.hasOwnProperty('a'));//false
console.log(obj.hasOwnProperty('b'));//true
`} />
                    <Paragraph title={'于是可以将hasOwnProperty方法和in运算符结合起来使用，用来鉴别原型属性'} />
<CodeBlock content={
`function hasPrototypeProperty(object,name){
    return name in object &amp;&amp; !object.hasOwnProperty(name);
}
`} />
                    <Paragraph title={'原型对象的共享机制使得它们成为一次性为所有对象定义方法的理想手段。因为一个方法对所有的对象实例做相同的事，没理由每个实例都要有一份自己的方法'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log(this.name);
}
var person1 = new Person('bai');
var person2 = new Person('hu');

person1.sayName();//'bai'
`} />
                    <Paragraph title={'可以在原型对象上存储其他类型的数据，但在存储引用值时需要注意。因为这些引用值会被多个实例共享，一个实例能够改变另一个实例的值'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log(this.name);
}
Person.prototype.favoraties = [];

var person1 = new Person('bai');
var person2 = new Person('hu');

person1.favoraties.push('pizza');
person2.favoraties.push('quinoa');
console.log(person1.favoraties);//["pizza", "quinoa"]
console.log(person2.favoraties);//["pizza", "quinoa"]
}
`} />
                    <Paragraph title={'虽然可以在原型对象上一一添加属性，但是直接用一个对象字面形式替换原型对象更简洁'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
}
Person.prototype = {
    sayName: function(){
        console.log(this.name);
    },
    toString : function(){
        return '[person ' + this.name + ']'
    }
};

var person1 = new Person('bai');

console.log(person1 instanceof Person);//true
console.log(person1.constructor === Person);//false
console.log(person1.constructor === Object);//true
`} />
                    <Paragraph title={'当一个函数被创建时，该原型对象的constructor属性自动创建，并指向该函数。当使用对象字面形式改写原型对象Person.prototype时，需要在改写原型对象时手动重置其constructor属性'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    sayName: function(){
        console.log(this.name);
    },
    toString : function(){
        return '[person ' + this.name + ']'
    }
};

var person1 = new Person('bai');

console.log(person1 instanceof Person);//true
console.log(person1.constructor === Person);//true
console.log(person1.constructor === Object);//false
`} />
                    <Paragraph title={'由于默认情况下，原生的constructor属性是不可枚举的，更妥善的解决方法是使用Object.defineProperty()方法，改变其属性描述符中的枚举性enumerable'} />
<CodeBlock content={
`function Person(name){
    this.name = name;
}
Person.prototype = {
    sayName: function(){
        console.log(this.name);
    },
    toString : function(){
        return '[person ' + this.name + ']'
    }
};
Object.defineProperty(Person.prototype,'constructor',{
    enumerable: false,
    value: Person
});
var person1 = new Person('bai');
console.log(person1 instanceof Person);//true
console.log(person1.constructor === Person);//true
console.log(person1.constructor === Object);//false
`} />
                    <Label title={'总结'} />
                    <Paragraph title={'构造函数、原型对象和实例对象之间的关系是实例对象和构造函数之间没有直接联系'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
`} />
                    <Paragraph title={'以上代码的原型对象是Foo.prototype，实例对象是f1，构造函数是Foo'} />
                    <Paragraph title={'原型对象和实例对象的关系'} />
<CodeBlock content={
`console.log(Foo.prototype === f1.__proto__);//true
`} />
                    <Paragraph title={'原型对象和构造函数的关系 '} />
<CodeBlock content={
`console.log(Foo.prototype.constructor === Foo);//true
`} />
                    <Paragraph title={'而实例对象和构造函数则没有直接关系，间接关系是实例对象可以继承原型对象的constructor属性'} />
<CodeBlock content={
`console.log(f1.constructor === Foo);//true
`} />
                    <Paragraph title={'如果非要扯实例对象和构造函数的关系，那只能是下面这句代码，实例对象是构造函数的new操作的结果'} />
<CodeBlock content={
`var f1 = new Foo;
`} />
                    <Paragraph title={'这句代码执行以后，如果重置原型对象，则会打破它们三个的关系'} />
<CodeBlock content={
`function Foo(){};
var f1 = new Foo;
console.log(Foo.prototype === f1.__proto__);//true
console.log(Foo.prototype.constructor === Foo);//true

Foo.prototype = {};
console.log(Foo.prototype === f1.__proto__);//false
console.log(Foo.prototype.constructor === Foo);//false
`} />
                    <Paragraph title={'所以，代码顺序很重要'} />
                </div>
            </Container>
        )
    }
}

export default Extend_art2;