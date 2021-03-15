import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Firstrow from '../components/Firstrow';
import ImgData from '../components/ImgData';
import Secondrow from '../components/Secondrow';
import Thirdrow from '../components/Thirdrow';
import Fourthrow from '../components/Fourthrow';
import Fifthrow from '../components/Fifthrow';
import {ScrollView} from 'react-native-gesture-handler';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Header />
          <ImgData />
          <Firstrow />
          <Secondrow />
          <Thirdrow />
          <Fourthrow />
          <Fifthrow />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
