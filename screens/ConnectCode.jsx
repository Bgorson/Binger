import React, { useState } from 'react';
import * as firebase from 'firebase';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Scanner from '../components/Scanner';
import { globalStyles } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Container, Header, StyleProvider, Button } from 'native-base';

export default function ConnectCode(props) {
  return (
    <>
      <StyleProvider style={getTheme(material)}>
        <View>
          <Text>Find and Seek Matches here</Text>
          <QRCode
            value={
              firebase.auth().currentUser.uid +
              '|' +
              firebase.auth().currentUser.providerData[0].displayName
            }
          />
          <Button
            title='Toggle Scan'
            onPress={() => {
              props.navigation.navigate('ConnectCamera');
            }}
          >
            <Text>Toggle QR Scanner</Text>
          </Button>
        </View>
      </StyleProvider>
    </>
  );
}
