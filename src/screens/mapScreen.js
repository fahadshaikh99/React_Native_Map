import React, { useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
const axios = require('axios');
import * as Location from 'expo-location';
import { set } from 'react-native-reanimated';

// const location = {
//   lat: 24.816668,
//   long: 66.983330
// }

// const destinations = [{lat: 24.929374,long: 67.128448, id: 3}, {lat: 26.4666648, long: 68.249999, id: 1}]

const destinations = [{lat: 24.9167,long:  67.0833, id: 3, add: 'Gulshan'},  {lat: 25.8943, long: 68.5247, id: 4, add: 'jamshab, sindh'}, {lat: 24.8532, long: 67.0167, id: 1, add: 'Saddar'},]

const mapScreen = ({ route, navigation }) => {


  const { latitude, longitude } = route.params;

  const [mylocation, setMyLocation] = useState(null);


  

  useEffect(() => {
    console.log(latitude);
    console.log(longitude);
    getdirection(destinations);
  }, []);



   const [ array, setArray] = useState('');
   const [nearestFridge, setNearestFridge] = useState('');
   const [ fridgeDistance, setFridgeDistance] = useState('');

    const getdirection = async (destinations) => {
      let all_location = [];
      destinations.forEach(item => {
        console.log("Calling for each function")
        const DIRECTION_API_KEY = 'pk.eyJ1Ijoia2hhbmhhc3NhbjA1NyIsImEiOiJjazUxOXk3ZTMwYWd0M3Ntcm84b21tejN4In0.Xb6l-yJHO6_1RQe0uzwnyg';
          axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${longitude},${latitude};${item.long},${item.lat}?geometries=geojson&steps=true&access_token=${DIRECTION_API_KEY}`)
          .then((data) => 
          all_location.push({ "distance" : data.data.routes[0].distance, "Fridge_id": item.id, "Address" : item.add})
          //  console.log(data.data.routes[0].distance)    
          )      
      })


  }

const getArray = () => {
  
  console.log('Button')

  if(array) {
    setArray(array.sort(function(a, b) {
      return a.distance - b.distance;
    }))
  }
  else {
    console.log("No Array")
  }

      setNearestFridge(array[0]);

      console.log(nearestFridge);
      // setFridgeDistance(((nearestFridge.distance)/1000).toFixed(2));
      console.log(fridgeDistance);
      
   
  
    
}



const toggleOverlay = () => {
  setVisible(false);
};

    return (
      <View style={styles.container}>
          <Text>
            Loading Data
          </Text>

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
    height: Dimensions.get('window').height/2,
  },
});


export default mapScreen;














// import React, { useState, useEffect} from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions} from 'react-native';
// import { Overlay, Button } from 'react-native-elements';
// const axios = require('axios');
// import * as Location from 'expo-location';
// import { set } from 'react-native-reanimated';

// // const location = {
// //   lat: 24.816668,
// //   long: 66.983330
// // }

// // const destinations = [{lat: 24.929374,long: 67.128448, id: 3}, {lat: 26.4666648, long: 68.249999, id: 1}]

// const destinations = [{lat: 24.9167,long:  67.0833, id: 3, add: 'Gulshan'},  {lat: 25.8943, long: 68.5247, id: 4, add: 'jamshab, sindh'}, {lat: 24.8532, long: 67.0167, id: 1, add: 'Saddar'},]

// const mapScreen = () => {

//   const [mylocation, setMyLocation] = useState(null);


  

//   useEffect(() => {

//   }, []);



//    const [ array, setArray] = useState('');
//    const [nearestFridge, setNearestFridge] = useState('');
//    const [ fridgeDistance, setFridgeDistance] = useState('');

//     const getdirection = async (destinations) => {
//       let all_location = [];
//       destinations.forEach(item => {
        
//         const DIRECTION_API_KEY = 'pk.eyJ1Ijoia2hhbmhhc3NhbjA1NyIsImEiOiJjazUxOXk3ZTMwYWd0M3Ntcm84b21tejN4In0.Xb6l-yJHO6_1RQe0uzwnyg';
//           axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${mylocation.coords.longitude},${mylocation.coords.latitude};${item.long},${item.lat}?geometries=geojson&steps=true&access_token=${DIRECTION_API_KEY}`)
//           .then((data) => 
//           all_location.push({ "distance" : data.data.routes[0].distance, "Fridge_id": item.id, "Address" : item.add})
//           //  console.log(data.data.routes[0].distance)    
//           )
      
//       })
//       setArray(all_location);

//   }

// const getArray = () => {
  
//   console.log('Button')

//   if(array) {
//     setArray(array.sort(function(a, b) {
//       return a.distance - b.distance;
//     }))
//   }
//   else {
//     console.log("No Array")
//   }

//       setNearestFridge(array[0]);
//       // setFridgeDistance(((nearestFridge.distance)/1000).toFixed(2));
//       console.log(fridgeDistance);
      
//       setVisible(false);
//       setMapView(true);
    
// }

// const [visible, setVisible] = useState(true);
// const [mapView, setMapView] = useState(false);


// const toggleOverlay = () => {
//   setVisible(false);
// };

//     return (
//       <View style={styles.container}>
//         {mapView ? 
//         <>
//         <MapView style={styles.mapStyle} />
   
//         <View style={{ marginTop: '10%'}}>
//           {/* <Text style={{ fontSize: 20}}>
//               Nearest Fridge: {nearestFridge.Address}
//           </Text>
//           <Text style={{ fontSize: 20}}>
//               Distance: {((nearestFridge.distance)/1000).toFixed(2)} k.m
//           </Text> */}
//         </View>
//         </> 
        
//         :  

//         <>
        
//         <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
//           <View style={{ marginTop: '50%', marginBottom: '50%', width: 200, justifyContent: 'center', alignItems: 'center'}}>
//             <Button onPress={() => getArray()} title="Find Fridge" /> 
//           </View>
//         </Overlay>

//         </>
//         }

//       </View>
//     );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',

//   },
//   mapStyle: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height/2,
//   },
// });


// export default mapScreen;