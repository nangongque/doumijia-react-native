/**
 * 编辑资料
 * changed by lijianpo on 2021/04/01
 */
import React, { useMemo, useCallback } from 'react'
import { useSelector } from '@hooks'
import { useLocale } from '@contexts/locale'
import { Column, MyStatusBar, MyText, NavItem, CustomStackHeader } from '@ui'
import { MineAvatar } from './components/MineAvatar'

const ITEMS = [
  { route: 'EditName' },
  { route: 'DoumiNo' },
  { route: 'Sex' },
  { route: 'Birthday' },
  { route: 'Area' },
  { route: 'PersonalProfile' },
  { route: 'ShippingAddress' },
  { route: 'BackgroundImage' },
]
const EditInfo = ({ navigation }) => {
  const { t } = useLocale()
  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  const routes = useMemo(() => {
    const { username, doumiNo, sex, birthday, area } = userInfo
    const items = ITEMS.map((item) => {
      const { route } = item
      switch (route) {
        case 'EditName':
          return { ...item, title: t('LANG34'), rightTitle: username }
        case 'DoumiNo':
          return { ...item, title: t('LANG35'), rightTitle: doumiNo }
        case 'Sex':
          return {
            ...item,
            title: t('LANG36'),
            rightTitle: sex === 0 ? t('LANG42') : t('LANG43'),
          }
        case 'Birthday':
          return { ...item, title: t('LANG37'), rightTitle: birthday }
        case 'Area':
          return { ...item, title: t('LANG38'), rightTitle: area }
        case 'PersonalProfile':
          return { ...item, title: t('LANG39'), rightTitle: area }
        case 'ShippingAddress':
          return { ...item, title: t('LANG40'), rightTitle: area }
        case 'BackgroundImage':
          return { ...item, title: t('LANG41'), rightTitle: area }
      }
      return item
    })
    return items
  }, [t, userInfo])

  const rightExtraTitle = useCallback((rightTitle) => {
    return (
      <MyText size={16} color="#222" style={{ marginRight: 10 }}>
        {rightTitle}
      </MyText>
    )
  }, [])

  const onPress = useCallback(
    (route) => {
      if (route === 'DoumiNo') return
      return navigation.navigate(route)
    },
    [navigation],
  )

  return (
    <Column style={{ flex: 1, backgroundColor: 'white' }}>
      <MyStatusBar isDarkStyle={true} />
      <CustomStackHeader title={t('LANG29')} />
      <MineAvatar />
      {routes.map((item, index) => {
        const { title, route, rightTitle } = item
        return (
          <NavItem
            key={index}
            itemTitle={title}
            showItemSeparator={true}
            rightExtraTitle={rightExtraTitle(rightTitle)}
            onPress={() => onPress(route)}
          />
        )
      })}
    </Column>
  )
}

export { EditInfo }
