import React, { useState, useEffect } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';
import PlaceRow from "./PlaceRow";

export function DestinationSearch(props) {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
  
    useEffect(() => {
      console.warn('useEffect is called');
      if (originPlace && destinationPlace) {
        console.warn('Redirect to results');
      }
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
        <View style={styles.container}>
  
          <GooglePlacesAutocomplete
            placeholder="Where from?"
            onPress={(data, details = null) => {
              setOriginPlace({data, details});
            }}
            styles={{
              textInput: styles.textInput,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyABh3TcTZ8QKklz_FSg5mkWpwgiU9WeScE',
              language: 'en',
            }}
          />
  
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            onPress={(data, details = null) => {
              setDestinationPlace({data, details});
            }}
            styles={{
              textInput: styles.textInput,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyABh3TcTZ8QKklz_FSg5mkWpwgiU9WeScE',
              language: 'en',
            }}
          />
        </View>
      </SafeAreaView>
    )
}