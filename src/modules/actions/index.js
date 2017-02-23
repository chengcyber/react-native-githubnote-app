/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 13:14:00 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-23 14:54:27
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
    username
  }
}
