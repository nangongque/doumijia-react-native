import React from 'react'
import { LinearGradient } from '@ui'

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
