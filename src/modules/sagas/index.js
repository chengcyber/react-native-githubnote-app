/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 13:17:24 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-23 15:12:06
 */

import { takeEvery, put, call } from 'redux-saga/effects';
import { TYPE } from '../../constants';
import api from '../../lib/api';
import DashboardContainer from '../../containers/DashboardContainer';

/**
 * Woker Saga
 */
function* fetchUserSaga(action) {
  console.log('fetchUserSaga', action);
  const { username, navigator } = action;
  
  try {
    const userInfo = yield call(api.fetchUser, username);
    console.log(userInfo);
    if (userInfo.message === 'Not Found') {
      // user not found
      yield put({
        type: TYPE.FETCH_USER_FAILURE,
      });
    } else {
      // successfully get userInfo, reroute to next scene
      yield put({
        type: TYPE.FETCH_USER_SUCCESS,
        userInfo
      });
      navigator.push({
        title: userInfo.name || 'Select an Option',
        component: DashboardContainer,
        passProps: {
          userInfo
        }
      })
    }
  } catch(error) {
    // error handling
    yield put({
      type: TYPE.FETCH_USER_FAILURE,
      error
    })
  }
}

/**
 * Watch FETCH_USER_REQUEST
 */
export default function* rootSaga() {
  yield takeEvery(TYPE.FETCH_USER_REQUEST, fetchUserSaga);
}