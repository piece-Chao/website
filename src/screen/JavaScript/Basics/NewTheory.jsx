import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, ListItem, CodeBlock } from '@/components/SubComponent';

class NewTheory extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                  <Title title={'new 操作符实现原理'} />
                  <Label title={'使用new操作符会做以下事情'}></Label>
                  <ListItem list={
                    [
                      '创建了一个全新的对象。',
                      '这个对象会被执行[[Prototype]]（也就是__proto__）链接。',
                      '生成的新对象会绑定到函数调用的this。', 
                      '通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。', 
                      '如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。'
                    ]
                  } />
                  <Label title={'我们来模拟实现一个new'}></Label>
                  <CodeBlock content={
`function _new(ctor, ...rest) {
  if (typeof ctor !== 'function') return new Error('type error') // 不是函数直接报错
  const obj = Object.create(ctor.prototype); // 创建对象并绑定原型
  const ctorResult = ctor.call(obj, ...rest); // 绑定this，拷贝属性和方法，传递参数，拿到返回值
  const isObject = typeof ctorResult === 'object' && ctorResult !== null; // 判断返回值是否是对象
  const isFunction = typeof ctorResult === 'function'; // 判断返回值是否是函数
  if (isObject || isFunction) {
    return ctorResult; // 返回原函数返回的内容
  }
  return obj; // 原函数返回的不是复杂类型，返回创建的对象
}
`}></CodeBlock>
                </div>
            </Container>
        );
    }
}

export default NewTheory;
