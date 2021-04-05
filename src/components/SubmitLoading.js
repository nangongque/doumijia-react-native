import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { Loading, Column, MyText } from '@ui'
import { ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'
import { componentsStyles } from './css'
import { ThemeColors } from 'ui/theme'

const SubmitLoading = forwardRef((props, ref) => {
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    show: (value) => {
      setVisible(true)
      setText(value)
    },
    hide: () => setVisible(false),
  }))
  return (
    <Modal
      isVisible={visible}
      backdropTransitionOutTiming={0}
      hasBackdrop={false}
    >
      <Column style={componentsStyles.submitLoading}>
        <ActivityIndicator size="large" color={ThemeColors.Default} />
        <MyText size={14} color={ThemeColors.Default}>
          {text}
        </MyText>
      </Column>
    </Modal>
  )
})

export default SubmitLoading
