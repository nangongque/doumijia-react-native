import React from 'react'
import { ViewStyle } from 'react-native'
import { View, StyleSheet } from '@ui'

interface DividerProps {
  /**
   * divider height, default hairlineWidth
   */
  height?: number
  /**
   * divider color, default transparent
   */
  color?: string
  style?: ViewStyle
}

const Divider: React.FC<DividerProps> = (props) => {
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
