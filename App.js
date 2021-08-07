import 'react-native-gesture-handler';
import React from 'react';

import {
  StatusBar,
  Text  
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import { DestinationSearch } from './src/screens/ DestinationSearch';
import { SearchResults } from './src/screens/SearchResults';

export default function App(){
  return (
    <>
      <StatusBar  barStyle="dark-content"/>
     <SearchResults />
    </>
  );
};