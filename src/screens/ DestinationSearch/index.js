import React, { useState, useEffect } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';
import PlaceRow from "./PlaceRow";

export function DestinationSearch() {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder="Pra Onde?"
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details });
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator,
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyABh3TcTZ8QKklz_FSg5mkWpwgiU9WeScE',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />

                <GooglePlacesAutocomplete
                    placeholder="Where to?"
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details });
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            ...styles.autocompleteContainer,
                            top: 55,
                        },
                        separator: styles.separator,
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyABh3TcTZ8QKklz_FSg5mkWpwgiU9WeScE',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                />

                {/* Circle near Origin input */}
                <View style={styles.circle} />

                {/* Line between dots */}
                <View style={styles.line} />

                {/* Square near Destination input */}
                <View style={styles.square} />
            </View>
        </SafeAreaView>
    )
}