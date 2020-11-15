import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import * as Google from 'expo-google-app-auth';

const IOS_CLIENT_ID =
  '803507948503-7i64g02kp264fedt19a7e2rm8qd7d88e.apps.googleusercontent.com';
const ANDROID_CLIENT_ID =
  '803507948503-6mnb5p39o1svvpm889k5ru1s4ogpe0ug.apps.googleusercontent.com';

export default class LoginScreen extends Component {
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log('LoginScreen.js.js 21 | ', result.user.givenName);
        this.props.navigation.navigate('Main', {
          username: result.user.givenName,
        }); //after Google login redirect to Profile
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
