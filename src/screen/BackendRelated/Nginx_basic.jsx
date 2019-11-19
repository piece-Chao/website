import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class Nginx_basic extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'前端想要了解的Nginx'}></Title>
                    <Paragraph style={{background: '#eee', fontSize: '13px', padding: '0 4px'}} title={'Nginx 是一个高性能的HTTP和反向代理服务器，同时也是一个 IMAP/POP3/SMTP 代理服务器。'}></Paragraph>
                </div>
            </Container>
        )
    }
}

export default Nginx_basic;