/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 23:06:26 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-25 11:06:35
 */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../modules/actions';
import Note from '../components/Note';
import { getUsername, getNotes, getIsFetchingNotes, getFetchNotesErrMsg } from '../modules/reducers';

class NoteContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    const { fetchNotes, username } = this.props;
    fetchNotes(username);
  }

  handleSubmit(text) {
    const { addNote, username } = this.props;
    addNote(username, text);
  } 
  
  render() {

    return (
      <Note
        {...this.props}
        handleSubmit={this.handleSubmit.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username : getUsername(state),
    notes: getNotes(state),
    isActive: getIsFetchingNotes(state),
    errMsg: getFetchNotesErrMsg(state),
  }
}

NoteContainer = connect(
  mapStateToProps,
  actions
)(NoteContainer);

export default NoteContainer;
