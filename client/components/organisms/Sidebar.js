import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native"
import { Container, Content, Text, List, ListItem } from "native-base"
const routes = ["Map", "Camera", "AR", "EventList", "FriendList", "PostList", "Profile", "Ranking"]
export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <Content>
                    <List
                        dataArray={routes}
                        keyExtractor={(item, index) => index.toString()}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            )
                        }}
                    />
                </Content>
            </Container>
        )
    }
}
