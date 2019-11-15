import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Nginx_introduction extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'nginx入门'} />
                    <Paragraph title={<p>本文属于翻译文章，原文链接为 <a href="http://nginx.org/en/docs/beginners_guide.html" target="_blank" rel="noopener noreferrer">nginx Beginner’s Guide。</a>是至今为止见过最好的 nginx 入门文章。额。。。没有之一。</p>}></Paragraph>
                    <Paragraph title={<p>这篇教程简单介绍了 nginx 并且讲解了一些 nginx 可以解决的简单任务。这里，我们假设 nginx 已经安装在读者的机器上。如果没有，可以看一下<a href="http://nginx.org/en/docs/install.html" target="_blank" rel="noopener noreferrer">如何安装 nginx</a>。这篇教程主要讲解的是如何启用和停止nginx，和重新加载配置，描述配置文件的基本结构和怎样搭建一个 nginx 静态辅助器，怎样配置 nginx 作为一个代理服务器来。</p>}></Paragraph>
                    <Paragraph title={<p>nginx 有一个主进程和其他子进程。主进程的主要工作是加载和执行配置文件，并且驻留子进程。子进程用来作为实际的请求处理。nginx 采取基于事件的模型和 OS 依赖的机制，在多个子进程之间高效的分配请求。子进程的个数会直接写在配置文件中并且，对于给定的配置可以是固定的，或者根据可用的 CPU 核数自动的进行调整（参考 <a href="http://nginx.org/en/docs/ngx_core_module.html#worker_processes" target="_blank" rel="noopener noreferrer">子进程</a>）。</p>}></Paragraph>
                    <Paragraph title={'nginx 和它模块的工作方式是在配置文件中写好的。默认情况下，这个配置文件通常命名为 nginx.conf 并且会放置在 /usr/local/nginx/conf，/etc/nginx，或者 /usr/local/etc/nginx。'}></Paragraph>
                    <Label title={'启用，停止和重载配置'} />
                    <Paragraph title={'运行可执行文件就可以开启 nginx，比如：'}></Paragraph>
<CodeBlock content={
`
// -c 为 nginx 的配置文件
nginx -c /usr/local/nginx/conf/nginx.conf
`} />
                    <Paragraph title={'如果，nginx 已经开启，那么它就可以通过使用 -s 参数的可执行命令控制。使用下列格式：'}></Paragraph>
<CodeBlock content={
`nginx -s signal
`} />
                    <Paragraph title={'signal 可以为下列命令之一：'}></Paragraph>
                    <ListItem list={['stop — 直接关闭 nginx', 'quit — 会在处理完当前正在的请求后退出，也叫优雅关闭', 'reload — 重新加载配置文件，相当于重启', 'reopen — 重新打开日志文件']} />
                    <Paragraph title={'比如，等待当前子进程处理完正在执行的请求后，结束 nginx 进程，可以使用下列命令：'}></Paragraph>
<CodeBlock content={
`nginx -s quit
`} />
                    <Paragraph title={'执行该命令的用户需要和启动的 nginx 的用户一致。'}></Paragraph>
                    <Paragraph title={'如果重载配置文件的命令没有传递给 nginx 或者 nginx 没有重启，那么配置文件的改动是不会被使用的。重载配置文件的命令可以使用：'}></Paragraph>
<CodeBlock content={
`nginx -s reload
`} />
                    <Paragraph title={'一旦主进程接收到重载配置文件的命令后，它会先检查配置文件语法的合法性，如果没有错误，则会重新加载配置文件。如果成功，则主进程会重新创建一个子进程并且发送关闭请求给以前的子进程。如果没有成功，主进程会回滚改动并且继续使用以前的配置。老的子进程在接受关闭的命令后，会停止接受新的请求并且继续处理当前的请求，直到处理完毕。之后，该子进程就直接退出了。'}></Paragraph>
                    <Paragraph title={'在 Unix 工具的帮助下，比如使用 kill 工具，该信号会被发送给 nginx 进程。在这种情况下，信号会被直接发送给带有进程 ID 的进程。nginx 的主进程的进程 ID 是写死在 nginx.pid 文件中的。该文件通常放在 /usr/local/nginx/logs 或者 /var/run目录下。比如，如果主进程的 ID 是 1628，为了发送 QUIT 信号来使 nginx 优雅退出，可以执行：'}></Paragraph>
<CodeBlock content={
`kill -s QUIT 1628
`} />
                    <Paragraph title={'为了得到所有正在运行的 nginx 进程，我们可能会使用到 ps 工具，比如，像下列的方式：'}></Paragraph>
<CodeBlock content={
`$ ps -ax | grep nginx
// 结果为：（下面是单核 CPU 的情况）
 516 pts/0    D+     0:00 grep --color=auto nginx
 1156 ?        S      1:22 nginx: worker process
27999 ?        Ss     0:00 nginx: master process ./nginx
`} />
                    <Paragraph title={<p>更多关于发送信号给 nginx，可以参考 <a href="http://nginx.org/en/docs/ngx_core_module.html#worker_processes" target="_blank" rel="noopener noreferrer">nginx 控制</a>。</p>}></Paragraph>
                    <Label title={'配置文件结构'} />
                    <Paragraph title={'nginx 是由一些模块组成，我们一般在配置文件中使用一些具体的指令来控制它们。指令被分为简单指令和块级命令。一个简单的指令是由名字和参数组成，中间用空格分开，并以分号结尾。例如：'}></Paragraph>
<CodeBlock content={
`// 简单指令
root /data/www;
`} />
                    <Paragraph title={<p>块级指令和简单指令一样有着类似的结构，但是末尾不是分号而是用 {' 和 '} 大括号包裹的额外指令集。如果一个块级指令的大括号里有其他指令，则它被叫做一个上下文（比如：<a href="http://nginx.org/en/docs/ngx_core_module.html#events" target="_blank" rel="noopener noreferrer">events</a>，<a href="http://nginx.org/en/docs/http/ngx_http_core_module.html#httph" target="_blank" rel="noopener noreferrer">http</a>，<a href="http://nginx.org/en/docs/http/ngx_http_core_module.html#servers" target="_blank" rel="noopener noreferrer">server</a>，和 <a href="http://nginx.org/en/docs/http/ngx_http_core_module.html#location" target="_blank" rel="noopener noreferrer">location</a>）。</p>}></Paragraph>
                    <Paragraph title={'在配置文件中，没有放在任何上下文中的指令都是处在主上下文中。events 和 http 的指令是放在主上下文中，server 放在 http 中, location 放在 server 中。'}></Paragraph>
                    <Paragraph title={'以 # 开头的行，会被当做注释。'}></Paragraph>
<CodeBlock content={
`# this is a comment
events {
    worker_connections  4096;  ## Default: 1024
}

http {
    server { 
        listen       80;
        server_name  domain1.com www.domain1.com;
        access_log   logs/domain1.access.log  main;
        root         html;

        location ~ \\.php$ {
        fastcgi_pass   127.0.0.1:1025;
        }
    }
}
`} />
                    <Label title={'静态服务器'} />
                    <Paragraph title={'一个重要的网络服务器的任务是处理文件（比如图片或者静态 HTML 文件）。这里，你会实践一个例子，文件会从不同的目录中映射（取决于请求）：/data/www（放置 HTML 文件）和 /data/images（放置图片）。这需要配置一下文件，将带有两个 location 的指令的 server 的块级命令放在 server 指令中。'}></Paragraph>
                    <Paragraph title={'首先，创建一个 /data/www 目录，然后放置一个事先写好内容的 index.html 文件。接着，创建一个 /data/images 目录，然后放置一些图片。'}></Paragraph>
                    <Paragraph title={'下一步，打开配置文件。默认的配置文件已经包含了一些关于 server 指令的样式，大多数情况下直接把他们给注释掉。现在，注释掉其他的区块，然后写一个新的 server 区块：'}></Paragraph>
<CodeBlock content={
`http {
    server {
    }
}
`} />
                    <Paragraph title={'通常，该配置文件可能会包含多个 server 指令。这些 server 指令监听不同的端口和服务器名。一旦 nginx 决定哪个服务进程处理请求，它会根据在 server 块级指令中定义好的 location 指令的参数，来匹配请求头中指定的 URI。'}></Paragraph>
                    <Paragraph title={'将下列 location 指令添加到 server 指令中：'}></Paragraph>
<CodeBlock content={
`location / {
    root /data/www;
}
`} />
                    <Paragraph title={'该 location 指令相对于请求中的 URI 执行了 “/” 的前缀。为了匹配请求，URI 会被添加到 root 命令指定的路径后，即 /data/www，得到本地文件系统中请求文件的路径。如果，有几个 location 匹配到，那么 nginx 会选择最长的前缀。上面的 location 提供了长度为 1 的前缀，所以，仅当其他的 location 匹配失败后，该指令才会使用。'}></Paragraph>
                    <Paragraph title={'接着，添加第二个 location 区块：'}></Paragraph>
<CodeBlock content={
`location /images/ {
    root /data;
}
`} />
                    <Paragraph title={'它会匹配到以 /images/ 开头的请求（location / 也会匹配到该请求，只是前缀更短）server 块级命令的配置结果如下：'}></Paragraph>
                    
<CodeBlock content={
`server {
    location / {
        root /data/www;
    }

    location /images/ {
        root /data;
    }
}
`} />
                    <Paragraph title={'这已经是一个可用的服务器配置，它监听标准的 80 端口并且可以在本地上通过 http://localhost/ 访问。对于 URI 以 /images/ 开头的请求，服务器会从 /data/images 目录中，返回对应的文件。例如，nginx 会返回 /data/images/example.png 文件，当接收到 http://localhost/images/example.png 的请求响应时。如果该文件不存在，nginx 会返回一个 404 错误的响应。没有以 /images/ 开头的 URI 的请求，将会直接映射到 /data/www 目录中。比如，响应 http://localhost/some/example.html 的请求，nginx 会发送 /data/www/some/example.html 文件。'}></Paragraph>
                    <Paragraph title={'为了使用新的配置文件，如果还没开启 nginx 需要先开启，然后将重载信号发送给 nginx 的主进程，通过执行：'}></Paragraph>
<CodeBlock content={
`nginx -s reload
`} />
                    <Paragraph title={'如果你发现有些地方出了问题，你可以在 /usr/local/nginx/logs 或者 /var/log/nginx 目录下的 access.log 和 error.log 文件中，找到原因。'}></Paragraph>
                    <Label title={'搭建一个简易的代理服务'} />
                    <Paragraph title={'nginx 常常用来作为代理服务器，这代表着服务器接收请求，然后将它们传递给被代理服务器，得到请求的响应，再将它们发送给客户端。'}></Paragraph>
                    <Paragraph title={'我们将配置一个基本的代理服务器，它会处理本地图片文件的请求并返回其他的请求给被代理的服务器。在这个例子中，两个服务器都会定义在一个 nginx 实例中。'}></Paragraph>
                    <Paragraph title={'首先，通过在 nginx 配置文件中添加另一个 server 区块，来定义一个被代理的服务器，像下面的配置：'}></Paragraph>
<CodeBlock content={
`server {
    listen 8080;
    root /data/up1;

    location / {
    }
}
`} />
                    <Paragraph title={'上面就是一个简单的服务器，它监听在 8080 端口（之前，listen 并没被定义，是因为默认监听的 80 端口）并且会映射所有的请求给 本地文件目录 /data/up1。创建该目录，然后添加 index.html 文件。注意，root 指令是放在 server 上下文中。当响应请求的 location 区块中，没有自己的 root 指令，上述的 root指令才会被使用。'}></Paragraph>
                    <Paragraph title={<p>接着，使用前面章节中的 server 配置，然后将它改为一个代理服务配置。在第一个 location 区块中，放置已经添加被代理服务器的协议，名字和端口等参数的 <a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass" target="_blank" rel="noopener noreferrer">proxy_pass</a> 指令（在这里，就是 http://localhost:8080）:</p>}></Paragraph>
<CodeBlock content={
`server {
    location / {
        proxy_pass http://localhost:8080;
    }

    location /images/ {
        root /data;
    }
}
`} />
                    <Paragraph title={'我们将修改第二个 location 区块，使他返回一些典型后缀的图片文件请求，现在它只会映射带有 /images/ 前缀的请求到 /data/images 目录下。修改后的 location 指令如下：'}></Paragraph>
<CodeBlock content={
`location ~ \\.(gif|jpg|png)$ {
    root /data/images;
}
`} />
                    <Paragraph title={'该参数是一个正则表达式，它会匹配所有以 .gif，.jpg 或者 .png 结尾的 URIs。一个正则表达式需要以 ~ 开头。匹配到的请求会被映射到 /data/images目录下。'}></Paragraph>
                    <Paragraph title={'当 nginx 在选择 location 去响应一个请求时，它会先检测带有前缀的 location指令，记住先是检测带有最长前缀的 location，然后检测正则表达式。如果有一个正则的匹配的规则，nginx 会选择该 location，否则，会选择之前缓存的规则。'}></Paragraph>
                    <Paragraph title={'最终，一个代理服务器的配置结果如下：'}></Paragraph>
<CodeBlock content={
`server {
    location / {
        proxy_pass http://localhost:8080/;
    }

    location ~ \\.(gif|jpg|png)$ {
        root /data/images;
    }
}
`} />
                    <Paragraph title={'该服务器会选择以 .gif，.jpg，或者 .png 结束的请求并且映射到 /data/images 目录（通过添加 URI 给 root 指令的参数），接着将其他所有的请求映射到上述被代理的服务器。为了使用新的配置，像前几个章节描述的一样，需要向 nginx 发送重载信号。'}></Paragraph>
                    <Paragraph title={<p>这还有很多其<a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html" target="_blank" rel="noopener noreferrer">他的指令</a>，可以用于进一步配置代理连接。</p>}></Paragraph>
                </div>
            </Container>
        )
    }
}

export default Nginx_introduction;
