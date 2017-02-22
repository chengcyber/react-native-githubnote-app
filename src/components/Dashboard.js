/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 18:39:38 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-22 22:39:51
 */
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


export default function Dashboard(props) {

  console.log(props);

  return (
    <View style={styles.container}>
      <Image source={{uri: props.avatar_url}} style={styles.image} />
      {props.buttonsController.map((item, index) =>
        (
          <TouchableHighlight
            key={index}
            onPress={item.onPress}
            style={[styles.button, {backgroundColor: item.backgroundColor}]}
            underlayColor="#8BD4F5"
          >
            <Text style={styles.buttonText}>{item.buttonText}</Text>
          </TouchableHighlight>
        )
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1
  }
});
