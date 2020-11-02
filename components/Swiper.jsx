import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  View,
  Button,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';
const cards = [
  {
    text: 'The Office',
    name: 'The Office',
    image: require('../assets/images/the_Office.jpg'),
  },
  {
    text: 'Arrested Development',
    name: 'Arrested Development',
    image: require('../assets/images/arrested-development.jpg'),
  },
];
export default function DeckSwiperPicker() {
  return (
    <Container>
      <View>
        <DeckSwiper
          onSwipeLeft={() => console.log('Swipped Left')}
          onSwipeRight={() => console.log('Swipped Right')}
          dataSource={cards}
          renderItem={(item) => (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>On Netflix</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              {/* <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem> */}
            </Card>
          )}
        />
      </View>
    </Container>
  );
}
