/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 18:39:38 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-03-05 11:39:18
 */
import React, { PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

/**
 * Dashboard
 * props:
 * avatar_url: String uri of avatar 
 * buttonsController: Array [{onPress:func, backgroundColor: Color, buttonText: String}]
 * loading: Boolean, if data is prepared
 */
function Dashboard(props) {

  const { avatar_url, buttonsController, loading } = props;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          animating={loading}
          color="#111"
          size="large"
          style={styles.image}
        />
      ) : (
        <Image source={{uri: avatar_url}} style={styles.image} />
      )}
      {buttonsController.map((item, index) =>
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

Dashboard.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  buttonsController: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
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


export default Dashboard;