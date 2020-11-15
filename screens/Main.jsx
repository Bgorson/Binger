import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleProvider } from 'native-base';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { navigationRef } from '../routes/rootNavigate';

export default function Main(props) {
  return (
    <>
      <StyleProvider style={getTheme(material)}>
        <Header />
      </StyleProvider>
      <NavigationContainer ref={navigationRef}>
        <Tabs navigation={props.navigation} />
      </NavigationContainer>
    </>
  );
}
