import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Header, Item, Icon, Input } from 'native-base';
import axios from 'axios';

import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';

const API_KEY = 'XfNXxQ9XMFwHzVS7';

class ExploreTab extends Component {
  state = {
    events: []
  }

  onPressSearch = term => {
    // console.log(term);
    const url = 'http://api.eventful.com/json/events/search?app_key=' + API_KEY + '&category=' + term
    // console.log('URL ', url)
    axios.get(url)
    .then(res => {
      console.log('EVENTS ', res.data.events.event)
      this.setState({ events: res.data.events.event })
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <SearchComponent
          onPressSearch={this.onPressSearch}
        />
        <Content>
          <ListComponent
            events={this.state.events}
          />
        </Content>
      </Container>
    );
  }
}

export default ExploreTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
