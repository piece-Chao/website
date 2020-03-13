import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Js_view extends React.Component {
    constructor() {
        super()
        this.state = {
            arrayData: [
                {title: 'babel基本配置', path: '/babel_basic'},
                {title: 'Array.of()', path: ''},
                {title: 'find()、findIndex()', path: ''},
                {title: 'includes()', path: ''},
                {title: 'entries()、keys()、value()', path: ''}
            ],
            funcData: [
                {title: '参数的默认值'},
                {title: 'rest 参数'},
                {title: '箭头函数'},
                {title: '尾调用优化'}
            ],
            objData: [
                {title: '属性的简洁表示法'},
                {title: '属性的可枚举性和遍历'},
                {title: 'super 关键字'},
                {title: '对象的扩展运算符'}
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
                                <Accordion.Panel header="数组相关">
                                    <List className="my-list">
                                        {this.state.arrayData.map((item, index) => {
                                            return (
                                                <Link to={item.path} key={index}>
                                                    <List.Item>{item.title}</List.Item>
                                                </Link>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="函数相关">
                                    <List className="my-list">
                                        {this.state.funcData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="常见问题">
                                    <List className="my-list">
                                        {this.state.objData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
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