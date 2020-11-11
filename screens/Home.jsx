import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import globalStyles, { colors } from '../styles/globalStyle';
import { Container, Header, Text, StyleProvider } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
    marginTop: '20%',
    fontSize: 30,
  },
});
export default function LayoutExample() {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Grid>
          <Col style={{ height: 200 }}>
            <Text style={styles.text}>Welcome</Text>
          </Col>
        </Grid>

        <Grid>
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
