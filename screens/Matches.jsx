import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Container, Header, StyleProvider } from 'native-base';

export default function Matches(props) {
  return (
    <StyleProvider style={getTheme(material)}>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Once you click on a match come here
      </Text>
    </StyleProvider>
  );
}
