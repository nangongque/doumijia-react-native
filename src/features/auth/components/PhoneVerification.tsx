import React, { useCallback } from 'react'
import { Form, Divider, MyText } from '@ui'
import { FormProvider } from '@contexts'
import { useDispatch } from '@hooks'

const PhoneVerification = () => {
  const dispatch = useDispatch()
  const sendToken = useCallback((phone) => {
    // console.log({ phone })
    // dispatch(console.log({ phone }))
  }, [])
  const onSubmit = (data: SignInSmsParam) => {
    console.log({ data })
  }

  return (
    <FormProvider>
      <Form.PhoneInput name="phone" textinputStyle={{ fontSize: 20 }} />
      <Divider height={1} color="#DEDEE3" />
      <Divider height={15} />
      <Form.TokenInput
        sendToken={sendToken}
        for="phone"
        textinputStyle={{ fontSize: 20 }}
      />
      <Divider height={1} color="#DEDEE3" />
      <MyText style={{ marginTop: 20, marginBottom: 36 }}>
        登录注册代表同意《用户协议》《隐私政策》
      </MyText>
      <Form.SubmitButton onSubmit={onSubmit} title="同意协议并登录" />
    </FormProvider>
  )
}

export default PhoneVerification
