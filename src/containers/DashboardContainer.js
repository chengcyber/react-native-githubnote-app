/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-22 21:47:11 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-22 22:39:41
 */

import React from 'react';
import Dashboard from '../components/Dashboard';


class DashboardContainer extends React.Component{

  constructor(props) {
    super(props);
  }

  goToProfile() {
    console.log('goToProfile');
  }

  goToRepos() {
    console.log('goToRepos');
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

export default DashboardContainer;