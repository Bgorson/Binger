import React, { useEffect } from 'react';
import * as firebase from 'firebase';

import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LoginScreen from '../components/LoginButton';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Button, StyleProvider } from 'native-base';
import { AppLoading } from 'expo';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

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
    fontFamily: 'Nunito',
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
  // DISABLE TO ALLOW ACCOUNT SWITCH
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('We are authenticated now on the login screen!', user);
        props.navigation.navigate('Main', {
          user: user,
        });
      } else {
        console.log('We are NOT authenticated on the login screen');
      }
    });
  });
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Nunito: require('../assets/fonts/Nunito-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
    >
      <StyleProvider style={getTheme(material)}>
        <>
          <View>
            <Text style={styles.text}>Binger</Text>
          </View>
          <View style={styles.button}>
            {/* <Button onPress={props.loggedIn} rounded info>
              <Text style={styles.buttonText}>Login</Text>
            </Button> */}
            <LoginScreen navigation={props.navigation} />
            {/* <Button onPress={() => props.navigation.navigate('Main')} rounded> */}
            {/* <Text style={styles.buttonText}>Skip</Text> */}
            {/* </Button> */}
          </View>
        </>
      </StyleProvider>
    </ImageBackground>
  );
}
