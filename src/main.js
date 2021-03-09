import React, { Component } from 'react'
import { SafeAreaProvider } from '@ui'
import Navigator from './router'
import { ThemeProvider, NetinfoProvider } from '@contexts'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider } from 'react-redux'
import store from './store'

export default class DouMiJia extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <ThemeProvider>
          <NetinfoProvider>
            <Provider store={store}>
              <RootSiblingParent>
                <Navigator />
              </RootSiblingParent>
            </Provider>
          </NetinfoProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    )
  }
}
