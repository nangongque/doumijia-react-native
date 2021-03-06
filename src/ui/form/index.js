import React, { useEffect, useMemo } from 'react'

import useForm, { FormContext, useFormContext } from 'react-hook-form'
import { Row, TextInput, MyText, StyleSheet, GHWithoutFeedback } from '@ui'
import TokenButton from './TokenButton'
import { ThemeColors } from 'ui/theme'
import { deviceWidth, toastShort } from '@util'
import Button from 'ui/button'

const Provider = ({ children }) => {
  const methods = useForm()
  return <FormContext {...methods}>{children}</FormContext>
}
const BasicInput = ({
  name,
  validation,
  renderLeft,
  renderRight,
  textinputStyle,
  defaultValue,
  ...restProps
}) => {
  const { register, setValue, getValues } = useFormContext()
  const defaultValidation = { required: true }
  const ref = register({ name }, { ...defaultValidation, ...validation })

  useEffect(() => {
    setValue(name, defaultValue, true)
  }, [setValue, name, defaultValue])

  return (
    <Row>
      {renderLeft && renderLeft()}
      <TextInput
        clearButtonMode="always"
        ref={ref}
        style={[styles.textinput, textinputStyle]}
        placeholderTextColor={'#c2c2c5'}
        defaultValue={defaultValue}
        onChangeText={(text) => setValue(name, text, true)}
        underlineColorAndroid="transparent"
        selectionColor="black"
        {...restProps}
      />
      {renderRight && renderRight(getValues())}
    </Row>
  )
}

// create special input here
const phonePattern = /^1[3-9]\d{9}$/i
const phoneValidation = {
  required: {
    value: true,
    message: '手机号为空',
  },
  pattern: {
    value: phonePattern,
    message: '手机号错误',
  },
}
const PhoneInput = ({ ...props }) => {
  return (
    <BasicInput
      name="phone"
      validation={phoneValidation}
      placeholder="输入手机号码"
      keyboardType="phone-pad"
      {...props}
    />
  )
}

const TokenInput = ({ sendToken }) => {
  const { getValues, errors } = useFormContext()

  const onPress = (setStart) => {
    const data = getValues()
    if (errors.phone) {
      toastShort(errors.phone?.message || '请输入手机号')
    } else {
      setStart(true)
      sendToken(data.phone)
    }
  }
  return (
    <BasicInput
      name="token"
      placeholder="输入验证码"
      keyboardType="number-pad"
      renderRight={() => <TokenButton onPress={onPress} />}
    />
  )
}

const passwordValidation = {
  required: {
    value: true,
    message: '密码不能我空',
  },
}

const PasswordInput = () => {
  // const [isSecure, setSecure] = useState(true)
  return (
    <BasicInput
      name="password"
      placeholder="输入密码"
      secureTextEntry={true}
      validation={passwordValidation}
    />
  )
}

const SubmitButton = ({ onSubmit, ...restProps }) => {
  const { getValues, errors, watch } = useFormContext()

  const onPress = () => {
    const data = getValues()
    onSubmit(data)
  }

  const allField = watch()

  const disabled = useMemo(() => {
    const fields = Object.keys(allField)
    return (
      Object.keys(errors).length > 0 || fields.some((field) => !allField[field])
    )
  }, [errors, allField])
  return (
    <Button
      style={{ borderRadius: 30 }}
      linear
      textStyle={{ fontSize: 15 }}
      onPress={onPress}
      disabled={disabled}
      color={ThemeColors.Default}
      {...restProps}
    />
  )
}
export default {
  Provider,
  PhoneInput,
  TokenInput,
  PasswordInput,
  SubmitButton,
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#DEDEE3',
    borderBottomWidth: 1,
    paddingBottom: 0,
    height: 40,
  },
  textinput: {
    flex: 1,
    padding: 0,
    fontSize: 20,
    lineHeight: 20,
    height: 40,
    color: '#222',
  },
})
