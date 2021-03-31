import React, { useRef, createRef, useState, useEffect } from 'react'
import { Column, Avatar } from '@ui'
import { useSelector } from '@hooks'
import { ThemeColors } from 'ui/theme'
import { RootRouteScreen, SignInRouteScreen } from './stacks'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, InitialState } from '@react-navigation/native'

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
    <Column style={{ flex: 1, backgroundColor: ThemeColors.White }}>
      <Avatar />
    </Column>
    // <ImageBackground
    //   source={require('@source/images/bbg.png')}
    //   style={{ flex: 1 }}
    // />
  )
}

export default function App() {
  const routeNameRef = useRef()
  const navigationRef = createRef()
  const [currentRoute, setCurrentRoute] = useState('MainTabBar')
  const [initialState, setInitialState] = useState(InitialState)

  useEffect(() => {
    const state = navigationRef.current.getRootState()
    // Save the initial route name
    routeNameRef.current = getActiveRouteName(state)
  }, [navigationRef])

  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
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
            edgeWidth={200}
            initialRouteName="Home"
            overlayColor="transparent"
            keyboardDismissMode={'none'}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen
              name="Root"
              component={RootRouteScreen}
              options={{ swipeEnabled: false }}
            />
          </Drawer.Navigator>
        ) : (
          <SignInRouteScreen />
        )}
      </NavigationContainer>
    </>
  )
}
