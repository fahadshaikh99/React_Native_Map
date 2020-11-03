import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

const signin = () => {

    const navigation = useNavigation();

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});
        if(location) {
          setLocation(location);
          console.log('Got location');
          console.log(location);
          if(location.coords.latitude !== null && location.coords.longitude !== null) {
            console.log("Longitude is ",location.coords.longitude);
            console.log("Latitude is ",location.coords.latitude);
            navigation.navigate('MapScreen', {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            })
          }
        }
        else {
          console.log('No location found')
        }
        
      })();
    }, []);

    return (
      <View style={styles.container}>
        
            <Text style={{ fontSize: 30}}>Loading </Text>
  
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default signin;
