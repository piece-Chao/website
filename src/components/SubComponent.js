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

export class Title extends React.Component {
    render() {
        return (
            <h3 style={{fontSize: '24px', textAlign: 'center', lineHeight: '36px', marginTop: '10px'}}>{this.props.title}</h3>
        )
    }
}

export class Label extends React.Component {
    render() {
        return(
            <div className={'label'}>
                <p>{this.props.title} <i className={'Lborder'}></i></p>
            </div>
        )
    }
}

export class Paragraph extends React.Component {
    render() {
        return(
            <section style={{textIndent: '2em', margin: '10px 0', lineHeight: '26px', ...this.props.style}}>{this.props.title}</section>
        )
    }
}

export class CodeBlock extends React.Component {
    render() {
        return(
            <div className={'highlight'}>
                <pre>
                    {this.props.content}
                </pre>
            </div>
        )
    }
}
