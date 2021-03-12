import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TabScreen } from './tabs'
import { Detail } from '../pages/details'
import { Guide } from '@pages/guide'
import { Sign } from '@pages/sign'
import AppWebView from '@features/browser'
import { Setting } from '@pages/setting'
import { EditInfo } from '@pages/editInfo'
// 堆栈stack 实例
const RootStack = createStackNavigator()

const SignInRouteScreen = () => {
  return (
    <RootStack.Navigator mode="modal" initialRouteName={'Guide'}>
      <RootStack.Screen
        name="Guide"
        options={{ headerShown: false }}
        component={Guide}
      />
      <RootStack.Screen
        name={'SignIn'}
        options={{ headerShown: false }}
        component={Sign}
      />
      <RootStack.Screen
        name={'AppWebView'}
        options={{ headerShown: false }}
        component={AppWebView}
      />
    </RootStack.Navigator>
  )
}
const RootRouteScreen = () => {
  return (
    <RootStack.Navigator mode="modal" initialRouteName={'Guide'}>
      <RootStack.Screen
        name="TabNav"
        options={{
          headerShown: false,
        }}
        component={TabScreen}
      />
      <RootStack.Screen
        name="Detail"
        options={{
          headerShown: false,
          // title: 'xxx',
          // headerStyle: {
          //   ...(Platform.OS === 'android' && {
          //     height: StatusBar.currentHeight + 44,
          //   }),
          // },
        }}
        component={Detail}
      />
      <RootStack.Screen
        name="Setting"
        options={{
          title: '设置',
        }}
        component={Setting}
      />
      <RootStack.Screen
        name="EditInfo"
        options={{
          title: '编辑资料',
        }}
        component={EditInfo}
      />
    </RootStack.Navigator>
  )
}

export { SignInRouteScreen, RootRouteScreen }
