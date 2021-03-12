import React from 'react'
import { View, Text, Button } from 'react-native'
// 社区
const Community = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CommunityScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export { Community }
