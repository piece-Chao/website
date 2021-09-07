import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Scss_introduce extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'Sass 快速入门'}></Title>
                    <Label title={'Sass是什么？'}></Label>
                    <Paragraph title={'Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。'}></Paragraph>
                    <Label title={'简易安装'}></Label>
                    <Paragraph title={'Sass是Ruby语言写的，要安装Sass，必须先安装Ruby，当然,并不要求你会Ruby。 如果你已经安装好了Ruby，接下来就可以安装Sass：'}></Paragraph>
<CodeBlock content={
`gem install sass
`}>
</CodeBlock>
                    <Paragraph title={'注：sass文件的后缀名是.scss或.sass，博主使用.scss。当然，除了Sass的语法，代码里面也可以直接使用CSS语法。 确认是否安装：'}></Paragraph>
<CodeBlock content={
`sass -v
`}></CodeBlock>
                    <Paragraph title={'如果安装成功，会打印出版本信息：'}></Paragraph>
<CodeBlock content={
`Sass 3.4.23
`}></CodeBlock>
                    <Paragraph title={'编译 对于scss文件，我们最终还是要编译成css文件才能使用。 编译也很简单，只需要在终端输入下列命令：'}></Paragraph>
<CodeBlock content={
`sass input.scss output.css
`}></CodeBlock>
                    <Paragraph title={'input.scss是你的Sass文件，output.css是你需要输出的文件。 我们还可以实现实时自动编译:'}></Paragraph>
<CodeBlock content={
`sass --watch input.scss:output.css
`}></CodeBlock>
                    <Paragraph title={'这样，每次修改并保存时都会自动编译输出。 此外，你也可以监视整个文件夹的变化:'}></Paragraph>
<CodeBlock content={
`sass --watch app/sass:public/stylesheets
`}></CodeBlock>
                    <Label title={'输出风格'}></Label>
                    <Paragraph style={{textIndent: 0}} title={'sass给我们提供了四种输出风格：'}></Paragraph>
                    <ListItem list={['nested: 嵌套缩进的css代码，它是默认值。', 'expanded: 标准格式的代码', 'compact: 行格式的代码', 'compressed: 压缩后的代码，一般用于生产环境']}></ListItem>
                    <Paragraph title={'使用方法:'}></Paragraph>
<CodeBlock content={
`sass --style compressed input.scss output.css
`}></CodeBlock>
                    <Paragraph title={'四种输出风格对比:'}></Paragraph>
<CodeBlock content={
`div {  

    background: red;  
  
    p { color: blue; }  
  
}   
  
  
/* nested */  

div {   

    background: red; }   

div p {   

    color: blue; }   

  
  
/* expanded */  

div {   

    background: red;  

}  

div p {   

    color: blue;  

}   
  
  
  
/* compact */  

div { background: red; }  

div p { color: blue; }   



/* compressed */  

div{background:red}div p{color:blue}
`}></CodeBlock>
                    <Paragraph title={'更多帮助命令：'}></Paragraph>
<CodeBlock content={
`sass --help
`}></CodeBlock>
                    <Label title={'基础语法'}></Label>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'1、变量'}></Paragraph>
                    <Paragraph title={'Sass使用$美元符号来声明变量：'}></Paragraph>
<CodeBlock content={
`$blue: blue;
`}></CodeBlock>
                    <Paragraph title={'直接使用：'}></Paragraph>
<CodeBlock content={
`div { color: $blue; }
`}></CodeBlock>
                    <Paragraph title={'在Sass中，变量是有作用域的，类似ES6中的let，sass变量支持块级作用域(花括号{}包裹区域)，也就是有全局变量和局部变量之分：'}></Paragraph>
<CodeBlock content={
`$blue: blue; // 全局变量  

div {   

    $blue: red;  // 局部变量  

    color: $blue;  // red  

}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div {   

    color: red; }
`}></CodeBlock>
                    <Paragraph title={'当然，也可以使用!global将局部变量转换为全局变量：'}></Paragraph>
<CodeBlock content={
`div {   

    $red: red !global;  
  
    color: red;  
  
}  
  
a {  
  
    color: $red;  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div {   

    color: red; }  
  
a {   
  
    color: red; }
`}></CodeBlock>
                    <Paragraph title={'注意：如果上面的red后面不加上!global，Sass会报错，你可以在终端或输出文件比如output.css里看到错误。 此外,变量也可以拼接在CSS属性里,不过要借助插值语句(#{}):'}></Paragraph>
<CodeBlock content={
`$theme: ".dark";   


#{$theme} div {  

  color: black  

}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.dark div { color: black; }
`}></CodeBlock>
                    <Paragraph title={'也可以这样:'}></Paragraph>
<CodeBlock content={
`$side: top;   

div {

  border-#{$side}-color: red;

}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div {border-top-color: red; }
`}></CodeBlock>
                    <Paragraph title={'注：如果传入的是字符串，插值语句输出的最终都是不带引号的字符串'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'2、嵌套语法'}></Paragraph>
                    <Paragraph title={'Sass允许CSS样式嵌套:'}></Paragraph>
<CodeBlock content={
`div {  

    color: black;  
  
    a { color: red;}  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { color: black; }  

div a { color: red; }
`}></CodeBlock>
                    <Paragraph title={'多层嵌套:'}></Paragraph>
<CodeBlock content={
`div {  

    p, span{  
  
        color:red;  
    
        a {font-size: 15px;}  
  
    }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div p, div span { color: red; }  

div p a, div span a { font-size: 15px; }
`}></CodeBlock>
                    <Paragraph title={'CSS中,有些属性拥有相同的命名空间,比如font-size,font-weight等,对于这些属性,我们也可以使用属性嵌套:'}></Paragraph>
<CodeBlock content={
`div {  

    font: {  
  
        size: 10px;
    
        weight: bold;
  
    }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { font-size: 10px; font-weight: bold; }
`}></CodeBlock>
                    <Paragraph title={'注意font后面的冒号(:)。 此外，还可以这样:'}></Paragraph>
<CodeBlock content={
`div {  

    font: 15px {  
  
        size: 10px;  
    
        weight: bold;  
  
    }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { font: 15px; font-size: 10px; font-weight: bold; }
`}></CodeBlock>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'父元素&'}></Paragraph>
                    <Paragraph title={'在Sass中，&表示父元素。'}></Paragraph>
<CodeBlock content={
`a {  

    &:hover { color: red; }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`a:hover { color: red; }
`}></CodeBlock>
                    <Paragraph title={'当有多层嵌套样式时，&表示它所有祖先元素的拼接:'}></Paragraph>
<CodeBlock content={
`div {  

    a {  
  
        &:hover { color: red; }  
  
    }
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div a:hover { color: red; }
`}></CodeBlock>
                    <Paragraph title={'此外，&还可以作为选择器的一部分:'}></Paragraph>
<CodeBlock content={
`.main {   

    &-content { color: red; }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.main-content { color: red; }
`}></CodeBlock>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'注释'}></Paragraph>
                    <Paragraph title={'Sass提供了三种注释方式:'}></Paragraph>
                    <ListItem list={['多行注释: /* */', '单行注释 //', '!多行注释: /*! */,通常用于添加版权信息']}></ListItem>
                    <Paragraph title={'三者的区别:'}></Paragraph>
                    <ListItem list={['单行注释不会输出到CSS文件,多行注释会', '单行注释和多行注释不会输出到压缩CSS文件中,而!多行注释会']}></ListItem>
                    <Paragraph title={'此外,前面提到的插值语句(#{})也可以用到多行注释中'}></Paragraph>
<CodeBlock content={
`$version: "1.0.0";  

/* 当前版本: #{$version} */
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`/* 当前版本: 1.0.0 */
`}></CodeBlock>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'运算'}></Paragraph>
                    <Paragraph title={'Sass支持数字的加减乘除、取整等运算 (+, -, *, /, %) 关系运算 <, >, <=, >=也可用于数字运算，相等运算 ==, != 可用于所有数据类型'}></Paragraph>
<CodeBlock content={
`div {   

    font-size: 10px + 10px;   
  
    height: 40px - 5px;   
  
    width: 100 % 3px;
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { font-size: 20px; height: 35px; width: 1px; }
`}></CodeBlock>
                    <Paragraph title={'注意：在进行加减乘除时，建议使用统一单位，否则就需记住哪些单位是可以转换，哪些是不可以转换的，稍不注意，Sass就会报错。'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'特殊的除法'}></Paragraph>
                    <Paragraph title={'由于原生CSS中的斜杠(/)是有用途的（比如定义圆角的不同半径时，border-radius: 10px/20px，表示水平半径为10px，垂直半径为20px），所以在Sass中使用时要注意,只有下面三种情况才会被视为除法运算：'}></Paragraph>
                    <ListItem list={['如果值被圆括号包裹： (20px / 10px)', '如果值是算数表达式的一部分： (10px + 20px / 10px)', '如果值的一部分是变量或函数的返回值：$width / 10']}></ListItem>
                    <Paragraph title={'如果你想显式的让斜杠(/)不做除法运算,只需使用插值语句(#{}):'}></Paragraph>
<CodeBlock content={
`div { #{$font-size}/#{$line-height}; }
`}></CodeBlock>
                    <Paragraph title={'如JavaScript中的+号一样，Sass中的+号也可以连接字符串：'}></Paragraph>
<CodeBlock content={
`div { cursor: e + -resize; }
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { cursor: e-resize; }
`}></CodeBlock>
                    <Label title={'控制语句'}></Label>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'1、@if'}></Paragraph>
                    <Paragraph title={'@if语句类似JavaScript中的if语句,当 @if 的表达式返回值不是 false 或者 null 时，条件成立，输出 {} 内的代码：'}></Paragraph>
<CodeBlock content={
`div {  

    @if 3 > 2 { color: red; }  
  
    @if null { color: black; }
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { color: red; }
`}></CodeBlock>
                    <Paragraph title={'@if 声明后面可以跟多个 @else if 声明，或者一个 @else 声明。如果 @if 声明失败，Sass 将逐条执行 @else if 声明，如果全部失败，最后执行 @else 声明：'}></Paragraph>
<CodeBlock content={
`div {  

    @if 1 > 2 {   
    
        color: red;  
    
    } @else if 3 > 2 {   
    
        color: blue;  
    
    } @else {   
    
        color: black;  
    
    }  
    
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { color: blue; }
`}></CodeBlock>
                    <Paragraph title={'注: 控制语句也可以在最外层使用.'}></Paragraph>
                    <Label title={'循环语句'}></Label>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'1.@for'}></Paragraph>
                    <Paragraph title={'Sass的for语句与JavaScript的for语句的作用类似，但语法有所不同。'}></Paragraph>
                    <Paragraph title={'from...through..'}></Paragraph>
<CodeBlock content={
`@for $var from start through end {}
`}></CodeBlock>
                    <Paragraph title={'例子：'}></Paragraph>
<CodeBlock content={
`@for $i from 1 through 3 {   

    .large-#{$i} { font-size: 10px * $i; }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.large-1 { font-size: 10px; }   

.large-2 { font-size: 20px; }

.large-3 { font-size: 30px; }
`}></CodeBlock>
                    <Paragraph title={'from...to...'}></Paragraph>
<CodeBlock content={
`@for $var from start to end {}
`}></CodeBlock>
                    <Paragraph title={'例子：'}></Paragraph>
<CodeBlock content={
`@for $i from 1 to 3 {   

    .large-#{$i} { font-size: 10px * $i; }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.large-1 { font-size: 10px; }   

.large-2 { font-size: 20px; }
`}></CodeBlock>
                    <Paragraph title={'如果你留意了上面的例子，应该可以发现through和to的区别: 当使用 through 时，条件范围包含 <start> 与 <end> 的值，而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值。 注意:start和end必须是整数'}></Paragraph>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'2.@each'}></Paragraph>
                    <Paragraph title={'Sass中的数组 在Sass中,数组便是通过空格或者逗号分隔的一系列的值,比如1 2 3 4或1,2,3,4.还可以由多维数组,比如1 2, 3 4表示包含1 2与3 4两个数组的数组,还可以这样(1 2) (3 4)'}></Paragraph>
                    <Paragraph title={'@each语句的作用与@for类似,但使用语法不同:'}></Paragraph>
<CodeBlock content={
`@each $var in <list>
`}></CodeBlock>
                    <Paragraph title={'<list>是一系列以逗号分隔的值列表(数组):'}></Paragraph>
<CodeBlock content={
`@each $icon in user, nav, person {   

    .#{$icon}-icon {   
  
      background-image: url('/images/#{$icon}.png');   
  
    }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.user-icon { background-image: url("/images/user.png"); }   

.nav-icon { background-image: url("/images/nav.png"); }   

.person-icon { background-image: url("/images/person.png"); }
`}></CodeBlock>
                    <Paragraph title={'对于多维数组:'}></Paragraph>
<CodeBlock content={
`@each $var1, $var2 in ($value,$value), ($value,$value)
`}></CodeBlock>
                    <Paragraph title={'例子：'}></Paragraph>
<CodeBlock content={
`@each $font, $size in (large-1, 10px), (large-2, 20px) {   

    .#{$font} {   
  
        font-size: $size;   
  
    }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.large-1 { font-size: 10px; }   

.large-2 { font-size: 20px; }
`}></CodeBlock>
                    <Paragraph title={'对于元素是键值对形式的数组:'}></Paragraph>
<CodeBlock content={
`@each $key, $value in (key: value, key: value)
`}></CodeBlock>
                    <Paragraph title={'例子：'}></Paragraph>
<CodeBlock content={
`@each $selector, $size in (div: 10px, p: 20px) {   

    #{$selector} {   
  
        font-size: $size;   
  
    }  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { font-size: 10px; }   

p { font-size: 20px; }
`}></CodeBlock>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'3.@while'}></Paragraph>
                    <Paragraph title={'@while 指令重复输出格式直到表达式返回结果为 false:'}></Paragraph>
<CodeBlock content={
`$i: 6;  

@while $i > 0 {   

    .item-#{$i} { width: 2em * $i; }   

    $i: $i - 2;  

}
`}></CodeBlock>
                    <Label title={'代码重用(Mixin和extend)'}></Label>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'1.Mixin'}></Paragraph>
                    <Paragraph title={'Mixin使用@mixin语句来定义需要重复使用的代码，比如说清除浮动：'}></Paragraph>
<CodeBlock content={
`@mixin clearfix {   

    &:after {  
  
        content: "";  
    
        display: block;  
    
        height: 0;  
    
        clear: both;  
    
        visibility: hidden;  
  
    }  
  
}
`}></CodeBlock>
                    <Paragraph title={'使用@include语句来使用Mixin定义的代码:'}></Paragraph>
<CodeBlock content={
`div { @include clearfix; }
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div:after { content: ""; display: block; height: 0; clear: both; visibility: hidden; }
`}></CodeBlock>
                    <Paragraph title={'@mixin语句还可以带参数和参数默认值：'}></Paragraph>
<CodeBlock content={
`@mixin text-font($size, $weight, $color: black) {   

    font: {  
  
        size: $size;  
    
        weight: $weight;  
  
    }  
  
    color: $color;  
  
}   

p { @include text-font(10px, bold); }
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`p { font-size: 10px; font-weight: bold; color: black; }
`}></CodeBlock>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'多余参数'}></Paragraph>
                    <Paragraph title={'多余参数也可以称为不确定参数。有些CSS样式(比如box-shadow，text-shadow等)可以有多个以逗号分隔的值列表，这样在定义Mixin时我们就无法确定传入几个参数，这时就需要借助多余参数的写法($name...):'}></Paragraph>
<CodeBlock content={
`@mixin box-shadow($shadows...) {   

    box-shadow: $shadows;  
  
}   
  
div {  

    @include box-shadow(0 0 3px black, 0 0 5px red);  

}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { box-shadow: 0 0 3px black, 0 0 5px red; }
`}></CodeBlock>
                    <Paragraph title={'此外，多余参数也可以用在传参时:'}></Paragraph>
<CodeBlock content={
`@mixin colors($text, $background, $border) {   

    color: $text;   
  
    background-color: $background;   
  
    border-color: $border;  
  
}  
  
$values: #ff0000, #00ff00, #0000ff;  
  
  .primary {   
  
        @include colors($values...);  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.primary { color: #ff0000; background-color: #00ff00; border-color: #0000ff; }
`}></CodeBlock>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'不定序传参'}></Paragraph>
                    <Paragraph title={'不定序传参可以让你忽略形参的顺序，不必记住它们：'}></Paragraph>
<CodeBlock content={
`@mixin blue-theme($background, $color) {   

    background: $background;   
  
    color: $color;  
  
}
`}></CodeBlock>
                    <Paragraph title={'一般我们是如下调用:'}></Paragraph>
<CodeBlock content={
`div { @include blue-theme(red, white); }
`}></CodeBlock>
                    <Paragraph title={'但我们也可以忽略传参的顺序，传参时以键值对的形式传参：'}></Paragraph>
<CodeBlock content={
`div { @include blue-theme($color: white, $background: red); }
`}></CodeBlock>
                    <Paragraph title={'两种方式都会输出:'}></Paragraph>
<CodeBlock content={
`div { background: red; color: white; }
`}></CodeBlock>
                    <Paragraph title={'注意点:'}></Paragraph>
                    <ListItem list={['@mixin 可以用 = 表示，而 @include 可以用 + 表示', '@include不仅可以用在块内，也可以直接用在最外层']}></ListItem>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'2.extend'}></Paragraph>
                    <Paragraph title={'@extend语句用来实现继承:'}></Paragraph>
<CodeBlock content={
`.large {   

    font-size: 20px;  
  
    font-weight: bold;  
  
}   
  
.main {  
  
    @extend .large;  
  
    background: red;  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.large, .main { font-size: 20px; font-weight: bold; }   

.main { background: red; }
`}></CodeBlock>
                    <Paragraph title={'@extend实现的继承是继承所有：'}></Paragraph>
<CodeBlock content={
`.large {   

    font-size: 20px;  
  
    font-weight: bold;  
  
}   
  
.large.blue {   
  
    color: blue;  
  
}   
  
.main {  
  
    @extend .large;  
  
    background: red;  
  
}
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`.large, .main { font-size: 20px; font-weight: bold; }   

.large.blue, .blue.main { color: blue; }   

.main { background: red; }
`}></CodeBlock>
                    <Label title={'函数'}></Label>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'1.内置函数'}></Paragraph>
                    <Paragraph style={{textIndent: '0', fontWeight: '700'}} title={'2.自定义函数'}></Paragraph>
                    <Paragraph title={'Sass支持自定义函数,使用@function语句来声明函数:'}></Paragraph>
<CodeBlock content={
`@function large($n) {   

    @return $n * 2;  
  
}   
  
div { font-size: large(10px); }
`}></CodeBlock>
                    <Paragraph title={'输出为：'}></Paragraph>
<CodeBlock content={
`div { font-size: 20px; }
`}></CodeBlock>
                    <Paragraph title={'注：自定义函数也支持不定序传参和多余参数.'}></Paragraph>
                    <Label title={'导入外部文件'}></Label>
                    <Paragraph title={'类似CSS的import，Sass也支持import：'}></Paragraph>
<CodeBlock content={
`@import "color.scss";
`}></CodeBlock>
                </div>
            </Container>
        );
    }
}

export default Scss_introduce;