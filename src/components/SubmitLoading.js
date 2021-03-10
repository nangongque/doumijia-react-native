import { Loading } from '@ui'
import { px2Dp } from '@util'
import React, { forwardRef, useState, useImperativeHandle } from 'react'
import Modal from 'react-native-modal'
import { View, StyleSheet } from 'react-native'
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
      <View style={styles.container}>
        <Loading text={text} />
      </View>
    </Modal>
  )
})

export default SubmitLoading

const styles = StyleSheet.create({
  container: {
    height: px2Dp(240),
    backgroundColor: '#00000080',
    borderRadius: px2Dp(20),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: px2Dp(30),
  },
})
