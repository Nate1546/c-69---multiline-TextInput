import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Header from './Header/Header'
import ReadStoryScreen from './Screens/ReadStoryScreen'
import WriteStoryScreen from './Screens/WriteStoryScreen'

export default class App extends Component {
  render(){
    return (
      
      <View style={styles.container}>
        <Header/>
        <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  READ: {screen: ReadStoryScreen},
  WRITE: {screen: WriteStoryScreen},
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});
