import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function First({ navigation }) {
    const digitusImage = require('../../assets/DigitusLogo.png');
    const firstImage = require('../../assets/first.png');
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={digitusImage} />
            <Image
                style={styles.avatar}
                source={firstImage} />
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Enim ad minim</Text>
                <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Entypo name="dots-three-horizontal" size={50} color="#EAECF3" />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Second')}>
                    <Text style={styles.buttonText}>İleri</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'#fff',
        justifyContent: 'center',
    },
    avatar: {
        marginBottom: 25,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 300
    },
    heading: {
        fontSize: 30,
        color: '#048345',
        marginBottom:5,
    },
    paragraph: {
        fontSize: 15,
        color: '#333',
        lineHeight: 25,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff'
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#64B48E',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems:'center'
    },
})