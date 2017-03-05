/*
 * @Author: LIU CHENG 
 * @Date: 2017-03-05 11:51:42 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-03-05 11:56:17
 */
/*
 * @Author: LIU CHENG 
 * @Date: 2017-03-05 11:51:36 
 * @Last Modified by:   LIU CHENG 
 * @Last Modified time: 2017-03-05 11:51:36 
 */
/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 15:32:14 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-03-05 11:50:37
 */

import React, { PropTypes } from 'react';
import BadgeContainer from '../containers/BadgeContainer';
import Separator from './Helpers/Separator';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

/**
 * props:
 * userInfo: user infos from backend
 * 
 */
function Profile(props) {

  const userInfo = props.userInfo;
  const topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];

  const getRowTitle = (userInfo, item) => {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0]? item[0].toUpperCase() + item.slice(1) : item;
  }

  const renderContents = () => {

    return topicArr.map((item, index) => {
      if (userInfo[item]) {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{getRowTitle(userInfo, item)}</Text>
              <Text style={styles.rowContent}>{userInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        )
      }
    })
  }

  return (
    <ScrollView style={styles.container}>
      <BadgeContainer></BadgeContainer>
      {renderContents()}
    </ScrollView>
  )
}

Profile.propTypes = {
  userInfo: PropTypes.shape({
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  }).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    fontSize: 16,
    color: '#48BBEC',
  },
  rowContent: {
    fontSize: 19,
  }
});

export default Profile;