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
let cards = [
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
  {
    text: 'Back To the Future',
    name: 'Back To the Future',
    image: require('../assets/images/back_to_the_future.jpg'),
  },
  {
    text: 'Raiders of the Lost Ark',
    name: 'Raiders of the Lost Ark',
    image: require('../assets/images/Raiders-of-the-lost-ark.jpg'),
  },
];
const removeFromList = (item, array) => {
  return array.filter((value) => value !== item);
};

export default function DeckSwiperPicker(props) {
  return (
    <Container>
      <View>
        <DeckSwiper
          onSwipeLeft={(e) => {
            props.onSwipeLeftStore(e);
            cards = removeFromList(e, cards);
          }}
          onSwipeRight={(e) => {
            props.onRightSwipeDiscard(e);
            cards = removeFromList(e, cards);
          }}
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
