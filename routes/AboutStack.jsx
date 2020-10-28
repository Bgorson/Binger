import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import Picker from '../screens/Picker';
import Picked from '../screens/Picked';
import About from '../screens/About';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Screen
      options={{
        title: 'About',
      }}
      name="About"
      component={About}
    />
  );
}
export default AboutStack;
