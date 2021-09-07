import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Webpack_basic extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'前端工程化之 Webpack 基本介绍'}></Title>
                    <Label title={'1 Webpack 的特点'}></Label>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="webpack"/>
                    <Paragraph title={'Webpack 是一款强大的打包工具。在 Webpack 中一切皆模块。Webpack 官网的 Banner 图完美地诠释了这一理念。Webpack 从一个入口文件开始递归地分析模块的依赖关系，根据依赖关系将这些模块打包成一个或多个文件。'}></Paragraph>
                    <Paragraph title={'目前几乎所有的前端构建和开发都是采用 Webpack 。因为 Webpack 有强大的社区生态，每月 Webpack 的下载量超过百万。通过 loader、plugin 支持 Webpack 与主流的前端框架和语言进行集成，比如 Vue、React、TypeScript。'}></Paragraph>
                    <ListItem list={
                        [
                            '支持所有的模块化 可以对 ES6 模块、commonjs 模块、AMD 模块等所有标准的模块进行打包。',
                            'code splitting 可以将代码打成多个 chunk，按需加载，意味着我们的站点无需等待整个 js 资源下载完成之后才能交互，可以大大提升速度。',
                            '强大灵活的插件系统 Webpack 提供了很多内置的插件，包括其自身也是架构在插件系统上可以满足所有的打包需求。',
                            'loader 借助 loader 预处理非 js 资源，Webpack 可以打包所有的静态资源。'
                        ]
                    }></ListItem>
                    <Label title={'2 Webpack 构建流程'}></Label>
                    <Paragraph title={'Webpack 的构建流程是一种事件流机制。整个构建流程可以看成是一个流水线，每个环节负责单一的任务，处理完将进入下一个环节。Webpack 会在每个环节上发布事件，供内置的和自定义的插件有机会干预 Webpack 的构建过程，控制 Webpack 的构建结果。Webpack 的基本的构建流程图如下：'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="webpack"/>
                    <ListItem list={
                        [
                            '初始化 读取 webpack 配置文件和 shell 脚本中的参数，将参数合并后初始化 Webpack ，生成 Compiler 对象。',
                            '开始编译 执行 Compiler 的 run 方法开始执行编译。',
                            '编译完成 从入口文件开始，调用配置中的 loader 对模块进行编译，并梳理出模块间的依赖关系，直至所有的模块编译完成。',
                            '资源输出 根据入口与模块间的依赖关系，将上一步编译完成的内容组装成一个个的 chunk （代码块），然后把 chunk 加入到等待输出的资源列表中。',
                            '完成 确定好输出资源后，根据指定的输出路径和文件名配置，将资源写入到磁盘的文件系统中，完成整个构建过程。'
                        ]
                    }></ListItem>
                    <Label title={'3 核心概念'}></Label>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'入口'}></Paragraph>
                    <Paragraph title={'入口是 Webpack 进行构建的起点，Webpack 在构建过程中从入口文件开始，递归地编译模块，并分析模块间的依赖关系，最终得出依赖图。Webpack 依据该依赖图对模块进行组装，输出到最终的 bundle 文件中。'}></Paragraph>
                    <Paragraph title={'我们可以在 Webpack 的配置文件中配置 entry 属性，来指定入口文件，入口文件可以是一个也可以指定多个。'}></Paragraph>
                    <Paragraph title={'我们来看一个例子：'}></Paragraph>
<CodeBlock content={
`// Webpack .config.js
module.exports = {
  entry: './src/app.js'
};
`}></CodeBlock>
                    <Paragraph title={'配置多个入口的场景常见于多页应用中。如果配置多个入口可以这样：'}></Paragraph>
<CodeBlock content={
`// Webpack .config.js
module.exports = {
  entry: {
    pageOne: './src/pageOne/app.js',
    pageTwo: './src/pageTwo/app.js'
  }
};
`}></CodeBlock>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'输出'}></Paragraph>
                    <Paragraph title={'配置 output 选项可以指示 Webpack 如何去输出、在哪里输出我们的静态资源文件。'}></Paragraph>
                    <Paragraph title={'我们通过一个例子来看一下 output 如何使用：'}></Paragraph>
<CodeBlock content={
`// Webpack .config.js
module.exports = {
  output: {
    filename: 'bundle.js',
    path: './dist'
  }
};
`}></CodeBlock>
                    <Paragraph title={'上例中，我们指示 Webpack 最终的输出文件名为 bundle.js ，输出的目录为 ./dist。'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'loader'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'loader 的使用'}></Paragraph>
                    <Paragraph title={'Webpack 本身是不能处理非 js 资源的，但我们却可以在 Webpack 中引入 css、图片、字体等非 js 文件。例如:'}></Paragraph>
<CodeBlock content={
`// app.js
import Styles from './styles.css';
`}></CodeBlock>
                    <Paragraph title={'那么 Webpack 是如何实现的呢？'}></Paragraph>
                    <Paragraph title={'Webpack 中使用 loader 对非 js 文件进行转换。loader 可以在我们 import 或者加载模块时，对文件进行预处理，将非 js 的文件内容，最终转换成 js 代码。'}></Paragraph>
                    <Paragraph title={'loader 有三种使用方式：'}></Paragraph>
                    <ListItem list={
                        [
                            '配置 在 Webpack .config.js 文件中指定',
                            '内联 在每个 import 语句中线上指定',
                            'CLI 在 shell 命令中指定。'
                        ]
                    }></ListItem>
                    <Paragraph title={'在实际的应用中，绝大数都是采用配置的方式来使用，一方面在配置文件中，可以非常直观地看到某种类型的文件使用了什么 loader，另一方面，在项目复杂的情况下，便于进行维护。'}></Paragraph>
                    <Paragraph title={'我们通过一个简单的例子来看一下 loader 的使用：'}></Paragraph>
<CodeBlock content={
`// Webpack .config.js
module.exports = {
 module: {
    rules: [
      { test: /\\.css$/, use: 'css-loader' }
    ]
  }
};
`}></CodeBlock>
                    <Paragraph title={'我们需要告诉 Webpack 当遇到 css 文件的时候，使用 css-loader 进行预处理。这里由于 css-loader 是单独的 npm 模块，使用前我们需要先进行安装：'}></Paragraph>
<CodeBlock content={
`npm install --save-dev css-loader
`}></CodeBlock>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'常用的 loader'}></Paragraph>
                    <Paragraph title={'Webpack 可以处理任何非 js 语言，得益于社区提供的丰富的 loader，日常开发中所使用到的 loader，都可以在社区找到。这里对一些常用的 loader 进行简要的说明。'}></Paragraph>
                    <ListItem list={
                        [
                            'babel-loader 将 ES2015+ 代码转译为 ES5。',
                            'ts-loader 将 TypeScript 代码转译为 ES5。',
                            'css-loader 解析 @import 和 url()，并对引用的依赖进行解析。',
                            'style-loader 在 HTML 中注入 <style> 标签将 css 添加到 DOM 中。通常与 css-loader 结合使用。',
                            'sass-loader 加载 sass/scss 文件并编译成 css。',
                            'postcss-loader 使用 PostCSS 加载和转译 CSS 文件。',
                            'html-loader 将 HTML 导出为字符串。',
                            'vue-loader 加载和转译 Vue 组件。',
                            'url-loader 和 file-loader 一样，但如果文件小于配置的限制值，可以返回 data URL。',
                            'file-loader 将文件提取到输出目录，并返回相对路径。'
                        ]
                    }></ListItem>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'plugin'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'插件的使用'}></Paragraph>
                    <Paragraph title={'插件是 Webpack 的非常重要的功能，Webpack 本身也是建立在插件系统之上的。插件机制极大增强了 Webpack 的功能，为 Webpack 增加了足够的灵活性。通过插件，我们可以在 Webpack 的构建过程中，引入自己的操作，干预构建结果。'}></Paragraph>
                    <Paragraph title={'我们通过一个示例来看一下插件的使用：'}></Paragraph>
<CodeBlock content={
`// Webpack .config.js
const HtmlWebpack Plugin = require('html-Webpack -plugin');
const Webpack  = require('Webpack ');

const config = {
  plugins: [
    new Webpack .optimize.UglifyJsPlugin(),
    new HtmlWebpack Plugin({template: './src/index.html'})
  ]
};

module.exports = config;
`}></CodeBlock>
                    <Paragraph title={'示例中，我们用到了两个插件，一个是内置的 UglifyJsPlugin 插件，该插件对 js 进行压缩，减小文件的体积。一个是外部插件 HtmlWebpack Plugin，用来自动生成入口文件，并将最新的资源注入到 HTML 中。'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'常用的插件'}></Paragraph>
                    <ListItem list={
                        [
                            'HtmlWebpackPlugin 自动生成入口文件，并将最新的资源注入到 HTML 中。',
                            'CommonsChunkPlugin 用以创建独立文件，常用来提取多个模块中的公共模块。',
                            'DefinePlugin 用以定义在编译时使用的全局常量。',
                            'DllPlugin 拆分 bundle 减少不必要的构建。',
                            'ExtractTextWebpackPlugin 将文本从 bundle 中提取到单独的文件中。常见的场景是从 bundle 中将 css 提取到独立的 css 文件中。',
                            'HotModuleReplacementPlugin 在运行过程中替换、添加或删除模块，而无需重新加载整个页面。',
                            'UglifyjsWebpackPlugin 对 js 进行压缩，减小文件的体积。',
                            'CopyWebpackPlugin 将单个文件或整个目录复制到构建目录。一个常用的场景是将项目中的静态图片不经构建直接复制到构建后的目录。'
                        ]
                    }></ListItem>
                    <Label title={'4 如何使用 Webpack'}></Label>
                    <Paragraph title={'下面我们通过一个简单的例子来看一下 Webpack 的使用。这里假定你已经安装了最新版本的 nodejs 和 npm，因为使用旧版本可能会遇到各种问题。'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'4.1 安装'}></Paragraph>
                    <Paragraph title={'创建 Webpack -demo 目录，初始化 npm，并且在 Webpack -demo 目录中安装 Webpack 和 Webpack -cli：'}></Paragraph>
<CodeBlock content={
`mkdir Webpack -demo && cd Webpack -demo
npm init -y
npm install Webpack  Webpack -cli --save-dev
`}></CodeBlock>
                    <Paragraph title={'Webpack -cli 用来在命令行中运行 Webpack 。这里建议本地安装 Webpack 和 Webpack -cli，因为全局安装的话，Webpack 的升级会影响到所有的项目。'}></Paragraph>
                    <Paragraph title={'接下来我们先在项目中新增一些目录和文件：'}></Paragraph>
<CodeBlock content={
`Webpack -demo
├── package.json
├── dist
├── index.html
└── src
    └── index.js
`}></CodeBlock>
                    <Paragraph title={'index.html 内容如下：'}></Paragraph>
<CodeBlock content={
`<!doctype html>
<html>
    <head>
        <title>Webpack -demo</title>
    </head>
    <body>
        <script src="./src/index.js"></script>
    </body>
</html>
`}></CodeBlock>
                    <Paragraph title={'src/index.js 内容如下:'}></Paragraph>
<CodeBlock content={
`function createEl() {
    var element = document.createElement('div')
    element.innerHTML = 'hello world'
  
    return element;
}
  
document.body.appendChild(createEl());
`}></CodeBlock>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'4.2 第一次构建'}></Paragraph>
                    <Paragraph title={'在命令行运行：'}></Paragraph>
<CodeBlock content={
`./node_modules/.bin/Webpack

Hash: 2353b0d3d427eaa8a18a
Version: Webpack  4.29.6
Time: 175ms
Built at: 2019-04-03 22:08:36
  Asset   Size  Chunks             Chunk Names
main.js  1 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 175 bytes {0} [built] 
`}></CodeBlock>
                    <Paragraph title={'大家可以发现，我们并没有在配置文件中指定打包的入口和输出的出口，也没有在命令行中指定配置参数，但可以看到在 ./dist 目录下新增了一个 main.js。这是因为 Webpack 配置中 entry 的默认值为 ./src，出口的默认目录是 ./dist。'}></Paragraph>
<CodeBlock content={
`Webpack -demo
├── package.json
├── dist
|    └── main.js
├── index.html
└── src
     └── index.js
`}></CodeBlock>
                    <Paragraph title={'构建后的项目目录中新增了 main.js'}></Paragraph>
<CodeBlock content={
`<!doctype html>
<html>
    <head>
        <title>Webpack -demo</title>
    </head>
    <body>
        <script src="./dist/main.js"></script>
    </body>
</html>
`}></CodeBlock>
                    <Paragraph title={'我们现在将 index.html 中的脚本引用修改为构建后的文件 ./dist/main.js，在浏览器预览，如果一切正常应该可以看到页面上会输出文本 hello world。'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'4.3 使用配置文件'}></Paragraph>
                    <Paragraph title={'对于简单的构建，Webpack 基本可以做到零配置。但对于复杂的单页应用而言，则需要使用 Webpack 的配置文件来提供个性化的功能。'}></Paragraph>
                    <Paragraph title={'首先我们在项目根目录下新增 Webpack .config.js 文件:'}></Paragraph>
<CodeBlock content={
`// Webpack .config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
`}></CodeBlock>
                    <Paragraph title={'在配置文件中，通过 entry 指定了入口文件为 ./src/index.js，通过 output 指定了输出的目录为 ./dist，输出的文件名为 bundle.js。目录结构更新如下：'}></Paragraph>
<CodeBlock content={
`Webpack -demo
├── package.json
├── Webpack .config.js
├── index.html
├── dist
|    └── bundle.js
└── src
     └── index.js
`}></CodeBlock>
                    <Paragraph title={'同时为了调用简单，我们在 package.json 文件中设置快捷命令来调用 ./node_modules/.bin/Webpack。'}></Paragraph>
<CodeBlock content={
`// package.json
{
  "scripts": {
    "build": "Webpack "
  }
}
`}></CodeBlock>
                    <Paragraph title={'再次执行构建命令：'}></Paragraph>
<CodeBlock content={
`npm run build
> Webpack -demo@1.0.0 build C:\\work\\tech\\Webpack -demo
> Webpack

Hash: d0fa6b1e011af414e622
Version: Webpack  4.29.6
Time: 157ms
Built at: 2019-04-03 22:42:50
 Asset   Size  Chunks             Chunk Names
bundle.js  1 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js 175 bytes {0} [built]
`}></CodeBlock>
                    <Paragraph title={'将 index.html 中的 script 引用链接修改为 ./dist/bundle.js，在浏览器中预览页面，不出意外的话会输出文本 hello world。'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'4.4 使用插件'}></Paragraph>
                    <Paragraph title={'我们发现在构建的过程中，如果构建后的资源名称发生了变化，index.html 中对资源的引用会被动地跟着修改，非常不方便，我们引入 HtmlWebpack Plugin 来帮助我们自动生成入口文件，自动将生成的资源文件注入 index.html 中。'}></Paragraph>
                    <Paragraph title={'安装：'}></Paragraph>
<CodeBlock content={
`npm install --save-dev html-Webpack-plugin
`}></CodeBlock>
                    <Paragraph title={'配置：'}></Paragraph>
<CodeBlock content={
`const path = require("path");
const HtmlWebpackPlugin = require("html-Webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpack Plugin()]
};
`}></CodeBlock>
                    <Paragraph title={'在配置文件中，我们引入插件，并在 plugins 选项中，将插件实例化后添加到数组中。该插件会自动生成 index.html，因此原目录中的 index.html 文件可以删除。'}></Paragraph>
<CodeBlock content={
`Webpack -demo
├── package.json
├── Webpack .config.js
├── dist
|    └── bundle.js
└── src
     └── index.js
`}></CodeBlock>
                    <Paragraph title={'再次执行构建命令：'}></Paragraph>
<CodeBlock content={
`$ npm run build

> Webpack -demo@1.0.0 build C:\\work\\tech\\Webpack -demo
> Webpack

Hash: 39dc7567ef99a69140e7
Version: Webpack  4.29.6
Time: 1241ms
Built at: 2019-04-03 22:53:44
     Asset       Size  Chunks             Chunk Names
 bundle.js      1 KiB       0  [emitted]  main
index.html  182 bytes          [emitted]
Entrypoint main = bundle.js
[0] ./src/index.js 175 bytes {0} [built]
`}></CodeBlock>
                    <Paragraph title={'命令执行后我们发现我们的 ./dist 下多了一个 index.html 文件，并且 index.html 中的资源引用被自动更新为了 <script type="text/javascript" src="bundle.js"></script>。'}></Paragraph>
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'4.5 使用 loader 处理 css 文件'}></Paragraph>
                    <Paragraph title={'为了使 Webpack 可以处理 import 进来的 css 文件，我们需要安装并配置 style-loader 和 css-loader。'}></Paragraph>
<CodeBlock content={
`npm install --save-dev style-loader css-loader
`}></CodeBlock>
                    <Paragraph title={'修改 Webpack 的配置如下：'}></Paragraph>
<CodeBlock content={
`const path = require("path");
const HtmlWebpack Plugin = require("html-Webpack -plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpack Plugin()]
};
`}></CodeBlock>
                    <Paragraph title={'如此一来，当 Webpack 匹配到后缀为 .css 的文件都会使用 css-loader 和 style-loader 进行处理。'}></Paragraph>
                    <Paragraph title={'接下来我们在 ./src 目录下新增一个样式文件 main.css。在样式中，设置文本的字体颜色为红色。'}></Paragraph>
<CodeBlock content={
`// main.css
div{color: red}
`}></CodeBlock>
                    <Paragraph title={'紧接着我们在 ./src/index.js 中引用 main.css：'}></Paragraph>
<CodeBlock content={
`import "./main.css";

function createEl() {
    var element = document.createElement("div");
    element.innerHTML = "hello world";

    return element;
}

document.body.appendChild(createEl());
`}></CodeBlock>
                    <Paragraph title={'执行构建命令：'}></Paragraph>
<CodeBlock content={
`$ npm run build

> Webpack -demo@1.0.0 build C:\\work\\tech\\Webpack -demo
> Webpack

Hash: f9fcb8cfd689f4b96ce6
Version: Webpack  4.29.6
Time: 2672ms
Built at: 2019-04-03 23:24:40
     Asset       Size  Chunks             Chunk Names
 bundle.js   6.85 KiB       0  [emitted]  main
index.html  182 bytes          [emitted]
Entrypoint main = bundle.js
[0] ./src/index.js 199 bytes {0} [built]
[1] ./src/main.css 1.05 KiB {0} [built]
[2] ./node_modules/css-loader/dist/cjs.js!./src/main.css 170 bytes {0} [built]
    + 3 hidden modules
`}></CodeBlock>
                    <Paragraph title={'在浏览器预览，不出意外字体的颜色已经变成了红色，打开浏览器调试工具，可以看到在 <head> 标签里插入了一个 <style> 标签。'}></Paragraph>
<CodeBlock content={
`<style type="text/css">
div {
  color: red;
}
</style>
`}></CodeBlock>
                    <Paragraph title={'通过以上完整的示例，我们演示了 Webpack 的核心的几个配置的使用方式，我们对 Webpack 的使用应该有了一个基本的认识。'}></Paragraph>
                    <Paragraph title={'Webpack 中还有很多其他有用的配置项，篇幅原因不做详细的介绍。大家可以查阅 官方文档 自行配置和练习。'}></Paragraph>
                    <Label title={'总结'}></Label>
                    <Paragraph title={'本节我们对 Webpack 进行了总体的介绍。借助 loader、Webpack 可以处理一切资源，JS 的、非 JS 的，都可以。通过插件，我们可以在 Webpack 的构建过程中的每个事件节点加入自己的行为，来影响 Webpack 的构建。对 Webpack 的使用有了认识，可以为我们搭建起项目的基本框架提供一个基础。'}></Paragraph>
                </div>
            </Container>
        )
    }
}

export default Webpack_basic;