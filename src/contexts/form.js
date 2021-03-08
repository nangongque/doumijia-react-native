import React from 'react'
import useForm, { FormContext } from 'react-hook-form'

const FormProvider = ({ children }) => {
  const methods = useForm()
  return <FormContext {...methods}>{children}</FormContext>
}

export { FormProvider }
