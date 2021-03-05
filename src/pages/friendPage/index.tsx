import React from 'react'
import { View, Text, Button } from '@ui'
import { SetStatusBar } from '@util'
const barProps: BarProps = {
  translucent: true,
  barStyle: 'light-content',
}
// 好友
const FriendScreen = ({ navigation }) => {
  SetStatusBar(barProps)
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text>FriendScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export { FriendScreen }
