/**
 * 抽屉页
 * changed by lijianpo on 2021/04/02
 */
import React, { useEffect, useMemo, useCallback } from 'react'
import {
  Avatar,
  Column,
  GHWithoutFeedback,
  MyText,
  NavItem,
  Row,
  StatusBar,
  SvgIcon,
} from '@ui'
import { vw } from '@util'
import {
  useIsDrawerOpen,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import ShadowBox from 'ui/shadowBox'
import { routerStyles } from './css'
import { ThemeColors } from 'ui/theme'
import * as iconPath from '../source/svg'
import { useLocale } from '@contexts/locale'
import { afterLogout } from '@actions/user_action'

const firstItem = [
  { route: 'Order', lang: 'LANG50' },
  { route: 'Comment', lang: 'LANG51' },
  { route: 'Favorite', lang: 'LANG52' },
  { route: 'Task', lang: 'LANG53' },
]
const secondItem = [
  { route: 'Setting', lang: 'LANG54' },
  { route: 'Message', lang: 'LANG55' },
  { route: 'PointsMall', lang: 'LANG56' },
  { route: 'Skin', lang: 'LANG57' },
]
const thirdItem = [
  { route: 'Help', lang: 'LANG58' },
  { route: 'Share', lang: 'LANG59' },
  { route: 'About', lang: 'LANG60' },
]
const allItem = [firstItem, secondItem, thirdItem]
function DrawerScreen(props) {
  const isDrawerOpen = useIsDrawerOpen()
  const { t } = useLocale()
  const { userInfo, navigation } = props
  const { username } = userInfo

  useEffect(() => {
    const barStyle = isDrawerOpen ? 'dark-content' : 'light-content'
    StatusBar.setBarStyle(barStyle, true)
  }, [isDrawerOpen])

  /**
   * allRoutes数据结构
   * [
   *  [{route:'Order', lang:'LANG50',title:'Order', icon:<SvgIcon />}]
   *  [{route:'Order', lang:'LANG50',title:'Order', icon:<SvgIcon />}]
   * ]
   */

  const allRoutes = useMemo(() => {
    return allItem.map((branche) => {
      return branche.map((item) => {
        const { route, lang } = item
        const path = iconPath[route.toLowerCase()]
        Object.assign(item, {
          title: t(lang),
          icon: <SvgIcon fill={['#333']} path={path} size={20} />,
        })
        switch (route) {
          case 'Order':
            return { ...item, parent: t('LANG61') }
          case 'Comment':
            return { ...item }
          case 'Favorite':
            return { ...item }
          case 'Task':
            return { ...item }
          case 'Setting':
            return { ...item, parent: t('LANG62') }
          case 'Message':
            return { ...item }
          case 'PointsMall':
            return { ...item }
          case 'Skin':
            return { ...item }
          case 'Help':
            return { ...item, parent: t('LANG63') }
          case 'Share':
            return { ...item }
          case 'About':
            return { ...item }
        }
      })
    })
  }, [t])

  const leftIcon = useCallback((item) => {
    return (
      <Column align="center" justify="center" style={{ marginRight: 10 }}>
        {item.icon}
      </Column>
    )
  }, [])

  const onPress = useCallback(
    (route) => {
      return navigation.navigate(route)
    },
    [navigation],
  )

  return (
    <DrawerContentScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Row>
        <Avatar avatar={{ uri: `data:image/png;base64,${userInfo.headImg}` }} />
        <MyText size={14} weight="semibold">
          {username}
        </MyText>
      </Row>
      {allRoutes.map((all, index) => {
        return (
          <ShadowBox key={index} boxWidth={vw(64)} boxStyle={{ marginTop: 30 }}>
            <NavItem
              itemType="hidden"
              showItemSeparator={true}
              itemTitle={all[0].parent}
              itemStyle={routerStyles.headItemStyle}
              itemTitleStyle={routerStyles.headItemTitleStyle}
            />
            {all.map((item, i) => (
              <NavItem
                key={i}
                itemTitle={item.title}
                leftIcon={leftIcon(item)}
                onPress={() => onPress(item.route)}
                itemStyle={routerStyles.itemStyle}
                itemTitleStyle={routerStyles.itemTitleStyle}
                showItemSeparator={i !== all.length - 1 ? true : false}
              />
            ))}
          </ShadowBox>
        )
      })}
      <ShadowBox boxWidth={vw(64)} boxStyle={{ marginTop: 30 }}>
        <GHWithoutFeedback onPress={() => afterLogout()}>
          <Column style={routerStyles.signOutContainer}>
            <MyText size={16} color={ThemeColors.Red}>
              {t('LANG64')}
            </MyText>
          </Column>
        </GHWithoutFeedback>
      </ShadowBox>
    </DrawerContentScrollView>
  )
}

export { DrawerScreen }
