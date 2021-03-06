import React from 'react'
import {
    Container,
    Content,
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
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="ProfileScreen" />
                <Content>
                </Content>
            </Container>
        )
    }
}