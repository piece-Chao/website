import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class File_Continuingly extends React.Component {
    render() {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title="文件断点续传" />
                    <Paragraph title={'早就听说过断点续传这种东西，前端也可以实现一下 断点续传在前端的实现主要依赖着HTML5的新特性，所以一般来说在老旧浏览器上支持度是不高的 本文通过断点续传的简单例子（前端文件提交+后端PHP文件接收），理解其大致的实现过程'} />
                    <Paragraph title={'还是先以图片为例，看看最后的样子'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/file_upload1.gif')} alt="file_upload1"/>
                    <Label title={'一些知识准备'} />
                    <Paragraph title={'断点续传，既然有断，那就应该有文件分割的过程，一段一段的传。'} />
                    <Paragraph title={'以前文件无法分割，但随着HTML5新特性的引入，类似普通字符串、数组的分割，我们可以可以使用slice方法来分割文件。'} />
                    <Paragraph title={'所以断点续传的最基本实现也就是：前端通过FileList对象获取到相应的文件，按照指定的分割方式将大文件分段，然后一段一段地传给后端，后端再按顺序一段段将文件进行拼接。'} />
                    <Paragraph title={'而我们需要对FileList对象进行修改再提交，在之前的文章中知晓了这种提交的一些注意点，因为FileList对象不能直接更改，所以不能直接通过表单的.submit()方法上传提交，需要结合FormData对象生成一个新的数据，通过Ajax进行上传操作。'} />
                    <Label title={'实现过程'} />
                    <Paragraph title={'这个例子实现了文件断点续传的基本功能，不过手动的“暂停上传”操作还未实现成功，可以在上传过程中刷新页面来模拟上传的中断，体验“断点续传”、'} />
                    <Paragraph title={'有可能还有其他一些小bug，但基本逻辑大致如此'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'1. 前端实现'} />
                    <Paragraph title={'首先选择文件，列出选中的文件列表信息，然后可以自定义的做上传操作'} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'1）所以先设置好页面DOM结构'} />
<CodeBlock content={
`<!-- 上传的表单 -->
<form method="post" id="myForm" action="/fileTest.php" enctype="multipart/form-data">
    <input type="file" id="myFile" multiple>
    <!-- 上传的文件列表 -->
    <table id="upload-list">
        <thead>
            <tr>
                <th width="35%">文件名</th>
                <th width="15%">文件类型</th>
                <th width="15%">文件大小</th>
                <th width="20%">上传进度</th>
                <th width="15%">
                    <input type="button" id="upload-all-btn" value="全部上传">
                </th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</form>
<!-- 上传文件列表中每个文件的信息模版 -->
<script type="text/template" id="file-upload-tpl">
    <tr>
        <td>{{fileName}}</td>
        <td>{{fileType}}</td>
        <td>{{fileSize}}</td>
        <td class="upload-progress">{{progress}}</td>
        <td>
            <input type="button" class="upload-item-btn"  data-name="{{fileName}}" data-size="{{totalSize}}" data-state="default" value="{{uploadVal}}">
        </td>
    </tr>
</script>
`} />
                    <Paragraph title={'这里一并将CSS样式扔出来'} />
<CodeBlock content={
`<style type="text/css">
body {
    font-family: Arial;
}
form {
    margin: 50px auto;
    width: 600px;
}

input[type="button"] {
    cursor: pointer;
}
table {
    display: none;
    margin-top: 15px;
    border: 1px solid #ddd;
    border-collapse: collapse;
}

table th {
    color: #666;
}
table td,
table th {
    padding: 5px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 14px;
}
</style>`} />
                    <Paragraph style={{textIndent: 0, fontWeight: 700}} title={'2）接下来是JS的实现解析'} />
                    <Paragraph title={'通过FileList对象我们能获取到文件的一些信息'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/fileUpload2.png')} alt="file_upload1"/>
                    <Paragraph title={'其中的size就是文件的大小，文件的分分割分片需要依赖这个'} />
                    <Paragraph title={'这里的size是字节数，所以在界面显示文件大小时，可以这样转化'} />
<CodeBlock content={
`// 计算文件大小
size = file.size > 1024
    ? file.size / 1024  > 1024
    ? file.size / (1024 * 1024) > 1024
    ? (file.size / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
    : (file.size / (1024 * 1024)).toFixed(2) + 'MB'
    : (file.size / 1024).toFixed(2) + 'KB'
    : (file.size).toFixed(2) + 'B';            
选择文件后显示文件的信息，在模版中替换一下数据

// 更新文件信息列表
uploadItem.push(uploadItemTpl
    .replace(/{{fileName}}/g, file.name)
    .replace('{{fileType}}', file.type || file.name.match(/\\.\\w+$/) + '文件')
    .replace('{{fileSize}}', size)
    .replace('{{progress}}', progress)
    .replace('{{totalSize}}', file.size)
    .replace('{{uploadVal}}', uploadVal)
);  `} />
                    <Paragraph title={'不过，在显示文件信息的时候，可能这个文件之前之前已经上传过了，为了断点续传，需要判断并在界面上做出提示'} />
                    <Paragraph title={'通过查询本地看是否有相应的数据（这里的做法是当本地记录的是已经上传100%时，就直接是重新上传而不是继续上传了）'} />
<CodeBlock content={
`// 初始通过本地记录，判断该文件是否曾经上传过
percent = window.localStorage.getItem(file.name + '_p');

if (percent && percent !== '100.0') {
    progress = '已上传 ' + percent + '%';
    uploadVal = '继续上传';
}`} />
                    <Paragraph title={'显示了文件信息列表'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/fileUpload3.png')} alt="file_upload1"/>
                    <Paragraph title={'点击开始上传，可以上传相应的文件'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/fileUpload4.png')} alt="file_upload1"/>
                    <Paragraph title={'上传文件的时候需要就将文件进行分片分段'} />
                    <Paragraph title={'比如这里配置的每段1024B，总共chunks段（用来判断是否为末段），第chunk段，当前已上传的百分比percent等'} />
                    <Paragraph title={'需要提一下的是这个暂停上传的操作，其实我还没实现出来，暂停不了无奈ing...'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/fileUpload5.png')} alt="file_upload1"/>
                    <img style={{width: '100%'}} src={require('@/assets/images/fileUpload6.png')} alt="file_upload1"/>
                    <Paragraph title={'接下来是分段过程'} />
<CodeBlock content={
`// 设置分片的开始结尾
var blobFrom = chunk * eachSize, // 分段开始
    blobTo = (chunk + 1) * eachSize > totalSize ? totalSize : (chunk + 1) * eachSize, // 分段结尾
    percent = (100 * blobTo / totalSize).toFixed(1), // 已上传的百分比
    timeout = 5000, // 超时时间
    fd = new FormData($('#myForm')[0]);

    fd.append('theFile', findTheFile(fileName).slice(blobFrom, blobTo)); // 分好段的文件
    fd.append('fileName', fileName); // 文件名
    fd.append('totalSize', totalSize); // 文件总大小
    fd.append('isLastChunk', isLastChunk); // 是否为末段
    fd.append('isFirstUpload', times === 'first' ? 1 : 0); // 是否是第一段（第一次上传）// 上传之前查询是否以及上传过分片
    chunk = window.localStorage.getItem(fileName + '_chunk') || 0;
    chunk = parseInt(chunk, 10);
    文件应该支持覆盖上传，所以如果文件以及上传完了，现在再上传，应该重置数据以支持覆盖（不然后端就直接追加blob数据了）

　　　// 如果第一次上传就为末分片，即文件已经上传完成，则重新覆盖上传
if (times === 'first' && isLastChunk === 1) {
    window.localStorage.setItem(fileName + '_chunk', 0);
    chunk = 0;
    isLastChunk = 0;
}`} />
                    <Paragraph title={'这个times其实就是个参数，因为要在上一分段传完之后再传下一分段，所以这里的做法是在回调中继续调用这个上传操作'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/fileUpload7.png')} alt="file_upload1"/>
                    <Paragraph title={'接下来就是真正的文件上传操作了，用Ajax上传，因为用到了FormData对象，所以不要忘了在$.ajax({}加上这个配置processData: false'} />
                    <Paragraph title={'上传了一个分段，通过返回的结果判断是否上传完毕，是否继续上传'} />
<CodeBlock content={
`success: function(rs) {
    rs = JSON.parse(rs);

    // 上传成功
    if (rs.status === 200) {
        // 记录已经上传的百分比
        window.localStorage.setItem(fileName + '_p', percent);

        // 已经上传完毕
        if (chunk === (chunks - 1)) {
            $progress.text(msg['done']);
            $this.val('已经上传').prop('disabled', true).css('cursor', 'not-allowed');
            if (!$('#upload-list').find('.upload-item-btn:not(:disabled)').length) {
                $('#upload-all-btn').val('已经上传').prop('disabled', true).css('cursor', 'not-allowed');
            }
        } else {
            // 记录已经上传的分片
            window.localStorage.setItem(fileName + '_chunk', ++chunk);

            $progress.text(msg['in'] + percent + '%');
            // 这样设置可以暂停，但点击后动态的设置就暂停不了..
            // if (chunk == 10) {
            //     isPaused = 1;
            // }
            console.log(isPaused);
            if (!isPaused) {
                startUpload();
            }

        }
    }
    // 上传失败，上传失败分很多种情况，具体按实际来设置
    else if (rs.status === 500) {
        $progress.text(msg['failed']);
    }
},
error: function() {
    $progress.text(msg['failed']);
}`} />
                    <Paragraph title={'继续下一分段的上传时，就进行了递归操作，按顺序地上传下一分段'} />
                    <Paragraph title={'截个图..'} />
                    <img style={{width: '100%'}} src={require('@/assets/images/fileUpload8.png')} alt="file_upload1"/>
                    <Paragraph title={'这是完整的JS逻辑，代码有点儿注释了应该不难看懂吧哈哈'} />
<CodeBlock content={
`1     <script type="text/javascript" src="jquery.js"></script>
2         <script type="text/javascript">
3             // 全部上传操作
4             $(document).on('click', '#upload-all-btn', function() {
5                 // 未选择文件
6                 if (!$('#myFile').val()) {
7                     $('#myFile').focus();
8                 }
9                 // 模拟点击其他可上传的文件
10                 else {
11                     $('#upload-list .upload-item-btn').each(function() {
12                         $(this).click();
13                     });
14                 }
15             });
16 
17             // 选择文件-显示文件信息
18             $('#myFile').change(function(e) {
19                 var file,
20                     uploadItem = [],
21                     uploadItemTpl = $('#file-upload-tpl').html(),
22                     size,
23                     percent,
24                     progress = '未上传',
25                     uploadVal = '开始上传';
26 
27                 for (var i = 0, j = this.files.length; i < j; ++i) {
28                     file = this.files[i];
29 
30                     percent = undefined;
31                     progress = '未上传';
32                     uploadVal = '开始上传';
33 
34                     // 计算文件大小
35                     size = file.size > 1024
36                         ? file.size / 1024  > 1024
37                         ? file.size / (1024 * 1024) > 1024
38                         ? (file.size / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
39                         : (file.size / (1024 * 1024)).toFixed(2) + 'MB'
40                         : (file.size / 1024).toFixed(2) + 'KB'
41                         : (file.size).toFixed(2) + 'B';
42 
43                     // 初始通过本地记录，判断该文件是否曾经上传过
44                     percent = window.localStorage.getItem(file.name + '_p');
45 
46                     if (percent && percent !== '100.0') {
47                         progress = '已上传 ' + percent + '%';
48                         uploadVal = '继续上传';
49                     }
50 
51                     // 更新文件信息列表
52                     uploadItem.push(uploadItemTpl
53                         .replace(/{{fileName}}/g, file.name)
54                         .replace('{{fileType}}', file.type || file.name.match(/\\.\\w+$/) + '文件')
55                         .replace('{{fileSize}}', size)
56                         .replace('{{progress}}', progress)
57                         .replace('{{totalSize}}', file.size)
58                         .replace('{{uploadVal}}', uploadVal)
59                     );
60                 }
61 
62                 $('#upload-list').children('tbody').html(uploadItem.join(''))
63                     .end().show();
64             });
65 
66             /**
67              * 上传文件时，提取相应匹配的文件项
68              * @param  {String} fileName   需要匹配的文件名
69              * @return {FileList}          匹配的文件项目
70              */
71             function findTheFile(fileName) {
72                 var files = $('#myFile')[0].files,
73                     theFile;
74 
75                 for (var i = 0, j = files.length; i < j; ++i) {
76                     if (files[i].name === fileName) {
77                         theFile = files[i];
78                         break;
79                     }
80                 }
81 
82                 return theFile ? theFile : [];
83             }
84 
85             // 上传文件
86             $(document).on('click', '.upload-item-btn', function() {
87                 var $this = $(this),
88                     state = $this.attr('data-state'),
89                     msg = {
90                         done: '上传成功',
91                         failed: '上传失败',
92                         in: '上传中...',
93                         paused: '暂停中...'
94                     },
95                     fileName = $this.attr('data-name'),
96                     $progress = $this.closest('tr').find('.upload-progress'),
97                     eachSize = 1024,
98                     totalSize = $this.attr('data-size'),
99                     chunks = Math.ceil(totalSize / eachSize),
100                     percent,
101                     chunk,
102                     // 暂停上传操作
103                     isPaused = 0;
104 
105                 // 进行暂停上传操作
106                 // 未实现，这里通过动态的设置isPaused值并不能阻止下方ajax请求的调用
107                 if (state === 'uploading') {
108                     $this.val('继续上传').attr('data-state', 'paused');
109                     $progress.text(msg['paused'] + percent + '%');
110                     isPaused = 1;
111                     console.log('暂停：', isPaused);
112                 }
113                 // 进行开始/继续上传操作
114                 else if (state === 'paused' || state === 'default') {
115                     $this.val('暂停上传').attr('data-state', 'uploading');
116                     isPaused = 0;
117                 }
118 
119                 // 第一次点击上传
120                 startUpload('first');
121 
122                 // 上传操作 times: 第几次
123                 function startUpload(times) {
124                     // 上传之前查询是否以及上传过分片
125                     chunk = window.localStorage.getItem(fileName + '_chunk') || 0;
126                     chunk = parseInt(chunk, 10);
127                     // 判断是否为末分片
128                     var    isLastChunk = (chunk == (chunks - 1) ? 1 : 0);
129 
130                     // 如果第一次上传就为末分片，即文件已经上传完成，则重新覆盖上传
131                     if (times === 'first' && isLastChunk === 1) {
132                         window.localStorage.setItem(fileName + '_chunk', 0);
133                         chunk = 0;
134                         isLastChunk = 0;
135                     }
136 
137                     // 设置分片的开始结尾
138                     var    blobFrom = chunk * eachSize, // 分段开始
139                         blobTo = (chunk + 1) * eachSize > totalSize ? totalSize : (chunk + 1) * eachSize, // 分段结尾
140                         percent = (100 * blobTo / totalSize).toFixed(1), // 已上传的百分比
141                         timeout = 5000, // 超时时间
142                         fd = new FormData($('#myForm')[0]);
143 
144                     fd.append('theFile', findTheFile(fileName).slice(blobFrom, blobTo)); // 分好段的文件
145                     fd.append('fileName', fileName); // 文件名
146                     fd.append('totalSize', totalSize); // 文件总大小
147                     fd.append('isLastChunk', isLastChunk); // 是否为末段
148                     fd.append('isFirstUpload', times === 'first' ? 1 : 0); // 是否是第一段（第一次上传）
149 
150                     // 上传
151                     $.ajax({
152                         type: 'post',
153                         url: '/fileTest.php',
154                         data: fd,
155                         processData: false,
156                         contentType: false,
157                         timeout: timeout,
158                         success: function(rs) {
159                             rs = JSON.parse(rs);
160 
161                             // 上传成功
162                             if (rs.status === 200) {
163                                 // 记录已经上传的百分比
164                                 window.localStorage.setItem(fileName + '_p', percent);
165 
166                                 // 已经上传完毕
167                                 if (chunk === (chunks - 1)) {
168                                     $progress.text(msg['done']);
169                                     $this.val('已经上传').prop('disabled', true).css('cursor', 'not-allowed');
170                                     if (!$('#upload-list').find('.upload-item-btn:not(:disabled)').length) {
171                                         $('#upload-all-btn').val('已经上传').prop('disabled', true).css('cursor', 'not-allowed');
172                                     }
173                                 } else {
174                                     // 记录已经上传的分片
175                                     window.localStorage.setItem(fileName + '_chunk', ++chunk);
176 
177                                     $progress.text(msg['in'] + percent + '%');
178                                     // 这样设置可以暂停，但点击后动态的设置就暂停不了..
179                                     // if (chunk == 10) {
180                                     //     isPaused = 1;
181                                     // }
182                                     console.log(isPaused);
183                                     if (!isPaused) {
184                                         startUpload();
185                                     }
186 
187                                 }
188                             }
189                             // 上传失败，上传失败分很多种情况，具体按实际来设置
190                             else if (rs.status === 500) {
191                                 $progress.text(msg['failed']);
192                             }
193                         },
194                         error: function() {
195                             $progress.text(msg['failed']);
196                         }
197                     });
198                 }
199             });
200 
201         </script>`} />
                </div>
            </Container>
        )
    }
}

export default File_Continuingly;