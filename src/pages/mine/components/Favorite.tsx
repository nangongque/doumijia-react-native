import { MyText, View } from '@ui'
import React, { useCallback } from 'react'
import { HFlatList } from 'react-native-head-tab-view'
const data = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '10' },
  { text: '11' },
  { text: '12' },
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '10' },
  { text: '11' },
  { text: '12' },
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '10' },
  { text: '11' },
  { text: '12' },
]
interface FavoriteProps {
  index: number
}

const Favorite: React.FC<FavoriteProps> = ({ index }) => {
  const renderitem = useCallback((item) => {
    return (
      <View style={{ height: 20 }}>
        <MyText>1</MyText>
      </View>
    )
  }, [])
  return (
    <HFlatList
      style={{ flex: 1 }}
      data={data}
      renderItem={renderitem}
      index={index}
    />
  )
}

export { Favorite }
