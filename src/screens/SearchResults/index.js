import React, { useState } from 'react';
import { View, Dimensions, Alert } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";
import { createOrder } from '../../graphql/mutations';

import { useRoute, useNavigation } from '@react-navigation/native';


export function SearchResults() {
    return (
        <View style={{ display: 'flex', justifyContent: 'space-between' }}>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>

            <View style={{ height: 400 }}>
                <UberTypes typeState={typeState} onSubmit={onSubmit} />
            </View>
        </View>
    )
}