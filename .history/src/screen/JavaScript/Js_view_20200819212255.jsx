import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Js_view extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {title: 'babel基本配置', path: '/babel_basic'},
                {title: 'JavaScript 深入之浮点数精度', path: '/precision'},
                {title: 'JavaScript函数式编程', path: '/Functional_Coding'},
                {title: '文件断点续传', path: '/File_Continuingly'},
                {title: 'defineProperty 与 proxy', path: '/proxy'},
                {title: '我们来聊聊 Promise', path: '/promise'}
            ],
            list: [
                {title: '手写map方法', path: '/map'},
                {title: 'JavaScript 深入之浮点数精度', path: '/precision'},
                {title: 'JavaScript函数式编程', path: '/Functional_Coding'},
                {title: '文件断点续传', path: '/File_Continuingly'},
                {title: 'defineProperty 与 proxy', path: '/proxy'},
                {title: '我们来聊聊 Promise', path: '/promise'}
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>ES6</h2>
                        <p>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="JS领域">
                                    <List className="my-list">
                                        {this.state.data.map((item, index) => {
                                            return (
                                                <Link to={item.path} key={index}>
                                                    <List.Item>{item.title}</List.Item>
                                                </Link>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                                <Accordion.Panel header="手写Array原生方法">
                                    <List className="my-list">
                                        {this.state.list.map((item, index) => {
                                            return (
                                                <Link to={item.path} key={index}>
                                                    <List.Item>{item.title}</List.Item>
                                                </Link>
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

export default Js_view;