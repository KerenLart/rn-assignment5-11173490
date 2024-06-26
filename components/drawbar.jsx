import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../ThemeContext';


const Drawbar = ({text} ) => {
    const { colorScheme } = useTheme();
    return(


        <TouchableOpacity style={[styles.container, {borderBottomColor: colorScheme === 'dark' ?   'rgba(255, 255, 255, 0.3)' :  'rgba(128, 128, 128, 0.2)' } ]}>
            <View>
            <Text style={{fontWeight:'700',color: colorScheme === 'dark' ? '#fff':'#000'}}>{text}</Text>
        </View>
        <View>
        <MaterialCommunityIcons name="greater-than" size={24} color="#949a9c" />  
        </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        marginBottom: 15
    }
})

export default Drawbar;