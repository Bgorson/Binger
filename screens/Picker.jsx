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
  StyleProvider,
} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import Swiper from '../components/Swiper';
import { globalStyles } from '../styles/globalStyle';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
const likedShows = [];

const onSwipeLeftStore = (item) => {
  likedShows.push(item);
  console.log(item);
};
const onRightSwipeDiscard = (item) => {
  console.log(item);
};

export default function Picker({ navigation }) {
  return (
    <StyleProvider style={getTheme(material)}>
      <>
        {/* <Text style={styles.text}>Welcome to the Picker</Text> */}
        <Swiper
          onSwipeLeftStore={onSwipeLeftStore}
          onRightSwipeDiscard={onRightSwipeDiscard}
        />
        {/* <View style={styles.bottom}>

      </View> */}
        <Button
          onPress={() => {
            navigation.navigate('Picked', {
              favoritedShowsArray: likedShows,
            });
          }}
          block
        >
          <Text>See what you've Picked</Text>
        </Button>
      </>
    </StyleProvider>
  );
}
