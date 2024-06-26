import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { useTheme } from '../ThemeContext';


const Transaction = ({icon, title , category, amount,id }) => {
    const { colorScheme } = useTheme();
    
    console.log("id",id);
    return(

        <View style={styles.container}>
            <View style={styles.categorycont}>
                <View style={[styles.icon , {backgroundColor: colorScheme === 'dark' ? '#1e1e2d' : '#f4f4f4'}]}>
                    <Image source={icon } style={id==="2" ? {} : {tintColor: colorScheme === 'dark' ? '#f7f7f8' : '#000'}}/>
                </View>
                <View style={styles.textcont}>
                    <Text style={{fontWeight:'700', color: colorScheme === 'dark' ? '#fff':'#000' }}>{title}</Text>
                    <Text style={{color: colorScheme === 'dark' ? '#fff':'#000'}}>{category}</Text>
                </View>
            </View>
            <View><Text style={id === "3" ? {fontWeight: '700', color:'#037bfc'} : {fontWeight: '700', color: colorScheme === 'dark' ? '#fff' : '#000'}}>{amount}</Text></View>

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