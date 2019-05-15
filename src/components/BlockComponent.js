import React from 'react';
import {Link} from 'react-router-dom';
import '@/assets/style/components.less';

export class BlockComponent extends React.Component {
    render() {
        let { route, title, containerStyle, titleStyle } = this.props;
        return (
            <div className={'blockComponent'} style={containerStyle}>
                <Link to={route}>
                    <p style={titleStyle}>{title}</p>
                </Link>
            </div>
        )
    }
}
