import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Header, ShippingAddress, OrderSummary, BottomContainer } from '../../components'

export default function Cart() {

    return (
        <View style={styles.container}>
            <Header route={"Favorites"} cancelRoute />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F5F5',
        position: 'relative'
    },
    loader: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insider: {
        paddingVertical: '5%',
        justifyContent: 'center',
        gap: 24,
        width: '100%',
    },
    routeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#04AC66',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .2,
        shadowRadius: 10,
    },
    totalContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: .35,
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalPriceText: {
        fontSize: 24,
        fontWeight: 700,
        color: '#04AC66'
    },
    scrollContainer: {
        width: '100%',
        position: 'relative',
    },
    addText: {
        fontSize: 18,
        fontWeight: 800,
        color: 'white'
    },
    addBtn: {
        flexGrow: .4,
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#04AC66',
    },
})