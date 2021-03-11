import React from 'react'
import { Form, Column, Divider, MyText } from '@ui'
import { useDispatch } from '@hooks'
import { FormProvider } from '@contexts/form'
import AgreementPolicy from './AgreementPolicy'

const PasswordVerification = () => {
  const dispatch = useDispatch()
  const onSubmit = (data: SignInSmsParam) => {
    console.log({ data })
  }
  return (
    <FormProvider>
      <Column>
        <Form.PhoneInput
          name="phone"
          textinputStyle={{
            fontSize: 20,
          }}
        />
        <Divider height={1} color="#DEDEE3" />
        <Divider height={15} />
        <Form.PasswordInput name="password" />
        <Divider height={1} color="#DEDEE3" />
        {/* <MyText style={{ marginTop: 20, marginBottom: 36 }}>
          登录注册代表同意《用户协议》《隐私政策》
        </MyText> */}
        <AgreementPolicy style={{ marginTop: 20, marginBottom: 36 }} />
        <Form.SubmitButton onSubmit={onSubmit} title="同意协议并登录" />
      </Column>
    </FormProvider>
  )
}

export default PasswordVerification
