import React from 'react'
import { StyleSheet } from 'react-native'
import {
    Container,
    Content,
} from 'native-base';
import { DrawerActions } from 'react-navigation-drawer'
import MapView from 'react-native-maps'
import Header from '../organisms/Header'
export default class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate, dispatch } = this.props.navigation
        return (
            <Container>
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="MapScreen" />
                <Content style={{ backgroundColor: 'pink' }}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                    />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: 500,
    }
})