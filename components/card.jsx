import React from "react";
import {View,Image,StyleSheet} from "react-native";

const Card = () => {
    return (
        <View>
            <Image source={require('../assets/Card.png')} style={styles.card}/>
        </View>
    );
 };

 const styles = StyleSheet.create({
    card:{
        borderRadius: 20,
        marginVertical: 20,
    },
 });

 export default Card;