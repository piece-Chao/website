import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Webpack_deblocking_one extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'4W字长文带你深度解锁Webpack系列(上)'}></Title>
                    <Paragraph title={'三篇长文，4W余字，带你解锁 Webpack ，希望读完这三篇文章，你能够对 webpack 的各项配置有一个更为清晰的认识。'}></Paragraph>
                    <Label title={'1.webpack 是什么？'}></Label>
                    <Paragraph title={'webpack 是一个现代 JavaScript 应用程序的静态模块打包器，当 webpack 处理应用程序时，会递归构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个 bundle。'}></Paragraph>
                    <Label title={'2.webpack 的核心概念'}></Label>
                    <ListItem list={[
                        'entry: 入口',
                        'output: 输出',
                        'loader: 模块转换器，用于把模块原内容按照需求转换成新内容',
                        '插件(plugins): 扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要做的事情'
                    ]}></ListItem>
                    <Paragraph title={'新建一个文件夹，如: webpack-first (当然，你可以使用任意一个你喜欢的项目名)。推荐大家参考本文一步一步进行配置，不要总是在网上找什么最佳配置，你掌握了webpack之后，根据自己的需求配置出来的，就是最佳配置。'}></Paragraph>
                    <Paragraph title={'使用 npm init -y 进行初始化(也可以使用 yarn)。'}></Paragraph>
                    <Paragraph title={'要使用 webpack，那么必然需要安装 webpack、webpack-cli:'}></Paragraph>
<CodeBlock content={
`npm install webpack webpack-cli -D
`}>
</CodeBlock>
                    <Paragraph title={'鉴于前端技术变更迅速，祭出本篇文章基于 webpack 的版本号:'}></Paragraph>
<CodeBlock content={
`├── webpack@4.41.5 
└── webpack-cli@3.3.10 
`}>
</CodeBlock>
                    <Paragraph title={'从 wepack V4.0.0 开始， webpack 是开箱即用的，在不引入任何配置文件的情况下就可以使用。'}></Paragraph>
                    <Paragraph title={'新建 src/index.js 文件，我们在文件中随便写点什么:'}></Paragraph>
<CodeBlock content={
`//index.js
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const dog = new Animal('dog');
`}>
</CodeBlock>
                    <Paragraph title={'使用 npx webpack --mode=development 进行构建，默认是 production 模式，我们为了更清楚得查看打包后的代码，使用 development 模式。'}></Paragraph>
                    <Paragraph title={'可以看到项目下多了个 dist 目录，里面有一个打包出来的文件 main.js。'}></Paragraph>
                    <Paragraph title={'webpack 有默认的配置，如默认的入口文件是 ./src，默认打包到dist/main.js。更多的默认配置可以查看: node_modules/webpack/lib/WebpackOptionsDefaulter.js。'}></Paragraph>
                    <Paragraph title={'查看 dist/main.js 文件，可以看到，src/index.js 并没有被转义为低版本的代码，这显然不是我们想要的。'}></Paragraph>
<CodeBlock content={
`{
    "./src/index.js":
        (function (module, exports) {

            eval("class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    getName() {\n        return this.name;\n    }\n}\n\nconst dog = new Animal('dog');\n\n//# sourceURL=webpack:///./src/index.js?");

        })
}
`}>
</CodeBlock>
                    <Label title={'4.将JS转义为低版本'}></Label>
                    <Paragraph title={'前面我们说了 webpack 的四个核心概念，其中之一就是 loader，loader 用于对源代码进行转换，这正是我们现在所需要的。'}></Paragraph>
                    <Paragraph title={'将JS代码向低版本转换，我们需要使用 babel-loader。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'babel-loader'}></Paragraph>
                    <Paragraph title={'首先安装一下 babel-loader'}></Paragraph>
<CodeBlock content={
`npm install babel-loader -D
`}>
</CodeBlock>
                    <Paragraph title={'此外，我们还需要配置 babel，为此我们安装一下以下依赖:'}></Paragraph>
<CodeBlock content={
`npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

npm install @babel/runtime @babel/runtime-corejs3
`}></CodeBlock>
                    <Paragraph title={'对babel7配置不熟悉的小伙伴，可以阅读一下这篇文章: 不可错过的 Babel7 知识'}></Paragraph>
                    <Paragraph title={'新建 webpack.config.js，如下:'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/ //排除 node_modules 目录
            }
        ]
    }
}
`}></CodeBlock>
                    <Paragraph title={'建议给 loader 指定 include 或是 exclude，指定其中一个即可，因为 node_modules 目录通常不需要我们去编译，排除后，有效提升编译效率。'}></Paragraph>
                    <Paragraph title={'这里，我们可以在 .babelrc 中编写 babel 的配置，也可以在 webpack.config.js 中进行配置。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'创建一个 .babelrc'}></Paragraph>
                    <Paragraph title={'配置如下：'}></Paragraph>
<CodeBlock content={
`{
    "presets": ["@babel/preset-env"],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3
            }
        ]
    ]
}
`}></CodeBlock>
                    <Paragraph title={'现在，我们重新执行  npx webpack --mode=development，查看 dist/main.js，会发现已经被编译成了低版本的JS代码。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'在webpack中配置 babel'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    // mode: 'development',
    module: {
        rules: [
            {
                test: /\\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs": 3
                                }
                            ]
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}
`}></CodeBlock>
                    <Paragraph title={'这里有几点需要说明：'}></Paragraph>
                    <ListItem list={[
                        'loader 需要配置在 module.rules 中，rules 是一个数组。',
                        'loader 的格式为:'
                    ]}></ListItem>
<CodeBlock content={
`{
    test: /\\.jsx?$/,//匹配规则
    use: 'babel-loader'
}
`}></CodeBlock>
                    <Paragraph title={'或者也可以像下面这样:'}></Paragraph>
<CodeBlock content={
`//适用于只有一个 loader 的情况
{
    test: /\\.jsx?$/,
    loader: 'babel-loader',
    options: {
        //...
    }
}
`}></CodeBlock>
                    <Paragraph title={'test 字段是匹配规则，针对符合规则的文件进行处理。'}></Paragraph>
                    <Paragraph title={'use 字段有几种写法'}></Paragraph>
                    <ListItem list={[
                        "可以是一个字符串，例如上面的 use: 'babel-loader'",
                        "use 字段可以是一个数组，例如处理CSS文件时，use: ['style-loader', 'css-loader']",
                        "use 数组的每一项既可以是字符串也可以是一个对象，当我们需要在webpack 的配置文件中对 loader 进行配置，就需要将其编写为一个对象，并且在此对象的 options 字段中进行配置，如："
                    ]}></ListItem>
<CodeBlock content={
`rules: [
    {
        test: /\\.jsx?$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"]
            }
        },
        exclude: /node_modules/
    }
]
`}></CodeBlock>
                    <Paragraph title={'上面我们说了如何将JS的代码编译成向下兼容的代码，当然你可以还需要一些其它的 babel 的插件和预设，例如 @babel/preset-react，@babel/plugin-proposal-optional-chaining 等，不过，babel 的配置并非本文的重点，我们继续往下。'}></Paragraph>
                    <Paragraph title={'不要说细心的小伙伴了，即使是粗心的小伙伴肯定也发现了，我们在使用 webpack 进行打包的时候，一直运行的都是 npx webpack --mode=development 是否可以将 mode 配置在 webpack.config.js 中呢？显然是可以的。'}></Paragraph>
                    <Label title={'5.mode'}></Label>
                    <Paragraph title={'将 mode 增加到 webpack.config.js 中:'}></Paragraph>
<CodeBlock content={
`module.exports = {
    //....
    mode: "development",
    module: {
        //...
    }
}
`}></CodeBlock>
                    <Paragraph title={'mode 配置项，告知 webpack 使用相应模式的内置优化。'}></Paragraph>
                    <Paragraph title={'mode 配置项，支持以下两个配置:'}></Paragraph>
                    <ListItem list={[
                        "development：将 process.env.NODE_ENV 的值设置为 development，启用 NamedChunksPlugin 和 NamedModulesPlugin",
                        "production：将 process.env.NODE_ENV 的值设置为 production，启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin"
                    ]}></ListItem>
                    <Paragraph title={'现在，我们之间使用 npx webpack 进行编译即可。'}></Paragraph>
                    <Label title={'6.在浏览器中查看页面'}></Label>
                    <Paragraph title={'搞了这么久，还不能在浏览器中查看页面，这显然不能忍！'}></Paragraph>
                    <Paragraph title={'查看页面，难免就需要 html 文件，有小伙伴可能知道，有时我们会指定打包文件中带有 hash，那么每次生成的 js 文件名会有所不同，总不能让我们每次都人工去修改 html，这样不是显得我们很蠢嘛~'}></Paragraph>
                    <Paragraph title={'我们可以使用 html-webpack-plugin 插件来帮助我们完成这些事情。'}></Paragraph>
                    <Paragraph title={'首先，安装一下插件:'}></Paragraph>
<CodeBlock content={
`npm install html-webpack-plugin -D 
`}></CodeBlock>
                    <Paragraph title={'新建 public 目录，并在其中新建一个 index.html 文件( 文件内容使用 html:5 快捷生成即可)'}></Paragraph>
                    <Paragraph title={'修改 webpack.config.js 文件。'}></Paragraph>
<CodeBlock content={
`/首先引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //...
    plugins: [
        //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            minify: {
                removeAttributeQuotes: false, //是否删除属性的双引号
                collapseWhitespace: false, //是否折叠空白
            },
            // hash: true //是否加上hash，默认是 false
        })
    ]
}
`}></CodeBlock>
                    <Paragraph title={'此时执行 npx webpack，可以看到 dist 目录下新增了 index.html 文件，并且其中自动插入了 <script> 脚本，引入的是我们打包之后的 js 文件。'}></Paragraph>
                    <Paragraph title={'这里要多说一点点东西，HtmlWebpackPlugin 还为我们提供了一个 config 的配置，这个配置可以说是非常有用了。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'html-webpack-plugin 的 config 的妙用'}></Paragraph>
                    <Paragraph title={'有时候，我们的脚手架不仅仅给自己使用，也许还提供给其它业务使用，html 文件的可配置性可能很重要，比如：你公司有专门的部门提供M页的公共头部/公共尾部，埋点jssdk以及分享的jssdk等等，但是不是每个业务都需要这些内容。'}></Paragraph>
                    <Paragraph title={'一个功能可能对应多个 js 或者是 css 文件，如果每次都是业务自行修改 public/index.html 文件，也挺麻烦的。首先他们得搞清楚每个功能需要引入的文件，然后才能对 index.html 进行修改。'}></Paragraph>
                    <Paragraph title={'此时我们可以增加一个配置文件，业务通过设置 true 或 false 来选出自己需要的功能，我们再根据配置文件的内容，为每个业务生成相应的 html 文件，岂不是美美的。'}></Paragraph>
                    <Paragraph title={'首先，我们在 public 目录下新增一个 config.js ( 文件名你喜欢叫什么就叫什么 )，将其内容设置为:'}></Paragraph>
<CodeBlock content={
`//public/config.js 除了以下的配置之外，这里面还可以有许多其他配置，例如,pulicPath 的路径等等
module.exports = {
    dev: {
        template: {
            title: '你好',
            header: false,
            footer: false
        }
    },
    build: {
        template: {
            title: '你好才怪',
            header: true,
            footer: false
        }
    }
}
`}></CodeBlock>
                    <Paragraph title={'现在，我们修改下我们的 webpack.config.js:'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];

modue.exports = {
    //...
    mode: isDev ? 'development' : 'production'
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            config: config.template
        })
    ]
}
`}></CodeBlock>
                    <Paragraph title={'相应的，我们需要修改下我们的 public/index.html 文件(嵌入的js和css并不存在，仅作为示意)：'}></Paragraph>
<CodeBlock content={
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <% if(htmlWebpackPlugin.options.config.header) { %>
    <link rel="stylesheet" type="text/css" href="//common/css/header.css">
    <% } %>
    <title><%= (htmlWebpackPlugin.options.config.title) %></title>
</head>

<body>
</body> 
<% if(htmlWebpackPlugin.options.config.header) { %>
<script src="//common/header.min.js" type="text/javascript"></script> 
<% } %>
</html>
`}></CodeBlock>
                    <Paragraph title={'process.env 中默认并没有 NODE_ENV，这里配置下我们的 package.json 的 scripts.'}></Paragraph>
<CodeBlock content={
`{
    "scripts": {
        "dev": "NODE_ENV=development webpack",
        "build": "NODE_ENV=production webpack"
    }
}
`}></CodeBlock>
                    <Paragraph title={'然后我们运行 npm run dev 和 运行 npm run build ，对比下 dist/index.html ，可以看到 npm run build，生成的 index.html 文件中引入了对应的 css 和 js。并且对应的 title 内容也不一样。'}></Paragraph>
                    <Paragraph title={'你说这里是不是非得是用 NODE_ENV 去判断？当然不是咯，你写 aaa=1 ，aaa=2 都行（当然啦，webpack.config.js 和 scripts 都需要进行相应修改），但是可能会被后面接手的人打死。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'如何在浏览器中实时展示效果'}></Paragraph>
                    <Paragraph title={'说了这么多，到现在还没能在浏览器中实时查看效果，是不是已经有点捉急了，先看一下如何实时查看效果吧，不然都不知道自己配得对不对。'}></Paragraph>
                    <Paragraph title={'话不多说，先装依赖:'}></Paragraph>
<CodeBlock content={
`npm install webpack-dev-server -D
`}></CodeBlock>
                    <Paragraph title={'修改下咱们的 package.json 文件的 scripts：'}></Paragraph>
<CodeBlock content={
`"scripts": {
    "dev": "NODE_ENV=development webpack-dev-server",
    "build": "NODE_ENV=production webpack"
}
`}></CodeBlock>
                    <Paragraph title={'在控制台执行 npm run dev，启动正常，页面上啥也没有，修改下我们的JS代码，往页面中增加点内容，正常刷新(也就是说不需要进行任何配置就可以使用了)。'}></Paragraph>
                    <Paragraph title={'Excuse me。怪我平时不认真咯，每次都乖乖的配个 contentBase，原来根本不需要配，带着疑问，我又去搜寻了一番。'}></Paragraph>
                    <Paragraph title={'原来在配置了 html-webpack-plugin 的情况下， contentBase 不会起任何作用，也就是说我以前都是白配了，这是一个悲伤的故事。'}></Paragraph>
                    <Paragraph title={'不过呢，我们还是可以在 webpack.config.js 中进行 webpack-dev-server 的其它配置，例如指定端口号，设置浏览器控制台消息，是否压缩等等:'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //...
    devServer: {
        port: '3000', //默认是8080
        quiet: false, //默认不启用
        inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
        stats: "errors-only", //终端仅打印 error
        overlay: false, //默认不启用
        clientLogLevel: "silent", //日志等级
        compress: true //是否启用 gzip 压缩
    }
}
`}></CodeBlock>
                    <ListItem list={[
                        '启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见 ———— 我是不会开启这个的，看不到错误日志，还搞个锤子',
                        'stats: "errors-only" ， 终端中仅打印出 error，注意当启用了 quiet 或者是 noInfo 时，此属性不起作用。 ————— 这个属性个人觉得很有用，尤其是我们启用了 eslint 或者使用 TS进行开发的时候，太多的编译信息在终端中，会干扰到我们。',
                        '启用 overlay 后，当编译出错时，会在浏览器窗口全屏输出错误，默认是关闭的。',
                        'clientLogLevel: 当使用内联模式时，在浏览器的控制台将显示消息，如：在重新加载之前，在一个错误之前，或者模块热替换启用时。如果你不喜欢看这些信息，可以将其设置为 silent (none 即将被移除)。'
                    ]}></ListItem>
                    <Paragraph title={'本篇文章不是为了细说 webpack-dev-server 的配置，所以这里就不多说了。关于 webpack-dev-server 更多的配置可以查看官方文档。'}></Paragraph>
                    <Paragraph title={'细心的小伙伴可能发现了一个小问题，我们在src/index.js中增加一句 console.log("aaa")：'}></Paragraph>
<CodeBlock content={
`class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const dog = new Animal('dog');
console.log('aaa');
`}></CodeBlock>
                    <Paragraph title={'然后通过 npm run dev 查看效果，会发现：'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="123"/>
                    <Paragraph title={'这显然不是我们源码中对应的行号，点进去的话，会发现代码是被编译后的，我当前的代码非常简单，还能看出来，项目代码复杂后，“亲妈”看编译后都费劲，这不利于我们开发调试，不是我们想要的，我们肯定还是希望能够直接对应到源码的。'}></Paragraph>
                    <Label title={'7.devtool'}></Label>
                    <Paragraph title={'devtool 中的一些设置，可以帮助我们将编译后的代码映射回原始源代码。不同的值会明显影响到构建和重新构建的速度。'}></Paragraph>
                    <Paragraph title={'对我而言，能够定位到源码的行即可，因此，综合构建速度，在开发模式下，我设置的 devtool 的值是 cheap-module-eval-source-map。'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    devtool: 'cheap-module-eval-source-map' //开发环境下使用
}
`}></CodeBlock>
                    <Paragraph title={'生产环境可以使用 none 或者是 source-map，使用 source-map 最终会单独打包出一个 .map 文件，我们可以根据报错信息和此 map 文件，进行错误解析，定位到源代码。'}></Paragraph>
                    <Paragraph title={'source-map 和 hidden-source-map 都会打包生成单独的 .map 文件，区别在于，source-map 会在打包出的js文件中增加一个引用注释，以便开发工具知道在哪里可以找到它。hidden-source-map 则不会在打包的js中增加引用注释。'}></Paragraph>
                    <Paragraph title={'但是我们一般不会直接将 .map 文件部署到CDN，因为会直接映射到源码，更希望将.map 文件传到错误解析系统，然后根据上报的错误信息，直接解析到出错的源码位置。'}></Paragraph>
                    <Paragraph title={'不过报错信息中只有行号，而没有列号。如果有行列号，那么可以通过sourcemap 来解析出错位置。只有行号，根本无法解析，不知道大家的生产环境是如何做的？怎么上报错误信息至错误解析系统进行解析。如有好的方案，请赐教。'}></Paragraph>
                    <Paragraph title={'还可以设置其他的devtool值，你可以使用不同的值，构建对比差异。'}></Paragraph>
                    <Paragraph title={'现在我们已经说了 html、js 了，并且也可以在浏览器中实时看到效果了，现在就不得不说页面开发三巨头之一的 css 。'}></Paragraph>
                    <Label title={'8.如何处理样式文件呢'}></Label>
                    <Paragraph title={'webpack 不能直接处理 css，需要借助 loader。如果是 .css，我们需要的 loader 通常有： style-loader、css-loader，考虑到兼容性问题，还需要 postcss-loader，而如果是 less 或者是 sass 的话，还需要 less-loader 和 sass-loader，这里配置一下 less 和 css 文件(sass 的话，使用 sass-loader即可):'}></Paragraph>
                    <Paragraph title={'先安装一下需要使用的依赖:'}></Paragraph>
<CodeBlock content={
`npm install style-loader less-loader css-loader postcss-loader autoprefixer less -D
`}></CodeBlock>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //...
    module: {
        rules: [
            {
                test: /\\.(le|c)ss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')({
                                    "overrideBrowserslist": [
                                        ">0.25%",
                                        "not dead"
                                    ]
                                })
                            ]
                        }
                    }
                }, 'less-loader'],
                exclude: /node_modules/
            }
        ]
    }
}
`}></CodeBlock>
                    <Paragraph title={'测试一下，新建一个 less 文件，src/index.less:'}></Paragraph>
<CodeBlock content={
`//src/index.less
@color: red;
body{
    background: @color;
    transition: all 2s;
}
`}></CodeBlock>
                    <Paragraph title={'再在入口文件中引入此 less:'}></Paragraph>
<CodeBlock content={
`//src/index.js
import './index.less';
`}></CodeBlock>
                    <Paragraph title={'我们修改了配置文件，重新启动一下服务: npm run dev。可以看到页面的背景色变成了红色。'}></Paragraph>
                    <Paragraph title={'OK，我们简单说一下上面的配置：'}></Paragraph>
                    <ListItem list={[
                        'style-loader 动态创建 style 标签，将 css 插入到 head 中.',
                        'css-loader 负责处理 @import 等语句。',
                        'postcss-loader 和 autoprefixer，自动生成浏览器兼容性前缀 —— 2020了，应该没人去自己徒手去写浏览器前缀了吧',
                        'less-loader 负责处理编译 .less 文件,将其转为 css'
                    ]}></ListItem>
                    <Paragraph title={'这里，我们之间在 webpack.config.js 写了 autoprefixer 需要兼容的浏览器，仅是为了方便展示。推荐大家在根目录下创建 .browserslistrc，将对应的规则写在此文件中，除了 autoprefixer 使用外，@babel/preset-env、stylelint、eslint-plugin-conmpat 等都可以共用。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'注意：'}></Paragraph>
                    <Paragraph title={'loader 的执行顺序是从右向左执行的，也就是后面的 loader 先执行，上面 loader 的执行顺序为: less-loader ---> postcss-loader ---> css-loader ---> style-loader'}></Paragraph>
                    <Paragraph title={'当然，loader 其实还有一个参数，可以修改优先级，enforce 参数，其值可以为: pre(优先执行) 或 post (滞后执行)。'}></Paragraph>
                    <Paragraph title={'现在，我们已经可以处理 .less 文件啦，.css 文件只需要修改匹配规则，删除 less-loader 即可。'}></Paragraph>
                    <Paragraph title={'现在的一切看起来都很完美，但是假设我们的文件中使用了本地的图片，例如:'}></Paragraph>
<CodeBlock content={
`body{
    backgroud: url('../images/thor.png');
}
`}></CodeBlock>
                    <Paragraph title={'你就会发现，报错啦啦啦，那么我们要怎么处理图片或是本地的一些其它资源文件呢。不用想，肯定又需要 loader 出马了。'}></Paragraph>
                    <Label title={'9.图片/字体文件处理'}></Label>
                    <Paragraph title={'我们可以使用 url-loader 或者 file-loader 来处理本地的资源文件。url-loader 和 file-loader 的功能类似，但是 url-loader 可以指定在文件大小小于指定的限制时，返回 DataURL，因此，个人会优先选择使用 url-loader。'}></Paragraph>
                    <Paragraph title={'首先安装依赖:'}></Paragraph>
<CodeBlock content={
`npm install url-loader -D
`}></CodeBlock>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="123"/>
                    <Paragraph title={'安装 url-loader 的时候，控制台会提示你，还需要安装下 file-loader，听人家的话安装下就行(新版 npm 不会自动安装 peerDependencies)：'}></Paragraph>
<CodeBlock content={
`npm install file-loader -D
`}></CodeBlock>
                    <Paragraph title={'在 webpack.config.js 中进行配置：'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //...
    modules: {
        rules: [
            {
                test: /\\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, //10K
                            esModule: false 
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
}
`}></CodeBlock>
                    <Paragraph title={'此处设置 limit 的值大小为 10240，即资源大小小于 10K 时，将资源转换为 base64，超过 10K，将图片拷贝到 dist 目录。esModule 设置为 false，否则，<img src={require("XXX.jpg")} /> 会出现 <img src=[Module Object] /></div>'}></Paragraph>
                    <Paragraph title={'将资源转换为 base64 可以减少网络请求次数，但是 base64 数据较大，如果太多的资源是 base64，会导致加载变慢，因此设置 limit 值时，需要二者兼顾。'}></Paragraph>
                    <Paragraph title={'默认情况下，生成的文件的文件名就是文件内容的 MD5 哈希值并会保留所引用资源的原始扩展名，例如我上面的图片(thor.jpeg)对应的文件名如下：'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="123"/>
                    <Paragraph title={'当然，你也可以通过 options 参数进行修改。'}></Paragraph>
<CodeBlock content={
`npm install file-loader -D
`}></CodeBlock>
                    <Paragraph title={'重新编译，在浏览器中审查元素，可以看到图片名变成了: thor_a5f7c0.jpeg。'}></Paragraph>
                    <Paragraph title={'当本地资源较多时，我们有时会希望它们能打包在一个文件夹下，这也很简单，我们只需要在 url-loader 的 options 中指定 outpath，如: outputPath: "assets"，构建出的目录如下:'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="123"/>
                    <Paragraph title={'更多的 url-loader 配置可以查看官方文档'}></Paragraph>
                    <Paragraph title={'到了这里，有点岁月静好的感觉了。'}></Paragraph>
                    <Paragraph title={'不过还没完，如果你在 public/index.html 文件中，使用本地的图片，例如，我们修改一下 public/index.html：'}></Paragraph>
<CodeBlock content={
`<img src="./a.jpg" />
`}></CodeBlock>
                    <Paragraph title={'重启本地服务，虽然，控制台不会报错，但是你会发现，浏览器中根本加载不出这张图片，Why？因为构建之后，通过相对路径压根找不着这张图片呀。'}></Paragraph>
                    <Paragraph title={'How？怎么解决呢？'}></Paragraph>
                    <Label title={'10.处理 html 中的本地图片'}></Label>
                    <Paragraph title={'安装 html-withimg-loader 来解决咯。'}></Paragraph>
<CodeBlock content={
`npm install html-withimg-loader -D
`}></CodeBlock>
                    <Paragraph title={'修改 webpack.config.js：'}></Paragraph>
<CodeBlock content={
`module.exports = {
    //...
    module: {
        rules: [
            {
                test: /.html$/,
                use: 'html-withimg-loader'
            }
        ]
    }
}
`}></CodeBlock>
                    <Paragraph title={'然后在我们的 html 中引入一张文件测试一下（图片地址自己写咯，这里只是示意）:'}></Paragraph>
<CodeBlock content={
`<!-- index.html -->
<img src="./thor.jpeg" />
`}></CodeBlock>
                    <Paragraph title={'重启本地服务，图片并没能加载，审查元素的话，会发现图片的地址显示的是 {"default":"assets/thor_a5f7c0.jpeg"}。'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="123"/>
                    <Paragraph title={'我当前 file-loader 的版本是 5.0.2，5版本之后，需要增加 esModule 属性：:'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //...
    modules: {
        rules: [
            {
                test: /\\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, //10K
                            esModule: false
                        }
                    }
                ]
            }
        ]
    }
}
`}></CodeBlock>
                    <Paragraph title={'再重启本地服务，就搞定啦。'}></Paragraph>
                    <Paragraph title={'话说使用 html-withimg-loader 处理图片之后，html 中就不能使用 vm, ejs 的模板了，如果想继续在 html 中使用 <% if(htmlWebpackPlugin.options.config.header) { %> 这样的语法，但是呢，又希望能使用本地图片，可不可以？鱼和熊掌都想要，虽然很多时候，能吃个鱼就不错了，但是这里是可以的哦，删除html的loader，像下面这样编写图片的地址就可以啦。'}></Paragraph>
<CodeBlock content={
`<!-- index.html -->
<img src="<%= require('./thor.jpeg') %>" />
`}></CodeBlock>
                    <Paragraph title={'图片加载OK啦，并且 <% %> 语法也可以正常使用，吼吼吼~~~'}></Paragraph>
                    <Paragraph title={'虽然，webpack 的默认配置很好用，但是有的时候，我们会有一些其它需要啦，例如，我们不止一个入口文件，这时候，该怎么办呢？'}></Paragraph>
                    <Label title={'11.入口配置'}></Label>
                    <Paragraph title={'入口的字段为: entry'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    entry: './src/index.js' //webpack的默认配置
}
`}></CodeBlock>
                    <Paragraph title={'entry 的值可以是一个字符串，一个数组或是一个对象。'}></Paragraph>
                    <Paragraph title={'字符串的情况无需多说，就是以对应的文件为入口。'}></Paragraph>
                    <Paragraph title={'为数组时，表示有“多个主入口”，想要多个依赖文件一起注入时，会这样配置。例如:'}></Paragraph>
<CodeBlock content={
`entry: [
    './src/polyfills.js',
    './src/index.js'
]
`}></CodeBlock>    
                    <Paragraph title={'polyfills.js 文件中可能只是简单的引入了一些 polyfill，例如 babel-polyfill，whatwg-fetch 等，需要在最前面被引入（我在 webpack2 时这样配置过）。'}></Paragraph>
                    <Paragraph title={'那什么时候是对象呢？不要捉急，后面将多页配置的时候，会说到。'}></Paragraph>
                    <Label title={'12.出口配置'}></Label>
                    <Paragraph title={'配置 output 选项可以控制 webpack 如何输出编译文件。'}></Paragraph>
<CodeBlock content={
`const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //必须是绝对路径
        filename: 'bundle.js',
        publicPath: '/' //通常是CDN地址
    }
}
`}></CodeBlock> 
                    <Paragraph title={'例如，你最终编译出来的代码部署在 CDN 上，资源的地址为: "https://AAA/BBB/YourProject/XXX"，那么可以将生产的 publicPath 配置为: //AAA/BBB/。'}></Paragraph>
                    <Paragraph title={'编译时，可以不配置，或者配置为 /。可以在我们之前提及的 config.js 中指定 publicPath（config.js 中区分了 dev 和 public）， 当然还可以区分不同的环境指定配置文件来设置，或者是根据 isDev 字段来设置。'}></Paragraph>
                    <Paragraph title={'除此之外呢，考虑到CDN缓存的问题，我们一般会给文件名加上 hash.'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'), //必须是绝对路径
        filename: 'bundle.[hash].js',
        publicPath: '/' //通常是CDN地址
    }
}
`}></CodeBlock> 
                    <Paragraph title={'如果你觉得 hash 串太长的话，还可以指定长度，例如 bundle.[hash:6].js。使用 npm run build 打包看看吧。'}></Paragraph>
                    <Paragraph title={'问题出现啦，每次文件修改后，重新打包，导致 dist 目录下的文件越来越多。要是每次打包前，都先清空一下目录就好啦。可不可以做到呢？必须可以！'}></Paragraph>
                    <Label title={'13.每次打包前清空dist目录'}></Label>
                    <Paragraph title={'反正我是懒得手动去清理的，只要你足够懒，你总是会找到好办法的，懒人推动科技进步。这里，我们需要插件: clean-webpack-plugin'}></Paragraph>
                    <Paragraph title={'安装依赖:'}></Paragraph>
<CodeBlock content={
`npm install clean-webpack-plugin -D
`}></CodeBlock> 
                    <Paragraph title={'以前，clean-webpack-plugin 是默认导出的，现在不是，所以引用的时候，需要注意一下。另外，现在构造函数接受的参数是一个对象，可缺省。'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //...
    plugins: [
        //不需要传参数喔，它可以找到 outputPath
        new CleanWebpackPlugin() 
    ]
}
`}></CodeBlock>
                    <Paragraph title={'现在你再修改文件，重现构建，生成的hash值和之前dist中的不一样，但是因为每次 clean-webpack-plugin 都会帮我们先清空一波 dist 目录，所以不会出现太多文件，傻傻分不清楚究竟哪个是新生成文件的情况。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'希望dist目录下某个文件夹不被清空'}></Paragraph>
                    <Paragraph title={'不过呢，有些时候，我们并不希望整个 dist 目录都被清空，比如，我们不希望，每次打包的时候，都删除 dll 目录，以及 dll 目录下的文件或子目录，该怎么办呢？'}></Paragraph>
                    <Paragraph title={'clean-webpack-plugin 为我们提供了参数 cleanOnceBeforeBuildPatterns。'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //...
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['**/*', '!dll', '!dll/**'] //不删除dll目录下的文件
        })
    ]
}
`}></CodeBlock>
                    <Paragraph title={'此外，clean-webpack-plugin 还有一些其它的配置，不过我使用的不多，大家可以查看clean-webpack-plugin'}></Paragraph>
                    <Paragraph title={'至此，我们算是完成了一个基础配置。但是这不够完美，或者说有些时候，我们还会有一些其它的需求。下一篇关于webpack配置的文章会介绍一些其它的情况。'}></Paragraph>
                </div>
            </Container>
        )
    }
}

export default Webpack_deblocking_one;
