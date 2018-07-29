import React, { Component } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { ListItem, Thumbnail, Left, Body, Right, Button, Text } from 'native-base';

const ListItemComponent = ({event}) => {
  const url = event.url;

  return(
    <ListItem>
      <Body>
        <Text>{event.title}</Text>
        <Text note>{event.start_time}</Text>
        <Text note>{event.venue_address}</Text>
      </Body>
      <Right>
        <Button
          bordered
          dark style={{ width: 60, height: 40, paddingLeft: 1 }}
          onPress={() => Linking.openURL(url)}
        >
          <Text style={{ fontSize: 12 }}>
            View
          </Text>
        </Button>
      </Right>
    </ListItem>
  )
}

export default ListItemComponent;
