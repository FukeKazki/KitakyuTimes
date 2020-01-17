import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MapScreen from '../components/screens/MapScreen';
import CameraScreen from '../components/screens/CameraScreen';
import {
    Text,
    Footer,
    FooterTab,
    Button,
    Icon,
} from 'native-base';

export default tabNavigator = createBottomTabNavigator(
    {
        Map: { screen: MapScreen },
        Camera: { screen: CameraScreen }
    },
    {
        tabBarComponent: props => {
            const { navigate } = props.navigation
            console.log(props)
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            onPress={() => navigate('Map')}
                            active={props.navigation.state.index === 0}
                        >
                            <Icon type="Entypo" name="map" />
                            <Text>Map</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => navigate('Camera')}
                            active={props.navigation.state.index === 1}
                        >
                            <Icon type="Entypo" name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button
                            vertical
                        >
                            <Icon type="AntDesign" name="infocirlce" />
                            <Text>Info</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        }
    }
);

