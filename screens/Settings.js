import React, {useState} from 'react';
import { View, Text, StyleSheet,Switch,useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Drawbar from '../components/drawbar';
import { useTheme } from '../ThemeContext';

function Settings() {
  const {colorScheme,toggleColorScheme} = useTheme();
  
  return (
    <SafeAreaView style={{flex:1, padding:10, backgroundColor: colorScheme === 'dark' ? '#161622' : '#fff' }}>
       <View style={styles.container}>
          <Text style={[styles.title, {color: colorScheme === 'dark' ? '#fff':'#000'} ]}> Settings</Text>
          <View>
            <Drawbar text="Language" />
            <Drawbar text="My Profile" />
            <Drawbar text="Contact Us" />
            <Drawbar text="Change Password" />
            <Drawbar text="Privacy Policy" />
          </View>
          <View style={styles.themecont}>
            <View>
              <Text style={[styles.themetext, {color: colorScheme === 'dark' ? '#fff':'#000'}]}>Theme</Text>
            </View>
            <View>
              <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} trackColor={{false: '#767577', true: '#2cd13c'}} thumbColor={'dark' ? '#ffff' : '#f4f3f4'}/> 
            </View>
           
        </View>
    </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create
({
  container:{
    flex:1,
    padding:10
  },


  title:{
    textAlign:'center',
    marginTop:20,
    marginBottom: 80,
    fontWeight:'700',
    fontSize:20
  },

  themecont:{
    flexDirection:'row',
    marginTop:50,
    justifyContent:'space-between'
  },

  themetext:{
    fontSize:20,
    fontWeight:'500'
  }
    
});
export default Settings;