import React, { Component } from 'react';
import { Container, Header, Item, Icon, Input, Button, Text } from 'native-base';

class SearchComponent extends Component {
  state = { term: '' }

  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            autoCapitalize = "none"
            onChangeText={term => this.setState({ term: term })}
            value={this.state.term}
          />
        </Item>
        <Button dark style={{ marginLeft: 5, height: 30 }}
          onPress={() => (
            // console.log(this.state.term)
            this.props.onPressSearch(this.state.term)
          )}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </Button>
      </Header>
    );
  }
}

export default SearchComponent;
