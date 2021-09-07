import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Css_view extends React.Component {
    constructor() {
        super()
        this.state = {
            questionData: [
                {title: 'css why', path: '/Css_Why_art'},
                {title: 'scss入门', path: '/Scss_introduce'},
                {title: '深入理解 flex', path: '/Flex_art'},
                {title: '过渡', path: 'Transition_art'},
                {title: '动画', path: '/Animation_art'}
            ],
            boxData: [
                {title: 'css中的px、em、rem 详解', path: '/general_unit'},
                {title: '使用calc()计算宽高（vw/vh）', path: '/calculating_unit'},
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
                            <Accordion activeKey={['0', '1']} className="my-accordion">
                                <Accordion.Panel key="0" header="常见问题">
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
                                <Accordion.Panel key="1" header="布局单位">
                                    <List className="my-list">
                                        {this.state.boxData.map((item, index) => {
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