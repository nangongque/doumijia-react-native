import React, { useState, useMemo } from 'react'
import { Column, MyText, GHWithoutFeedback, StatusBar } from '@ui'
import { SetStatusBar } from '@util'
import PhoneVerification from '@features/auth/components/PhoneVerification'
import PasswordVerification from '@features/auth/components/PasswordVerification'
import { CustomStackHeader } from 'ui/header/customStackHeader'

const barProps: BarProps = {
  translucent: false,
  barStyle: 'dark-content',
}
// 登录页
const Sign = ({ navigation }) => {
  // SetStatusBar(barProps)
  const [smsMethod, toggleMethod] = useState(true)
  const { methodText, toggleText } = useMemo(() => {
    const sms = '验证码登录'
    const password = '手机密码登录'
    return {
      methodText: smsMethod ? '登录后更精彩' : '手机密码登录',
      toggleText: smsMethod ? password : sms,
    }
  }, [smsMethod])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('home')
      // setBarStyle('dark-content')
      StatusBar.setBarStyle('dark-content', true)
    })

    return unsubscribe
  }, [navigation])
  const switchMethod = () => {
    // layoutRef.current.animateNextTransition()
    toggleMethod((c) => !c)
  }
  return (
    <Column style={{ flex: 1 }} align="center">
      <StatusBar
        StatusBarAnimation="fade"
        translucent={true}
        // backgroundColor="#ce3d3a"
        // barStyle="dark-content"
      />
      <CustomStackHeader
        renderRight={() => (
          <GHWithoutFeedback onPress={switchMethod}>
            <MyText size={16} style={{ marginRight: 20 }} color="grey">
              {toggleText}
            </MyText>
          </GHWithoutFeedback>
        )}
      />

      <MyText
        size={24}
        weight="semibold"
        style={{ marginTop: 45, marginBottom: 60 }}
      >
        {methodText}
      </MyText>
      {smsMethod ? <PhoneVerification /> : <PasswordVerification />}
    </Column>
  )
}

export { Sign }
