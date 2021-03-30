import { MyHListView, MyText, View } from '@ui'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React, { useCallback, useRef, useState, useEffect } from 'react'
import { HFlatList } from 'react-native-head-tab-view'
const Data = [
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
  indexNo: number
  isPullRefresh?: boolean
}

const Favorite: React.FC<FavoriteProps> = ({ indexNo, isPullRefresh }) => {
  const renderItem = useCallback(({ item }) => {
    return (
      <View
        style={{
          height: 20,
        }}
      >
        <MyText>{item.text}</MyText>
      </View>
    )
  }, [])
  return <MyHListView data={Data} indexNo={indexNo} renderItem={renderItem} />
}

export { Favorite }
