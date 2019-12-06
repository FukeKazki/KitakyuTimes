import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ region, markers }) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={region}
        >
            {markers.map((marker, idx) => (
                <Marker
                    key={idx}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    }}
                />
            ))}
        </MapView>
    )
}

export default Map