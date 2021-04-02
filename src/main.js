import React, { useEffect } from 'react'
import { SafeAreaProvider, UIManager } from '@ui'
import Navigator from './router'
import {
  ThemeProvider,
  NetinfoProvider,
  LoadingProvider,
  LocaleContext,
  LocaleProvider,
} from '@contexts'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider } from 'react-redux'
import store from './store'
import { deviceStorage } from '@util'
import { setUserInfo } from '@actions/user_action'
import Orientation from 'react-native-orientation'

// 在正式环境中清空console.log()
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  }
}

const DouMiJia = () => {
  // UIManager.setLayoutAnimationEnabledExperimental &&
  //   UIManager.setLayoutAnimationEnabledExperimental(true)
  // Orientation.unlockAllOrientations()
  async function initApp() {
    const userInfo = await deviceStorage.get('userInfo')
    console.log(userInfo)
    if (userInfo !== null) {
      // console.log({ userInfo })
      store.dispatch(setUserInfo(userInfo.data))
    } else {
      deviceStorage.save('userInfo', '')
    }
  }

  useEffect(() => {
    initApp()
  }, [])

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LocaleProvider>
          <NetinfoProvider>
            <Provider store={store}>
              <LoadingProvider>
                <LocaleContext.Consumer>
                  {(value) => (
                    <RootSiblingParent>
                      <Navigator />
                    </RootSiblingParent>
                  )}
                </LocaleContext.Consumer>
              </LoadingProvider>
            </Provider>
          </NetinfoProvider>
        </LocaleProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default DouMiJia
