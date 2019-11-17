import React from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer'
import MapView from 'react-native-maps'
import Header from '../organisms/Header'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate, dispatch } = this.props.navigation
        return (
            <Container>
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="MapScreen" />
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
                <ActionButton buttonColor="rgb(255,0,102)">
                    <ActionButton.Item buttonColor='#5D99FF' title="dog" onPress={() => console.log("notes tapped!")}>
                        <Icon name="dog" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#00CC99' title="cat" onPress={() => {}}>
                        <Icon name="cat" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#FF69A3' title="good" onPress={() => {}}>
                        <Icon name="heart" style={styles.actionButtonIcon} />
                    </ActionButton.Item>                    
                </ActionButton>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 25,
        height: 25,
        color: 'white',
    }
})