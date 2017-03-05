/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 10:38:29 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-03-05 11:41:30
 */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

function Badge(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.avatar_url}}/>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.handle}>{props.login}</Text>
    </View>
  )
}

Badge.propTypes = {
  avatar_url: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  login: React.PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10,
    marginTop: 65,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  },
  name: {
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
    alignSelf: 'center',
  },
  handle: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  }
});

export default Badge;