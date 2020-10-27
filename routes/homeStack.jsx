import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import Picker from '../screens/Picker';
import Picked from '../screens/Picked';
import About from '../screens/About';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Picker',
        }}
        name="Picker"
        component={Picker}
      />
      <Stack.Screen
        options={{
          title: 'Picked',
        }}
        name="Picked"
        component={Picked}
      />
      <Stack.Screen
        options={{
          title: 'About',
        }}
        name="About"
        component={About}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
