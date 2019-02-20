import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';

class Js_view extends React.Component {
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
                {title: '垂直居中'},
                {title: 'position问题'},
                {title: '配置less、sass'},
                {title: 'rem、em、px'},
                {title: '清除浮动'},
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>es6</h2>
                        <p>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p>
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