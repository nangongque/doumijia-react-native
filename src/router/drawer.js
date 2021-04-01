/**
 *
 */
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
import React, { useEffect, useMemo } from 'react'
import { ThemeColors } from 'ui/theme'
import {
  DrawerContentScrollView,
  useIsDrawerOpen,
} from '@react-navigation/drawer'
import { useLocale } from '@contexts/locale'
import * as iconPath from '../source/svg'
import ShadowBox from 'ui/shadowBox'

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
  const { userInfo } = props
  const { username } = userInfo

  useEffect(() => {
    const barStyle = isDrawerOpen ? 'dark-content' : 'light-content'
    StatusBar.setBarStyle(barStyle, true)
  }, [isDrawerOpen])

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
            return { ...item }
          case 'Comment':
            return { ...item }
          case 'Favorite':
            return { ...item }
          case 'Task':
            return { ...item }
          case 'Setting':
            return { ...item }
          case 'Message':
            return { ...item }
          case 'PointsMall':
            return { ...item }
          case 'Skin':
            return { ...item }
          case 'Help':
            return { ...item }
          case 'Share':
            return { ...item }
          case 'About':
            return { ...item }
        }
      })
    })
  }, [t])

  return (
    <DrawerContentScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Row>
        <Avatar />
        <MyText size={14} weight="semibold">
          {username}
        </MyText>
      </Row>
      {allRoutes.map((all) => {
        return (
          <ShadowBox boxWidth={240} boxStyle={{ marginTop: 30 }}>
            {all.map((item, index) => (
              <NavItem
                itemTitle={item.title}
                itemTitleStyle={{ fontSize: 14, color: '#222' }}
                showItemSeparator={index !== all.length - 1 ? true : false}
                itemStyle={{
                  width: 240,
                  paddingHorizontal: 10,
                }}
                leftIcon={
                  <Column
                    align="center"
                    justify="center"
                    style={{ marginRight: 10 }}
                  >
                    {item.icon}
                  </Column>
                }
              />
            ))}
          </ShadowBox>
        )
      })}
      <ShadowBox boxWidth={240} boxStyle={{ marginTop: 30 }}>
        <GHWithoutFeedback>
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
    </DrawerContentScrollView>
  )
}

export { DrawerScreen }
