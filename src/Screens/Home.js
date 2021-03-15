import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Firstrow from '../components/Firstrow';
import ImgData from '../components/ImgData';
import Secondrow from '../components/Secondrow';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <ImgData />
        <Firstrow />
        <Secondrow />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
