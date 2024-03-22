import { View, Image } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native';

function Header() {
    const windowWidth = Dimensions.get('window').width;
    const digitusImage = require('../assets/DigitusLogo.png');
    return (
        <View style={{ backgroundColor: '#fff',width:windowWidth }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginRight:140}}>
                <Image source={digitusImage} style={{height:40}} />
            </View>
        </View>
    )
}
export default Header;