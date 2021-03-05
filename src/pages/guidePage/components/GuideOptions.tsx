import React from 'react'
import { Column, Row, MyText, GHNativeFeedback, SvgIcon, StyleSheet } from '@ui'
import * as iconPath from '../../../source/svg'
import { deviceWidth } from '@util'
import { useNavigation } from '@hooks'
const buttonWidth = deviceWidth - 60
const buttonHeight = buttonWidth / 9

interface GuideOptionsProps {}
const GuideOptions: React.FC<GuideOptionsProps> = React.memo(({}) => {
  const navigation = useNavigation()

  return (
    <Column
      style={{ position: 'absolute', width: deviceWidth, bottom: 100 }}
      align="center"
    >
      <GHNativeFeedback onPress={() => console.log('暂未开饭')}>
        <Row style={styles.button} justify="center">
          <SvgIcon
            fill={['#00BA2A']}
            path={iconPath.weChat}
            size={buttonHeight / 2}
          />
          <MyText style={{ marginLeft: 8 }} size={14}>
            微信登录
          </MyText>
        </Row>
      </GHNativeFeedback>
      <GHNativeFeedback onPress={() => navigation.navigate('Login')}>
        <Row
          style={[styles.button, { backgroundColor: '#D3D3D3', marginTop: 10 }]}
          justify="center"
        >
          <SvgIcon
            fill={['#fff']}
            path={iconPath.phone}
            size={buttonHeight / 2}
          />
          <MyText style={{ marginLeft: 8 }} size={14}>
            手机登录
          </MyText>
        </Row>
      </GHNativeFeedback>
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
