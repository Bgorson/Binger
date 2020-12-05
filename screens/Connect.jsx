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
  const [isScanning, setIsScanning] = useState(false);
  return (
    <>
      {isScanning ? (
        <StyleProvider style={getTheme(material)}>
          <View>
            <Text style={{ textAlign: 'center', marginTop: 300 }}>
              Find and Seek Matches here
            </Text>
            <QRCode value={firebase.auth().currentUser.uid} />
          </View>
        </StyleProvider>
      ) : (
        <Scanner />
      )}
      <Button title="Toggle Scan" onPress={() => setIsScanning(!isScanning)}>
        <Text>Toggle QR Scanner</Text>
      </Button>
    </>
  );
}
