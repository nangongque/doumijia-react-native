import React from 'react'
import { ViewStyle } from 'react-native'
import { View, StyleSheet } from '@ui'

type Props = DividerProps & {
  style?: ViewStyle
}

const Divider: React.FC<Props> = (props) => {
  const {
    height = StyleSheet.hairlineWidth,
    color = 'transparent',
    style,
  } = props
  return (
    <View
      style={StyleSheet.flatten([{ height, backgroundColor: color }, style])}
    />
  )
}

export default Divider
