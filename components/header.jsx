import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const Header = ({ }) => {
  return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <View>
                <Image source = {require('../assets/profile.png')} style={styles.profileicon}/>
            </View>
            <View>
                <Text style={styles.title}>Welcome back,</Text>
                <Text style={styles.name}>Eric Atsu</Text>
            </View>
        </View>
        <View style={styles.searchIcon}>
            <Image source={require('../assets/search.png')}  />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        marginTop:20, 
        marginBottom:50, 

    },

    profile:{
        flexDirection:'row',
        flex:3,
    },

    profileicon:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:20,
    },

    title:{
        fontSize:15,
        marginBottom:3,
    },
   
    name:{
        fontSize:20,
        fontWeight:'bold',
    },

    searchIcon:{
        width:50,
        height:50,
        backgroundColor:'#ccc',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:50,
    },
});

export default Header;