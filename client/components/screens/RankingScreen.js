import React from 'react'
import {
    Container,
    Content,
    Left,
    Thumbnail,
    Body,
    Form,
    Button,
    Textarea,
    Text
} from 'native-base'
import { DrawerActions } from 'react-navigation-drawer'
import Header from '../organisms/Header'
export default class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate, dispatch } = this.props.navigation
        return (
            <Container>
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="PostScreen" />
                <Content padder>
                    <Left>
                        <Thumbnail source={require('../../assets/square.png')} />
                        <Body>
                            <Text>me</Text>
                        </Body>
                    </Left>
                    <Form>
                        <Textarea rowSpan={2} bordered placegolder="Textarea" />
                        <Textarea rowSpan={2} style={{marginTop: 16}} bordered placegolder="Textarea" />
                    </Form>
                    <Button block style={{marginTop: 16}}>
                        <Text>post</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
