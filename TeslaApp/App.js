/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './Components/CarItem';
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <CarItem name={"Model 3"}
          tagline={'Order Online For'}
          taglineCTA={'Touchless Delivery'}
          image={require('./img/Model3.jpeg')}
        />
        <StatusBar style="auto" />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
