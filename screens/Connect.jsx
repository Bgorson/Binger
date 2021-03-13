import React, { useState } from 'react';
import * as firebase from 'firebase';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Scanner from '../components/Scanner';
import { globalStyles } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Container, Header, StyleProvider, Button } from 'native-base';

export default function Connect(props) {
  return (
    <>
      <Scanner />
      <Button
        title='Toggle Scan'
        onPress={() => {
          props.navigation.navigate('ConnectCode');
        }}
      >
        <Text>Toggle QR Scanner</Text>
      </Button>
    </>
  );
}
