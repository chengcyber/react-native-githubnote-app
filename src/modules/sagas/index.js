/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-23 13:17:24 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-25 11:58:04
 */

import { take, fork, takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { TYPE } from '../../constants';
import api from '../../lib/api';
import DashboardContainer from '../../containers/DashboardContainer';
import Repositories from '../../components/Repositories';


/**
 * Worker Saga
 * fetch user and reroute to dashboard scene
 */
function* fetchUserSaga(action) {
  console.log('fetchUserSaga', action);
  const { username, navigator } = action;
  
  try {
    const userInfo = yield call(api.fetchUser, username);
    console.log(userInfo);
    if (!userInfo || userInfo.message === 'Not Found') {
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
      });
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
 * Worker Saga
 * fetch user repos and reroute to repos scene
 */
function* fetchUserReposSaga(action) {
  console.log('fetchUserReposSaga', action);
  const { username, navigator } = action;

  try {
    const repos = yield call(api.fetchUserRepos, username);
    // successfully fetch user repos 
    yield put({
      type: TYPE.FETCH_USER_REPOS_SUCCESS,
      repos,
    })
    // reroute to next scene
    navigator.push({
      title: 'Repos',
      component: Repositories,
      passProps: {
        repos
      }
    })
  } catch(error) {
    // error handling
    yield put({
      type: TYPE.FETCH_USER_REPOS_FAILURE,
      error,
    })
  }
  
}

/**
 * Worker Saga
 * fetch notes
 */
function* fetchNotesSaga(action) {
  console.log('fetchNotesSaga', action);
  const { username } = action;

  try {
    const notes = yield call(api.getNotes, username);
    yield put({
      type: TYPE.FETCH_NOTES_SUCCESS,
      notes
    })

  } catch(error) {
    yield put({
      type: TYPE.FETCH_NOTES_FAILURE,
      error
    });
  }
}

/**
 * Worker Saga
 * Add note to back-end store
 */
function* addNoteSaga(action) {
  console.log('addNoteSaga', action);
  const { username, text } = action;

  try {
    const note = yield call(api.addNote, username, text);
    if (note.error) {
      yield put({
        type: TYPE.ADD_NOTE_FAILURE,
        error: note.error,
      });
    } else {
      yield put({
        type: TYPE.ADD_NOTE_SUCCESS,
        note: {
          key: note.name,
          value: text,
        },
      });
    }
  } catch(error) {
    yield put({
      type: TYPE.ADD_NOTE_FAILURE,
      error,
    })
  }

}

/**
 * Watcher Saga,
 * take one and block the other until the first complete
 */
const takeOneAndBlock = (pattern, worker, ...args) => {
  const task = fork(function*() {
    while(true) {
      const action = yield take(pattern);
      yield call(worker, ...args, action);
    }
  });
  return task;
}

/**
 * Watch FETCH_USER_REQUEST
 * Watch FETCH_USER_REPOS_REQUEST
 * Watch FETCH_NOTES_REQUEST
 * Watch ADD_NOTE_REQUEST
 */
export default function* rootSaga() {
  yield takeOneAndBlock(TYPE.FETCH_USER_REQUEST, fetchUserSaga);
  yield takeOneAndBlock(TYPE.FETCH_USER_REPOS_REQUEST, fetchUserReposSaga);
  yield takeOneAndBlock(TYPE.FETCH_NOTES_REQUEST, fetchNotesSaga);
  yield takeLatest(TYPE.ADD_NOTE_REQUEST, addNoteSaga);
}