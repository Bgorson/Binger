import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import PickerStackScreen from './routes/PickStack';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WelcomeSplash from './screens/WelcomeSplash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './routes/rootNavigate';
// RN Version > 0.63
import { LogBox } from 'react-native';
import { View } from 'native-base';
LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isLoggedIn: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return !this.state.isLoggedIn ? (
      <WelcomeSplash
        loggedIn={() => this.setState({ isLoggedIn: true })}
      ></WelcomeSplash>
    ) : (
      <>
        <Header />
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              labelStyle: { fontSize: 15 },
              activeTintColor: '#e91e63',
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                  <AntDesign name="home" size={24} color="black" />
                ),
              }}
            />
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
                  <FontAwesome
                    name="question-circle-o"
                    size={24}
                    color="black"
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
