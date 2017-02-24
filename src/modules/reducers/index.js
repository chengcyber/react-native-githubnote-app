/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 14:06:33 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 14:17:54
 */

import { combineReducers } from 'redux';
import profile, * as fromProfile from './profile';

const rootReducer = combineReducers({
  profile
});

export default rootReducer;

export const getUsername = (state) =>
  fromProfile.getUsername(state.profile)

export const getUserInfo = (state) =>
  fromProfile.getUserInfo(state.profile)

export const getFetchingProfile = (state) =>
  fromProfile.getFetchingProfile(state.profile)

export const getFetchProfileErrorMsg = (state) =>
  fromProfile.getFetchProfileErrorMsg(state.profile)