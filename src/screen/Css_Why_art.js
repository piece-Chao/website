import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Css_Why_art extends React.Component {
    render() {
        return(
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'CSS Why'} />
                    <Paragraph title={'对于CSS，要知其然，还要知其所以然。本文将介绍CSS各部分出现的原因，仅限个人理解，如有不妥，欢迎交流'} />
                    <Label title={'Why CSS'} />
                    <Paragraph title={'早期的大多数网站标记几乎完全由表格和font元素组成，且对于所要表现的内容不能传达任何实际含义，使文档可用性降低，且不易于维护。于是1995年，W3C发布了CSS草案，试图解决结构与样式混杂的问题'} />
                    <Paragraph title={'1、如果考虑结构与样式彻底分离，且样式表可能用于多个HTML文件，使用外部样式表'} />
                    <Paragraph title={'2、如果样式表仅用于当前页面，且减少HTTP请求数量，使用内部样式表'} />
                    <Paragraph title={'3、如果只是想为单个元素指定一些样式，可以使用HTML的style属性来设置一个行间样式'} />
                    <Label title={'Why 选择器'} />
                    <Paragraph title={'通过CSS选择器，向文档中的一组元素类型应用某些规则'} />
                    <Paragraph title={'1、通配选择器选择所有元素'} />
                    <Paragraph title={'2、元素选择器按照HTML标签来选择元素'} />
                    <Paragraph title={'3、类选择器通过定义类名来选择一类元素'} />
                    <Paragraph title={'4、ID选择器选择特定ID的元素'} />
                    <Paragraph title={'5、属性选择器根据元素的属性及属性值来选择元素'} />
                    <Paragraph title={'6、后代选择器通过HTML层级关系来选择元素'} />
                    <Paragraph title={'7、分组选择器将具有相同规则的元素合并设置'} />
                    <Label title={'Why 层叠'} />
                    <Paragraph title={'CSS（cascading style sheets）中文翻译过来是层叠样式表，最基本的一个特性就是层叠。冲突的声明通过层叠进行排序，由此确定最终的文档表示'} />
                    <Paragraph title={'在下面的例子，元素选择器div和类选择器.test都可以选择出<div class="test"></div>，这就发生了冲突。由于类选择器的特殊性大于元素选择器，所以通过层叠进行排序，最终该元素的样式为{height: 200px;} ，如果去掉 .test{height: 200px;}  这条规则，则元素的样式为{height: 100px;}'} />
<CodeBlock content={
`<style>
    div{height: 100px;}
    .test{height: 200px;}    
</style>

<div class="test"></div>`} />
                    <Label title={'Why 解析顺序'} />
                    <Paragraph title={'为什么CSS选择器的解析顺序是从右到左呢？先给结论，因为更快'} />
                    <Paragraph title={'如果正向解析，例如「div div p em」，首先要检查当前元素到 html 的整条路径，找到最上层的 div，再往下找，如果遇到不匹配就必须回到最上层那个 div，往下再去匹配选择器中的第一个 div，回溯若干次才能确定匹配与否，效率很低'} />
                    <Paragraph title={'逆向匹配则不同，如果当前的 DOM 元素是 div，而不是 selector 最后的 em，那只要一步就能排除。只有在匹配时，才会不断向上找父节点进行验证'} />
                    <Paragraph title={'正向解析是在试错，而逆向匹配则是在挑选正确的元素。因为匹配的情况远远低于不匹配的情况，所以逆向匹配带来的优势是巨大的'} />
                    <Label title={'Why Hack'} />
                    <Paragraph title={'CSS Hack是实现浏览器样式兼容的兜底办法，能不用就尽量不要使用。但是，针对一些浏览器的bug，比如老版本IE的bug，有时使用CSS Hack是不得已而为之的做法'} />
                    <Paragraph title={'比如，对于IE6-浏览器主要使用下划线_和中划线-这两种字符实现hack。如下所示，在IE6浏览器中，div的文本颜色为蓝色，其他浏览器则为红色'} />
<CodeBlock content={
`div{
    color:red;
    _color:blue;
}`} />
                    <Label title={'Why Hack'} />
                    <Paragraph title={'个人认为，伪类和伪元素是对HTML元素的一个扩展，通过它们可以丰富元素的样式表现'} />
                    <Paragraph title={'伪类即假的类，类似于通过添加一个实际的类来达到效果，比如常见的hover鼠标悬停效果'} />
<CodeBlock content={
`a:hover{background-color:lightblue;}/*浅蓝，鼠标悬停*/`} />
                    <Paragraph title={'伪元素即假的元素，类似于通过添加一个实际的元素才能达到。当然，添加的不是元素，而是生成内容，生成内容主要指由浏览器创建的内容，比如:before和:after'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/CSS_grammer_beforeAndAfter.gif')} alt="gif"/>
                </div>
            </Container>
        )
    }
}

export default Css_Why_art;