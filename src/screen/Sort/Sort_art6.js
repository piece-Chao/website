import React from 'react';
import Container from '@/screen/Container';
import { Title, Paragraph, CodeBlock } from '@/components/SubComponent';

class Sort_art6 extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'快速排序（Quick Sort）'} />
                    <Paragraph title={'快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'算法描述'} />
                    <Paragraph title={'快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：'} />
                    <Paragraph title={'从数列中挑出一个元素，称为 “基准”（pivot）；'} />
                    <Paragraph title={'重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；'} />
                    <Paragraph title={'递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'动图演示'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/JS_sort_art8.gif')} alt="png"/>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'代码实现'} />
<CodeBlock content={
`function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, left ,right) { // 分区操作
    var pivot = left, // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'算法分析'} />
                    <Paragraph title={'"快速排序"（Quicksort）使用得最广泛，速度也较快。它是图灵奖得主C. A. R. Hoare（1934--）于1960时提出来的。'} />
                </div>
            </Container>
        )
    }
}

export default Sort_art6;