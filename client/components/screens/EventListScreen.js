import React from 'react'
import {
    Container,
    Header,
    Body,
    Content,
    Title,
    Text,
    Footer,
    FooterTab,
    Button,
    Icon,
} from 'native-base';
export default class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>EventListScreen</Title>
                    </Body>
                </Header>
                <Content>
                </Content>
            </Container>
        )
    }
}