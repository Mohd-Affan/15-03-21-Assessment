import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';

export default class Fifthrow extends Component {
  click = pop => Alert.alert('Alert', pop);
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inside}>
          <Text style={styles.txt}>Order Medicine Using Prescription</Text>
          <Text>And get medicines delivered at home</Text>

          <TouchableOpacity
            onPress={() => this.click('clicked')}
            style={{
              marginLeft: '80%',
              borderWidth: 1,
              height: 30,
              marginRight: 5,
              borderColor: 'orange',
              borderRadius: 5,
            }}>
            <Text style={{paddingLeft: 10, color: 'orange'}}>Upload</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <Text style={styles.txt}>Online Doctor Consultation</Text>
          <Text>
            Consult with the top medical practitioners in your city.Recover from
            the comfort of your home.
          </Text>

          <TouchableOpacity
            onPress={() => this.click('clicked')}
            style={{
              marginLeft: '80%',
              borderWidth: 1,
              height: 40,
              marginRight: 5,
              backgroundColor: 'orange',
              borderRadius: 5,
            }}>
            <Text style={{paddingLeft: 10, color: 'white'}}>Consult Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inside}>
          <Text style={styles.txt}>Take Free Online Health Assessment</Text>
          <Text>Know your health status now</Text>
          <TouchableOpacity
            onPress={() => this.click('clicked')}
            style={{
              marginLeft: '80%',
              borderWidth: 1,
              height: 30,
              marginRight: 5,
              borderColor: 'orange',
              borderRadius: 5,
            }}>
            <Text style={{paddingLeft: 10, color: 'orange'}}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  inside: {
    backgroundColor: 'white',
    height: 160,
    width: 350,
    borderRadius: 10,
    marginVertical: '10%',
    elevation: 120,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
  },
});
