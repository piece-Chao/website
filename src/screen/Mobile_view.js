import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';

class Mobile_view extends React.Component {
    constructor() {
        super()
        this.state = {
            basicsList: [
                {title: '像素和DPR'},
                {title: '屏幕三要素'},
                {title: '视口viewport'},
                {title: '真机测试'},
                {title: '常见问题'}
            ],

        }
    }

    render() {
        return (
            <Container>
                <div className='level2'>
                    <div className="_desc">
                        <h2>移动端</h2>
                        <p>移动端开发是前端开发很重要的一部分，虽然现在很多移动web成为app的下载页面，但是移动web依然在前端占有很高比重</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="基础">
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
                    </main>
                </div>
            </Container>
        )
    }
}

export default Mobile_view;