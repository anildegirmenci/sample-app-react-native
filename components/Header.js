import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {Dimensions} from 'react-native';



function Header() {
    const windowWidth = Dimensions.get('window').width;
    const digitusImage = require('../assets/DigitusLogo.png');
    return (
        <View style={{ backgroundColor: '#fff',width:windowWidth }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5, marginRight: 35}}>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="#2A9D8F" />
                </TouchableOpacity>
                <Image source={digitusImage} style={{height:40}} />
                <TouchableOpacity>
                    <Feather name="user" size={24} color="#2A9D8F" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;