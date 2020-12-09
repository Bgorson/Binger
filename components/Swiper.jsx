import React, { Component } from 'react';
import { Image } from 'react-native';
import Constants from 'expo-constants';
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

// const options = {
//   method: 'GET',
//   url: 'https://ott-details.p.rapidapi.com/getnew',
//   params: { region: 'US', page: 1 },
//   headers: {
//     'x-rapidapi-key': Constants.manifest.extra.RAPID_API_KEY,
//     'x-rapidapi-host': 'ott-details.p.rapidapi.com',
//   },
// };

// https://api.themoviedb.org/3/search/tv?api_key=5fd6c7dc65d4a3ae3c7ff89924d74427&language=en-US&page=1&query=Breaking%20Bad&include_adult=false

export default class DeckSwiperPicker extends Component {
  constructor() {
    super();
    this.state = { showData: [], offset: 0 };
  }

  componentDidMount() {
    axios
      .request({
        method: 'GET',
        url: 'https://arcane-scrubland-73688.herokuapp.com/',
        params: { type: 'tv', offset: this.state.offset },
      })
      .then((response) => {
        // console.log('response', response.data.shows);
        this.setState({ showData: response.data, offset: 50 });
        // console.log(this.state.showData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateSwipeData() {
    console.log('getting new list at: ', this.state.offset);
    const { offset } = this.state;
    axios
      .request({
        method: 'GET',
        url: 'https://arcane-scrubland-73688.herokuapp.com/',
        params: { type: 'tv', offset },
      })
      .then((response) => {
        this.setState({
          showData: response.data,
          offset: offset + 50,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.showData.length <= 1 ? (
          <Container>
            <View>
              <Text> Loading</Text>
            </View>
          </Container>
        ) : (
          <Container>
            <View>
              <DeckSwiper
                dataSource={this.state.showData}
                looping={false}
                renderEmpty={() => this.updateSwipeData()}
                onSwipeLeft={(e) => this.props.onSwipeLeftStore(e)}
                onSwipeRight={(e) => this.props.onRightSwipeDiscard(e)}
                renderItem={(item) => (
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Left>
                        {/* <Thumbnail
                          source={require('../assets/images/the_Office.jpg')}
                        /> */}
                        <Body>
                          <Text>{item.text}</Text>
                          <Text note>{item.text}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={{
                          uri: item.ImageURL,
                        }}
                        style={{ flex: 1, height: 300 }}
                      />
                    </CardItem>
                    <CardItem>
                      <Text>{item.title}</Text>
                    </CardItem>
                  </Card>
                )}
              />
            </View>
          </Container>
        )}
      </>
    );
  }
}
