import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ region, markers }) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={region}
        >
            {markers.map((marker, idx) => {
                switch (marker.type) {
                    case 'cat':
                        return (<Marker
                            key={idx}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            pinColor='red'
                        />)
                    case 'dog':
                        return (<Marker
                            key={idx}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            pinColor='blue'
                        />)
                    case 'good':
                        return (<Marker
                            key={idx}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            pinColor='pink'
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
        </MapView>
    )
}

export default Map