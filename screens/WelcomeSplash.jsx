import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useState,
} from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 50,
    marginTop: '50%',
    marginLeft: '20%',
  },
  button: {
    marginTop: '95%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    width: '100%',
  },
});

export default function WelcomeSplash(props) {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
    >
      <View>
        <Text style={styles.text}>Binger</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={props.loggedIn} rounded info>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button onPress={props.loggedIn} rounded>
          <Text style={styles.buttonText}>Signup</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}
