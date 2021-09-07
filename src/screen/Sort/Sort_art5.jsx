import React from 'react';
import Container from '@/screen/Container';
import { Title, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sort_art5 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'归并排序（Merge Sort）'} />
                    <Paragraph title={'归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'算法描述'} />
                    <Paragraph title={'把长度为n的输入序列分成两个长度为n/2的子序列；'} />
                    <Paragraph title={'对这两个子序列分别采用归并排序；'} />
                    <Paragraph title={'将两个排序好的子序列合并成一个最终的排序序列。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'动图演示'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sort_art7.gif')} alt="png"/>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'代码实现'} />
<CodeBlock content={
`function mergeSort(arr) { // 采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}
`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'算法分析'} />
                    <Paragraph title={'归并排序是一种稳定的排序方法。和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(nlogn）的时间复杂度。代价是需要额外的内存空间。'} />
                </div>
            </Container>
        )
    }
}

export default Sort_art5;