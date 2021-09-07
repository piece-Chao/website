import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class General_unit extends React.Component {
  render() {
    return (
      <Container>
        <div style={{ padding: '0 10px' }}>
          <Title title={'css中的px、em、rem 详解'} />
          <Label title={'概念介绍：'} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'1、px (pixel，像素)：'} />
          <Paragraph title={'是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果px要换算成物理长度，需要指定精度DPI(Dots Per Inch，每英寸像素数)，在扫描打印时一般都有DPI可选。Windows系统默认是96dpi，Apple系统默认是72dpi。'} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'2、em(相对长度单位，相对于当前对象内文本的字体尺寸)：'} />
          <Paragraph title={'是一个相对长度单位，最初是指字母M的宽度，故名em。现指的是字符宽度的倍数，用法类似百分比，如：0.8em, 1.2em,2em等。通常1em=16px。'} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'3、pt (point，磅)：'} />
          <Paragraph title={'是一个物理长度单位，指的是72分之一英寸。pt=1/72(英寸), px=1/dpi(英寸)'} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'4、rem（root em，根em）：'} />
          <Paragraph title={'是CSS3新增的一个相对单位，这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。'} />
          <Label title={'em与px的问题'} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'px是何物？'} />
          <Paragraph title={'px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。(引自CSS2.0手册)em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。(引自CSS2.0手册)PX特点'} />
          <ListItem list={[
            'IE无法调整那些使用px作为单位的字体大小；',
            '国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位；',
            'Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)。'
          ]} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'em是何物？'} />
          <Paragraph title={'em 指字体高，任意浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em。为了简化font -size的换算，需要在css中的body选择器中声明Font-size=62.5%，这就使em值变为16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。'} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'em特点：'} />
          <Paragraph title={'1em指的是一个字体的大小，它会继承父级元素的字体大小，因此并不是一个固定的值。任何浏览器的默认字体大小都是16px。因此，12px = 0.75em。实际应用中为了方便换算，通常会如下设置样式： CSS代码'} />
<CodeBlock content={
`html { font-size: 62.5%; }
`
} />
          <Paragraph title={'这样，1em = 10px。我们常用的1.2em理论上就是12px。但是，这个换算在IE浏览器下不成立，1.2em会比12px稍大一些，解决办法是把html标签样式中的62.5%改成63%，即： CSS代码'} />
<CodeBlock content={
`html { font-size: 63%; }
`
} />
          <Paragraph title={'在 中文的文章中，一般会在段首空两格。如果用px作为单位，对12px字体来说需要空出24px，对14px字体来说需要空出28px……这样换算非常不通 用。如果用上em单位，这个问题就很好解决了，1个字的大小就是1em，那两个字的大小就是2em。因此，只需这样定义就行了：CSS代码'} />
<CodeBlock content={
`p { text-indent: 2em; }
`
} />
          <Label title={'em和px两种字体单位的区别'} />
          <Paragraph title={'字体单位应该用em而不用px，原因简单来说就是支持IE6下的字体缩放，在页面中按ctrl+滚轮，字体以px为单位的网站没有反应。px是绝对单位，不支持IE的缩放，em是相对单位。我在调整本blog的时候，发现不仅仅是字体，将行距(line-height)，和纵向高度的单位都用em。保证缩放时候的整体性。'} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'em有如下特点：'} />
          <ListItem list={[
            'em的值并不是固定的；',
            'em会继承父级元素的字体大小。'
          ]} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'em重写步骤：'} />
          <ListItem list={[
            'body选择器中声明Font-size=62.5%；',
            '将你的原来的px数值除以10，然后换上em作为单位；简 单吧，如果只需要以上两步就能解决问题的话，可能就没人用px了。经过以上两步，你会发现你的网站字体大得出乎想象。因为em的值不固定，又会继承父级 元素的大小，你可能会在content这个div里把字体大小设为1.2em, 也就是12px。然后你又把选择器p的字体大小也设为1.2em，但如果p属于content的子级的话，p的字体大小就不是12px，而是1.2em= 1.2 * 12px=14.4px。这是因为content的字体大小被设为1.2em，这个em值继承其父级元素body的大小，也就是16px * 62.5% * 1.2=12px, 而p作为其子级，em则继承content的字体高，也就是12px。所以p的1.2em就不再是12px，而是14.4px。',
            '重新计算那些被放大的字体的em数值。避免字体大小的重复声明，也就是避免以上提到的1.2 * 1.2= 1.44的现象。比如说你在#content中声明了字体大小为1.2em，那么在声明p的字体大小时就只能是1em，而不是1.2em, 因为此em非彼em，它因继承#content的字体高而变为了1em=12px。'
          ]} />
          <Paragraph style={{ textIndent: 0, fontWeight: 700 }} title={'IE中的12px汉字：'} />
          <Paragraph title={'完成 em转换时还发现了一个诡异的现象，就是由以上方法得到的12px(1.2em)大小的汉字在IE中并不等于直接用12px定义的字体大小，而 是稍大一点。你只需在body选择器中把62.5%换成63%就能正常显示了。原因可能是IE处理汉字时，对于浮点的取值精确度有 限。本现象只发生在12px的汉字，英文不存在此现象。解决方法就是把style.css中的62.5%换 为63%。'} />
          <Label title={'rem特点'} />
          <Paragraph title={'rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。举例：'} />
<CodeBlock content={
`p {font-size:14px; font-size:.875rem;}
`
} />
          <Paragraph style={{background: '#eee', fontSize: '13px', padding: '0 4px'}} title={'注意： 选择使用什么字体单位主要由你的项目来决定，如果你的用户群都使用最新版的浏览器，那推荐使用rem，如果要考虑兼容性，那就使用px,或者两者同时使用。'}></Paragraph>
        </div>
      </Container>
    );
  }
}

export default General_unit;
