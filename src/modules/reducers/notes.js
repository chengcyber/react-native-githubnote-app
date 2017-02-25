/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-25 09:18:04 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-25 11:29:34
 */

import { TYPE } from '../../constants';

/**
 * Initial State
 */
const initialState = {
  isFetching: false,
  error: '',
}

/**
 * Action Handlers
 */
const actionHandlers = {
  [TYPE.FETCH_NOTES_REQUEST]: (state, action) => {
    return {
      ...state,
      isFetching: true,
      error: '',
    }
  },
  [TYPE.FETCH_NOTES_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      notes: action.notes
    }
  },
  [TYPE.FETCH_NOTES_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.error
    }
  },
  [TYPE.ADD_NOTE_SUCCESS]: (state, action) => {
    return {
      ...state,
      notes: {
        ...state.notes,
        [action.note.key]: action.note.value
      },
    }
  }
}

/**
 * Reducer
 */
const notesReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler? handler(state, action) : state;
}

export default notesReducer;

export const getNotes = (state) => state.notes

export const getIsFetching = (state) => state.isFetching

export const getFetchErrMsg = (state) => state.error