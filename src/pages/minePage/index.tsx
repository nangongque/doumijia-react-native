import React from 'react'
import { View, Text, Button } from 'react-native'
// 我的
const MineScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MineScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export { MineScreen }
