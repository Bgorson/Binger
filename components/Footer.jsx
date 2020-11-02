import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import Stack from '../routes/homeStack';
import Picker from '../screens/Picker';
import Home from '../screens/Home';
import * as RootNavigation from '../routes/rootNavigate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const FooterComponent = () => (
  <Footer>
    <FooterTab>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Picker" component={Picker} />
      </Tab.Navigator>
    </FooterTab>
  </Footer>
);
export default FooterComponent;
