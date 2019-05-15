import React from 'react';
import Container from '@/screen/Container';
import { BlockComponent } from '@/components/BlockComponent';

class Range_view extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    route: '/',
                    desc: '深入理解javascript作用域系列第一篇——内部原理'
                }, {
                    route: '/',
                    desc: '深入理解javascript作用域系列第二篇——词法作用域和动态作用域'
                }, {
                    route: '/',
                    desc: '深入理解javascript作用域系列第三篇——声明提升(hoisting)'
                }, {
                    route: '/',
                    desc: '深入理解javascript作用域系列第四篇——块作用域'
                }, {
                    route: '/',
                    desc: '深入理解javascript作用域系列第五篇——一张图理解执行环境和作用域'
                }
            ]
        }
    }

    render() {
        return(
            <Container>
                <h3 style={{fontSize: '24px', textAlign: 'center', lineHeight: '36px', marginTop: '10px'}}>作用域专题</h3>
                {
                    this.state.data.map((item, index) => {
                        return (<BlockComponent key={index} route={item.route} title={item.desc}></BlockComponent>)
                    })
                }
            </Container>
        )
    }
}

export default Range_view;