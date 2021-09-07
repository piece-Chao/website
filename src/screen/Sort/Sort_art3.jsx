import React from 'react';
import Container from '@/screen/Container';
import { Title, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sort_art3 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'插入排序（Insertion Sort）'} />
                    <Paragraph title={'插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'算法描述'} />
                    <Paragraph title={'一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：'} />
                    <Paragraph title={'从第一个元素开始，该元素可以认为已经被排序；'} />
                    <Paragraph title={'取出下一个元素，在已经排序的元素序列中从后向前扫描；'} />
                    <Paragraph title={'如果该元素（已排序）大于新元素，将该元素移到下一位置；'} />
                    <Paragraph title={'重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；'} />
                    <Paragraph title={'将新元素插入到该位置后；'} />
                    <Paragraph title={'重复步骤2~5。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'动图演示'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sort_art5.gif')} alt="png"/>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'代码实现'} />
<CodeBlock content={
`function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'算法分析'} />
                    <Paragraph title={'插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。'} />
                </div>
            </Container>
        )
    }
}

export default Sort_art3;