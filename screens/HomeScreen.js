import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>I'm the HomeScreen</Text>
      <Button title="Chat" onPress={()=>navigation.navigate("Chat")}></Button>
    </View>
  )
}

export default HomeScreen