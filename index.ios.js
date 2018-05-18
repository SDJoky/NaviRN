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
  Animated,

  NativeModules,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';

// LayoutAnimation允许你在全局范围内创建和更新动画
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
console.disableYellowBox = true;
console.warn('yellowBox is disabled')
export default class NavigationProject extends Component {

    render() {
      return (
        <NavigatorIOS
          initialRoute={{
            component: MyScene,
            title: 'Home',
            passProps: { myProp: 'foo' },
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

    state = {
      w: 70,
      h: 70,
    };

    _onPress = () => {
      // Animate the update
      LayoutAnimation.spring();
      this.setState({w: this.state.w + 5, h: this.state.h + 5})
    }
  

    render() {
      return (
          <View style={[styles.container,{padding:10}] }>
          {/* 添加渐变view */}
          <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>渐变色</Text>
          </FadeInView>

          <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
          <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>点击看看!</Text>
          </View>
        </TouchableOpacity>

        </View>
      )
    }
  }


  class FadeInView extends Component{
    constructor(props){
      super(props);
      this.state = {
        fadeAnim: new Animated.Value(0),
      }
    }
  
    componentDidMount(){
      Animated.timing(
        this.state.fadeAnim,{
          toValue: 10,
          duration: 10000,
        }
      ).start();
    }

    render(){
     return(
        <Animated.View
          style = {{
            ...this.props.style,
            opacity:this.state.fadeAnim,
          }}
        >
          {this.props.children}
          </Animated.View>
     ); 
    }
  }


  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'column',
      flex: 1,
      paddingTop:22,
    },
    box: {
      width: 200,
      height: 200,
      backgroundColor: 'red',
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 15,
      marginTop: 15,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

AppRegistry.registerComponent('NavigationProject', () => NavigationProject);
