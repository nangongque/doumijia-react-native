import React, { Component } from 'react'
import { SafeAreaProvider } from '@ui'
import Navigator from './router'
import { ThemeProvider, NetinfoProvider, LoadingProvider } from '@contexts'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider } from 'react-redux'
import store from './store'
import { deviceStorage } from '@util'
import { setUserInfo } from '@actions/user_action'

export default class DouMiJia extends Component {
  async componentDidMount() {
    this.initData()
  }
  initData = async () => {
    const userInfo = await deviceStorage.get('userInfo')
    if (userInfo !== null) {
      console.log({ userInfo })
      store.dispatch(setUserInfo(userInfo.data))
    } else {
      deviceStorage.save('userInfo', '')
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <ThemeProvider>
          <NetinfoProvider>
            <Provider store={store}>
              <LoadingProvider>
                <RootSiblingParent>
                  <Navigator />
                </RootSiblingParent>
              </LoadingProvider>
            </Provider>
          </NetinfoProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    )
  }
}
