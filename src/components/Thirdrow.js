import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, TouchableOpacity} from 'react-native';

export default class Thirdrow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txt1}> Diagnostic Packages by Zolo Labs</Text>
          <TouchableOpacity>
            <Text style={styles.txt2}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {
    fontSize: 17,
  },
  txt2: {
    fontSize: 17,
    color: 'orange',
  },
});
