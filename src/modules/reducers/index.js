/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 14:06:33 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-25 09:34:17
 */

import { combineReducers } from 'redux';
import profile, * as fromProfile from './profile';
import repos, * as fromRepos from './repos';
import notes, * as fromNotes from './notes';

const rootReducer = combineReducers({
  profile,
  repos,
  notes
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

export const getRepos = (state) =>
  fromRepos.getRepos(state.repos)

export const getIsFetchingRepos = (state) =>
  fromRepos.getIsFetching(state.repos)

export const getFetchReposErrMsg = (state) =>
  fromRepos.getFetchErrMsg(state.repos)

export const getNotes = (state) =>
  fromNotes.getNotes(state.notes)

export const getIsFetchingNotes = (state) =>
  fromNotes.getIsFetching(state.notes)

export const getFetchNotesErrMsg = (state) =>
  fromNotes.getFetchErrMsg(state.notes)
