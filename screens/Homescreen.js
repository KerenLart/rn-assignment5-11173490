import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import Card from '../components/card';

function Homescreen() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Header/>
            <Card/>
        </View>
        
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create
({
    container:{
        padding:20, 
    },
    
});

export default Homescreen;