import React from 'react'
import {
  ImageBackground,
  Avatar,
  Column,
  GHOpacity,
  Linear,
  MyText,
  Row,
  Divider,
} from '@ui'
import { mineStyles } from '../mineCss'
import { deviceWidth, hexToRgb, px2Dp } from '@util'
import { ThemeColors } from 'ui/theme'
import { useSelector } from '@hooks'
const ACTIONS = ['关 注', '粉 丝', '积 分']

interface MineHeaderProps {}
const MineHeader: React.FC<MineHeaderProps> = React.memo(({}) => {
  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  console.log({ userInfo })
  const { username, doumiNo, signature } = userInfo
  return (
    <ImageBackground
      source={require('@source/images/ic_default_background.png')}
      style={{
        width: deviceWidth,
        height: (deviceWidth * 886) / 1125,
        alignItems: 'flex-start',
        paddingHorizontal: px2Dp(40),
        paddingTop: px2Dp(120),
      }}
    >
      <Row>
        <Avatar size={px2Dp(160)} />
        <Column style={{ marginLeft: px2Dp(20) }}>
          <Row>
            <MyText color={ThemeColors.White} size={20} weight="semibold">
              {username}
            </MyText>
          </Row>
          <MyText size={11} color={ThemeColors.WhiteSmoke}>
            豆米号：{doumiNo}
          </MyText>
          <Divider height={20} />
        </Column>
      </Row>
      <MyText
        size={14}
        color={ThemeColors.White}
        style={{ marginVertical: 30 }}
      >
        {signature}
      </MyText>
      <Row style={{ width: px2Dp(240) }} justify="space-between">
        {ACTIONS.map((item, index) => (
          <Column key={index}>
            <MyText size={15} color={ThemeColors.White} weight="semibold">
              5
            </MyText>
            <MyText size={11} color={ThemeColors.WhiteSmoke}>
              {item}
            </MyText>
          </Column>
        ))}
      </Row>
    </ImageBackground>
  )
})

export { MineHeader }
