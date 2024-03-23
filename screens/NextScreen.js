import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function NextScreen() {
  const chemImg = require('../assets/chem.png')
  return (
    <ScrollView style={styles.container}>
      <Image source={chemImg} style={styles.mainImage} />
      <View style={styles.textContainer}>
        <View style={styles.innerTextContainer}>
          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.buttonText}>Duis aute</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 5,
  },
  textContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 999,
    backgroundColor: '#fff',
    top: -30
  },
  innerTextContainer: {
    marginTop: 60,
    marginLeft: 20,
  },
  mainImage: {
    marginBottom: 10,
    width: 400,
    zIndex: 1
  },
  paragraph: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
    color: '#333',
    lineHeight: 25,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#B9CBC0'
  },
  buttonText: {
    color: '#048345'
  },



})