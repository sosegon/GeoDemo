import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Coords = (props) => {
  return (
    <View style={styles.coordsContainer}>
      <View style={styles.coordsWrapper}>
        <View style={styles.coordsSingle}>
          <View style={styles.coordsTitle}>
            <Text>{'Latitude'}</Text>
          </View>
          <View style={styles.coordsLabel}>
            <Text>{props.latitude}</Text>
          </View>
        </View>
        <View style={styles.coordsSingle}>
          <View style={styles.coordsTitle}>
            <Text>{'Longitude'}</Text>
          </View>
          <View style={styles.coordsLabel}>
            <Text>{props.longitude}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  coordsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  coordsWrapper: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%'
  },
  coordsSingle: {
    flex: 1,
    alignItems: 'center'
  },
  coordsTitle: {
    flex: 1,
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  coordsLabel: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.8,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  }
})
