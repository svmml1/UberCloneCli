import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles'

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import {useNavigation} from '@react-navigation/native'
 

export function HomeSearch() {
    return (
        <View>
            {/*  Input Box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}> Para onde vai ?</Text>
                <View style={styles.timeContainer}>
                 <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                 <Text>Now</Text>
                 <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </View> 
        </View>
    )
}



