import React, { Component } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
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
    id: 1,
  },
  {
    text: 'Arrested Development',
    name: 'Arrested Development',
    image: require('../assets/images/arrested-development.jpg'),
    id: 2,
  },
  {
    text: 'Back To the Future',
    name: 'Back To the Future',
    image: require('../assets/images/back_to_the_future.jpg'),
    id: 3,
  },
  {
    text: 'Raiders of the Lost Ark',
    name: 'Raiders of the Lost Ark',
    image: require('../assets/images/Raiders-of-the-lost-ark.jpg'),
    id: 4,
  },
];

const options = {
  method: 'GET',
  url: 'https://ott-details.p.rapidapi.com/search',
  params: { title: 'Endgame', page: '1' },
  headers: {
    'x-rapidapi-key': '61270c9ef3mshff8e353b8c5bb48p1be705jsn94c90d9f22f0',
    'x-rapidapi-host': 'ott-details.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log('response', response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const removeFromList = (item, array) => {
  return array.filter((value) => value !== item);
};

export default function DeckSwiperPicker(props) {
  return (
    <Container>
      <View>
        <DeckSwiper
          looping={false}
          renderEmpty={() => console.log('Data empty, get more')}
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
