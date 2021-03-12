import React from 'react'
import { Column, ScrollView } from '@ui'
import { MineHeader } from './components/MineHeader'
import { MineCenter } from './components/MineCenter'
import { MineBottom } from './components/MineBottom'
import { SetStatusBar } from '@util'
const barProps: BarProps = {
  translucent: false,
  barStyle: 'light-content',
}

// 我的
const Mine = ({ navigation }) => {
  SetStatusBar(barProps)
  return (
    <Column style={{ flex: 1 }}>
      <MineHeader />
      {/* <MineCenter /> */}
      {/* <MineBottom /> */}
    </Column>
  )
}

export { Mine }
