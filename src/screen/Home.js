import React, { Component } from 'react';
import { NavBar, Icon, Carousel, WingBlank } from 'antd-mobile';
import '@/assets/style/Home.less';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: ['BG_html', 'BG_css', 'BG_js', 'BG_vue', 'BG_react'],
            imgHeight: 176,
            GridData: ['HTML', 'CSS', 'JavaScript', 'HTTP', '前端框架', '前端工具', '后端相关', '移动端'],
            RecommendData: [
                {title: '表单', desc: '分享方法和思路，让表单与众不同'},
                {title: '继承', desc: '不理解继承，就无法真正理解JS'},
                {title: 'css效果', desc: '使用css实现的各种效果'},
                {title: '作用域', desc: '深入理解JS作用域'}
            ],
            Article: [
                {title: 'CSS Why', url: 'url(https://static.xiaohuochai.site/5af6d386c5c7a22150ec2cf7_20180521131743.jpg?imageView2/2/format/webp)', tip: 'CSS'},
                {title: '使用余弦定理制作磁盘形状h5音乐播放器', url: 'url(https://static.xiaohuochai.site/5ad5e23fd2e94d2f60e2d9c6_20180521132007.jpg?imageView2/2/format/webp)', tip: 'HTML'},
                {title: '基于JWT标准的用户认证接口实现', url: 'url(https://static.xiaohuochai.site/5b02978325115949d4b67eae_20180613185146.jpg?imageView2/2/format/webp)', tip: '后端相关'},
                {title: '深入理解javascript中的事件循环event-loop', url: 'url(https://static.xiaohuochai.site/5ad9d7dc352ca82950939e4f_20180521132239.png?imageView2/2/format/webp)', tip: 'JavaScript'}
            ],
            category: [
                {title: 'HTML', num: '28篇文章'},
                {title: 'CSS', num: '99篇文章'},
                {title: 'Mobile', num: '7篇文章'},
                {title: 'NodiJS', num: '24篇文章'},
                {title: 'Utils', num: '59篇文章'},
                {title: 'VUE', num: '34篇文章'},
                {title: 'Javascript', num: '219篇文章'},
                {title: 'React', num: '10篇文章'}
            ]
        }
    }
    
    render() {
        return (
        <div className="Home">
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                >前端笔记</NavBar>
            </div>
            <WingBlank style={{margin: 0}}>
                <Carousel
                    autoplay={true}
                    infinite
                    style={{margin: 0}}>
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={require(`@/assets/images/${val}.png`)}
                            alt={`${val}`}
                            style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: this.state.imgHeight });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
            <div className="GridStyle clearfix">
                <ul>
                    {this.state.GridData.map((item, index) => {
                        return (
                            <li key={index}>
                                <div></div>
                                <p>{item}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="Recommend clearfix">
                <p>专题推荐</p>
                <ul>
                    {this.state.RecommendData.map((item, index) => {
                        return (
                            <li key={index}>
                                <p>{item.title}</p>
                                <p>{item.desc}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="Article clearfix">
                <p>推荐文章</p>
                <ul>
                    {this.state.Article.map((item, index) => {
                        return (
                            <li key={index} style={{backgroundImage: item.url}}>
                                <div>
                                    <p>{item.title}</p>
                                    <span>{item.tip}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="category clearfix">
                <p>类别推荐</p>
                <ul className="clearfix">
                    {this.state.category.map((item, index) => {
                        return (
                            <li key={index}>
                                <p>{item.title}</p>
                                <p>{item.num}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        );
    }
}

export default Home;
