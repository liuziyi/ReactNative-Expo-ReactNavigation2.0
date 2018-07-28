import React, { Component } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Button,
  Icon,
  Text
} from 'native-base';

class SavedTab extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body><Text>Saved</Text></Body>
        </Header>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Today</Text>
            </ListItem>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assets/events/1.jpg')} />
                  <Body>
                    <Text style={{ width: 150 }}>Newport Folk Festival</Text>
                    <Text note style={{ fontSize: 10 }}>July 27 - 29, 2018</Text>
                    <Text note style={{ width: 200, fontSize: 10 }}>Newport, Rhode Island, USA</Text>
                  </Body>
                </Left>
                <Right>
                  <Button
                    bordered dark style={{ width: 60, height: 40 }}
                    onPress={() => Linking.openURL('http://eventful.com/festivals/music-festivals/newport-folk-2018/tickets')}
                  >
                    <Text style={{ fontSize: 12 }}>View</Text>
                  </Button>
                </Right>
              </CardItem>
              <CardItem style={{ height: 45 }}>
                <Left>
                  <Button transparent>
                    <Icon name="ios-share-outline" style={{ color: 'black' }}/>
                  </Button>
                  <Button transparent>
                    <Icon name="ios-star" style={{ color: 'black' }}/>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <ListItem itemDivider>
              <Text>This Week</Text>
            </ListItem>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assets/events/2.jpg')} />
                  <Body>
                    <Text style={{ width: 150 }}>Lollapalooza</Text>
                    <Text note style={{ fontSize: 10 }}>August 2 - 5, 2018</Text>
                    <Text note style={{ width: 200, fontSize: 10 }}>Chicago, IL, USA</Text>
                  </Body>
                </Left>
                <Right>
                  <Button
                    bordered dark style={{ width: 60, height: 40 }}
                    onPress={() => Linking.openURL('http://eventful.com/festivals/music-festivals/lollapalooza-2018/tickets')}
                  >
                    <Text style={{ fontSize: 12 }}>View</Text>
                  </Button>
                </Right>
              </CardItem>
              <CardItem style={{ height: 45 }}>
                <Left>
                  <Button transparent>
                    <Icon name="ios-share-outline" style={{ color: 'black' }}/>
                  </Button>
                  <Button transparent>
                    <Icon name="ios-star" style={{ color: 'black' }}/>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <ListItem itemDivider>
              <Text>This Month</Text>
            </ListItem>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assets/events/3.jpg')} />
                  <Body>
                    <Text style={{ width: 150 }}>Newport Jazz Festival</Text>
                    <Text note style={{ fontSize: 10 }}>August 3 - 5, 2018</Text>
                    <Text note style={{ width: 200, fontSize: 10 }}>Newport, Rhode Island, USA</Text>
                  </Body>
                </Left>
                <Right>
                  <Button
                    bordered dark style={{ width: 60, height: 40 }}
                    onPress={() => Linking.openURL('http://eventful.com/festivals/music-festivals/newport-jazz-2018/tickets')}
                  >
                    <Text style={{ fontSize: 12 }}>View</Text>
                  </Button>
                </Right>
              </CardItem>
              <CardItem style={{ height: 45 }}>
                <Left>
                  <Button transparent>
                    <Icon name="ios-share-outline" style={{ color: 'black' }}/>
                  </Button>
                  <Button transparent>
                    <Icon name="ios-star" style={{ color: 'black' }}/>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SavedTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
