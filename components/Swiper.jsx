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
  Icon
} from 'native-base';

export default class DeckSwiperPicker extends Component {
  constructor() {
    super();
    this.state = { showData: [], isLoading: true, offset: 0 };
  }

  componentDidMount() {
    console.log(this.state.showData.length);

    if (this.state.showData.length <= 0) {
      console.log('loop');
      console.log(this.props.likedShows);
      axios
        .request({
          method: 'GET',
          url: 'https://arcane-scrubland-73688.herokuapp.com/',
          params: { type: 'tv', offset: this.state.offset }
        })
        .then(response => {
          const showAPIArray = response.data;
          let firebaseArray;
          if (this.props.likedShows) {
            firebaseArray = this.props.likedShows.concat(
              this.props.rejectedShows
            );
          } else {
            firebaseArray = this.props.rejectedShows;
          }

          console.log('array', firebaseArray);
          var freshShows = showAPIArray.filter(function(objFromA) {
            return !firebaseArray.find(function(objFromB) {
              return objFromA.title === objFromB.title;
            });
          });

          this.setState({
            showData: freshShows,
            offset: this.state.offset + 50,
            isLoading: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  updateSwipeData() {
    const { offset } = this.state;
    this.setState({ isLoading: true });
    axios
      .request({
        method: 'GET',
        url: 'https://arcane-scrubland-73688.herokuapp.com/',
        params: { type: 'tv', offset }
      })
      .then(response => {
        this.setState({
          showData: response.data,
          offset: offset + 50,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
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
                onSwipeLeft={e => this.props.onSwipeLeftStore(e)}
                onSwipeRight={e => this.props.onRightSwipeDiscard(e)}
                renderItem={item => (
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
                          uri: item.ImageURL
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
