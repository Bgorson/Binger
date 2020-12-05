import React, { useState } from 'react';
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
import { globalStyles } from '../styles/globalStyle';

export default function Picked({ route, props }) {
  // console.log('picked props', route.params);
  const { favoritedShowsArray } = route.params;
  return (
    <StyleProvider style={getTheme(material)}>
      <Content>
        <Text>This is what you've picked</Text>
        {favoritedShowsArray.map((item, index) => (
          <Text key={index}>{item.title}</Text>
        ))}
      </Content>
    </StyleProvider>
  );
}
