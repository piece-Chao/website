import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Tattle_view extends React.Component {
    constructor() {
        super()
        this.state = {
            accordionList: [{
                title: '科技',
                basicsList: [
                    {title: 'SEO优化', path: '/SEO'}
                ]
            }, {
                title: '数码',
                basicsList: [
                    {title: 'babel基本配置', path: '/'}
                ]
            }, {
                title: '金融',
                basicsList: [
                    {title: 'babel基本配置', path: '/'}
                ]
            }]
        }
    }

    render() {
        return (
            <Container>
                <div className='level2'>
                    <div className="_desc">
                        <h2>杂谈</h2>
                        <p>这里会写一些随想，转载一些好的文章，非前端领域</p>
                    </div>
                    <main>
                        <div>
                            {this.state.accordionList.map((item, index) => {
                                return (
                                    <Accordion key={index} defaultActiveKey="0" className="my-accordion">
                                        <Accordion.Panel header={item.title}>
                                            <List className="my-list">
                                                {item.basicsList.map((basic, basicIndex) => {
                                                    return (
                                                        <Link to={basic.path} key={basicIndex}>
                                                            <List.Item>{basic.title}</List.Item>
                                                        </Link>
                                                    )
                                                })}
                                            </List>
                                        </Accordion.Panel>
                                    </Accordion>
                                )
                            })}
                        </div>
                    </main>
                </div>
            </Container>
        )
    }
}

export default Tattle_view;