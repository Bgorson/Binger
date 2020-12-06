import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Match from '../screens/Match';
import Matches from '../screens/Matches';

const MatchStack = createStackNavigator();
function MatchStackScreen(props) {
  return (
    <MatchStack.Navigator>
      <MatchStack.Screen name="MatchList">
        {(props) => <Match navigation={props.navigation} />}
      </MatchStack.Screen>
      <MatchStack.Screen name="Matches" component={Matches} />
    </MatchStack.Navigator>
  );
}

export default MatchStackScreen;
