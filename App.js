import React, { useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signin from './src/screens/signin';
import mapScreen from './src/screens/mapScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen options={{ headerShown: false}} name="Signin" component={signin}  />
        <Stack.Screen name="MapScreen" component={mapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;