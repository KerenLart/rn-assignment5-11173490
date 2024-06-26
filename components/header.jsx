import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { useTheme } from '../ThemeContext';

const Header = ({ }) => {
    const { colorScheme } = useTheme();
  return (

    <View style={styles.container}>
        <View style={styles.profile}>
            <View>
                <Image source = {require('../assets/profile.png')} style={styles.profileicon}/>
            </View>
            <View>
                <Text style={[styles.title]}>Welcome back,</Text>
                <Text style={[styles.name, {color: colorScheme === 'dark' ? '#fff':'#000'}]}>Eric Atsu</Text>
            </View>
        </View>
        <View style={[styles.searchIcon, {backgroundColor: colorScheme === 'dark' ? '#1e1e2d' : '#f4f4f4'}]}>
            <Image source={require('../assets/search.png')} style={{tintColor: colorScheme === 'dark' ? '#f7f7f8' : '#000'}} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        marginTop:20, 
        marginBottom:30, 

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
        color:'#777d86'
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