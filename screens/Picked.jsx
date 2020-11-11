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

const data = [
  {
    title: 'Arrested Development',
    description:
      'is an American television sitcom created by Mitchell Hurwitz, which originally aired on Fox for three seasons from November 2, 2003, to February 10, 2006. The show follows the Bluths, a formerly wealthy dysfunctional family. It is presented in a serialized format, incorporating handheld camera work, voice-over narration, archival photos, and historical footage.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Arrested_Development.svg/1920px-Arrested_Development.svg.png',
  },
  {
    title: 'The Office',
    description:
      'The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/The_Office_US_logo.svg/1920px-The_Office_US_logo.svg.png',
  },
];

export default function Picked(props) {
  return (
    <StyleProvider style={getTheme(material)}>
      <Content>
        <Text>This is what you've picked</Text>
      </Content>
    </StyleProvider>
  );
}
