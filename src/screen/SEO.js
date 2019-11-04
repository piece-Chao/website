import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Title, Paragraph, Label } from '@/components/SubComponent';

class SEO extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title="作为前端，你不得不知道的搜索引擎优化" />
                    <Paragraph title={'研发的同学，其实很多人并没有深入了解SEO这个概念。在技术博客里，提及这一块的也寥寥无几。我今天就拿自己的经验，简单给大家扫个盲，有什么遗漏的地方，欢迎大家补充。'} />
                    <Label title={'什么是SEO：'} />
                    <Paragraph title={'以下内容摘自百度百科：'} />
                    <Paragraph style={{background: '#eee', fontSize: '12px', padding: '0 4px'}} title={'SEO（Search Engine Optimization）:汉译为搜索引擎优化。搜索引擎优化是一种利用搜索引擎的搜索规则来提高目前网站在有关搜索引擎内的自然排名的方式。SEO是指为了从搜索引擎中获得更多的免费流量，从网站结构、内容建设方案、用户互动传播、页面等角度进行合理规划，使网站更适合搜索引擎的索引原则的行为。'} />
                    <Label title={'SEO原理'} />
                    <Paragraph title={'其实搜索引擎做的工作是相当复杂的，我们这里简单说一下大致的过程。后续针对SEO如何优化，也会根据这几个点展开描述。'} />
                    <Paragraph style={{fontWeight: 700}} title={'页面抓取： 蜘蛛向服务器请求页面，获取页面内容'} />
                    <Paragraph style={{fontWeight: 700}} title={'分析入库：对获取到的内容进行分析，对优质页面进行收录'} />
                    <Paragraph style={{fontWeight: 700}} title={'检索排序：当用户检索关键词时，从收录的页面中按照一定的规则进行排序，并返回给用户结果'} />
                    <Label title={'SEO优化'} />
                    <Paragraph title={'既然是优化，那我们就得遵循SEO的原理来做，可谓知己知彼，百战不殆。针对上面提出的三点，我们分别展开叙述。我们这里主要以百度蜘蛛举例。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'页面抓取'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'一：提交页面。提交页面又分为几种不同的方式'} />
                    <Paragraph style={{textIndent: '1em'}} title={'1. sitemap提交。sitemap，顾名思义，就是网站地图，当蜘蛛来到我们的网站时，告诉它我们有多少页面，不同页面是按什么分类的，每个页面的地址是什么。顺着我们的指引，蜘蛛会很轻松的爬遍所有内容。另外，如果你的页面分类比较多，而且数量大，建议添加sitemap索引文件。如果站点经常更新添加新页面，建议及时更新sitemap文件；'} />
                    <Paragraph style={{textIndent: '1em'}} title={'2. 主动提交。就是把你的页面直接丢给百度的接口，亲口告诉百度你有哪些页面，这是效率最高也是收录最快的方式了。但是需要注意，百度对每天提交的数量是有限制的，而且反复提交重复的页面，会被降低每日限额，所以已被收录的页面不建议反复提交。收录有个时间过程，请先耐心等待；'} />
                    <Paragraph style={{textIndent: '1em'}} title={'3. 实时提交。在页面中安装百度给的提交代码，当这个页面被用户打开我，便自动把这个页面提交给百度。这里不需要考虑重复提交的问题。 以上几种提交方式可以同时使用，互不冲突。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'二：保证我们的页面是蜘蛛可读的。'} />
                    <Paragraph style={{textIndent: '1em'}} title={'1. 早在ajax还没流行的的时候，其实SEO对于前端的要求并没有很多，或者说，那个时候还没有前端这个职业。页面全部在服务器端由渲染好，不管是用户还是蜘蛛过来，都能很友好的返回html。ajax似乎原本是为了避免有数据交互导致必须重刷页面设计的，但是被大规模滥用，一些开发者不管三七二十一，所有数据都用ajax请求，使得蜘蛛不能顺利的获取页面内容。庆幸的是这反倒促进了前端的飞速发展。'} />
                    <Paragraph style={{textIndent: '1em'}} title={'2. 到了后来，各种SPA单页应用框架的出现，使得前端开发者不再需要关心页面的DOM结构，只需专注业务逻辑，数据全部由Javascript发ajax请求获取数据，然后在客户端进行渲染。这也就导致了老生常谈的SEO问题。百度在国内搜索引擎的占有率最高，但是很不幸，它并不支持ajax数据的爬取。于是，开发者开始想别的解决方案，比如检测到是爬虫过来，单独把它转发到一个专门的路由去渲染，比如基于Node.js的Jade引擎（现在改名叫Pug了），就能很好地解决这个问题。React和Vue，包括一个比较小众的框架Marko也出了对应的服务端渲染解决方案。详细内容查看对应文档，我就不多说了。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'三：URL与301'} />
                    <Paragraph style={{textIndent: '1em'}} title={'1. URL设置要合理规范，层次分明。如果网站到了后期发现URL不合理需要重新替换时，会导致之前收录的页面失效，就是我们所说的死链（这种情况属于死链的一种，404等也属于死链）。所以一定要在网站建设初期就做好长远的规划。一旦出现这种情况也不要过于担心，我们可以采取向搜索引擎投诉或者设置301跳转的方式解决。'} />
                    <Paragraph style={{textIndent: '1em'}} title={'1. URL层级嵌套不要太深，建议不超过四层。增加面包屑导航可以使页面层次分明，也有利于为蜘蛛营造顺利的爬取路径。'} />
                    <Paragraph style={{textIndent: '1em'}} title={'1. 除此之外，将指向首页的域名全部设置301跳转到同一URL，可以避免分散权重。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'分析入库'} />
                    <Paragraph title={'当蜘蛛把页面抓取回去之后，就需要对页面内容进行分析，并择优收录入库。为什么说是择优呢？下面我给你慢慢分析。'} />
                    <Paragraph title={'搜索引擎的目的是给用户提供高质量的、精准的搜索结果。如果整个页面充斥着满满的广告和各种不良信息，这无疑会很大程度上影响用户体验。'} />
                    <Paragraph title={'除此之外，你肯定不希望自己辛辛苦苦创作的文章被别人轻而易举的抄走，所以搜索引擎在一定程度上帮助你避免这种情况的发生。对于已经收录的内容，搜索引擎会降低其权重，甚至直接不收录这个页面。即便是这样，为了保证页面的新鲜度，很多网站都会爬取或者转载其他网站的内容。这就是我们经常听到的伪原创。所以，想要让你的页面能够以较高的权重被收录，就需要坚持更新网站内容，并且是高质量的原创内容。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'检索排序'} />
                    <Paragraph title={'这块我的理解是，页面被收录后，会给每个页面打一些tag。这些tag将作为搜索结果排序的重要依据。比如用户搜索“北京旅游”，搜索引擎会检索收录页面中被打了“北京旅游”tag的页面，并根据一系列规则进行排序。所以，如何提升这些tag在搜索引擎里面的权重是至关重要的。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'1. TDK优化'} />
                    <Paragraph style={{background: '#eee', fontSize: '12px', padding: '0 4px'}} title={'TDK是个缩写，seo页面中的页面描述与关键词设置。'} />
                    <Paragraph style={{background: '#eee', fontSize: '12px', padding: '0 4px'}} title={'其中"T"代表页头中的title元素，这里可能还要利用到分词技术，当标题(Title)写好后，我们就尽可> 能不要再去修改了，尽量简洁，没意义的词尽量不要加入到标题中，避免干扰到搜索引擎识别网站主题。'} />
                    <Paragraph style={{background: '#eee', fontSize: '12px', padding: '0 4px'}} title={'其中"D"代表页头中的description元素，要知道描述是对网页的一个概述，也是对title的补充，因为title中只能书写有限的字数，所以在description中就要稍微详细的补充起来，一般用一句两句话概括文章的内容。'} />
                    <Paragraph style={{background: '#eee', fontSize: '12px', padding: '0 4px'}} title={'其中"K"代表页头中的keywords元素，提取页面中的主要关键词，数量控制在三到六个内。想方设法让主关键字都出现。'} />
                    <Paragraph title={'以上内容摘自百度百科，这里需要补充几点。'} />
                    <Paragraph title={'TDK是搜索引擎判断页面主题内容的关键，所以要在title里面言简意赅的体现出页面的主要内容，如果主体比较多，可以用一些符号把不同的主题词隔开，但是关键词不要太多，最多不要超过五个。'} />
                    <Paragraph title={'keywords里面把每个关键词用英文逗号隔开，三到五个最佳。尽量覆盖每个关键词。'} />
                    <Paragraph title={'description就是用自然语言描述页面的主要内容，这里注意一点就是把每个关键词至少覆盖一遍才能达到最佳效果。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'2. 提升页面关键词密度'} />
                    <Paragraph title={'首先说个概念，叫关键词密度。简单理解就是关键词在所有文字内容中出现的比例。提升关键词的密度，有利于提升搜索引擎针对对应关键词的搜索排名。但并不是我们整个页面密密麻麻堆砌关键次就好，我们来分析一个案例。'} />
                    <Paragraph title={'我们在百度搜索“北京旅游”，排在第一的是百度旅游，这个就不解释了。排第二位是携程，我们就分析一下为啥携程会排名这么靠前。'} />
                    <img alt="" style={{width: '100%'}} src="https://user-gold-cdn.xitu.io/2018/6/1/163ba72de84952e8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" />
                    <Paragraph title={'通过查看百度快照，可以一目了然的看到页面上究竟哪些地方命中了这些词。'} />
                    <Paragraph title={'页面头部'} />
                    <img alt="" style={{width: '100%'}} src="https://user-gold-cdn.xitu.io/2018/6/1/163ba731e1b76545?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" />
                    <Paragraph title={'页面底部'} />
                    <img alt="" style={{width: '100%'}} src="https://user-gold-cdn.xitu.io/2018/6/1/163ba73524d92e82?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" />
                    <Paragraph title={'页面很清晰表明了关键词出现的地方，我们发现这个页面除了正文部分外，还设置了许多的模块，这些模块看似只是一些简单的链接，实际上他们更重要的使命就是服务SEO，提升关键词的密度。同时，这些链接都是指向网站内部的链接，通过这样的方式，还可以在不同的页面之间相互投权重。可以说小链接，大学问！'} />
                    <Paragraph title={'你以为到此结束了？并没有。请仔细观察页面上这些模块的内容设置。分别覆盖了地区、景点、攻略、导航、住宿、交通等等，可以说是涵盖了你要旅游所需要的任何需求。这样一来，不管你搜哪些有关于“北京旅游”的关键词，比如“北京旅游住宿”，“北京特色美食”等都会命中这个页面的词，这使得这个页面的关键词数量得到提升，更容易得到曝光。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'3. 细枝末节但不可忽视的优化'} />
                    <Paragraph title={'页面上经常会有各种图片，对于搜索引擎来说，它是不识别图片上的内容的。你可能知道代码中img标签的alt属性是为了图片加载失败的时候，给用户看的。这个属性表明了这张图的内容。其实搜索引擎在分析页面的时候，也会根据这个词去判断图片的内容，所以要给页面上有意义的图片都加上alt属性，写清楚图片索要反映的内容。'} />
                    <Paragraph title={'页面上的出站链接（也就是指向别的网站的A标签），我们要给它加上nofollow标签，避免它向别的网站输出权重。百度蜘蛛会忽略加了nofollow	的链接。你也可以在网页的meta标签里这么写<meta name="robots" content="nofollow" />，这样一来，百度蜘蛛将不追踪页面上的所有链接，但不建议这么做，除非这个页面的所有链接都指向了别的域名。'} />
                    <Paragraph title={'......'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'其他优化点'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'友情链接'} />
                    <Paragraph title={'我们经常会在页面底部看到友情链接。友情链接是作为网站之间相互交换流量，互惠互利的合作形式。事实上，友情链接对网站权重提升有着至关重要的作用。友链不仅可以引导用户浏览，而且搜索引擎也会顺着链接形成循环爬取，可以有效提升网站流量和快照的更新速度。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'关键词筛选'} />
                    <Paragraph title={'借助站长工具、爱站网或者各种站长后台我们可以分析出ip来路，以及关键词的搜索热度和相关词，我们再把这些词以一定的密度添加到页面中，以此来提升命中率。这里主要是运营同学的工作，我不专业，也就不展开说了，更多功能大家自行摸索。'} />
                    <Paragraph style={{fontWeight: 700, textIndent: 0}} title={'利用好分析工具'} />
                    <Paragraph title={'我们要在自己的站点安装百度统计代码，这样就可以分析出站点内用户的关注度和浏览流程，以此来不断优化站点结构，提升用户的留存率。同时也可以做用户画像，分析用户数据等等。'} />
                    <Label title={'结语'} />
                    <Paragraph title={'想要做好SEO并不是一件简单的事，需要持之以恒，面面俱到。对网站持续关注，并保持更新。从长远打算，切不可投机取巧，只图一时的效果做违背搜索引擎的操作，也就是常说的黑帽SEO，否则被百度K掉就得不偿失了。'} />
                </div>
            </Container>
        )
    }
}

export default SEO;
