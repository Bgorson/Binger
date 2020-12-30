import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Container, Content, Header, StyleProvider } from 'native-base';

export default function Matches(props) {
  const [user, setUser] = useState(null);
  const [myLikedShows, setMyLikedShows] = useState([]);
  const [friendLikedShows, setFriendLikedShows] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('We are authenticated now!');
        setUser(user);
      } else {
        console.log('We are NOT authenticated');
      }
    });
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid + '/shows')
      .on('value', (snapshot) => {
        const shows = snapshot.val();
        if (shows) {
          setMyLikedShows(shows.likedShows);
        }
      });
    firebase
      .database()
      .ref('/users/' + props.route.params.friendID + '/shows')
      .on('value', (snapshot) => {
        const friendShows = snapshot.val();
        if (friendShows) {
          setFriendLikedShows(friendShows.likedShows);
        }
      });
  }, []);
  const myFavoriteTitles = [];
  for (let i = 0; i < myLikedShows.length; i++) {
    myFavoriteTitles.push(myLikedShows[i].title);
  }

  const friendFavoriteTitle = [];
  for (let i = 0; i < friendLikedShows.length; i++) {
    friendFavoriteTitle.push(friendLikedShows[i].title);
  }

  const intersection = friendFavoriteTitle.filter((element) =>
    myFavoriteTitles.includes(element)
  );
  // console.log('intersection', intersection);
  // console.log('match props', props.route.params.friendID);
  return (
    // <StyleProvider style={getTheme(material)}>
    <Content>
      {intersection.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </Content>
    // </StyleProvider>
  );
}
