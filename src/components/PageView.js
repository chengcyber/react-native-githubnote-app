/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 18:31:35 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 18:45:42
 */

import React from 'react';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

export default function PageView (props) {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: props.url}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    marginTop: 65,
  },
})