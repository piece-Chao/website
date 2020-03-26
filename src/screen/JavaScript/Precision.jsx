import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class Precision extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'JavaScript 深入之浮点数精度'}></Title>
                    <Label title={'前言'}></Label>
                    <Paragraph title={'0.1 + 0.2 是否等于 0.3 作为一道经典的面试题，已经广外熟知，说起原因，大家能回答出这是浮点数精度问题导致，也能辩证的看待这并非是 ECMAScript 这门语言的问题，今天就是具体看一下背后的原因。'}></Paragraph>
                    <Label title={'数字类型'}></Label>
                    <Paragraph title={'ECMAScript 中的 Number 类型使用 IEEE754 标准来表示整数和浮点数值。所谓 IEEE754 标准，全称 IEEE 二进制浮点数算术标准，这个标准定义了表示浮点数的格式等内容。'}></Paragraph>
                    <Paragraph title={'在 IEEE754 中，规定了四种表示浮点数值的方式：单精确度（32位）、双精确度（64位）、延伸单精确度、与延伸双精确度。像 ECMAScript 采用的就是双精确度，也就是说，会用 64 位字节来储存一个浮点数。'}></Paragraph>
                    <Label title={'浮点数转二进制'}></Label>
                    <Paragraph title={'我们来看下 1020 用十进制的表示：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'1020 = 1 * 10^3 + 0 * 10^2 + 2 * 10^1 + 0 * 10^0'}></Paragraph>
                    <Paragraph title={'所以 1020 用十进制表示就是 1020……(哈哈)'}></Paragraph>
                    <Paragraph title={'如果 1020 用二进制来表示呢？'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'1020 = 1 * 2^9 + 1 * 2^8 + 1 * 2^7 + 1 * 2^6 + 1 * 2^5 + 1 * 2^4 + 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 0 * 2^0'}></Paragraph>
                    <Paragraph title={'所以 1020 的二进制为 1111111100'}></Paragraph>
                    <Paragraph title={'那如果是 0.75 用二进制表示呢？同理应该是：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'0.75 = a * 2^-1 + b * 2^-2 + c * 2^-3 + d * 2^-4 + ...'}></Paragraph>
                    <Paragraph title={'因为使用的是二进制，这里的 abcd……的值的要么是 0 要么是 1。'}></Paragraph>
                    <Paragraph title={'那怎么算出 abcd…… 的值呢，我们可以两边不停的乘以 2 算出来，解法如下：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'0.75 = a * 2^-1 + b * 2^-2 + c * 2^-3 + d * 2^-4...'}></Paragraph>
                    <Paragraph title={'两边同时乘以 2'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'1 + 0.5 = a * 2^0 + b * 2^-1 + c * 2^-2 + d * 2^-3... (所以 a = 1)'}></Paragraph>
                    <Paragraph title={'剩下的：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'0.5 = b * 2^-1 + c * 2^-2 + d * 2^-3...'}></Paragraph>
                    <Paragraph title={'再同时乘以 2'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'1 + 0 = b * 2^0 + c * 2^-2 + d * 2^-3... (所以 b = 1)'}></Paragraph>
                    <Paragraph title={'所以 0.75 用二进制表示就是 0.ab，也就是 0.11'}></Paragraph>
                    <Paragraph title={'然而不是所有的数都像 0.75 这么好算，我们来算下 0.1：'}></Paragraph>
<CodeBlock content={
`0.1 = a * 2^-1 + b * 2^-2 + c * 2^-3 + d * 2^-4 + ...
0 + 0.2 = a * 2^0 + b * 2^-1 + c * 2^-2 + ...   (a = 0)
0 + 0.4 = b * 2^0 + c * 2^-1 + d * 2^-2 + ...   (b = 0)
0 + 0.8 = c * 2^0 + d * 2^-1 + e * 2^-2 + ...   (c = 0)
1 + 0.6 = d * 2^0 + e * 2^-1 + f * 2^-2 + ...   (d = 1)
1 + 0.2 = e * 2^0 + f * 2^-1 + g * 2^-2 + ...   (e = 1)
0 + 0.4 = f * 2^0 + g * 2^-1 + h * 2^-2 + ...   (f = 0)
0 + 0.8 = g * 2^0 + h * 2^-1 + i * 2^-2 + ...   (g = 0)
1 + 0.6 = h * 2^0 + i * 2^-1 + j * 2^-2 + ...   (h = 1)
....
`}></CodeBlock>
                    <Paragraph title={'然后你就会发现，这个计算在不停的循环，所以 0.1 用二进制表示就是 0.00011001100110011……'}></Paragraph>
                    <Label title={'浮点数的存储'}></Label>
                    <Paragraph title={'虽然 0.1 转成二进制时是一个无限循环的数，但计算机总要储存吧，我们知道 ECMAScript 使用 64 位字节来储存一个浮点数，那具体是怎么储存的呢？这就要说回 IEEE754 这个标准了，毕竟是这个标准规定了存储的方式。'}></Paragraph>
                    <Paragraph title={'这个标准认为，一个浮点数 (Value) 可以这样表示：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'Value = sign * exponent * fraction'}></Paragraph>
                    <Paragraph title={'看起来很抽象的样子，简单理解就是科学计数法……'}></Paragraph>
                    <Paragraph title={'比如 -1020，用科学计数法表示就是:'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'-1 * 10^3 * 1.02'}></Paragraph>
                    <Paragraph title={'sign 就是 -1，exponent 就是 10^3，fraction 就是 1.02'}></Paragraph>
                    <Paragraph title={'对于二进制也是一样，以 0.1 的二进制 0.00011001100110011…… 这个数来说：'}></Paragraph>
                    <Paragraph title={'可以表示为：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'1 * 2^-4 * 1.1001100110011……'}></Paragraph>
                    <Paragraph title={'其中 sign 就是 1，exponent 就是 2^-4，fraction 就是 1.1001100110011……'}></Paragraph>
                    <Paragraph title={'而当只做二进制科学计数法的表示时，这个 Value 的表示可以再具体一点变成：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'1 * 2^-4 * 1.1001100110011……'}></Paragraph>
                    <Paragraph title={'(如果所有的浮点数都可以这样表示，那么我们存储的时候就把这其中会变化的一些值存储起来就好了)'}></Paragraph>
                    <Paragraph title={'我们来一点点看：'}></Paragraph>
                    <Paragraph title={'(-1)^S 表示符号位，当 S = 0，V 为正数；当 S = 1，V 为负数。'}></Paragraph>
                    <Paragraph title={'再看 (1 + Fraction)，这是因为所有的浮点数都可以表示为 1.xxxx * 2^xxx 的形式，前面的一定是 1.xxx，那干脆我们就不存储这个 1 了，直接存后面的 xxxxx 好了，这也就是 Fraction 的部分。'}></Paragraph>
                    <Paragraph title={'最后再看 2^E'}></Paragraph>
                    <Paragraph title={'如果是 1020.75，对应二进制数就是 1111111100.11，对应二进制科学计数法就是 1 * 1.11111110011 * 2^9，E 的值就是 9，而如果是 0.1 ，对应二进制是 1 * 1.1001100110011…… * 2^-4， E 的值就是 -4，也就是说，E 既可能是负数，又可能是正数，那问题就来了，那我们该怎么储存这个 E 呢？'}></Paragraph>
                    <Paragraph title={'我们这样解决，假如我们用 8 位字节来存储 E 这个数，如果只有正数的话，储存的值的范围是 0 ~ 254，而如果要储存正负数的话，值的范围就是 -127~127，我们在存储的时候，把要存储的数字加上 127，这样当我们存 -127 的时候，我们存 0，当存 127 的时候，存 254，这样就解决了存负数的问题。对应的，当取值的时候，我们再减去 127。'}></Paragraph>
                    <Paragraph title={'所以呢，真到实际存储的时候，我们并不会直接存储 E，而是会存储 E + bias，当用 8 个字节的时候，这个 bias 就是 127。'}></Paragraph>
                    <Paragraph title={'所以，如果要存储一个浮点数，我们存 S 和 Fraction 和 E + bias 这三个值就好了，那具体要分配多少个字节位来存储这些数呢？IEEE754 给出了标准：'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/jpeg;base64,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" alt="123"/>
                    <Paragraph title={'在这个标准下：'}></Paragraph>
                    <Paragraph title={'我们会用 1 位存储 S，0 表示正数，1 表示负数。'}></Paragraph>
                    <Paragraph title={'用 11 位存储 E + bias，对于 11 位来说，bias 的值是 2^(11-1) - 1，也就是 1023。'}></Paragraph>
                    <Paragraph title={'用 52 位存储 Fraction。'}></Paragraph>
                    <Paragraph title={'举个例子，就拿 0.1 来看，对应二进制是 1 * 1.1001100110011…… * 2^-4， Sign 是 0，E + bias 是 -4 + 1023 = 1019，1019 用二进制表示是 1111111011，Fraction 是 1001100110011……'}></Paragraph>
                    <Paragraph title={'对应 64 个字节位的完整表示就是：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'0 01111111011 1001100110011001100110011001100110011001100110011010'}></Paragraph>
                    <Paragraph title={'同理, 0.2 表示的完整表示是：'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'0 01111111100 1001100110011001100110011001100110011001100110011010'}></Paragraph>
                    <Paragraph title={'所以当 0.1 存下来的时候，就已经发生了精度丢失，当我们用浮点数进行运算的时候，使用的其实是精度丢失后的数。'}></Paragraph>
                    <Label title={'浮点数的运算'}></Label>
                    <Paragraph title={'关于浮点数的运算，一般由以下五个步骤完成：对阶、尾数运算、规格化、舍入处理、溢出判断。我们来简单看一下 0.1 和 0.2 的计算。'}></Paragraph>
                    <Paragraph title={'首先是对阶，所谓对阶，就是把阶码调整为相同，比如 0.1 是 1.1001100110011…… * 2^-4，阶码是 -4，而 0.2 就是 1.10011001100110...* 2^-3，阶码是 -3，两个阶码不同，所以先调整为相同的阶码再进行计算，调整原则是小阶对大阶，也就是 0.1 的 -4 调整为 -3，对应变成 0.11001100110011…… * 2^-3'}></Paragraph>
                    <Paragraph title={'接下来是尾数计算:'}></Paragraph>
<CodeBlock content={
`0.1100110011001100110011001100110011001100110011001101
+ 1.1001100110011001100110011001100110011001100110011010
————————————————————————————————————————————————————————
 10.0110011001100110011001100110011001100110011001100111
`}></CodeBlock>
                    <Paragraph title={'我们得到结果为 10.0110011001100110011001100110011001100110011001100111 * 2^-3'}></Paragraph>
                    <Paragraph title={'将这个结果处理一下，即结果规格化，变成 1.0011001100110011001100110011001100110011001100110011(1) * 2^-2'}></Paragraph>
                    <Paragraph title={'括号里的 1 意思是说计算后这个 1 超出了范围，所以要被舍弃了。'}></Paragraph>
                    <Paragraph title={'再然后是舍入，四舍五入对应到二进制中，就是 0 舍 1 入，因为我们要把括号里的 1 丢了，所以这里会进一，结果变成'}></Paragraph>
                    <Paragraph title={'1.0011001100110011001100110011001100110011001100110100 * 2^-2'}></Paragraph>
                    <Paragraph title={'本来还有一个溢出判断，因为这里不涉及，就不讲了。'}></Paragraph>
                    <Paragraph title={'所以最终的结果存成 64 位就是'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0, paddingLeft: 10}} title={'0 01111111101 0011001100110011001100110011001100110011001100110100'}></Paragraph>
                    <Paragraph title={'将它转换为10进制数就得到 0.30000000000000004440892098500626'}></Paragraph>
                    <Paragraph title={'因为两次存储时的精度丢失加上一次运算时的精度丢失，最终导致了 0.1 + 0.2 !== 0.3'}></Paragraph>
                    <Label title={'其他'}></Label>
<CodeBlock content={
`// 十进制转二进制
parseFloat(0.1).toString(2);
=> "0.0001100110011001100110011001100110011001100110011001101"

// 二进制转十进制
parseInt(1100100,2)
=> 100

// 以指定的精度返回该数值对象的字符串表示
(0.1 + 0.2).toPrecision(21)
=> "0.300000000000000044409"
(0.3).toPrecision(21)
=> "0.299999999999999988898"
`}></CodeBlock>
                </div>
            </Container>
        );
    }
}

export default Precision;