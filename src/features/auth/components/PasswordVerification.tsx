import React from 'react'
import { Form, Column, Divider } from '@ui'
import { FormProvider } from '@contexts/form'
import AgreementPolicy from './AgreementPolicy'

const PasswordVerification = () => {
  const onSubmit = (data: SignInSmsParam) => {
    // console.log({ data })
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
        <AgreementPolicy style={{ marginTop: 20, marginBottom: 36 }} />
        <Form.SubmitButton onSubmit={onSubmit} title="同意协议并登录" />
      </Column>
    </FormProvider>
  )
}

export default PasswordVerification
