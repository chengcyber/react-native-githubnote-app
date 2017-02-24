/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 13:35:47 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 13:37:55
 */
import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default function Separator() {
  return (
    <View style={styles.separator}/>
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15,
  }
})