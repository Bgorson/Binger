import React from 'react';
import { StyleSheet } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { Container, Text, StyleProvider, Button } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { colors } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import Header from '../components/Header';
import material from '../native-base-theme/variables/material';

const styles = StyleSheet.create({
  text: {
    // textAlign: 'center',
    // color: 'black',
    // // marginTop: '20%',
    // fontSize: 30,
  },
  button: {
    // // marginTop: '95%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonText: {
    // textAlign: 'center',
    // width: '100%',
  },
});

export default function Home(props) {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <StyleProvider style={getTheme(material)}>
          <Header />
        </StyleProvider>
        {/* <Grid> */}
        {/* <Col> */}
        <Text style={styles.text}>
          Welcome,
          {props.navigation.getParam('username') || props.displayName}
        </Text>
        {/* </Col> */}
        {/* </Grid> */}
        {/* <Grid>
          <Col> */}
        <Text style={styles.text}>How to Use:</Text>
        <Text>Use the Picker below to select shows you're interested in.</Text>
        <Text>
          Swipe Left on shows you want to watch, Right on the ones you don't.
        </Text>
        <Text>
          Scan Someone's QR Code to match with them and see what shows you have
          in common.
        </Text>
        {/* </Col>
        </Grid> */}

        {/* <Grid> */}
        {/* <Button onPress={() => props.navigation.navigate('Login')} rounded>
          <Text style={styles.buttonText}>Go back to SplashScreen</Text>
        </Button> */}
        {/* </Grid> */}
      </Container>
    </StyleProvider>
  );
}
