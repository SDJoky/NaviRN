/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
    StackNavigator,
}from 'react-navigation';

import React, { Component, PropTypes } from 'react';
import { 
  AppRegistry,NavigatorIOS, Text, TouchableHighlight, View ,StyleSheet,
} from 'react-native';


export default class NavigationProject extends Component {
    render() {
      return (
        <NavigatorIOS
          initialRoute={{
            component: MyScene,
            title: 'Home',
          }}
          style={{flex: 1}}
        />
      )
    }
}

  class MyScene extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired,
    }
  
    constructor(props, context) {
      super(props, context);
      this._onForward = this._onForward.bind(this);
    }
  
    _onForward() {
      this.props.navigator.push({
        title: 'Scene ' + nextIndex,
      });
    }

    render() {
      return (
          <View>
          <Text>Current Scene: { this.props.title }</Text>
          <TouchableHighlight onPress={this._onForward}>
            <Text>Tap me to load the next scene</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }

  // const styles = StyleSheet.create({
  //   container: {
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#F5FCFF',
  //     flexDirection: 'column',
  //     flex: 1,
  //     paddingTop:22,
  //   },

  //   bigblue: {
  //     color: 'blue',
  //     fontWeight: 'bold',
  //     fontSize: 20,
  //   },
  
  //   red: {
  //     color: 'red',
  //   }
  // });

AppRegistry.registerComponent('NavigationProject', () => NavigationProject);
