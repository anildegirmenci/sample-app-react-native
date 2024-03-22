import { View, Text } from 'react-native'
import React from 'react'
import Story from '../components/Story'
import Header from '../components/Header'
import Content from '../components/Content'

export default function Home() {
  return (
    <View style={{marginTop:25, display:'flex',justifyContent: 'center',alignContent:'center',backgroundColor:'#EAEBEF'}} >
      <Story />
      <View style={{marginTop:10, marginLeft:10, marginRight:10, display:'flex',justifyContent: 'center',alignContent:'center'}}>
        <Content />
      </View>
    </View>
  )
}