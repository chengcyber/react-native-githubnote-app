/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 00:10:31 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 15:09:47
 */

import React from 'react';
import Main from '../components/Main';
import DashboardContainer from '../containers/DashboardContainer';
import { connect } from 'react-redux';
import * as actions from '../modules/actions';
import { getUsername, getFetchingProfile, getFetchProfileErrorMsg } from '../modules/reducers';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'kimochg'
    }
  }

  handleTextChange(username) {
    this.setState({
      username
    })
  }

  handleSubmitSearch(event) {
    console.log('SUBMIT', this.state.username);

    // fetch github infos
    const { fetchUser, navigator } = this.props;
    const { username } = this.state;

    fetchUser(username, navigator);
    // reroute to next passing that github infos
  }
  

  render() {
    // username, isLoading, error
    const { username } = this.state;
    return (
      <Main
        title="Search for a Github User"
        searchText={username}
        buttonText="Search"
        handleTextChange={this.handleTextChange.bind(this)}
        handleSubmitSearch={this.handleSubmitSearch.bind(this)}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
    isLoading: getFetchingProfile(state),
    error: getFetchProfileErrorMsg(state)
  }
}

MainContainer = connect(
  mapStateToProps,
  actions
)(MainContainer);

export default MainContainer;