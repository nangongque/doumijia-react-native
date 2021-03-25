import React from 'react'
import { Column, HeadTabView, ScrollView } from '@ui'
import { MineHeader } from './components/MineHeader'
import { MineCenter } from './components/MineCenter'
import { MineBottom } from './components/MineBottom'
import { SetStatusBar } from '@util'
import { Favorite } from './components/Favorite'
import { Liked } from './components/Liked'
const barProps: BarProps = {
  translucent: false,
  barStyle: 'light-content',
}
const routes = [
  { key: 'Favorite', title: '收藏' },
  { key: 'Liked', title: '赞过' },
]
// 我的
const Mine = ({ navigation }) => {
  SetStatusBar(barProps)

  const renderHeader = () => {
    return <MineHeader />
  }
  const renderScene = (e) => {
    const { route } = e

    if (route.key === 'Favorite') {
      return <Favorite index={1} />
    } else if (route.key === 'Liked') {
      return <Liked index={2} />
    }
    return null
  }

  return (
    <Column style={{ flex: 1 }}>
      {/* <MineHeader /> */}
      {/* <MineCenter /> */}
      {/* <MineBottom /> */}
      <HeadTabView
        routes={routes}
        renderScrollHeader={renderHeader}
        renderScene={renderScene}
      />
    </Column>
  )
}

export { Mine }
