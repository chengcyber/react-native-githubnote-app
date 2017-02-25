/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-21 21:52:46 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-25 14:19:33
 */

import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import { connect } from 'react-redux';
// import Main from '../components/Main'
import MainContainer from './MainContainer';

class App extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle="default"
        />
        <Navigator 
          initialRoute={{
            'title': 'Github Notetaker',
            'component': MainContainer
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
          navigationBar={
            <Navigator.NavigationBar
              style={styles.navbar}
              routeMapper={{
                LeftButton: (route, navigator, index, navState) =>
                  { return index? (
                    <TouchableHighlight
                      onPress={() => navigator.pop()}
                      underlayColor="white"
                    >
                      <Text style={styles.leftButton}>Back</Text>
                    </TouchableHighlight>
                  ) : null; },
                RightButton: (route, navigator, index, navState) => (null),
                Title: (route, navigator, index, navState) =>
                  { 
                    console.log(index, navState)
                    return (<Text style={styles.title}>{route.title}</Text>); 
                  },
              }}
            />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navbar: {
    backgroundColor: 'white',
  },
  title: {
    padding: 5,
    fontSize: 24,
  },
  leftButton: {
    padding: 10,
    fontSize: 16,
  }
})

export default App;

