import React, { useState, useMemo } from 'react'
import {
  View,
  Text,
  Button,
  Column,
  MyText,
  GHWithoutFeedback,
  Divider,
  StyleSheet,
} from '@ui'
import { deviceWidth, SetStatusBar, statusBarHeight } from '@util'
import PhoneVerification from '@features/auth/components/PhoneVerification'

const barProps: BarProps = {
  translucent: false,
  barStyle: 'dark-content',
}
// 首页
const SignPage = ({ navigation }) => {
  SetStatusBar(barProps)
  const [smsMethod, toggleMethod] = useState(true)
  const { methodText, toggleText } = useMemo(() => {
    const sms = '验证码登录'
    const password = '手机密码登录'
    return {
      methodText: smsMethod ? '登录后更精彩' : '手机密码登录',
      toggleText: smsMethod ? password : sms,
    }
  }, [smsMethod])

  const switchMethod = () => {
    // layoutRef.current.animateNextTransition()
    toggleMethod((c) => !c)
  }
  return (
    <Column style={{ flex: 1, paddingTop: 50, paddingHorizontal: 60 }}>
      <GHWithoutFeedback onPress={switchMethod}>
        <MyText size={16}>{toggleText}</MyText>
      </GHWithoutFeedback>
      <MyText
        size={24}
        weight="semibold"
        style={{ marginTop: 30, marginBottom: 60 }}
      >
        {methodText}
      </MyText>
      <PhoneVerification />
    </Column>
  )
}

export { SignPage }
