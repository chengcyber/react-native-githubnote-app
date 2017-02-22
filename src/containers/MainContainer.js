/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 00:10:31 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-22 19:52:43
 */

import React from 'react';
import Main from '../components/Main';
import Dashboard from '../components/Dashboard';
import api from '../lib/api';

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
    const { username } = this.state;
    console.log('SUBMIT', username);
    // update spinner
    this.setState({
      isLoading: true
    })
    // fetch github infos
    api.fetchUser(username)
      .then(
        (res) => {
          console.log(res);
          if (res.message === 'Not Found') {
            this.setState({
              isLoading: false,
              error: 'User not found'
            })
          } else {
            this.props.navigator.push({
              title: res.name || 'Select an Option',
              component: Dashboard,
              passProps: {userInfo: res}
            });
            this.setState({
              isLoading: false,
              error: false,
              username: ''
            })
          }
        }
      )
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