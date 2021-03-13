import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleProvider } from 'native-base';
import Tabs from '../components/Tabs';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { navigationRef } from '../routes/rootNavigate';

export default function Main(props) {
  // console.log('These are props available in main', props);
  return (
    <>
      {/* <NavigationContainer ref={navigationRef}> */}
      <NavigationContainer>
        <Tabs navigation={props.navigation} />
      </NavigationContainer>
    </>
  );
}
