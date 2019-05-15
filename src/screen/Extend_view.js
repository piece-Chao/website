import React from 'react';
import Container from '@/screen/Container';
import { BlockComponent } from '@/components/BlockComponent';

class Extend_view extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    route: '/',
                    desc: '一张图理解prototype、proto和constructor的三角关系'
                }, {
                    route: '/',
                    desc: 'javascript面向对象系列第一篇——构造函数和原型对象'
                }, {
                    route: '/',
                    desc: 'javascript面向对象系列第二篇——创建对象的5种模式'
                }, {
                    route: '/',
                    desc: 'javascript面向对象系列第三篇——实现继承的3种形式'
                }, {
                    route: '/',
                    desc: 'javascript面向对象系列第四篇——面向对象的6个概念'
                }
            ]
        }
    }

    render() {
        return(
            <Container>
                <h3 style={{fontSize: '24px', textAlign: 'center', lineHeight: '36px', marginTop: '10px'}}>继承专题</h3>
                {
                    this.state.data.map((item, index) => {
                        return (<BlockComponent key={index} route={item.route} title={item.desc}></BlockComponent>)
                    })
                }
            </Container>
        )
    }
}

export default Extend_view;