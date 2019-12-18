import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ region, markers, posts }) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={region}
        >
            {posts.map((post, idx) => {
                return (
                    <Marker
                        key={idx + 100}
                        coordinate={{
                            latitude: post.post_geo[0],
                            longitude: post.post_geo[1],
                        }}
                        title={post.post_content.title}
                        description={post.post_content.description}
                    />
                )
            })}
            {markers.map((marker, idx) => {
                switch (JSON.parse(marker.location_content)["type"]) {
                    case 'cat':
                        return (<Marker
                            key={idx}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            image={require('../../assets/cat.png')}
                        >
                        </Marker>)
                    case 'dog':
                        return (<Marker
                            key={idx}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            image={require('../../assets/dog.png')}
                        />)
                    case 'heart':
                        return (<Marker
                            key={idx}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            image={require('../../assets/heart.png')}
                        />)
                    default:
                        return (<Marker
                            key={idx}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                        />)
                }
            })}
            <Marker
                key={999}
                coordinate={region}
                image={require('../../assets/circle.png')}
            />
        </MapView>
    )
}

export default Map