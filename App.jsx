import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { StyleProvider } from 'native-base';
import Tabs from './components/Tabs';
import Header from './components/Header';
import WelcomeSplash from './screens/WelcomeSplash';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import { navigationRef } from './routes/rootNavigate';
// RN Version > 0.6

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

export default function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return !loggedIn ? (
    <WelcomeSplash loggedIn={() => setloggedIn(true)}></WelcomeSplash>
  ) : (
    <>
      <StyleProvider style={getTheme(material)}>
        <Header />
      </StyleProvider>
      <NavigationContainer ref={navigationRef}>
        <Tabs loggedOut={() => setloggedIn(false)} />
      </NavigationContainer>
    </>
  );
}
