import React from 'react'
import {
  useForm,
  FormProvider as Provider,
  useFormContext,
} from 'react-hook-form'

const FormProvider = ({ children }) => {
  const methods = useForm()
  return <Provider {...methods}>{children}</Provider>
}

export { FormProvider }
