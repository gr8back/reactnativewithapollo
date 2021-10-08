import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './App';


const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},

  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
