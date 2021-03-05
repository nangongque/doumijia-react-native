import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TabScreen } from './tabs'
import { DetailScreen } from '../pages/detailsPage'
import { GuidePage } from '@pages/guidePage'
import { useSelector } from '@hooks'
import { LoginPage } from '@pages/loginPage'
// 堆栈stack 实例
const RootStack = createStackNavigator()

const RootRouteScreen = () => {
  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  return (
    <RootStack.Navigator initialRouteName={'Guide'}>
      {userInfo.id === '' ? (
        <>
          <RootStack.Screen
            name="Guide"
            options={{
              headerShown: false,
            }}
            component={GuidePage}
          />
          <RootStack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={LoginPage}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </RootStack.Navigator>
  )
}

export { RootRouteScreen }
