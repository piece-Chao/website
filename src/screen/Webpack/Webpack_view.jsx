import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Html_view extends React.Component {
    constructor() {
        super()
        this.state = {
            LabelData: [
                {title: 'webpack基本介绍', path: '/Webpack_basic'},
                {title: '深入浅出webpack', path: '/Webpack_induction'},
                {title: 'webpack最佳实践',  path: '/Webpack_practice'},
                {title: '深度解锁Webpack系列(上)',  path: 'Webpack_deblocking_one'},
                {title: 'footer',  path: ''},
                {title: 'aside',  path: ''},
                {title: 'main',  path: ''},
                {title: 'audio',  path: ''},
                {title: 'video',  path: ''}
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>Webpack</h2>
                        <p>webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="webpack 相关">
                                    <List className="my-list">
                                        {this.state.LabelData.map((item, index) => {
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

export default Html_view;