/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 15:32:14 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 13:25:45
 */

import React from 'react';
import Badge from '../containers/BadgeContainer';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function Profile(props) {

  const userInfo = props.userInfo;
  const topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];

  const getRowTitle = (userInfo, item) => {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0]? item[0].toUpperCase() + item.slice(1) : item;
  }

  const renderContents = () => {

    return topicArr.map((item, index) => {
      if (userInfo[item]) {
        return (
          <View style={styles.rowContainer} key={index}>
            <Text style={styles.rowTitle}>{getRowTitle(userInfo, item)}</Text>
            <Text style={styles.rowContent}>{userInfo[item]}</Text>
          </View>
        )
      }
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Badge userInfo={props.userInfo}></Badge>
      {renderContents()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    fontSize: 16,
    color: '#48BBEC',
  },
  rowContent: {
    fontSize: 19,
  }
});