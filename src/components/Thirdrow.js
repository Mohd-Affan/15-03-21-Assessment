import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const CARD = [
  {
    id: '1',
    title: 'Zoylo health checkup',
    tests: '83 tests included',
    firstPrice: '₹ 3250.00',
    secondPrice: '₹ 1299.00',
  },
  {
    id: '2',
    title: 'FeverPackage 3',
    tests: '66 tests included',
    firstPrice: '₹ 4276.00',
    secondPrice: '₹ 2299.00',
  },
  {
    id: '3',
    title: 'Regular checkup',
    tests: '78 tests included',
    firstPrice: '₹ 5400.00',
    secondPrice: '₹ 2400.00',
  },
  {
    id: '4',
    title: 'Full health package ',
    tests: '43 tests included',
    firstPrice: '₹ 4567.00',
    secondPrice: '₹ 2345.00',
  },
  {
    id: '5',
    title: 'Full body checkup ',
    tests: '64 tests included',
    firstPrice: '₹ 5555.00',
    secondPrice: '₹ 2500.00',
  },
  {
    id: '6',
    title: 'Free package',
    tests: '97 tests included',
    firstPrice: '₹ 3232.00',
    secondPrice: '₹ 1599.00',
  },
];
const Data = ({title, tests, id, firstPrice, secondPrice}) => {
  const click = pop => Alert.alert('Alert', pop);
  return (
    <View style={styles.container} key={id}>
      <TouchableOpacity style={styles.btn} onPress={() => click('Advanced')}>
        <Text>ADVANCED</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
      <Text style={{paddingTop: 10, color: 'gray'}}>{tests}</Text>

      <View style={styles.lowerContainer}>
        <Text style={{color: 'gray', textDecorationLine: 'line-through'}}>
          {firstPrice}
        </Text>
        <Text style={{color: 'green'}}>{secondPrice}</Text>
        <Text style={{color: 'lavender'}}>ZOYLO LABS</Text>
        <TouchableOpacity onPress={() => click('Clicked')}>
          <Text style={{color: 'orange'}}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default class Thirdrow extends Component {
  render() {
    return (
      <View style={styles.container2}>
        <View style={styles.header}>
          <Text style={styles.txt1}> Diagnostic Packages by Zolo Labs</Text>
          <TouchableOpacity>
            <Text style={styles.txt2}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 300, marginTop: 20}}>
          <ScrollView horizontal={true}>
            {CARD.map(item => {
              return (
                <Data
                  key={item.id}
                  title={item.title}
                  tests={item.tests}
                  firstPrice={item.firstPrice}
                  secondPrice={item.secondPrice}
                />
              );
            })}
          </ScrollView>
          <View>
            <Text style={styles.medtxt}> Medicine Categories</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 400,
    backgroundColor: 'lavender',
    elevation: 5,
    marginLeft: 10,
  },
  container2: {
    paddingVertical: 10,
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
  btn: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 20,
    marginTop: 20,
    width: 100,
  },
  lowerContainer: {
    paddingLeft: 10,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 120,
    marginTop: 26,
  },
  medtxt: {
    fontSize: 20,
    marginTop: 50,
  },
});
