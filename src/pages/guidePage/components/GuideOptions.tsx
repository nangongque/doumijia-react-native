import React from 'react'
import { Column, Row, MyText, GHNativeFeedback, SvgIcon, StyleSheet } from '@ui'
import * as iconPath from '../../../source/svg'
import { deviceWidth, px2Dp } from '@util'
import { useNavigation } from '@hooks'
import { ThemeColors } from 'ui/theme'
const buttonWidth = px2Dp(560)
const buttonHeight = px2Dp(80)

const third = [
  { name: 'qq', path: iconPath.qq },
  { name: 'weibo', path: iconPath.weibo },
  { name: 'apple', path: iconPath.apple },
]
interface GuideOptionsProps {}
const GuideOptions: React.FC<GuideOptionsProps> = React.memo(({}) => {
  const navigation = useNavigation()

  return (
    <Column
      style={{ position: 'absolute', width: deviceWidth, bottom: px2Dp(120) }}
      align="center"
    >
      <GHNativeFeedback onPress={() => console.log('暂未开饭')}>
        <Row style={styles.button} justify="center">
          <SvgIcon
            fill={['#00BA2A']}
            path={iconPath.weChat}
            size={buttonHeight / 2}
          />
          <MyText style={{ marginLeft: 8 }} size={14} weight="medium">
            微信登录
          </MyText>
        </Row>
      </GHNativeFeedback>
      <GHNativeFeedback onPress={() => navigation.navigate('SignIn')}>
        <Row
          style={[styles.button, { backgroundColor: '#D3D3D3', marginTop: 15 }]}
          justify="center"
        >
          <SvgIcon
            fill={['#fff']}
            path={iconPath.phone}
            size={buttonHeight / 2}
          />
          <MyText
            style={{ marginLeft: 8 }}
            size={14}
            weight="medium"
            color={ThemeColors.White}
          >
            手机号登录
          </MyText>
        </Row>
      </GHNativeFeedback>
      <Row
        style={{ width: px2Dp(500), marginVertical: px2Dp(90) }}
        justify="space-evenly"
      >
        {third.map((item, index) => (
          <Column
            key={index}
            align="center"
            justify="center"
            style={{
              width: px2Dp(80),
              height: px2Dp(80),
              backgroundColor:
                index === 2 ? ThemeColors.Black : 'rgba(0,0,0,0.6)',
              borderRadius: px2Dp(40),
            }}
          >
            <SvgIcon fill={['#fff']} path={item.path} size={px2Dp(40)} />
          </Column>
        ))}
      </Row>
      <MyText size={11} color={ThemeColors.White}>
        登录注册代表同意《用户协议》《隐私政策》
      </MyText>
    </Column>
  )
})

export { GuideOptions }

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonHeight,
    backgroundColor: 'white',
    borderRadius: buttonHeight / 2,
  },
})
