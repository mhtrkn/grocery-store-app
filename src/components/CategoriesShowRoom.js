import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { categoriesShowRoom } from '../constants'
import { Image } from 'react-native';
import SectionHeader from './SectionHeader';

const ShowRoom = ({ photo, title }) => (
    <View View style={styles.ShowRoomInsider} >
        <View style={styles.ShowRoom}>
            <Image source={photo} style={styles.ShowRoomImage} />
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
            <SectionHeader title={"Categories"} buttonName={"See All"} onPress={handleRoute} />
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
        paddingBottom: '2%'
    },
    ShowRoomContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ShowRoomInsider: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ShowRoomImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    ShowRoom: {
        width: 75,
        height: 75,
        borderRadius: 10,
        backgroundColor: '#E7F6EF',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
    }
})