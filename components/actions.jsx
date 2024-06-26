import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import { useTheme } from '../ThemeContext';

const Actions = ({icon ,text}) => {
    const { colorScheme } = useTheme();
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.actionicon, {backgroundColor: colorScheme === 'dark' ? '#1e1e2d' : '#f4f4f4'}]}>
                <Image source={icon} style={{tintColor: colorScheme === 'dark' ? '#f7f7f8' : '#000'}}/>
            </TouchableOpacity>
            <View style={styles.icontext}>
            <Text style={{color: colorScheme === 'dark' ? '#fff':'#000'}}>{text}</Text>
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({
    
    container:{
        flexDirection:'column',
        alignItems:'center',
    },
    actionicon:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:4
        

    },

    icontext:{
        
    }
});

export default Actions;