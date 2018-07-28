import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Body, Left, Right, Icon } from 'native-base';

class ProfileDraftTab extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left></Left>
          <Body><Text>Profile</Text></Body>
          <Right>
            <Icon name="ios-settings-outline"></Icon>
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', paddingLeft: 10, paddingTop: 20 }}>
                <Image
                  source={require('../assets/users/2.jpg')}
                  style={{ marginLeft: 10, width: 80, height: 80, borderRadius: 38 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ alignItems: 'center', paddingTop: 10, paddingBottom: 20 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jess Smith</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>10</Text>
                    <Text style={{ fontSize: 10, color:'grey' }}>Upcoming</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>100</Text>
                    <Text style={{ fontSize: 10, color:'grey' }}>Past</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                  <Icon name="logo-facebook"></Icon>
                  <Icon name="logo-instagram"></Icon>
                  <Icon name="logo-twitter"></Icon>
                </View>
              </View>
            </View>

          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileDraftTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
