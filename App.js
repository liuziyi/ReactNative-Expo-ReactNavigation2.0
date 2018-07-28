import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'native-base';

import UpcomingTab from './components/UpcomingTab';
import ExploreTab from './components/ExploreTab';
import SavedTab from './components/SavedTab';
import NotificationsTab from './components/NotificationsTab';
import ProfileTab from './components/ProfileTab';

class App extends React.Component {
  render() {
    return (
      <AppTabNavigator/>
    );
  }
}

export default App;

const AppTabNavigator = createBottomTabNavigator({
  Upcoming: {
    screen: UpcomingTab,
    navigationOptions: {
      tabBarLabel: 'Upcoming',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-megaphone-outline" color={tintColor} size={24}/>
      )
    }
  },
  Explore: {
    screen: ExploreTab,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search-outline" color={tintColor} size={24}/>
      )
    }
  },
  Saved: {
    screen: SavedTab,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-star-outline" color={tintColor} size={24}/>
      )
    }
  },
  Notifications: {
    screen: NotificationsTab,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: ({tintColor}) => (
        <View style={{ flexDirection: 'row' }}>
          <Icon name="ios-notifications-outline" color={tintColor} size={24}/>
          <Badge style={{ width: 20, height: 20 }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              2
            </Text>
          </Badge>
        </View>
      )
    }
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person-outline" color={tintColor} size={24}/>
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'pink',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
