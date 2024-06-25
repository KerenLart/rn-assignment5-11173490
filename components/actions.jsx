import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";

const Actions = ({icon ,text}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.actionicon}>
                <Image source={icon}/>
            </TouchableOpacity>
            <View style={styles.icontext}>
            <Text>{text}</Text>
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