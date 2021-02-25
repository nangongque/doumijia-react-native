import React, { Component } from 'react'
import { SafeAreaProvider } from '@ui'
import Navigator from './router'
import { NetinfoProvider } from '@contexts'
import { Provider } from 'react-redux'
import store from './store'

export default class DouMiJia extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NetinfoProvider>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </NetinfoProvider>
      </SafeAreaProvider>
    )
  }
}
