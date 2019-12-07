import React from 'react'
import { Container } from 'native-base'
import { DrawerActions } from 'react-navigation-drawer'
import MapView from '../organisms/Map'
import Header from '../organisms/Header'
import Fab from '../organisms/ActionButton'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location_result: null,
            region: {
                latitude: -3.7,
                longitude: -38,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
            },
            markers: [
                { latitude: 33.777, longitude: 130.60, type: "cat" },
                { latitude: 33.7048298, longitude: 130.8184429, type: "dog" },
            ],
        }
    }

    componentWillMount() {
        this._getLocationAsync()
    }
    // 位置情報の取得
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION)
        if (status !== 'granted') {
            this.setState({
                location_result: 'Permission to access location was denied',
            })
        }
        let location = await Location.getCurrentPositionAsync({})
        this.setState({
            location_result: JSON.stringify(location),
            region: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
            },
        })
    }

    render() {
        const { dispatch } = this.props.navigation
        return (
            <Container>
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="MapScreen" />
                <MapView region={this.state.region} markers={this.state.markers} />
                <Fab />
            </Container>
        )
    }
}