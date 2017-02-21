/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 00:10:31 
 * @Last Modified by:   LIU CHENG 
 * @Last Modified time: 2017-02-22 00:10:31 
 */

import React from 'react';
import Main from '../components/Main';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'kimochg',
      isLoading: false,
      error: false
    }
  }

  handleTextChange(username) {
    this.setState({
      username
    })
  }

  handleSubmitSearch(event) {
    console.log('SUBMIT', this.state.username);
    // update spinner
    // fetch github infos
    // reroute to next passing that github infos
  }
  

  render() {
    return (
      <Main
        title="Search for a Github User"
        searchText={this.state.username}
        buttonText="Search"
        handleTextChange={this.handleTextChange.bind(this)}
        handleSubmitSearch={this.handleSubmitSearch.bind(this)}
      />
    );
  }
}

export default MainContainer;