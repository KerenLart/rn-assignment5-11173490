import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const Transaction = ({icon, title , category, amount, }) => {
    return(
        <View style={styles.container}>
            <View style={styles.categorycont}>
                <View style={styles.icon}>
                    <Image source={icon}/>
                </View>
                <View style={styles.textcont}>
                    <Text style={{fontWeight:'700'}}>{title}</Text>
                    <Text style={{}}>{category}</Text>
                </View>
            </View>
            <View><Text style={{fontWeight:'700'}}>{amount}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom: 20
    },

    categorycont:{
        flexDirection:'row',
        flex:3
    },

    icon:{
        width:50,
        height:50,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 50,
        marginRight:15



    }

});


export default Transaction;