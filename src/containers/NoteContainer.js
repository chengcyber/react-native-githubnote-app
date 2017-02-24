/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 23:06:26 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-24 23:22:32
 */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../modules/actions';
import Note from '../components/Note';
import { getUsername } from '../modules/reducers';

class NoteContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    const { fetchNotes, username } = this.props;
    fetchNotes(username);
  }
  
  render() {
    return <Note />
  }
}

const mapStateToProps = (state) => {
  return {
    username : getUsername(state)
  }
}

NoteContainer = connect(
  mapStateToProps,
  actions
)(NoteContainer);

export default NoteContainer;
