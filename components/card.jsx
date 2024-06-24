import React from "react";
import {View,Image,StyleSheet} from "react-native";

const Card = () => {
    return (
        <View>
            <Image source={require('../assets/Card.png')} style={StyleSheet.card}/>
        </View>
    );
 };

 const styles = StyleSheet.create({

 });

 export default Card;