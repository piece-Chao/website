import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Css_view extends React.Component {
    constructor() {
        super()
        this.state = {
            attributeData: [
                {title: '圆角'},
                {title: '阴影'},
                {title: '渐变'},
                {title: '过渡'},
                {title: '动画'}
            ],
            boxData: [
                {title: '标准盒模型'},
                {title: 'flex'},
                {title: 'FBC'},
                {title: '栅格布局'},
                {title: '圣杯布局'},
                {title: '双飞翼布局'}
            ],
            questionData: [
                {title: '垂直居中', path: '/'},
                {title: 'position问题', path: '/'},
                {title: '配置less、sass', path: '/'},
                {title: 'rem、em、px', path: '/'},
                {title: '清除浮动', path: '/'},
                {title: 'scss入门', path: '/Scss_introduce'}
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>CSS3</h2>
                        <p>CSS3 是层叠样式表（Cascading Style Sheets）语言的最新版本，旨在扩展CSS2.1。</p>
                        <p>它带来了许多期待已久的新特性， 例如圆角、阴影、gradients(渐变) 、transitions(过渡) 与 animations(动画) 。以及新的布局方式，如 multi-columns 、 flexible box 与 grid layouts。实验性特性以浏览器引擎为前缀（vendor-prefixed），应避免在生产环境中使用，或极其谨慎地使用，因为将来它们的语法和语义都有可能被更改。</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="CSS3 新特性">
                                    <List className="my-list">
                                        {this.state.attributeData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="布局">
                                    <List className="my-list">
                                        {this.state.boxData.map((item, index) => {
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
                                        {this.state.questionData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>
                                                    <Link style={{display: 'inline-block', width: '100%', height: '100%'}} to={item.path}>{item.title}</Link>
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

export default Css_view;