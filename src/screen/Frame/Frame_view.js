import React, { Component } from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Frame_view extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vueList: [
                {title: 'Vue生命周期', path: '/'},
                {title: 'Vue响应式原理',  path: '/'},
                {title: 'Vue动态组件',  path: '/'},
                {title: 'Axios',  path: '/'},
                {title: 'vue-router',  path: '/'},
                {title: 'vuex',  path: '/'}
            ],
            reactList: [
                {title: 'react生命周期',  path: '/'},
                {title: 'react-router',  path: '/'},
                {title: 'styled-component',  path: '/'},
                {title: 'fetch',  path: '/'},
                {title: 'redux',  path: '/'},
                {title: 'saga',  path: '/'}
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>框架</h2>
                        <p>目前最流行的前端框架包括Vue，react，angular</p>
                        <p>近年来，前端框架发展火热，新的框架和名词不停地出现在开发者眼前，而且开发模式也产生了一定的变化。目前来看，前端MVVM框架的出现给开发者带来了不小的便利，其中的代表就有Angular.js、React.js以及Vue.js。这些框架的产生使得开发者能从过去手动维护DOM状态的繁琐操作中解脱出来，尽可能地让DOM的更新操作是自动的，状态变化的时候就自动更新到正确的状态。</p>
                        <p>React是如今热门的两大前端框架之一，它设计思路独特，性能卓越，逻辑简单，受到了大量开发者的喜爱。Vue的基本思路是基于HTML模板的扩展，而React的基本思路是基于JS语言的扩展。由于Vue的写法更接近于传统，所以对于习惯了HTML的开发者更容易接受；而React中的JSX语法需要一定的学习成本。但一旦掌握了，再基于强大的社区力量，就可以使用JS语言来表达一切，使用起来非常流畅</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="Vue">
                                    <List className="my-list">
                                        {this.state.vueList.map((item, index) => {
                                            return (
                                                <List.Item key={index}>
                                                    <Link to={item.path}>{item.title}</Link>
                                                </List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="react">
                                    <List className="my-list">
                                        {this.state.reactList.map((item, index) => {
                                            return (
                                                <List.Item key={index}>
                                                    <Link to={item.path}>{item.title}</Link>
                                                </List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </main>
                </div>
            </Container>
        )
    }
}

export default Frame_view
