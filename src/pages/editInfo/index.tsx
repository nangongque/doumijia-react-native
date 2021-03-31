import React, { useMemo, useCallback } from 'react'
import { Avatar, Column, MyStatusBar, MyText, NavItem, Icon } from '@ui'
import { CustomStackHeader } from 'ui/header/customStackHeader'
import { adaptiveWidth } from '@util'
import { editInfoStyle } from './css'
import { ThemeColors } from 'ui/theme'
import { useSelector } from '@hooks'

/**
 * 编辑资料
 * @param param0
 * @returns
 */

const ITEMS = [
  {
    title: '昵称',
    route: 'UserName',
  },
  {
    title: '豆米号',
    route: 'DoumiNo',
  },
  {
    title: '性别',
    route: 'Sex',
  },
  {
    title: '生日',
    route: 'Birthday',
  },
  {
    title: '地区',
    route: 'Area',
  },
  {
    title: '背景图',
    route: '',
  },
  {
    title: '收获地址',
    route: '',
  },
]
const EditInfo = ({ navigation }) => {
  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  const routes = useMemo(() => {
    const { username, doumiNo, sex, birthday, area } = userInfo
    const items = ITEMS.map((item) => {
      const { route } = item
      switch (route) {
        case 'UserName':
          return { ...item, rightTitle: username }
        case 'DoumiNo':
          return { ...item, rightTitle: doumiNo }
        case 'Sex':
          return { ...item, rightTitle: sex === 0 ? '男' : '女' }
        case 'Birthday':
          return { ...item, rightTitle: birthday }
        case 'Area':
          return { ...item, rightTitle: area }
      }
      return item
    })
    return items
  }, [userInfo])

  const rightExtraTitle = useCallback((rightTitle) => {
    return (
      <MyText size={16} color="grey" style={{ marginRight: 10 }}>
        {rightTitle}
      </MyText>
    )
  }, [])

  const onPress = useCallback(() => {
    return navigation.navigate('EditName')
  }, [])
  return (
    <Column style={{ flex: 1, backgroundColor: 'white' }}>
      <MyStatusBar isDarkStyle={true} />
      <CustomStackHeader title="编辑资料" />
      <Column style={{ alignSelf: 'center', marginTop: 30 }}>
        <Avatar size={adaptiveWidth(200)} style={editInfoStyle.avatar} />
        <Column align="center" justify="center" style={editInfoStyle.camera}>
          <Icon name="camera" size={16} color={ThemeColors.White} />
        </Column>
      </Column>
      {routes.map((route, index) => (
        <NavItem
          key={index}
          itemTitle={route.title}
          showItemSeparator={true}
          rightExtraTitle={rightExtraTitle(route.rightTitle)}
          onPress={onPress}
        />
      ))}
    </Column>
  )
}

export { EditInfo }
