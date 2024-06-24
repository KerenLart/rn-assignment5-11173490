import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Homescreen from './screens/Homescreen';
import Cards from './screens/Cards';
import Statistics from './screens/Statistics';
import Settings from './screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor:'#037bfc'
      }}>
        <Tab.Screen 
          name="Home"
          component={Homescreen} 
          options={{
            headerShown:false,
            tabBarLabel: 'Home',
            tabBarIcon: (color) => (
              <Image 
              source={require('./assets/home.png')} 
              style={{tintColor: color}}/>
            ),
            }}/>
        <Tab.Screen name="My Cards" component={Cards} options={{headerShown:false}}/>
        <Tab.Screen name="Statistics" component={Statistics} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}