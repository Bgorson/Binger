import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
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

const filterViewedShows = (viewedShows, newShows) => {
  return newShows.filter((show) => !viewedShows.includes(show.title));
};

export default class DeckSwiperPicker extends Component {
  constructor(props) {
    super();
    const viewedShowsProp = props.viewedShows.map(function (item) {
      return item['title'];
    });
    this.state = {
      showData: [],
      isLoading: true,
      offset: 0,
      open: false,
      viewedShows: viewedShowsProp,
      firstRender: true,
    };
  }

  componentDidMount() {
    axios
      .request({
        method: 'GET',
        url: 'https://arcane-scrubland-73688.herokuapp.com/',
        params: { type: 'tv', filter: 'netflix', offset: this.state.offset },
      })
      .then((response) => {
        const filteredShows = filterViewedShows(
          this.state.viewedShows,
          response.data
        );
        // console.log('Post Filter', filteredShows);
        this.setState({
          showData: filteredShows || [],
          offset: 50,
          isLoading: false,
        });
        if (filteredShows?.length <= 0 || filteredShows === undefined) {
          console.log('no initial shows found');
          this.updateSwipeData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateSwipeData() {
    const { offset } = this.state;
    console.log('offset', offset);
    this.setState({ isLoading: true });
    axios
      .request({
        method: 'GET',
        url: 'https://arcane-scrubland-73688.herokuapp.com/',
        params: { type: 'tv', filter: 'netflix', offset },
      })
      .then((response) => {
        const filteredShows =
          filterViewedShows(this.state.viewedShows, response.data) || [];
        // console.log('Post Filter on Update', filteredShows);

        this.setState({
          showData: filteredShows,
          offset: offset + 50,
          isLoading: false,
        });
        if (
          (filteredShows?.length <= 0 || filteredShows === undefined) &&
          this.state.firstRender
        ) {
          // this.updateSwipeData();
        }
        if (filteredShows.length > 0) {
          this.setState({
            firstRender: false,
          });
        }
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
                  <TouchableHighlight
                    onPress={() =>
                      this.setState((prevState) => ({
                        open: !prevState.open,
                      }))
                    }
                  >
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
                      </CardItem>
                    </Card>
                  </TouchableHighlight>
                )}
              />
            </View>
          </Container>
        )}
      </>
    );
  }
}
