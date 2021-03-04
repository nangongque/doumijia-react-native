import React from 'react'
import { isiOS } from '@util'
import { View, Text, Button } from '@ui'
import { setStatusBar, statusBarHeight } from '@util'
// 首页
const HomeScreen = ({ navigation }) => {
  if (!isiOS) setStatusBar('dark-content')
  return (
    <View style={{ paddingTop: statusBarHeight }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TabNav')}
      />
    </View>
  )
}

export { HomeScreen }
