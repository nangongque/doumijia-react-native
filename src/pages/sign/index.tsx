import React, { useState, useMemo } from 'react'
import { Column, MyText, GHWithoutFeedback, MyStatusBar } from '@ui'
import PhoneVerification from '@features/auth/components/PhoneVerification'
import PasswordVerification from '@features/auth/components/PasswordVerification'
import { CustomStackHeader } from 'ui/header/customStackHeader'
import { adaptiveFont } from '@util'

// 登录页
const SignIn = ({ navigation }) => {
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
    <Column style={{ flex: 1 }} align="center">
      <MyStatusBar isDarkStyle={true} />
      <CustomStackHeader
        renderRight={() => (
          <GHWithoutFeedback onPress={switchMethod}>
            <MyText
              color="grey"
              size={adaptiveFont(14)}
              style={{ marginRight: 20 }}
            >
              {toggleText}
            </MyText>
          </GHWithoutFeedback>
        )}
      />

      <MyText
        weight="semibold"
        size={adaptiveFont(24)}
        style={{ marginTop: 45, marginBottom: 60 }}
      >
        {methodText}
      </MyText>
      {smsMethod ? <PhoneVerification /> : <PasswordVerification />}
    </Column>
  )
}

export { SignIn }
