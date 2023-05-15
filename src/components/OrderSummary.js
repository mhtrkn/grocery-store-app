import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pineapple from "../../assets/pineapple.png"
import Cabbage from "../../assets/cabbage.png"
import Watermelon from "../../assets/watermelon.png"
import { getAllCartItems, howManyCartItems } from '../utils'

const OrderSummary = () => {
    const data = getAllCartItems();

    if (data.length === 0) {
        return (
            <View style={styles.direction}>
                <Text style={styles.headerText}>Order Summary</Text>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/wishlist.png")} style={styles.nullDataimage} />
                        <Text style={styles.nullText}>
                            Your cart items will be displayed here. Start exploring to add Cart!
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.direction}>
            <Text style={styles.headerText}>Order Summary</Text>
            <View style={styles.container}>
                {data && data?.map((item, key) => {
                    return (
                        <View key={key} style={styles.itemContainer}>
                            <View style={styles.itemCountContainer}>
                                <Text style={styles.countText}>x {howManyCartItems(item)}</Text>
                            </View>
                            <View style={styles.item}>
                                <Image source={item.photo} style={styles.itemImage} />
                            </View>
                            <View style={styles.itemTextcontainer}>
                                <Text style={styles.itemHeader}>
                                    {item.title}
                                </Text>
                                <Text style={styles.itemSubtitle}>
                                    Fruit
                                </Text>
                                <Text style={styles.itemPrice}>
                                    {item.price}
                                </Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default OrderSummary


const styles = StyleSheet.create({
    direction: {
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        zIndex: 10
    },
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 12,
    },
    imageContainer: {
        width: '100%',
        gap: 20,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    nullDataimage: {
        width: '100%',
        height: '50%',
        opacity: .75,
        resizeMode: 'contain',
    },
    nullText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#444',
        textAlign: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#777',
        paddingHorizontal: '5%',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 12,
        position: 'relative',
        alignItems: 'center',
        width: '100%'
    },
    itemCountContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        width: 74,
        height: 70,
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 8,
        backgroundColor: "#E9FAEF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTextcontainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 6
    },
    itemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    itemHeader: {
        fontWeight: 700,
        fontSize: 16,
        color: '#444'
    },
    countText: {
        fontWeight: 600,
        fontSize: 20,
        color: '#444'
    },
    itemSubtitle: {
        fontWeight: 700,
        fontSize: 15,
        color: '#BBB'
    },
    itemPrice: {
        fontWeight: 700,
        fontSize: 18,
        color: '#04AC66'
    }
})