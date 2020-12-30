import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import Home from '../screens/Home';
import About from '../screens/About';
import Connect from '../screens/Connect';
import Match from '../screens/Match';
import PickerStackScreen from '../routes/PickStack';
import MatchingStackScreen from '../routes/MatchStack';

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
        {() => (
          <Home
            displayName={
              props.navigation?.state?.params?.user?.displayName || 'MISSING'
            }
            navigation={props.navigation}
          />
        )}
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
      >
        {() => <PickerStackScreen navigation={props.navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="QR Scanning"
        component={Connect}
        options={{
          tabBarLabel: 'QR Scanning',
          tabBarIcon: () => (
            <FontAwesome name="qrcode" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Match',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="ghost" size={24} color="black" />
          ),
        }}
        name="Matching"
      >
        {() => <MatchingStackScreen navigation={props.navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
