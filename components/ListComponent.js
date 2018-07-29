import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ListItemComponent from './ListItemComponent';

const ListComponent = ({events}) => {
  const eventDetails = events.map(event => (
    // console.log('EVENT ', event)
    <ListItemComponent
      key={event.id}
      event={event}
    />
  ));

  return(
    <ScrollView>
      <View style={styles.containerStyle}>
        {eventDetails}
      </View>
    </ScrollView>
  )
}

export default ListComponent;

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
});
