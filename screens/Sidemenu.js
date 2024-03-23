import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>Sidebar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  innerText:{
    fontSize:20,
    color:'#64B48E'
  }
})