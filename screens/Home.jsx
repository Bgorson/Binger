import React, { useState } from 'react';
import { globalStyles } from '../styles/globalStyle';
import { Content, Text } from 'native-base';

export default function Home(props) {
  return (
    <Content>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to Binger
      </Text>
    </Content>
  );
}
