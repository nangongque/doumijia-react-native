import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HomeScreen } from '../pages/homePage'
import { FriendScreen } from '../pages/friendPage'
import { CommunityScreen } from '../pages/communityPage'
import { MarketScreen } from '../pages/marketPage'
import { MineScreen } from '../pages/minePage'

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
            case 'Mine':
              iconName = focused ? 'person' : 'person-outline'
              break
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#607D8B',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: '发现' }}
      />
      <Tab.Screen
        name="Friend"
        component={FriendScreen}
        options={{ tabBarLabel: '好友' }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{ tabBarLabel: '社区' }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{ tabBarLabel: '商城' }}
      />
      <Tab.Screen
        name="Mine"
        component={MineScreen}
        options={{ tabBarLabel: '我的' }}
      />
    </Tab.Navigator>
  )
}

export { TabScreen }
