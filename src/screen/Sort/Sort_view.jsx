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
                    route: '/Sort_art3',
                    desc: '插入排序（Insertion Sort）'
                }, {
                    route: '/Sort_art4',
                    desc: '希尔排序（Shell Sort）'
                }, {
                    route: '/Sort_art5',
                    desc: '归并排序（Merge Sort）'
                }, {
                    route: '/Sort_art6',
                    desc: '快速排序（Quick Sort）'
                }, {
                    route: '/Sort_art7',
                    desc: '堆排序（Heap Sort）'
                }, {
                    route: '/Sort_art8',
                    desc: '计数排序（Counting Sort）'
                }, {
                    route: '/Sort_art9',
                    desc: '桶排序（Bucket Sort）'
                }, {
                    route: '/Sort_art10',
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