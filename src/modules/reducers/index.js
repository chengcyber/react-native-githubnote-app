/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-21 22:22:39 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-23 15:00:36
 */

import React from 'react';
import { TYPE } from '../../constants';

/**
 * Initial State
 */

const initialState = {
  isLoading: false,
  username: 'kimochg',
  error: '',
}

/**
 * ACTION_HANDERS
 */

const actionHandler = {
  [TYPE.FETCH_USER_REQUEST]: (state, action) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  },
  [TYPE.FETCH_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      username: '',
      isLoading: false,
      userInfo: action.userInfo,
    }
  },
  [TYPE.FETCH_USER_FAILURE]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: (typeof action.error === 'Object')?JSON.stringify(action.error) : action.error || 'User not found',
    }
  },
  [TYPE.TYPING_USERNAME]: (state, action) => {
    return {
      ...state,
      username: action.username,
    }
  }
}

/**
 * Reducer
 */

const rootReducer = (state = initialState, action) => {
  const handler = actionHandler[action.type];
  return handler ? handler(state, action) : state;
}

export default rootReducer;