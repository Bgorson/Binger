import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import Picker from '../screens/Picker';
import Picked from '../screens/Picked';
import About from '../screens/About';

const SettingsStack = createStackNavigator();
function PickerStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Picker" component={Picker} />
      <SettingsStack.Screen name="Picked" component={Picked} />
    </SettingsStack.Navigator>
  );
}

export default PickerStackScreen;
