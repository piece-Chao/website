import React, { Component } from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';

class Java_view extends Component {
    constructor() {
        super()
        this.state = {
            basicsList: [
                {title: '基础语法'},
                {title: '基本数据类型'},
                {title: '修饰符'},
                {title: '方法'}
            ],
            ObjectOrientedList: [
                {title: '封装'},
                {title: '继承'},
                {title: '多态'},
                {title: '接口'},
                {title: '抽象类'},
                {title: '重写、重载'}
            ],
            seniorList: [
                {title: '数据结构'},
                {title: '多线程'},
                {title: '泛型'},
                {title: '网络编程'},
                {title: '序列化'},
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className='level2'>
                    <div className="_desc">
                        <h2>Java</h2>
                        <p>Java是由Sun Microsystems公司于1995年5月推出的Java面向对象程序设计语言和Java平台的总称。由James Gosling和同事们共同研发，并在1995年正式推出。</p>
                        <p>Java语言提供类、接口和继承等原语，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制（关键字为implements）。Java语言全面支持动态绑定，而C++语言只对虚函数使用动态绑定。总之，Java语言是一个纯的面向对象程序设计语言。</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="基本教程">
                                    <List className="my-list">
                                        {this.state.basicsList.map((item, index) => {
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
                                <Accordion.Panel header="面向对象">
                                    <List className="my-list">
                                        {this.state.ObjectOrientedList.map((item, index) => {
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
                                <Accordion.Panel header="高级教程">
                                    <List className="my-list">
                                    {this.state.seniorList.map((item, index) => {
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

export default Java_view;