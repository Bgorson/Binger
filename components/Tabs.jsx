import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import Home from '../screens/Home';
import About from '../screens/About';
import PickerStackScreen from '../routes/PickStack';

const Tab = createBottomTabNavigator();
export default function Tabs(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelStyle: { fontSize: 15 },
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      >
        {() => <Home navigation={props.navigation} />}
      </Tab.Screen>

      <Tab.Screen
        options={{
          tabBarLabel: 'Picker',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="gesture-swipe-right"
              size={24}
              color="black"
            />
          ),
        }}
        name="Picker"
        component={PickerStackScreen}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: () => (
            <FontAwesome name="question-circle-o" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
