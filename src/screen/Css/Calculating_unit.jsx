import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Calculating_unit extends React.Component {
  render() {
    return (
      <Container>
        <div style={{ padding: '0 10px' }}>
          <Title title={'使用calc()计算宽高（vw/vh）'} />
          <Label title={'calc()是什么？'} />
          <Paragraph title={'简单来说就是CSS3中新增的一个函数，calculate（计算）的缩写。用于动态计算宽/高，你可以使用calc()给元素的各个属性设置值【margin、border、padding、font-size】等'} />
          <Label title={'calc()语法'} />
          <Paragraph title={'calc的语法就是简单的四则运算'} />
          <ListItem list={[
            '使用“+”、“-”、“*” 和 “/”四则运算；',
            '可以使用百分比、px、em、rem等单位；',
            '可以混合使用各种单位进行计算；',
            '表达式中有“+”和“-”时，其前后必须要有空格，如"width: calc(12%+5em)"这种没有空格的写法是错误的；',
            '表达式中有“*”和“/”时，其前后可以没有空格，但建议留有空格。'
          ]} />
          <Label title={'calc()的用途'} />
          <Paragraph title={'主要用于计算不确定值，例如一个外边距为10px,宽度为100%的元素，这种情况我们怎么设置呢？如果设置了'} />
<CodeBlock content={
`width: 100%;
margin: 10px;
`} />
          <Paragraph title={'你可以看出这个box已经溢出了，那么怎么解决呢？就可以用calc函数了。'} />
<CodeBlock content={
`width: 800px;
width: calc(100% - (10 *2)px);
margin: 10px;
`} />
          <Label title={'vw和vh是什么？'} />
          <Paragraph title={'vw、vh、vmin、vmax是一种视窗单位，也是相对单位。它相对的不是父节点或者页面的根节点。而是由视窗（Viewport）大小来决定的，单位 1，代表类似于 1%。视窗(Viewport)是你的浏览器实际显示内容的区域—，换句话说是你的不包括工具栏和按钮的网页浏览器。'} />
          <Paragraph title={'具体描述如下：'} />
          <ListItem list={[
            'vw：视窗宽度的百分比（1vw 代表视窗的宽度为 1%）',
            'vh：视窗高度的百分比',
            'vmin：取当前Vw和Vh中较小的那一个值',
            'vmax：取当前Vw和Vh中较大的那一个值',
          ]} />
          <Label title={'vw、vh 与 % 百分比的区别'} />
          <Paragraph title={'（1）% 是相对于父元素的大小设定的比率，vw、vh 是视窗大小决定的。 （2）vw、vh 优势在于能够直接获取高度，而用 % 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度的，所以这是挺不错的优势。'} />
          <Label title={'calc和vh/vw结合使用'} />
          <Paragraph title={'上面我们使用%结合calc使用可以实现想要的效果，为什么要引入vw和vh呢？上面说%和vw,vh的区别中，% 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度的。'} />
          <Label title={'calc + vw 计算宽度'} />
<CodeBlock content={
`width: 800px; /* fallback for b*/
width: -moz-calc(100vw - (2 * 10)px);
width: -webkit-calc(100vw -(2 * 10)px);
width: calc(100vw - (2 * 10)px);
`} />
          <Label title={'calc + vh 计算高度'} />
<CodeBlock content={
`height: 800px;
height: -moz-calc(100vh - (2 * 10)px);
height: -webkit-calc(100vh - (2 * 10)px);
height: calc(100vh - (2 * 10)px);
`} />
        </div>
      </Container>
    );
  }
}

export default Calculating_unit;
