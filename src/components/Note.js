/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-24 21:17:03 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-25 11:45:03
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import api from '../lib/api';
import BadgeContainer from '../containers/BadgeContainer';
import Separator from './Helpers/Separator';
import TextEntry from './TextEntry';

/**
 * Props:
 * isActive:Boolean
 * errorMsg:String
 * notes:Iterable
 */
export default function Notes (props) {

  const renderContent = () => {
    if (props.isActive || props.errorMsg) {
      return (
        <View style={styles.contentContainer}>
          <ActivityIndicator
            animating={props.isActive}
            size="large"
          />
          <Text>{props.errorMsg}</Text>
        </View>
      );
    } else if(!props.notes)  {
      return (
        <View style={styles.contentContainer}>
          <Text> No Notes Now, Add one! </Text>
        </View>
      );
    } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      return (
        <ListView
          dataSource={ds.cloneWithRows(props.notes)}
          renderRow={(rowData) => (
            <View>
              <View style={styles.rowContainer}>
                <Text>{rowData}</Text>
              </View>
              <Separator />
            </View>
          )}
          renderHeader={() => (
            <BadgeContainer />
          )}
        />
      );
    } 
  }

  return (
    <View style={styles.container}>
      {renderContent()}
      <TextEntry
        placeholder=" New Note "
        handleSubmit={props.handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowContainer: {
    padding: 10,
  },
})