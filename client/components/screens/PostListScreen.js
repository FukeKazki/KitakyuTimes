import React from 'react'
import {
    Container,
    Header,
    Body,
    Left,
    Right,
    Content,
    Title,
    Text,
    Button,
    Icon,
} from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
export default class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate, dispatch } = this.props.navigation
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => dispatch(DrawerActions.toggleDrawer())}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>PostListScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                </Content>
            </Container>
        )
    }
}