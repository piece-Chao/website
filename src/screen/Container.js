import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import history from '@/tools/history';

class Container extends Component {

    render() {
        return (
            <div>
                <NavBar
                mode="light"
                icon={window.location.hash === '#/Home' ? '' : <Icon type="left" />}
                onLeftClick={() => {history.go(-1)}}
                >前端笔记</NavBar>
            {this.props.children}
            </div>
        )
    }
}

export default Container;