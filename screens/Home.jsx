import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, StyleProvider, Button } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { colors } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
    marginTop: '20%',
    fontSize: 30,
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
export default function Home(props) {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Grid>
          <Col style={{ height: 200 }}>
            <Text style={styles.text}>
              Welcome, {props.navigation.getParam('username')}
            </Text>
          </Col>
        </Grid>

        <Grid>
          <Button onPress={() => props.navigation.navigate('Login')} rounded>
            <Text style={styles.buttonText}>Go back to SplashScreen</Text>
          </Button>

          <Col style={{ backgroundColor: colors.charcoal, height: 200 }}></Col>
          <Col
            style={{ backgroundColor: colors.redishOrange, height: 200 }}
          ></Col>
          <Col style={{ backgroundColor: colors.green, height: 200 }}></Col>
        </Grid>
      </Container>
    </StyleProvider>
  );
}
