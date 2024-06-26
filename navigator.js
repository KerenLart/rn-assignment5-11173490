
import { Image } from 'react-native';
import Homescreen from './screens/Homescreen';
import Cards from './screens/Cards';
import Statistics from './screens/Statistics';
import Settings from './screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from './ThemeContext';

const Tab = createBottomTabNavigator();

function MainNavigator() {
    const { colorScheme } = useTheme();
  
    return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          activeTintColor: colorScheme === 'dark' ? '#161622' : '#161622',
          inactiveTintColor: colorScheme === 'dark' ? 'gray' : 'lightgray',
          tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? '#161622' : '#fff',
            borderTopWidth:0
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/home.png')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Cards"
          component={Cards}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/myCards.png')}
                style={{ tintColor: color }}
              /> 
            ),
          }}
          
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/statictics.png')}
                style={{ tintColor: color }}
              /> 
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/settings.png')}
                style={{ tintColor: color }}
              /> 
            ), 
          }}
        />
      </Tab.Navigator>
    );
  }

  export default MainNavigator;
  