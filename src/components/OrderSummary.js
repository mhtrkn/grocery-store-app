import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pineapple from "../../assets/pineapple.png"
import Cabbage from "../../assets/cabbage.png"
import Watermelon from "../../assets/watermelon.png"

const OrderSummary = () => {
    return (
        <View style={styles.direction}>
            <Text style={styles.headerText}>Order Summary</Text>
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.itemCountContainer}>
                        <Text style={styles.countText}>x1</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={Pineapple} style={styles.itemImage} />
                    </View>
                    <View style={styles.itemTextcontainer}>
                        <Text style={styles.itemHeader}>
                            Pineapple
                        </Text>
                        <Text style={styles.itemSubtitle}>
                            Fruit
                        </Text>
                        <Text style={styles.itemPrice}>
                            $6.70
                        </Text>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <View style={styles.itemCountContainer}>
                        <Text style={styles.countText}>x2</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={Cabbage} style={styles.itemImage} />
                    </View>
                    <View style={styles.itemTextcontainer}>
                        <Text style={styles.itemHeader}>
                            Cabbage
                        </Text>
                        <Text style={styles.itemSubtitle}>
                            Vegetables
                        </Text>
                        <Text style={styles.itemPrice}>
                            $9.99
                        </Text>
                    </View>
                </View>


                <View style={styles.itemContainer}>
                    <View style={styles.itemCountContainer}>
                        <Text style={styles.countText}>x1</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={Watermelon} style={styles.itemImage} />
                    </View>
                    <View style={styles.itemTextcontainer}>
                        <Text style={styles.itemHeader}>
                            Watermelon
                        </Text>
                        <Text style={styles.itemSubtitle}>
                            Fruit
                        </Text>
                        <Text style={styles.itemPrice}>
                            $12.49
                        </Text>
                    </View>
                </View>
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
        gap: 12
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