import React from 'react'
import {
    Container,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Thumbnail,
    Text

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
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="FriendListScreen" />
                <Content>
                    <List>                    
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>KM</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>saki</Text>
                            </Body>
                        </ListItem>                    
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>kazu</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>A.Yamada</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>ritty</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>tnk</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>R</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>Nana</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>riku</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>E_M</Text>
                            </Body>
                        </ListItem>
                        <ListItem Thumnbail>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                            </Left>
                            <Body>
                                <Text>yuzuka</Text>
                            </Body>
                        </ListItem>  
                    </List>
                </Content>
            </Container>
        )
    }
}