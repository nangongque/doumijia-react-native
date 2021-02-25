import React from 'react'
import { isiOS } from '@util'
import { View, Text, Button } from '@ui'
import { setStatusBar } from '@util'
// 好友
const FriendScreen = ({ navigation }) => {
  if (!isiOS) setStatusBar('light-content')
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
