import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
// SHA-1 Certif 12894BF5A825D9CF7CB333BF01AE6970032FCF65
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const IOS_CLIENT_ID =
  '760231573937-nurpbj99ev4u2i31tccdqlu0t0g65pm8.apps.googleusercontent.com';
const ANDROID_CLIENT_ID =
  '760231573937-jqa3dp59us79c38s2ig3j4jm0936kglr.apps.googleusercontent.com';

export default class LoginScreen extends Component {
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log('LoginScreen.js.js 21 | ', result.user);
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        firebase.auth().signInWithCredential(credential);
        this.props.navigation.navigate('Main', {
          username: result.user.givenName,
          id: result.user.id,
        }); //after Google login redirect to Main

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen.js.js 30 | Error with login', e);
      return { error: true };
    }
  };

  render() {
    return <Button title="Login with Google" onPress={this.signInWithGoogle} />;
    // return (
    //   <Button
    //     title="Login with Google"
    //     onPress={() => console.log('clicked')}
    //   />
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
