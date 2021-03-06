import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home } from '../pages/home'
import { Community } from '../pages/community'
import { Market } from '../pages/market'
import { UserHome } from '../pages/userHome'
import { ThemeColors } from 'ui/theme'

// 选项卡页签tab navigator 实例
const Tab = createBottomTabNavigator()

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Friend':
              iconName = focused ? 'ios-people' : 'ios-people-outline'
              break
            case 'Community':
              iconName = 'ios-aperture'
              break
            case 'Market':
              iconName = focused ? 'ios-cart' : 'ios-cart-outline'
              break
            case 'UserHome':
              iconName = focused ? 'person' : 'person-outline'
              break
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: ThemeColors.Default,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: '首页' }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ tabBarLabel: '社区' }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{ tabBarLabel: '商城' }}
      />
      <Tab.Screen
        name="UserHome"
        component={UserHome}
        options={{ tabBarLabel: '我的' }}
      />
    </Tab.Navigator>
  )
}

export { TabScreen }
