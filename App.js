
import React from 'react';

import {
  StatusBar,  
} from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';


export function App(){
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
     </>
  );
};