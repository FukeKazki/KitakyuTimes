import React from 'react'
import {
    Container,
    Content,
} from 'native-base'
import { DrawerActions } from 'react-navigation-drawer'
import Header from '../organisms/header'
export default class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate, dispatch } = this.props.navigation
        return (
            <Container>
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="FriendListScreen" />
                <Content>
                </Content>
            </Container>
        )
    }
}