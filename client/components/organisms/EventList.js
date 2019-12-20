import React from 'react'
import {
    CardItem,
    Left,
    Thumbnail,
    Text,
    Button,
    Left,
    Body
}from 'native-base'

const OriginalEventList = ({text, sentence, number}) => {
    return(
        <EventList Card style={{flex: 0}}>
            <CardItem>
                <Left>
                    <Thumbnail source={{}} />
                    <Body>
                        <Text>北九州市役所</Text>
                        <Text note>{text}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{sentence}</Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent textStyle={{color: '#FF69A3'}}>
                        <Icon name="heart" size={20} color="rgb(255,0,102)" />
                        <Text style={{color: "rgb(255,0,102)"}}>{number}</Text>
                    </Button>
                </Left>
            </CardItem>
        </EventList>
    )
}

export default OriginalEventList