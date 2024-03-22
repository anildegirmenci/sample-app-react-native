import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const cards = [
    {
        id: 1,
        image: require('../assets/womanworker.png'),
        header: 'Emin ad minim',
        buttonText: 'Duis aute',
        date: ['21.05.20'],
        likes: 1058
    },
    {
        id: 2,
        image: require('../assets/factory.png'),
        header: 'Emin ad minim',
        buttonText: 'Duis aute',
        date: ['21.06.20'],
        likes: 1021
    },
    {
        id: 3,
        image: require('../assets/womanworker.png'),
        header: 'Emin ad minim',
        buttonText: 'Duis aute',
        date: ['21.05.20'],
        likes: 1058
    },
]

export default function Content() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            {cards.map((card) => (
                <View key={card.id} style={styles.container}>
                    <View style={styles.imgContainer}>
                        <Image source={card.image} style={styles.mainImage} />
                    </View>
                    <Text style={styles.heading}>{card.header}</Text>
                    <View style={styles.group}>
                        <View style={styles.buttonView}>
                        <TouchableOpacity onPress={()=> navigation.navigate('NextScreen')}>
                            <Text style={styles.buttonText}>{card.buttonText}</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.calendar}>
                            <Feather style={styles.groupText} name="calendar" size={24} color="black" />
                            <Text style={styles.groupText}>{card.date}</Text>
                        </View>
                        <View style={styles.heartContainer}>
                            <Text style={styles.heart}>{card.likes}</Text>
                            <TouchableOpacity>
                                <AntDesign name="hearto" size={24} color={'#FF6767'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex', 
        marginBottom: 30,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: .8,
        shadowRadius: 5,
        elevation: 3,
        borderRadius:10,
        paddingBottom:10,
        paddingLeft:5,
        paddingRight:5
    },
    mainImage:{
        marginBottom: 10,
        width:375,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    imgContainer:{
        alignItems: 'center'
    },
    heading:{
        fontSize:23,
        color:'#048345',
        marginBottom:10,
        fontWeight:'400'
    },
    buttonView:{
        justifyContent: 'center',
        alignItems:'center',
        width:120,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#B9CBC0'
    },
    buttonText:{
        color:'#048345'
    },   
    group:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginLeft: 10, 
        marginRight: 10
    },
    calendar:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems:'center'
    },
    groupText:{
        fontSize:15,
        fontWeight:'400',
        color:'#999EB9',
        marginLeft: 1,
    },
    heartContainer:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    heart:{
        color:'#FF6767',
        marginRight:2,

    }
})