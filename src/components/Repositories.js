/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 15:25:40 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 15:32:25
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import BadgeContainer from '../containers/BadgeContainer';

export default function Repositories (props) {
  return (
    <View>
      <BadgeContainer />
      <Text> I'm repositories </Text>
    </View>
  )
}