import React from 'react'
import {
    Header,
    Body,
    Left,
    Right,
    Title,
    Button,
    Icon,
} from 'native-base'

const Orginal_Header = props => {
    const { dispatch, header_title } = props
    return (
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => dispatch()}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>{header_title}</Title>
            </Body>
            <Right />
        </Header>
    )
}
export default Orginal_Header