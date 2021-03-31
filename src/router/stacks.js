import React from 'react'
import { unLoggedStacks, loggedStacks } from '@pages/'
import { createStackNavigator } from '@react-navigation/stack'

// 堆栈stack 实例
const RootStack = createStackNavigator()

const SignInRouteScreen = () => {
  return (
    <RootStack.Navigator
      mode="modal"
      initialRouteName={'Guide'}
      screenOptions={{ headerShown: false }}
    >
      {unLoggedStacks.map(({ name, component, options }) => (
        <RootStack.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
    </RootStack.Navigator>
  )
}

const RootRouteScreen = () => {
  return (
    <RootStack.Navigator
      mode="modal"
      initialRouteName={'TabScreen'}
      screenOptions={{ headerShown: false }}
    >
      {loggedStacks.map(({ name, component, options }) => (
        <RootStack.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
    </RootStack.Navigator>
  )
}

export { SignInRouteScreen, RootRouteScreen }
