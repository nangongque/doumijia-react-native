import React from 'react'
import { View, Text, Button } from 'react-native'
// 市集
const Market = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MarketScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

export { Market }
