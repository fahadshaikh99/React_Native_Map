import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Overlay } from 'react-native-elements';

const mapScreen = () => {

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/1.5,
  },
});


export default mapScreen;