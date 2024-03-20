import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export default function Header() {
    const digitusImage = require('../assets/DigitusLogo.png');
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="#2A9D8F" />
                </TouchableOpacity>
                <Image source={digitusImage} />
                <TouchableOpacity>
                    <Feather name="user" size={24} color="#2A9D8F" />
                </TouchableOpacity>
            </View>
        </View>
    )
}