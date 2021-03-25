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

export default class DeckSwiperPicker extends Component {
  constructor() {
    super();
    this.state = { showData: [], isLoading: true, offset: 0, open: false };
  }

  componentDidMount() {
    axios
      .request({
        method: 'GET',
        url: 'https://arcane-scrubland-73688.herokuapp.com/',
        params: { type: 'tv', filter: 'netflix', offset: this.state.offset },
      })
      .then((response) => {
        this.setState({
          showData: response.data,
          offset: 50,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateSwipeData() {
    const { offset } = this.state;
    this.setState({ isLoading: true });
    axios
      .request({
        method: 'GET',
        url: 'https://arcane-scrubland-73688.herokuapp.com/',
        params: { type: 'tv', filter: 'netflix', offset },
      })
      .then((response) => {
        this.setState({
          showData: response.data,
          offset: offset + 50,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading || this.state.showData.length <= 1 ? (
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
                    {this.state.open ? <Text>{item.description}</Text> : null}
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
                      <Button
                        primary
                        onPress={() =>
                          this.setState((prevState) => ({
                            open: !prevState.open,
                          }))
                        }
                      >
                        <Text>Click for description</Text>
                      </Button>
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
