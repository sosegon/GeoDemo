import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import MapView, { LatLng, Marker } from 'react-native-maps'
import { Coords } from './components/Coords'
import { SetStartPosition } from './components/SetStartPosition'

export default function App() {
  const [showStartPositionMode, setShowStartPositionMode] = useState(false)
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.04212
  })

  const updatePositionHandler = (coord: LatLng) => {
    setRegion({
      ...region,
      latitude: coord.latitude,
      longitude: coord.longitude
    })
    setShowStartPositionMode(false)
  }

  const cancelNewPositionHandler = () => {
    setShowStartPositionMode(false)
  }

  const updateDragEndHandler = (e) => {
    setRegion({
      ...region,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude
    })
    console.log(
      `Dragging lat: ${e.nativeEvent.coordinate.latitude}, lon: ${e.nativeEvent.coordinate.longitude}`
    )
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker
          draggable
          coordinate={region}
          onDragEnd={updateDragEndHandler}
        />
      </MapView>
      <Coords latitude={region.latitude} longitude={region.longitude} />
      <Button
        onPress={() => setShowStartPositionMode(true)}
        title={'Set start position'}
      />
      <SetStartPosition
        visible={showStartPositionMode}
        currentRegion={region}
        onPositionUpdated={updatePositionHandler}
        onNewPositionCanceled={cancelNewPositionHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 5
  },
  btnStart: {
    flex: 1
  }
})
