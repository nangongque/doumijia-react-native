import React, { useCallback, useRef } from 'react'
import { Form, Divider, MyText, Column } from '@ui'
import { fetchToken, signInWithSms } from '@actions/user_action'
import { FormProvider } from '@contexts/form'
import SubmitLoading from '@components/SubmitLoading'
import AgreementPolicy from './AgreementPolicy'

const PhoneVerification = () => {
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
        {/* <MyText style={{ marginTop: 20, marginBottom: 36 }}>
          登录注册代表同意《用户协议》《隐私政策》
        </MyText> */}
        <AgreementPolicy style={{ marginTop: 20, marginBottom: 36 }} />
        <Form.SubmitButton onSubmit={onSubmit} title="同意协议并登录" />
        <SubmitLoading ref={ref} />
      </Column>
    </FormProvider>
  )
}

export default PhoneVerification
