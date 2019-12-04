import React from 'react'
import { Container } from 'native-base'
import { DrawerActions } from 'react-navigation-drawer'
import MapView from '../organisms/Map'
import Header from '../organisms/Header'
import Fab from '../organisms/ActionButton'

export default class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { dispatch } = this.props.navigation
        return (
            <Container>
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="MapScreen" />
                <MapView />
                <Fab />
            </Container>
        )
    }
}