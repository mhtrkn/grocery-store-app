import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionHeader from './SectionHeader'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

const Deals = () => {
    const navigation = useNavigation()
    const handleRoute = () => {
        navigation.navigate('Deals Screen')
    }
    return (
        <View style={styles.container}>
            <SectionHeader title={"Deals"} buttonName={"See All"} onPress={handleRoute} />
            <View style={styles.bannerContainer}>
                <Image style={styles.banner} source={require("../../assets/food-deal.jpg")} />
            </View>
        </View>
    )
}

export default Deals

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '7%',
        paddingVertical: '5%'
    },
    bannerContainer: {
        marginTop: 6,
        width: '100%',
        height: 160,
        borderRadius: 10,
        backgroundColor: '#E7F6EF',
        overflow: 'hidden'
    },
    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
})