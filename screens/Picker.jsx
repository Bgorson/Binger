import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
import Swiper from '../components/Swiper';
import { globalStyles } from '../styles/globalStyle';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default function Picker({ navigation }) {
  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.text}>Welcome to the Picker</Text>
      </Header>
      <Swiper />
      {/* <View style={styles.bottom}>
        <Button onPress={() => navigation.navigate('Picked')} block>
          <Text>See what you've Picked</Text>
        </Button>
      </View> */}
    </View>
  );
}
