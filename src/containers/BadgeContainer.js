/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 10:52:12 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 14:12:30
 */
import React from 'react';
import { connect } from 'react-redux';
import Badge from '../components/Badge';
import { getUserInfo } from '../modules/reducers';


const mapStateToProps = (state) => {
  const userInfo = getUserInfo(state);
  const { avatar_url, name, login } = userInfo;
  return {
    avatar_url,
    name,
    login
  }
}

const BadgeContainer = connect(mapStateToProps)(Badge);

export default BadgeContainer;