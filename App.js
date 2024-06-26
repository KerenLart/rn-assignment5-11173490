import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider} from './ThemeContext';
import MainNavigator from './navigator';


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
