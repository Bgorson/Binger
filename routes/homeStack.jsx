import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import Picker from '../screens/Picker';
import Picked from '../screens/Picked';
import About from '../screens/About';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
