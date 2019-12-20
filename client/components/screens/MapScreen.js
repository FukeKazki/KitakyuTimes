import React from 'react'
import { Container } from 'native-base'
import { DrawerActions } from 'react-navigation-drawer'
import MapView from '../organisms/Map'
import Header from '../organisms/Header'
import Fab from '../organisms/ActionButton'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import axios from 'axios'

axios.defaults.baseURL = 'https://e9e0ac62.ngrok.io/api/v1'

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location_result: null,
            region: {
                latitude: -3.7,
                longitude: -38,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
            },
            markers: [],
            posts: [
                { post_id: 1, post_user_id: 1, post_content: { title: '2019秋企画展　いろ色ひろがる印刷展', description: '「いろ色ひろがる印刷展」では、現代の印刷技術を中心に取り上げ、印刷の歴史、工場での印刷、多種多様な色と紙から生まれるアートとしてのポスターも展示します。見るだけでも楽しい色見本や不思議な見え方の特殊印刷、手作り感が今なお人気の活版印刷をとりあげるコーナーも設け、幅広い印刷技術についてご紹介します。印刷技術の応用でこれから生活や学び方法の変化、そして記録媒体としての「印刷」が担う文化継承の一端に実際に触れ、体験していただきます。' }, post_geo: [33.8689236, 130.8056444], post_date: '2019-12-26' },
                { post_id: 1, post_user_id: 1, post_content: { title: 'アトリエ ハーモニー　作品展', description: '木の実やスパイスを使ったリースやオーナメントの展示販売のほか、ドアベルや香り袋の手作り体験もできるイベント「アトリエ ハーモニー 作品展」を開催します。' }, post_geo: [33.9057166, 130.9313072], post_date: '2019-12-26' },
                { post_id: 1, post_user_id: 1, post_content: { title: 'KPF（北九州ポップカルチャーフェスティバル）2019', description: 'アニメ・マンガなどポップカルチャーをテーマにした九州最大級のイベント。声優トークショー、アニソンライブ、アニメ・マンガ作品展示、クリエイティブ体験、コスプレイベント、痛車展示など、内容盛りだくさんです。' }, post_geo: [33.889573, 130.8830893], post_date: '2019-12-26' },
            ],
        }
    }
    componentWillMount() {
        this._getLocationAsync()
    }
    componentDidMount() {
        this._getLocationList()
    }
    postLocation = async (type) => {
        await axios.post('/post/location', {
            data: {
                location_user_id: 1,
                location_date: new Date().toLocaleString(),
                location_content: {
                    type: type,
                },
            },
            lat: this.state.region.latitude,
            lang: this.state.region.longitude,
        })
        this._getLocationList()
    }
    _getLocationList = async () => {
        const res = await axios.get('/post/location_list')
        this.setState({
            markers: res.data
        })
    }
    // 位置情報の取得
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION)
        if (status !== 'granted') {
            this.setState({
                location_result: 'Permission to access location was denied',
            })
        }
        let location = await Location.getCurrentPositionAsync({})
        this.setState({
            location_result: JSON.stringify(location),
            region: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
            },
        })
    }

    render() {
        const { dispatch } = this.props.navigation
        return (
            <Container>
                <Header dispatch={() => dispatch(DrawerActions.toggleDrawer())} header_title="KitakyuTimes" />
                <MapView
                    region={this.state.region}
                    markers={this.state.markers}
                    posts={this.state.posts}
                />
                <Fab
                    postLocation={(type) => this.postLocation(type)}
                />
            </Container>
        )
    }
}