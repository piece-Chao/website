import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Webpack_deblocking_two extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'万字长文带你深度解锁Webpack（进阶篇）'}></Title>
                    <Paragraph title={'三篇长文带你深度解锁 Webpack ，希望读完这三篇文章，你能够对 webpack 的各项配置有一个更为清晰的认识。'}></Paragraph>
                    <Paragraph title={'本文是第二篇，如果你还没有阅读《4W字长文带你深度解锁Webpack系列(基础篇)》，建议阅读之后，再继续阅读本文。'}></Paragraph>
                    <Paragraph title={'本文会引入更多的 webpack 配置，如果文中有任何错误，欢迎在评论区指正，我会尽快修正。 webpack 优化部分放在了下一篇。'}></Paragraph>
                    <Paragraph title={'推荐大家参考本文一步一步进行配置，不要总是想着找什么最佳配置，掌握之后，根据自己的需求配置出来的，就是最佳配置。'}></Paragraph>
                    <Label title={'1. 静态资源拷贝'}></Label>
                    <Paragraph title={'有些时候，我们需要使用已有的JS文件、CSS文件（本地文件），但是不需要 webpack 编译。例如，我们在 public/index.html 中引入了 public 目录下的 js 或 css 文件。这个时候，如果直接打包，那么在构建出来之后，肯定是找不到对应的 js / css 了。'}></Paragraph>
                    <Paragraph style={{background: '#eee', textIndent: 0}} title={'public 目录结构'}></Paragraph>
<CodeBlock content={
`├── public
│   ├── config.js
│   ├── index.html
│   ├── js
│   │   ├── base.js
│   │   └── other.js
│   └── login.html
`
}></CodeBlock>
                    <Paragraph title={'现在，我们在 index.html 中引入了 ./js/base.js。'}></Paragraph>
<CodeBlock content={
`<!-- index.html -->
<script src="./js/base.js"></script>
`
}></CodeBlock>
                    <Paragraph title={'这时候，我们 npm run dev，会发现有找不到该资源文件的报错信息。'}></Paragraph>
                    <Paragraph title={'对于这个问题，我们可以手动将其拷贝至构建目录，然后在配置 CleanWebpackPlugin 时，注意不要清空对应的文件或文件夹即可，但是如若这个静态文件时不时的还会修改下，那么依赖于手动拷贝，是很容易出问题的。'}></Paragraph>
                    <Paragraph title={'不要过于相信自己的记性，依赖于手动拷贝的方式，大多数人应该都有过忘记拷贝的经历，你要是说你从来没忘过。'}></Paragraph>
                    <Paragraph title={'幸运的是，webpack 为我们这些记性不好又爱偷懒的人提供了好用的插件 CopyWebpackPlugin，它的作用就是将单个文件或整个目录复制到构建目录。'}></Paragraph>
                    <Paragraph title={'首先安装一下依赖：'}></Paragraph>
<CodeBlock content={
`npm install copy-webpack-plugin -D
`
}></CodeBlock>
                    <Paragraph title={'修改配置(当前，需要做的是将 public/js 目录拷贝至 dist/js 目录)：'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    //...
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'public/js/*.js',
                to: path.resolve(__dirname, 'dist', 'js'),
                flatten: true,
            },
            //还可以继续配置其它要拷贝的文件
        ])
    ]
}
`
}></CodeBlock>
                    <Paragraph title={'此时，重新执行 npm run dev，报错信息已经消失。'}></Paragraph>
                    <Paragraph title={'这里说一下 flatten 这个参数，设置为 true，那么它只会拷贝文件，而不会把文件夹路径都拷贝上，大家可以不设置 flatten 时，看下构建结果。'}></Paragraph>
                    <Paragraph title={'另外，如果我们要拷贝一个目录下的很多文件，但是想过滤掉某个或某些文件，那么 CopyWebpackPlugin 还为我们提供了 ignore 参数。'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    //...
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'public/js/*.js',
                to: path.resolve(__dirname, 'dist', 'js'),
                flatten: true,
            }
        ], {
            ignore: ['other.js']
        })
    ]
}
`
}></CodeBlock>
                    <Paragraph title={'例如，这里我们忽略掉 js 目录下的 other.js 文件，使用 npm run build 构建，可以看到 dist/js 下不会出现 other.js 文件。 CopyWebpackPlugin 还提供了很多其它的参数，如果当前的配置不能满足你，可以查阅文档进一步修改配置。'}></Paragraph>
                    <Label title={'2.ProvidePlugin'}></Label>
                    <Paragraph title={'ProvidePlugin 在我看来，是为懒人准备的，不过也别过度使用，毕竟全局变量不是什么“好东西”。ProvidePlugin 的作用就是不需要 import 或 require 就可以在项目中到处使用。'}></Paragraph>
                    <Paragraph title={'ProvidePlugin 是 webpack 的内置插件，使用方式如下：'}></Paragraph>
<CodeBlock content={
`new webpack.ProvidePlugin({
    identifier1: 'module1',
    identifier2: ['module2', 'property2']
});
`
}></CodeBlock>
                    <Paragraph title={'默认寻找路径是当前文件夹 ./** 和 node_modules，当然啦，你可以指定全路径。'}></Paragraph>
                    <Paragraph title={'React 大家都知道的，使用的时候，要在每个文件中引入 React，不然立刻抛错给你看。还有就是 jquery, lodash 这样的库，可能在多个文件中使用，但是懒得每次都引入，好嘛，一起来偷个懒，修改下 webpack 的配置:'}></Paragraph>
<CodeBlock content={
`const webpack = require('webpack');
module.exports = {
    //...
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            Component: ['react', 'Component'],
            Vue: ['vue/dist/vue.esm.js', 'default'],
            $: 'jquery',
            _map: ['lodash', 'map']
        })
    ]
}
`
}></CodeBlock>
                    <Paragraph title={'这样配置之后，你就可以在项目中随心所欲的使用 $、_map了，并且写 React 组件时，也不需要 import React 和 Component 了，如果你想的话，你还可以把 React 的 Hooks 都配置在这里。'}></Paragraph>
                    <Paragraph title={'另外呢，Vue 的配置后面多了一个 default，这是因为 vue.esm.js 中使用的是 export default 导出的，对于这种，必须要指定 default。React 使用的是 module.exports 导出的，因此不要写 default。'}></Paragraph>
                    <Paragraph title={'另外，就是如果你项目启动了 eslint 的话，记得修改下 eslint 的配置文件，增加以下配置：'}></Paragraph>
<CodeBlock content={
`{
    "globals": {
        "React": true,
        "Vue": true,
        //....
    }
}
`
}></CodeBlock>
                    <Paragraph title={'当然啦，偷懒要有个度，你要是配一大堆全局变量，最终可能会给自己带来麻烦，对自己配置的全局变量一定要负责到底。'}></Paragraph>
                    <Label title={'3.抽离CSS'}></Label>
                    <Paragraph title={'CSS打包我们前面已经说过了，不过呢，有些时候，我们可能会有抽离CSS的需求，即将CSS文件单独打包，这可能是因为打包成一个JS文件太大，影响加载速度，也有可能是为了缓存(例如，只有JS部分有改动)，还有可能就是“我高兴”：我想抽离就抽离，谁也管不着。'}></Paragraph>
                    <Paragraph title={'不管你是因为什么原因要抽离CSS，只要你有需求，我们就可以去实现。'}></Paragraph>
                    <Paragraph title={'首先，安装 loader:'}></Paragraph>
<CodeBlock content={
`npm install mini-css-extract-plugin -D
`
}></CodeBlock>
                    <Paragraph style={{background: '#eee', textIndent: 0}} title={'mini-css-extract-plugin 和 extract-text-webpack-plugin 相比:'}></Paragraph>
                    <ListItem list={[
                        '异步加载',
                        '不会重复编译(性能更好)',
                        '更容易使用',
                        '只适用CSS'
                    ]}></ListItem>
                    <Paragraph title={'修改我们的配置文件：'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css' //个人习惯将css文件放在单独目录下
        })
    ],
    module: {
        rules: [
            {
                test: /\\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, //替换之前的 style-loader
                    'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')({
                                        "overrideBrowserslist": [
                                            "defaults"
                                        ]
                                    })
                                ]
                            }
                        }
                    }, 'less-loader'
                ],
                exclude: /node_modules/
            }
        ]
    }
}
`
}></CodeBlock>
                    <Paragraph title={'现在，我们重新编译：npm run build，目录结构如下所示:'}></Paragraph>
<CodeBlock content={
`├── dist
│   ├── assets
│   │   ├── alita_e09b5c.jpg
│   │   └── thor_e09b5c.jpeg
│   ├── css
│   │   ├── index.css
│   │   └── index.css.map
│   ├── bundle.fb6d0c.js
│   ├── bundle.fb6d0c.js.map
│   └── index.html
`
}></CodeBlock>
                    <Paragraph title={'前面说了最好新建一个 .browserslistrc 文件，这样可以多个 loader 共享配置，所以，动手在根目录下新建文件 (.browserslistrc)，内容如下（你可以根据自己项目需求，修改为其它的配置）:'}></Paragraph>
<CodeBlock content={
`last 2 version
> 0.25%
not dead
`
}></CodeBlock>
                    <Paragraph title={'修改 webpack.config.js：'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //...
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css' 
        })
    ],
    module: {
        rules: [
            {
                test: /\\.(c|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')()
                                ]
                            }
                        }
                    }, 'less-loader'
                ],
                exclude: /node_modules/
            },
        ]
    }
}
`
}></CodeBlock>
                    <Paragraph title={'要测试自己的 .browserlistrc 有没有生效也很简单，直接将文件内容修改为 last 1 Chrome versions ，然后对比修改前后的构建出的结果，就能看出来啦。'}></Paragraph>
                    <Paragraph title={'可以查看更多[browserslistrc]配置项(https://github.com/browserslist/browserslist)'}></Paragraph>
                    <Paragraph title={'更多配置项，可以查看mini-css-extract-plugin 文档'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'将抽离出来的css文件进行压缩'}></Paragraph>
                    <Paragraph title={'使用 mini-css-extract-plugin，CSS 文件默认不会被压缩，如果想要压缩，需要配置 optimization，首先安装 optimize-css-assets-webpack-plugin.'}></Paragraph>
<CodeBlock content={
`npm install optimize-css-assets-webpack-plugin -D
`
}></CodeBlock>
                    <Paragraph title={'修改webpack配置：'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    //....
    plugins: [
        new OptimizeCssPlugin()
    ],
}
`
}></CodeBlock>
                    <Paragraph title={'注意，这里将 OptimizeCssPlugin 直接配置在 plugins 里面，那么 js 和 css 都能够正常压缩，如果你将这个配置在 optimization，那么需要再配置一下 js 的压缩(开发环境下不需要去做CSS的压缩，因此后面记得将其放到 webpack.config.prod.js 中哈)。'}></Paragraph>
                    <Paragraph title={'配置完之后，测试的时候发现，抽离之后，修改 css 文件时，第一次页面会刷新，但是第二次页面不会刷新 —— 好嘛，我平时的业务中用不着抽离 css，这个问题搁置了好多天(准确来说是忘记了)。'}></Paragraph>
                    <Paragraph title={'3月8号再次修改这篇文章的时候，正好看到了 MiniCssExtractPlugin.loader 对应的 option 设置，我们再次修改下对应的 rule。'}></Paragraph>
<CodeBlock content={
`module.exports = {
    rules: [
        {
            test: /\\.(c|le)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev,
                        reloadAll: true,
                    }
                },
                //...
            ],
            exclude: /node_modules/
        }
    ]
}
`
}></CodeBlock>
                    <Label title={'4.按需加载'}></Label>
                    <Paragraph title={'很多时候我们不需要一次性加载所有的JS文件，而应该在不同阶段去加载所需要的代码。webpack内置了强大的分割代码的功能可以实现按需加载。'}></Paragraph>
                    <Paragraph title={'比如，我们在点击了某个按钮之后，才需要使用使用对应的JS文件中的代码，需要使用 import() 语法：'}></Paragraph>
<CodeBlock content={
`document.getElementById('btn').onclick = function() {
    import('./handle').then(fn => fn.default());
}
`
}></CodeBlock>
                    <Paragraph title={'要支持 import() 语法，需要增加 babel 的配置，安装依赖:'}></Paragraph>
<CodeBlock content={
`npm install @babel/plugin-syntax-dynamic-import -D
`
}></CodeBlock>
                    <Paragraph title={'修改.babelrc 的配置'}></Paragraph>
<CodeBlock content={
`{
    "presets": ["@babel/preset-env"],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3
            }
        ],
        "@babel/plugin-syntax-dynamic-import"
    ]
}
`
}></CodeBlock>
                    <Paragraph title={'npm run build 进行构建，构建结果如下：'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="123"/>
                    <Paragraph title={'webpack 遇到 import(****) 这样的语法的时候，会这样处理：'}></Paragraph>
                    <ListItem list={[
                        '以**** 为入口新生成一个 Chunk',
                        '当代码执行到 import 所在的语句时，才会加载该 Chunk 所对应的文件（如这里的1.bundle.8bf4dc.js）'
                    ]}></ListItem>
                    <Paragraph title={'大家可以在浏览器中的控制台中，在 Network 的 Tab页 查看文件加载的情况，只有点击之后，才会加载对应的 JS 。'}></Paragraph>
                    <Label title={'5.热更新'}></Label>
                    <Paragraph title={'首先配置 devServer 的 hot 为 true'}></Paragraph>
                    <Paragraph title={'并且在 plugins 中增加 new webpack.HotModuleReplacementPlugin()'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const webpack = require('webpack');
module.exports = {
    //....
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //热更新插件
    ]
}
`
}></CodeBlock>
                    <Paragraph title={'我们配置了 HotModuleReplacementPlugin 之后，会发现，此时我们修改代码，仍然是整个页面都会刷新。不希望整个页面都刷新，还需要修改入口文件：'}></Paragraph>
                    <Paragraph title={'在入口文件中新增:'}></Paragraph>
<CodeBlock content={
`if(module && module.hot) {
    module.hot.accept()
}
`
}></CodeBlock>
                    <Paragraph title={'此时，再修改代码，不会造成整个页面的刷新。'}></Paragraph>
                    <Label title={'6.多页应用打包'}></Label>
                    <Paragraph title={'有时，我们的应用不一定是一个单页应用，而是一个多页应用，那么如何使用 webpack 进行打包呢。为了生成目录看起来清晰，不生成单独的 map 文件。'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:6].js'
    },
    //...
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html' //打包后的文件名
        }),
        new HtmlWebpackPlugin({
            template: './public/login.html',
            filename: 'login.html' //打包后的文件名
        }),
    ]
}
`
}></CodeBlock>
                    <Paragraph title={"如果需要配置多个 HtmlWebpackPlugin，那么 filename 字段不可缺省，否则默认生成的都是 index.html，如果你希望 html 的文件名中也带有 hash，那么直接修改 fliename 字段即可，例如: filename: 'login.[hash:6].html'。"}></Paragraph>
                    <Paragraph title={'生成目录如下:'}></Paragraph>
<CodeBlock content={
`├── dist
│   ├── 2.463ccf.js
│   ├── assets
│   │   └── thor_e09b5c.jpeg
│   ├── css
│   │   ├── index.css
│   │   └── login.css
│   ├── index.463ccf.js
│   ├── index.html
│   ├── js
│   │   └── base.js
│   ├── login.463ccf.js
│   └── login.html
`
}></CodeBlock>
                    <Paragraph title={'看起来，似乎是OK了，不过呢，查看 index.html 和 login.html 会发现，都同时引入了 index.f7d21a.js 和 login.f7d21a.js，通常这不是我们想要的，我们希望，index.html 中只引入 index.f7d21a.js，login.html 只引入 login.f7d21a.js。'}></Paragraph>
                    <Paragraph title={'HtmlWebpackPlugin 提供了一个 chunks 的参数，可以接受一个数组，配置此参数仅会将数组中指定的js引入到html文件中，此外，如果你需要引入多个JS文件，仅有少数不想引入，还可以指定 excludeChunks 参数，它接受一个数组。'}></Paragraph>
<CodeBlock content={
`/webpack.config.js
module.exports = {
    //...
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './public/login.html',
            filename: 'login.html', //打包后的文件名
            chunks: ['login']
        }),
    ]
}
`
}></CodeBlock>
                    <Paragraph title={'执行 npm run build，可以看到 index.html 中仅引入了 index 的 JS 文件，而 login.html 中也仅引入了 login 的 JS 文件，符合我们的预期。'}></Paragraph>
                    <Label title={'7.resolve 配置'}></Label>
                    <Paragraph title={'resolve 配置 webpack 如何寻找模块所对应的文件。webpack 内置 JavaScript 模块化语法解析功能，默认会采用模块化标准里约定好的规则去寻找，但你可以根据自己的需要修改默认的规则。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'1.modules'}></Paragraph>
                    <Paragraph title={'resolve.modules 配置 webpack 去哪些目录下寻找第三方模块，默认情况下，只会去 node_modules 下寻找，如果你我们项目中某个文件夹下的模块经常被导入，不希望写很长的路径，那么就可以通过配置 resolve.modules 来简化。'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //....
    resolve: {
        modules: ['./src/components', 'node_modules'] //从左到右依次查找
    }
}
`
}></CodeBlock>
                    <Paragraph title={"这样配置之后，我们 import Dialog from 'dialog'，会去寻找 ./src/components/dialog，不再需要使用相对路径导入。如果在 ./src/components 下找不到的话，就会到 node_modules 下寻找。"}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'2.alias'}></Paragraph>
                    <Paragraph title={'resolve.alias 配置项通过别名把原导入路径映射成一个新的导入路径，例如：'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //....
    resolve: {
        alias: {
            'react-native': '@my/react-native-web' //这个包名是我随便写的哈
        }
    }
}
`
}></CodeBlock>
                    <Paragraph title={'例如，我们有一个依赖 @my/react-native-web 可以实现 react-native 转 web。我们代码一般下面这样:'}></Paragraph>
<CodeBlock content={
`import { View, ListView, StyleSheet, Animated } from 'react-native';
`
}></CodeBlock>
                    <Paragraph title={'配置了别名之后，在转 web 时，会从 @my/react-native-web 寻找对应的依赖。'}></Paragraph>
                    <Paragraph title={'当然啦，如果某个依赖的名字太长了，你也可以给它配置一个短一点的别名，这样用起来比较爽，尤其是带有 scope 的包。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'3.extensions'}></Paragraph>
                    <Paragraph title={'适配多端的项目中，可能会出现 .web.js, .wx.js，例如在转web的项目中，我们希望首先找 .web.js，如果没有，再找 .js。我们可以这样配置:'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //....
    resolve: {
        extensions: ['web.js', '.js'] //当然，你还可以配置 .json, .css
    }
}
`
}></CodeBlock>
                    <Paragraph title={'首先寻找 ../dialog.web.js ，如果不存在的话，再寻找 ../dialog.js。这在适配多端的代码中非常有用，否则，你就需要根据不同的平台去引入文件(以牺牲了速度为代价)。'}></Paragraph>
<CodeBlock content={
`import dialog from '../dialog';
`
}></CodeBlock>
                    <Paragraph title={'当然，配置 extensions，我们就可以缺省文件后缀，在导入语句没带文件后缀时，会自动带上extensions 中配置的后缀后，去尝试访问文件是否存在，因此要将高频的后缀放在前面，并且数组不要太长，减少尝试次数。如果没有配置 extensions，默认只会找对对应的js文件。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'4.enforceExtension'}></Paragraph>
                    <Paragraph title={'如果配置了 resolve.enforceExtension 为 true，那么导入语句不能缺省文件后缀。'}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'5.mainFields'}></Paragraph>
                    <Paragraph title={'有一些第三方模块会提供多份代码，例如 bootstrap，可以查看 bootstrap 的 package.json 文件：'}></Paragraph>
<CodeBlock content={
`{
    "style": "dist/css/bootstrap.css",
    "sass": "scss/bootstrap.scss",
    "main": "dist/js/bootstrap",
}
`
}></CodeBlock>
                    <Paragraph title={"resolve.mainFields 默认配置是 ['browser', 'main']，即首先找对应依赖 package.json 中的 brower 字段，如果没有，找 main 字段。"}></Paragraph>
                    <Paragraph title={"如：import 'bootstrap' 默认情况下，找得是对应的依赖的 package.json 的 main 字段指定的文件，即 dist/js/bootstrap。"}></Paragraph>
                    <Paragraph title={"假设我们希望，import 'bootsrap' 默认去找 css 文件的话，可以配置 resolve.mainFields 为:"}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //....
    resolve: {
        mainFields: ['style', 'main'] 
    }
}
`
}></CodeBlock>
                    <Label title={'8.区分不同的环境'}></Label>
                    <Paragraph title={'目前为止我们 webpack 的配置，都定义在了 webpack.config.js 中，对于需要区分是开发环境还是生产环境的情况，我们根据 process.env.NODE_ENV 去进行了区分配置，但是配置文件中如果有多处需要区分环境的配置，这种显然不是一个好办法。'}></Paragraph>
                    <Paragraph title={'更好的做法是创建多个配置文件，如: webpack.base.js、webpack.dev.js、webpack.prod.js。'}></Paragraph>
                    <ListItem list={[
                        'webpack.base.js 定义公共的配置',
                        'webpack.dev.js：定义开发环境的配置',
                        'webpack.prod.js：定义生产环境的配置'
                    ]}></ListItem>
                    <Paragraph title={'webpack-merge 专为 webpack 设计，提供了一个 merge 函数，用于连接数组，合并对象。'}></Paragraph>
<CodeBlock content={
`npm install webpack-merge -D
const merge = require('webpack-merge');
merge({
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {a: 1}
        ]
    },
    plugins: [1,2,3]
}, {
    devtool: 'none',
    mode: "production",
    module: {
        rules: [
            {a: 2},
            {b: 1}
        ]
    },
    plugins: [4,5,6],
});
//合并后的结果为
{
    devtool: 'none',
    mode: "production",
    module: {
        rules: [
            {a: 1},
            {a: 2},
            {b: 1}
        ]
    },
    plugins: [1,2,3,4,5,6]
}
`
}></CodeBlock>
                    <Paragraph title={"webpack.config.base.js 中是通用的 webpack 配置，以 webpack.config.dev.js 为例，如下："}></Paragraph>
<CodeBlock content={
`//webpack.config.dev.js
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

module.exports = merge(baseWebpackConfig, {
    mode: 'development'
    //...其它的一些配置
});
`
}></CodeBlock>
                    <Paragraph title={"然后修改我们的 package.json，指定对应的 config 文件："}></Paragraph>
<CodeBlock content={
`//package.json
{
    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack-dev-server --config=webpack.config.dev.js",
        "build": "cross-env NODE_ENV=production webpack --config=webpack.config.prod.js"
    },
}
`
}></CodeBlock>
                    <Paragraph title={"你可以使用 merge 合并，也可以使用 merge.smart 合并，merge.smart 在合并loader时，会将同一匹配规则的进行合并，webpack-merge 的说明文档中给出了详细的示例。"}></Paragraph>
                    <Label title={'9.定义环境变量'}></Label>
                    <Paragraph title={"很多时候，我们在开发环境中会使用预发环境或者是本地的域名，生产环境中使用线上域名，我们可以在 webpack 定义环境变量，然后在代码中使用。"}></Paragraph>
                    <Paragraph title={"使用 webpack 内置插件 DefinePlugin 来定义环境变量。"}></Paragraph>
                    <Paragraph title={"DefinePlugin 中的每个键，是一个标识符."}></Paragraph>
                    <ListItem list={[
                        '如果 value 是一个字符串，会被当做 code 片段',
                        '如果 value 不是一个字符串，会被stringify',
                        '如果 value 是一个对象，正常对象定义即可',
                        '如果 key 中有 typeof，它只针对 typeof 调用定义'
                    ]}></ListItem>
<CodeBlock content={
`/webpack.config.dev.js
const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('dev'), //字符串
            FLAG: 'true' //FLAG 是个布尔类型
        })
    ]
}
//index.js
if(DEV === 'dev') {
    //开发环境
}else {
    //生产环境
}
`
}></CodeBlock>
                    <Label title={'10.利用webpack解决跨域问题'}></Label>
                    <Paragraph title={"假设前端在3000端口，服务端在4000端口，我们通过 webpack 配置的方式去实现跨域。"}></Paragraph>
                    <Paragraph title={"首先，我们在本地创建一个 server.js："}></Paragraph>
<CodeBlock content={
`let express = require('express');

let app = express();

app.get('/api/user', (req, res) => {
    res.json({name: '刘小夕'});
});

app.listen(4000);
`
}></CodeBlock>
                    <Paragraph title={"执行代码(run code)，现在我们可以在浏览器中访问到此接口: http://localhost:4000/api/user。"}></Paragraph>
                    <Paragraph title={"在 index.js 中请求 /api/user，修改 index.js 如下:"}></Paragraph>
<CodeBlock content={
`//需要将 localhost:3000 转发到 localhost:4000（服务端） 端口
fetch("/api/user")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
`
}></CodeBlock>
                    <Paragraph title={"我们希望通过配置代理的方式，去访问 4000 的接口。"}></Paragraph>
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={"配置代理"}></Paragraph>
                    <Paragraph title={"修改 webpack 配置:"}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //...
    devServer: {
        proxy: {
            "/api": "http://localhost:4000"
        }
    }
}
`
}></CodeBlock>
                    <Paragraph title={'重新执行 npm run dev，可以看到控制台打印出来了 {name: "刘小夕"}，实现了跨域。'}></Paragraph>
                    <Paragraph title={'大多情况，后端提供的接口并不包含  /api，即：/user，/info、/list 等，配置代理时，我们不可能罗列出每一个api。'}></Paragraph>
                    <Paragraph title={'修改我们的服务端代码，并重新执行。'}></Paragraph>
<CodeBlock content={
`//server.js
let express = require('express');

let app = express();

app.get('/user', (req, res) => {
    res.json({name: '刘小夕'});
});

app.listen(4000);
`
}></CodeBlock>
                    <Paragraph title={'尽管后端的接口并不包含 /api，我们在请求后端接口时，仍然以 /api 开头，在配置代理时，去掉 /api，修改配置:'}></Paragraph>
<CodeBlock content={
`//webpack.config.js
module.exports = {
    //...
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}
`
}></CodeBlock>
                    <Paragraph title={'重新执行 npm run dev，在浏览器中访问： http://localhost:3000/，控制台中也打印出了{name: "刘小夕"}，跨域成功.'}></Paragraph>
                    <Label title={'11.前端模拟数据'}></Label>
                    <Paragraph style={{background: '#eee', textIndent: 0}} title={'简单数据模拟'}></Paragraph>
<CodeBlock content={
`module.exports = {
    devServer: {
        before(app) {
            app.get('/user', (req, res) => {
                res.json({name: '刘小夕'})
            })
        }
    }
}
`
}></CodeBlock>
                    <Paragraph title={'在 src/index.js 中直接请求 /user 接口。'}></Paragraph>
<CodeBlock content={
`fetch("user")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));
`
}></CodeBlock>
                    <Paragraph style={{background: '#eee', textIndent: 0}} title={'使用 mocker-api mock数据接口'}></Paragraph>
                    <Paragraph title={'mocker-api 为 REST API 创建模拟 API。在没有实际 REST API 服务器的情况下测试应用程序时，它会很有用。'}></Paragraph>
                    <Paragraph title={'1.安装 mocker-api:'}></Paragraph>
<CodeBlock content={
`npm install mocker-api -D
`
}></CodeBlock>
                    <Paragraph title={'2.在项目中新建mock文件夹，新建 mocker.js.文件，文件如下:'}></Paragraph>
<CodeBlock content={
`module.exports = {
    'GET /user': {name: '刘小夕'},
    'POST /login/account': (req, res) => {
        const { password, username } = req.body
        if (password === '888888' && username === 'admin') {
            return res.send({
                status: 'ok',
                code: 0,
                token: 'sdfsdfsdfdsf',
                data: { id: 1, name: '刘小夕' }
            })
        } else {
            return res.send({ status: 'error', code: 403 })
        }
    }
}
`
}></CodeBlock>
                    <Paragraph title={'3.修改 webpack.config.base.js:'}></Paragraph>
<CodeBlock content={
`const apiMocker = require('mocker-api');
module.export = {
    //...
    devServer: {
        before(app){
            apiMocker(app, path.resolve('./mock/mocker.js'))
        }
    }
}
`
}></CodeBlock>
                    <Paragraph title={'这样，我们就可以直接在代码中像请求后端接口一样对mock数据进行请求。'}></Paragraph>
                    <Paragraph title={"4.重启 npm run dev，可以看到，控制台成功打印出来 {name: '刘小夕'}"}></Paragraph>
                    <Paragraph title={'5.我们再修改下 src/index.js，检查下POST接口是否成功'}></Paragraph>
<CodeBlock content={
`//src/index.js
fetch("/login/account", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: "admin",
        password: "888888"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
`
}></CodeBlock>
                    <Paragraph title={'可以在控制台中看到接口返回的成功的数据。'}></Paragraph>
                </div>
            </Container>
        )
    }
}

export default Webpack_deblocking_two;
