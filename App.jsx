import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import PickerStackScreen from './routes/PickStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './routes/rootNavigate';
// RN Version > 0.63
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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

    return (
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Picker" component={PickerStackScreen} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
