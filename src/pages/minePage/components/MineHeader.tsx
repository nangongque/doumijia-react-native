import React from 'react'
import { Linear, MyText } from '@ui'
import { mineStyles } from '../mineCss'

interface MineHeaderProps {}
const MineHeader: React.FC<MineHeaderProps> = React.memo(({}) => {
  return (
    <Linear style={mineStyles.surfaceGradient} colors={['#4c669f', '#3b5998']}>
      <MyText>asfdsadfds</MyText>
    </Linear>
  )
})

export { MineHeader }
