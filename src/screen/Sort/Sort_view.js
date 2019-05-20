import React from 'react';
import Container from '@/screen/Container';
import { BlockComponent, Title } from '@/components/SubComponent';

class Sort_view extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    route: '/Sort_art1',
                    desc: '冒泡排序（Bubble Sort）'
                }, {
                    route: '/Sort_art2',
                    desc: '选择排序（Selection Sort）'
                }, {
                    route: '/',
                    desc: '插入排序（Insertion Sort）'
                }, {
                    route: '/',
                    desc: '希尔排序（Shell Sort）'
                }, {
                    route: '/',
                    desc: '归并排序（Merge Sort）'
                }, {
                    route: '/',
                    desc: '快速排序（Quick Sort）'
                }, {
                    route: '/',
                    desc: '堆排序（Heap Sort）'
                }, {
                    route: '/',
                    desc: '计数排序（Counting Sort）'
                }, {
                    route: '/',
                    desc: '桶排序（Bucket Sort）'
                }, {
                    route: '/',
                    desc: '基数排序（Radix Sort）'
                }
            ]
        }
    }

    render() {
        return(
            <Container>
                <Title title={'排序算法专题'} />
                {
                    this.state.data.map((item, index) => {
                        return (<BlockComponent key={index} route={item.route} title={item.desc}></BlockComponent>)
                    })
                }
            </Container>
        )
    }
}

export default Sort_view;