import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home } from '../pages/home'
import { Community } from '../pages/community'
import { Market } from '../pages/market'
import { User } from '../pages/user'
import { ThemeColors } from 'ui/theme'
import { useLocale } from '@contexts/locale'

// 选项卡页签tab navigator 实例
const Tab = createBottomTabNavigator()

function TabScreen() {
  const { t } = useLocale()
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
            case 'User':
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
        options={{ tabBarLabel: t('LANG19') }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ tabBarLabel: t('LANG20') }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{ tabBarLabel: t('LANG21') }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{ tabBarLabel: t('LANG22') }}
      />
    </Tab.Navigator>
  )
}

export { TabScreen }
