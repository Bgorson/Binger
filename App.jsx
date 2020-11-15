import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { StyleProvider } from 'native-base';
//React Navigation Setup
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Tabs from './components/Tabs';
import Header from './components/Header';
import Main from './screens/Main';
import WelcomeSplash from './screens/WelcomeSplash';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

// RN Version > 0.6

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
const MainNavigator = createSwitchNavigator({
  Login: { screen: WelcomeSplash },
  Main: { screen: Main },
});

const App = createAppContainer(MainNavigator);

export default App;
