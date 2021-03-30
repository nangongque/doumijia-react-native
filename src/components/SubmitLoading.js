import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { Loading, Column } from '@ui'
import Modal from 'react-native-modal'
import { componentsStyles } from './css'

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
        <Loading text={text} />
      </Column>
    </Modal>
  )
})

export default SubmitLoading
