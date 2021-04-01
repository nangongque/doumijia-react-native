import React, { useRef, createRef, useState, useEffect, useMemo } from 'react'
import {
  Column,
  Avatar,
  MyText,
  Row,
  ShadowBox,
  NavItem,
  SvgIcon,
  GHWithoutFeedback,
} from '@ui'
import { useSelector, useDispatch } from '@hooks'
import { ThemeColors } from 'ui/theme'
import { RootRouteScreen, SignInRouteScreen } from './stacks'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, InitialState } from '@react-navigation/native'
import * as iconPath from '../source/svg'
import { useLocale } from '@contexts/locale'
import { afterLogout } from '@actions/user_action'
const Drawer = createDrawerNavigator() //  抽屉drawer实例

const getActiveRouteName = (state) => {
  const route = state.routes[state.index]

  if (route.state) {
    //Dive into nested navigarors
    return getActiveRouteName(route.state)
  }

  return route.name
}

const mineItem = [
  {
    route: 'Order',
    icon: <SvgIcon fill={['#333']} path={iconPath.order} size={20} />,
  },
  {
    route: 'Comment',
    icon: <SvgIcon fill={['#333']} path={iconPath.comment} size={20} />,
  },
  {
    route: 'Favorite',
    icon: <SvgIcon fill={['#333']} path={iconPath.favorites} size={20} />,
  },
  {
    route: 'Task',
    icon: <SvgIcon fill={['#333']} path={iconPath.task} size={20} />,
  },
]

const centerItem = [
  {
    route: 'Setting',
    icon: <SvgIcon fill={['#333']} path={iconPath.setting} size={20} />,
  },
  {
    route: 'Message',
    icon: <SvgIcon fill={['#333']} path={iconPath.message} size={20} />,
  },
  {
    route: 'PointsMall',
    icon: <SvgIcon fill={['#333']} path={iconPath.integral} size={20} />,
  },
  {
    route: 'Skin',
    icon: <SvgIcon fill={['#333']} path={iconPath.skin} size={20} />,
  },
]

const otherItem = [
  {
    route: 'HelpFeedback',
    icon: <SvgIcon fill={['#333']} path={iconPath.help} size={20} />,
  },
  {
    route: 'ShareDouMi',
    icon: <SvgIcon fill={['#333']} path={iconPath.share} size={20} />,
  },
  {
    route: 'About',
    icon: <SvgIcon fill={['#333']} path={iconPath.about} size={20} />,
  },
]

function CustomDrawerContent({ navigation, userInfo }) {
  const { t } = useLocale()
  const dispatch = useDispatch()
  const { username } = userInfo
  const mineRoutes = useMemo(() => {
    const items = mineItem.map((item) => {
      const { route } = item
      switch (route) {
        case 'Order':
          return { ...item, title: t('LANG50'), rightTitle: username }
        case 'Comment':
          return { ...item, title: t('LANG51'), rightTitle: username }
        case 'Favorite':
          return { ...item, title: t('LANG52'), rightTitle: username }
        case 'Task':
          return { ...item, title: t('LANG53'), rightTitle: username }
      }
      return item
    })
    return items
  }, [t, username])

  const centerRoutes = useMemo(() => {
    const items = centerItem.map((item) => {
      const { route } = item
      switch (route) {
        case 'Setting':
          return { ...item, title: t('LANG54'), rightTitle: username }
        case 'Message':
          return { ...item, title: t('LANG55'), rightTitle: username }
        case 'PointsMall':
          return { ...item, title: t('LANG56'), rightTitle: username }
        case 'Skin':
          return { ...item, title: t('LANG57'), rightTitle: username }
      }
      return item
    })
    return items
  }, [t, username])

  const otherRoutes = useMemo(() => {
    const items = otherItem.map((item) => {
      const { route } = item
      switch (route) {
        case 'HelpFeedback':
          return { ...item, title: t('LANG58'), rightTitle: username }
        case 'ShareDouMi':
          return { ...item, title: t('LANG59'), rightTitle: username }
        case 'About':
          return { ...item, title: t('LANG60'), rightTitle: username }
      }
      return item
    })
    return items
  }, [t, username])

  return (
    <Column
      style={{
        flex: 1,
        backgroundColor: ThemeColors.WhiteSmoke,
        paddingHorizontal: 10,
      }}
    >
      <Row style={{ marginTop: 60 }}>
        <Avatar />
        <MyText size={15} weight="semibold" style={{ marginLeft: 10 }}>
          {username}
        </MyText>
      </Row>
      <ShadowBox boxWidth={240} boxStyle={{ marginTop: 30 }}>
        {mineRoutes.map((route, index) => (
          <NavItem
            key={index}
            itemTitle={route.title}
            itemTitleStyle={{ fontSize: 14, color: '#222' }}
            showItemSeparator={index !== mineRoutes.length - 1 ? true : false}
            itemStyle={{ width: 240, paddingHorizontal: 10 }}
            leftIcon={
              <Column
                align="center"
                justify="center"
                style={{ marginRight: 10 }}
              >
                {route.icon}
              </Column>
            }
          />
        ))}
      </ShadowBox>

      <ShadowBox boxWidth={240} boxStyle={{ marginTop: 30 }}>
        {centerRoutes.map((route, index) => (
          <NavItem
            key={index}
            itemTitle={route.title}
            itemTitleStyle={{ fontSize: 14, color: '#222' }}
            showItemSeparator={index !== mineRoutes.length - 1 ? true : false}
            itemStyle={{ width: 240, paddingHorizontal: 10 }}
            leftIcon={
              <Column
                align="center"
                justify="center"
                style={{ marginRight: 10 }}
              >
                {route.icon}
              </Column>
            }
          />
        ))}
      </ShadowBox>

      <ShadowBox boxWidth={240} boxStyle={{ marginTop: 30 }}>
        {otherRoutes.map((route, index) => (
          <NavItem
            key={index}
            itemTitle={route.title}
            itemTitleStyle={{ fontSize: 14, color: '#222' }}
            showItemSeparator={index !== mineRoutes.length - 1 ? true : false}
            itemStyle={{ width: 240, paddingHorizontal: 10 }}
            leftIcon={
              <Column
                align="center"
                justify="center"
                style={{ marginRight: 10 }}
              >
                {route.icon}
              </Column>
            }
          />
        ))}
      </ShadowBox>

      <ShadowBox boxWidth={240} boxStyle={{ marginTop: 30 }}>
        <GHWithoutFeedback onPress={() => afterLogout()}>
          <Column
            style={{ width: 220, height: 46 }}
            align="center"
            justify="center"
          >
            <MyText size={16} color={ThemeColors.Red}>
              退出登录
            </MyText>
          </Column>
        </GHWithoutFeedback>
      </ShadowBox>
    </Column>
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
            drawerContent={(props) => (
              <CustomDrawerContent {...props} userInfo={userInfo} />
            )}
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
