import 'react-native-gesture-handler';
import React from 'react';

import {
  StatusBar,
  Text  
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen'

export default function App(){
  return (
    <>
      <StatusBar  barStyle="dark-content"/>
     <HomeScreen />
    </>
  );
};