import { LogBox } from 'react-native';
// React Navigation Setup
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './screens/Main';
import WelcomeSplash from './screens/WelcomeSplash';

// RN Version > 0.6

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
LogBox.ignoreLogs(['Setting a timer']);

const MainNavigator = createSwitchNavigator({
  Login: { screen: WelcomeSplash },
  Main: { screen: Main },
});

const App = createAppContainer(MainNavigator);

export default App;
