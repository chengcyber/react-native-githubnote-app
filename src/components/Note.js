/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 21:17:03 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 23:42:15
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import api from '../lib/api';
import BadgeContainer from '../containers/BadgeContainer';
import Separator from './Helpers/Separator';
import TextEntry from './TextEntry';

export default function Notes (props) {

  // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  return (
    <View style={styles.container}>
      <BadgeContainer />
      <TextEntry
        placeholder=" New Note "
        handleSubmit={(t) => console.log('handle submit text:', t)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    padding: 10,
  },
})