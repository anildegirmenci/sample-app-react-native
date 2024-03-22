import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';

const PROFILE_IMAGES = [
    {
        id: 1,
        image: require('../assets/food.png'),
        text: 'Günün Menüsü'
    },
    {
        id: 2,
        image: require('../assets/worker.png'),
        text: 'Bayram Kutlaması'
    },
    {
        id: 3,
        image: require('../assets/anket.png'),
        text: 'Digitus Anket'
    },
    {
        id: 4,
        image: require('../assets/container.png'),
        text: 'Duyuru ve Genelgeler'
    },
    {
        id: 5,
        image: require('../assets/hbd.png'),
        text: 'Bugün Doğanlar'
    },
    {
        id: 6,
        image: require('../assets/book.png'),
        text: 'Aramıza Katılanlar'
    },
    {
        id: 7,
        image: require('../assets/container.png'),
        text: 'Lorem'
    },
    {
        id: 8,
        image: require('../assets/worker.png'),
        text: 'Ipsum'
    },
    {
        id: 9,
        image: require('../assets/food.png'),
        text: 'Dolor'
    },
];


export default function Story() {
    return (
        <View style={{
            backgroundColor: '#fff', height: 100, paddingLeft: 10, shadowColor: '#000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: .8,
            shadowRadius: 5,
            elevation: 3,
            marginTop: 30,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {PROFILE_IMAGES.map((profileImage) => (
                    <View key={profileImage.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableOpacity>
                            <Image
                                source={profileImage.image}
                                style={{ display: 'flex', width: 50, height: 50, borderRadius: 50, marginRight: 10, borderWidth: 2, borderColor: '#2A9D8F' }}
                            />
                            <Text style={{ fontSize: 10, display: 'flex', width: 50, color: '#707070',justifyContent: 'center',alignItems:'center' }} key={profileImage.text}>{profileImage.text}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};


