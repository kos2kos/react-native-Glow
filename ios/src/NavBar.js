import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const style = StyleSheet.create ({
  navbar: {
    color: "#19a974",
    flex: 1,
    height: 50
  }
})
export default class NavBar extends Component {
  render(){
    return (

    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, height: 80, backgroundColor: '#19a974'}}/>

    </View>
    )
  }
}
