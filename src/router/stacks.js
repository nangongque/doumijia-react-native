import React from 'react'
import { Platform, StatusBar } from '@ui'
import { createStackNavigator } from '@react-navigation/stack'
import { TabScreen } from './tabs'
import { DetailScreen } from '../pages/detailsPage'
import { LoginPage } from '@pages/loginPage'

// 堆栈stack 实例
const RootStack = createStackNavigator()

const RootRouteScreen = () => {
  return (
    <RootStack.Navigator initialRouteName={'Login'}>
      <RootStack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={LoginPage}
      />
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

export { RootRouteScreen }
