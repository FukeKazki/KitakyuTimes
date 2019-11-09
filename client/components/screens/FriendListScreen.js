import React from 'react'
import {
    Container,
    Content,
    List,
    ListItem,
    Body,
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
                        <ListItem thumbnail>
                            <Body>
                                <Text>Aaron Bennet</Text>
                            </Body>
                        </ListItem>
                        <ListItem thumbnail>
                            <Body>
                                <Text>Bradley Horowitz</Text>
                            </Body>
                        </ListItem>                    
                        <ListItem thumbnail>
                            <Body>
                                <Text>Ali Connors</Text>
                            </Body>
                        </ListItem>  
                    </List>
                </Content>
            </Container>
        )
    }
}