import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';

class Ts_view extends React.Component {
    constructor() {
        super()
        this.state = {
            foundationtypeData: [
                {title: '布尔值'},
                {title: '数字'},
                {title: '字符串'},
                {title: '数组'},
                {title: '元组'},
                {title: '枚举'},
                {title: 'Any'},
                {title: 'Void'},
                {title: 'Null 和 Undefined'},
                {title: 'Never'},
                {title: 'Object'}
            ],
            interfaceData: [
                {title: '基本'},
                {title: '可选属性'},
                {title: '任意属性'},
                {title: '只读属性'}
            ],
            classData: [
                {title: 'public private 和 protected'},
                {title: '抽象类'},
                {title: '类的类型'}
            ],
            functionData: [
                {title: '函数声明'},
                {title: '函数表达式'},
                {title: '用接口定义函数的形状'},
                {title: '可选参数'},
                {title: '参数默认值'},
                {title: '剩余参数'},
                {title: '重载'}
            ],
            genericsData: [
                {title: '基本'},
                {title: '多个类型参数'},
                {title: '泛型约束'},
                {title: '泛型接口'},
                {title: '泛型类'},
                {title: '泛型参数的默认类型'}
            ],
            otherData: [
                {title: '类型断言'},
                {title: '声明文件'},
                {title: '枚举'},
                {title: '声明合并'},
                {title: '装饰器'}
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>TypeScript</h2>
                        <p>TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="数据类型">
                                    <List className="my-list">
                                        {this.state.foundationtypeData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="接口">
                                    <List className="my-list">
                                        {this.state.interfaceData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="函数">
                                    <List className="my-list">
                                        {this.state.functionData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="泛型">
                                    <List className="my-list">
                                        {this.state.genericsData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="其他">
                                    <List className="my-list">
                                        {this.state.otherData.map((item, index) => {
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

export default Ts_view;