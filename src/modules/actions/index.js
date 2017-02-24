/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 13:14:00 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 13:56:24
 */

import { TYPE } from '../../constants';

export function fetchUser(username, navigator) {
  return {
    type: TYPE.FETCH_USER_REQUEST,
    username,
    navigator,
  }
}

export function typingUsername(username) {
  return {
    type: TYPE.TYPING_USERNAME,
    username,
  }
}

export function fetchUserRepos(username, navigator) {
  return {
    type: TYPE.FETCH_USER_REPOS_REQUEST,
    username,
    navigator,
  }
}
