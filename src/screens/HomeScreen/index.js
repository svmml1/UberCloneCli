import React from 'react' 
import { View, Text } from 'react-native'
import { CovidMessage } from '../../components/CovidMessage'

import {HomeMap} from '../../components/HomeMap'

export function HomeScreen() {
    return(
        <View>
            <HomeMap />
            <CovidMessage />
            {/* Covid Message */}


            {/* Bottom components */}
        </View>
    )
}