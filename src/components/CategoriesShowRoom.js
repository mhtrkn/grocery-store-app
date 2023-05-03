import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { categoriesShowRoom } from '../constants'
import { Image } from 'react-native';

const ShowRoom = ({ photo, title }) => (
    <View View style={styles.ShowRoomInsider} >
        <View style={styles.ShowRoom}>
            <Image source={{ uri: (photo) }} style={styles.ShowRoomImage} />
        </View>
        <Text style={styles.showRoomTitle}>{title}</Text>
    </View>
)

const CategoriesShowRoom = () => {
    const navigation = useNavigation()
    const handleRoute = () => {
        navigation.navigate('Categories')
    }
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.headerText}>Categories</Text>
                <TouchableOpacity onPress={handleRoute} style={styles.seeAllContainer}>
                    <Text style={styles.seeAll}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ShowRoomContainer}>
                {categoriesShowRoom && categoriesShowRoom.map((item) => {
                    return (
                        <ShowRoom key={item.id} photo={item.photo} title={item.title} />
                    )
                })}
            </View>
        </View>
    )
}

export default CategoriesShowRoom

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '7%',
    },
    headerText: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 700
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    seeAllContainer: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 4
    },
    seeAll: {
        fontWeight: 600,
        fontSize: 14,
        color: '#04AC66'
    },
    ShowRoomContainer: {
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ShowRoomInsider: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ShowRoomImage: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    ShowRoom: {
        width: 75,
        height: 75,
        borderRadius: 10,
        backgroundColor: '#E2F1E8',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
    }
})