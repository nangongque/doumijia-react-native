import React from 'react'
import { ViewStyle } from 'react-native'
import { LinearGradient } from '@ui'

interface LinearProps {
  start?: { x: any; y: any }
  end?: { x: any; y: any }
  colors?: any
  style?: ViewStyle
  children: React.ReactNode
}

const Linear: React.FC<LinearProps> = ({
  start = { x: 0, y: 0 },
  end = { x: 0.5, y: 1 },
  colors,
  style,
  children,
}) => {
  return (
    <LinearGradient start={start} end={end} colors={colors} style={style}>
      {children}
    </LinearGradient>
  )
}

export default Linear
