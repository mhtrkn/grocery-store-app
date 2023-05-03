import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import SectionHeader from './SectionHeader';


const PopularItemShowRoom = () => {
    const navigation = useNavigation()
    const handleRoute = () => {
        navigation.navigate('Popular Items')
    }
    return (
        <View style={styles.container}>
            <SectionHeader title={"Popular Item"} buttonName={"See All"} onPress={handleRoute} />
        </View>
    )
}

export default PopularItemShowRoom

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
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        borderRadius: 10,
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