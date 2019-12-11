import React from 'react'
import {
    ListItem,
    Left,
    Thumbnail,
    Body,
    Text
} from 'native-base'

const OriginalListItem = ({text}) => {
    return( 
        <ListItem Thumbnail>
            <Left>
                <Thumbnail source={require('../../assets/square.png')} />
            </Left>
            <Body>
                <Text>{text}</Text>
            </Body>
        </ListItem>
    )
}

export default OriginalListItem