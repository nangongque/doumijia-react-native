import React from 'react'
import {
  Avatar,
  Column,
  MyText,
  Row,
  Image,
  SvgIcon,
  Divider,
  GHWithoutFeedback,
} from '@ui'
import { mineStyles } from '../mineCss'
import * as iconPath from '../../../source/svg'
import { deviceWidth, px2Dp } from '@util'
import { ThemeColors } from 'ui/theme'
import { useSelector, useNavigation } from '@hooks'
import { BlurView } from '@react-native-community/blur'
import { CustomStackHeader } from 'ui/header/customStackHeader'
const ACTIONS = ['关 注', '粉 丝', '积 分']

interface MineHeaderProps {}
const MineHeader: React.FC<MineHeaderProps> = React.memo(({}) => {
  const navigation = useNavigation()
  const userInfo = useSelector((state) => state.UserReducer.userInfo)

  const { username, doumiNo, signature } = userInfo
  return (
    <Column
      style={{
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: px2Dp(40),
      }}
    >
      <Image
        source={require('@source/images/bbb.jpg')}
        style={{
          width: deviceWidth,
          height: (deviceWidth * 813) / 1080,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: deviceWidth,
          height: (deviceWidth * 813) / 1080,
        }}
        blurType="light"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      <CustomStackHeader
        containerStyle={{
          width: deviceWidth - px2Dp(80),
        }}
        renderLeft={() => {
          return (
            <GHWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <SvgIcon
                fill={[ThemeColors.White]}
                path={iconPath.category}
                size={20}
              />
            </GHWithoutFeedback>
          )
        }}
        renderRight={() => {
          return (
            <Row>
              <GHWithoutFeedback onPress={() => navigation.navigate('Setting')}>
                <SvgIcon
                  fill={[ThemeColors.White]}
                  path={iconPath.setting}
                  size={20}
                  style={{ marginRight: px2Dp(30) }}
                />
              </GHWithoutFeedback>
              <GHWithoutFeedback>
                <SvgIcon
                  fill={[ThemeColors.White]}
                  path={iconPath.share}
                  size={20}
                />
              </GHWithoutFeedback>
            </Row>
          )
        }}
      />
      {/* <GHWithoutFeedback> */}
      <Column
        style={{
          position: 'absolute',
          right: px2Dp(40),
          top: 110,
          width: px2Dp(50),
          backgroundColor: ThemeColors.LightGrey,
          paddingVertical: 5,
        }}
      >
        <MyText color={ThemeColors.White} size={15} weight="medium">
          已签到
        </MyText>
      </Column>
      {/* <MyText>签到</MyText> */}
      {/* </GHWithoutFeedback> */}
      <Row style={{ marginTop: 15 }}>
        <Avatar size={px2Dp(120)} />
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
        style={{ marginVertical: 25 }}
      >
        {signature}
      </MyText>
      <Row justify="space-between" style={{ width: deviceWidth - px2Dp(80) }}>
        <Row
          style={{ width: px2Dp(240), marginBottom: 24 }}
          justify="space-between"
        >
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
        <GHWithoutFeedback onPress={() => navigation.navigate('EditInfo')}>
          <MyText
            color={ThemeColors.White}
            weight="medium"
            style={{
              borderWidth: 1,
              borderColor: ThemeColors.White,
              paddingHorizontal: px2Dp(16),
              paddingVertical: px2Dp(6),
              borderRadius: px2Dp(24),
            }}
          >
            编辑资料
          </MyText>
        </GHWithoutFeedback>
      </Row>
    </Column>
  )
})

export { MineHeader }
