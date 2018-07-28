import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Content, Header, Body, Thumbnail } from 'native-base';

import CardComponent from './CardComponent';

class UpcomingTab extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body><Text>Upcoming</Text></Body>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>Categories</Text>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                  <Thumbnail
                    style={{ marginHorizontal: 5, borderColor: 'white', borderWidth: 2 }}
                    source={require('../assets/categories/tech.jpg')}
                  />
                  <Text>Tech</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Thumbnail
                    style={{ marginHorizontal: 5 }}
                    source={require('../assets/categories/sports.jpg')}
                  />
                  <Text>Sports</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Thumbnail
                    style={{ marginHorizontal: 5 }}
                    source={require('../assets/categories/music.jpg')}
                  />
                  <Text>Music</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Thumbnail
                    style={{ marginHorizontal: 5, borderColor: 'white', borderWidth: 2 }}
                    source={require('../assets/categories/dance.jpg')}
                  />
                  <Text>Dance</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Thumbnail
                    style={{ marginHorizontal: 5, borderColor: 'white', borderWidth: 2 }}
                    source={require('../assets/categories/fashion.jpg')}
                  />
                  <Text>Fashion</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Thumbnail
                    style={{ marginHorizontal: 5, borderColor: 'white', borderWidth: 2 }}
                    source={require('../assets/categories/science.jpg')}
                  />
                  <Text>Science</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Thumbnail
                    style={{ marginHorizontal: 5, borderColor: 'white', borderWidth: 2 }}
                    source={require('../assets/categories/film.jpg')}
                  />
                  <Text>Film</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <CardComponent
            title="Newport Folk Festival"
            date="July 27 - 29, 2018"
            imageSource="1"
            logoSource="1"
            going="10k"
          />
          <CardComponent
            title="Lollapalooza"
            date="August 2 - 5, 2018"
            imageSource="2"
            logoSource="2"
            going="25k"
          />
          <CardComponent
            title="Newport Jazz Festival"
            date="August 3 - 5, 2018"
            imageSource="3"
            logoSource="3"
            going="15k"
          />
        </Content>
      </Container>
    );
  }
}

export default UpcomingTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
