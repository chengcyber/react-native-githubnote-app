/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-28 09:27:56 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-28 19:24:21
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

/**
 * Login form 
 * props:
 * isLoading: Boolean spinner show or not
 * loginErr: String error message of login
 * login: func (username, password)
 */

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'kimochg',
      password: 'Liucheng123',
    }
  }

  handleUsernameChange(username) {
    this.setState({
      username,
    })
  }

  handlePasswordChange(password) {
    this.setState({
      password,
    })
  }

  handleLogin() {
    const { username , password } = this.state;
    console.log('handleLogin', username, password);

    const { login } = this.props;
    login(username, password);
  }

  render () {
    return (
      <View style={styles.contaienr}>
        <Text style={styles.title}>Github Account Login</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleUsernameChange.bind(this)}
          value={this.state.username}
          placeholder="username"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.handlePasswordChange.bind(this)}
          value={this.state.password}
          placeholder="password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleLogin.bind(this)}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.props.isLoading}
          color="#111"
          size="large"
        />
        {this.props.loginErr? <Text>{this.props.loginErr}</Text> : null}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#324050',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  textInput: {
    height: 50,
    padding: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
})

export default LoginForm;