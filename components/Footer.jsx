import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import Stack from '../routes/homeStack';
import * as RootNavigation from '../routes/rootNavigate';

const FooterComponent = () => (
  <Container>
    <Stack />
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => RootNavigation.navigate('Picker')}>
          <Icon name="apps" />
          <Text>Picker</Text>
        </Button>
        <Button vertical onPress={() => RootNavigation.navigate('Picked')}>
          <Icon name="camera" />
          <Text>Picked</Text>
        </Button>
        <Button vertical active onPress={() => RootNavigation.navigate('Home')}>
          <Icon active name="navigate" />
          <Text>Home</Text>
        </Button>
        <Button vertical onPress={() => RootNavigation.navigate('About')}>
          <Icon name="person" />
          <Text>About</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);
export default FooterComponent;
