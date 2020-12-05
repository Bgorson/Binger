import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Container, Button, Header, StyleProvider } from 'native-base';

export default function Match(props) {
  return (
    <StyleProvider style={getTheme(material)}>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 300 }}>
          A List of matches will appear here
        </Text>
        <Button
          onPress={() => {
            props.navigation.navigate('Matches', {
              friendID: 'A Friend ID',
            });
          }}
        >
          <Text>Example of Jumping to a match</Text>
        </Button>
      </View>
    </StyleProvider>
  );
}
