import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Fourthrow extends Component {
  click = pop => Alert.alert('Alert', pop);
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={styles.inside}>
            <FontAwesome5 color={'purple'} name={'first-aid'} size={40} />
            <TouchableOpacity onPress={() => this.click('clicked')}>
              <Text style={styles.txt}>Healthcare Products</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inside}>
            <FontAwesome5 color={'purple'} name={'leaf'} size={40} />
            <TouchableOpacity onPress={() => this.click('clicked')}>
              <Text style={styles.txt}>Ayurveda</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inside}>
            <FontAwesome5 color={'purple'} name={'seedling'} size={40} />
            <TouchableOpacity onPress={() => this.click('clicked')}>
              <Text style={styles.txt}>Homeopathy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inside}>
            <FontAwesome5 color={'purple'} name={'syringe'} size={40} />
            <TouchableOpacity onPress={() => this.click('clicked')}>
              <Text style={styles.txt}>Checkup</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 40,
    backgroundColor: '#d3d3d3',
    height: 250,
  },
  inside: {
    backgroundColor: 'white',
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
