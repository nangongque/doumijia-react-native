import React, { useState, useMemo } from 'react'
import { Column, MyText, GHWithoutFeedback, MyStatusBar } from '@ui'
import PhoneVerification from '@features/auth/components/PhoneVerification'
import PasswordVerification from '@features/auth/components/PasswordVerification'
import { CustomStackHeader } from 'ui/header/customStackHeader'
import { adaptiveFont } from '@util'
import { useLocale } from '@contexts/locale'

// 登录页
const SignIn = ({ navigation }) => {
  const { t } = useLocale()
  const [smsMethod, toggleMethod] = useState(true)
  const { methodText, toggleText } = useMemo(() => {
    const sms = t('LANGE5')
    const password = t('LANGE6')
    return {
      methodText: smsMethod ? t('LANGE7') : t('LANGE8'),
      toggleText: smsMethod ? password : sms,
    }
  }, [t, smsMethod])

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
