import React from 'react';
import Container from '@/screen/Container';
import { Accordion, List } from 'antd-mobile';

class Http_view extends React.Component {
    constructor() {
        super()
        this.state = {
            componentsData: [
                {title: '概念'},
                {title: '客户端'},
                {title: '服务器端'},
                {title: '代理'}
            ],
            natureData: [
                {title: 'HTTP 是简单的'},
                {title: 'HTTP 是可扩展的'},
                {title: 'HTTP 是无状态，有会话的'},
                {title: 'HTTP 和连接'}
            ],
            streamData: [
                {title: 'HTTP 控制'},
                {title: 'HTTP 流'}
            ],
            messageData: [
                {title: '请求'},
                {title: '响应'}
            ]
        }
    }


    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>HTTP</h2>
                        <p>HTTP是一种能够获取如 HTML 这样的网络资源的 protocol(通讯协议)。它是在 Web 上进行数据交换的基础，是一种 client-server 协议，也就是说，请求通常是由像浏览器这样的接受方发起的。一个完整的Web文档通常是由不同的子文档拼接而成的，像是文本、布局描述、图片、视频、脚本等等。</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="HTTP的组件系统">
                                    <List className="my-list">
                                        {this.state.componentsData.map((item, index) => {
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
                                <Accordion.Panel header="HTTP 的基本性质">
                                    <List className="my-list">
                                        {this.state.natureData.map((item, index) => {
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
                                <Accordion.Panel header="HTTP 报文">
                                    <List className="my-list">
                                        {this.state.messageData.map((item, index) => {
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
                                <Accordion.Panel header="HTTP 控制和流">
                                    <List className="my-list">
                                        {this.state.streamData.map((item, index) => {
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

export default Http_view;