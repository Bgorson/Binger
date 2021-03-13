import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Connect from '../screens/Connect';
import ConnectCode from '../screens/ConnectCode';

const ConnectStack = createStackNavigator();
function ConnectStackScreen(props) {
  return (
    <ConnectStack.Navigator>
      <ConnectStack.Screen name='ConnectCamera'>
        {props => <Connect navigation={props.navigation} />}
      </ConnectStack.Screen>
      <ConnectStack.Screen name='ConnectCode'>
        {props => <ConnectCode navigation={props.navigation} />}
      </ConnectStack.Screen>
    </ConnectStack.Navigator>
  );
}

export default ConnectStackScreen;
