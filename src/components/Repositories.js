/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 15:25:40 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 18:40:02
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import BadgeContainer from '../containers/BadgeContainer';
import Separator from './Helpers/Separator';
import PageView from './PageView';

export default function Repositories (props) {

  console.log('Repositories', props);

  const goToPageView = (url) => {
    console.log(url);
    const { navigator } = props;
    navigator.push({
      title: 'Web View',
      component: PageView,
      passProps: {
        url
      }
    });
  }

  const renderContent = () => {
    const { repos } = props;

    return repos.map( (item, index) => {
      const desc = item.description ?
        <Text style={styles.description}> {item.description} </Text> :
        null;
      
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={() => goToPageView(item.html_url)}
              underlayColor="transparent"
            >
              <Text style={styles.name}>{item.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {item.stargazers_count}</Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    })
  }

  return (
    <ScrollView style={styles.container}>
      <BadgeContainer />
      {renderContent()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5,
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    paddingBottom: 5,
  }
})