import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const signin = () => {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
            <Text style={{ fontSize: 30}}>Sign in Now</Text>
        </TouchableOpacity>
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