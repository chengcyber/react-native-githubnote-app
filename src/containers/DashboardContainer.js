/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 21:47:11 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 14:02:39
 */

import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import * as actions from '../modules/actions';
import { getUsername } from '../modules/reducers';

class DashboardContainer extends React.Component{

  constructor(props) {
    super(props);
  }

  goToProfile() {
    console.log('goToProfile');
    this.props.navigator.push({
      title: 'Profile View',
      component: Profile,
      passProps: {
        userInfo: this.props.userInfo
      },
    })
  }

  goToRepos() {
    console.log('goToRepos');
    const { fetchUserRepos, username, navigator } = this.props;
    fetchUserRepos(username, navigator);
  }

  goToNotes() {
    console.log('goToNotes');
  }

  render() {

    const buttonsController = [
      {
        buttonText: 'View profile',
        onPress: this.goToProfile.bind(this),
        backgroundColor: '#48BBEC',
      },
      {
        buttonText: 'View Repos',
        onPress: this.goToRepos.bind(this),
        backgroundColor: '#E77AAE',
      },
      {
        buttonText: 'View Notes',
        onPress: this.goToNotes.bind(this),
        backgroundColor: '#758BF4'
      },
    ]

    return (
      <Dashboard 
        avatar_url={this.props.userInfo.avatar_url}
        buttonsController={buttonsController}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: getUsername(state)
  }
}

DashboardContainer = connect(
  mapStateToProps,
  actions
)(DashboardContainer);

export default DashboardContainer;