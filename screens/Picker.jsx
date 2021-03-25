import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
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

// // Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDYQ39kqFcFqNFx6hWxAF5iJVIUq8RWxew',
  authDomain: 'binger-3ac6e.firebaseapp.com',
  databaseURL: 'https://binger-3ac6e.firebaseio.com',
  projectId: 'binger-3ac6e',
  storageBucket: 'binger-3ac6e.appspot.com',
  messagingSenderId: '380873901031',
  appId: '1:380873901031:web:fae74172c3cd03e83ef342',
  measurementId: 'G-GYG7DECGBM',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function Picker({ navigation }, props) {
  const [user, setUser] = useState(null);
  const [likedShows, setLikedShows] = useState([]);
  const [rejectedShows, setRejectedShows] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`/users/${firebase.auth().currentUser.uid}/shows`)
      .once('value', (snapshot) => {
        const shows = snapshot.val();
        console.log('all the liked shows here', shows.likedShows);
        if (shows) {
          setLikedShows(shows.likedShows);
          setRejectedShows(shows.rejectedShows);
        }
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('We are authenticated now!');
        setUser(user);
      } else {
        console.log('We are NOT authenticated');
      }
    });
  }, []);

  const onSwipeLeftStore = (item) => {
    const array = likedShows || [];
    array.push(item);
    setLikedShows(array);
    if (user != null) {
      firebase.database().ref(`users/${user.uid}/shows`).update({
        likedShows,
      });
    }
  };
  const onRightSwipeDiscard = (item) => {
    const array = rejectedShows || [];
    array.push(item);
    setRejectedShows(array);
    if (user != null) {
      firebase.database().ref(`users/${user.uid}/shows`).update({
        rejectedShows,
      });
    }
  };
  return (
    <StyleProvider style={getTheme(material)}>
      <>
        {/* <Button onPress={() => console.log(likedShows)}>
          <Text>FireBase</Text>
        </Button> */}
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
