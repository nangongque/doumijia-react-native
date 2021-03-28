import { MyText } from '@ui'
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
]
interface LikedProps {
  index: number
}

const Liked: React.FC<LikedProps> = ({ index }) => {
  const renderitem = useCallback((item) => {
    return <MyText>1</MyText>
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

export { Liked }
