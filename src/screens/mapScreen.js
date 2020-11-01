import React, { useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
const axios = require('axios');

const location = {
  lat: 24.816668,
  long: 	66.983330
}

// const destinations = [{lat: 24.929374,long: 67.128448, id: 3}, {lat: 26.4666648, long: 68.249999, id: 1}]

const destinations = [{lat: 24.9167,long:  67.0833, id: 3, add: 'Gulshan'}, {lat: 24.8532, long: 67.0167, id: 1, add: 'Sadar'}]

const mapScreen = () => {

  useEffect(() => {
    console.log('useEffect has been called!');
    getdirection(location, destinations);

    },[]); 

   const [ array, setArray] = useState('');

    const getdirection = async (location, destination) => {
      let all_location = [];
      destinations.forEach(item => {
        
        const DIRECTION_API_KEY = 'pk.eyJ1Ijoia2hhbmhhc3NhbjA1NyIsImEiOiJjazUxOXk3ZTMwYWd0M3Ntcm84b21tejN4In0.Xb6l-yJHO6_1RQe0uzwnyg';
          axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${location.long},${location.lat};${item.long},${item.lat}?geometries=geojson&steps=true&access_token=${DIRECTION_API_KEY}`)
          .then((data) => 
          all_location.push({ "distance" : data.data.routes[0].distance, "Fridge_id": item.id, "Address" : item.add})
          //  console.log(data.data.routes[0].distance)    
          )
      
      })
      setArray(all_location);

  }

  const getArray = () => {
  
    console.log('Button')
    
    // console.log(array.sort())

    setArray(array.sort(function(a, b) {
      return a.distance - b.distance;
  }))


  // console.log(array);

  console.log(array[0]);
    
  }


    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
        <Button onPress={() => getArray()} title="Get Array "/>
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