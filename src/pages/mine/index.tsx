import React from 'react'
import { Column, HeadTabView } from '@ui'
import { MineHeader } from './components/MineHeader'
import { Favorite } from './components/Favorite'
import { Liked } from './components/Liked'

const Mine = ({ navigation }) => {
  const [routes] = React.useState([
    { key: 'Favorite', title: '收藏' },
    { key: 'Liked', title: '赞过' },
    { key: 'Liked1', title: '关中' },
  ])

  const renderHeader = () => <MineHeader />

  const renderScene = ({ route }) => {
    if (route.key === 'Favorite') {
      return <Favorite indexNo={0} />
    } else if (route.key === 'Liked') {
      return <Liked index={1} />
    } else if (route.key === 'Liked1') {
      return <Favorite indexNo={2} />
    }
    return null
  }

  return (
    <Column style={{ flex: 1 }}>
      <HeadTabView
        routes={routes}
        renderScrollHeader={renderHeader}
        renderScene={renderScene}
        tabbarProps={{
          alignSelf: true,
          style: { borderTopLeftRadius: 15, borderTopRightRadius: 15 },
        }}
      />
    </Column>
  )
}

export { Mine }
