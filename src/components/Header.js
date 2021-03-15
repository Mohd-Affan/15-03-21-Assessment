import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{width: 100, height: 50}}
            source={require('../assets/zoyloLogo.png')}
          />
          <Ionicons
            style={styles.location}
            name={'location-sharp'}
            color={'orange'}
            size={30}
          />
          <View style={styles.vl}></View>
          <Ionicons
            style={{marginTop: 7}}
            name={'cart-outline'}
            color={'darkblue'}
            size={30}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  location: {
    marginTop: 7,
    marginLeft: '50%',
  },
  vl: {
    borderWidth: 0.5,
    height: '70%',
    marginVertical: 5,
  },
});
