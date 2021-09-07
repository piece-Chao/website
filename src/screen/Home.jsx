import React, { Component } from 'react';
import {Carousel, WingBlank } from 'antd-mobile';
import '@/assets/style/Home.less';
import { Link } from 'react-router-dom';
import Container from '@/screen/Container';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: ['BG_html', 'BG_css', 'BG_js', 'BG_vue', 'BG_react'],
            imgHeight: 176,
            GridData: [
                {title: 'Webpack', text: 'W', src: 'Webpack_view'},
                {title: 'CSS', text: 'C', src: 'Css_view'},
                {title: 'JavaScript', text: 'J', src: 'Js_view'},
                {title: 'HTTP', text: 'H', src: 'Http_view'},
                {title: 'TypeScript', text: 'T', src: 'Ts_view'},
                {title: '前端框架', text: '框', src: 'Frame_view'},
                {title: '后端相关', text: '后', src: 'Java_view'},
                {title: '杂谈', text: '杂', src: 'Tattle_view'}
            ],
            RecommendData: [
                {title: '小程序', desc: '从0到1制作一个微信小程序', route: 'Sprogram_view'},
                {title: '继承', desc: '不理解继承，就无法真正理解JS', route: 'Extend_view'},
                {title: '排序算法', desc: 'js十大经典排序算法', route: 'Sort_view'},
                {title: '作用域', desc: '深入理解JS作用域', route: 'Range_view'}
            ],
            Article: [
                {title: 'CSS Why', url: 'url(https://static.xiaohuochai.site/5af6d386c5c7a22150ec2cf7_20180521131743.jpg?imageView2/2/format/webp)', tip: 'CSS', src: 'Css_Why_art'},
                {title: '前端实现断点续传', url: `url(${require('@/assets/images/Home2.jpeg')})`, tip: 'JavaScript', src: 'File_Continuingly'},
                {title: '函数式编程', url: `url(${require('@/assets/images/Home3.jpeg')})`, tip: 'JavaScript', src: 'Functional_Coding'},
                {title: '搜索引擎优化', url: `url(${require('@/assets/images/SEO.jpeg')})`, tip: 'SEO', src: 'SEO'}
            ],
            category: [
                {title: 'Webpack', num: '28篇文章', src: 'Webpack_view'},
                {title: 'CSS', num: '99篇文章', src: 'Css_view'},
                {title: 'Tattle', num: '7篇文章', src: 'Tattle_view'},
                {title: 'Flutter', num: '24篇文章', src: '/'},
                {title: 'HTTP', num: '59篇文章', src: 'Http_view'},
                {title: 'VUE', num: '34篇文章', src: '/'},
                {title: 'Javascript', num: '219篇文章', src: 'Js_view'},
                {title: 'React', num: '10篇文章', src: '/'}
            ]
        }
    }
    
    render() {
        return (
        <Container>
            <div className="Home">
                <WingBlank style={{margin: 0}}>
                    <Carousel
                        autoplay={true}
                        infinite
                        style={{margin: 0}}>
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href="/"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
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
                                    <Link to={item.src}>
                                        <div>{item.text}</div>
                                        <p>{item.title}</p>
                                    </Link>
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
                                    <Link to={item.route}>
                                        <p>{item.title}</p>
                                        <p>{item.desc}</p>
                                    </Link>
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
                                    <Link to={item.src}>
                                        <div>
                                            <p>{item.title}</p>
                                            <span>{item.tip}</span>
                                        </div>
                                    </Link>
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
                                    <Link to={item.src}>
                                        <p>{item.title}</p>
                                        <p>{item.num}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Container>
        );
    }
}

export default Home;
