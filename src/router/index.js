import React, { useRef, useState, useEffect } from 'react'
import { ImageBackground, StatusBar, Platform } from '@ui'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, InitialState } from '@react-navigation/native'
import { RootRouteScreen, SignInRouteScreen } from './stacks'
import { useSelector } from '@hooks'

const Drawer = createDrawerNavigator() //  抽屉drawer实例

const getActiveRouteName = (state) => {
  const route = state.routes[state.index]

  if (route.state) {
    //Dive into nested navigarors
    return getActiveRouteName(route.state)
  }

  return route.name
}
function CustomDrawerContent({ navigation }) {
  return (
    <ImageBackground
      source={require('@source/images/bbg.png')}
      style={{ flex: 1 }}
    />
  )
}

export default function App() {
  const routeNameRef = useRef()
  const [currentRoute, setCurrentRoute] = useState('MainTabBar')
  const [initialState, setInitialState] = useState(InitialState)

  // useEffect(() => {
  //   const state = navigationRef.current.getRootState()
  //   // Save the initial route name
  //   routeNameRef.current = getActiveRouteName(state)
  // }, [])

  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  return (
    <>
      <StatusBar
        hidden={
          currentRoute === null ||
          (Platform.OS === 'ios' && currentRoute === 'VideoDetail')
        }
        StatusBarAnimation="fade"
        backgroundColor="#ce3d3a"
        barStyle="light-content"
      />
      <NavigationContainer
        ref={routeNameRef}
        initialState={initialState}
        onStateChange={(state) => {
          const previousRouteName = routeNameRef.current
          const currentRouteName = getActiveRouteName(state)

          if (previousRouteName !== currentRouteName) {
            // The line below uses the @react-native-firebase/analytics tracker
            // Change this line to use another Mobile analytics SDK
            console.log(previousRouteName, currentRouteName)
            setCurrentRoute(currentRouteName)
          }
          // Save the current route name for later comparision
          routeNameRef.current = currentRouteName
        }}
      >
        {userInfo.id ? (
          <Drawer.Navigator
            // initialRouteName="Home"
            overlayColor="transparent"
            keyboardDismissMode={'none'}
            edgeWidth={200} //值待修改
            hideStatusBar={true}
            drawerType={'back'}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen name="Root" component={RootRouteScreen} />
          </Drawer.Navigator>
        ) : (
          <SignInRouteScreen />
        )}
      </NavigationContainer>
    </>
  )
}
