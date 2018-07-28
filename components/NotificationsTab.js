import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Header, Body, List, ListItem, Left, Right, Thumbnail, Text } from 'native-base';

class NotificationsTab extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body><Text>Notifications</Text></Body>
        </Header>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/events/1.jpg')} />
              </Left>
              <Body>
                <Text>Reminder</Text>
                <Text note>Newport Folk Festival Today</Text>
              </Body>
              <Right>
                <Text note>3:00 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/logos/1.jpg')} />
              </Left>
              <Body>
                <Text>Announcement</Text>
                <Text note>XYZ just announced a new event</Text>
              </Body>
              <Right>
                <Text note>2:00 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default NotificationsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
