/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 18:39:38 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-22 19:56:21
 */
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


export default function Dashboard(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Dashboard now</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});
