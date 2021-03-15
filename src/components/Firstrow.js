import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Firstrow extends Component {
  click = pop => Alert.alert('Alert', pop);
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inside}>
          <FontAwesome5 color="mediumpurple" name={'capsules'} size={40} />
          <TouchableOpacity onPress={() => this.click('clicked')}>
            <Text style={styles.txt}>Medicines</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <FontAwesome5 color="mediumpurple" name={'microscope'} size={40} />
          <TouchableOpacity onPress={() => this.click('clicked')}>
            <Text style={styles.txt}>Tests And Packages</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inside}>
          <FontAwesome5 color="mediumpurple" name={'desktop'} size={40} />
          <TouchableOpacity onPress={() => this.click('clicked')}>
            <Text style={styles.txt}>Online Consultation</Text>
          </TouchableOpacity>
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
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: '10%',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
