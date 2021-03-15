import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Fourthrow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inside}>
          <FontAwesome5 name={'capsules'} size={40} />
          <Text style={styles.txt}>Healthcare Products</Text>
        </View>

        <View style={styles.inside}>
          <FontAwesome5 name={'microscope'} size={40} />
          <Text style={styles.txt}>Ayurveda</Text>
        </View>
        <View style={styles.inside}>
          <FontAwesome5 name={'desktop'} size={40} />
          <Text style={styles.txt}>Homeopathy</Text>
        </View>
        <View style={styles.inside}>
          <FontAwesome5 name={'syringe'} size={40} />
          <Text style={styles.txt}>Checkup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    elevation: 40,
    backgroundColor: '#d3d3d3',
  },
  inside: {
    backgroundColor: 'white',
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: '10%',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
