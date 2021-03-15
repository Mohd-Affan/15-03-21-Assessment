import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

const IMG = [
  {
    id: '1',
    pic: require('../assets/img1.jpeg'),
  },
  {
    id: '2',
    pic: require('../assets/img2.jpeg'),
  },
  {
    id: '3',
    pic: require('../assets/img3.jpeg'),
  },
  {
    id: '4',
    pic: require('../assets/img4.jpeg'),
  },
  {
    id: '5',
    pic: require('../assets/img5.jpeg'),
  },
  {
    id: '6',
    pic: require('../assets/img6.jpeg'),
  },
];

const Item = ({pic, id}) => {
  return (
    <View key={id}>
      <Image style={styles.img} source={pic} />
    </View>
  );
};

export default class ImgData extends Component {
  renderItem = ({item}) => {
    return <Item pic={item.pic} />;
  };
  render() {
    return (
      <View style={{height: 120}}>
        <ScrollView horizontal={true}>
          {IMG.map(item => {
            return <Item pic={item.pic} id={item.id} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 100,
    marginLeft: 10,
    marginVertical: 10,
  },
});
