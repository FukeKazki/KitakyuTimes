import React from 'react'
import {
    Container,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Left,
    Body
} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="EventListScreen" />
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                                <Body>
                                    <Text>北九州市役所</Text>
                                    <Text note>2019/12/16</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    大晦日カウントダウンイベントを開催いたします。{"\n"}
                                    日程: 12月31日(火){"\n"}
                                    場所: リバーウォーク北九州{"\n"}
                                    内容: 屋台、ステージ、花火など{"\n"}
                                    主催: 北九州市{"\n"}
                                    ※荒天中止{"\n"}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#FF69A3'}}>
                                    <Icon name="heart" size={20} color="rgb(255,0,102)" />
                                    <Text style={{color: "rgb(255,0,102)"}}>203</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                                <Body>
                                    <Text>Kitakyusyu Music Club</Text>
                                    <Text note>2019/11/28</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    ブラスバンド演奏会が開催されます！{"\n"}
                                    ぜひ、見に来てください！{"\n"}
                                    開催日: 12月04日(水) 15:00~{"\n"}
                                    場所: 北九州シティーホール{"\n"}
                                    入場料: 無料{"\n"}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#FF69A3'}}>
                                    <Icon name="heart" size={20} color="rgb(255,0,102)" />
                                    <Text style={{color: "rgb(255,0,102)"}}>150</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/square.png')} />
                                <Body>
                                    <Text>藤の家</Text>
                                    <Text note>2019/11/03</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    産地直送野菜即売会を行います。{"\n"}
                                    日程: 11月10日(火)09:00~{"\n"}
                                    場所: あい広場{"\n"}
                                    ※雨天中止{"\n"}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#FF69A3'}}>
                                    <Icon name="heart" size={20} color="rgb(255,0,102)" />
                                    <Text style={{color: "rgb(255,0,102)"}}>105</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}
