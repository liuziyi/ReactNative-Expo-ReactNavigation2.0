import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, CardItem, Body, Left, Right, Thumbnail, Button, Icon, Text } from 'native-base';

class CardComponent extends Component {
  render() {
    const images = {
      "1": require('../assets/events/1.jpg'),
      "2": require('../assets/events/2.jpg'),
      "3": require('../assets/events/3.jpg')
    }

    const logos = {
      "1": require('../assets/logos/1.jpg'),
      "2": require('../assets/logos/2.jpg'),
      "3": require('../assets/logos/3.png')
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={logos[this.props.logoSource]} />
            <Body>
              <Text>{this.props.title}</Text>
              <Text note>{this.props.date}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }}/>
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-share-outline" style={{ color: 'black' }}/>
            </Button>
            <Button transparent>
              <Icon name="ios-star-outline" style={{ color: 'black' }}/>
            </Button>
          </Left>
          <Right>
            <Text>{this.props.going} going</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
