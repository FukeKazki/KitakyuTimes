import React from "react";
import MapScreen from "../components/screens/MapScreen";
import CameraScreen from "../components/screens/CameraScreen";
import EventListScreen from "../components/screens/EventListScreen";
import ARScreen from "../components/screens/ARScreen";
import FriendListScreen from "../components/screens/FriendListScreen";
import PostListScreen from "../components/screens/PostListScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import RankingScreen from "../components/screens/RankingScreen";
import SideBar from "../components/organisms/Sidebar";
import {
    createDrawerNavigator
} from "react-navigation-drawer";
const HomeScreenRouter = createDrawerNavigator({
    Map: {
        screen: MapScreen
    },
    Camera: {
        screen: CameraScreen
    },
    AR: {
        screen: ARScreen
    },
    EventList: {
        screen: EventListScreen
    },
    FriendList: {
        screen: FriendListScreen
    },
    PostList: {
        screen: PostListScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    Ranking: {
        screen: RankingScreen
    },
}, {
    contentComponent: props => <SideBar {
        ...props
    }
    />
});
export default HomeScreenRouter;