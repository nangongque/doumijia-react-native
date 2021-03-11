import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TabScreen } from './tabs'
import { DetailScreen } from '../pages/detailsPage'
import { GuidePage } from '@pages/guidePage'
import { SignPage } from '@pages/signPage'
import AppWebView from '@features/browser'
// 堆栈stack 实例
const RootStack = createStackNavigator()

const SignInRouteScreen = () => {
  return (
    <RootStack.Navigator mode="modal" initialRouteName={'Guide'}>
      <RootStack.Screen
        name="Guide"
        options={{ headerShown: false }}
        component={GuidePage}
      />
      <RootStack.Screen
        name={'SignIn'}
        options={{ headerShown: false }}
        component={SignPage}
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
        component={DetailScreen}
      />
    </RootStack.Navigator>
  )
}

export { SignInRouteScreen, RootRouteScreen }
