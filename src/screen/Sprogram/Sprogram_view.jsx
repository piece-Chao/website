import React from 'react';
import Container from '@/screen/Container';
import { BlockComponent, Title } from '@/components/SubComponent';

class Sprogram_view extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    route: '/Sprogram_art1',
                    desc: '微信小程序开发(1)：小程序的执行流程是怎么样的？'
                }, {
                    route: '/Sprogram_art2',
                    desc: '微信小程序开发(2)：小程序基本介绍'
                }, {
                    route: '/Sprogram_art3',
                    desc: '微信小程序开发(3)：这是一个组件'
                }, {
                    route: '/Sprogram_art4',
                    desc: '微信小程序开发(4)：打造自己的UI库'
                }, {
                    route: '/Sprogram_art5',
                    desc: '微信小程序开发(5)：日历组件的实现'
                }, {
                    route: '/Sprogram_art6',
                    desc: '微信小程序开发(6)：一个业务页面的完成'
                }, {
                    route: '/Sprogram_art7',
                    desc: '微信小程序开发(7)：列表页面怎么做'
                }
            ]
        }
    }

    render() {
        return(
            <Container>
                <Title title={'小程序专题'} />
                {
                    this.state.data.map((item, index) => {
                        return (<BlockComponent key={index} route={item.route} title={item.desc}></BlockComponent>)
                    })
                }
            </Container>
        )
    }
}

export default Sprogram_view;