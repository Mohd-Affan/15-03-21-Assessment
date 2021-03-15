import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Secondrow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={styles.inside}>
            <View style={styles.icon}>
              <FontAwesome5 name={'stethoscope'} size={40} />
            </View>
            <Text style={styles.txt}> Doctor {'\n'} Appointment</Text>
          </View>
          <View style={styles.inside}>
            <View style={styles.icon}>
              <FontAwesome5 name={'leaf'} size={40} />
            </View>
            <Text style={styles.txt}> Wellness {'\n'} Packages </Text>
          </View>
          <View style={styles.inside}>
            <View style={styles.icon}>
              <FontAwesome5 name={'smile-beam'} size={40} />
            </View>
            <Text style={styles.txt}> Ask {'\n'} Joy </Text>
          </View>
          <View style={styles.inside}>
            <View style={styles.icon}>
              <FontAwesome5 name={'home'} size={40} />
            </View>
            <Text style={styles.txt}> Home {'\n'} Healthcare </Text>
          </View>
          <View style={styles.inside}>
            <View style={styles.icon}>
              <FontAwesome5 name={'box'} size={40} />
            </View>
            <Text style={styles.txt}> Hospital {'\n'} Packages </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    height: 150,
  },
  inside: {
    backgroundColor: 'white',
    height: 100,
    width: 90,
  },
  txt: {
    fontSize: 13,
    marginVertical: 5,
  },
  icon: {
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
