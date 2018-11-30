import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { connect } from 'react-redux'
import { NativeRouter, Route, Link } from "react-router-native";
import NavBar from './ios/src/NavBar.js'
import SvgUri from 'react-native-svg-uri'


export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <NavBar />
        <Text> ueiwlkbjw </Text>
          <SvgUri
        width="200"
        height="200"
        source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
      />
      </View>
    );
  }
}
