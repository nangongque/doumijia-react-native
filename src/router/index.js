import React from 'react'
import { ImageBackground } from '@ui'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { RootRouteScreen } from './stacks'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../pages/homePage'
const Drawer = createDrawerNavigator() //  抽屉drawer实例

function CustomDrawerContent({ navigation }) {
  return (
    <ImageBackground
      source={require('@source/images/bbg.png')}
      style={{ flex: 1 }}
    />
  )
}

const DetailStack = createStackNavigator()

const LoginScreen = () => {
  return (
    <DetailStack.Navigator initialRouteName={'Detail'}>
      <DetailStack.Screen
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
        component={HomeScreen}
      />
    </DetailStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // initialRouteName="Home"
        overlayColor="transparent"
        keyboardDismissMode={'none'}
        edgeWidth={200} //值待修改
        hideStatusBar={true}
        drawerType={'back'}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
        <Drawer.Screen name="Root" component={RootRouteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
