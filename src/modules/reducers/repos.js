/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 14:19:38 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 14:33:25
 */

import { TYPE } from '../../constants';

/**
 * Initial State
 */
const initialState = {
  isFetching: false,
  errorMsg: '',
}

/**
 * ACTION HANDLERS
 */

const actionHandlers = {
  [TYPE.FETCH_USER_REPOS_REQUEST]: (state, action) => {
    return {
      ...state,
      isFetching: true,
      errorMsg: '',
    }
  },
  [TYPE.FETCH_USER_REPOS_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      repos: action.repos
    }
  },
  [TYPE.FETCH_USER_REPOS_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      errorMsg: (typeof action.error === 'Object')?JSON.stringify(action.error) : action.error || 'fetch repos error',
    }
  }, 
}

const reposReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler? handler(state, action) : state;
}

export default reposReducer;