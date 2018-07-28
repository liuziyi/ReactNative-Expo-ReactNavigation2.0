import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Icon,
  Button,
  Card,
  CardItem,
  Thumbnail,
  Text
} from 'native-base';

class ProfileTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({ activeIndex: index })
  }

  renderUpcoming = () => {
    return(
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
            <Button bordered dark style={{ width: 80, height: 40 }}>
              <Text style={{ fontSize: 12 }}>1 Ticket</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    )
  }

  renderPast = () => {
    return(
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/events/4.jpg')} />
            <Body>
              <Text style={{ width: 150 }}>OneRepublic</Text>
              <Text note style={{ fontSize: 10 }}>Aug 7, 2018</Text>
              <Text note style={{ width: 200, fontSize: 10 }}>The Theatre at Ace Hotel</Text>
            </Body>
          </Left>
          <Right>
            <Button bordered dark style={{ width: 80, height: 40 }}>
              <Text style={{ fontSize: 12 }}>2 Tickets</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    )
  }

  renderSection = () => {
    if(this.state.activeIndex == 0){
      return(
        <View style={{ borderTopWidth: 1, borderTopColor: '#eae5e5', padding: 10 }}>
          {this.renderUpcoming()}
        </View>
      )
    }else{
      return(
        <View style={{ borderTopWidth: 1, borderTopColor: '#eae5e5', padding: 10 }}>
          {this.renderPast()}
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left></Left>
          <Body><Text>Profile</Text></Body>
          <Right>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/edit.png')}
                style={{ height: 25, width: 25, marginTop: 2 }}
              />
              <Icon style={{ paddingLeft: 10 }} name="ios-settings-outline"></Icon>
            </View>
          </Right>
        </Header>
        <Content>

          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <View style={{ flex: 1, alignItems: 'center', paddingLeft: 10, paddingTop: 20 }}>
              <Image
                source={require('../assets/users/2.jpg')}
                style={{ marginLeft: 10, width: 80, height: 80, borderRadius: 38 }}
              />
            </View>
            <View style={{ flex: 3 }}>
              <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jess Smith</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ alignItems: 'center' }}>
                  <Text>10</Text>
                  <Text style={{ fontSize: 10, color:'grey' }}>Upcoming Events</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text>100</Text>
                  <Text style={{ fontSize: 10, color:'grey' }}>Past Events</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around',
              borderTopWidth: 1, borderTopColor: '#eae5e5' }}
            >
              <Button transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}
              >
                <Text style={[this.state.activeIndex == 0 ? { color: 'black' } : { color: 'grey' }]}>
                  Upcoming
                </Text>
              </Button>
              <Button transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}
              >
                <Text style={[this.state.activeIndex == 1 ? { color: 'black' } : { color: 'grey' }]}>
                  Past
                </Text>
              </Button>
            </View>
            {this.renderSection()}
          </View>

        </Content>
      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
