/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-21 21:53:03 
 * @Last Modified by: LIU CHENG
 * @Last Modified time: 2017-02-21 22:34:28
 */
import React from 'react';
import { Provider } from 'react-redux';
import configstore from './modules/configstore';
import App from './containers/App';

export default function Root() {
  return (
    <Provider store={configstore()}>
      <App />
    </Provider>
  )
}

/*const store = configstore();

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
)

export default Root;*/