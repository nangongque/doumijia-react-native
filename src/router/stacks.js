import React from 'react'
import { Platform, StatusBar } from '@ui'
import { createStackNavigator } from '@react-navigation/stack'
import { TabScreen } from './tabs'
import { DetailScreen } from '../pages/detailsPage'

// 堆栈stack 实例
const RootStack = createStackNavigator()

const RootRouteScreen = () => {
  return (
    <RootStack.Navigator initialRouteName={'TabNav'}>
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
          title: 'xxx',
          headerStyle: {
            ...(Platform.OS === 'android' && {
              height: StatusBar.currentHeight + 44,
            }),
          },
        }}
        component={DetailScreen}
      />
    </RootStack.Navigator>
  )
}

export { RootRouteScreen }
