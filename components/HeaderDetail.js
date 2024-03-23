import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native';

function Header() {
    const windowWidth = Dimensions.get('window').width;
    const digitusImage = require('../assets/DigitusLogo.png');
    return (
        <View style={{ backgroundColor: '#fff',width:windowWidth }}>
            <View style={styles.container}>
                <Image source={digitusImage} style={{height:40}} />
            </View>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight:140
    }
})