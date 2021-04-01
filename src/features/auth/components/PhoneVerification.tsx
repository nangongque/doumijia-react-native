import React, { useCallback, useRef } from 'react'
import { Form, Divider, Column } from '@ui'
import { FormProvider } from '@contexts/form'
import AgreementPolicy from './AgreementPolicy'
import SubmitLoading from '@components/SubmitLoading'
import { fetchToken, signInWithSms } from '@actions/user_action'
import { useLocale } from '@contexts/locale'

const PhoneVerification = () => {
  const { t } = useLocale()
  const ref = useRef<any>()
  const sendToken = useCallback((phone) => {
    ref.current.show('正在获取验证码')
    fetchToken({ phone }, ref.current.hide())
  }, [])
  const onSubmit = (data: SignInSmsParam) => {
    ref.current.show('正在登录...')
    signInWithSms(data, ref.current.hide())
  }

  return (
    <FormProvider>
      <Column>
        <Form.PhoneInput name="phone" />
        <Divider height={1} color="#DEDEE3" />
        <Divider height={15} />
        <Form.TokenInput sendToken={sendToken} for="phone" />
        <Divider height={1} color="#DEDEE3" />
        <AgreementPolicy style={{ marginTop: 20, marginBottom: 36 }} />
        <Form.SubmitButton onSubmit={onSubmit} title={t('LANG14')} />
        <SubmitLoading ref={ref} />
      </Column>
    </FormProvider>
  )
}

export default PhoneVerification
