import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Content() {

    const workerImg = require('../assets/womanworker.png');
    return (
        <View style={{ display: 'flex',height:300 }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={workerImg} style={{ marginBottom: 10 }} />
            </View>
            <Text>Lorem ipsum dolor</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 10 }}>
                <TouchableOpacity>
                    <Text>Lorem Ipsum</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Feather name="calendar" size={24} color="black" />
                    <Text style={{marginLeft:1}}>1058</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{marginRight:1}}>1058</Text>
                    <TouchableOpacity>
                        <AntDesign name="hearto" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}