/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-21 22:16:42 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-22 20:18:17
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

function Main({ title, searchText, buttonText, handleTextChange, handleSubmitSearch, isLoading, error }) {

  return (
    <View
      style={styles.mainContainer}
    >
      <Text
        style={styles.title}
      >{title}</Text>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleTextChange}
        value={searchText}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={handleSubmitSearch}
        underlayColor="white"
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <ActivityIndicator
        animating={isLoading}
        color="#111"
        size="large"
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

export default Main;