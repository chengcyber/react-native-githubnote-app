/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 21:43:46 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 23:44:09
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

/**
 * Text Input & Submit Button
 * === Usage ===
 * <TextEntry
 *   placeholder=" New Note "
 *   defaultValue=""
 *   buttonText="Submit"
 *   handleSubmit={(t) => console.log('handle submit text:', t)}
 * />
 */
class TextEntry extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    buttonText: 'Submit',
    placeholder: '',
    defaultValue: '',
  }

  constructor(props) {
    super(props);

    console.log('Text Entry', props);
    this.state = {
      text: '',
    }
  }

  handlePress() {
    const { handleSubmit } = this.props;
    handleSubmit(this.state.text);
  }

  render() {

    const { buttonText, defaultValue, placeholder } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          defaultValue={defaultValue}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          placeholder={placeholder}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handlePress.bind(this)}
          underlayColor="#88D4F5"
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TextEntry.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
}

export default TextEntry;

/**
 * height 60
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
  },
  inputStyle: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10,
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
})
