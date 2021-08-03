import React from "react";
import { View, Dimensions } from "react-native";

import {HomeMap} from '../../components/HomeMap';
import {CovidMessage} from '../../components/CovidMessage';
import {HomeSearch} from '../../components/HomeSearch';




export default function HomeScreen() {
    return(
        <View>
        <View style={{height: Dimensions.get('window').height - 400}}>
          <HomeMap />
        </View>
  
        {/*  Covid Message*/}
        <CovidMessage />
  
        {/*  Bottom Comp*/}
        <HomeSearch />
      </View>
    )
}