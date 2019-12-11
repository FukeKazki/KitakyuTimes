import React from 'react'
import {
    Container,
    Content,
    List
} from 'native-base'
import { DrawerActions } from 'react-navigation-drawer'
import Header from '../organisms/Header'
import ListItem from '../organisms/ListItem'
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
                    <List>                    
                        <ListItem text="KM" />
                        <ListItem text="saki" />
                        <ListItem text="Kazu" />
                        <ListItem text="A.Yamada" />
                        <ListItem text="ritty" />
                        <ListItem text="tnk" />
                        <ListItem text="RL" />
                        <ListItem text="NanA" />
                        <ListItem text="riku" />
                        <ListItem text="E_M" />
                        <ListItem text="yuzuka" />
                    </List>
                </Content>
            </Container>
        )
    }
}