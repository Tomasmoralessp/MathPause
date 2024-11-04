import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Flex = () => {
  return (
    <View
      style={[styles.container]}>
      <Text style={[styles.headline]}> 🧀</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#1f1f1f'
  },
  headline: {
    color: 'white',
    fontSize: 80
  }
})

export default Flex
