import React, { useRef, useState } from 'react'
import { Modal, TextInput, Text, View, Button, StyleSheet } from 'react-native'

export const SetStartPosition = (props) => {
  const [lat, setLat] = useState(props.currentRegion.latitude.toString())
  const [lon, setLon] = useState(props.currentRegion.longitude.toString())

  const latitudeHandler = (value: string) => {
    setLat(value)
  }
  const longitudeHandler = (value: string) => {
    setLon(value)
  }
  const updatePositionHandler = () => {
    let newLat = props.currentRegion.latitude
    let newLon = props.currentRegion.longitude

    if (lat !== '') {
      newLat = parseFloat(lat)
    }

    if (lon !== '') {
      newLon = parseFloat(lon)
    }

    props.onPositionUpdated({ latitude: newLat, longitude: newLon })
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.singleCoord}>
          <Text style={styles.inputTitle}>{'Latitude'}</Text>
          <TextInput
            keyboardType={'number-pad'}
            placeholder={lat.toString()}
            onChangeText={latitudeHandler}
            value={lat}
            style={styles.inputCoord}
          ></TextInput>
        </View>
        <View style={styles.singleCoord}>
          <Text style={styles.inputTitle}>{'Longitude'}</Text>
          <TextInput
            keyboardType={'number-pad'}
            placeholder={lon}
            onChangeText={longitudeHandler}
            value={lon.toString()}
            style={styles.inputCoord}
          ></TextInput>
        </View>
        <View style={styles.inputButtons}>
          <View style={styles.inputCTA}>
            <Button
              title={'Cancel'}
              onPress={props.onNewPositionCanceled.bind(this)}
            />
          </View>
          <View style={styles.inputCTA}>
            <Button title={'OK'} onPress={updatePositionHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  singleCoord: {
    width: '80%',
    marginBottom: 20
  },
  inputButtons: {
    flexDirection: 'row'
  },
  inputTitle: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  inputCoord: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  inputCTA: {
    width: '30%',
    margin: 5
  }
})
