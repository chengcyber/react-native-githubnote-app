/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-21 21:52:46 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-21 23:01:08
 */

import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Main from '../components/Main'

class App extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle="light-content"
        />
        <Navigator 
          initialRoute={{
            'title': 'Github Notetaker',
            'component': Main
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return (
              <Component
                navigator={navigator}
                route={route}
                {...route.passProps}
              />
            );
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff50c3',

  },
})

export default App;

