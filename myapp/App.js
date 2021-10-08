import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Image,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Animatable from 'react-native-animatable';
import uuid from 'react-native-uuid';
import { getUniqueId, getPhoneNumber } from 'react-native-device-info';

class myapp extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  componentDidMount() {
    console.log('mounted ' + getUniqueId());
    console.log('phone number ' + JSON.stringify(getPhoneNumber()))
    console.log("uuid " + uuid.v4())
    SplashScreen.hide();
  }
  state = {
    duration: 1000,
    toggledOn: false,
  };

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.banner}>React Native Base </Text>
          <Text style={styles.subtitle}>With Splash Screen</Text>
          <Text style={styles.subtitle}>With Apollo</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 50,

    // justifyContent: 'center',
  },
  banner: {
    fontFamily: 'Cochin',
    fontSize: 60,
    color: 'blue',
    textAlign: 'center',
    marginTop: 100,
  },
  datecontainer: {
    flex: 1,
    // justifyContent: 'center',
    color: 'black',
  },
  scrollView: {
    backgroundColor: 'rgba(70,150,190,0.2)',
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle: {
    flex: 1,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  slider: {
    height: 30,
    margin: 10,
  },
  toggle: {
    width: 120,
    backgroundColor: '#333',
    borderRadius: 3,
    padding: 5,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
    color: 'rgba(255, 255, 255, 1)',
  },
  toggledOn: {
    color: 'rgba(255, 33, 33, 1)',
    fontSize: 16,
    transform: [
      {
        rotate: '8deg',
      },
      {
        translateY: -20,
      },
    ],
  },
  sectionHeader: {
    backgroundColor: '#F5FCFF',
    padding: 15,
  },
  sectionHeaderText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default myapp;
