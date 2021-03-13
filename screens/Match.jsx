import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Container, Button, Header, StyleProvider } from 'native-base';

// Retrieve list of Firebase Friends

export default function Match(props) {
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid + '/friends')
      .once('value', snapshot => {
        const valueDB = snapshot.val().friends;
        const friendObject = [];
        valueDB.forEach(value => {
          let entry = {};
          let arrayOfValues = value.split('|');
          entry.id = arrayOfValues[0];
          entry.name = arrayOfValues[1];
          friendObject.push(entry);
        });
        setFriends(friendObject);
      });
  }, []);
  return (
    <>
      <Text style={{ textAlign: 'center' }}>
        A List of matches will appear here
      </Text>
      {friends.map((item, index) => (
        <Button
          key={index}
          onPress={() => {
            props.navigation.navigate('Matches', {
              friendID: item.id
            });
          }}
        >
          <Text>{item.name}</Text>
        </Button>
      ))}
    </>
  );
}
