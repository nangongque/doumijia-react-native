import React from 'react'
import { Column, ScrollView } from '@ui'
import { MineHeader } from './components/MineHeader'
import { MineCenter } from './components/MineCenter'
import { MineBottom } from './components/MineBottom'
// 我的
const MineScreen = ({ navigation }) => {
  return (
    <Column style={{ flex: 1 }}>
      <MineHeader />
      {/* <MineCenter /> */}
      {/* <MineBottom /> */}
    </Column>
  )
}

export { MineScreen }
