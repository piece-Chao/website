import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock } from '@/components/SubComponent';

class VueStructure extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'2019 年如何搭建你的 Vue 项目'}></Title>
                </div>
            </Container>
        )
    }
}

export default VueStructure;