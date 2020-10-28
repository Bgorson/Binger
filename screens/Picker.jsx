import React, { useState } from 'react';
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
import { globalStyles } from '../styles/globalStyle';

export default function Picker({ navigation }) {
  return (
    <Content>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to the Picker
      </Text>
      <Button onPress={() => navigation.navigate('Picked')} block>
        <Text>See what you've Picked</Text>
      </Button>
    </Content>
  );
}
