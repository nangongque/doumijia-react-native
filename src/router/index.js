import React from 'react'
import { ImageBackground } from '@ui'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { RootRouteScreen } from './stacks'

const Drawer = createDrawerNavigator() //  抽屉drawer实例

function CustomDrawerContent({ navigation }) {
  return (
    <ImageBackground
      source={require('@source/images/bbg.png')}
      style={{ flex: 1 }}
    />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        overlayColor="transparent"
        keyboardDismissMode={'none'}
        edgeWidth={200} //值待修改
        hideStatusBar={true}
        drawerType={'back'}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Root" component={RootRouteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
