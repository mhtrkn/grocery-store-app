import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header, FavoriteCardItem, BottomContainer } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { getAllFavorites } from '../../utils'

export default function Cart() {
    const favoriteData = getAllFavorites()
    const navigation = useNavigation()

    const handleRoute = () => {
        navigation.navigate("Home")
    }

    if (favoriteData.length === 0) {
        return (
            <View style={styles.nullDataContainer}>
                <Header route={"Favorites"} cancelRoute />
                <View style={styles.nullDataImage}>
                    <Image
                        style={{
                            width: '100%',
                            resizeMode: 'contain',
                        }}
                        source={require('../../../assets/wishlist.png')}
                    />
                </View>
                <Text style={styles.nullDataSubtitle}>
                    Your favorite items will be displayed here. Start exploring to add favorites!
                </Text>
                <TouchableOpacity onPress={handleRoute} style={styles.nullDataBttn}>
                    <Text style={styles.nullDataText}>
                        Continue Shopping
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header route={"Favorites"} cancelRoute />
            <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.containerScrollStyle}>
                {favoriteData && favoriteData.length >= 0 && (favoriteData.map((item, key) => {
                    return (
                        <FavoriteCardItem data={item} key={key} />
                    )
                }))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F5F5',
        position: 'relative',
    },
    scrollStyle: {
        width: '100%',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
    },
    containerScrollStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 24,
    },
    nullDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        gap: 24,
    },
    nullDataImage: {
        width: '60%',
        padding: '10%',
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#444',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    nullDataBttn: {
        backgroundColor: '#04AC69',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    nullDataSubtitle: {
        width: '90%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 500,
        color: '#444',
        marginTop: -24,
    },
    nullDataText: {
        fontWeight: 700,
        fontSize: 18,
        color: 'white'
    }

})